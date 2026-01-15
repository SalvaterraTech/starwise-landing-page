import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfUsePage() {
    const t = useTranslations('TermsOfUse')

    const termsSections = [
        {
            title: t('sections.s1.title'),
            content: t('sections.s1.content'),
        },
        {
            title: t('sections.s2.title'),
            content: t('sections.s2.content'),
        },
        {
            title: t('sections.s3.title'),
            content: t('sections.s3.content'),
        },
        {
            title: t('sections.s4.title'),
            content: t('sections.s4.content'),
            list: [
                t('sections.s4.list.l1'),
                t('sections.s4.list.l2'),
                t('sections.s4.list.l3'),
            ],
            footer: t('sections.s4.footer')
        },
        {
            title: t('sections.s5.title'),
            content: t('sections.s5.content'),
            list: [
                t('sections.s5.list.l1'),
                t('sections.s5.list.l2'),
                t('sections.s5.list.l3'),
            ]
        },
        {
            title: t('sections.s6.title'),
            content: t('sections.s6.content'),
            list: [
                t('sections.s6.list.l1'),
                t('sections.s6.list.l2'),
                t('sections.s6.list.l3'),
                t('sections.s6.list.l4'),
            ]
        },
        {
            title: t('sections.s7.title'),
            content: t('sections.s7.content'),
            list: [
                t('sections.s7.list.l1'),
                t('sections.s7.list.l2'),
                t('sections.s7.list.l3'),
                t('sections.s7.list.l4'),
            ]
        },
        {
            title: t('sections.s8.title'),
            content: t('sections.s8.content'),
        },
        {
            title: t('sections.s9.title'),
            content: t('sections.s9.content'),
        },
        {
            title: t('sections.s10.title'),
            content: t('sections.s10.content'),
        },
        {
            title: t('sections.s11.title'),
            content: t('sections.s11.content'),
        },
        {
            title: t('sections.s12.title'),
            content: t('sections.s12.content'),
        },
        {
            title: t('sections.s13.title'),
            content: t('sections.s13.content'),
        }
    ]

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
