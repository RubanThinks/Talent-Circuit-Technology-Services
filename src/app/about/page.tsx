import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Stats from "@/components/Stats";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-900 py-24 text-white text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto px-6">
            Leading the way in human-centric recruitment for over 15 years.
          </p>
        </div>
        <About />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
