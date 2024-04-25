'use client'

import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import { Container } from '@/app/holdings/components/Container'
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
    title: 'LLM platform',
    label: 'Stealth',
    summary:
      'Developer platform for building LLM apps with open source libraries.',
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
        <h3 className="text-primary-900 text-2xl font-semibold leading-tight tracking-tight">
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
            'bg-primary-200 text-primary-800 rounded-full px-3 py-1 text-sm font-bold uppercase leading-tight',
            day.label === 'Inactive' && 'opacity-50',
          )}
        >
          {day.label}
        </div>
      </div>
      <p className="text-primary-900 mt-1.5 text-base tracking-tight">
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
          className="shadow-primary-900/5 hover:shadow-primary-900/10 relative rounded-b-lg bg-white/60 shadow-xl backdrop-blur transition-shadow duration-200 ease-in-out"
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
          <blockquote className="text-primary-600 font-display text-4xl font-bold tracking-tighter sm:text-5xl">
            &ldquo;Through technological process and acceleration, we invest in
            more than advancements; we invest in the future prosperity of
            humanity itself.&rdquo;
          </blockquote>
          <p className="text-primary-900 mt-4 font-display text-2xl tracking-tight">
            At Chowdhary.co, our compact investment fund is a catalyst,
            accelerating technology to unlock extraordinary possibilities.
          </p>
          <div className="text-primary-900 mt-2 font-display text-lg not-italic">
            &ndash;{' '}
            <a
              href="https://anandchowdhary.com"
              target="_blank"
              rel="noopener"
              className="focus-visible:outline-primary-500 text-primary-800 rounded font-bold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Anand Chowdhary
            </a>
            , founder of Chowdhary.co and Chowdhary.org
          </div>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage
          position="right"
          className="text-primary-300 -bottom-32 -top-40"
        />
        <Container className="relative">
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
