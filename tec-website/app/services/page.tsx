import Image from 'next/image';
import Link from 'next/link';

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
                                src="/work_images/roundabout_before.jpeg" 
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
            <section className="py-20 px-4 max-w-5xl mx-auto">
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

        </div>
    );
}