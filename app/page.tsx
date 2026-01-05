import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main className="min-h-screen bg-appit-bg">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  )
}
