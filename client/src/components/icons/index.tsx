type IconProps = {
  className?: string
}

export function FacebookIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function EmailIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

export function CartIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
}

export function ChevronDownIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function ChevronLeftIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

export function ChevronRightIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function NeedleIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M8 6l4-4 4 4M6 14h12" />
      <circle cx="12" cy="18" r="2" strokeWidth={1.5} />
    </svg>
  )
}

export function ShirtIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 6a3 3 0 016 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 7.5 3 9.5v1.5l3 1.2V20h12v-7.8l3-1.2V9.5L17.5 7.5H6.5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 11.5v2M21 11.5v2" />
    </svg>
  )
}

export function TruckIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6h11v9H3V6zm11 0l4 4v5h-4V6zM7 18a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  )
}

export function AwardIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="9" r="5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9l1.5 1.5L14 8" />
    </svg>
  )
}

export function DeliveryPinIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
      />
      <circle cx="12" cy="11" r="2.5" className="fill-brand-gold stroke-brand-gold" />
    </svg>
  )
}

export function LocationIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11a3 3 0 100-6 3 3 0 000 6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
      />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function UsersIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H2v-2a4 4 0 014-4h1m8-4a4 4 0 11-8 0 4 4 0 018 0zm-4 8a4 4 0 01-4-4h8a4 4 0 01-4 4z"
      />
    </svg>
  )
}

export function ClockIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 3" />
    </svg>
  )
}

export function HandshakeIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12l3 3 4-4 3 3 6-6"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 14l2 2M8 8l2-2" />
    </svg>
  )
}

export function UploadIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18l3-3 3 3" />
    </svg>
  )
}

export function CalculatorIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0" />
    </svg>
  )
}

export function BoxCheckIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v4M8.5 5.5L12 7l3.5-1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10l2 2 4-4" />
    </svg>
  )
}

export function BoxIcon({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7"
      />
    </svg>
  )
}

export function HardHatIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 14v-2a8 8 0 0116 0v2M2 14h20v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
      />
    </svg>
  )
}

export function HeartPulseIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21s-7-4.35-7-10a4 4 0 017-2.76A4 4 0 0119 11c0 5.65-7 10-7 10z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11h2l1 2 2-4 1 2h2" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
