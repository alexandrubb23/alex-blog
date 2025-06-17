import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { AUTHOR } from './constants';

const inter = Inter({ subsets: ['latin'] });

const title = `Home | ${AUTHOR.NAME}`

export function generateMetadata() {
  return {
    title,
    openGraph: {
      title,
      images: [AUTHOR.PICTURE],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Script src='/js/colorMode.js' />
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
