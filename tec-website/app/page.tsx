import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Image src={"/work_images/Mowed_lawn_2.jpeg"} alt="picture of a lawn mowed by TEC" fill sizes="100vw" style={{objectFit: 'cover'}} className="-z-10"/>
        <Header />
        <div className="flex flex-col flex-1 items-center min-h-screen justify-center ">            
          <p className="text-3xl font-bold pb-2 font-mono text-white">
              Tri-County Exterior Contractors
          </p>
          <p className="text-lg font-bold font-mono pb-8 text-white">
            One place for all of your landscaping needs
          </p>
          <div>
            <Link href="tel:419-277-0435" className="flex bg-white rounded-lg p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              419-277-0435
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
