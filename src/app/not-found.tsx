import { BackgroundImage } from '@/app/foundation/components/BackgroundImage'
import { Button } from '@/app/foundation/components/Button'
import { Container } from '@/app/foundation/components/Container'
import { Layout } from '@/app/foundation/components/Layout'

export default function NotFound() {
  return (
    <Layout showFooter={false}>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <BackgroundImage className="text-primary-300 -top-36 bottom-0" />
        <Container className="relative flex w-full flex-col items-center">
          <p className="text-primary-900 font-display text-2xl tracking-tight">
            404
          </p>
          <h1 className="text-primary-600 mt-4 font-display text-4xl font-bold tracking-tighter sm:text-5xl">
            Page not found
          </h1>
          <p className="text-primary-900 mt-4 text-lg tracking-tight">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Button href="/" className="mt-8">
            Go back home
          </Button>
        </Container>
      </div>
    </Layout>
  )
}
