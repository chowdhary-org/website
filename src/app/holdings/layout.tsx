import { Layout } from '@/app/holdings/components/Layout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Chowdhary.co',
    default: 'Chowdhary.co',
  },
  description:
    'At Chowdhary.co, we make early-stage investments to accelerate technological progress and drive social impact.',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
