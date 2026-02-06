 import { format } from "date-fns";
 import { Loader2 } from "lucide-react";
 import { fr } from "date-fns/locale";
 
 interface TimeSelectionProps {
   selectedDate: Date | undefined;
   selectedTime: string;
   onSelectTime: (time: string) => void;
   bookedSlots: string[];
   isLoadingSlots: boolean;
 }
 
 const morningSlots = ["09:00", "10:00", "11:00", "12:00"];
 const afternoonSlots = ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
 
 const TimeSelection = ({ selectedDate, selectedTime, onSelectTime, bookedSlots, isLoadingSlots }: TimeSelectionProps) => {
   const isSlotBooked = (time: string) => bookedSlots.includes(time);
 
   return (
     <div className="space-y-6">
       <div className="text-center">
         <h3 className="text-xl font-semibold text-foreground mb-2">
           Choisissez un créneau horaire
         </h3>
         {selectedDate && (
           <p className="text-muted-foreground">
             Pour le {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}
           </p>
         )}
       </div>
 
       {isLoadingSlots ? (
         <div className="flex items-center justify-center py-8">
           <Loader2 className="w-6 h-6 animate-spin text-accent" />
           <span className="ml-2 text-muted-foreground">Chargement des disponibilités...</span>
         </div>
       ) : (
         <div className="space-y-4">
           <div>
             <h4 className="text-sm font-medium text-muted-foreground mb-3">Matin</h4>
             <div className="grid grid-cols-4 gap-2">
               {morningSlots.map((time) => {
                 const booked = isSlotBooked(time);
                 return (
                   <button
                     key={time}
                     onClick={() => !booked && onSelectTime(time)}
                     disabled={booked}
                     className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                       booked
                         ? "bg-muted text-muted-foreground cursor-not-allowed line-through opacity-50"
                         : selectedTime === time
                         ? "bg-accent text-accent-foreground"
                         : "bg-card border border-border hover:border-accent/50 hover:bg-accent/10 text-foreground"
                     }`}
                   >
                     {time}
                   </button>
                 );
               })}
             </div>
           </div>
 
           <div>
             <h4 className="text-sm font-medium text-muted-foreground mb-3">Après-midi</h4>
             <div className="grid grid-cols-4 gap-2">
               {afternoonSlots.map((time) => {
                 const booked = isSlotBooked(time);
                 return (
                   <button
                     key={time}
                     onClick={() => !booked && onSelectTime(time)}
                     disabled={booked}
                     className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                       booked
                         ? "bg-muted text-muted-foreground cursor-not-allowed line-through opacity-50"
                         : selectedTime === time
                         ? "bg-accent text-accent-foreground"
                         : "bg-card border border-border hover:border-accent/50 hover:bg-accent/10 text-foreground"
                     }`}
                   >
                     {time}
                   </button>
                 );
               })}
             </div>
           </div>
         </div>
       )}
 
       {selectedTime && (
         <div className="text-center p-3 bg-accent/10 rounded-lg border border-accent/30">
           <p className="text-accent">
             Créneau sélectionné : <span className="font-semibold">{selectedTime}</span>
           </p>
         </div>
       )}
     </div>
   );
 };
 
 export default TimeSelection;