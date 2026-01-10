'use client'

import Link from 'next/link'
import { useState } from 'react'

const plans = [
  {
    name: 'Free Plan',
    priceMonthly: '0',
    priceYearly: '0',
    description: 'Basic interview practice to get started with Starwise.',
    features: [
      '1 interview question per week',
      'STAR-based answer structuring',
      'Basic AI feedback',
      'AI-generated answer improvements',
      'Unlimited practice',
      'Answer history & progress tracking',
    ],
    cta: 'Get Started',
    popular: false,
    disabledFeatures: ['AI-generated answer improvements', 'Unlimited practice', 'Answer history & progress tracking'],
  },
  {
    name: 'Premium Plan',
    priceMonthly: '10',
    priceYearly: '99',
    description: 'Unlimited practice for serious interview preparation.',
    features: [
      'Unlimited interview questions',
      'STAR-based answer structuring',
      'Advanced AI feedback',
      'AI-generated answer improvements',
      'Answer history & progress tracking',
      'Priority access to new features',
    ],
    cta: 'Get Started',
    popular: false,
    disabledFeatures: [],
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="relative pb-12 overflow-hidden">
      {/* Top Stroke Gradient */}
      <div
        className="absolute left-0 right-0 top-0 pointer-events-none"
        style={{
          height: '1px',
          background: 'radial-gradient(40% 50% at 50% 50%, rgb(13, 13, 13), rgb(0, 0, 0))',
          zIndex: 1
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center">
          {/* Icon and Badge */}
          <div
            className="inline-flex items-center"
            style={{
              gap: '4px',
              padding: '10px 12px',
              backgroundColor: 'rgb(19, 19, 21)',
              borderRadius: '100px',
              border: '1px solid rgb(29, 29, 32)',
              marginBottom: '20px'
            }}
          >
            <div style={{ width: '20px', height: '20px' }}>
              <img
                src="https://framerusercontent.com/images/09WQXTvlhUU67CKWraCKw0Mcj0.svg"
                alt="Icon"
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
            </div>
            <span
              style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: 'rgb(255, 255, 255)',
                whiteSpace: 'pre'
              }}
            >
              Our Pricing
            </span>
          </div>

          {/* Text Container */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <h2
              style={{
                fontFamily: 'Inter Tight, sans-serif',
                fontSize: '58px',
                fontWeight: 700,
                lineHeight: '120%',
                color: 'rgb(255, 255, 255)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}
            >
              Flexible Pricing Plans
            </h2>

            {/* Paragraph Container */}
            <div style={{ padding: '0 320px' }}>
              <p
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '150%',
                  color: 'rgb(121, 123, 133)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                Choose the plan that fits your interview preparation needs.
              </p>
            </div>
          </div>

          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center">
            <div
              className="inline-flex items-center rounded-full"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgb(24, 24, 26)',
                padding: '8px',
                gap: '4px',
                marginTop: '68px',
                marginBottom: '48px'
              }}
            >
              <button
                onClick={() => setIsYearly(false)}
                className="rounded-full"
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  backgroundColor: !isYearly ? 'rgb(14, 14, 16)' : 'transparent',
                  color: !isYearly ? 'rgb(255, 255, 255)' : 'rgb(121, 123, 133)',
                  border: !isYearly ? '1px solid rgb(29, 29, 32)' : 'none',
                  cursor: 'pointer',
                  padding: '12px 20px',
                  transition: 'none'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className="rounded-full"
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  backgroundColor: isYearly ? 'rgb(14, 14, 16)' : 'transparent',
                  color: isYearly ? 'rgb(255, 255, 255)' : 'rgb(121, 123, 133)',
                  border: isYearly ? '1px solid rgb(29, 29, 32)' : 'none',
                  cursor: 'pointer',
                  padding: '12px 20px',
                  transition: 'none'
                }}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className="flex mx-auto"
          style={{
            maxWidth: '810px',
            gap: '20px',
            flexWrap: 'nowrap'
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative p-8 rounded-20 border"
              style={{
                backgroundColor: 'rgb(9, 9, 10)',
                borderColor: 'rgb(29, 29, 32)',
                borderWidth: '1px',
                flex: '1 0 0px',
                width: '1px',
                overflow: 'hidden'
              }}
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgb(13, 13, 13) 0%, rgb(0, 0, 0) 100%)',
                  zIndex: 0
                }}
              />

              {/* Badge Save 20% - sempre renderizado, mas escondido quando Monthly */}
              <div
                className="absolute"
                style={{
                  top: '10px',
                  right: '10px',
                  padding: '5px 12px',
                  backgroundColor: 'rgb(24, 24, 26)',
                  borderRadius: '100px',
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'rgb(201, 202, 206)',
                  zIndex: 1,
                  opacity: isYearly && plan.name === 'Premium Plan' ? 1 : 0,
                  pointerEvents: isYearly && plan.name === 'Premium Plan' ? 'auto' : 'none'
                }}
              >
                Save 20% on Yearly
              </div>

              {/* Plan Name */}
              <h3
                className="text-xl font-semibold text-white mb-4 relative z-10"
                style={{
                  fontFamily: 'Inter Tight, sans-serif',
                  whiteSpace: 'nowrap'
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6 relative z-10">
                <span
                  className="text-white"
                  style={{
                    fontFamily: 'Inter Tight, sans-serif',
                    fontSize: '58px',
                    fontWeight: 600,
                    lineHeight: '100%'
                  }}
                >
                  ${isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span
                  style={{
                    fontFamily: 'Instrument Sans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '150%',
                    color: 'rgb(121, 123, 133)'
                  }}
                >
                  /{isYearly ? 'per year' : 'per month'}
                </span>
              </div>

              {/* Description */}
              <p
                className="mb-6 relative z-10"
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '150%',
                  color: 'rgb(148, 150, 157)'
                }}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <Link
                href="/waitlist"
                className="block w-full py-3.5 text-center font-semibold transition-all mb-6 relative z-10"
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  backgroundColor: 'rgb(255, 255, 255)',
                  color: 'rgb(0, 0, 0)',
                  borderRadius: '12px'
                }}
              >
                {plan.cta}
              </Link>

              {/* What's Included Section */}
              <div
                className="relative z-10"
                style={{
                  borderTop: '1px solid rgb(29, 29, 32)',
                  paddingTop: '24px'
                }}
              >
                <h4
                  style={{
                    fontFamily: 'Inter Tight, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'rgb(255, 255, 255)',
                    marginBottom: '12px'
                  }}
                >
                  What&apos;s Included
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features.map((feature, featureIndex) => {
                    const isDisabled = plan.disabledFeatures.includes(feature)
                    return (
                      <li key={featureIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '22px',
                          height: '22px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          backgroundColor: isDisabled ? 'rgb(40, 40, 44)' : 'rgb(50, 191, 93)'
                        }}>
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                          >
                            <path
                              d="M1 5.5L5 9.5L13 1.5"
                              stroke="rgb(255, 255, 255)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span
                          style={{
                            fontFamily: 'Instrument Sans, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '150%',
                            color: isDisabled ? 'rgb(98, 100, 108)' : 'rgb(148, 150, 157)',
                            textDecoration: isDisabled ? 'line-through' : 'none'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
