"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navigationItems } from "@/constants/navigation";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="flex gap-10 justify-between items-center px-32 py-8 bg-white shadow-xl md:px-5 md:gap-0">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex gap-2 items-center self-stretch my-auto w-36 text-xl leading-5 text-green-300"
                >
                    <img
                        src="/logo.svg"
                        className="object-contain shrink-0 self-stretch my-auto rounded-none"
                        alt="Migrate Globe Logo"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-9 items-center self-stretch my-auto text-base font-medium whitespace-nowrap min-w-60 text-stone-500">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`gap-2.5 self-stretch pb-1 my-auto ${
                                item.isActive
                                    ? "border-b-2 border-solid border-b-[color:var(--Mint-Green-500,#8BD7BC)] text-zinc-800"
                                    : "text-stone-500 hover:text-zinc-800 transition-colors"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex gap-6 items-center self-stretch my-auto min-w-60">
                    <div className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center text-white bg-navy-blue-500 rounded-md">
                        Book a Consultation
                    </div>
                    <div className="flex gap-2 items-center self-stretch my-auto w-6">
                        <img
                            src="/window.svg"
                            className="object-contain self-stretch my-auto w-6 aspect-square"
                            alt="Profile"
                        />
                    </div>
                    <div className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center whitespace-nowrap rounded-md border border-solid border-[color:var(--Neutrals-300,#C0C0C0)] text-zinc-800">
                        Login
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    className="flex lg:hidden flex-col gap-1 p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${
                            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${
                            isMobileMenuOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${
                            isMobileMenuOpen
                                ? "-rotate-45 -translate-y-1.5"
                                : ""
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}

export default Navbar;
