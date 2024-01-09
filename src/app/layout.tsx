import clsx from 'clsx'
import { type Metadata } from 'next'
import { Epilogue } from 'next/font/google'

import '@/styles/tailwind.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-epilogue',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Chowdhary.org',
    default: 'Chowdhary.org',
  },
  description:
    'At Chowdhary.org, we are a nonprofit harnessing the power of technology to open doors to a better future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-white antialiased', epilogue.variable)}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
