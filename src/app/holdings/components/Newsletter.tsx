import { Button } from '@/app/holdings/components/Button'
import { Container } from '@/app/holdings/components/Container'

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-primary-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-bold tracking-tighter text-primary-900 sm:text-5xl">
                Apply for an investment
              </p>
              <p className="mt-4 text-lg tracking-tight text-primary-900">
                We’re looking for projects that are accelerating the progress of
                humanity through technological change. If that sounds like you,
                please apply and we’ll be in touch if it’s a good fit.
              </p>
            </div>
            <form
              action="https://formspree.io/f/xeqyqypn"
              method="POST"
              className="space-y-5"
            >
              <label className="block space-y-2">
                <div className="font-bold text-primary-700">Name</div>
                <input
                  name="name"
                  autoComplete="name"
                  type="text"
                  className="w-full rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="What's your full name?"
                />
              </label>
              <label className="block space-y-2">
                <div className="font-bold text-primary-700">Startup name</div>
                <input
                  name="organization"
                  autoComplete="organization"
                  type="text"
                  className="w-full rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="What's your company's name?"
                />
              </label>
              <label className="block space-y-2">
                <div className="font-bold text-primary-700">Email</div>
                <input
                  name="email"
                  autoComplete="email"
                  type="email"
                  className="w-full rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="What's your work email?"
                />
              </label>
              <label className="block space-y-2">
                <div className="font-bold text-primary-700">Memo</div>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="What are you working on?"
                />
              </label>
              <div className="ml-12">
                <Button type="submit">Send application</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
