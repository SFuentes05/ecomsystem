import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">

          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-emerald-500 before:blur-md">
                <a className="btn-sm py-0.5 text-zinc-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.emerald.500),_theme(colors.emerald.500))_padding-box,_linear-gradient(theme(colors.emerald.500),_theme(colors.emerald.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/50 before:rounded-full before:pointer-events-none shadow" href="#0">
                  <span className="relative inline-flex items-center">
                    Get Access to our database of 1,000+ products and tools <span className="tracking-normal text-emerald-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
              </div>
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 pb-4" data-aos="fade-down">
              Launch Your E-commerce Empire with Data-Driven Decisions
            </h1>
            <p className="text-lg text-zinc-300 mb-8" data-aos="fade-down" data-aos-delay="200">
              Access our curated database of 1,000+ e-commerce tools, trending products, and market insights. Skip the expensive courses - get everything you need to build and scale your store.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a className="btn text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
                  Get Started <span className="tracking-normal text-emerald-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <a className="btn text-zinc-200 hover:text-white bg-zinc-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" href="#features">
                  <svg className="shrink-0 fill-zinc-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Learn More</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}