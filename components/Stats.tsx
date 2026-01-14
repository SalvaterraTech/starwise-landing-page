'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

// Animated counter hook
function useCounter(end: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return count
}

interface StatItemProps {
  value: number
  suffix: string
  label: string
  inView: boolean
}

function StatItem({ value, suffix, label, inView }: StatItemProps) {
  const count = useCounter(value, 2000, inView)

  return (
    <div
      className="flex flex-col items-center"
      style={{ gap: '12px', flex: '1 0 0', width: '1px' }}
    >
      {/* Number */}
      <div
        className="flex items-center justify-center"
        style={{
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: '50px',
          fontWeight: 700,
          lineHeight: '120%',
          color: 'rgb(255, 255, 255)',
          letterSpacing: '0em'
        }}
      >
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      {/* Label */}
      <p
        className="text-center"
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '150%',
          color: 'rgb(121, 123, 133)'
        }}
      >
        {label}
      </p>
    </div>
  )
}

const stats = [
  { value: 10, suffix: 'k+', label: 'AI-structured STAR answers' },
  { value: 10, suffix: 'x', label: 'More clarity in your answers' },
  { value: 50, suffix: '+', label: 'Countries where Starwise is available' },
]

export default function Stats() {
  const t = useTranslations('Stats')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      className="relative flex flex-col items-center w-full"
      style={{
        background: 'radial-gradient(29.06% 100% at 50% 0%, #131315 0%, #000 100%)',
        padding: '60px 0 50px'
      }}
    >
      {/* Top stroke line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'radial-gradient(40% 50% at 50% 50%, #28282c, #000)',
          zIndex: 1
        }}
      />

      {/* Content container */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center w-full"
        style={{ gap: '80px', maxWidth: '1040px' }}
      >
        {/* Heading section */}
        <div
          className="flex flex-col items-center"
          style={{ gap: '8px' }}
        >
          {/* Logo container */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: '108px', height: '108px' }}
          >
            {/* Background image */}
            <Image
              src="/images/stats-icon-1.svg"
              alt="Background"
              fill
              className="object-cover"
            />
            {/* Inner logo */}
            <div className="relative" style={{ width: '75px', height: '75px', zIndex: 1 }}>
              <Image
                src="/images/starwise_logo.png"
                alt="Starwise Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading text */}
          <h2
            className="text-center"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '120%',
              color: 'rgb(255, 255, 255)'
            }}
          >
            {t('heading')}
          </h2>
        </div>

        {/* Stats row */}
        <div
          className="flex items-start justify-start w-full"
          style={{ gap: '32px' }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="contents">
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={t(`stat${index + 1}Label`)}
                inView={isInView}
              />
              {index < stats.length - 1 && (
                <div
                  className="self-stretch"
                  style={{
                    width: '1px',
                    backgroundColor: 'rgb(29, 29, 32)'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
