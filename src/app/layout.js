import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rana Zaeem — Full-Stack Developer",
  description:
    "Full-stack developer building scalable, secure, and user-friendly web apps with React, Next.js, Node, and AI integrations.",
  metadataBase: new URL("https://ranazaeem.me"), // change to your real domain
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rana Zaeem — Full-Stack Developer",
    description:
      "Full-stack developer building scalable, secure, and user-friendly web apps.",
    url: "https://ranazaeem.me",
    siteName: "Rana Zaeem Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rana Zaeem Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rana Zaeem — Full-Stack Developer",
    description:
      "Full-stack developer building scalable, secure, and user-friendly web apps.",
    images: ["/og-image.jpg"],
    creator: "@RanaZaeem0",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
