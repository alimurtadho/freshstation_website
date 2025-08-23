import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Fresh Station - Premium Avocado Hass Indonesia',
  description: 'Premium Avocado Hass supplier from Indonesia. Fresh, quality guaranteed avocados direct from our farm to your table. B2B wholesale and B2C delivery available.',
  keywords: 'avocado, avocado hass, premium avocado, Indonesian avocado, fresh avocado, wholesale avocado, organic avocado',
  authors: [{ name: 'Fresh Station Indonesia' }],
  openGraph: {
    title: 'Fresh Station - Premium Avocado Hass Indonesia',
    description: 'Premium quality Indonesian avocados direct from farm to your table',
    images: ['/img/hero-avocado.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Station - Premium Avocado Hass Indonesia',
    description: 'Premium quality Indonesian avocados direct from farm to your table',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
