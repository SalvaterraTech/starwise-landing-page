import type { Metadata } from 'next'
import './globals.css'
import './testimonials_framer.css'
import './testimonials_adjustments.css'

export const metadata: Metadata = {
  title: 'Appit',
  description: 'Appit Social empowers you to connect, share, and grow by building authentic connections and sharing your passions effortlessly.',
  icons: {
    icon: 'https://framerusercontent.com/images/f4npQR8d0gA4vor2TIEJP7fg9EI.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Appit',
    description: 'Appit Social empowers you to connect, share, and grow by building authentic connections and sharing your passions effortlessly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appit',
    description: 'Appit Social empowers you to connect, share, and grow by building authentic connections and sharing your passions effortlessly.',
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
