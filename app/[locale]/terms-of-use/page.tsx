import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const termsSections = [
    {
        title: 'Welcome to Starwise',
        content: `These Terms of Use (“Terms”) govern your access to and use of the Starwise mobile application (“App”). By accessing or using the App, you agree to be bound by these Terms.

If you do not agree to these Terms, please do not use the App.`
    },
    {
        title: 'Description of the Service',
        content: `Starwise is an interview preparation tool designed to help users practice and improve interview answers using structured frameworks such as the STAR method, AI-generated feedback, and simulated interview questions.

Starwise provides guidance and feedback for educational and informational purposes only and does not guarantee job offers, interview success, or employment outcomes.`
    },
    {
        title: 'Eligibility',
        content: `You must be at least 13 years old to use the App. By using Starwise, you represent that you meet this requirement.`
    },
    {
        title: 'User Content',
        content: `Users may submit text or audio content when using the App (“User Content”).`,
        list: [
            'You retain full ownership of your User Content.',
            'Starwise does not store User Content.',
            'You grant Starwise a limited, non-exclusive license to process your User Content solely for the purpose of delivering the requested features.'
        ],
        footer: `This license terminates immediately after processing is completed.`
    },
    {
        title: 'Use of Artificial Intelligence',
        content: `Starwise uses cloud-based artificial intelligence models to generate feedback and suggestions.

You acknowledge and agree that:`,
        list: [
            'AI-generated outputs are automated and may not always be accurate or complete',
            'Outputs should be reviewed and used at your discretion',
            'Starwise is not responsible for decisions made based on AI-generated feedback'
        ]
    },
    {
        title: 'Acceptable Use',
        content: `You agree not to:`,
        list: [
            'Use the App for any unlawful or harmful purpose',
            'Submit content that is abusive, discriminatory, or violates the rights of others',
            'Attempt to reverse engineer, exploit, or interfere with the App or its AI systems',
            'Circumvent usage limits or access paid features without authorization'
        ]
    },
    {
        title: 'Subscriptions and Payments',
        content: `Starwise may offer free and paid subscription plans.`,
        list: [
            'Payments and renewals are handled through the Apple App Store',
            'Subscriptions renew automatically unless canceled',
            'You may manage or cancel subscriptions through your Apple account',
            'Refunds are subject to Apple’s refund policies'
        ]
    },
    {
        title: 'Availability and Changes',
        content: `Starwise may modify, suspend, or discontinue any part of the App at any time without liability.

We may also update these Terms periodically. Continued use of the App after changes constitutes acceptance of the updated Terms.`
    },
    {
        title: 'Disclaimer of Warranties',
        content: `Starwise is provided “as is” and “as available”, without warranties of any kind, express or implied.

We do not warrant that the App will be error-free, uninterrupted, or meet your specific expectations.`
    },
    {
        title: 'Limitation of Liability',
        content: `To the maximum extent permitted by law, Starwise shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.`
    },
    {
        title: 'Termination',
        content: `You may stop using the App at any time.

Starwise reserves the right to suspend or terminate access to the App if these Terms are violated.`
    },
    {
        title: 'Governing Law',
        content: `These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to conflict of law principles.`
    },
    {
        title: 'Contact Information',
        content: `If you have any questions about these Terms, please contact us at:

Email: support@starwise.app`
    }
]

export default function TermsOfUsePage() {
    const t = useTranslations('TermsOfUse')
    return (
        <main className="min-h-screen bg-appit-bg">
            <Navbar />

            {/* Terms of Use Section */}
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
                            className="inline-flex items-center gap-2 px-3 py-2 border border-appit-border rounded-full bg-[#1A1A1A]"
                        >
                            <Image
                                src="/assets/privacy/terms-contract.svg"
                                alt="Terms"
                                width={20}
                                height={20}
                            />
                            <span
                                className="text-sm text-white font-medium"
                                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                            >
                                {t('badge')}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-5xl md:text-[58px] font-bold text-white text-center"
                            style={{ fontFamily: 'Inter Tight, sans-serif', lineHeight: '1.2' }}
                        >
                            {t('title')}
                        </h1>
                        <p
                            className="text-appit-gray text-lg text-center max-w-2xl"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                            {t('description')}
                        </p>
                    </div>

                    {/* Last Updated */}
                    <div className="flex justify-center mb-[108px]">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-2 border border-appit-border rounded-full bg-[#1A1A1A]"
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
                                {t('lastUpdated')}
                            </span>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <div className="flex flex-col">
                        {termsSections.map((section, index) => (
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
                                        {/* @ts-ignore */}
                                        {section.list && (
                                            <ul className="list-disc list-outside space-y-2 text-lg text-appit-gray pl-5">
                                                {/* @ts-ignore */}
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
                                        {/* @ts-ignore */}
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
                                {index < termsSections.length - 1 && (
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
