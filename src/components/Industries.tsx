"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  GraduationCap,
  Truck,
  Bolt,
} from "lucide-react";

const industries = [
  { icon: Cpu, label: "Information Technology" },
  { icon: Landmark, label: "Banking & Finance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail & E-commerce" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics & Supply Chain" },
  { icon: Bolt, label: "Energy & Utilities" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Global Sectors
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tighter italic">
            Industries <span className="text-sky-600">We Empower</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-100">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-8 sm:p-10 border-r border-b border-slate-100 hover:bg-slate-950 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mx-auto mb-6 text-slate-900 group-hover:bg-sky-600 group-hover:text-white transition-all">
                <ind.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-[11px] font-bold text-slate-900 group-hover:text-white uppercase tracking-[0.2em] transition-colors leading-relaxed">
                {ind.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
