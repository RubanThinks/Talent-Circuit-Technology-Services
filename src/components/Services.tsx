"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    slug: "permanent-staffing",
    desc: "Building your core team with long-term professionals who align with your company culture, values, and strategic vision.",
    image: "/images/permanent-staffing.png",
  },
  {
    icon: RotateCcw,
    title: "Contract Staffing",
    slug: "contract-staffing",
    desc: "Flexible workforce solutions for project-based roles, seasonal demands, and specialized short-term requirements.",
    image: "/images/contract-staffing.png",
  },
  {
    icon: UserCog,
    title: "Executive Search",
    slug: "executive-search",
    desc: "Confidential, strategic recruitment for C-suite, VP, and senior leadership positions across all industries.",
    image: "/images/executive-search.png",
  },
  {
    icon: SearchCheck,
    title: "RPO Services",
    slug: "rpo-services",
    desc: "Full-cycle Recruitment Process Outsourcing — we manage your entire hiring pipeline for maximum efficiency.",
    image: "/images/rpo-services.png",
  },
  {
    icon: LaptopMinimal,
    title: "IT Staffing",
    slug: "it-staffing",
    desc: "Specialized technology recruitment for developers, data engineers, cloud architects, and IT professionals.",
    image: "/images/it-staffing.png",
  },
  {
    icon: ArrowLeftRight,
    title: "HR Consulting",
    slug: "hr-consulting",
    desc: "Strategic HR advisory services including workforce planning, compensation benchmarking, and talent management.",
    image: "/images/hr-consulting.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-t border-slate-50">
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
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tighter">
            Architectural <span className="text-sky-600">Staffing</span>
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
              <div className="relative h-full bg-white hover:bg-slate-950 transition-all duration-300 group flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all z-10" />
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  {/* Highlight Badge - Appears on Hover */}
                  <span className="absolute top-4 right-4 text-[8px] font-bold uppercase tracking-[0.2em] bg-sky-600 text-white px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    Active Listing
                  </span>
                </div>
                
                <div className="p-8 sm:p-10 flex-1 flex flex-col relative">
                  <div className="w-14 h-14 bg-white flex items-center justify-center mb-8 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all -mt-16 relative z-30 shadow-xl border-4 border-slate-50 group-hover:border-slate-950">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-slate-950 group-hover:text-white mb-4 uppercase tracking-wide transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed mb-8 font-medium transition-colors flex-1">
                    {svc.desc}
                  </p>
                  
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-950 group-hover:text-sky-400 hover:group-hover:text-white transition-all mt-auto"
                  >
                    Service Scope <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
