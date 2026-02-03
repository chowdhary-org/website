import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/foundation/components/BackgroundImage'
import { Button } from '@/app/foundation/components/Button'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36 text-primary-300" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
            Technology for good.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-primary-900">
            <p className="text-3xl font-bold text-primary-700">
              We fund community projects and open-source initiatives that expand
              access to opportunity.
            </p>
            <p>
              Chowdhary.org provides grants to hackathons, developer events, and
              impact-focused projects—especially those serving underrepresented
              communities. We've helped distribute emergency relief during
              COVID-19, organized India's first civic hackathon, and continue to
              support builders who are solving real problems for real people.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center sm:hidden">
            <Button href="/#apply">Apply for a grant</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
