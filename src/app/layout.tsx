import { Inter } from 'next/font/google';
import Script from 'next/script';

import { AUTHOR } from './constants';

const inter = Inter({ subsets: ['latin'] });

const title = `Home | ${AUTHOR.NAME}`;

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
      <meta
        name='google-site-verification'
        content='Za2lcQmbSqNcRvTWGWgwuI40EhMTDycc60wkj3rfp_c'
      />
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
