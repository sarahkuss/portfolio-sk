import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-plant-background bg-center">
      <Hero />
      {/* <Projects /> */}
    </main>
  )
}
