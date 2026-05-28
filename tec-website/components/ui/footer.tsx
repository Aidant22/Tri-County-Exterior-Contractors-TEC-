import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              Tri-County Exterior Contractors
            </h2>
            <p className="max-w-sm text-slate-300 leading-7">
              Dependable lawn care, landscaping, cleanup, and exterior maintenance for homes across Wood, Lucas, and Ottawa counties.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/locations/bowling-green" className="hover:text-white transition-colors">
                  Bowling Green
                </Link>
              </li>
              <li>
                <Link href="/locations/perrysburg" className="hover:text-white transition-colors">
                  Perrysburg
                </Link>
              </li>
              <li>
                <Link href="/locations/toledo" className="hover:text-white transition-colors">
                  Toledo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact Info
            </h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-white">Phone: </span> 
                <Link href="tel:419-277-0435" className="hover:text-white transition-colors">
                  419-277-0435
                </Link>
              </p>
              <p>
                <span className="font-semibold text-white">Email: </span> 
                <Link href="mailto:tricountyexteriorcontractors@gmail.com" className="hover:text-white transition-colors">
                  tricountyexteriorcontractors@gmail.com
                </Link>
              </p>
              <p>
                <span className="font-semibold text-white">Service Area: </span> Wood, Lucas &amp; Ottawa counties
              </p>
              {/* <p>
                <span className="font-semibold text-white">Reviews: </span>
                <a href={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "https://g.page/PLACEHOLDER_REVIEW_LINK"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Leave a review
                </a>
              </p> */}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tri-County Exterior Contractors. All rights reserved.</p>
          <p>Trusted local landscaping service with honest pricing and hometown values.</p>
        </div>
      </div>
    </footer>
  );
}
