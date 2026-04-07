import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-slate-50 border-b border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="font-jakarta text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-normal">CONTACT <span className="text-sky-600 ml-2">US</span></h1>
            <p className="text-slate-500 mt-2 font-medium max-w-2xl text-sm uppercase tracking-wide">Connect with our recruitment experts in Chennai.</p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
