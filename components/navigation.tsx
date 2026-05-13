"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Industries", href: "/#industries" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2"
          : "bg-[#05204A]/95 backdrop-blur-md border-b border-[#1a4a7a] py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo_full.png"
              alt="EdgKonnect"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors text-sm font-medium ${
                  scrolled
                    ? "text-slate-600 hover:text-[#0080E2]"
                    : "text-[#CAF0F8]/80 hover:text-[#45D6A8]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className={`transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-[#0080E2] hover:bg-[#0080E2]/10"
                  : "text-[#CAF0F8] hover:text-[#45D6A8] hover:bg-[#45D6A8]/10"
              }`}
            >
              Contact Us
            </Button>
            <Button
              className={`font-semibold transition-all ${
                scrolled
                  ? "bg-[#0080E2] text-white hover:bg-[#0080E2]/90 shadow-md"
                  : "bg-[#45D6A8] text-[#05204A] hover:bg-[#45D6A8]/90"
              }`}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled
                ? "text-slate-600 hover:text-[#0080E2]"
                : "text-[#CAF0F8] hover:text-[#45D6A8]"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden py-4 border-t ${scrolled ? "border-slate-100" : "border-[#1a4a7a]"}`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors text-sm font-medium px-2 ${
                    scrolled
                      ? "text-slate-600 hover:text-[#0080E2]"
                      : "text-[#CAF0F8]/80 hover:text-[#45D6A8]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div
                className={`flex flex-col gap-2 pt-4 border-t ${scrolled ? "border-slate-100" : "border-[#1a4a7a]"}`}
              >
                <Button
                  variant="ghost"
                  className={`justify-start ${
                    scrolled
                      ? "text-slate-700 hover:text-[#0080E2] hover:bg-[#0080E2]/10"
                      : "text-[#CAF0F8] hover:text-[#45D6A8] hover:bg-[#45D6A8]/10"
                  }`}
                >
                  Contact Us
                </Button>
                <Button
                  className={`font-semibold ${
                    scrolled
                      ? "bg-[#0080E2] text-white hover:bg-[#0080E2]/90"
                      : "bg-[#45D6A8] text-[#05204A] hover:bg-[#45D6A8]/90"
                  }`}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
