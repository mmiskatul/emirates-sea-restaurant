import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { RevealScript } from "@/components/ui/RevealScript";
import { restaurantSchema } from "@/lib/seo";
import { site } from "@/lib/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-naskh",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Emirates Sea Restaurant Dubai | Fresh Seafood & Family Dining",
    template: "%s | Emirates Sea Restaurant Dubai",
  },
  description:
    "Discover fresh seafood, Arabian-inspired flavors and family dining at Emirates Sea Restaurant in Al Rashidiya, Dubai.",
  applicationName: site.name,
  keywords: [
    "seafood restaurant Dubai",
    "seafood restaurant Al Rashidiya",
    "Emirates Sea Restaurant Dubai",
    "family restaurant Al Rashidiya",
    "Arabic seafood restaurant Dubai",
    "family dining Dubai",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  formatDetection: { telephone: true, address: true },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${naskh.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-paper">
        <a
          href="#main"
          className="sr-only rounded-[3px] focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2.5 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />

        <JsonLd data={restaurantSchema} />
        <RevealScript />
      </body>
    </html>
  );
}
