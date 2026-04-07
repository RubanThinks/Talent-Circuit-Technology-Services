"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Building2, Star, Handshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Professional Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#060b1a]/80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-900/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-8"
            >
              <span className="w-1 h-1 bg-sky-400" />
              Recruitment Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-[12vw] sm:text-6xl lg:text-[72px] font-black leading-[0.95] mb-8 tracking-tight"
            >
              PRECISION <br />
              <span className="text-sky-500">TALENT</span> <br />
              DELIVERY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed font-medium"
            >
              Talent Circuit Technology Services is a premier executive search and 
              staffing firm dedicated to bridging the talent gap with global precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              <Button asChild size="lg" className="rounded-none px-10 h-14 font-bold uppercase tracking-widest bg-white text-slate-950 hover:bg-sky-500 hover:text-white transition-colors border-none">
                <Link href="/contact">Hire Talent</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none px-10 h-14 font-bold uppercase tracking-widest border-2 border-white/20 text-white hover:bg-sky-600 hover:border-sky-600 transition-all">
                <Link href="/job-seekers">Apply Jobs</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Circular Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Animated glow rings */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -inset-10 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-2xl"
              />
              {/* Outer ring */}
              <div className="absolute -inset-3 rounded-full border border-sky-500/20" />
              <div className="absolute -inset-6 rounded-full border border-sky-400/10" />
              {/* Logo container */}
              <Link href="/contact" className="block relative z-10 transition-transform hover:scale-105 active:scale-95 duration-300">
                <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-sky-500/20 bg-white">
                  <Image
                    src="/images/tcts-logo.jpeg"
                    alt="Talent Circuit Technology Services Logo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
