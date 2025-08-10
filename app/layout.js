import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter, poppins, montserrat } from "@/lib/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumit Bhosle",
  description: "Portfolio of Sumit Bhosle",
  openGraph: {
    title: "Sumit Bhosle",
    description: "Portfolio of Sumit Bhosle",
    url: "#", // Replace with your real site URL later
    siteName: "Sumit Bhosle",
    images: [
      {
        url: "/images/og-preview.jpg", // Replace this when you have your own image
        width: 1200,
        height: 630,
        alt: "Sumit Bhosle Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}
