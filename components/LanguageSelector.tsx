'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

// Flag Icons
const BRFlag = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#F0F0F0" />
        <mask id="mask0_br" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_br)">
            <rect x="-2" y="-2" width="24" height="24" fill="#009B3A" />
            <path d="M10 16.5L2 10L10 3.5L18 10L10 16.5Z" fill="#FEDF00" />
            <circle cx="10" cy="10" r="3.5" fill="#002776" />
            <path d="M7.5 10.5C7.5 10.5 8.5 11.5 10 11.5C11.5 11.5 12.5 10.5 12.5 10.5" stroke="white" strokeWidth="0.6" strokeLinecap="round" />
        </g>
    </svg>
)

const USFlag = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#F0F0F0" />
        <mask id="mask0_us" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_us)">
            <rect x="-2" y="-2" width="24" height="24" fill="white" />
            <path d="M-2 1.5H22M-2 4.5H22M-2 7.5H22M-2 10.5H22M-2 13.5H22M-2 16.5H22M-2 19.5H22" stroke="#B22234" strokeWidth="1.5" />
            <rect x="-2" y="-2" width="11" height="9" fill="#3C3B6E" />
            <path d="M1.5 1L2 2L1 2L1.5 1ZM4 1L4.5 2L3.5 2L4 1ZM6.5 1L7 2L6 2L6.5 1ZM1.5 3.5L2 4.5L1 4.5L1.5 3.5ZM4 3.5L4.5 4.5L3.5 4.5L4 3.5ZM6.5 3.5L7 4.5L6 4.5L6.5 3.5ZM2.75 2.25L3.25 3.25L2.25 3.25L2.75 2.25ZM5.25 2.25L5.75 3.25L4.75 3.25L5.25 2.25ZM2.75 4.75L3.25 5.75L2.25 5.75L2.75 4.75ZM5.25 4.75L5.75 5.75L4.75 5.75L5.25 4.75Z" fill="white" transform="scale(0.8) translate(1,1)" />
        </g>
    </svg>
)

export default function LanguageSelector() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const switchLanguage = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
        setIsOpen(false)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-appit-border rounded-12 hover:bg-[#252525] transition-colors"
            >
                {locale === 'pt' ? <BRFlag /> : <USFlag />}
                <span
                    className="text-white text-[15px] font-medium uppercase"
                    style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                >
                    {locale}
                </span>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path
                        d="M1 1L5 5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-full min-w-[120px] bg-[#1A1A1A] border border-appit-border rounded-12 overflow-hidden shadow-xl z-50">
                    <button
                        onClick={() => switchLanguage('en')}
                        className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-[#252525] transition-colors ${locale === 'en' ? 'bg-[#252525]' : ''
                            }`}
                    >
                        <USFlag />
                        <span
                            className="text-white text-[15px] font-medium"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                            EN
                        </span>
                    </button>
                    <button
                        onClick={() => switchLanguage('pt')}
                        className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-[#252525] transition-colors ${locale === 'pt' ? 'bg-[#252525]' : ''
                            }`}
                    >
                        <BRFlag />
                        <span
                            className="text-white text-[15px] font-medium"
                            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
                        >
                            PT
                        </span>
                    </button>
                </div>
            )}
        </div>
    )
}
