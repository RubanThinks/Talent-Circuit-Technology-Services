"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DualCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 border border-slate-100">
        {/* Job Seekers */}
        <motion.div
          id="job-seekers"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-16 text-slate-950 border-r border-slate-100 group hover:bg-slate-50 transition-all"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-sky-600 flex items-center justify-center mb-8 text-white">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-3xl font-black uppercase mb-6 tracking-tighter italic">
              FOR <span className="text-sky-600">JOB SEEKERS</span>
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-sm font-medium leading-relaxed">
              Navigate the pinnacle of your career journey. Access exclusive roles 
              across global industries with dedicated talent guidance.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Exclusive Global Opportunities",
                "Advanced Career Counseling",
                "Interview Mastery Support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="default" className="rounded-none bg-slate-950 hover:bg-sky-600 text-white font-bold uppercase tracking-widest border-none">
                <Link href="/job-seekers">Explore Roles</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Employers */}
        <motion.div
          id="employers"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-16 text-white bg-slate-950"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-sky-600 flex items-center justify-center mb-8 text-white">
              <Building2 className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-3xl font-black uppercase mb-6 tracking-tighter italic">
              FOR <span className="text-sky-600">EMPLOYERS</span>
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-sm font-medium leading-relaxed">
              Architect your organization's future with elite talent. We provide 
              the precision required for critical leadership and technical scaling.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Vetted Enterprise Talent",
                "Reduced Time-to-Placement",
                "Strategic Account Management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="default" className="rounded-none bg-white hover:bg-sky-600 text-slate-950 hover:text-white font-bold uppercase tracking-widest border-none transition-colors">
                <Link href="/employers">Hire Talent</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
