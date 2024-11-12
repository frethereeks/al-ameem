import type { Metadata } from "next";
import { Urbanist, Inspiration } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components";

const eugusto = localFont({ src: "../fonts/Eugusto.otf", variable: "--eugusto", weight: "100 900", });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--urbanist", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], fallback: ["cursive"] });
const inspiration = Inspiration({ subsets: ["latin"], variable: "--inspiration", weight: "400", fallback: ["Helvetica", "Arial", "sans-serif"] });

export const metadata: Metadata = {
  title: "Al-Ameem Restaurant",
  description: "Food for the body is not enough. There must be food for the soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eugusto.variable} ${inspiration.variable} ${urbanist.variable} antialiased font-urbanist`}
      >
        <Header />
        <div className="font-urbanist min-h-[80vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
