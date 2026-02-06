 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
 
 export interface BookingFormData {
   name: string;
   email: string;
   phone: string;
   serviceType: string;
   message: string;
 }
 
 interface BookingFormProps {
   formData: BookingFormData;
   onFormChange: (data: BookingFormData) => void;
   errors: Record<string, string>;
 }
 
 const consultationTypes = [
   { value: "voyance", label: "Consultation de voyance personnalisée" },
   { value: "sentimentale", label: "Consultation sentimentale (amour & relations)" },
   { value: "retour_affectif", label: "Retour affectif – analyse et accompagnement" },
   { value: "nettoyage", label: "Nettoyage énergétique et protection" },
   { value: "spirituelle", label: "Consultation spirituelle générale" },
   { value: "decouverte", label: "Première consultation – découverte" },
   { value: "urgente", label: "Consultation urgente" }
 ];
 
 const BookingForm = ({ formData, onFormChange, errors }: BookingFormProps) => {
   const handleChange = (field: keyof BookingFormData, value: string) => {
     onFormChange({ ...formData, [field]: value });
   };
 
   return (
     <div className="space-y-6">
       <div className="text-center">
         <h3 className="text-xl font-semibold text-foreground mb-2">
           Vos informations
         </h3>
         <p className="text-muted-foreground">
           Renseignez vos coordonnées pour confirmer le rendez-vous
         </p>
       </div>
 
       <div className="space-y-4">
         <div className="space-y-2">
           <Label htmlFor="name" className="text-foreground">
             Nom complet <span className="text-destructive">*</span>
           </Label>
           <Input
             id="name"
             type="text"
             placeholder="Votre nom complet"
             value={formData.name}
             onChange={(e) => handleChange("name", e.target.value)}
             className={errors.name ? "border-destructive" : ""}
           />
           {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
         </div>
 
         <div className="space-y-2">
           <Label htmlFor="email" className="text-foreground">
             Email <span className="text-destructive">*</span>
           </Label>
           <Input
             id="email"
             type="email"
             placeholder="votre@email.com"
             value={formData.email}
             onChange={(e) => handleChange("email", e.target.value)}
             className={errors.email ? "border-destructive" : ""}
           />
           {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
         </div>
 
         <div className="space-y-2">
           <Label htmlFor="phone" className="text-foreground">
             Téléphone <span className="text-destructive">*</span>
           </Label>
           <Input
             id="phone"
             type="tel"
             placeholder="06 12 34 56 78"
             value={formData.phone}
             onChange={(e) => handleChange("phone", e.target.value)}
             className={errors.phone ? "border-destructive" : ""}
           />
           {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
         </div>
 
         <div className="space-y-3">
           <Label className="text-foreground">
             Quel type de consultation souhaitez-vous ? <span className="text-destructive">*</span>
           </Label>
           <RadioGroup
             value={formData.serviceType}
             onValueChange={(value) => handleChange("serviceType", value)}
             className="space-y-2"
           >
             {consultationTypes.map((type) => (
               <div
                 key={type.value}
                 className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                   formData.serviceType === type.value
                     ? "border-accent bg-accent/10"
                     : "border-border hover:border-accent/50 hover:bg-card"
                 }`}
               >
                 <RadioGroupItem value={type.value} id={type.value} />
                 <Label htmlFor={type.value} className="cursor-pointer flex-1 text-foreground">
                   {type.label}
                 </Label>
               </div>
             ))}
           </RadioGroup>
           {errors.serviceType && <p className="text-sm text-destructive">{errors.serviceType}</p>}
         </div>
 
         <div className="space-y-2">
           <Label htmlFor="message" className="text-foreground">
             Message (optionnel)
           </Label>
           <Textarea
             id="message"
             placeholder="Décrivez brièvement votre situation ou vos attentes..."
             value={formData.message}
             onChange={(e) => handleChange("message", e.target.value)}
             className="min-h-[100px]"
           />
         </div>
       </div>
     </div>
   );
 };
 
 export default BookingForm;