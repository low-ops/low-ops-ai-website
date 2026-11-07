import { nextMetadata, structuredData } from '@/data/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

/** One straight, professional typeface for everything — display, body and labels. */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = nextMetadata;

type TProps = Readonly<{ children: ReactNode }>;

const RootLayout = (props: TProps) => {
  const { children } = props;

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[var(--lo-ink)] text-[var(--lo-fg)] antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleAnalytics gaId="G-8HTDC4DGP8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "7447786";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              
              (function(l) {
                if (!l){
                  window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[];
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- tracking pixel, no next/image */}
          <img
            height="1"
            width="1"
            className="hidden"
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7447786&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
};

export default RootLayout;
