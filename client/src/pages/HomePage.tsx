import { Fragment } from 'react'
import Carousel from '../components/ui/Carousel'
import {
  ArrowRightIcon,
  AwardIcon,
  BoxCheckIcon,
  CalculatorIcon,
  ClockIcon,
  DeliveryPinIcon,
  HandshakeIcon,
  HardHatIcon,
  HeartPulseIcon,
  ShirtIcon,
  ShieldIcon,
  TruckIcon,
  UploadIcon,
  UsersIcon,
} from '../components/icons'

const features = [
  { icon: AwardIcon, title: 'Expert Embroidery', desc: 'Precision in every stitch' },
  { icon: ShirtIcon, title: 'Premium Garments', desc: 'Quality you can wear with pride' },
  { icon: TruckIcon, title: 'Fast Turnaround', desc: 'Quick service, on time always' },
  { icon: DeliveryPinIcon, title: 'Free Delivery Within 10 Miles', desc: 'Supporting your local community' },
]

const industries = [
  { name: 'Construction', image: '/images/industry-construction.jpg', icon: HardHatIcon },
  { name: 'Healthcare', image: '/images/industry-healthcare.jpg', icon: HeartPulseIcon },
  { name: 'Hospitality', image: '/images/industry-hospitality.jpg', icon: ShirtIcon },
  { name: 'Schools', image: '/images/industry-schools.jpg', icon: UsersIcon },
  { name: 'Sports Clubs', image: '/images/industry-sports.jpg', icon: ShirtIcon },
  { name: 'Corporate', image: '/images/industry-corporate.jpg', icon: UsersIcon },
]

const garments = [
  { name: 'POLOS', image: '/images/garment-polo.jpg' },
  { name: 'HOODIES', image: '/images/garment-hoodie.jpg' },
  { name: 'GILETS', image: '/images/garment-gilet.jpg' },
  { name: 'JACKETS', image: '/images/garment-jacket.jpg' },
  { name: 'FLEECES', image: '/images/garment-fleece.jpg' },
  { name: 'HATS', image: '/images/garment-hat.jpg' },
]

const categories = [
  {
    title: 'Sublimation',
    desc: 'Mugs, Slates, Air freshners & much more.',
    image: '/images/category-sublimation.jpg',
  },
  {
    title: 'Hen, Stag & celebration clothing',
    desc: 'Custom printed celebration wear for every occasion.',
    image: '/images/category-celebration.jpg',
  },
  {
    title: 'Gifts',
    desc: 'Personalised gifts for every occasion.',
    image: '/images/category-gifts.jpg',
  },
]

const portfolio = [
  { image: '/images/portfolio-1.jpg', alt: 'Dam Needles logo embroidery on blue fabric' },
  { image: '/images/portfolio-2.jpg', alt: 'Construction logo embroidery on black fabric' },
  { image: '/images/portfolio-3.jpg', alt: 'NHS logo embroidery on blue scrubs' },
  { image: '/images/portfolio-4.jpg', alt: 'Sports logo embroidery with soccer ball' },
]

const steps = [
  {
    num: 1,
    icon: ShirtIcon,
    title: 'Choose Your Garments',
    desc: 'Browse our wide range of workwear, uniforms and more.',
  },
  {
    num: 2,
    icon: UploadIcon,
    title: 'Upload Your Logo',
    desc: 'Add your logo and choose your placement.',
  },
  {
    num: 3,
    icon: CalculatorIcon,
    title: 'Get Your Quote',
    desc: 'Receive a competitive quote within 24–48 hours.',
  },
  {
    num: 4,
    icon: BoxCheckIcon,
    title: 'We Embroider & Deliver',
    desc: 'Quality embroidery, fast turnaround, delivered to you.',
  },
]

