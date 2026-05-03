import { Building2, FileText, Package } from "lucide-react";

export function B2BSection() {
  return (
    <section className="bg-[#f5f2ed] border-t border-[#e5e2dd] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/50 mb-4">Institutional Partners</p>
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Wholesale & <span className="font-serif italic font-normal">Distribution</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-black/5">
            <Building2 className="mb-6 text-black/80" size={32} />
            <h3 className="text-lg font-medium mb-3">Government Institutions</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">
              We are long-standing suppliers to national health bodies, delivering high-volume orders with consistent quality standards.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5">
            <Package className="mb-6 text-black/80" size={32} />
            <h3 className="text-lg font-medium mb-3">Distributors & Pharmacies</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">
              Partner with us to stock Shaad Traders products in your regional pharmacies and healthcare outlets.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5">
            <FileText className="mb-6 text-black/80" size={32} />
            <h3 className="text-lg font-medium mb-3">Tender Support</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">
              We provide full documentation, compliance letters, and DRAP certifications to support open market tender biddings.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="mailto:b2b@shaadtraders.com"
            className="inline-block px-10 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-black/80 transition-all rounded-full"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
