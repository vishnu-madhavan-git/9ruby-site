"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Infrastructure", href: "#infra" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 transition-all duration-500">
      <nav
        className={`mx-auto max-w-[1400px] transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-8 h-20">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-[family-name:var(--font-instrument-serif)] tracking-tight text-2xl text-white transition-all duration-500">
              9RUBY
            </span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs mt-1 text-white/60">
              IX
            </span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C41A3B] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-all duration-500"
            >
              Sign in
            </a>
            <button className="inline-flex items-center justify-center text-sm font-medium rounded-full bg-white hover:bg-white/90 text-black px-6 h-8 transition-all duration-500">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-5xl font-[family-name:var(--font-instrument-serif)] text-white hover:text-white/60 transition-all duration-500"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4 pt-8 border-t border-white/10">
            <button className="flex-1 h-14 rounded-full border border-white/20 text-base font-medium hover:bg-white/5 transition-all">
              Sign in
            </button>
            <button className="flex-1 h-14 rounded-full bg-white text-black text-base font-medium hover:bg-white/90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
