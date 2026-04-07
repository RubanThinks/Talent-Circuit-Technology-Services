import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, FileText, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const seekerSteps = [
  { icon: Smartphone, title: "Register", desc: "Upload your profile and tell us your career goals." },
  { icon: FileText, title: "Assessment", desc: "Our recruiters evaluate your technical and cultural fit." },
  { icon: Briefcase, title: "Matching", desc: "We connect you with roles that match your expertise." },
];

export default function JobSeekersPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-slate-50 border-b border-slate-100 py-12 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="font-jakarta text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-normal">JOB <span className="text-sky-600 ml-2">SEEKERS</span></h1>
            <p className="text-slate-500 mt-2 font-medium max-w-2xl mx-auto text-sm uppercase tracking-wide">Elevate your career with elite opportunities.</p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-3xl font-black text-slate-950 mb-16 uppercase text-center tracking-tighter">Why Choose Talent Circuit?</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {seekerSteps.map((step) => (
                <Card key={step.title} className="rounded-none border-slate-100 shadow-none hover:shadow-2xl transition-all p-10">
                  <CardContent className="p-0">
                    <step.icon className="w-12 h-12 text-sky-600 mb-6" />
                    <h3 className="font-heading text-xl font-bold text-slate-950 mb-4 uppercase">{step.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
