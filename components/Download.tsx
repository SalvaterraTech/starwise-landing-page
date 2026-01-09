'use client'

import Image from 'next/image'

export default function Download() {
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
                    style={{
                        fontFamily: 'Inter Tight, sans-serif',
                        fontSize: '58px',
                        fontWeight: 700,
                        lineHeight: '69.6px',
                        color: '#FFFFFF',
                        textAlign: 'center',
                        marginBottom: '20px',
                        maxWidth: '620px'
                    }}
                >
                    Download Starwise and Start Preparing Today
                </h2>

                {/* Subtitle */}
                <p
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
                    Download Starwise now to start practicing interview questions and get AI-powered feedback for a seamless preparation experience!
                </p>

                {/* Buttons Container */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '80px' }}>
                    {/* Google Play Button */}
                    <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                            <g clipPath="url(#a)">
                                <path fill="#32BBFF" d="M29.873 13.72C25.226 11.123 17.768 6.949 6.2.472a2.79 2.79 0 0 0-2.453-.32L23.595 20l6.278-6.278Z" />
                                <path fill="#32BBFF" d="M3.747.15A2.791 2.791 0 0 0 1.84 2.813v34.372a2.79 2.79 0 0 0 1.907 2.663L23.595 20 3.747.15Z" />
                                <path fill="#32BBFF" d="M23.595 19.998 3.747 39.847a2.76 2.76 0 0 0 2.453-.32 16610.023 16610.023 0 0 1 23.293-13.028l.386-.216-6.284-6.285Z" />
                                <path fill="#2C9FD9" d="M1.84 19.998v17.186a2.79 2.79 0 0 0 1.907 2.663l19.848-19.849H1.84Z" />
                                <path fill="#29CC5E" d="M6.2.47A2.798 2.798 0 0 0 3.325.332L23.294 20.3l6.579-6.58A32431.6 32431.6 0 0 1 6.2.47Z" />
                                <path fill="#D93F21" d="M23.294 19.697 3.325 39.666c.856.454 1.948.48 2.875-.14a16716.816 16716.816 0 0 1 23.293-13.027l.386-.217-6.585-6.585Z" />
                                <path fill="#FFD500" d="M38.16 19.998c0-.952-.48-1.913-1.433-2.446 0 0-1.78-.994-7.24-4.048l-6.494 6.494 6.5 6.5c5.4-3.031 7.234-4.053 7.234-4.053a2.783 2.783 0 0 0 1.433-2.447Z" />
                                <path fill="#FA0" d="M36.727 22.445a2.783 2.783 0 0 0 1.433-2.447H22.993l6.5 6.5c5.4-3.03 7.234-4.053 7.234-4.053Z" />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h40v40H0z" />
                                </clipPath>
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
                                Get It On
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
                                Google Play
                            </span>
                        </div>
                    </a>

                    {/* App Store Button */}
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
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
                                Download on the
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
                                App Store
                            </span>
                        </div>
                    </a>
                </div>

                {/* iPhone Mockups - Front-Facing with Exact Sample Measurements */}
                <div style={{
                    position: 'relative',
                    width: '886px',  // Exact width from sample (252 + 30 + 322 + 30 + 252)
                    maxWidth: '100%',
                    height: '494px',  // EXACT height from reference site (was 480px)
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
                        {/* Frame Layer (Background with white borders) */}
                        <Image
                            src="/images/iphone-frame-sample.png"
                            alt="iPhone Frame"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        {/* Content Layer (Foreground with insets) */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '14px',
                            width: '224px',
                            height: '478px',
                            borderRadius: '32px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/images/iphone-thread-complete.jpg"
                                alt="Thread Screen"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
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
                        {/* Frame Layer (Background with white borders) */}
                        <Image
                            src="/images/iphone-frame-sample.png"
                            alt="iPhone Frame"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        {/* Content Layer (Foreground with insets) */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '14px',
                            width: '294px',
                            height: '617px',
                            borderRadius: '32px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/images/iphone-login-complete.jpg"
                                alt="Login Screen"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Right iPhone (Search) - 2 layers with insets */}
                    <div style={{
                        position: 'absolute',
                        right: '0',
                        top: '101px',
                        width: '252px',
                        height: '498px'
                    }}>
                        {/* Frame Layer (Background with white borders) */}
                        <Image
                            src="/images/iphone-frame-sample.png"
                            alt="iPhone Frame"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        {/* Content Layer (Foreground with insets) */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '14px',
                            width: '224px',
                            height: '478px',
                            borderRadius: '32px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/images/iphone-search-complete.jpg"
                                alt="Search Screen"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
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
