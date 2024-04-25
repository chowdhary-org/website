import { Collaborators } from '@/app/common/Collaborators'
import { Foundation } from '@/app/common/Foundation'
import { Holdings } from '@/app/common/Holdings'
import { Hero } from '@/app/holdings/components/Hero'
import { Newsletter } from '@/app/holdings/components/Newsletter'
import { Projects } from '@/app/holdings/components/Projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Holdings />
      <Projects />
      <Foundation externalLink />
      <Collaborators />
      <Newsletter />
    </>
  )
}
