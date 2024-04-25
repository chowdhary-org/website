import { Hero } from '@/app/holdings/components/Hero'
import { Newsletter } from '@/app/holdings/components/Newsletter'
import { Projects } from '@/app/holdings/components/Projects'
import { Schedule } from '@/app/holdings/components/Schedule'
import { Sponsors } from '@/app/holdings/components/Sponsors'

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
