import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Talent Circuit Technology Services`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-600/5 skew-x-12 transform origin-top" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-sky-500">{service.title}</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-sky-600 flex items-center justify-center text-white mb-8">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="font-heading text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter italic mb-8 leading-[0.9]">
              {service.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-sky-500">{service.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
          {/* Main Info */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <h2 className="font-heading text-xs font-bold text-sky-600 uppercase tracking-[0.4em] mb-6">
                Service Overview
              </h2>
              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-loose mb-10 italic">
                &ldquo;{service.overview}&rdquo;
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-950 uppercase tracking-widest mb-8 pb-4 border-b border-slate-100">
                    Core Capabilities
                  </h3>
                  <ul className="space-y-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4 text-sm text-slate-600 font-bold uppercase tracking-wide leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-950 uppercase tracking-widest mb-8 pb-4 border-b border-slate-100">
                    Client Benefits
                  </h3>
                  <ul className="space-y-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-4 text-sm text-slate-600 font-bold uppercase tracking-wide leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0 mt-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-slate-50 p-10 sm:p-16 border-l-[10px] border-sky-600 mt-20">
              <h3 className="font-heading text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 italic">
                Ready to optimize your <span className="text-sky-600">{service.title}</span>?
              </h3>
              <p className="text-slate-600 mb-10 font-bold uppercase tracking-widest text-xs leading-relaxed max-w-lg">
                Let our specialized consultants architect a recruitment framework 
                tailored to your organizational velocity.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-slate-950 text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-sky-600 transition-all group"
              >
                Initiate Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-white border border-slate-100 p-10">
              <h4 className="font-heading text-xs font-bold text-slate-950 uppercase tracking-[0.4em] mb-10">
                Other Expertises
              </h4>
              <div className="space-y-4">
                {Object.entries(servicesData)
                  .filter(([slug]) => slug !== params.slug)
                  .map(([slug, s]) => (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="flex items-center justify-between group p-4 border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-600 hover:text-sky-600"
                    >
                      {s.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
              </div>
            </div>

            <div className="bg-slate-950 p-10 text-white relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" className="fill-current text-white/20">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
               </div>

              <h4 className="font-heading text-xl font-black uppercase tracking-tight mb-6 italic relative z-10">
                Precision <br /> <span className="text-sky-500">Recruitment</span>
              </h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose mb-10 relative z-10">
                We bridge the gap between global enterprises and top-tier talent.
              </p>
              <div className="space-y-6 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Contact Office</p>
                <Link href="tel:+919840382636" className="block text-sm font-black hover:text-sky-400 transition-colors tracking-widest">
                  +91 98403 82636
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
