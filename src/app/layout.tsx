import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'musico',
  description: 'A music player which gives a soothing experience(as a wonderland)',
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/images/icon.svg",
        href:"/images/icon.svg",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url:"/images/icon.svg",
        href:"/images/icon.svg",
      },
    ]
  }
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
