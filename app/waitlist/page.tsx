'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[180px] pb-32 flex flex-col items-center">


        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 flex flex-col items-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-[40px] pl-1 pr-4 py-1 rounded-full"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-[#1A1A1A]">
                <Image
                  src="/assets/waitlist/avatar-1.png"
                  alt="User"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-[#1A1A1A]">
                <Image
                  src="/assets/waitlist/avatar-2.png"
                  alt="User"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-[#1A1A1A]">
                <Image
                  src="/assets/waitlist/avatar-3.png"
                  alt="User"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span
              className="text-white text-[16px] font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Trusted by job seekers worldwide
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white text-center font-bold mb-[40px] max-w-[900px]"
            style={{
              fontFamily: 'Inter Tight, sans-serif',
              fontSize: '64px',
              lineHeight: '1.2'
            }}
          >
            Get early access
          </h1>

          {/* Description */}
          <p
            className="text-center text-[20px] font-medium mb-[40px] max-w-[645px]"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              color: '#94969D',
              lineHeight: '1.5'
            }}
          >
            Be amongst the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch!
          </p>

          {/* Form */}
          <div className="w-full max-w-[540px]">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-[#32BF5D] text-xl font-semibold mb-2">
                  You&apos;re on the list!
                </div>
                <p className="text-[#94969D]">
                  We&apos;ll notify you when Appit launches.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-[56px] px-6 bg-[#0E0E10] border border-[#1D1D20] rounded-[10px] text-white placeholder-[#62646C] focus:outline-none focus:border-[#62646C] transition-colors"
                    style={{
                      fontFamily: 'Instrument Sans, sans-serif',
                      fontSize: '17px'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="h-[56px] px-8 bg-white text-black font-bold rounded-[10px] hover:bg-gray-100 transition-colors whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter Tight, sans-serif',
                    fontSize: '17px'
                  }}
                >
                  Join Waitlist
                </button>
              </form>
            )}

            {/* Privacy note */}
            <div className="flex items-center justify-center gap-2 mt-[24px]">
              <Image
                src="/assets/waitlist/info-icon.svg"
                alt="Privacy"
                width={20}
                height={20}
              />
              <span
                className="text-[18px] font-medium"
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  color: '#797B85'
                }}
              >
                No Spam, Only Genuine Updates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </main>
  )
}
