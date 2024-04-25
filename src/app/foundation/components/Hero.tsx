import { BackgroundImage } from '@/app/foundation/components/BackgroundImage'
import { Button } from '@/app/foundation/components/Button'
import { Container } from '@/app/foundation/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="text-primary-300 -bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-primary-600 font-display text-5xl font-bold tracking-tighter sm:text-7xl">
            Technology for good.
          </h1>
          <div className="text-primary-900 mt-6 space-y-6 font-display text-2xl tracking-tight">
            <p className="text-primary-700 text-3xl font-bold">
              We are a nonprofit harnessing the power of technology to open
              doors to a better future.
            </p>
            <p>
              At Chowdhary.org, we invest in groundbreaking solutions and foster
              a vibrant community of innovators committed to making a tangible
              difference. By supporting early-stage startups with bold visions
              for change, organizing community-centric events, and fostering
              open-source collaborations, we are building a global movement that
              champions technological advancement with a heart.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center sm:hidden">
            <Button href="#apply">Apply for a grant</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
