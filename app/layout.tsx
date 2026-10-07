import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "N&M Jamaican Delight II — Big Island Flavor",
  description:
    "Bold Jamaican flavor in Oak Grove. Oxtail, jerk chicken, golden patties and island comfort near Fort Campbell Gate 4.",
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
