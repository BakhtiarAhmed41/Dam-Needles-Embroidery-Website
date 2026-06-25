import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from '../ui/ScrollAnimation'
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

const tickerItems = [
  'High Quality. Great Value. Your Logo.',
  'Fast Turnaround',
  'Free Delivery Within 10 Miles',
]

function TopTicker() {
  const content = tickerItems.map((item, index) => (
    <span key={item} className="flex shrink-0 items-center">
      {index > 0 && <span className="mx-3 text-brand-gold">•</span>}
      {index === 0 && <ShieldIcon className="mr-1.5 h-3.5 w-3.5 shrink-0 text-brand-gold" />}
      <span className="font-medium whitespace-nowrap">{item}</span>
    </span>
  ))

  return (
    <div className="overflow-hidden sm:hidden">
      <div className="animate-marquee flex w-max">
        <div className="flex shrink-0 items-center pr-8">{content}</div>
        <div className="flex shrink-0 items-center pr-8" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartToast, setCartToast] = useState(false)

  useEffect(() => {
    if (!cartToast) return
    const timer = window.setTimeout(() => setCartToast(false), 3000)
    return () => window.clearTimeout(timer)
  }, [cartToast])

  const handleCartClick = () => {
    setCartToast(true)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-brand-blue text-white">
        <div className="section-container flex flex-wrap items-center justify-between gap-2 py-2.5 text-xs sm:text-sm">
          <span className="hidden items-center gap-1.5 font-medium sm:inline-flex">
            <ShieldIcon className="h-3.5 w-3.5 text-brand-gold" />
            High Quality. Great Value. Your Logo.
          </span>

          <TopTicker />

          <span className="hidden text-center text-white/95 sm:block">
            Fast Turnaround <span className="mx-1.5 text-brand-gold">•</span> Free Delivery Within 10 Miles
          </span>

          <div className="flex items-center gap-3">
            <a href="tel:07754606739" className="flex items-center gap-1.5 font-medium transition-colors hover:text-brand-gold">
              <PhoneIcon className="h-3.5 w-3.5 text-brand-gold" />
              <span className="hidden sm:inline">07754 606739</span>
            </a>
            <div className="flex items-center gap-2">
              <a href="#" className="transition-colors hover:text-brand-gold" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" className="transition-colors hover:text-brand-gold" aria-label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="mailto:info@damneedlesembroidery.co.uk" className="transition-colors hover:text-brand-gold" aria-label="Email">
                <EmailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-gray-100 bg-white shadow-sm">
        <div className="section-container flex items-center justify-between gap-4 py-3">
          <ScrollAnimation animation="fadeInLeft" delay={0}>
            <Link to="/" className="shrink-0">
              <img src="/images/logo.png" alt="Dam Needles Embroidery" className="h-12 w-auto sm:h-14" />
            </Link>
          </ScrollAnimation>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <ScrollAnimation key={link.label} animation="fadeInUp" delay={0.05 + index * 0.03}>
                <a
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
              </ScrollAnimation>
            ))}
          </nav>

          <ScrollAnimation animation="fadeInRight" delay={0.1} className="flex items-center gap-3">
            <a href="#quote" className="btn-primary hidden px-5 py-2.5 text-xs transition-all sm:inline-flex sm:text-sm">
              Get A Quote
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={handleCartClick}
                className="relative rounded p-2 text-brand-blue transition-colors hover:bg-gray-50"
                aria-label="Shopping cart"
              >
                <CartIcon />
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-white">
                  0
                </span>
              </button>
              {cartToast && (
                <div
                  role="status"
                  className="animate-slideUp absolute top-full right-0 z-50 mt-2 w-48 rounded-lg bg-gray-900 px-4 py-3 text-xs font-medium text-white shadow-lg"
                >
                  Your cart is empty
                </div>
              )}
            </div>
            <button
              type="button"
              className="rounded p-2 text-brand-blue transition-colors lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </ScrollAnimation>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block border-b border-gray-50 py-3 text-sm font-semibold transition-colors ${
                  link.active ? 'text-brand-blue' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full transition-all">
              Get A Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
