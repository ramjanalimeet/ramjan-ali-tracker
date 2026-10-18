import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

export function MobileCta() {
  return (
    <div className="mcta">
      <WhatsAppButton />
      <Link className="btn btn-dark" href="/book-a-call">
        Book a Call <span className="arr">→</span>
      </Link>
    </div>
  );
}
