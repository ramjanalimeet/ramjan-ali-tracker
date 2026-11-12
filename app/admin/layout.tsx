import type { Metadata, Viewport } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: { absolute: "Dashboard · Ramjan Ali" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
