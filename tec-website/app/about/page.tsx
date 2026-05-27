import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function AboutPage() {
    return (
        <div>
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
            
            <div className="max-w-4xl space-y-4">
            <span className="text-sky-600 uppercase font-bold tracking-widest text-sm sm:text-base">
                Get To Know Us
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
                Our Story &amp; Values
            </h1>
            </div>
        </section>

        <div className="bg-slate-50 text-slate-800 relative z-10">
            
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Locally Run and Rooted in Quality
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">
                    At Tri-County Exterior Contractors, we believe that your property's exterior is its first impression. Founded with a passion for precise workmanship and outstanding client relations, we pride ourselves in striding to become the premier choice for residential landscaping and lawncare in Northwest Ohio.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                    Whether managing large-scale median transformations or upkeeping neighborhood lawns, we treat every property as if it were our own. We take pride in building long-lasting relationships with our clients based on honesty, transparency, and top-tier results.
                </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md ring-1 ring-slate-200/60 grid grid-cols-2 gap-8 text-center">

                <div className="space-y-2">
                    <span className="block text-4xl sm:text-5xl font-black text-slate-900">3</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Counties Served</span>
                </div>
                <div className="space-y-2">
                    <span className="block text-4xl sm:text-5xl font-black text-slate-900">Top</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Tier Quality</span>
                </div>                
                <div className="space-y-2">
                    <span className="block text-3xl sm:text-4xl font-black text-[#0047AB]">Guaranteed</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Customer Satisfaction</span>
                </div>
                {/* <div className="space-y-2">
                    <span className="block text-4xl sm:text-5xl font-black text-[#0047AB]">24/7</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Support</span>
                </div> */}
                </div>

            </div>
            </section>

            <hr className="border-slate-200 max-w-5xl mx-auto" />

            <section className="py-20 px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Our Core Values
            </h2>
            <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
                These are the foundational principles that guide every cut, trim, and landscape design we deliver.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-white rounded-xl p-8 shadow-sm ring-1 ring-slate-200/60 hover:shadow-md transition-all duration-200 text-left space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebf2ff] flex items-center justify-center text-[#0047AB]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Uncompromising Quality</h3>
                <p className="text-slate-600">
                    We guarantee that every edge is clean, every lawn is lush, and every plant is healthy.
                </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm ring-1 ring-slate-200/60 hover:shadow-md transition-all duration-200 text-left space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebf2ff] flex items-center justify-center text-[#0047AB]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379L12 21l3.62-2.884c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Reliable Communication</h3>
                <p className="text-slate-600">
                    No surprises here. We pride ourselves on timely arrivals, swift responses, and open pathways of communication, ensuring your plans are always executed exactly as promised.
                </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm ring-1 ring-slate-200/60 hover:shadow-md transition-all duration-200 text-left space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#ebf2ff] flex items-center justify-center text-[#0047AB]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l4.038 3.332a.75.75 0 0 1 .23.834l-1.571 4.542a.75.75 0 0 1-.84.492l-4.524-.755a.75.75 0 0 1-.498-.944l1.517-4.6a.75.75 0 0 1 .808-.495l2.63.263c.237.024.475-.06.637-.234L12.75 3.03ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Local Stewardship</h3>
                <p className="text-slate-600">
                    Because we live and work in the Wood, Ottawa, and Lucas communities, we are committed to serving our neighbors with quality work and personalized attention.
                </p>
                </div>

            </div>
            </section>

            <section className="bg-slate-900 text-white py-16 px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Ready to Upgrade Your Curb Appeal?
                </h2>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center bg-[#0047AB] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#003b94] transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    Explore Services
                </Link>
                <Link 
                    href="tel:419-277-0435" 
                    className="inline-flex items-center justify-center bg-white text-slate-950 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-slate-100 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    Call (419) 277-0435
                </Link>
                </div>
            </div>
            </section>
        </div>
        <Script id="breadcrumb-about" strategy="afterInteractive" type="application/ld+json">
            {`{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/" },
                    { "@type": "ListItem", "position": 2, "name": "About", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/about" }
                ]
            }`}
        </Script>
        </div>
    )
}