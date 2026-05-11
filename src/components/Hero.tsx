import FlowArt, { FlowSection } from "./ui/story-scroll";

export function Hero() {
  const heroBanners = [
    { src: "/hero1.png", alt: "Are you ready for supreme feel?" },
    { src: "/hero2.png", alt: "Experience the ultimate pleasure." },
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
                className="w-full h-full object-contain md:object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none md:hidden" />
            </div>
          </FlowSection>
        ))}
      </FlowArt>
    </div>
  );
}
