import clsx from 'clsx'
import { Epilogue } from 'next/font/google'

import '@/styles/tailwind.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-epilogue',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        epilogue.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
