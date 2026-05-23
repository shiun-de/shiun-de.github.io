import type { Metadata, Viewport } from 'next';
import { siteMetadata, siteViewport } from './metadata';
import './globals.css';

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

// Inline before any styles paint so the user's saved theme applies on the
// first frame. Avoids a flash of the wrong theme on reload.
const NO_FLASH = `(function(){try{var t=localStorage.getItem('shiun-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Tell Dark Reader the site already handles dark mode — it will skip
            its own filter and use ours. Without this, Dark Reader sometimes
            inverts our hand-tuned dark scheme into low-contrast mud. */}
        <meta name="darkreader-lock" />
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
