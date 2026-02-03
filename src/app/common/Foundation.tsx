import { Container } from '@/app/common/Container'
import { Button } from '@/app/holdings/components/Button'

export function Foundation({ externalLink }: { externalLink?: boolean }) {
  return (
    <section id="foundation" className="py-20 sm:py-32">
      <Container className="relative z-10 flex justify-end">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-bold tracking-tighter text-primary-600 sm:text-5xl">
            Chowdhary.org
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
            At the heart of Chowdhary.org&rsquo;s Foundation lies a resolute
            commitment to leveraging technology for the greater good. Our
            Foundation is the cornerstone of our mission, where we focus on
            nurturing and supporting a wide array of initiatives that make a
            tangible difference.
          </p>
          <p className="mt-4 font-display text-lg tracking-tight text-primary-900">
            From empowering communities with digital education to funding
            research for sustainable tech solutions, our Foundation operates at
            the intersection of innovation and social responsibility. Here,
            every project we undertake is more than just an investment in
            technology; it&rsquo;s an investment in hope, progress, and a better
            future for all.
          </p>
          <div className="ml-12 mt-8">
            {externalLink ? (
              <Button href="https://chowdhary.org">Visit Chowdhary.org</Button>
            ) : (
              <Button href="/#apply">Apply for a grant</Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
