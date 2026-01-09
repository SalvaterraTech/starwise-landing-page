'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Starwise and who is it for?',
    answer: 'Starwise is an AI-powered interview preparation app for candidates who want clearer, more structured answers. Beyond feedback, Starwise also generates improved STAR-based answers using your own experiences, so you can refine and adapt them for different interviews.',
  },
  {
    question: 'How does Starwise help me prepare for interviews?',
    answer: 'You answer real interview questions using your own experience. Starwise analyzes your response, highlights improvements, and generates a clearer, STAR-structured version using AI - giving you a strong base that you can customize before the interview.',
  },
  {
    question: 'What is the STAR method?',
    answer: 'The STAR method stands for Situation, Task, Action, and Result. Starwise not only evaluates whether your answer follows STAR, but also rewrites your response using this structure, keeping your original experience while improving clarity and impact.',
  },
  {
    question: 'Is Starwise useful even if I already have experience?',
    answer: 'Yes. Experienced professionals often have strong backgrounds but struggle to communicate impact clearly. Starwise uses your input to generate more concise, result-driven answers, helping you highlight what really matters in senior-level interviews.',
  },
  {
    question: 'Do I need to know the STAR method beforehand?',
    answer: 'No. You can answer naturally. Starwise takes your raw response and automatically generates a STAR-structured version using AI, while also explaining what was improved and why.',
  },
  {
    question: 'How is AI used in Starwise?',
    answer: 'AI analyzes your answers, identifies gaps, and generates improved versions based on your information. The goal is not to replace your voice, but to give you a high-quality baseline that you can edit, personalize, and reuse.',
  },
  {
    question: 'Can I practice for different roles and seniority levels?',
    answer: 'Yes. Starwise offers questions by role, difficulty, and competency. For each answer, the AI adapts the generated improvement to the context of the role and level you are practicing for.',
  },
  {
    question: 'Is my data and interview content private?',
    answer: 'Yes. Your answers are private and used only to generate feedback and improved responses for you. Starwise does not share your content with recruiters or third parties.',
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
