import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-950 py-24 text-white text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-black uppercase mb-4 tracking-tighter">Industries We Serve</h1>
          <p className="text-slate-400 max-w-2xl mx-auto px-6 font-medium">
            Deep domain expertise across the globe's most critical sectors.
          </p>
        </div>
        <Industries />
      </main>
      <Footer />
    </>
  );
}
