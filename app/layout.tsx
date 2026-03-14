import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Luxury NAR - Your Trusted Real Estate Partner in the UAE',
  description: 'Helping you buy, rent, and invest in properties with confidence. Expert real estate solutions in the UAE.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/developers/light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/developers/dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/developers/light.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  )
}
