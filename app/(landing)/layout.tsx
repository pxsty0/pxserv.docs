import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles.css";

export const metadata: Metadata = {
  title: "PxServ Docs",
  description: "PxServ documentation",
  openGraph: {
    images: ["https://i.imgur.com/hDteELW.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://i.imgur.com/hDteELW.png"],
  },
  icons: {
    icon: [{ url: "/images/shared/logo.webp", type: "image/webp" }],
    shortcut: "/images/shared/logo.webp",
  },
};

export default function LandingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
