import "~/styles/globals.css";
import { inter } from "~/assets/fonts/fonts";

export const metadata = {
  title: "Kasbino",
  description: "Buy and Sell Your Products",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
