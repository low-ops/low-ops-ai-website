import type { Metadata } from 'next';
import { IBM_Plex_Mono, Manrope, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-lo-sora',
  weight: ['400', '600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-lo-manrope',
  weight: ['300', '400', '500', '600'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-lo-ibm-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Low-Ops | AI-Powered Operations Platform',
  description:
    'Low-Ops | AI-powered operations platform with MCP & Claude Plugin support. Deploy, manage, and scale with natural language.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
