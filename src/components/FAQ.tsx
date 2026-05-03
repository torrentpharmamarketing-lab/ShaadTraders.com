import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Are Shaad Traders products certified?",
      answer: "Yes, all our condoms and medical-grade gloves are officially licensed and registered by the Drug Regulatory Authority of Pakistan (DRAP), ensuring they meet the highest national and international safety standards."
    },
    {
      question: "Where are your products manufactured?",
      answer: "Our premium products are imported from world-class, certified manufacturing facilities in Malaysia, renowned for their expertise in natural rubber latex and healthcare products."
    },
    {
      question: "How do you ensure privacy during delivery?",
      answer: "We understand the need for complete discretion. All orders are shipped in unmarked, plain packaging with no explicit branding or product descriptions on the outside. We also offer Cash on Delivery for a seamless, private transaction."
    },
    {
      question: "Do you supply in bulk or to institutions?",
      answer: "Yes, we have been a trusted supplier to government institutions for several years. For wholesale, pharmacy distribution, or institutional orders, please contact our B2B team."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/50 mb-4">Support</p>
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
            Frequently Asked <span className="font-serif italic font-normal">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-black/10 pb-4"
            >
              <button 
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-light pr-8">{faq.question}</span>
                <span className="text-black/50 flex-shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-black/60 font-light pb-4 pr-12 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
