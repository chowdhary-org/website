import { CompanyCards } from '@/app/common/CompanyCards'
import { Container } from '@/app/common/Container'
import { BackgroundImage } from '@/app/holdings/components/BackgroundImage'

export function Projects() {
  return (
    <section id="projects" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <blockquote className="font-display text-4xl font-bold tracking-tighter text-primary-600 sm:text-5xl">
            &ldquo;Through technological progress and acceleration, we invest in
            more than advancements; we invest in the future prosperity of
            humanity itself.&rdquo;
          </blockquote>
          <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
            At Chowdhary.co, our compact investment fund is a catalyst,
            accelerating technology to unlock extraordinary possibilities.
          </p>
          <div className="mt-2 font-display text-lg not-italic text-primary-900">
            &ndash;{' '}
            <a
              href="https://anandchowdhary.com"
              target="_blank"
              rel="noopener"
              className="rounded font-bold text-primary-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Anand Chowdhary
            </a>
            , founder
          </div>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage
          position="right"
          className="-bottom-32 -top-40 text-primary-300"
        />
        <Container className="relative">
          <CompanyCards />
        </Container>
      </div>
    </section>
  )
}
