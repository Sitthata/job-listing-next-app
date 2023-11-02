import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import "./styles/globals.css"

const leaugeSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={leaugeSpartan.className}>{children}</body>
    </html>
  )
}
