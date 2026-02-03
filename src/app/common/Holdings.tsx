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
            At Chowdhary.co, we bring bold ideas to life. This dynamic platform
            is dedicated to identifying, investing in, and nurturing early-stage
            startups that are poised to revolutionize the way we address global
            challenges. We believe in the power of entrepreneurial spirit
            combined with technological innovation to create impactful
            solutions.
          </p>
          <p className="mt-4 font-display text-lg tracking-tight text-primary-900">
            <strong>Chowdhary Holdings B.V.</strong> isn&rsquo;t just about
            funding; it&rsquo;s about building partnerships that foster growth,
            drive change, and set new benchmarks in the tech world. Join us as
            we embark on this journey to transform visionary ideas into
            realities that can reshape our world.
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
