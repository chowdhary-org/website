import { Button } from '@/app/(foundation)/components/Button'
import { Container } from '@/app/(foundation)/components/Container'
import { DiamondIcon } from '@/app/(foundation)/components/DiamondIcon'
import { Logo } from '@/app/(foundation)/components/Logo'
import Link from 'next/link'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="text-primary-500 h-12 w-auto" />
        </div>
        <div className="border-primary-600/10 text-primary-600 order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b py-4 font-mono text-sm sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <Link href="#foundation">Foundation</Link>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <Link href="#ventures">Ventures</Link>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#apply">Apply for a grant</Button>
        </div>
      </Container>
    </header>
  )
}
