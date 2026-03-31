"use client";

import { motion } from "framer-motion";
import { Crown, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Strategic Recruitment",
    desc: "Customized hiring solutions aligned with your business goals and culture.",
  },
  {
    icon: Zap,
    title: "Rapid Turnaround",
    desc: "Industry-leading speed in sourcing, screening, and placing candidates.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Multi-stage vetting ensures only the best-fit candidates reach you.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative w-full h-[520px] bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 opacity-40" />
            <div className="absolute inset-0 border-[20px] border-white/10" />
            
            <div className="absolute bottom-0 left-0 bg-sky-600 p-10 text-white translate-x-10 translate-y-[-40px]">
              <div className="font-heading text-5xl font-black mb-1">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Years of Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-6">
            The TCTS Legacy
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic">
            Connecting World-Class <br /> 
            <span className="text-sky-600">Talent & Capital</span>
          </h2>
          <div className="space-y-6 text-slate-500 font-medium leading-relaxed mb-10">
            <p>
              Talent Circuit Technology Services (TCTS) operates at the vital intersection 
              of industry expertise and human capital. Based in Chennai, we serve as the 
              strategic bridge for organizations seeking to define their future through 
              exceptional leadership and specialized skillsets.
            </p>
            <p>
              Our process is rigorous, our network is global, and our commitment to 
              discretion and quality is absolute. Whether scaling a nascent startup 
              or reinforcing a global enterprise, we deliver people who deliver results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="w-10 h-10 bg-slate-950 mb-4 flex items-center justify-center text-sky-500">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-sm font-bold text-slate-950 mb-2 uppercase tracking-wide">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
