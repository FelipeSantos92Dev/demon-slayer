import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demon Slayer',
  description: 'O lar dos caçadores de demônios'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang={'pt-BR'} className={`h-full`} style={{ scrollBehavior: 'smooth' }}>
      <body className={cn('relative h-full font-sans antialiased', inter.className)}>
        <main className={`relative flex flex-col min-h-screen`}>
          <div className={`flex-grow flex-1`}>{children}</div>
        </main>
      </body>
    </html>
  )
}
