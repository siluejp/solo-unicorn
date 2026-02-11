import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Solo Unicorn",
  description: "Monorepo bootstrap with Django + Next.js"
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
