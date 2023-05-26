import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { AUTHOR } from './constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Home | ${AUTHOR.NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fullImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/author/opengraph-image`;

  return (
    <html lang='en'>
      <Script src='/js/colorMode.js' />
      <meta property='og:image' content={fullImageUrl}></meta>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
