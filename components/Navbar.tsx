'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/#benefits', label: 'Benefits' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#testimonial', label: 'Testimonials' },
  { href: '/#faq', label: "FAQ's" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          <Link
            href="/waitlist"
            className="px-5 py-4 bg-white text-black font-semibold rounded-12 text-[17px] hover:opacity-90 transition-opacity flex-shrink-0"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            Join Waitlist
          </Link>
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
          className="w-10 h-10 flex items-center justify-center bg-white rounded-10 p-3"
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
            <Link
              href="/waitlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center mt-4 py-4 bg-white text-black font-semibold rounded-12 text-lg"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
