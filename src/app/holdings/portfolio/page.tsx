import { CompanyCards } from '@/app/common/CompanyCards'
import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio – Chowdhary.co',
  description:
    'Pre-seed and seed investments in AI, developer tools, and infrastructure companies.',
}

export default function PortfolioPage() {
  return (
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
  )
}
