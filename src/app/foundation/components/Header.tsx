import { Logo } from '@/app/common/Logo'
import { Button } from '@/app/holdings/components/Button'
import { Container } from '@/app/holdings/components/Container'

export function Header() {
  return (
    <header className="relative z-50 flex-none border-b border-primary-500 bg-white lg:pt-6">
      <Container className="flex flex-wrap items-center justify-center text-center sm:justify-between lg:flex-nowrap">
        <div className="pt-8 lg:hidden">
          <div className="flex justify-center">
            <Logo className="mb-8 h-12 w-auto text-primary-500" />
          </div>
          <div className="grid grid-cols-2 items-center">
            <a
              className="rounded text-xl font-bold uppercase text-primary-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              href="https://chowdhary.co"
            >
              Holdings
            </a>
            <div className="-my-px rounded-t-3xl border border-b-0 border-primary-500 bg-primary-50 px-8 py-4 text-xl font-bold uppercase">
              Foundation
            </div>
          </div>
        </div>
        <div className="mt-10 hidden items-center gap-8 lg:mt-0 lg:flex lg:grow lg:basis-0">
          <a
            className="rounded text-xl font-bold uppercase text-primary-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            href="https://chowdhary.co"
          >
            Holdings
          </a>
          <div className="-my-px flex items-center gap-4 rounded-t-3xl border border-b-0 border-primary-500 bg-primary-50 px-8 py-4">
            <Logo className="h-12 w-auto text-primary-500" />
            <div className="text-xl font-bold uppercase">Foundation</div>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#apply">Apply for a grant</Button>
        </div>
      </Container>
    </header>
  )
}
