import { Container } from '@/app/common/Container'
import { Button } from '@/app/holdings/components/Button'

export function Holdings({ externalLink }: { externalLink?: boolean }) {
  return (
    <section id="holdings" className="py-20 sm:py-32">
      <Container className="relative z-10 flex justify-end">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-bold tracking-tighter text-primary-600 sm:text-5xl">
            Chowdhary.co
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
            Chowdhary.co invests in technical founders at the pre-seed and seed
            stage. We focus on AI, developer tools, and infrastructure—companies
            where deep technical execution is the competitive advantage.
          </p>
          <p className="mt-4 font-display text-lg tracking-tight text-primary-900">
            <strong>Chowdhary Holdings B.V.</strong> is Anand Chowdhary and
            Sukriti Kapoor&rsquo;s holding company and early-stage fund. We write first checks into
            companies before product-market fit and work closely with founders
            on product, hiring, and go-to-market. Our portfolio includes Y
            Combinator companies and founders who've gone on to raise from top
            funds.
          </p>
          <div className="ml-12 mt-8">
            {externalLink ? (
              <Button href="https://chowdhary.co">Visit Chowdhary.co</Button>
            ) : (
              <Button href="/#apply">Apply for an investment</Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
