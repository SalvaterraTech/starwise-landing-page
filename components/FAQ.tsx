'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'To create an account, download Appit, open the app, and follow the on-screen instructions to sign up using your email or social media.',
  },
  {
    question: 'Can I customize my profile?',
    answer: 'Yes! You can customize your profile by going to settings and selecting "Edit Profile." From there, you can update your photo, bio, and other details.',
  },
  {
    question: 'Is Appit available on all devices?',
    answer: 'Appit is available on iOS, Android, and web browsers, ensuring you can stay connected no matter what device you use.',
  },
  {
    question: 'What privacy controls are available?',
    answer: 'We offer robust privacy controls including the ability to make your profile private, control who can message you, and manage data sharing preferences.',
  },
  {
    question: 'How does the smart matching work?',
    answer: 'Our smart matching algorithm uses your interests, activity, and preferences to suggest connections that align with your goals and values.',
  },
  {
    question: 'Can I share multimedia content?',
    answer: 'Absolutely! You can share photos, videos, and other multimedia content directly within the app to engage with your network.',
  },
  {
    question: 'What should I do if I encounter issues?',
    answer: 'If you encounter any issues, please contact our support team through the app or visit our help center for troubleshooting guides.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative pb-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 px-3 py-2 mb-6 border border-appit-border rounded-full"
            style={{ backgroundColor: 'rgb(19, 19, 21)' }}
          >
            {/* Question Mark Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="rgb(148, 150, 157)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M10 14.5C10.4142 14.5 10.75 14.1642 10.75 13.75C10.75 13.3358 10.4142 13 10 13C9.58579 13 9.25 13.3358 9.25 13.75C9.25 14.1642 9.58579 14.5 10 14.5Z"
                fill="rgb(148, 150, 157)"
              />
              <path
                d="M10 11.5V11C10.8284 11 11.5 10.3284 11.5 9.5C11.5 8.67157 10.8284 8 10 8C9.17157 8 8.5 8.67157 8.5 9.5"
                stroke="rgb(148, 150, 157)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="font-medium"
              style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '16px',
                color: 'rgb(148, 150, 157)'
              }}
            >
              FAQ&apos;s
            </span>
          </div>

          {/* Title - 58px Inter Tight */}
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: 'Inter Tight, sans-serif',
              fontSize: '58px',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            Frequently Asked Questions
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
                className="w-full flex items-center justify-between text-left"
                style={{ padding: '16px 30px' }}
              >
                <span
                  className="text-white pr-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
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
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: 'rgb(148, 150, 157)',
                    lineHeight: '1.5',
                    padding: '16px 30px 16px 30px'
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
