import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Landscaping in Bowling Green, OH — Tri-County Exterior Contractors",
  description: "Local Bowling Green landscaping and lawncare: mowing, mulching, cleanup, and property maintenance across Wood County. Free quotes — call 419-277-0435.",
};

export default function BowlingGreenPage() {
  return (
    <div className="w-full">
      <section className="relative flex h-[calc(100vh-64px)] items-center justify-center px-4 text-center overflow-hidden">
        <Image
          src="/work_images/Mowed_lawn_1.jpeg"
          alt="Lawncare in Bowling Green, OH by Tri-County Exterior Contractors"
          fill
          sizes="100vw"
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-md">
            Landscaping in Bowling Green, OH
          </h1>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
            Tri-County Exterior Contractors provides trusted, local lawncare and landscaping services throughout Bowling Green and Wood County. We offer mowing, mulching, seasonal cleanups, and more.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#0047AB] hover:text-white transform hover:-translate-y-0.5 transition-all duration-200">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Script id="breadcrumb-bowling-green" strategy="afterInteractive" type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/" },
            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/locations" },
            { "@type": "ListItem", "position": 3, "name": "Bowling Green", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/locations/bowling-green" }
          ]
        }`}
      </Script>

      <section className="bg-slate-50 text-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Local Lawncare Services for Bowling Green</h2>
          <p className="text-lg text-slate-600">
            We specialize in residential and small commercial landscaping tailored to Bowling Green homeowners. Our team focuses on fast response times, dependable scheduling, and delivering high-quality results every visit.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Mowing & Maintenance</h3>
              <p className="text-sm text-slate-600">Consistent mowing, trimming, edging, and seasonal maintenance to keep your yard healthy and neat.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Mulching & Bed Care</h3>
              <p className="text-sm text-slate-600">Fresh mulch installations, bed cleanups, and targeted weed control for stronger curb appeal.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Seasonal Cleanups</h3>
              <p className="text-sm text-slate-600">Spring and fall cleanups, debris removal, and power washing to prepare your property for the season.</p>
            </div>
          </div>

          <p className="text-sm text-slate-500">Looking for "landscaping near me" in Bowling Green? We recommend calling for a quick, no-obligation estimate—our team knows the local climate, soils, and seasonal timing to keep lawns looking their best.</p>

          <div className="pt-6">
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-[#0047AB] px-6 py-3 text-base font-semibold text-[#0047AB] transition hover:bg-[#ebf2ff]">See All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
