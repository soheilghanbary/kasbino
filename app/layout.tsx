import "~/styles/globals.css";
import { inter } from "~/assets/fonts/fonts";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasbino",
  description: "Buy and Sell Your Products",
  keywords: ["buy", "sell", "products"],
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}