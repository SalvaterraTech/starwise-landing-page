'use client'

import { useState } from 'react'
import { Link } from '@/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('Navbar')

  const navLinks = [
    { href: '/#benefits', label: t('benefits') },
    { href: '/#features', label: t('features') },
    { href: '/#pricing', label: t('pricing') },
    { href: '/#testimonial', label: t('testimonials') },
    { href: '/#faq', label: t('faqs') },
  ]

  return (
    <>
      {/* Desktop Navbar - Full width bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-center px-[60px] py-4 border-b border-appit-border backdrop-blur-md"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <div className="flex items-center justify-between w-full max-w-[1320px]">
          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-[62px] h-[62px]">
              <Image
                src="/images/starwise_logo.png"
                alt="Starwise Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-white text-[24px] font-bold"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              Starwise
            </span>
          </Link>

          {/* Nav Links - Center */}
          <div className="flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-4 hover:text-white transition-colors duration-400"
                style={{
                  fontFamily: '"Instrument Sans", sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  lineHeight: '150%',
                  letterSpacing: '0em',
                  color: 'rgb(148, 150, 157)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Join Waitlist Button */}
          {/* Language Selector */}
          <LanguageSelector />
        </div>
      </nav>

      {/* Tablet Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex lg:hidden items-center justify-between px-[30px] py-4 border-b border-appit-border backdrop-blur-md"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        {/* Logo */}
        <Link href="/#hero" className="flex items-center gap-3">
          <div className="relative w-[42px] h-[42px]">
            <Image
              src="/images/starwise_logo.png"
              alt="Starwise Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            className="text-white text-[22px] font-bold"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Starwise
          </span>
        </Link>

        {/* Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-10"
          aria-label="Toggle menu"
        >
          <Image
            src="/images/menu-icon.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-4 pt-10 pb-3.5 border-b border-appit-border backdrop-blur-md"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        {/* Logo */}
        <Link href="/#hero" className="flex items-center gap-3">
          <div className="relative w-[52px] h-[52px]">
            <Image
              src="/images/starwise_logo.png"
              alt="Starwise Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            className="text-white text-[26px] font-bold"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Starwise
          </span>
        </Link>

        {/* Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-[60px] h-[52px] flex items-center justify-center bg-white rounded-[12px]"
          aria-label="Toggle menu"
        >
          <Image
            src="/images/menu-icon.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full gap-4 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 text-white hover:text-appit-gray transition-colors text-lg font-semibold"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
