import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vikram S - Frontend Developer & AI Enthusiast',
    template: '%s | Vikram S',
  },
  description: 'ECE Final-Year Student | Frontend Dev Learner | AI & Cloud Enthusiast. Skilled in Java, Python, React, and exploring AWS and machine learning.',
  keywords: ['Frontend Developer', 'React', 'Python', 'Java', 'AWS', 'Machine Learning', 'Web Development'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vikram-portfolio.vercel.app',
    siteName: 'Vikram S Portfolio',
    title: 'Vikram S - Frontend Developer & AI Enthusiast',
    description: 'ECE Final-Year Student | Frontend Dev Learner | AI & Cloud Enthusiast',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vikram S Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikram S - Frontend Developer & AI Enthusiast',
    description: 'ECE Final-Year Student | Frontend Dev Learner | AI & Cloud Enthusiast',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
