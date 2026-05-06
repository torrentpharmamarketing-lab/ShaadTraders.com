import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function BottomHero() {
  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hi Shaad Traders, I'm interested in your products.`);
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full bg-[#E5E0DA]">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img 
            src="/hero3.png" 
            alt="Best in protection & Trust" 
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute inset-x-0 bottom-0 top-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none md:hidden" />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-12 md:bottom-12 flex justify-center z-50">
            <Button onClick={handleWhatsAppOrder} size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-full uppercase tracking-widest font-semibold flex items-center gap-2 shadow-xl">
              <MessageCircle size={18} />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
