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
        <div className="bg-white">
            <div className="flex gap-10 container-1200 justify-between items-center p-5 md:p-6 lg:p-8 md:gap-0 xl:px-0">
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
                <div className="hidden lg:flex gap-8 items-center self-stretch my-auto text-base font-medium whitespace-nowrap min-w-60 text-stone-500">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`gap-2.5 self-stretch pb-1 my-auto ${
                                item.isActive
                                    ? "border-b-2 border-solid border-b-mint-green text-neutrals-700"
                                    : "text-neutrals hover:text-neutrals-700 transition-colors"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex gap-6 items-center self-stretch my-auto min-w-60">
                    <button className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center text-white bg-navy-blue rounded-md">
                        Book a Consultation
                    </button>
                    <button className="flex gap-2 items-center self-stretch my-auto w-6">
                        <img
                            src="/window.svg"
                            className="object-contain self-stretch my-auto w-6 aspect-square"
                            alt="Profile"
                        />
                    </button>
                    <button className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center whitespace-nowrap rounded-md border border-solid border-neutrals-300 text-neutrals-700">
                        Login
                    </button>
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
        </div>
    );
}

export default Navbar;
