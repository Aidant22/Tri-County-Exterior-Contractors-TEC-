import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tri-County Exterior Contractors — Lawncare & Landscaping in Bowling Green, OH & Northwest Ohio",
  description: "Professional lawn care, landscaping, mulching, power washing, and seasonal cleanup serving Bowling Green, Wood County, and Northwest Ohio. Call 419-277-0435 for a free quote.",
  openGraph: {
    title: "Tri-County Exterior Contractors — Lawncare & Landscaping in Bowling Green, OH",
    description: "Professional lawn care, landscaping, mulching, power washing, and seasonal cleanup serving Bowling Green and Northwest Ohio.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com",
    siteName: "Tri-County Exterior Contractors",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/work_images/Mowed_lawn_2.jpeg`,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col bg-slate-100 text-slate-900">
      <Script id="ld-json" strategy="afterInteractive" type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#localbusiness",
          "@type": "LocalBusiness",
          "name": "Tri-County Exterior Contractors",
          "image": ["${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/work_images/Mowed_lawn_2.jpeg"],
          "telephone": "419-277-0435",
          "email": "tricountyexteriorcontractors@gmail.com",
          "url": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}",
          "sameAs": [],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "419-277-0435",
              "contactType": "customer service",
              "areaServed": ["Wood County", "Lucas County", "Ottawa County"],
              "availableLanguage": ["English"]
            }
          ],
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bowling Green",
            "addressRegion": "OH",
            "addressCountry": "US"
          },
          "areaServed": ["Bowling Green", "Wood County", "Lucas County", "Ottawa County"],
          "serviceType": ["Lawn Care", "Landscaping", "Mulching", "Power Washing", "Seasonal Cleanup"]
        }`}
      </Script>
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </body>
  </html>
  );
}
