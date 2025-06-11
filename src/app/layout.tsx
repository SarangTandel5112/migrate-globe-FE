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
                className={`${urbanist.variable} antialiased`}
            >
                <Navbar />

                <div className="relative container-1440 container-padding py-12 bg-gradient-top10">
                    {/* Subtle shadow separator */}
                    {/* <div className="w-full container-1200 h-5 bg-navy-blue-200 blur-2xl z-10" /> */}

                    {/* Main container */}
                    {/* <div className="container-1200 xl:px-8"> */}
                    {/* <div className="container-1200 pb-4 md:pb-8 lg:pb-12 xl:px-8 bg-background-1">
                        {children}
                    </div> */}
                    {children}
                </div>

                <Footer />
            </body>
        </html>
    );
}
