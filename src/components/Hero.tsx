"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Briefcase, Users, Building2, Star, Handshake } from "lucide-react";
import Link from "next/link";

const highlightStats = [
  { icon: Users, label: "10,000+", sub: "Placements" },
  { icon: Building2, label: "500+", sub: "Clients" },
  { icon: Star, label: "98%", sub: "Satisfaction" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Professional solid/subtle background */}
      <div className="absolute inset-0 bg-[#060b1a]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-900/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center py-20">
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
            ACQUISITION
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
              <Link href="/employers">Hire Talent</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none px-10 h-14 font-bold uppercase tracking-widest border-2 border-white/20 text-white hover:bg-white hover:text-slate-950 transition-all">
              <Link href="/job-seekers">Find Jobs</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Solid Professional Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6 relative">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-none shadow-2xl"
            >
              <Users className="w-10 h-10 text-blue-900 mb-4" />
              <div className="text-3xl font-black text-slate-950 mb-1">10K+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Placements</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-slate-900 p-8 rounded-none border border-white/10"
            >
              <Building2 className="w-10 h-10 text-sky-500 mb-4" />
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Corporate Clients</div>
            </motion.div>
          </div>
          <div className="pt-12 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-sky-600 p-8 rounded-none text-white shadow-xl"
            >
              <Star className="w-10 h-10 text-white mb-4" />
              <div className="text-3xl font-black mb-1">98%</div>
              <div className="text-xs font-bold opacity-80 uppercase tracking-widest">Retention Rate</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 rounded-none shadow-2xl flex flex-col justify-center items-center text-center"
            >
              <Handshake className="w-10 h-10 text-blue-900 mb-4" />
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Global Partner</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
