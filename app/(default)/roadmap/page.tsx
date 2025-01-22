export const metadata = {
  title: 'Integrations Post - Stellar',
  description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import IntegrationImg from '@/public/images/integration-image.png'
import IntegrationIcon from '@/public/images/circle-logo.svg'
import Star from '@/public/images/star.svg'
import Avatar from '@/public/images/avatar-07.jpg'
import Particles from '@/components/particles'

export default function IntegrationsSingle() {
  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-emerald-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-emerald-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          <div className="md:flex md:justify-between">

            {/* Page content */}
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-[720px]">

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-16">

                  {/* Back button */}
                  <div className="shrink-0">
                    <div className="sticky top-6">
                      <Link className="flex items-center justify-center w-9 h-9 group border border-transparent rounded-full [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none" href="/">
                        <span className="sr-only">Go back</span>
                        <svg className="w-4 h-4 fill-emerald-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.zinc.800),transparent)1]">

                      <figure className="bg-zinc-700/20 border border-zinc-300/10 p-4 rounded-3xl mb-8">
                        <Image className="w-full rounded-2xl" src={IntegrationImg} width={586} height={316} alt="Integration image" />
                      </figure>

                      <h1 className="sr-only">30-Day Roadmap</h1>

                      {/* Post content */}
                      <div className="prose max-w-none text-zinc-400 prose-headings:text-zinc-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-emerald-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-emerald-500 prose-blockquote:font-medium prose-blockquote:text-zinc-300 prose-blockquote:italic">
                        <h2>Overview</h2>
                        <p>
                          This is your ultimate guide to turning your vision into a reality. This expertly crafted 30-day roadmap takes you through every essential phase of launching, scaling, and sustaining a profitable online business. From selecting a profitable niche and crafting a standout brand to setting up your store, driving traffic, and scaling for long-term success, this book covers it all with actionable, proven strategies that you can implement right away.
                        </p>
                        <h2>Structure</h2>
                        <p>
                          Each chapter is designed to guide you through a critical stage of your journey. You’ll learn how to <strong className="text-zinc-50 font-medium">pinpoint your niche</strong> in just three days, <strong className="text-zinc-50 font-medium">craft a brand</strong> that resonates with your audience, and <strong className="text-zinc-50 font-medium">create a professional e-commerce store</strong> optimized for conversions. Dive into <strong className="text-zinc-50 font-medium">product development and sourcing</strong>, master <strong className="text-zinc-50 font-medium">traffic generation</strong> through organic and paid strategies, and discover how to convert visitors into lifelong customers.
                        <p>
                          As you near the finish line, the book helps you scale your operations with <strong className="text-zinc-50 font-medium">automation</strong>, build a <strong className="text-zinc-50 font-medium">winning team</strong>, and track the <strong className="text-zinc-50 font-medium">key metrics that drive sustained growth</strong>. With this book, you’ll not only achieve success in 30 days but also gain the tools to sustain and expand your empire for years to come.
                        </p>
                        </p>
                      </div>
                    </article>

                    <aside className="pl-6 border-l-2 border-emerald-500">
                      <p className="inline-flex font-medium italic text-lg bg-clip-text text-transparent bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 pb-4">" When I was starting out, I wasted money on countless overpriced, BS courses packed with outdated and useless info. I wish I’d had this book back then—something clear, actionable, and actually effective. No fluff, just results. "</p>
                      <footer className="flex items-center space-x-4">
                        <Image className="shrink-0 rounded-full" src={Avatar} width={32} height={32} alt="Author" />
                        <div className="text-sm font-medium text-zinc-300">
                          Nathaniel R. Black <span className="text-zinc-700">-</span> <a className="text-emerald-500 hover:underline" href="#0">Streamline Supplements</a>
                        </div>
                      </footer>
                    </aside>
                  </div>

                </div>

              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:w-64 lg:w-80 md:shrink-0 md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20">
              <div className="sticky top-6 md:pl-6 lg:pl-10">

                {/* Sidebar content */}
                <div className="space-y-6">

                  {/* Widget */}
                  <div className="bg-gradient-to-tr from-zinc-800 to-zinc-800/25 rounded-3xl border border-zinc-800">
                    <div className="px-5 py-6">
                      <div className="text-center mb-5">
                        <div className="mb-4">
                          <div className="relative inline-flex">
                            <Image src={IntegrationIcon} width={100} height={100} alt="Icon 08" />
                            <Image className="absolute top-0 -right-1" src={Star} width={24} height={24} alt="Star" aria-hidden="true" />
                          </div>
                        </div>
                        <button className="btn-sm text-zinc-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/70 before:rounded-full before:pointer-events-none">
                          <span className="relative inline-flex items-center">
                            <span className="animate-shimmer bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-[length:200%_100%] bg-clip-text text-transparent font-bold mr-2">30% Off</span>
                            Buy E-Book <span className="tracking-normal text-emerald-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                          </span>
                        </button>
                      </div>
                      <ul className="text-sm">
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.zinc.700/.3),theme(colors.zinc.700),theme(colors.zinc.700/.3))1]">
                          <span className="text-zinc-400">Roadmap Length</span>
                          <span className="text-zinc-300 font-medium">30d</span>
                        </li>
                        {/* <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.zinc.700/.3),theme(colors.zinc.700),theme(colors.zinc.700/.3))1]">
                          <span className="text-zinc-400">Website</span>
                          <a className="text-emerald-500 font-medium flex items-center space-x-1" href="#0">
                            <span>github.com</span>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                              <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                            </svg>
                          </a>
                        </li> */}
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.zinc.700/.3),theme(colors.zinc.700),theme(colors.zinc.700/.3))1]">
                          <span className="text-zinc-400">Year Published</span>
                          <span className="animate-shimmer bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-[length:200%_100%] bg-clip-text text-transparent font-bold mr-2">2025</span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.zinc.700/.3),theme(colors.zinc.700),theme(colors.zinc.700/.3))1]">
                          <span className="text-zinc-400">Downloads</span>
                          <span className="text-zinc-300 font-medium">11K+</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  )
}
