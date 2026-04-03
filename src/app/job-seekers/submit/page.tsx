import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmitCVForm from "@/components/SubmitCVForm";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SubmitCVPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20 bg-slate-50 min-h-screen">
                {/* Breadcrumb / Intro */}
                <div className="relative bg-slate-950 py-24 pb-32 text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/submit-cv-hero-bg.png')" }}>
                    <div className="absolute inset-0 bg-slate-950/90" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <nav className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mb-10">
                            <Link href="/" className="hover:text-white transition-colors">Portal</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link href="/job-seekers" className="hover:text-white transition-colors">Career Hub</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-sky-500 underline decoration-sky-600/50 underline-offset-8">Profile Registry</span>
                        </nav>
                        <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                            SUBMIT YOUR <br /> <span className="text-sky-600">PROFILES</span>
                        </h1>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] max-w-sm leading-loose">
                            Architecting professional trajectories across global sectors with high-precision talent matching.
                        </p>
                    </div>
                </div>

                {/* Form Container */}
                <div className="max-w-7xl mx-auto px-6 -mt-20 pb-24 relative z-20">
                    <SubmitCVForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
