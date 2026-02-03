import { Collaborators } from '@/app/common/Collaborators'
import { Foundation } from '@/app/common/Foundation'
import { Holdings } from '@/app/common/Holdings'
import { Hero } from '@/app/holdings/components/Hero'
import { Newsletter } from '@/app/holdings/components/Newsletter'
import { Projects } from '@/app/holdings/components/Projects'

const investmentFundSchema = {
  '@context': 'https://schema.org',
  '@type': 'InvestmentFund',
  name: 'Chowdhary.co',
  description:
    'At Chowdhary.co, we make early-stage investments to accelerate technological progress and drive social impact. We invest at pre-seed and seed in technical founders building AI, developer tools, and infrastructure.',
  url: 'https://chowdhary.co',
  logo: 'https://chowdhary.co/apple-touch-icon.png',
  founder: [
    {
      '@type': 'Person',
      name: 'Anand Chowdhary',
      sameAs: [
        'https://www.linkedin.com/in/anandchowdhary/',
        'https://anandchowdhary.com',
      ],
    },
    {
      '@type': 'Person',
      name: 'Sukriti Kapoor',
      sameAs: [
        'https://www.linkedin.com/in/sukritikapoor/',
        'https://sukritikapoor.com',
      ],
    },
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Developer Tools',
    'Infrastructure',
    'Pre-seed Investment',
    'Seed Investment',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(investmentFundSchema),
        }}
      />
      <Hero />
      <Holdings />
      <Projects />
      <Foundation externalLink />
      <Collaborators />
      <Newsletter />
    </>
  )
}
