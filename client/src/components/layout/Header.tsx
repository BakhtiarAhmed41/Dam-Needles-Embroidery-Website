import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  PhoneIcon,
  ShieldIcon,
} from '../icons'

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Shop Categories', href: '#categories', hasDropdown: true },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-brand-blue text-white">
        <div className="section-container flex flex-wrap items-center justify-between gap-2 py-2.5 text-xs sm:text-sm">
          <span className="hidden items-center gap-1.5 font-medium sm:inline-flex">
            <ShieldIcon className="h-3.5 w-3.5 text-brand-gold" />
            High Quality. Great Value. Your Logo.
          </span>
          <span className="text-center text-white/95">
            Fast Turnaround <span className="mx-1.5 text-brand-gold">•</span> Free Delivery Within 10 Miles
          </span>
          <div className="flex items-center gap-3">
            <a href="tel:07754606739" className="flex items-center gap-1.5 font-medium hover:text-brand-gold">
              <PhoneIcon className="h-3.5 w-3.5 text-brand-gold" />
              <span>07754 606739</span>
            </a>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-brand-gold" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-brand-gold" aria-label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="mailto:info@damneedlesembroidery.co.uk" className="hover:text-brand-gold" aria-label="Email">
                <EmailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-gray-100 bg-white shadow-sm">
        <div className="section-container flex items-center justify-between gap-4 py-3">
          <Link to="/" className="shrink-0">
            <img src="/images/logo.png" alt="Dam Needles Embroidery" className="h-12 w-auto sm:h-14" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                  link.active
                    ? 'border-b-2 border-brand-blue pb-0.5 text-brand-blue'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDownIcon className="h-3.5 w-3.5" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#quote" className="btn-primary hidden px-5 py-2.5 text-xs sm:inline-flex sm:text-sm">
              Get A Quote
            </a>
            <button
              type="button"
              className="relative rounded p-2 text-brand-blue hover:bg-gray-50"
              aria-label="Shopping cart"
            >
              <CartIcon />
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-white">
                0
              </span>
            </button>
            <button
              type="button"
              className="rounded p-2 text-brand-blue lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block border-b border-gray-50 py-3 text-sm font-semibold ${
                  link.active ? 'text-brand-blue' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full">
              Get A Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
