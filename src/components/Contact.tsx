"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Globe, Phone, Send, Check, Loader2 } from "lucide-react";
import { submitContactAction } from "@/app/actions/submit-contact";

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["49C, 1st Main Road, Jeyachandran Nagar,", "Jalladianpet, Pallikaranai, Chennai – 600100"],
    href: "https://www.google.com/maps/search/?api=1&query=49C,+1st+Main+Road,+Jeyachandran+Nagar,+Jalladianpet,+Pallikaranai,+Chennai+–+600100",
  },
  { icon: Mail, title: "Email Us", lines: ["HR@talentcircuittech.com"], href: "mailto:HR@talentcircuittech.com" },
  { icon: Phone, title: "Call Us", lines: ["+91 96296 16173"], href: "tel:+919629616173" },
  { icon: Globe, title: "Website", lines: ["www.talentcircuittech.com"], href: "https://www.talentcircuittech.com" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactAction(formData);

    if (result.success) {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
      e.currentTarget.reset();
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-heading text-xs font-bold uppercase tracking-[0.3em] text-sky-600 mb-6">
            Inquiries
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tighter mb-8 leading-none">
            Let&apos;s Architect <br />
            <span className="text-sky-600">Your Future</span>
          </h2>
          <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium max-w-md">
            Connect with our recruitment experts in Chennai. We respond to all
            critical inquiries within one business cycle.
          </p>

          <div className="space-y-10">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Visit Us" || item.title === "Website" ? "_blank" : undefined}
                rel={item.title === "Visit Us" || item.title === "Website" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 items-start group hover:translate-x-1 transition-transform"
              >
                <div className="w-12 h-12 bg-slate-950 flex items-center justify-center text-sky-500 shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-widest mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-[6px] sm:border-[10px] border-slate-50 p-6 sm:p-12 shadow-2xl"
        >
          <h3 className="font-heading text-xl font-bold text-slate-950 mb-8 uppercase tracking-wide">
            Electronic Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Full Name *
                </label>
                <Input name="name" placeholder="Full Name" required className="rounded-none h-12 border-slate-200 focus:border-sky-600 bg-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <Input name="email" type="email" placeholder="Email" required className="rounded-none h-12 border-slate-200 focus:border-sky-600 bg-white" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Phone Number *
                </label>
                <Input name="phone" type="tel" placeholder="Phone" required className="rounded-none h-12 border-slate-200 focus:border-sky-600 bg-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  required
                  className="flex h-12 w-full rounded-none border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 transition-all focus:border-sky-600 focus:outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="employer">Enterprise / Hiring</option>
                  <option value="job-seeker">Career / Candidate</option>
                  <option value="partner">Strategic Partner</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                Detailed Message
              </label>
              <Textarea name="message" placeholder="Core requirements..." required className="rounded-none min-h-[120px] border-slate-200 focus:border-sky-600 bg-white" />
            </div>
            <Button type="submit" size="lg" className="w-full h-14 bg-slate-950 text-white hover:bg-sky-600 font-bold uppercase tracking-[0.2em] rounded-none transition-all" disabled={status === "sending"}>
              {status === "idle" && (
                <>
                  <span>Transmit Message</span> <Send className="w-4 h-4" />
                </>
              )}
              {status === "sending" && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Transmission...
                </>
              )}
              {status === "sent" && (
                <>
                  <Check className="w-4 h-4" /> Delivered Successfully
                </>
              )}
              {status === "error" && (
                <>
                  <span>Retry Transmission</span> <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
