import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Industries from "@/components/Industries";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="relative bg-slate-950 py-32 text-white text-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/about-hero-bg.png')" }}>
          <div className="absolute inset-0 bg-slate-950/90" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6">ABOUT <span className="text-sky-500">US</span></h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Talent Circuit Technology Services (TCTS) is a recruitment and consulting firm focused on delivering the right talent through a structured and result-oriented approach. We partner with organizations to understand their hiring needs and provide tailored solutions that ensure long-term success.
            </p>
          </div>
        </div>
        <About />
        <Industries />
      </main>
      <Footer />
    </>
  );
}
