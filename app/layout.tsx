import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: "Lambodar Creation | Premium Men's Fashion",
    template: "%s | Lambodar Creation"
  },
  description: "Discover premium ethnic and contemporary men's wear at Lambodar Creation. Shop stylish printed shirts, luxury satin shirts, and elegant trousers. Quality fabrics, modern designs.",
  keywords: ["mens fashion", "ethnic wear", "satin shirts", "printed shirts", "trousers", "premium clothing", "Lambodar Creation"],
  authors: [{ name: "Lambodar Creation" }],
  creator: "Lambodar Creation",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lambodarcreation.com',
    siteName: 'Lambodar Creation',
    title: "Lambodar Creation | Premium Men's Fashion",
    description: "Discover premium ethnic and contemporary men's wear. Shop stylish printed shirts, luxury satin shirts, and elegant trousers.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lambodar Creation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lambodar Creation | Premium Men's Fashion",
    description: "Discover premium ethnic and contemporary men's wear. Shop stylish printed shirts, luxury satin shirts, and elegant trousers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}