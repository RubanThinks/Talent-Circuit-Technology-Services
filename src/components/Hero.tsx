"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Building2, Star, Handshake } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Professional Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#060b1a]/80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-900/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
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
            className="font-heading text-5xl sm:text-6xl lg:text-[72px] font-black leading-[0.95] mb-8 tracking-tighter"
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
      </div>
    </section>
  );
}
