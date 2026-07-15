import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Editor",
  description: "Create Square Kufic calligraphy in the Khattat web editor.",
  alternates: { canonical: "/editor" },
  robots: { index: false, follow: false },
};

export default function EditorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
