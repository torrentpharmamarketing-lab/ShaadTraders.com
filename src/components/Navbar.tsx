import { Link } from "react-router-dom";
import { ShoppingCart, Menu, User } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-widest uppercase">
              Shaad<span className="font-light text-gray-400">Traders</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm uppercase tracking-wider font-medium">
            <Link to="/products" className="hover:text-gray-300 transition-colors">Condoms</Link>
            <Link to="/products?category=gloves" className="hover:text-gray-300 transition-colors">Gloves</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link to="/b2b" className="hover:text-gray-300 transition-colors text-white/70">Govt & B2B</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-300 transition-colors">
              <User size={20} />
            </button>
            <button className="hover:text-gray-300 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/products" className="block text-lg font-medium hover:text-gray-300 pt-4">Condoms</Link>
            <Link to="/products?category=gloves" className="block text-lg font-medium hover:text-gray-300 pt-4">Gloves</Link>
            <Link to="/about" className="block text-lg font-medium hover:text-gray-300 pt-4">About Us</Link>
            <Link to="/b2b" className="block text-lg font-medium hover:text-gray-300 pt-4">Govt & B2B</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
