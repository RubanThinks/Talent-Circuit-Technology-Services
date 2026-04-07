import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Industries from "@/components/Industries";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-slate-50 border-b border-slate-100 py-12 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="font-jakarta text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-normal">ABOUT <span className="text-sky-600 ml-2">US</span></h1>
            <p className="text-slate-500 mt-2 font-medium max-w-2xl mx-auto text-sm uppercase tracking-wide">Learn more about Talent Circuit Technology Services and our mission.</p>
          </div>
        </div>
        <About />
        <Industries />
      </main>
      <Footer />
    </>
  );
}
