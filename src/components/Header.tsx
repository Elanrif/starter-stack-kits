"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-linear-to-b from-black/80 via-black/60 to-black/40 border-b border-white/10 shadow-lg shadow-black/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <Link href="/" className="relative group shrink-0">
          <h1 className="text-lg sm:text-2xl font-bold bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent hover:from-gray-300 hover:via-white hover:to-red-300 transition-all duration-300">
            kickstart
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block ml-auto">
          <ul className="flex space-x-2 lg:space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative group px-3 py-2 text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-auto p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-linear-to-b from-black/40 to-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-white/20"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
