import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'

export default function Home() {
  return (
    <main className="min-h-screen bg-appit-bg">
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Features />
    </main>
  )
}
