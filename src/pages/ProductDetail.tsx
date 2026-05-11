import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { MessageCircle, ShieldCheck, Truck, Shield } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);

  if (!product) {
    return (
      <div className="pt-32 pb-32 text-center text-xl font-light">
        Product not found
        <div className="mt-4">
          <Link to="/products" className="text-sm underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hi Shaad Traders, I would like to order:\n\n*${product.name}*\nPack Size: ${selectedVariant?.name}\nPrice: Rs. ${selectedVariant?.price}\n\nPlease let me know the process for Cash on Delivery.`);
    window.open(`https://wa.me/923095178894?text=${text}`, '_blank');
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-square lg:aspect-auto lg:h-[70vh] rounded-3xl overflow-hidden relative bg-[#f9f9f9] border border-black/5 p-12 flex items-center justify-center"
          >
             <div 
                className="absolute inset-0 opacity-5" 
                style={{ backgroundColor: product.colorCode }}
             />
             <img 
               src={selectedVariant?.image || product.image} 
               alt={product.name} 
               className="relative w-full h-full object-contain drop-shadow-2xl"
               referrerPolicy="no-referrer"
             />
          </motion.div>

          {/* Details Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/40 mb-4">{product.type}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-black tracking-tight">{product.name}</h1>
            
            <p className="text-lg text-black/70 font-light mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-10">
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Select Pack Size</h3>
              <div className="flex flex-wrap gap-4">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 rounded-full border transition-all ${
                      selectedVariant?.id === variant.id 
                        ? 'border-black bg-black text-white' 
                        : 'border-black/20 text-black hover:border-black'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-3xl font-light mb-8">
              Rs. {selectedVariant?.price}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-[#25D366] text-white py-4 px-8 rounded-full flex justify-center items-center gap-3 hover:bg-[#20bd5a] transition-colors uppercase tracking-widest font-semibold text-sm"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div className="flex items-start gap-3 text-black/70">
                <ShieldCheck size={20} className="text-black shrink-0" />
                <span className="text-sm font-light">100% DRAP Licensed</span>
              </div>
              <div className="flex items-start gap-3 text-black/70">
                <Truck size={20} className="text-black shrink-0" />
                <span className="text-sm font-light">Discreet Delivery</span>
              </div>
              <div className="flex items-start gap-3 text-black/70">
                <Shield size={20} className="text-black shrink-0" />
                <span className="text-sm font-light">Cash on Delivery</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
