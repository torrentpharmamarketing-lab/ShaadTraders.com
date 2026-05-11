import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-widest uppercase block mb-4">
              Shaad<span className="font-light text-gray-400">Traders</span>
            </Link>
            <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
              Comfort, Protection, and Trust — All in One. Imported premium quality intimacy and healthcare products.
            </p>
            <a 
              href="https://wa.me/923095178894" // Placeholder number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle size={18} />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/30 mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link to="/products" className="hover:text-white transition-colors">All Condoms</Link></li>
              <li><Link to="/products?category=gloves" className="hover:text-white transition-colors">Medical Gloves</Link></li>
              <li><Link to="/bulk" className="hover:text-white transition-colors">Bulk Orders</Link></li>
              <li><Link to="/track" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/30 mb-6">Learn</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/quality" className="hover:text-white transition-colors">Quality Standard</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white/30 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li>jskshaadsmm@gmail.com</li>
              <li>+92 309 5178894</li>
              <li className="pt-2 text-white/40">Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40 border-b-0">
          <p>© {new Date().getFullYear()} Shaad Traders. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white transition-colors">Shipping Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
