import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../styles.css'

export const metadata: Metadata = {
  title: 'PxServ Docs',
  description: 'PxServ documentation in English and Turkish.',
  icons: {
    icon: [{ url: '/images/shared/logo.webp', type: 'image/webp' }],
    shortcut: '/images/shared/logo.webp'
  }
}

export default function LandingLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
