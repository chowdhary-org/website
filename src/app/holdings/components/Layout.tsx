import { Footer } from '@/app/holdings/components/Footer'
import { Header } from '@/app/holdings/components/Header'

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode
  showFooter?: boolean
}) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
