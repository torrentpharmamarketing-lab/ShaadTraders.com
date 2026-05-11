import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import FlowArt, { FlowSection } from "./ui/story-scroll";

export function Hero() {
  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hi Shaad Traders, I'm interested in your products.`);
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  const heroBanners = [
    { src: "/hero1.png", alt: "Are you ready for supreme feel?" },
    { src: "/hero 2.jpeg", alt: "Experience the ultimate pleasure." },
    { src: "/hero3.png", alt: "Premium quality guaranteed." }
  ];

  return (
    <div className="w-full bg-black">
      <FlowArt aria-label="Hero Banners">
        {heroBanners.map((banner, index) => (
          <FlowSection key={index} aria-label={`Hero ${index + 1}`}>
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={banner.src} 
                alt={banner.alt} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none md:hidden" />
            </div>
            
            <div className="relative z-10 flex flex-col justify-end h-full pb-12 items-center md:items-end md:pr-[15%] md:pb-[10%]">
              <Button onClick={handleWhatsAppOrder} size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-full uppercase tracking-widest font-semibold flex items-center gap-2 px-8 py-6 text-sm shadow-xl w-[90%] md:w-auto md:max-w-xs pointer-events-auto">
                <MessageCircle size={20} />
                Order via WhatsApp
              </Button>
            </div>
          </FlowSection>
        ))}
      </FlowArt>
    </div>
  );
}
