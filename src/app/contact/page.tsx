import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="relative bg-slate-950 py-32 text-white text-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/contact-hero-bg.png')" }}>
          <div className="absolute inset-0 bg-slate-950/90" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6">CONTACT <span className="text-sky-500">US</span></h1>
            <p className="text-slate-400 text-lg font-medium">
              Connect with our recruitment experts in Chennai.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
