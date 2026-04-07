import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Globe, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Permanent Staffing", href: "/services" },
  { label: "Contract Staffing", href: "/services" },
  { label: "Executive Search", href: "/services" },
  { label: "RPO Services", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-white/5">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-600/30 shadow-lg flex-shrink-0">
                <Image
                  src="/images/tcts-logo.jpeg"
                  alt="Talent Circuit Technology Services Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg text-white tracking-tight leading-none uppercase">
                  Talent Circuit
                </span>
                <span className="text-[10px] font-bold text-sky-600 tracking-[0.15em] uppercase mt-1">
                  Technology Services
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed mb-8 max-w-xs font-medium uppercase tracking-wider opacity-70">
              Defining the frontier of human capital through precision
              recruitment and strategic sourcing.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: null, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-sky-600 text-white transition-all group"
                  aria-label={s.label}
                >
                  {s.label === "WhatsApp" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ) : (
                    s.icon && <s.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-[0.3em] mb-8">
              Organization
            </h4>
            <div className="space-y-4">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block text-xs font-bold uppercase tracking-widest hover:text-sky-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-[0.3em] mb-8">
              Expertise
            </h4>
            <div className="space-y-4">
              {serviceLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="block text-xs font-bold uppercase tracking-widest hover:text-sky-500 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-[0.3em] mb-8">
              Global Support
            </h4>
            <div className="space-y-5 text-xs font-bold uppercase tracking-widest leading-loose">
              <a
                href="https://www.google.com/maps/search/?api=1&query=49C,+Jalladianpet,+Chennai+–+600100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-sky-500 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-sky-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>49C, Jalladianpet, <br /> Chennai – 600100</span>
              </a>
              <a
                href="mailto:HR@talentcircuittech.com"
                className="flex items-center gap-3 hover:text-sky-500 transition-colors group"
              >
                <Mail className="w-4 h-4 text-sky-600 shrink-0 group-hover:scale-110 transition-transform" />
                HR@talentcircuittech.com
              </a>
              <Link
                href="/"
                className="flex items-center gap-3 hover:text-sky-500 transition-colors group"
              >
                <Globe className="w-4 h-4 text-sky-600 shrink-0 group-hover:scale-110 transition-transform" />
                talentcircuittech.com
              </Link>
              <a
                href="tel:+919629616173"
                className="flex items-center gap-3 hover:text-sky-500 transition-colors group pt-2 border-t border-white/5"
              >
                <div className="w-4 h-4 text-sky-600 shrink-0 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                +91 96296 16173
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-10 gap-6 text-[10px] uppercase font-bold tracking-[0.2em]">
          <p className="opacity-40">&copy; 2026 Talent Circuit Technology Services.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors opacity-60">Privacy Architectural</a>
            <a href="#" className="hover:text-white transition-colors opacity-60">Terms of Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
