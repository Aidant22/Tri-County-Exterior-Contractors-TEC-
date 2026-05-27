import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Residential Landscaping & Lawncare Services — Tri-County Exterior Contractors",
    description: "Comprehensive lawncare, mulching, power washing, and seasonal cleanup services across Northwest Ohio. Free quotes and dependable local service.",
};

export default function ServicesPage() {
    return (
        <div className="font-sans text-slate-800 selection:bg-[#c7d9ff]">
            <section className="relative flex h-[calc(100vh-64px)] items-center justify-center px-4 text-center overflow-hidden">
                <Image 
                    src="/work_images/Mowed_lawn_2.jpeg" 
                    alt="picture of a lawn mowed by TEC" 
                    fill 
                    priority // Forces immediate loading for the first thing the user sees
                    sizes="100vw" 
                    className="object-cover object-center -z-20 border-b-4 border-black"
                />

                <div className="absolute inset-0 bg-black/40 -z-10" /> 
                
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
                        Residential Landscaping &amp; Lawncare Services
                    </h1>
                </div>
            </section>

            <Script id="breadcrumb-services" strategy="afterInteractive" type="application/ld+json">
                {`{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/" },
                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/services" }
                    ]
                }`}
            </Script>

            {/* 2. Top Tier Services & Before/After Gallery */}
            <section className="py-20 px-4 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                    We provide top tier landscaping and lawncare services
                </h2>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                    See how we transform overgrown spaces into beautiful areas that accentuate your home.
                </p>
                
                {/* Before / After Images Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-xl bg-white p-3 shadow-md ring-1 ring-slate-100">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image 
                                src="/work_images/Roundabout_before.jpeg" 
                                alt="Picture of a median before TEC transformed it" 
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="mt-3 font-semibold text-slate-500 uppercase tracking-wider text-sm">Before</p>
                    </div>

                    <div className="overflow-hidden rounded-xl bg-white p-3 shadow-md ring-1 ring-slate-100">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image 
                                src="/work_images/roundabout_after.jpeg" 
                                alt="Picture of a median after TEC transformed it" 
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="mt-3 font-semibold text-[#0047AB] uppercase tracking-wider text-sm">After</p>
                    </div>
                </div>
            </section>

            <section className="pt-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 text-center">
                    Gallery of Recent Lawncare Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200/60">
                        <div className="relative aspect-4/3 w-full overflow-hidden">
                            <Image
                                src="/work_images/Mowed_lawn_1.jpeg"
                                alt="Picture of a freshly mowed lawn by TEC"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200/60">
                        <div className="relative aspect-4/3 w-full overflow-hidden">
                            <Image
                                src="/work_images/Mowed_lawn_2.jpeg"
                                alt="Picture of a finished lawncare project by TEC"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200/60">
                        <div className="relative aspect-4/3 w-full overflow-hidden">
                            <Image
                                src="/work_images/Mowed_lawn_3.jpeg"
                                alt="Picture of a clean, trimmed lawn by TEC"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-6xl mx-auto">
                <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 text-center">
                        Services We Offer
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Mowing &amp; Lawncare</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Mulching &amp; Mulch Beds</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Bush &amp; Tree Removal</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Bush Trimming</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Land Clearing</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Gutter &amp; Roof Cleaning</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Power Washing &amp; Soft Washing</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Spring Cleanups</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Fall Cleanups</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Clean Outs</li>
                                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0047AB]" />Weeding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200 max-w-5xl mx-auto" />

            {/* 3. Service Areas Section */}
            <section id="service-areas" className="py-20 px-4 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Text */}
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Our Service Areas
                        </h2>
                        <p className="text-xl leading-relaxed text-slate-600">
                            We proudly serve communities throughout the greater <span className="font-semibold text-slate-900">Northwest Ohio</span> area, including <span className="text-[#0047AB] font-semibold">Wood County</span>, <span className="text-[#0047AB] font-semibold">Ottawa County</span>, and <span className="text-[#0047AB] font-semibold">Lucas County</span>.
                        </p>
                    </div>

                    {/* Right Column: Map Image */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="overflow-hidden rounded-xl bg-white p-2 shadow-md ring-1 ring-slate-100">
                            <Image 
                                src="/additional_images/Wood_lucas_ottawa.png" 
                                alt="Map of Wood, Lucas, and Ottawa counties" 
                                width={700} 
                                height={400}
                                className="rounded-lg object-contain"
                            />
                        </div>
                        <p className="mt-2 text-xs text-slate-400">
                            Source: <Link href="https://dfig7j11pjx8o.cloudfront.net/documents/2021_Toledo_Region_CEDS_Report.pdf" target="_blank" className="hover:underline hover:text-slate-600 transition-colors">2021 Toledo Region CEDS Report</Link>
                        </p>
                    </div>

                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
                <p className="text-sm text-slate-600">Serving: <Link href="/locations/bowling-green" className="text-[#0047AB] font-semibold">Bowling Green</Link>, <Link href="/locations/perrysburg" className="text-[#0047AB] font-semibold">Perrysburg</Link>, <Link href="/locations/toledo" className="text-[#0047AB] font-semibold">Toledo</Link></p>
            </div>

            {/* In-depth service descriptions (SEO content) */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Detailed Services & Local Expertise</h2>
                    <p className="text-lg text-slate-600">
                        Tri-County Exterior Contractors delivers full-service lawncare and landscaping across Northwest Ohio. Whether you search for "landscaping near me", "lawncare in Northwest Ohio", or "landscaping in Bowling Green, OH", our local team offers tailored, seasonal programs that keep yards healthy, attractive, and well-maintained.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        <article className="rounded-xl p-6 border bg-white shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Mowing & Lawncare</h3>
                            <p className="text-slate-600">Weekly and bi-weekly mowing, precision edging, and targeted lawn health practices. We adjust mowing heights and care schedules to Northwest Ohio's seasons so your turf recovers quickly and stays dense and green.</p>
                        </article>

                        <article className="rounded-xl p-6 border bg-white shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Mulching & Garden Bed Care</h3>
                            <p className="text-slate-600">Fresh mulch installations, bed cleanups, and weed-management that improve plant health and boost curb appeal. We use quality mulch and correct installation methods for lasting results.</p>
                        </article>

                        <article className="rounded-xl p-6 border bg-white shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Cleanup & Power Washing</h3>
                            <p className="text-slate-600">Seasonal leaf removal, debris hauling, and pressure washing for driveways, patios, and siding. Our cleanups prepare properties for the growing season and restore outdoor living spaces.</p>
                        </article>

                        <article className="rounded-xl p-6 border bg-white shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Land Clearing & Property Refresh</h3>
                            <p className="text-slate-600">Brush removal, small-tree clearing, and site preparation for new plantings or construction. We handle challenging sites safely and efficiently to make properties usable again.</p>
                        </article>
                    </div>

                    <div className="pt-6">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#0047AB] px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#003b94]">Request a Free Quote</Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-white p-4 rounded-lg">
                            <summary className="font-semibold">What areas do you serve?</summary>
                            <p className="mt-2 text-slate-600">We serve Bowling Green and surrounding communities across Wood, Lucas, and Ottawa counties in Northwest Ohio. If you're unsure whether we service your property, call 419-277-0435 or use the contact form for a quick confirmation.</p>
                        </details>

                        <details className="bg-white p-4 rounded-lg">
                            <summary className="font-semibold">How much does lawn care cost?</summary>
                            <p className="mt-2 text-slate-600">Pricing depends on yard size, condition, and requested services. Please contact us for a free, no-obligation quote tailored to your property.</p>
                        </details>

                        <details className="bg-white p-4 rounded-lg">
                            <summary className="font-semibold">How often should I schedule service?</summary>
                            <p className="mt-2 text-slate-600">For best results in peak season, weekly service is recommended. Bi-weekly or seasonal plans are also available depending on your lawn's needs and budget. Feel free to contact us for a customized plan.</p>
                        </details>

                        <details className="bg-white p-4 rounded-lg">
                            <summary className="font-semibold">How do I get a quote?</summary>
                            <p className="mt-2 text-slate-600">Call us at 419-277-0435, email tricountyexteriorcontractors@gmail.com, or submit the contact form with photos for a fast, accurate estimate.</p>
                        </details>
                    </div>
                </div>
            </section>

            <Script id="faq-json" strategy="afterInteractive" type="application/ld+json">
                {`{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What areas do you serve?",
                            "acceptedAnswer": { "@type": "Answer", "text": "We serve Bowling Green and surrounding communities across Wood, Lucas, and Ottawa counties in Northwest Ohio. Call 419-277-0435 to confirm service for your address." }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does lawn care cost?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on yard size, condition, and services requested. We provide free, no-obligation estimates tailored to each property." }
                        },
                        {
                            "@type": "Question",
                            "name": "How often should I schedule service?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Weekly service is typically recommended during the growing season; bi-weekly and seasonal options are available. Feel free to contact us for a customized plan." }
                        },
                        {
                            "@type": "Question",
                            "name": "How do I get a quote?",
                            "acceptedAnswer": { "@type": "Answer", "text": "Call 419-277-0435, email tricountyexteriorcontractors@gmail.com, or use our contact form with photos for a fast estimate." }
                        }
                    ]
                }`}
            </Script>

            <Script id="services-json" strategy="afterInteractive" type="application/ld+json">
                {`{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Service",
                            "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#service-mowing",
                            "name": "Mowing & Lawncare",
                            "description": "Weekly and bi-weekly mowing, precision edging, and targeted lawn health practices tailored to Northwest Ohio.",
                            "serviceType": "Lawn Care",
                            "provider": { "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#localbusiness" },
                            "areaServed": ["Bowling Green","Wood County","Lucas County","Ottawa County"],
                            "offers": { "@type": "Offer", "priceRange": "$30 - $80" }
                        },
                        {
                            "@type": "Service",
                            "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#service-mulching",
                            "name": "Mulching & Garden Bed Care",
                            "description": "Mulch installation, bed prep, and weed control to improve plant health and curb appeal.",
                            "serviceType": "Mulching",
                            "provider": { "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#localbusiness" },
                            "areaServed": ["Bowling Green","Wood County","Lucas County","Ottawa County"]
                        },
                        {
                            "@type": "Service",
                            "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#service-cleanup",
                            "name": "Cleanup & Power Washing",
                            "description": "Seasonal cleanups, debris removal, and pressure washing for driveways, patios, and siding.",
                            "serviceType": "Cleanup",
                            "provider": { "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#localbusiness" },
                            "areaServed": ["Bowling Green","Wood County","Lucas County","Ottawa County"]
                        },
                        {
                            "@type": "Service",
                            "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#service-clearing",
                            "name": "Land Clearing & Property Refresh",
                            "description": "Brush removal, small-tree clearing, and site preparation for new plantings or construction.",
                            "serviceType": "Land Clearing",
                            "provider": { "@id": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/#localbusiness" },
                            "areaServed": ["Bowling Green","Wood County","Lucas County","Ottawa County"]
                        }
                    ]
                }`}
            </Script>

        </div>
    );
}