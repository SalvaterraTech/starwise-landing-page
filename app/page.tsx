import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'

export default function Home() {
  return (
    <main className="min-h-screen bg-appit-bg">
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
    </main>
  )
}
