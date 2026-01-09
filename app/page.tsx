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

export default function Home() {
  return (
    <main className="min-h-screen bg-appit-bg">
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
    </main>
  )
}
