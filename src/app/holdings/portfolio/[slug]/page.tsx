import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import { Button } from '@/app/holdings/components/Button'
import {
  getAllCompanySlugs,
  getCompanyBySlug,
  type Company,
} from '@/app/holdings/data/companies'
import { IconArrowLeft, IconExternalLink } from '@tabler/icons-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

function generateOrganizationSchema(company: Company) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.title,
    description: Array.isArray(company.description)
      ? company.description.join(' ')
      : company.description,
  }

  if (company.href) {
    schema.url = company.href
  }

  if (company.logo) {
    schema.logo = `https://chowdhary.co${company.logo}`
  }

  if (company.founded) {
    schema.foundingDate = company.founded
  }

  if (company.ended) {
    schema.dissolutionDate = company.ended
  }

  if (company.location) {
    schema.location = {
      '@type': 'Place',
      name: company.location,
    }
  }

  if (company.founders && company.founders.length > 0) {
    schema.founder = company.founders.map((founder) => ({
      '@type': 'Person',
      name: founder.name,
      ...(founder.linkedin && { sameAs: founder.linkedin }),
      ...(founder.avatar && { image: `https://chowdhary.co${founder.avatar}` }),
    }))
  }

  return schema
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
    title: `${company.title} – Portfolio – Chowdhary.co`,
    description: company.summary,
  }
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) {
    notFound()
  }

  const organizationSchema = generateOrganizationSchema(company)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36 text-primary-300" />
      <Container className="relative">
        <article
          className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12"
          itemScope
          itemType="https://schema.org/Organization"
        >
          {/* Back link */}
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
          >
            <IconArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          {/* Hidden meta properties */}
          {company.href && <meta itemProp="url" content={company.href} />}
          {company.founded && (
            <meta itemProp="foundingDate" content={company.founded} />
          )}
          {company.ended && (
            <meta itemProp="dissolutionDate" content={company.ended} />
          )}

          {/* Header */}
          <div className="flex items-end justify-between gap-6">
            <h1
              className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl"
              itemProp="name"
            >
              {company.title}
            </h1>
            {company.logo && (
              <img
                src={company.logo}
                alt={`${company.title} logo`}
                className="size-16 flex-shrink-0 -translate-y-0.5 rounded-xl object-cover shadow sm:size-24"
                itemProp="logo"
              />
            )}
          </div>

          {/* Summary */}
          <p
            className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight text-primary-700"
            itemProp="description"
          >
            {company.summary}
          </p>

          {/* Meta info */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base text-primary-900">
            <div>
              <span className="font-semibold">Status:</span> {company.label}
            </div>
            {company.founded && (
              <div>
                <span className="font-semibold">
                  {company.ended ? 'Operated' : 'Founded'}:
                </span>{' '}
                {company.founded}
                {company.ended && `–${company.ended}`}
              </div>
            )}
            {company.location && (
              <div
                itemProp="location"
                itemScope
                itemType="https://schema.org/Place"
              >
                <span className="font-semibold">Location:</span>{' '}
                <span itemProp="name">{company.location}</span>
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
                  <div
                    key={founder.name}
                    className="flex items-center gap-3"
                    itemProp="founder"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    {founder.avatar && (
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="h-12 w-12 rounded-full object-cover"
                        itemProp="image"
                      />
                    )}
                    <div>
                      <div
                        className="font-semibold text-primary-900"
                        itemProp="name"
                      >
                        {founder.name}
                      </div>
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:text-primary-800"
                          itemProp="sameAs"
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
        </article>
      </Container>
    </div>
    </>
  )
}
