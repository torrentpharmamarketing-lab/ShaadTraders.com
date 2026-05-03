import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hi Shaad Traders, I'm interested in your products.`);
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full bg-black">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src="https://storage.googleapis.com/aistudio-chat-prod-contents/c0d7ffad-8fe5-4148-897c-9b165b4c4149" 
          alt="Are you ready for supreme feel?" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none md:hidden" />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[15%] md:bottom-[20%] flex justify-center z-50 w-full md:w-auto px-4">
          <Button onClick={handleWhatsAppOrder} size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-full uppercase tracking-widest font-semibold flex items-center gap-2 px-8 py-6 text-sm shadow-xl w-full md:w-auto md:max-w-xs mx-auto">
            <MessageCircle size={20} />
            Order via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
