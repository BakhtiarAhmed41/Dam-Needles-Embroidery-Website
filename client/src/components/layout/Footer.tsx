import { FacebookIcon, InstagramIcon, EmailIcon } from '../icons'
import ScrollAnimation from '../ui/ScrollAnimation'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop Categories', href: '#categories' },
  { label: 'Bulk Orders', href: '#quote' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-brand-blue-dark text-white">
      <div className="section-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10 xl:gap-x-10">
        {/* Brand */}
        <ScrollAnimation className="lg:col-span-1 lg:pr-8 xl:pr-12">
          <img src="/images/logo.png" alt="Dam Needles Embroidery" className="mb-4 h-14 w-auto" />
          <p className="mb-4 text-sm leading-relaxed text-white/80">
            Professional embroidery and printing for workwear, uniforms, sportswear and more. Quality you can see,
            service you can trust.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-brand-gold" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-brand-gold" aria-label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@damneedlesembroidery.co.uk"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-brand-gold"
              aria-label="Email"
            >
              <EmailIcon className="h-4 w-4" />
            </a>
          </div>
        </ScrollAnimation>

        {/* Quick Links */}
        <ScrollAnimation delay={0.1} className="lg:pl-2 xl:pl-4">
          <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-brand-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        {/* Contact */}
        <ScrollAnimation delay={0.2}>
          <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Contact Us</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <a href="tel:07754605739" className="transition-colors hover:text-brand-gold">
                07754 605739
              </a>
            </li>
            <li>
              <a href="tel:01483276000" className="transition-colors hover:text-brand-gold">
                01483 276000
              </a>
            </li>
            <li>
              <a href="mailto:info@damneedlesembroidery.co.uk" className="transition-colors hover:text-brand-gold">
                info@damneedlesembroidery.co.uk
              </a>
            </li>
          </ul>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/80">
            Dam Needles Embroidery
            <br />
            Unit 4, Knowle Park
            <br />
            Cranleigh, Surrey
            <br />
            GU6 8TB
          </address>
          <a
            href="https://maps.google.com/?q=Cranleigh+Surrey"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-brand-gold transition-colors hover:underline"
          >
            View on Map →
          </a>
        </ScrollAnimation>

        {/* Opening Hours */}
        <ScrollAnimation delay={0.3}>
          <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Opening Hours</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex gap-3">
              <span className="w-20 shrink-0">Mon – Fri</span>
              <span className="font-medium text-white">9:00am – 5:00pm</span>
            </li>
            <li className="flex gap-3">
              <span className="w-20 shrink-0">Saturday</span>
              <span className="font-medium text-white">10:00am – 2:00pm</span>
            </li>
            <li className="flex gap-3">
              <span className="w-20 shrink-0">Sunday</span>
              <span className="font-medium text-white">Closed</span>
            </li>
          </ul>
        </ScrollAnimation>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-4 text-center text-xs text-white/60">
          &copy; {new Date().getFullYear()} Dam Needles Embroidery. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
