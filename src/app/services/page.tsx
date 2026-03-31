import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-950 py-24 text-white text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-black uppercase mb-4 tracking-tighter">Our Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto px-6 font-medium">
            Strategic recruitment solutions tailored to your organization's unique DNA.
          </p>
        </div>
        <Services />
        <Process />
      </main>
      <Footer />
    </>
  );
}
