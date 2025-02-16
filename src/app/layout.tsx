import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'musico',
  description: 'A music player which gives a soothing experience(as a wonderland)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
