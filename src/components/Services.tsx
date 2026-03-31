"use client";

import { motion } from "framer-motion";
import {
  UsersRound,
  RotateCcw,
  UserCog,
  SearchCheck,
  LaptopMinimal,
  ArrowLeftRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: UsersRound,
    title: "Permanent Staffing",
    desc: "Building your core team with long-term professionals who align with your company culture, values, and strategic vision.",
  },
  {
    icon: RotateCcw,
    title: "Contract Staffing",
    desc: "Flexible workforce solutions for project-based roles, seasonal demands, and specialized short-term requirements.",
  },
  {
    icon: UserCog,
    title: "Executive Search",
    desc: "Confidential, strategic recruitment for C-suite, VP, and senior leadership positions across all industries.",
  },
  {
    icon: SearchCheck,
    title: "RPO Services",
    desc: "Full-cycle Recruitment Process Outsourcing — we manage your entire hiring pipeline for maximum efficiency.",
  },
  {
    icon: LaptopMinimal,
    title: "IT Staffing",
    desc: "Specialized technology recruitment for developers, data engineers, cloud architects, and IT professionals.",
  },
  {
    icon: ArrowLeftRight,
    title: "HR Consulting",
    desc: "Strategic HR advisory services including workforce planning, compensation benchmarking, and talent management.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Service Spectrum
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tighter italic">
            Strategic <span className="text-sky-600">Solutions</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border border-slate-100"
            >
              <div className="relative h-full p-10 sm:p-12 bg-white hover:bg-slate-950 transition-all duration-300 group">
                {/* Highlight Badge - Appears on Hover */}
                <span className="absolute top-8 right-8 text-[8px] font-bold uppercase tracking-[0.2em] bg-sky-600 text-white px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Active Listing
                </span>
                
                <div className="w-14 h-14 bg-slate-100 flex items-center justify-center mb-8 text-slate-900 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <svc.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-slate-950 group-hover:text-white mb-4 uppercase tracking-wide transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed mb-8 font-medium transition-colors">
                  {svc.desc}
                </p>
                
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-950 group-hover:text-sky-400 hover:group-hover:text-white transition-all"
                >
                  Service Scope <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
