import { Layout } from '@/app/holdings/components/Layout'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
