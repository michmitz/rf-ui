import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ variable: '--font-inter',
  subsets: ['latin'] });

export const metadata: Metadata = {
  title: "RainFocus Summit Registration - Claude",
  description: "RainFocus UI Developer assessment - event registration setup page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
