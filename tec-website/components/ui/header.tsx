"use strict";
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b-2 bg-gray-400/60 font-serif font-bold text-xl relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image 
            src="/Images_clip/tree_wo_bg.png" 
            alt="clipart style tree" 
            width={50} 
            height={50}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-base sm:text-lg md:text-xl whitespace-nowrap">
            Tri-County Exterior Contractors
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="hover:underline transition-all">Services</Link>
          <Link href="/about" className="hover:underline transition-all">About</Link>
          <Link href="/contact" className="hover:underline transition-all">Contact</Link>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-500/20 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-400/95 border-b-2 shadow-lg flex flex-col items-center py-4 gap-4 animate-fadeIn">
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:underline w-full text-center py-2">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:underline w-full text-center py-2">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:underline w-full text-center py-2">Contact</Link>
        </nav>
      )}
    </header>
  );
}