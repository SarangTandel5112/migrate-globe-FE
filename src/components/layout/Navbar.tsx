"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navigationItems } from "@/constants/navigation";
import CartIcon from "../icons/CartIcon";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LoginModal from "../login";
import { VisaCategoriesGrid } from "../visa/VisaCategoriesGrid";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const last = segments.at(-1);
    const secondLast = segments.at(-2);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                document.body.classList.remove('no-scroll')
                setShowLoginModal(false)
            }
        }

        if (showLoginModal) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showLoginModal])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleLogin = () => {
        document.body.classList.toggle('no-scroll')
        setShowLoginModal(!showLoginModal);
    };

    return (
        <div className="bg-white container-padding shadow-custom-combined">
            <div className="container-1200">
                <div className="flex gap-10 justify-between items-center py-5 md:py-6 lg:py-8 md:gap-0">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="flex gap-2 items-center self-stretch my-auto w-36 text-xl leading-5 text-green-300"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Migrate Globe Logo"
                            width={144}
                            height={40}
                            className="object-contain shrink-0 self-stretch my-auto rounded-none"
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-8 items-center self-stretch my-auto text-base font-medium whitespace-nowrap min-w-60 text-stone-500">
                        {navigationItems.map((item) => {
                            // const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                            const hrefSlug = item.href.split("/").filter(Boolean).at(-1);
                            const isActive = hrefSlug === last || (!last && hrefSlug === secondLast);
                            if (item.name === "Visa") {
                                return (
                                    <div key={item.name}>
                                        <VisaCategoriesGrid isActive={isActive} />
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`gap-2.5 self-stretch pb-1 my-auto ${isActive
                                            ? "border-b-2 border-solid border-b-mint-green text-neutrals-700"
                                            : "text-neutrals hover:text-neutrals-700 transition-colors"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    {/* Desktop Navigation */}
                    {/* <div className="hidden lg:flex gap-8 items-center self-stretch my-auto text-base font-medium whitespace-nowrap min-w-60 text-stone-500">
                        {navigationItems.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`gap-2.5 self-stretch pb-1 my-auto ${isActive
                                            ? "border-b-2 border-solid border-b-mint-green text-neutrals-700"
                                            : "text-neutrals hover:text-neutrals-700 transition-colors"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div> */}
                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex gap-6 items-center self-stretch my-auto min-w-60">
                        <button className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center text-white bg-navy-blue rounded-md">
                            Book a Consultation
                        </button>
                        <Link
                            href="/cart"
                            className="flex gap-2 items-center self-stretch my-auto w-6"
                        >
                            <CartIcon />
                        </Link>
                        <button onClick={toggleLogin} className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center whitespace-nowrap rounded-md border border-solid border-neutrals-300 text-neutrals-700">
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
                            className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${isMobileMenuOpen
                                ? "rotate-45 translate-y-1.5"
                                : ""
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${isMobileMenuOpen
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

                {showLoginModal && (
                    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                        <div ref={modalRef}>
                            <LoginModal isModal />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
