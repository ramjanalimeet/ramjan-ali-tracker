/** External link that opens in a new tab. */
export function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
      <span className="ext" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
