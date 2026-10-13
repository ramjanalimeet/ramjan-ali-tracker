import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

export function MobileCta() {
  return (
    <div className="mcta">
      <WhatsAppButton />
      <Link className="btn btn-dark" href="/book-a-call">
        Book Now <span className="arr">→</span>
      </Link>
    </div>
  );
}
