import type { Metadata } from "next";
import { Outfit, Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/app/components/ThemeScript";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zikora Chinedu",
  description: "Check out my projects, writing, and more.",
  icons: {
    icon: "/zikora.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
