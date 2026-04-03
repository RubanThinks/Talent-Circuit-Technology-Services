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
      <main className="pt-20">
        <div className="bg-slate-950 py-32 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-heading text-5xl sm:text-6xl font-black uppercase mb-8 tracking-tighter leading-none">
                ELEVATE <br /> YOUR CAREER
              </h1>
              <p className="text-slate-400 text-lg mb-10 max-w-lg font-medium leading-relaxed">
                Connect with the world's most innovative companies. We don't just find you a job, we guide your career trajectory.
              </p>
              <Button asChild size="lg" className="rounded-none bg-sky-600 hover:bg-white hover:text-slate-950 transition-all font-bold uppercase tracking-widest px-10 h-14 border-none text-white">
                <Link href="/job-seekers/submit">Submit Your CV</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-[400px] border-[20px] border-white/5 flex items-center justify-center bg-[url('/images/jobseeker-bg.png')] bg-cover bg-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <GraduationCap className="w-20 h-20 text-white/50 relative z-10" />
              </div>
            </div>
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
