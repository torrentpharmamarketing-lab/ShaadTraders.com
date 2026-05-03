import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutBrand() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text Side */}
        <div className="py-24 px-8 lg:px-20 xl:px-32 flex flex-col justify-center relative z-10">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-6">
            Our Philosophy
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.01em] mb-8">
            Reliable Protection.<br />
            <span className="font-serif italic font-normal text-white/80">Designed for Real Life.</span>
          </h2>
          
          <div className="space-y-6 text-white/70 font-light text-lg max-w-lg">
            <p>
              Intimacy shouldn't come with compromises. At Shaad Traders, we believe that premium quality and absolute reliability should be accessible to everyone.
            </p>
            <p>
              Unlike mass-market alternatives, our products are imported from leading global manufacturers in Malaysia, ensuring a natural feel without sacrificing safety. Our strict adherence to DRAP regulations and our history as a trusted government supplier mean you can focus entirely on the moment.
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
