import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import { Button } from '@/app/holdings/components/Button'
import {
  getAllCompanySlugs,
  getCompanyBySlug,
} from '@/app/holdings/data/companies'
import { IconArrowLeft, IconExternalLink } from '@tabler/icons-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCompanySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) {
    return {
      title: 'Company Not Found',
    }
  }

  return {
    title: company.title,
    description: company.summary,
  }
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) {
    notFound()
  }

  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36 text-primary-300" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          {/* Back link */}
          <Link
            href="/holdings/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
          >
            <IconArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          {/* Header */}
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
            {company.title}
          </h1>

          {/* Summary */}
          <p className="mt-6 font-display text-2xl font-bold tracking-tight text-primary-700">
            {company.summary}
          </p>

          {/* Meta info */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base text-primary-900">
            <div>
              <span className="font-semibold">Status:</span> {company.label}
            </div>
            {company.founded && (
              <div>
                <span className="font-semibold">Founded:</span>{' '}
                {company.founded}
              </div>
            )}
            {company.ended && (
              <div>
                <span className="font-semibold">Ended:</span> {company.ended}
              </div>
            )}
            {company.location && (
              <div>
                <span className="font-semibold">Location:</span>{' '}
                {company.location}
              </div>
            )}
          </div>

          {/* Tags */}
          {company.tags && company.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {company.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Founders */}
          {company.founders && company.founders.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                {company.founders.length === 1 ? 'Founder' : 'Founders'}
              </h2>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
                {company.founders.map((founder) => (
                  <div key={founder.name} className="flex items-center gap-3">
                    {founder.avatar && (
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-primary-900">
                        {founder.name}
                      </div>
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:text-primary-800"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mt-10 space-y-6 font-display tracking-tight text-primary-900">
            {Array.isArray(company.description) ? (
              company.description.map((paragraph, index) => (
                <p key={index} className={index === 0 ? 'text-xl' : 'text-lg'}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-xl">{company.description}</p>
            )}
          </div>

          {/* CTA Button */}
          {company.href && (
            <div className="mt-10 pl-12">
              <Button href={company.href} target="_blank" rel="noopener">
                <span className="flex items-center gap-2">
                  Visit {company.title}
                  <IconExternalLink className="h-5 w-5" />
                </span>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
