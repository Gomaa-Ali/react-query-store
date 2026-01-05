import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-transform duration-300 group-hover:scale-105">
            <span className="text-lg font-bold text-white">M</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            MOMO
          </span>
        </a>

    
        <div className="relative  ">
          <FaShoppingCart className="h-7 w-7  text-gray-900 transition-transform duration-300 cursor-pointer hover:scale-110" />
       
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full px-2 py-0.5">
            3
          </span>
        </div>
      </div>
    </nav>
  );
}
