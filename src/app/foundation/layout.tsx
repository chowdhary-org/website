import { Layout } from '@/app/foundation/components/Layout'
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#0ca5e9',
}

export const metadata: Metadata = {
  title: {
    template: '%s - Chowdhary.org',
    default: 'Chowdhary.org',
  },
  description:
    'At Chowdhary.org, we are a nonprofit harnessing the power of technology to open doors to a better future.',
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
    { rel: 'mask-icon', color: '#15b8a6', url: '/safari-pinned-tab.svg' },
  ],
  other: { 'msapplication-TileColor': '#15b8a6' },
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
