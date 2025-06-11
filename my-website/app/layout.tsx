import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/app/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
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

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
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
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${crimsonPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
