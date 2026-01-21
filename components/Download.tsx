'use client'

import Image from 'next/image'
import { Link } from '@/navigation'
import { useTranslations, useLocale } from 'next-intl'

export default function Download() {
    const t = useTranslations('Download')
    const locale = useLocale()
    return (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#000000', paddingTop: '120px', paddingBottom: '0px' }}>
            {/* Top Divider */}
            <div
                className="absolute left-0 right-0 top-0 pointer-events-none"
                style={{
                    height: '1px',
                    background: 'radial-gradient(40% 50%, rgb(40, 40, 44) 0%, rgb(0, 0, 0) 100%)'
                }}
            />

            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(27.27% 35.9% at 50% 0%, #131315 0%, #000000 100%)'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Title */}
                <h2
                    className="text-[32px] md:text-[58px] px-5 md:px-0"
                    style={{
                        fontFamily: 'Inter Tight, sans-serif',
                        fontWeight: 700,
                        lineHeight: '1.2',
                        color: '#FFFFFF',
                        textAlign: 'center',
                        marginBottom: '20px',
                        maxWidth: '620px'
                    }}
                >
                    {t('title')}
                </h2>

                {/* Subtitle */}
                <p
                    className="px-5 md:px-0"
                    style={{
                        fontFamily: 'Instrument Sans, sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        lineHeight: '27px',
                        color: '#94969D',
                        textAlign: 'center',
                        maxWidth: '620px',
                        marginBottom: '48px'
                    }}
                >

                    {t('subtitle')}
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col md:flex-row gap-5 items-center mb-20 w-full md:w-auto px-5 md:px-0" style={{ marginBottom: '80px' }}>
                    {/* Google Play Button */}
                    <Link
                        href="/waitlist"
                        className="w-full md:w-auto"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid rgb(221, 229, 237)',
                            borderRadius: '12px',
                            padding: '14px 18px',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {/* Google Play Icon */}
                        <div style={{ position: 'relative', width: '30px', height: '30px', flexShrink: 0 }}>
                            <Image
                                src="/images/icon-playstore.svg"
                                alt="Google Play"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>

                        {/* Text */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span
                                style={{
                                    fontFamily: 'Instrument Sans, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: '#131315',
                                    lineHeight: '1'
                                }}
                            >
                                {t('getItOn')}
                            </span>
                            <span
                                style={{
                                    fontFamily: 'Instrument Sans, sans-serif',
                                    fontSize: '17px',
                                    fontWeight: 600,
                                    color: '#0E0E10',
                                    lineHeight: '1.2'
                                }}
                            >
                                {t('googlePlay')}
                            </span>
                        </div>
                    </Link>

                    {/* App Store Button */}
                    <Link
                        href="/waitlist"
                        className="w-full md:w-auto"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid rgb(221, 229, 237)',
                            borderRadius: '12px',
                            padding: '14px 18px',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {/* App Store Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                            <path fill="url(#b)" d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5Z" />
                            <path fill="#fff" d="M23.058 10.818a1.383 1.383 0 0 0-.505-1.884 1.37 1.37 0 0 0-1.874.507l-.66 1.152-.66-1.152a1.37 1.37 0 0 0-1.874-.507 1.383 1.383 0 0 0-.505 1.884l1.455 2.54-4.603 8.036h-3.71c-.757 0-1.372.617-1.372 1.379s.615 1.38 1.373 1.38H23.04c.113-.3.232-.813.105-1.284-.19-.71-.896-1.475-2.078-1.475H17l6.058-10.576Zm-8.512 14.859c-.235-.261-.76-.679-1.22-.816-.701-.21-1.233-.078-1.502.036l-1.022 1.785a1.383 1.383 0 0 0 .505 1.884 1.37 1.37 0 0 0 1.874-.508l1.365-2.38Z" />
                            <path fill="#fff" d="M27.787 24.152h2.09c.758 0 1.373-.617 1.373-1.38 0-.761-.615-1.378-1.373-1.378h-3.67l-4.135-7.218c-.307.293-.896 1.043-.985 1.892-.114 1.092.057 2.011.572 2.912 1.73 3.027 3.464 6.053 5.198 9.078a1.37 1.37 0 0 0 1.875.508c.657-.38.883-1.223.505-1.884l-1.45-2.53Z" />
                            <defs>
                                <linearGradient id="b" x1="20" x2="20" y1="2.5" y2="37.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2AC9FA" />
                                    <stop offset="1" stopColor="#1F65EB" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Text */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span
                                style={{
                                    fontFamily: 'Instrument Sans, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: '#131315',
                                    lineHeight: '1'
                                }}
                            >
                                {t('downloadOn')}
                            </span>
                            <span
                                style={{
                                    fontFamily: 'Instrument Sans, sans-serif',
                                    fontSize: '17px',
                                    fontWeight: 600,
                                    color: '#0E0E10',
                                    lineHeight: '1.2'
                                }}
                            >
                                {t('appStore')}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* iPhone Mockups - Front-Facing with Exact Sample Measurements */}
                <div className="h-[400px] md:h-[494px]" style={{
                    position: 'relative',
                    width: '886px',  // Exact width from sample (252 + 30 + 322 + 30 + 252)
                    maxWidth: '100%',
                    marginTop: '0px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    overflow: 'hidden'  // Hide overflow to cut iPhones
                }}>
                    {/* Left iPhone (Thread) - 2 layers with insets */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '101px',
                        width: '252px',
                        height: '498px'
                    }}>
                        <Image
                            src={`/images/${locale}/answer_view_download_section_${locale}.png`}
                            alt="Answer View"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    {/* Center iPhone (Login) - 2 layers with insets */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '0',
                        width: '322px',
                        height: '637px'
                    }}>
                        <Image
                            src={`/images/${locale}/improved_answer_download_section_${locale}.png`}
                            alt="Improved Answer"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    {/* Right iPhone (Search) - 2 layers with insets */}
                    <div style={{
                        position: 'absolute',
                        right: '0',
                        top: '101px',
                        width: '252px',
                        height: '498px'
                    }}>
                        <Image
                            src={`/images/${locale}/answer_list_download_section_${locale}.png`}
                            alt="Answer List"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    {/* Gradient Fade Overlay at Bottom */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '350px',  // Increased to cover more area (was 300px)
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 60%, rgb(0,0,0) 100%)',
                        zIndex: 3,
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>
        </section>
    )
}
