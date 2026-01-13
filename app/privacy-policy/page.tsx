import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const policySections = [
  {
    title: 'Information We Do Not Collect or Retain',
    content: `Starwise does not collect, store, or retain personal user data beyond the transient processing strictly necessary to deliver the requested service.

This includes, but is not limited to:`,
    list: [
      'Names, email addresses, or persistent identifiers',
      'Interview answers written by users',
      'Audio recordings created within the App',
      'Custom interview questions',
      'Career, employment, or résumé-related information',
    ],
    footer: `User-generated content is processed only momentarily to fulfill the App’s functionality and is not retained after processing is completed.`
  },
  {
    title: 'Temporary and Non-Identifiable Processing',
    content: `When you submit text or audio responses in the App:`,
    list: [
      'The content is processed transiently and without being associated with user identities or persistent identifiers',
      'No user accounts or profiles are created',
      'The data is used exclusively in real time to:',
      'Structure responses using the STAR method',
      'Generate interview feedback and suggested improvements',
      'Simulate interview-style answers',
    ],
    footer: `Once the requested processing is completed, the data is discarded and not stored by Starwise.`
  },
  {
    title: 'Use of Artificial Intelligence Models',
    content: `Starwise relies on third-party, cloud-based artificial intelligence services to provide its core features.

We explicitly state that:`,
    list: [
      'User inputs are transmitted without personal identifiers',
      'Submitted content is not used to train, fine-tune, or improve any AI models',
      'Data is processed solely to generate the requested output',
      'AI service providers act exclusively as data processors under contractual obligations and may not use the data for independent purposes',
    ]
  },
  {
    title: 'Data Sharing',
    content: `Starwise does not sell, rent, or share personal data.

Temporary, non-identifiable inputs may be processed by trusted infrastructure, cloud, and AI service providers strictly to enable App functionality and for no other purpose.`
  },
  {
    title: 'Analytics and Diagnostics',
    content: `To ensure app stability and performance, Starwise may collect limited, non-personal, aggregated technical information, such as:`,
    list: [
      'Crash reports',
      'Performance and reliability metrics'
    ],
    footer: `This information does not identify users and is used solely to improve the quality and reliability of the App.`
  },
  {
    title: 'Data Security',
    content: `Although Starwise does not retain personal user data, we apply industry-standard security practices to protect all processing activities, including:`,
    list: [
      'Encrypted communication channels',
      'Secure transmission of data',
      'Restricted access to processing systems'
    ]
  },
  {
    title: 'Legal Basis and User Rights (GDPR & LGPD)',
    content: `The legal basis for any transient data processing under applicable data protection laws, including GDPR and LGPD, is the performance of a service explicitly requested by the user.

Because Starwise does not store personal data, most data subject rights—such as access, correction, or deletion—are inherently satisfied.

Users may still:`,
    list: [
      'Request clarification about how data is handled',
      'Withdraw consent at any time by discontinuing use of the App',
      'Contact us with privacy-related questions or concerns'
    ]
  },
  {
    title: 'Children’s Privacy',
    content: `Starwise is not intended for use by individuals under the age of 13, or the minimum age required by applicable local law. We do not knowingly process data from children.`
  },
  {
    title: 'Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be reflected by updating the “Last updated” date above. Continued use of the App after changes become effective constitutes acceptance of the revised policy.`
  },
  {
    title: 'Contact Information',
    content: `If you have any questions or concerns about this Privacy Policy, please contact us at:

Email: privacy@starwise.app`
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
          <div className="flex flex-col items-center gap-5 mb-[60px]">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 border border-appit-border rounded-full bg-appit-surface/50"
            >
              <Image
                src="/assets/privacy/shield-lock.svg"
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
              Starwise is designed with privacy at its core. We do not store personal data, and all processing is done anonymously and securely.
            </p>
          </div>

          {/* Last Updated */}
          <div className="flex justify-center mb-[108px]">
            <div
              className="inline-flex items-center gap-2 px-3 py-2 border border-appit-border rounded-full bg-appit-surface/50"
            >
              <Image
                src="/assets/privacy/file-check.svg"
                alt="Calendar"
                width={20}
                height={20}
              />
              <span
                className="text-appit-gray font-medium text-base"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                Last Updated on January 12, 2026
              </span>
            </div>
          </div>

          {/* Policy Content */}
          <div className="flex flex-col">
            {policySections.map((section, index) => (
              <div key={index}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3
                      className="text-[28px] font-semibold text-white"
                      style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.1' }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className="text-lg text-appit-gray leading-relaxed whitespace-pre-wrap"
                      style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                    >
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="list-disc list-outside space-y-2 text-lg text-appit-gray pl-5">
                        {section.list.map((item, idx) => (
                          <li
                            key={idx}
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.footer && (
                      <p
                        className="text-lg text-appit-gray leading-relaxed mt-4"
                        style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                      >
                        {section.footer}
                      </p>
                    )}
                  </div>
                </div>

                {/* Divider */}
                {index < policySections.length - 1 && (
                  <div className="w-full h-px bg-[#1D1D20] my-10" />
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
