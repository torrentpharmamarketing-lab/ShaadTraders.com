import { products } from "../data/products";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function FeaturedProducts() {
  const featured = products.filter(p => p.type === "Condoms").slice(0, 4); // Show top 4 condoms

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
              Explore <span className="font-serif italic font-normal">Our Range</span>
            </h2>
            <p className="mt-4 text-black/60 font-light max-w-xl">
              Designed for different lifestyles and preferences. Find the perfect fit for your intimacy needs.
            </p>
          </div>
          <Link to="/products" className="hidden md:inline-block text-sm uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image Container with oval mask influence or rounded top */}
                 <div className="relative aspect-square bg-[#f9f9f9] overflow-hidden rounded-t-[50px] rounded-b-2xl mb-6 p-6 flex items-center justify-center">
                   {/* Adding color hint based on variant */}
                   <div 
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 z-0" 
                      style={{ backgroundColor: product.colorCode }}
                   />
                   <img 
                      src={product.image} 
                      alt={product.name} 
                      className="relative w-full h-full object-contain z-10 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                      referrerPolicy="no-referrer"
                   />
                 </div>
                 
                 <div className="text-center px-4">
                   <p className="text-[10px] uppercase tracking-widest text-black/50 font-semibold mb-2">{product.type}</p>
                   <h3 className="text-xl font-light mb-2 group-hover:text-black/70 transition-colors">{product.name}</h3>
                   <div className="flex justify-center gap-2 mb-4">
                     {product.variants.map((v) => (
                       <span key={v.id} className="text-xs border border-black/10 px-2 py-1 rounded text-black/60">
                         {v.packSize} pk
                       </span>
                     ))}
                   </div>
                   <span className="text-sm border-b border-black/20 pb-0.5 group-hover:border-black transition-all">
                     View Details
                   </span>
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
