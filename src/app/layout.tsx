import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from "next/font/google";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { env } from "@/env";
import type { Metadata } from "next";
import { AUTHOR } from "./constants";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plex-mono",
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-plex-condensed",
});

const title = `Home | ${AUTHOR.NAME}`;

export function generateMetadata(): Metadata {
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable} ${plexCondensed.variable}`}
    >
      <body suppressHydrationWarning>
        <ColorModeProvider defaultTheme="dark">{children}</ColorModeProvider>
      </body>
    </html>
  );
}
