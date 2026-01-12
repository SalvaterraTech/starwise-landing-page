import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const policySections = [
  {
    title: 'Information We Collect',
    content: `We may collect personal information from you when you visit our website, register for an account, or interact with our services. This information may include your name, email address, contact details, and any other information you voluntarily provide to us.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We may use the information we collect from you for various purposes, including:`,
    list: [
      'Providing and improving our products and services',
      'Personalizing your experience on our website',
      'Communicating with you about your account and any updates or promotions',
      'Analyzing website traffic and user behavior to enhance our offerings',
    ],
  },
  {
    title: 'Data Security',
    content: `We take data security seriously and employ industry-standard measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Third-Party Disclosure',
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that they agree to keep your information confidential.`,
  },
  {
    title: 'Cookies',
    content: `Our website may use cookies to enhance your browsing experience and collect information about how you interact with our site. You can adjust your browser settings to refuse cookies or alert you when cookies are being sent, but some features of the site may not function properly without cookies.`,
  },
  {
    title: 'Changes to this Privacy Policy',
    content: `We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically for any updates.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at hello@appit.com`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-appit-bg">
      <Navbar />

      {/* Privacy Policy Section */}
      <section className="relative pt-44 pb-32">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(50, 191, 93, 0.06) 0%, transparent 60%)'
          }}
        />

        <div className="relative z-10 max-w-[627px] w-full mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 border border-appit-border rounded-full bg-appit-surface/50"
            >
              <Image
                src="https://framerusercontent.com/images/1lnLBvFCOJ2ekMdIHm4QYlonY.svg"
                alt="Privacy"
                width={20}
                height={20}
              />
              <span
                className="text-sm text-white font-medium"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Privacy Policy
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-[58px] font-bold text-white text-center"
              style={{ fontFamily: 'Inter Tight, sans-serif', lineHeight: '1.2' }}
            >
              Our Privacy Policy
            </h1>
            <p
              className="text-appit-gray text-lg text-center max-w-2xl"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              Our Privacy Policy outlines how we collect, use, and protect your personal information. Your privacy and security are our priorities.
            </p>
          </div>

          {/* Last Updated */}
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-2 border border-appit-border rounded-full bg-appit-surface/50"
            >
              <Image
                src="https://framerusercontent.com/images/2owNed1N0kOcx3TTvKXCEqP8V8.svg"
                alt="Calendar"
                width={20}
                height={20}
              />
              <span
                className="text-appit-gray font-medium text-base"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Last Updated on October, 24, 2024
              </span>
            </div>
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {policySections.map((section, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-4">
                  <h3
                    className="text-[28px] font-semibold text-white"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.1' }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="text-lg text-appit-gray leading-relaxed"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                  >
                    {section.content}
                  </p>
                  {section.list && (
                    <ol className="list-decimal list-inside space-y-2 text-lg text-appit-gray pl-4">
                      {section.list.map((item, idx) => (
                        <li
                          key={idx}
                          style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
                {index < policySections.length - 1 && (
                  <div className="w-full h-px bg-appit-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
