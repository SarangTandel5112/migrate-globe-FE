import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@assets/css/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Migrate Globe",
  description:
    "From visas to universities, job options to eligibility get instant, expert answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${urbanist.variable} antialiased px-5 md:px-6 lg:px-8`}
        className={`${urbanist.variable} antialiased bg-gradient-top10`}
      >
        <Navbar />
        <div className="relative container-1440 container-padding py-12">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
