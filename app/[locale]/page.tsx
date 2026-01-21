import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import AdvancedCapabilities from '@/components/AdvancedCapabilities'
import DiscoverFeatures from '@/components/DiscoverFeatures'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Download from '@/components/Download'
import Footer from '@/components/Footer'
import MixpanelPageView from '@/components/MixpanelPageView'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-appit-bg">
      <MixpanelPageView />
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Features />
      <AdvancedCapabilities />
      <DiscoverFeatures />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </main>
  )
}
