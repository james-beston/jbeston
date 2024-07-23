import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const geist = localFont({
  src: './fonts/GeistVF.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "James Beston",
  description: "Design and development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
