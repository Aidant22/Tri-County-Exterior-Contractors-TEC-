"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const servicesOptions = [
    'Mowing & Lawncare',
    'Mulching & Mulch Beds',
    'Bush & Tree Removal',
    'Bush Trimming',
    'Land Clearing',
    'Gutter & Roof Cleaning',
    'Power Washing & Soft Washing',
    'Spring Cleanups',
    'Fall Cleanups',
    'Clean Outs',
    'Weeding',
  ];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    setErrorMessage(null);

    const fd = new FormData(formRef.current);
    const from_name = fd.get('from_name')?.toString() ?? '';
    const reply_to = fd.get('reply_to')?.toString() ?? '';
    const phone = fd.get('phone')?.toString() ?? '';
    const message = fd.get('message')?.toString() ?? '';
    const servicesArr = fd.getAll('service_needed').map((v) => String(v));
    const services = servicesArr.join(', ');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('EmailJS is not configured (missing env vars).');
      return;
    }

    try {
      // send the business notification to the company inbox
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: 'Tri-County Exterior Contractors',
          to_email: '22atobar@gmail.com',
          name: from_name,
          email: reply_to,
          from_name,
          reply_to,
          phone,
          services,
          message,
        },
        publicKey
      );

      // send the confirmation auto-reply to the customer
      const confirmTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONFIRM_ID;
      if (confirmTemplate && reply_to) {
        await emailjs.send(
          serviceId,
          confirmTemplate,
          {
            to_name: from_name,
            to_email: reply_to,
            from_name,
            reply_to,
            phone,
            services,
            message,
            email: reply_to,
          },
          publicKey
        );
      }

      setStatus('success');
      formRef.current.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.text || err?.message || 'Failed to send message.');
    }
  };

  return (
    <div className="w-full">
      
      {/* 1. Hero Section (Visual Continuity) */}
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
        
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-slate-200 drop-shadow">
            Ready to transform your property? Reach out for a free estimate today.
          </p>
        </div>
      </section>

      {/* 2. Main Content Split Section */}
      <section className="bg-slate-50 text-slate-800 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md ring-1 ring-slate-200/60">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">CONTACT US</h2>
            <p className="text-slate-600 mb-6 text-sm">Fill out the form below and we will get back to you as soon as possible.</p>
            
            {status === 'success' ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                    <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm4.53 7.22a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.97 1.97 4.97-4.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request sent successfully!</h3>
                <p className="max-w-lg mx-auto text-sm leading-6 text-slate-600">
                  Thanks for reaching out. Your request is on its way, and our family will contact you shortly to confirm the details.
                </p>
              </div>
            ) : (
              <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input 
                    name="from_name"
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="419-555-0123" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                    <input 
                      name="reply_to"
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Service Needed</label>
                  <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all flex items-center justify-between">
                    <span className="text-slate-700">{selectedServices.length ? selectedServices.join(', ') : 'Select one or more services'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-lg p-3 max-h-56 overflow-auto">
                      {servicesOptions.map((opt) => {
                        const checked = selectedServices.includes(opt);
                        return (
                          <label key={opt} className="flex items-center gap-3 py-1 px-2 rounded hover:bg-slate-50">
                            <input type="checkbox" checked={checked} onChange={() => {
                              setSelectedServices((prev) => prev.includes(opt) ? prev.filter(s => s !== opt) : [...prev, opt]);
                            }} className="h-4 w-4" />
                            <span className="text-sm text-slate-700">{opt}</span>
                          </label>
                        );
                      })}
                      <div className="mt-2 flex justify-end">
                        <button type="button" onClick={() => setServicesOpen(false)} className="text-sm text-slate-600 hover:underline">Done</button>
                      </div>
                    </div>
                  )}

                  {selectedServices.map((s) => (
                    <input key={s} type="hidden" name="service_needed" value={s} />
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Project Details</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    placeholder="Tell us a little bit about your property and what you're looking to get done..." 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0047AB] transition-all"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#0047AB] disabled:opacity-60 hover:bg-[#003b94] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-200"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && <p className="mt-2 text-sm text-red-600">{errorMessage || 'Failed to send message.'}</p>}
                </div>
              </form>
            )}          </div>

          {/* Right Column: Direct Info & Hours */}
          <div className="space-y-8 md:pl-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Direct Contact Info</h2>
              <p className="text-lg text-slate-600 mb-6">
                Prefer a quick phone call or email? Reach out to us directly. We're happy to discuss your exterior contractor needs anytime.
              </p>
              
              <div className="space-y-4">
                <Link href="tel:419-277-0435" className="flex items-center gap-4 group p-3 -m-3 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-[#e8f0ff] text-[#0047AB] rounded-xl group-hover:bg-[#0047AB] group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call or Text</p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-[#0047AB] transition-colors">419-277-0435</p>
                  </div>
                </Link>

                <Link href="mailto:tricountyexteriorcontractors@gmail.com" className="flex items-center gap-4 group p-3 -m-3 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-[#e8f0ff] text-[#0047AB] rounded-xl group-hover:bg-[#0047AB] group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h18M3 8.25v9.75A2.25 2.25 0 0 0 5.25 20.25h13.5A2.25 2.25 0 0 0 21 18V8.25M3 8.25l9 6.75L21 8.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                    <p className="text-lg font-semibold text-slate-800">tricountyexteriorcontractors@gmail.com</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4 p-3 -m-3">
                  <div className="p-3 bg-[#e8f0ff] text-[#0047AB] rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Area</p>
                    <p className="text-lg font-semibold text-slate-800">Wood, Lucas, &amp; Ottawa Counties</p>
                  </div>
                </div>
                
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Leave a Review</h3>
                  <p className="mt-2 text-sm text-slate-600">If we exceeded your expectations, please consider leaving a review. It helps our small business grow.</p>
                  <div className="mt-3">
                    <a href={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "https://g.page/PLACEHOLDER_REVIEW_LINK"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-4 py-2 rounded-lg hover:bg-[#003b94]">Leave a review</a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Operating Hours</h3>
              <dl className="space-y-2 text-sm border-l-2 border-[#0047AB] pl-4">
                <div className="flex justify-between max-w-xs">
                  <dt className="text-slate-500 font-medium">Monday – Friday</dt>
                  <dd className="font-semibold text-slate-900">8:00 AM – 6:00 PM</dd>
                </div>
                <div className="flex justify-between max-w-xs">
                  <dt className="text-slate-500 font-medium">Saturday</dt>
                  <dd className="font-semibold text-slate-900">8:00 AM – 6:00 PM</dd>
                </div>
                <div className="flex justify-between max-w-xs">
                  <dt className="text-slate-500 font-medium">Sunday</dt>
                  <dd className="text-slate-900 font-bold">8:00 AM – 6:00 PM</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </section>
      <Script id="breadcrumb-contact" strategy="afterInteractive" type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "${process.env.NEXT_PUBLIC_SITE_URL || "https://tecexterior.com"}/contact" }
          ]
        }`}
      </Script>

    </div>
  );
}