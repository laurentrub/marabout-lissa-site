 import { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import { format } from "date-fns";
 import { z } from "zod";
 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 import { Button } from "@/components/ui/button";
 import { toast } from "@/hooks/use-toast";
 import { supabase } from "@/integrations/supabase/client";
 import DateSelection from "@/components/booking/DateSelection";
 import TimeSelection from "@/components/booking/TimeSelection";
 import BookingForm, { BookingFormData } from "@/components/booking/BookingForm";
 import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
 
 interface BookingModalProps {
   isOpen: boolean;
   onClose: () => void;
   preselectedService?: string;
 }
 
 const bookingSchema = z.object({
   name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom est trop long"),
   email: z.string().trim().email("Veuillez entrer un email valide").max(255, "L'email est trop long"),
   phone: z.string().trim().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres").max(20, "Le numéro est trop long"),
   serviceType: z.string().min(1, "Veuillez sélectionner un type de consultation"),
   message: z.string().max(1000, "Le message est trop long").optional(),
 });
 
 const BookingModal = ({ isOpen, onClose, preselectedService = "" }: BookingModalProps) => {
   const navigate = useNavigate();
   const [step, setStep] = useState(1);
   const [selectedDate, setSelectedDate] = useState<Date | undefined>();
   const [selectedTime, setSelectedTime] = useState("");
   const [bookedSlots, setBookedSlots] = useState<string[]>([]);
   const [isLoadingSlots, setIsLoadingSlots] = useState(false);
   const [formData, setFormData] = useState<BookingFormData>({
     name: "",
     email: "",
     phone: "",
     serviceType: preselectedService,
     message: "",
   });
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   // Fetch booked slots when date changes
   useEffect(() => {
     const fetchBookedSlots = async () => {
       if (!selectedDate) {
         setBookedSlots([]);
         return;
       }
 
       setIsLoadingSlots(true);
       try {
          const dateStr = format(selectedDate, "yyyy-MM-dd");
          const { data, error } = await supabase.rpc("get_booked_slots", {
            p_date: dateStr,
          });

          if (error) throw error;

          const slots = data?.map((slot: { booking_time: string }) => slot.booking_time) || [];
         setBookedSlots(slots);
       } catch (error) {
         console.error("Error fetching booked slots:", error);
         setBookedSlots([]);
       } finally {
         setIsLoadingSlots(false);
       }
     };
 
     fetchBookedSlots();
   }, [selectedDate]);
 
   const resetModal = () => {
     setStep(1);
     setSelectedDate(undefined);
     setSelectedTime("");
     setBookedSlots([]);
     setFormData({
       name: "",
       email: "",
       phone: "",
       serviceType: preselectedService,
       message: "",
     });
     setErrors({});
   };
 
   const handleClose = () => {
     resetModal();
     onClose();
   };
 
   const canProceedToStep2 = !!selectedDate;
   const canProceedToStep3 = !!selectedTime;
 
   const validateForm = (): boolean => {
     try {
       bookingSchema.parse(formData);
       setErrors({});
       return true;
     } catch (error) {
       if (error instanceof z.ZodError) {
         const newErrors: Record<string, string> = {};
         error.errors.forEach((err) => {
           if (err.path[0]) {
             newErrors[err.path[0] as string] = err.message;
           }
         });
         setErrors(newErrors);
       }
       return false;
     }
   };
 
   const handleSubmit = async () => {
     if (!validateForm() || !selectedDate) return;
 
     setIsSubmitting(true);
     try {
       const { error } = await supabase.from("bookings").insert({
         name: formData.name.trim(),
         email: formData.email.trim(),
         phone: formData.phone.trim(),
         service_type: formData.serviceType,
         booking_date: format(selectedDate, "yyyy-MM-dd"),
         booking_time: selectedTime,
         message: formData.message?.trim() || null,
       });
 
       if (error) throw error;
 
       // Send email notification (fire and forget)
       try {
         await supabase.functions.invoke("send-booking-notification", {
           body: {
             name: formData.name.trim(),
             email: formData.email.trim(),
             phone: formData.phone.trim(),
             serviceType: formData.serviceType,
             bookingDate: format(selectedDate, "dd/MM/yyyy"),
             bookingTime: selectedTime,
             message: formData.message?.trim() || null,
           },
         });
       } catch (emailError) {
         console.error("Email notification error:", emailError);
         // Don't fail the booking if email fails
       }
 
       toast({
         title: "Réservation confirmée !",
         description: "Nous vous contacterons très prochainement.",
       });
 
       handleClose();
       navigate("/merci");
     } catch (error) {
       console.error("Booking error:", error);
       toast({
         title: "Erreur",
         description: "Une erreur est survenue. Veuillez réessayer.",
         variant: "destructive",
       });
     } finally {
       setIsSubmitting(false);
     }
   };
 
   const renderStepIndicator = () => (
     <div className="flex items-center justify-center gap-2 mb-6">
       {[1, 2, 3].map((s) => (
         <div
           key={s}
           className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
             s === step
               ? "bg-accent text-accent-foreground"
               : s < step
               ? "bg-accent/50 text-accent-foreground"
               : "bg-muted text-muted-foreground"
           }`}
         >
           {s}
         </div>
       ))}
     </div>
   );
 
   return (
     <Dialog open={isOpen} onOpenChange={handleClose}>
       <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-card border-border">
         <DialogHeader>
           <DialogTitle className="text-center text-xl font-bold text-foreground">
             Réservez votre consultation
           </DialogTitle>
         </DialogHeader>
 
         {renderStepIndicator()}
 
         <div className="py-4">
           {step === 1 && (
             <DateSelection
               selectedDate={selectedDate}
               onSelectDate={setSelectedDate}
             />
           )}
           {step === 2 && (
             <TimeSelection
               selectedDate={selectedDate}
               selectedTime={selectedTime}
               onSelectTime={setSelectedTime}
               bookedSlots={bookedSlots}
               isLoadingSlots={isLoadingSlots}
             />
           )}
           {step === 3 && (
             <BookingForm
               formData={formData}
               onFormChange={setFormData}
               errors={errors}
             />
           )}
         </div>
 
         <div className="flex justify-between gap-4 pt-4 border-t border-border">
           {step > 1 ? (
             <Button
               variant="outline"
               onClick={() => setStep(step - 1)}
               className="flex items-center gap-2"
             >
               <ArrowLeft className="w-4 h-4" />
               Retour
             </Button>
           ) : (
             <div />
           )}
 
           {step < 3 ? (
             <Button
               variant="mystical"
               onClick={() => setStep(step + 1)}
               disabled={step === 1 ? !canProceedToStep2 : !canProceedToStep3}
               className="flex items-center gap-2"
             >
               Suivant
               <ArrowRight className="w-4 h-4" />
             </Button>
           ) : (
             <Button
               variant="mystical"
               onClick={handleSubmit}
               disabled={isSubmitting}
               className="flex items-center gap-2"
             >
               {isSubmitting ? (
                 <>
                   <Loader2 className="w-4 h-4 animate-spin" />
                   Envoi en cours...
                 </>
               ) : (
                 "Confirmer ma réservation"
               )}
             </Button>
           )}
         </div>
       </DialogContent>
     </Dialog>
   );
 };
 
 export default BookingModal;