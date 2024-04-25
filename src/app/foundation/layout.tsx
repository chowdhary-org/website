import { Layout } from '@/app/holdings/components/Layout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Chowdhary.org',
    default: 'Chowdhary.org',
  },
  description:
    'At Chowdhary.org, we are a nonprofit harnessing the power of technology to open doors to a better future.',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
