import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Singh Engineering Works - Innovating Furnaces Since 2001",
  description: "Leading manufacturer of industrial furnaces and engineering solutions in Noida. Specializing in furnace design, manufacturing, and metal tool room services.",
  keywords: "furnaces, industrial engineering, manufacturing, metal tool room, Noida",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Singh Engineering Works",
    description: "Innovating Furnaces Since 2001",
    url: "https://singhengineeringworks.com",
    siteName: "Singh Engineering Works",
    images: [
      {
        url: "/bg.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" />
        <Navbar />
        <div className="App">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
