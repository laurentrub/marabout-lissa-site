import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const PHONE_NUMBER = "33644668173";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

const WhatsAppButton = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 2000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactez-nous sur WhatsApp"
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${bounce ? "animate-bounce" : ""}`}
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-foreground text-background font-medium">
        Discutons sur WhatsApp
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;
