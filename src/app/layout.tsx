import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talent Circuit Technology Services | Premier Recruitment & Staffing Agency",
  description:
    "Talent Circuit Technology Services – Premier Recruitment & Staffing Agency in Chennai. Expert talent acquisition, contract staffing, executive search and HR outsourcing solutions.",
  keywords:
    "Recruitment Agency Chennai, Staffing Solutions, Talent Acquisition, HR Consulting, IT Staffing, Executive Search",
  openGraph: {
    title: "Talent Circuit Technology Services | Premier Recruitment Agency",
    description:
      "Connecting elite talent with global opportunities. Your trusted partner in staffing, recruitment and strategic outsourcing.",
    type: "website",
    url: "https://talentcircuittech.com",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} overflow-x-hidden`} suppressHydrationWarning>
      <body className="bg-white text-slate-700 antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
