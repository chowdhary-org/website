import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

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
        <div className="relative -mx-4 overflow-hidden bg-teal-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-bold tracking-tighter text-teal-900 sm:text-5xl">
                Apply for a grant
              </p>
              <p className="mt-4 text-lg tracking-tight text-teal-900">
                We’re looking for projects that are making a positive impact on
                the world. If that sounds like you, please apply and we’ll be in
                touch if it’s a good fit.
              </p>
            </div>
            <form
              action="https://formspree.io/f/xeqyqypn"
              method="POST"
              className="space-y-5"
            >
              <label className="block space-y-2">
                <div className="font-bold text-teal-700">Name</div>
                <input
                  name="name"
                  autoComplete="name"
                  type="text"
                  className="w-full rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="What's your full name?"
                />
              </label>
              <label className="block space-y-2">
                <div className="font-bold text-teal-700">Email</div>
                <input
                  name="email"
                  autoComplete="email"
                  type="email"
                  className="w-full rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="What's your work or school email?"
                />
              </label>
              <fieldset className="space-y-2">
                <legend className="font-bold text-teal-700">Topic</legend>
                <label className="flex items-center space-x-2">
                  <input
                    name="topic"
                    value="Sponsor my community event"
                    type="radio"
                    defaultChecked
                  />
                  <div>Sponsor my community event</div>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    name="topic"
                    value="Invest in my impact startup"
                    type="radio"
                  />
                  <div>Invest in my impact startup</div>
                </label>
                <label className="flex items-center space-x-2">
                  <input name="topic" value="Something else" type="radio" />
                  <div>Something else</div>
                </label>
              </fieldset>
              <label className="block space-y-2">
                <div className="font-bold text-teal-700">Message</div>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-lg border px-5 py-4 shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="What are you working on?"
                />
              </label>
              <div className="ml-12">
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
