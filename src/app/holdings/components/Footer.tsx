import { Logo } from '@/app/common/Logo'
import { Container } from '@/app/holdings/components/Container'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-primary-500" />
        <nav className="mt-4 flex items-center space-x-4 sm:mt-0">
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
