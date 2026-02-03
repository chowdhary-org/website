'use client'

import { companies, type Company } from '@/app/holdings/data/companies'
import clsx from 'clsx'
import Link from 'next/link'

function StealthLogo() {
  return (
    <svg
      className="size-8 -translate-y-0.5 rounded-lg shadow"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="32" height="32" fill="#e5e7eb" />
      <rect width="32" height="32" filter="url(#noise)" opacity="0.5" />
    </svg>
  )
}

function StealthAvatar({ index }: { index: number }) {
  return (
    <svg
      className="h-8 w-8 rounded-full border-2 border-white"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={`noise-avatar-${index}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.7 + index * 0.1}
            numOctaves="4"
            stitchTiles="stitch"
            seed={index * 42}
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <clipPath id={`circle-${index}`}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath={`url(#circle-${index})`}>
        <rect width="32" height="32" fill="#e5e7eb" />
        <rect
          width="32"
          height="32"
          filter={`url(#noise-avatar-${index})`}
          opacity="0.5"
        />
      </g>
    </svg>
  )
}

function CompanyCard({ company }: { company: Company }) {
  const ycTag = company.tags?.find((tag) => tag.startsWith('Y Combinator'))

  if (company.stealth) {
    return (
      <>
        <div className="flex items-center gap-4">
          <StealthLogo />
          <div className="-translate-y-0.5 text-xs text-xs font-semibold">
            <span className="uppercase tracking-wider text-primary-500">
              Stealth mode
            </span>
            <h3 className="leading-tight tracking-tight text-primary-900">
              {company.stealthCategory || company.title}
            </h3>
          </div>
        </div>
        <p className="mt-1.5 text-base tracking-tight text-primary-900/80">
          {company.summary}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((index) => (
              <StealthAvatar key={index} index={index} />
            ))}
          </div>
          {ycTag && (
            <div className="flex items-center gap-2">
              <img
                src="https://www.ycombinator.com/favicon.ico"
                alt="Y Combinator"
                className="size-5 -translate-y-0.5 rounded-sm"
              />
              <span className="text-sm font-medium text-primary-700">
                {ycTag}
              </span>
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex items-center gap-4">
        {company.logo && (
          <img
            src={company.logo}
            alt={`${company.title} logo`}
            className="size-8 -translate-y-0.5 rounded-lg object-cover shadow"
          />
        )}
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-primary-900">
          <Link
            href={`/holdings/portfolio/${company.slug}`}
            className="parent-relative-full-link"
          >
            {company.title}
          </Link>
        </h3>
      </div>
      <p className="mt-1.5 text-base tracking-tight text-primary-900/80">
        {company.summary}
      </p>
      {(company.founders?.length || ycTag) && (
        <div className="mt-4 flex items-center justify-between gap-4">
          {company.founders && company.founders.length > 0 ? (
            <div className="flex -space-x-2">
              {company.founders.map((founder) =>
                founder.avatar ? (
                  <img
                    key={founder.name}
                    src={founder.avatar}
                    alt={founder.name}
                    title={founder.name}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                ) : null,
              )}
            </div>
          ) : (
            <div />
          )}
          {ycTag && (
            <div className="flex items-center gap-2">
              <img
                src="https://www.ycombinator.com/favicon.ico"
                alt="Y Combinator"
                className="size-5 -translate-y-0.5 rounded-sm"
              />
              <span className="text-sm font-medium text-primary-700">
                {ycTag}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  )
}

interface CompanyCardsProps {
  columns?: 1 | 3
}

export function CompanyCards({ columns = 3 }: CompanyCardsProps) {
  return (
    <div
      className={clsx(
        'grid gap-8',
        columns === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3',
      )}
    >
      {companies.map((company) => (
        <section
          key={company.slug}
          className="relative rounded-b-lg bg-white/60 shadow-xl shadow-primary-900/5 backdrop-blur transition-shadow duration-200 ease-in-out hover:shadow-primary-900/10"
        >
          <div className="space-y-6 px-10 py-10">
            <CompanyCard company={company} />
          </div>
        </section>
      ))}
    </div>
  )
}
