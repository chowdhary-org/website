import { Container } from '@/app/common/Container'
import { Logo } from '@/app/common/Logo'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

export function Footer() {
  return (
    <footer
      className="flex-none py-16"
      itemScope
      itemType="https://schema.org/InvestmentFund"
    >
      <meta itemProp="name" content="Chowdhary.co" />
      <meta itemProp="url" content="https://chowdhary.co" />
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-6 md:items-start">
          <Logo className="h-12 w-auto text-primary-500" />
          <p className="max-w-xl text-center text-xs text-gray-500 md:text-left">
            Chowdhary Holdings B.V. is{' '}
            <span
              itemProp="founder"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">Anand Chowdhary</span>
              <link
                itemProp="sameAs"
                href="https://www.linkedin.com/in/anandchowdhary/"
              />
              <link itemProp="sameAs" href="https://anandchowdhary.com" />
            </span>{' '}
            and{' '}
            <span
              itemProp="founder"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">Sukriti Kapoor</span>
              <link
                itemProp="sameAs"
                href="https://www.linkedin.com/in/sukritikapoor/"
              />
              <link itemProp="sameAs" href="https://sukritikapoor.com" />
            </span>
            &rsquo;s holding company and early-stage fund, registered in the
            Netherlands with Chamber of Commerce number 82850526. Content is for
            informational purposes only and does not constitute investment
            advice. Investing in early-stage companies involves significant
            risk, including the potential loss of capital. Past performance is
            not indicative of future results. Please consult a qualified
            financial advisor before making any investment decisions.
          </p>
        </div>
        <nav className="flex items-center space-x-4">
          <a
            href="https://linkedin.com/company/chowdhary"
            aria-label="LinkedIn"
            className="text-primary-600"
          >
            <IconBrandLinkedin strokeWidth={1.5} className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/chowdhary-org"
            aria-label="GitHub"
            className="text-primary-600"
          >
            <IconBrandGithub strokeWidth={1.5} className="h-8 w-8" />
          </a>
        </nav>
      </Container>
    </footer>
  )
}
