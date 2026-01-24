'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function WaitlistPage() {
  const t = useTranslations('Waitlist')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset error state
    setError('')

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError(t('errorInvalidEmail'))
      return
    }

    setIsLoading(true)

    const formId = process.env.NEXT_PUBLIC_GOOGLE_FORM_ID
    const entryId = process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_ID

    if (!formId || !entryId) {
      setError(t('errorConfig'))
      setIsLoading(false)
      return
    }

    try {
      // Submit to Google Forms
      await fetch(
        `https://docs.google.com/forms/d/${formId}/formResponse`,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `entry.${entryId}=${encodeURIComponent(email)}`
        }
      )

      // Success! (no-cors mode doesn't allow reading response, so we assume success)
      setIsSubmitted(true)
      setEmail('')
    } catch (err) {
      setError(t('errorSubmit'))
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[180px] pb-[80px] sm:pb-32 flex flex-col items-center">


        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 flex flex-col items-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-[20px] sm:mb-[40px] pl-1 pr-4 py-1 rounded-full"
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
              <span className="hidden sm:inline">{t('badge')}</span>
              <span className="inline sm:hidden">{t('trustedBy')}</span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white text-center font-bold mb-[20px] sm:mb-[40px] max-w-[900px]"
            style={{
              fontFamily: 'Inter Tight, sans-serif',
              fontSize: '64px',
              lineHeight: '1.2'
            }}
          >
            {t('title')}
          </h1>

          {/* Description */}
          <p
            className="text-center text-[18px] sm:text-[20px] font-medium mb-[20px] sm:mb-[40px] max-w-[645px]"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              color: '#94969D',
              lineHeight: '1.5'
            }}
          >
            {t('subtitle')}
          </p>

          {/* Form */}
          <div className="w-full max-w-[540px]">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-center py-12 max-w-[600px] mx-auto"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                    className="text-[64px] md:text-[80px] mb-6"
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    🎉
                  </motion.div>
                  <h2
                    className="text-[#32BF5D] text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-4"
                    style={{
                      fontFamily: 'Inter Tight, sans-serif',
                      lineHeight: '1.2'
                    }}
                  >
                    {t('successTitle')}
                  </h2>
                  <p
                    className="text-[18px] md:text-[20px] font-medium max-w-[480px] mx-auto"
                    style={{
                      fontFamily: 'Instrument Sans, sans-serif',
                      color: '#94969D',
                      lineHeight: '150%'
                    }}
                  >
                    {t('successSubtitle')}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setError('') // Clear error on input change
                        }}
                        placeholder={t('emailPlaceholder')}
                        required
                        disabled={isLoading}
                        className={`w-full h-[56px] px-6 bg-[#0E0E10] border rounded-[10px] text-white placeholder-[#62646C] focus:outline-none transition-colors text-center sm:text-left ${error
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#1D1D20] focus:border-[#62646C]'
                          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        style={{
                          fontFamily: 'Instrument Sans, sans-serif',
                          fontSize: '17px'
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className={`h-[56px] px-8 bg-white text-black font-bold rounded-[10px] transition-all whitespace-nowrap ${isLoading || !email
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-100 hover:scale-105'
                        }`}
                      style={{
                        fontFamily: 'Inter Tight, sans-serif',
                        fontSize: '17px'
                      }}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="inline-block"
                          >
                            ⏳
                          </motion.span>
                          {t('loading')}
                        </span>
                      ) : (
                        t('cta')
                      )}
                    </button>
                  </div>

                  {/* Error Message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-red-400 text-sm"
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      >
                        <span>⚠️</span>
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Privacy note */}
            {!isSubmitted && (
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
                  {t('privacy')}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </main>
  )
}
