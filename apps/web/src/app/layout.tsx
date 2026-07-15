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
  metadataBase: new URL("https://khattat.krzgn.xyz"),
  applicationName: "Khattat",
  category: "design",
  title: {
    default: "Khattat | Professional Square Kufic Calligraphy Editor",
    template: "%s | Khattat",
  },
  description:
    "Khattat is a professional geometric drafting tool for creating Square Kufic calligraphy with an infinite grid and precise editing tools.",
  keywords: [
    "kufic",
    "square kufic",
    "calligraphy",
    "typography",
    "arabic design",
    "khattat",
    "خطاط",
    "الخط الكوفي",
    "الخط الكوفي المربع",
  ],
  authors: [{ name: "Kur Zagin", url: "https://krzgn.xyz" }],
  creator: "Kur Zagin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Khattat | Professional Square Kufic Calligraphy Editor",
    description:
      "An infinite, pixel-perfect digital canvas built specifically for professional Kufic calligraphy designers.",
    siteName: "Khattat",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Khattat — Precision tools for Square Kufic calligraphy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khattat | Professional Square Kufic Calligraphy Editor",
    description:
      "An infinite, pixel-perfect digital canvas built specifically for professional Kufic calligraphy designers.",
    images: ["/og.png"],
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
