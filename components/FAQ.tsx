'use client'

import { useState } from 'react'
import Image from 'next/image'

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'Creating an account is simple! Just download the app, tap "Sign Up", and follow the prompts. You can sign up with your email or connect your existing social accounts for a faster experience.',
  },
  {
    question: 'Can I customize my profile?',
    answer: 'Absolutely! Appit offers extensive profile customization options. You can add a bio, profile picture, cover photo, and showcase your interests. Pro users get access to custom themes and additional customization features.',
  },
  {
    question: 'Is Appit available on all devices?',
    answer: 'Yes! Appit is available on iOS, Android, and web. Your data syncs seamlessly across all your devices, so you can stay connected wherever you are.',
  },
  {
    question: 'What privacy controls are available?',
    answer: 'We take privacy seriously. You have full control over who can see your profile, posts, and activity. We offer granular privacy settings, two-factor authentication, and end-to-end encrypted messaging.',
  },
  {
    question: 'How does the smart matching work?',
    answer: 'Our AI-powered matching algorithm analyzes your interests, activity patterns, and preferences to suggest connections that are most likely to be meaningful to you. The more you use Appit, the better it gets at finding your perfect matches.',
  },
  {
    question: 'Can I share multimedia content?',
    answer: 'Yes! You can share photos, videos, stories, and more. Our built-in editing tools help you create stunning content right from the app. Pro users get access to advanced editing features and higher quality uploads.',
  },
  {
    question: 'What should I do if I encounter issues?',
    answer: 'If you experience any issues, you can reach out to our support team through the app or email us at support@appit.com. We also have an extensive help center with guides and FAQs to help you troubleshoot common issues.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(50, 191, 93, 0.06) 0%, transparent 60%)'
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-appit-border rounded-full bg-appit-surface/50"
          >
            <span 
              className="text-sm text-appit-gray font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              FAQ
            </span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Inter Tight, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-appit-gray text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-appit-card border border-appit-surface rounded-14 overflow-hidden faq-item"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span 
                  className="text-lg font-semibold text-white pr-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {faq.question}
                </span>
                <div 
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-appit-border rounded-10 bg-transparent"
                >
                  <Image
                    src="https://framerusercontent.com/images/mHa1SilBp9GVaW3Ir0GF3IPLVk.svg"
                    alt="Toggle"
                    width={24}
                    height={24}
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p 
                  className="px-6 pb-6 text-appit-gray leading-relaxed"
                  style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
