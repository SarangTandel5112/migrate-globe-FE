import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@assets/css/globals.css";
import Navbar from "@/components/layout/Navbar";

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
            <body className={`${urbanist.variable} antialiased`}>
                <Navbar />
                  <div className="container-1200 py-8 md:py-12 lg:py-16">
                    {children}
                  </div>
            </body>
        </html>
    );
}
