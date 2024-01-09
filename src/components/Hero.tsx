import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-teal-600 sm:text-7xl">
            Technology for good.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-teal-900">
            <p className="text-3xl font-bold text-teal-700">
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
