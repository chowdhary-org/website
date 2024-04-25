'use client'

import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/foundation/components/BackgroundImage'
import { Button } from '@/app/foundation/components/Button'
import { IconChevronRight } from '@tabler/icons-react'

interface Day {
  title: string
  label: string
  href: string
  summary: string
}

const projects: Array<Day> = [
  {
    title: '100,000+ masks for frontline workers',
    label: 'Karuna 2020',
    href: 'https://karuna2020.org',
    summary:
      'Karuna 2020 distributed over 100,000 masks to frontline workers like healthcare and police personnel across India during the COVID-19 pandemic.',
  },
  {
    title: '2,500+ families sustained with meals',
    label: 'Karuna 2020',
    href: 'https://karuna2020.org',
    summary:
      'Karuna 2020 distributed over 2,500 dry ration kits to families migrant workers during the COVID-19 lockdown. Each kit can help sustain a family for 4 for one month.',
  },
  {
    title: 'A hackathon to solve problems for India',
    label: 'BharatHacks',
    href: 'https://bharathacks.github.io',
    summary:
      'Over 100 engineers, designers, and entrepreneurs participated in the free hackathon and launched products during the weekend of June 17–18, 2018.',
  },
  {
    title: 'A platform to celebrate Indian entrepreneurs',
    label: 'Made with Love in India',
    href: 'https://madewithloveinindia.org',
    summary:
      'Made with Love in India is an open platform to celebrate, promote, and build a brand — India. Find the most exciting new startups and products from Indian entrepreneurs.',
  },
  {
    title: 'Open source template for nonprofits',
    label: 'Karuna 2020 Open Data',
    summary:
      'GitHub repository with Airtable and Google Sheets integrations for openly sharing contributors, donors, beneficiaries, and more information.',
    href: 'https://open-data.karuna2020.org',
  },
]

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold leading-tight tracking-tight text-primary-900">
        {day.title}
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-primary-900">
        {day.summary}
      </p>
    </>
  )
}

function ScheduleStatic() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {projects.map((day) => (
        <section
          key={day.title}
          className="rounded-b-lg bg-white/60 shadow-xl shadow-primary-900/5 backdrop-blur"
        >
          <div className="space-y-6 px-10 py-10">
            <DaySummary day={day} />
            <footer className="ml-12 " style={{ zoom: 0.8 }}>
              <Button href={day.href} className="flex items-center space-x-2">
                <span>Visit {day.label}</span>
                <IconChevronRight className="h-4 w-4" />
              </Button>
            </footer>
          </div>
        </section>
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <blockquote className="font-display text-4xl font-bold tracking-tighter text-primary-600 sm:text-5xl">
            &ldquo;Through the lens of technology, we see not just challenges,
            but opportunities to make a lasting difference.&rdquo;
          </blockquote>
          <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
            At Chowdhary.org, every innovation is a step towards a future where
            technology serves humanity in its noblest form.
          </p>
          <div className="mt-2 font-display text-lg not-italic text-primary-900">
            &ndash;{' '}
            <a
              href="https://anandchowdhary.com"
              target="_blank"
              rel="noopener"
              className="rounded font-bold text-primary-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Anand Chowdhary
            </a>
            , founder
          </div>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage
          position="right"
          className="-bottom-32 -top-40 text-primary-300"
        />
        <Container className="relative">
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
