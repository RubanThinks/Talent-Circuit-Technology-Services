import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section className="bg-slate-950 py-24 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase mb-6 tracking-tighter">Global Executive Sourcing</h2>
            <p className="text-slate-400 font-medium mb-10 leading-relaxed uppercase tracking-widest text-xs">
              Direct access to the world's most guarded talent pipelines.
            </p>
          </div>
        </section>
        <Services />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
