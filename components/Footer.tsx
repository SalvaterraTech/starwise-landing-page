import { Link } from '@/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'



const socialLinks = [
  {
    href: 'https://in.linkedin.com/',
    icon: '/images/social-twitter.svg',
    alt: 'LinkedIn'
  },
  {
    href: 'https://x.com',
    icon: '/images/social-instagram.svg',
    alt: 'X.com'
  },
  {
    href: 'https://www.instagram.com/starwiseapp/',
    icon: '/images/social-youtube.svg',
    alt: 'Instagram'
  },
]

export default function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')

  const footerLinks = [
    { href: '/#benefits', label: tNav('benefits') },
    { href: '/#features', label: tNav('features') },
    { href: '/#pricing', label: tNav('pricing') },
    { href: '/#testimonial', label: tNav('testimonials') },
    { href: '/#faq', label: tNav('faqs') },
    { href: '/waitlist', label: tNav('joinWaitlist') },
  ]

  return (
    <footer
      className="relative w-full pt-20 pb-8"
      style={{
        background: 'radial-gradient(27.27% 35.9% at 50% 0%, rgba(19, 19, 21, 1) 0%, rgba(0, 0, 0, 1) 100%)'
      }}
    >
      {/* Top Stroke */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'radial-gradient(40% 50% at 50% 50%, rgb(40, 40, 44) 0%, rgb(0, 0, 0) 100%)'
        }}
      />

      <div className="section-container">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-[30px] mb-[88px]">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-[72px] h-[72px]">
                <Image
                  src="/images/starwise_logo.png"
                  alt="Starwise Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-white text-[28px] font-bold"
                style={{ fontFamily: 'Inter Tight, sans-serif' }}
              >
                Starwise
              </span>
            </Link>
            <div
              className="text-center text-xl font-semibold"
              style={{ fontFamily: 'Inter Tight, sans-serif' }}
            >
              <p>{t('tagline1')}</p>
              <p>{t('tagline2')}</p>
            </div>
          </div>

          {/* Email Button */}
          <Link
            href="mailto:starwise@salvaterratech.com"
            className="flex items-center gap-3 px-5 py-3 bg-appit-surface border border-appit-border-light rounded-12 hover:bg-appit-border-light transition-colors"
          >
            <Image
              src="/images/email-icon.svg"
              alt="Email"
              width={24}
              height={24}
            />
            <span
              className="text-white text-[17px] font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              {t('contact')}
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {footerLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="text-appit-gray hover:text-white transition-colors text-[17px] font-medium"
                style={{ fontFamily: 'Instrument Sans, sans-serif' }}
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <div className="w-1 h-1 rounded-full bg-appit-border-light" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-appit-border pt-8 flex flex-col md:grid md:grid-cols-3 items-center gap-6">
          {/* Template Credit */}
          <Link
            href="https://www.salvaterratech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-appit-gray-dark hover:text-appit-gray transition-colors text-[17px] font-medium justify-self-start"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
          >
            {t('templateCredit')}
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-3 justify-self-center">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-appit-surface rounded-12 hover:bg-appit-border-light transition-colors"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>

          {/* Privacy Policy & Terms */}
          <div className="flex items-center gap-2 justify-self-end">
            <Link
              href="/privacy-policy"
              className="text-appit-gray-dark hover:text-appit-gray transition-colors text-[17px] font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              {t('privacy')}
            </Link>
            <div className="w-1 h-1 rounded-full bg-appit-gray-dark" />
            <Link
              href="/terms-of-use"
              className="text-appit-gray-dark hover:text-appit-gray transition-colors text-[17px] font-medium"
              style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
