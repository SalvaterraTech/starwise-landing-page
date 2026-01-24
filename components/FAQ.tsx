'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const t = useTranslations('FAQ')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a2'),
    },
    {
      question: t('q3'),
      answer: t('a3'),
    },
    {
      question: t('q4'),
      answer: t('a4'),
    },
    {
      question: t('q5'),
      answer: t('a5'),
    },
    {
      question: t('q6'),
      answer: t('a6'),
    },
    {
      question: t('q7'),
      answer: t('a7'),
    },
    {
      question: t('q8'),
      answer: t('a8'),
    },
  ]

  return (
    <section id="faq" className="relative pb-0 md:pb-24 overflow-hidden">
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
          {/* Badge with Icon */}
          <div
            className="inline-flex items-center mb-6 rounded-full"
            style={{
              backgroundColor: 'rgb(19, 19, 21)',
              border: '1px solid rgb(29, 29, 32)',
              padding: '10px 12px',
              gap: '4px',
              height: '44px'
            }}
          >
            {/* Question Mark Icon - EXACT from sample */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <g clipPath="url(#a)">
                <path stroke="#fff" strokeLinejoin="round" strokeWidth="2" d="M10 18.333a8.308 8.308 0 0 0 5.893-2.441 8.308 8.308 0 0 0 2.44-5.893 8.308 8.308 0 0 0-2.44-5.892A8.307 8.307 0 0 0 10 1.666a8.307 8.307 0 0 0-5.892 2.44A8.307 8.307 0 0 0 1.667 10c0 2.301.933 4.385 2.44 5.893A8.307 8.307 0 0 0 10 18.332Z" />
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11.926V10.26a2.5 2.5 0 1 0-2.5-2.5" />
                <path fill="#fff" fillRule="evenodd" d="M10 15.677a1.042 1.042 0 1 0 0-2.083 1.042 1.042 0 0 0 0 2.083Z" clipRule="evenodd" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
                color: 'rgb(255, 255, 255)'
              }}
            >
              {t('badge')}
            </span>
          </div>

          {/* Title - 58px Inter Tight */}
          <h2
            className="font-bold text-white text-[32px] md:text-[58px]"
            style={{
              fontFamily: 'Inter Tight, sans-serif',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            {t('title')}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden"
              style={{
                backgroundColor: 'rgb(9, 9, 10)',
                borderColor: 'rgb(24, 24, 26)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '14px'
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left px-5 md:px-[30px] py-3 md:py-4"
                style={{ padding: '16px 30px' }}
              >
                <span
                  className="text-white pr-4 text-[18px] md:text-[20px]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.5'
                  }}
                >
                  {faq.question}
                </span>
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border"
                  style={{
                    borderColor: 'rgb(29, 29, 32)',
                    borderRadius: '10px',
                    backgroundColor: 'transparent'
                  }}
                >
                  {openIndex === index ? (
                    // Minus icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    // Plus icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer with Divider */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                {/* Divider Line */}
                <div
                  style={{
                    borderTop: '1px solid rgb(29, 29, 32)',
                    margin: '0 30px'
                  }}
                />

                {/* Answer Text */}
                <p
                  className="px-5 md:px-[30px] py-3 md:py-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: 'rgb(148, 150, 157)',
                    lineHeight: '1.5',
                  }}
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
