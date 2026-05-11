import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutBrand() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text Side */}
        <div className="py-24 px-8 lg:px-20 xl:px-32 flex flex-col justify-center relative z-10">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-6">
            Company Profile
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.01em] mb-8">
            Shaad Brand.<br />
            <span className="font-serif italic font-normal text-white/80">Quality & Reliability.</span>
          </h2>
          
          <div className="space-y-6 text-white/70 font-light text-lg max-w-lg">
            <p>
              Shaad Brand is committed to delivering high-quality medical and healthcare products that meet international safety and performance standards. With a focus on reliability, hygiene, and user comfort, Shaad Brand ensures strict quality control and compliance with regulatory requirements.
            </p>
            <p>
              <strong className="text-white font-medium">Our Mission:</strong> To provide safe, affordable, and high-performance medical products for healthcare professionals and institutions.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/about" className="inline-flex items-center gap-3 text-sm uppercase tracking-widest hover:text-white/70 transition-colors group">
              <span>Read Our Story</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200" 
            alt="Intimate connection" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
}
