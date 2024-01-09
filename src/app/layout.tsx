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
    template: '%s - DeceptiConf',
    default: 'DeceptiConf - A community-driven design conference',
  },
  description:
    'At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.',
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
