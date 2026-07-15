import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Khattat | Professional Square Kufic Calligraphy Editor",
    template: "%s | Khattat"
  },
  description: "Khattat is a professional, web-based geometric drafting tool specifically designed for creating Square Kufic (الخط الكوفي المربع) calligraphy. Infinite grid, precise tools, and more.",
  keywords: ["kufic", "square kufic", "calligraphy", "typography", "arabic design", "khattat", "خطاط", "الخط الكوفي", "الخط الكوفي المربع"],
  authors: [{ name: "Khattat", url: "https://krzgn.xyz" }],
  creator: "Khattat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krzgn.xyz",
    title: "Khattat | Professional Square Kufic Calligraphy Editor",
    description: "An infinite, pixel-perfect digital canvas built specifically for professional Kufic calligraphy designers.",
    siteName: "Khattat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khattat | Professional Square Kufic Calligraphy Editor",
    description: "An infinite, pixel-perfect digital canvas built specifically for professional Kufic calligraphy designers.",
    creator: "@khattat",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
