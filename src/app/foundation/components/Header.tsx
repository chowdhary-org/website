import { Button } from '@/app/foundation/components/Button'
import { Container } from '@/app/foundation/components/Container'
import { Logo } from '@/app/foundation/components/Logo'

export function Header() {
  return (
    <header className="border-primary-500 relative z-50 flex-none border-b bg-white lg:pt-6">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 flex items-center gap-8 lg:mt-0 lg:grow lg:basis-0">
          <div className="border-primary-500 bg-primary-50 -my-px flex items-center gap-4 rounded-t-3xl border border-b-0 px-8 py-4">
            <Logo className="text-primary-500 h-12 w-auto" />
            <div className="text-xl font-bold uppercase">Foundation</div>
          </div>
          <a
            className="focus-visible:outline-primary-500 text-primary-800 rounded text-xl font-bold uppercase focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
            href="https://chowdhary.co"
          >
            Holdings
          </a>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#apply">Apply for a grant</Button>
        </div>
      </Container>
    </header>
  )
}
