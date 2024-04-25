import { Layout } from '@/app/holdings/components/Layout'
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#0ca5e9',
}

export const metadata: Metadata = {
  title: {
    template: '%s - Chowdhary.co',
    default: 'Chowdhary.co',
  },
  description:
    'At Chowdhary.co, we make early-stage investments to accelerate technological progress and drive social impact.',
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    { rel: 'manifest', url: '/site.webmanifest' },
    { rel: 'mask-icon', color: '#0ca5e9', url: '/safari-pinned-tab.svg' },
  ],
  other: { 'msapplication-TileColor': '#0ca5e9' },
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
