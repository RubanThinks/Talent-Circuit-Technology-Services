"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Talent Circuit helped us fill 25 critical IT positions in just 3 weeks. Their understanding of our culture and technical requirements was exceptional.",
    name: "Rajesh Kumar",
    role: "CTO, TechVista Solutions",
    color: "from-indigo-600 to-violet-600",
    initial: "R",
  },
  {
    text: "We've partnered with TCTS for over 5 years. Their RPO service has reduced our hiring costs by 40% while improving candidate quality significantly.",
    name: "Priya Sharma",
    role: "VP HR, Global Finserv",
    color: "from-sky-500 to-cyan-500",
    initial: "P",
  },
  {
    text: "The executive search team at Talent Circuit found us the perfect CFO within 4 weeks. Their discretion and professionalism were truly world-class.",
    name: "Anand Mehta",
    role: "CEO, Nexus Healthcare",
    color: "from-emerald-500 to-green-600",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Market Validation
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tighter italic">
            Strategic <span className="text-sky-600">Alliances</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-12 border-r border-b border-slate-100 last:border-r-0 hover:bg-slate-50 transition-all group"
            >
              <div className="flex gap-1 mb-8 text-sky-600">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-10 font-medium italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-sm font-bold text-white group-hover:bg-sky-600 transition-colors">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950 uppercase tracking-wide">{t.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
