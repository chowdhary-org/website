import { Collaborators } from '@/app/common/Collaborators'
import { Foundation } from '@/app/common/Foundation'
import { Holdings } from '@/app/common/Holdings'
import { Hero } from '@/app/foundation/components/Hero'
import { Newsletter } from '@/app/foundation/components/Newsletter'
import { Projects } from '@/app/foundation/components/Projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Foundation />
      <Projects />
      <Holdings externalLink />
      <Collaborators />
      <Newsletter />
    </>
  )
}
