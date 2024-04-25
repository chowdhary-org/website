import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'
import { Button } from '@/app/holdings/components/Button'
import { Container } from '@/app/holdings/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36 text-primary-300" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
            Accelerate progress.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-primary-900">
            <p className="text-3xl font-bold text-primary-700">
              We make early-stage investments to accelerate technological
              progress and drive social impact.
            </p>
            <p>
              At Chowdhary.co, we believe that technology will solve all
              problems. We are dedicated to investing in pioneering solutions
              and nurturing a dynamic community of innovators dedicated to
              creating meaningful change. We support early-stage startups with
              audacious visions for transformation, host events centered around
              community engagement, and encourage open-source partnerships.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center sm:hidden">
            <Button href="#apply">Apply for investment</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
