import { CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    {
      icon: <ShieldCheck size={32} className="text-black mb-4" />,
      title: "DRAP Licensed",
      description: "Officially registered and approved by the Drug Regulatory Authority of Pakistan for your complete peace of mind.",
      images: ["/Certificateofenlistment.jpeg"]
    },
    {
      icon: <CheckCircle2 size={32} className="text-black mb-4" />,
      title: "Govt. Supply Verified",
      description: "Trusted partner supplying premium products to government institutions for over 3 years.",
      images: ["/Drapcertificate1.jpeg", "/Drapcertificate2.jpeg"]
    },
    {
      icon: <Stethoscope size={32} className="text-black mb-4" />,
      title: "Imported Quality",
      description: "Sourced from world-class manufacturing facilities in Malaysia, ensuring global quality standards.",
      images: ["/importlicense.jfif"]
    }
  ];

  return (
    <section id="trust" className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            The Foundation of <span className="font-serif italic font-normal">Trust</span>
          </h2>
          <p className="mt-4 text-black/60 max-w-2xl mx-auto font-light">
            We understand the sensitive nature of our products. That's why we prioritize uncompromising quality and regulatory compliance above everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start">
          {indicators.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f2ed] flex items-center justify-center mb-6 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-lg uppercase tracking-wider font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-black/60 font-light leading-relaxed max-w-xs mx-auto mb-8">
                {item.description}
              </p>
              
              {/* Certificates */}
              {item.images && (
                <div className={`grid gap-4 ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} w-full max-w-[280px] mx-auto mt-auto`}>
                  {item.images.map((img, i) => (
                    <a key={i} href={img} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
                      <img 
                        src={img} 
                        alt={`${item.title} certificate`} 
                        className="w-full h-auto rounded-lg border border-black/10 shadow-sm" 
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
