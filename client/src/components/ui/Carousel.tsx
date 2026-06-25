import { useRef, type ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons'

type CarouselProps = {
  children: ReactNode
  className?: string
}

export default function Carousel({ children, className = '' }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.75
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => scroll('left')}
        className="absolute top-1/2 -left-3 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 sm:flex"
        aria-label="Scroll left"
      >
        <ChevronLeftIcon className="text-brand-blue" />
      </button>
      <div ref={scrollRef} className="carousel-scroll flex gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6">
        {children}
      </div>
      <button
        type="button"
        onClick={() => scroll('right')}
        className="absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 sm:flex"
        aria-label="Scroll right"
      >
        <ChevronRightIcon className="text-brand-blue" />
      </button>
    </div>
  )
}
