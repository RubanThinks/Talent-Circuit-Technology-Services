import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-950 py-24 text-white text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-black uppercase mb-4 tracking-tighter">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto px-6 font-medium">
            Connect with our recruitment experts in Chennai.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
