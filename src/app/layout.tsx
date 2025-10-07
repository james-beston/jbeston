import type { Metadata } from "next";
import { Hubot_Sans, Domine } from "next/font/google";
import "@/styles/base.css";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const domineSerif = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Beston",
  description: "The personal website of James Beston, a Full-Stack Developer and Procrastinator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hubotSans.variable} ${domineSerif.variable} antialiased`}
      >
        <div className="min-h-screen w-screen bg-graphpaper">
          {children}
        </div>
      </body>
    </html>
  );
}
