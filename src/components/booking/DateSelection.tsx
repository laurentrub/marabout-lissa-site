 import { Calendar } from "@/components/ui/calendar";
 import { format } from "date-fns";
 import { fr } from "date-fns/locale";
 
 interface DateSelectionProps {
   selectedDate: Date | undefined;
   onSelectDate: (date: Date | undefined) => void;
 }
 
 const DateSelection = ({ selectedDate, onSelectDate }: DateSelectionProps) => {
   const today = new Date();
   today.setHours(0, 0, 0, 0);
 
   return (
     <div className="space-y-6">
       <div className="text-center">
         <h3 className="text-xl font-semibold text-foreground mb-2">
           Choisissez une date
         </h3>
         <p className="text-muted-foreground">
           Sélectionnez le jour qui vous convient le mieux
         </p>
       </div>
 
       <div className="flex justify-center">
         <Calendar
           mode="single"
           selected={selectedDate}
           onSelect={onSelectDate}
           disabled={(date) => date < today}
           locale={fr}
           className="rounded-lg border border-border bg-card p-3"
         />
       </div>
 
       {selectedDate && (
         <div className="text-center p-3 bg-accent/10 rounded-lg border border-accent/30">
           <p className="text-accent">
             Date sélectionnée : <span className="font-semibold">{format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}</span>
           </p>
         </div>
       )}
     </div>
   );
 };
 
 export default DateSelection;