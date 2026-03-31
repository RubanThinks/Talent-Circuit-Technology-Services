"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Understand Requirements", desc: "Deep-dive consultation to understand your role, culture, and ideal candidate profile." },
  { num: "02", title: "Source & Screen", desc: "Leverage our vast network and proprietary database to identify and vet top candidates." },
  { num: "03", title: "Present & Interview", desc: "Shortlisted candidates are presented with detailed profiles for your review." },
  { num: "04", title: "Onboard & Follow Up", desc: "Seamless onboarding support and post-placement follow-ups to ensure success." },
];

export default function Process() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-4">
            Deployment Lifecycle
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tighter italic">
            Search <span className="text-sky-600">Methodology</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-100">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-8 sm:p-10 lg:border-r border-b lg:border-b-0 border-slate-100 last:border-r-0 hover:bg-slate-50 transition-all group"
            >
              <div className="font-heading text-6xl font-black text-slate-100 group-hover:text-sky-600/10 mb-8 transition-colors leading-none tracking-tighter">
                {step.num}
              </div>
              <h4 className="font-heading text-sm font-bold text-slate-950 mb-3 uppercase tracking-wide">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              
              <div className="mt-8 w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-sky-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
