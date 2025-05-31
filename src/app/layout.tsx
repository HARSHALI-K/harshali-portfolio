import { Inter } from "next/font/google";
import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import FloatingIcons from '@/components/animated/FloatingIcons';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Harshali Sonawane 👨‍💻 - Front End Devloper',
  description: 'Front End Devloper specializing in React, Next.js, and modern web technologies ⚡',
  keywords: ['Front End Devloper', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development'],
  authors: [{ name: 'Harshali Sonawane' }],
  creator: 'Harshali Sonawane',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Harshali Sonawane 👨‍💻 - Front End Devloper',
    description: 'Front End Devloper specializing in React, Next.js, and modern web technologies ⚡',
    siteName: 'Harshali Sonawane Portfolio 🚀',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Harshali Sonawane - Front End Devloper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshali Sonawane 👨‍💻 - Front End Devloper',
    description: 'Front End Devloper specializing in React, Next.js, and modern web technologies ⚡',
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
    google: 'your-google-verification-code', // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
