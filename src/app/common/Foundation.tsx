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
            The Chowdhary.org Foundation provides grants to community-driven
            projects that use technology to expand access and opportunity. We
            focus on initiatives that might not attract traditional funding but
            can create outsized impact.
          </p>
          <p className="mt-4 font-display text-lg tracking-tight text-primary-900">
            We sponsor developer events, hackathons, and open-source projects.
            We've supported emergency relief efforts, civic technology
            initiatives, and platforms that celebrate local entrepreneurship.
            If you're building something that helps people—and need support to
            make it happen—we want to hear from you.
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
