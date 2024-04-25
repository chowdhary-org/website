import { Hero } from '@/app/(foundation)/components/Hero'
import { Newsletter } from '@/app/(foundation)/components/Newsletter'
import { Projects } from '@/app/(foundation)/components/Projects'
import { Schedule } from '@/app/(foundation)/components/Schedule'
import { Sponsors } from '@/app/(foundation)/components/Sponsors'

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
