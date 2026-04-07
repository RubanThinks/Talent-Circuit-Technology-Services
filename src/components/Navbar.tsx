"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Permanent Staffing", href: "/services/permanent-staffing" },
      { label: "Contract Staffing", href: "/services/contract-staffing" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "RPO Services", href: "/services/rpo-services" },
      { label: "IT Staffing", href: "/services/it-staffing" },
      { label: "HR Consulting", href: "/services/hr-consulting" },
    ]
  },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-slate-950 text-slate-400 text-xs py-2.5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href="mailto:HR@talentcircuittech.com" className="hover:text-sky-500 transition-colors flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              HR@talentcircuittech.com
            </a>
            <a href="tel:+919629616173" className="hover:text-sky-500 transition-colors flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 96296 16173
            </a>
            <span className="hidden md:flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              Pallikaranai, Chennai – 600100
            </span>
          </div>
          <div className="flex gap-4">
            {["linkedin-in", "facebook-f", "instagram"].map((icon) => (
              <a key={icon} href="#" className="hover:text-sky-500 transition-colors uppercase" aria-label={icon}>
                {icon.split('-')[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-lg border-b border-slate-100" : "border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-100 shadow-md flex-shrink-0">
              <Image
                src="/images/tcts-icon.jpeg"
                alt="Talent Circuit Technology Services Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-jakarta font-bold text-[22px] tracking-tight leading-none" style={{ color: '#002E5D' }}>
                Talent Circuit
              </span>
              <span className="font-jakarta text-[12px] font-medium tracking-[0.05em] mt-1" style={{ color: '#0099CA' }}>
                Technology Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="text-[13px] font-black px-4 py-2 text-slate-600 hover:text-blue-900 transition-colors uppercase tracking-wider flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className={`w-3 h-3 transition-transform ${hoveredItem === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {hoveredItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-slate-950 text-white p-4 shadow-2xl pt-6"
                      >
                        <div className="space-y-4">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-sky-500 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="default" className="rounded-none font-bold tracking-widest uppercase">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 -mr-2 text-slate-950 hover:text-sky-600 hover:bg-slate-50 transition-all rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="lg:hidden fixed inset-0 top-[80px] bg-white z-[60] p-6 pt-10 overflow-y-auto"
            >
              <nav className="flex flex-col gap-8 text-center pb-20">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => !item.submenu && setMobileOpen(false)}
                      className="text-2xl font-black text-slate-950 uppercase tracking-tighter block mb-4"
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="flex flex-col gap-4">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6">
                  <Button asChild className="w-full h-14 text-lg font-bold rounded-none uppercase tracking-widest">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