const whyChoose = [
  {
    icon: ShieldIcon,
    title: 'Quality You Can See',
    desc: 'We use premium threads and industry-leading equipment to ensure every stitch meets the highest standards.',
  },
  {
    icon: UsersIcon,
    title: 'Discount On Bulk Orders',
    desc: 'Scalable pricing for larger projects and teams. The more you order, the more you save.',
  },
  {
    icon: ClockIcon,
    title: 'Fast, Efficient Service',
    desc: 'We meet your deadlines with professional precision. Quick turnaround without compromising quality.',
  },
  {
    icon: HandshakeIcon,
    title: 'Local & Reliable Team',
    desc: 'Proudly supporting local businesses and organizations across Surrey and beyond.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Desktop hero image — spans full section height */}
        <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-1/2 lg:block">
          <img
            src="/images/hero-split.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Hero text */}
          <div className="section-container py-10 sm:py-12 lg:py-14 lg:pr-[45%]">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-brand-gold uppercase sm:text-sm">
                Threading Your Brand To Perfection
              </p>
              <h1 className="mb-5 text-4xl leading-[1.1] font-extrabold tracking-tight uppercase sm:text-5xl lg:text-[3.25rem]">
                <span className="block text-gray-900">Professional</span>
                <span className="block text-brand-blue italic">Embroidery</span>
                <span className="block text-gray-900">&amp; Printing</span>
        </h1>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                High-quality embroidery and printing for workwear, uniforms, sportswear and more. Great value. Fast
                turnaround. Reliable service.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a href="#categories" className="btn-primary px-5 py-2.5 sm:px-6 sm:py-3">
                  Explore Categories <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded border border-brand-blue bg-white px-5 py-2.5 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue/5 sm:px-6 sm:py-3"
                >
                  Request A Quote
                </a>
              </div>
            </div>
          </div>

          {/* Features — merged into hero, no background */}
          <div className="section-container pb-10 lg:pb-12">
            <div className="w-full sm:w-[70%]">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <f.icon className="h-9 w-9 shrink-0 text-brand-blue sm:h-10 sm:w-10" />
                  <div>
                    <h3 className="text-[11px] leading-tight font-bold tracking-wide text-brand-blue uppercase sm:text-xs">
                      {f.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-snug text-brand-blue/70">{f.desc}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative h-56 sm:h-72 lg:hidden">
          <img
            src="/images/hero-split.jpg"
            alt="Embroidery machine stitching Dam Needles logo"
            className="h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Shop by Industry */}
      <section className="py-16" id="services">
        <div className="section-container">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-heading">Shop By Industry</h2>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-bold tracking-wide text-brand-blue uppercase hover:text-brand-gold"
            >
              View All Industries <ArrowRightIcon />
            </a>
          </div>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 carousel-scroll sm:mx-0 sm:gap-4 sm:px-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
            {industries.map((ind) => (
              <a
                key={ind.name}
                href="#"
                className="group relative w-[42vw] max-w-[180px] shrink-0 overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl sm:w-[28vw] lg:w-auto lg:max-w-none lg:shrink"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 flex items-center gap-1.5 p-3 lg:gap-2 lg:p-4">
                  <ind.icon className="h-4 w-4 text-brand-gold lg:h-5 lg:w-5" />
                  <span className="text-xs font-bold tracking-wide text-white uppercase lg:text-sm">{ind.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Garments */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-heading">Popular Garments</h2>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-bold tracking-wide text-brand-blue uppercase hover:text-brand-gold"
            >
              Browse All Garments <ArrowRightIcon />
            </a>
          </div>
          <Carousel>
            {garments.map((g) => (
              <a
                key={g.name}
                href="#"
                className="w-44 shrink-0 overflow-hidden rounded-xl bg-gray-100 transition-shadow hover:shadow-md sm:w-52"
              >
                <div className="flex aspect-square items-center justify-center bg-gray-100 p-3">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="max-h-full max-w-full object-contain mix-blend-darken"
                  />
                </div>
                <p className="bg-white py-3 text-center text-xs font-bold tracking-widest text-brand-blue">{g.name}</p>
              </a>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16" id="categories">
        <div className="section-container">
          <h2 className="section-heading mb-8">Categories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href="#"
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-base font-bold text-brand-blue">{cat.title}</h3>
                  <p className="text-sm text-gray-500">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="section-heading mb-8">Our Portfolio</h2>
          <Carousel>
            {portfolio.map((item) => (
              <div key={item.image} className="w-64 shrink-0 overflow-hidden rounded-xl shadow-md sm:w-72">
                <img src={item.image} alt={item.alt} className="aspect-square w-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative overflow-hidden py-8 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/how-It-works-bg-image.png')] bg-size-[100%_auto] bg-position-[center_center] bg-no-repeat"
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="mb-6 text-center sm:mb-8">
            <p className="mb-1.5 text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase sm:text-xs">
              How It Works
            </p>
            <h2 className="font-serif text-xl font-normal text-white sm:text-2xl lg:text-3xl">
              Simple. Seamless. Stress-Free.
            </h2>
          </div>

          <div className="mx-auto max-w-2xl px-2 lg:max-w-none">
            {/* Mobile / tablet grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 lg:hidden">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <span className="absolute -top-0.5 -left-0.5 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-gray-900">
                      {step.num}
                    </span>
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-1 text-[10px] font-bold tracking-wide text-white uppercase">{step.title}</h3>
                  <p className="max-w-[140px] text-[10px] leading-snug text-white">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Desktop row with dotted connectors between circles */}
            <div className="hidden items-start justify-center lg:flex">
              {steps.map((step, index) => (
                <Fragment key={step.num}>
                  <div className="flex w-[150px] shrink-0 flex-col items-center text-center xl:w-[165px]">
                    <div className="relative mb-3">
                      <span className="absolute -top-0.5 -left-0.5 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-gray-900">
                        {step.num}
                      </span>
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="mb-1 text-[10px] font-bold tracking-wide text-white uppercase xl:text-xs">
                      {step.title}
                    </h3>
                    <p className="max-w-[145px] text-[10px] leading-snug text-white">{step.desc}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="w-8 shrink-0 self-start pt-7 xl:w-12" aria-hidden="true">
                      <div className="how-it-works-dots w-full" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-16" id="quote">
        <div className="section-container">
          <div className="overflow-hidden rounded-2xl bg-brand-blue shadow-xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <h2 className="mb-2 text-2xl font-extrabold tracking-wide text-white uppercase sm:text-3xl">
                  Ready To Get Started?
                  <br />
                  Placing A Bulk Order?
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-white/80">
                  Get in touch today to discuss your requirements and receive a competitive rate tailored for volume
                  orders.
                </p>
                <a href="#contact" className="btn-primary">
                  Get In Touch <ArrowRightIcon />
                </a>
              </div>
              <div className="relative h-64 lg:h-full lg:min-h-[320px]">
                <img
                  src="/images/bulk-order-polos.jpg"
                  alt="Stack of embroidered blue polo shirts"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" id="about">
        <div className="section-container">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-bold tracking-widest text-brand-gold uppercase">
              Why Choose Dam Needles?
            </p>
            <h2 className="section-heading">Trusted By Businesses Across Surrey</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center">
                <item.icon className="mx-auto mb-4 h-12 w-12 text-brand-blue" />
                <h3 className="mb-2 text-sm font-bold tracking-wide text-brand-blue uppercase">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
    </>
  )
}
