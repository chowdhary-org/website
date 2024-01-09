import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Projects } from '@/components/Projects'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <Projects />
      <Sponsors />
      <Newsletter />
    </>
  )
}
