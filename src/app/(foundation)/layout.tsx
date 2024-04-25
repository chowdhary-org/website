import { Layout } from '@/app/(foundation)/components/Layout'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}