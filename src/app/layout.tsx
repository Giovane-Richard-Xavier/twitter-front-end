import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twitter",
};

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
