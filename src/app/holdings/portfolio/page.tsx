import { CompanyCards } from '@/app/common/CompanyCards'
import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import { companies } from '@/app/holdings/data/companies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio – Chowdhary.co',
  description:
    'Pre-seed and seed investments in AI, developer tools, and infrastructure companies.',
}

const portfolioListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Chowdhary.co Investment Portfolio',
  description:
    'Pre-seed and seed investments in AI, developer tools, and infrastructure companies.',
  numberOfItems: companies.filter((c) => !c.stealth).length,
  itemListElement: companies
    .filter((c) => !c.stealth)
    .map((company, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Organization',
        name: company.title,
        description: company.summary,
        url: `https://chowdhary.co/portfolio/${company.slug}`,
        ...(company.logo && { logo: `https://chowdhary.co${company.logo}` }),
        ...(company.href && { sameAs: company.href }),
        ...(company.founded && { foundingDate: company.founded }),
        ...(company.location && {
          location: { '@type': 'Place', name: company.location },
        }),
      },
    })),
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioListSchema),
        }}
      />
      <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36 text-primary-300" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
            Portfolio
          </h1>
          <p className="mt-6 font-display text-2xl tracking-tight text-primary-900">
            Pre-seed and seed investments in AI, developer tools, and
            infrastructure companies.
          </p>
          <div className="mt-14 sm:mt-24">
            <CompanyCards columns={1} />
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}
