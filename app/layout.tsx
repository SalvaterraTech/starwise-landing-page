import type { Metadata } from 'next'
import './globals.css'
import './testimonials_framer.css'
import './testimonials_adjustments.css'

export const metadata: Metadata = {
  title: 'Starwise',
  description: 'Starwise empowers candidates to answer interviews with clarity and confidence — and land the job they want.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    title: 'Starwise',
    description: 'Starwise empowers candidates to answer interviews with clarity and confidence — and land the job they want.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starwise',
    description: 'Starwise empowers candidates to answer interviews with clarity and confidence — and land the job they want.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
