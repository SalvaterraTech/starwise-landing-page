import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const termsSections = [
    {
        title: 'Acceptance of Terms',
        content: `By accessing or using the Starwise app ("App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.`
    },
    {
        title: 'Use of the App',
        content: `You agree to use the App only for lawful purposes and in accordance with these Terms. You are responsible for all your activity in connection with the App.`
    },
    {
        title: 'User Content',
        content: `The App allows you to input text and audio ("User Content"). You retain ownership of your User Content. You grant Starwise a license to process this content strictly for the purpose of providing the App's services, as described in our Privacy Policy.`
    },
    {
        title: 'Intellectual Property',
        content: `The App and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of Starwise and its licensors.`
    },
    {
        title: 'Termination',
        content: `We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`
    },
    {
        title: 'Changes to Terms',
        content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.`
    },
    {
        title: 'Contact Us',
        content: `If you have any questions about these Terms, please contact us at:

Email: hello@starwise.com`
    }
]

export default function TermsOfUsePage() {
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
                                Terms of Use
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-5xl md:text-[58px] font-bold text-white text-center"
                            style={{ fontFamily: 'Inter Tight, sans-serif', lineHeight: '1.2' }}
                        >
                            Terms of Use
                        </h1>
                        <p
                            className="text-appit-gray text-lg text-center max-w-2xl"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                            Please read these terms carefully before using Starwise.
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
                                Last Updated on January 12, 2026
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
