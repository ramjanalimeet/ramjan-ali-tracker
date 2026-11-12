import { preconnect } from "react-dom";
import { BookingPopup } from "@/components/BookingPopup";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCta } from "@/components/MobileCta";
import { SiteEffects } from "@/components/SiteEffects";
import { SITE_SCHEMA } from "@/lib/schema";
import { BOOKING_ORIGIN } from "@/lib/site";

/** Header, footer and popups of the public site (used by app/(site) and the 404 page). */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  // Open the connection to the booking calendar early, so it starts faster when opened.
  preconnect(BOOKING_ORIGIN);
  return (
    <>
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
    </>
  );
}
