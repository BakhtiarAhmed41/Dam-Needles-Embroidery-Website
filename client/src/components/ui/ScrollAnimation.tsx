import { useEffect, useRef, useState, type ReactNode } from 'react'

export type AnimationType = 'fadeInUp' | 'fadeInRight' | 'fadeInLeft'

type ScrollAnimationProps = {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

const animationClasses: Record<AnimationType, string> = {
  fadeInUp: 'animate-fadeInUp',
  fadeInRight: 'animate-fadeInRight',
  fadeInLeft: 'animate-fadeInLeft',
}

export default function ScrollAnimation({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${animationClasses[animation]}`}
      style={{
        animationDelay: `${delay}s`,
        animationPlayState: visible ? 'running' : 'paused',
      }}
    >
      {children}
    </div>
  )
}
