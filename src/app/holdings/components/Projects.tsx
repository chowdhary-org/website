'use client'

import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import clsx from 'clsx'

interface Day {
  title: string
  label: string
  href?: string
  summary: string
}

const projects: Array<Day> = [
  {
    title: 'FirstQuadrant',
    label: 'Active',
    href: 'https://firstquadrant.ai',
    summary:
      'All-in-one AI sales platform for scalable and autonomous B2B sales (YC S21).',
  },
  {
    title: 'Langbase',
    label: 'Active',
    href: 'https://langbase.com',
    summary:
      'Composable AI developer platform to ship AI features in minutes, not months.',
  },
  {
    title: 'humansby.ai',
    label: 'Active',
    href: 'https://www.humansby.ai',
    summary:
      'Automating D2C ecommerce operations using fully autonomous AI agents.',
  },
  {
    title: 'AI video platform',
    label: 'Stealth',
    summary:
      'Generative AI platform for dynamic videos using no-code tool and API.',
  },
  {
    title: 'Pabio',
    label: 'Inactive',
    summary:
      'Rent-to-own furniture with personalized interior design in Europe (2020–2022).',
  },
  {
    title: 'Oswald Labs',
    label: 'Inactive',
    summary:
      'Accessibility technology company for the next billion users (2016–2020).',
  },
  {
    title: 'Ara',
    label: 'Inactive',
    summary: 'AI assistant for scheduling meetings over email (2019–2020).',
  },
]

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-primary-900">
          {day.href ? (
            <a
              href={day.href}
              target="_blank"
              rel="noopener"
              className="parent-relative-full-link"
            >
              {day.title}
            </a>
          ) : (
            day.title
          )}
        </h3>
        <div
          className={clsx(
            'rounded-full bg-primary-200 px-3 py-1 text-sm font-bold uppercase leading-tight text-primary-800',
            day.label === 'Inactive' && 'opacity-50',
          )}
        >
          {day.label}
        </div>
      </div>
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
          className="relative rounded-b-lg bg-white/60 shadow-xl shadow-primary-900/5 backdrop-blur transition-shadow duration-200 ease-in-out hover:shadow-primary-900/10"
        >
          <div className="space-y-6 px-10 py-10">
            <DaySummary day={day} />
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
            &ldquo;Through technological process and acceleration, we invest in
            more than advancements; we invest in the future prosperity of
            humanity itself.&rdquo;
          </blockquote>
          <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
            At Chowdhary.co, our compact investment fund is a catalyst,
            accelerating technology to unlock extraordinary possibilities.
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
