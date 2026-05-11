import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "motion/react";

export function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const displayedProducts = categoryParam 
    ? products.filter(p => p.type.toLowerCase() === categoryParam.toLowerCase())
    : products;

  return (
    <div className="pt-20 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/50 mb-4">Shop Collection</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-black">
            {categoryParam === 'gloves' ? 'Medical Gloves' : 'Premium Condoms'}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square relative bg-[#f9f9f9] p-6 flex items-center justify-center">
                  <div 
                    className="absolute inset-0 opacity-5" 
                    style={{ backgroundColor: product.colorCode }}
                  />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="relative w-full h-full object-contain drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-black/50 font-semibold">{product.type}</span>
                    <span className="flex rounded-full w-3 h-3 border border-black/10" style={{ backgroundColor: product.colorCode }}></span>
                  </div>
                  <h3 className="text-lg font-light mb-4">{product.name}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium">Rs. {product.variants[0].price}</span>
                    <span className="text-xs uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
