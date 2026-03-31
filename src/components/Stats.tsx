"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Building2, UserCheck, Award, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Building2, value: 500, suffix: "+", label: "Clients Served" },
  { icon: UserCheck, value: 10000, suffix: "+", label: "Successful Placements" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: Globe, value: 50, suffix: "+", label: "Industry Sectors" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const springValue = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <motion.span ref={ref}>
      {displayValue}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-slate-100">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="p-10 text-center hover:bg-slate-50 transition-all group relative"
          >
            <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-sky-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <stat.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter tabular-nums">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            
            {/* Architectural Accent */}
            <div className="absolute top-0 right-0 w-1 h-0 bg-sky-600 group-hover:h-full transition-all duration-700 opacity-20" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
