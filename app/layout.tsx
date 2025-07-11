import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'EcoGreen Packaging - Sustainable Packaging Solutions',
  description: 'Leading manufacturer of eco-friendly packaging solutions including non-woven bags, woven bags, paper bags, and custom pouches. Get your sustainable packaging today!',
  keywords: 'packaging, eco-friendly, sustainable, bags, pouches, Pakistan, custom packaging',
  authors: [{ name: 'EcoGreen Packaging' }],
  creator: 'EcoGreen Packaging',
  publisher: 'EcoGreen Packaging',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ecogreen-packaging.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EcoGreen Packaging - Sustainable Packaging Solutions',
    description: 'Leading manufacturer of eco-friendly packaging solutions including non-woven bags, woven bags, paper bags, and custom pouches.',
    url: 'https://ecogreen-packaging.com',
    siteName: 'EcoGreen Packaging',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EcoGreen Packaging - Sustainable Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoGreen Packaging - Sustainable Packaging Solutions',
    description: 'Leading manufacturer of eco-friendly packaging solutions including non-woven bags, woven bags, paper bags, and custom pouches.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
} 