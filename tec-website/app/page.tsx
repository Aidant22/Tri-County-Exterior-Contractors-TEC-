import Footer from "@/components/ui/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative flex h-[calc(100vh-64px)] items-center justify-center px-4 text-center overflow-hidden">
        <Image 
            src="/work_images/Mowed_lawn_2.jpeg" 
            alt="picture of a lawn mowed by TEC" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover object-center -z-20"
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-md">
            Tri-County <span className="text-[#246dd3]">Exterior</span> Contractors
          </h1>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
            A local business founded by a passionate husband and wife, we deliver dependable landscaping service with honesty, care, and hometown values. Click here to review our{" "}
            <Link href="/services" className="text-[#3384f7] font-semibold underline underline-offset-4 hover:text-sky-400 transition-colors">
              services
            </Link>.
          </p>
          <div className="pt-4 flex justify-center">
            <Link 
              href="tel:419-277-0435" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#0047AB] hover:text-white transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5 animate-pulse"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>419-277-0435</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#ebf2ff] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0047AB]">
                Ohio exterior services
              </span>
              <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                The landscaping experts for homes and properties across Toledo and the surrounding counties.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Tri-County Exterior Contractors brings dependable lawn care, cleanup, and maintenance together as one dedicated & passionate business. Enjoy reliable service, honest pricing, and beautiful results on every visit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0047AB] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#0047AB]/15 transition hover:bg-[#003b94]">
                  Contact Us for a Free Quote
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-[#0047AB] px-6 py-3 text-base font-semibold text-[#0047AB] transition hover:bg-[#ebf2ff]">
                  View Services
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0047AB]">Local coverage</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Serving Wood, Lucas, and Ottawa counties</h3>
                <p className="mt-3 text-slate-600">A local business focused on fast, responsive service for homeowners and businesses throughout Northwest Ohio.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0047AB]">Trusted results</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Quality you can see</h3>
                <p className="mt-3 text-slate-600">From crisp edges to clean beds, we make sure every property looks professionally maintained and inviting.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0047AB]">Full-service care</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Everything from mowing to cleanup</h3>
                <p className="mt-3 text-slate-600">One trusted business for mowing, trimming, mulching, power washing, and seasonal property refreshes.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0047AB]">Customer-first</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Clear pricing, no surprises</h3>
                <p className="mt-3 text-slate-600">You get transparent estimates, friendly communication, and dependable follow-through on every job.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-[#ebf2ff] p-8 shadow-sm">
              <p className="text-4xl font-black text-[#0047AB]">3</p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-500">Counties served</p>
            </div>
            <div className="rounded-3xl bg-[#ebf2ff] p-8 shadow-sm">
              <p className="text-4xl font-black text-[#0047AB]">100%</p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-500">Customer Satisfaction</p>
            </div>
            <div className="rounded-3xl bg-[#ebf2ff] p-8 shadow-sm">
              <p className="text-4xl font-black text-[#0047AB]">Free Quotes</p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-500">No obligation estimates</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-4xl bg-white p-8 shadow-lg shadow-slate-200/40 border border-slate-200">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0047AB]/10 text-[#0047AB]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M4.5 5.25h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5Z" />
                  <path d="M4.5 11.25h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5Z" />
                  <path d="M4.5 17.25h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Mowing & Lawncare</h3>
              <p className="mt-3 text-slate-600">Precision mowing, trimming, edging, and lawn health care that keeps your yard looking its best.</p>
            </div>
            <div className="rounded-4xl bg-white p-8 shadow-lg shadow-slate-200/40 border border-slate-200">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0047AB]/10 text-[#0047AB]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M11.25 3.75h1.5v16.5h-1.5V3.75Z" />
                  <path d="M5.25 15.75h1.5v4.5h-1.5v-4.5Z" />
                  <path d="M17.25 10.5h1.5v9.75h-1.5V10.5Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Mulching & Garden Care</h3>
              <p className="mt-3 text-slate-600">Fresh mulch, weed control, and garden cleanup for healthier beds and stronger curb appeal.</p>
            </div>
            <div className="rounded-4xl bg-white p-8 shadow-lg shadow-slate-200/40 border border-slate-200">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0047AB]/10 text-[#0047AB]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M5.25 7.5h13.5v1.5H5.25V7.5Z" />
                  <path d="M5.25 12.75h13.5v1.5H5.25v-1.5Z" />
                  <path d="M5.25 18h13.5v1.5H5.25V18Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Cleanup & Power Washing</h3>
              <p className="mt-3 text-slate-600">Seasonal debris removal, pressure washing, and cleanout services for a refreshed exterior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}