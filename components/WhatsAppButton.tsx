import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`btn btn-wa${className ? ` ${className}` : ""}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
    >
      <svg className="wa" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.1 4.9A10 10 0 0 0 3.3 17l-1.4 5.1 5.3-1.4a10 10 0 0 0 4.8 1.2h0a10 10 0 0 0 7.1-17zM12 20.2a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.3 8.3 0 1 1 7.2 4.1zm4.6-6.2c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.6.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.5 3.5 0 0 0 1.6.1c.5-.1 1.5-.6 1.7-1.2s.2-1.1.1-1.2-.2-.2-.5-.3z" />
      </svg>
      WhatsApp
    </a>
  );
}
