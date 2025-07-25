import { Inter } from "next/font/google";
import Script from "next/script";

import { env } from "@/env";
import { AUTHOR } from "./constants";

const inter = Inter({ subsets: ["latin"] });

const title = `Home | ${AUTHOR.NAME}`;

export function generateMetadata() {
  return {
    title,
    openGraph: {
      title,
      images: [AUTHOR.PICTURE],
    },
    verification: {
      google: env.GOOGLE_VERIFICATION,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Script src="/js/colorMode.js" />
        {children}
      </body>
    </html>
  );
}
