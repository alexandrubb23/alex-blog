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
  return (
    <html lang='en'>
      <Script src='/js/colorMode.js' />
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
