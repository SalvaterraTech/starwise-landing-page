import type { Metadata } from 'next'
import { Inter, Inter_Tight, Instrument_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-inter',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-inter-tight',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans',
})

export const metadata: Metadata = {
  title: 'Appit Social - Connect, Share, and Grow',
  description: 'Join Appit to build authentic connections and share your passions effortlessly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} ${instrumentSans.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
