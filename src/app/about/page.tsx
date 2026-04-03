import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Industries from "@/components/Industries";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-900 py-24 text-white text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-slate-400 max-w-3xl mx-auto px-6 leading-relaxed">
            Talent Circuit Technology Services (TCTS) is a recruitment and consulting firm focused on delivering the right talent through a structured and result-oriented approach. We partner with organizations to understand their hiring needs and provide tailored solutions that ensure long-term success.
          </p>
        </div>
        <About />
        <Industries />
      </main>
      <Footer />
    </>
  );
}
