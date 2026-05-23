import type { Metadata, Viewport } from 'next';
import { siteMetadata, siteViewport } from './metadata';
import './globals.css';

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
