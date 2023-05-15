import './globals.css'
import { Open_Sans } from 'next/font/google'

const OpenSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog AI App',
  description: 'Blog built in Next JS that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  )
}
