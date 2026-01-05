'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <main className="min-h-screen bg-appit-bg">
      <Navbar />
      
      {/* Waitlist Section */}
      <section className="relative pt-44 pb-32 min-h-screen flex flex-col items-center">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(50, 191, 93, 0.08) 0%, transparent 60%)'
          }}
        />

        <div className="relative z-10 max-w-[1145px] w-full mx-auto px-4 flex flex-col items-center gap-16 md:gap-24 lg:gap-32">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-12 w-full max-w-[527px]">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-2 py-2 border border-appit-border rounded-full bg-appit-surface/50"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                <div className="w-7 h-7 rounded-full border-2 border-appit-surface overflow-hidden">
                  <Image
                    src="https://framerusercontent.com/images/uuqFhm4gRHWpYWHbCF29kCrDg7c4NMzek.png"
                    alt="User"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-appit-surface overflow-hidden">
                  <Image
                    src="https://framerusercontent.com/images/eXzXY5SyB3VY4zrk0RKkKc5oOKY.png"
                    alt="User"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-appit-surface overflow-hidden">
                  <Image
                    src="https://framerusercontent.com/images/OeIH1JDIPLkdRx1U3x1ij9W1O0.png"
                    alt="User"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span 
                className="text-white text-sm font-medium pr-2"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Join 3 million users on waitlist
              </span>
            </div>

            {/* Heading & Description */}
            <div className="text-center space-y-4">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                Get early access
              </h1>
              <p 
                className="text-appit-gray text-lg md:text-xl"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Be amongst the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch!
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-[527px]">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-appit-accent text-xl font-semibold mb-2">
                    You&apos;re on the list!
                  </div>
                  <p className="text-appit-gray">
                    We&apos;ll notify you when Appit launches.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-6 py-4 bg-appit-card border border-appit-surface rounded-10 text-white placeholder-appit-gray/60 focus:outline-none focus:border-appit-gray/60 transition-colors text-center md:text-left"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary py-4 px-6 font-semibold"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    Join Waitlist
                  </button>
                </form>
              )}

              {/* Privacy note */}
              <div className="flex items-center justify-center gap-1 mt-6">
                <Image
                  src="https://framerusercontent.com/images/lvuKg4x2aNtdE9KCJ5H0BUAeEo.svg"
                  alt="Secure"
                  width={20}
                  height={20}
                />
                <span 
                  className="text-appit-gray text-sm"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  We respect your privacy
                </span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full max-w-[795px] flex flex-col items-end gap-10 md:gap-16">
            {/* Section Header */}
            <div className="w-full">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-appit-border rounded-full bg-appit-surface/50"
              >
                <Image
                  src="https://framerusercontent.com/images/mHa1SilBp9GVaW3Ir0GF3IPLVk.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <span 
                  className="text-sm text-white font-medium"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  Connect with Appit Social
                </span>
              </div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                We&apos;d Love to Hear From You
              </h2>
              <p 
                className="text-appit-gray text-lg"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Have a question or want to say hello? Feel free to reach out to us.
              </p>
            </div>

            {/* Email Button */}
            <Link
              href="mailto:hello@appit.com"
              className="inline-flex items-center gap-2 px-5 py-4 bg-appit-card border border-appit-border rounded-12 hover:border-appit-gray/40 transition-colors"
            >
              <Image
                src="https://framerusercontent.com/images/OG6YiL91Vk8kkpvcLHTGADQNTUg.svg"
                alt="Email"
                width={24}
                height={24}
              />
              <span 
                className="text-appit-gray font-medium"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                hello@appit.com
              </span>
            </Link>

            {/* Tagline */}
            <div className="text-center w-full">
              <p 
                className="text-xl font-semibold text-white"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                with Appit Social
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
