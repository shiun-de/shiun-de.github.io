import type { Metadata, Viewport } from 'next';

const title = 'Shiun — the bedside air monitor';
const description =
  'A bedside CO₂, temperature, and humidity monitor. Dark by default. Calibrates itself for rooms it never leaves. Battery-powered, instrument-grade.';
const url = 'https://shiun.de';
const ogImage = '/og.png';

export const siteViewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: '%s | Shiun',
  },
  description,
  applicationName: 'Shiun',
  authors: [{ name: 'Shiun' }],
  generator: 'Next.js',
  keywords: [
    'CO2 monitor',
    'bedroom air quality',
    'bedside air monitor',
    'carbon dioxide',
    'sleep quality',
    'indoor air',
    'SCD41',
    'temperature humidity',
  ],
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: 'Shiun',
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Shiun — the bedside air monitor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
