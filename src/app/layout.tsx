import { Inter } from "next/font/google";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { env } from "@/env";
import type { Metadata } from "next";
import { AUTHOR } from "./constants";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ColorModeProvider>{children}</ColorModeProvider>
      </body>
    </html>
  );
}
