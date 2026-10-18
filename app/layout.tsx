import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import { preconnect } from "react-dom";
import { BookingPopup } from "@/components/BookingPopup";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCta } from "@/components/MobileCta";
import { SiteEffects } from "@/components/SiteEffects";
import { SITE_SCHEMA } from "@/lib/schema";
import { BOOKING_ORIGIN, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F2F3F0",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Open the connection to the booking calendar early, so it starts faster when opened.
  preconnect(BOOKING_ORIGIN);
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={SITE_SCHEMA} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="progress" aria-hidden="true"></div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <SiteEffects />
        <BookingPopup />
      </body>
    </html>
  );
}
