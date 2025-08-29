"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navigationItems } from "@/constants/navigation";
import CartIcon from "../icons/CartIcon";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import LoginModal from "../login";
import { VisaCategoriesGrid } from "../visa/VisaCategoriesGrid";
import { VisaType } from "@/utils/interface";
import { fetchInsights } from "@/api/insights";
import SignupModal from "../signup";
import Toast from "@/ui/toast";

const Navbar = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState<any>(null);
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const last = segments.at(-1);
    const secondLast = segments.at(-2);
    const modalRef = useRef<HTMLDivElement>(null);
    const signupModalRef = useRef<HTMLDivElement>(null);
    const [insights, setInsights] = useState<VisaType[]>([]);
    const [loadingInsights, setLoadingInsights] = useState(true);
    const [insightsError, setInsightsError] = useState<string | null>(null);
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error" | "info";
        isOpen: boolean;
    }>({
        message: "",
        type: "success",
        isOpen: false,
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            // Optionally fetch the user's profile data
            const storedUserProfile = JSON.parse(localStorage.getItem("user") || "{}");
            setUserProfile(storedUserProfile);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        const getInsights = async () => {
            try {
                setLoadingInsights(true);
                const data = await fetchInsights();
                setInsights(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setInsightsError(error.message);
                } else {
                    setInsightsError("Unknown error");
                }
            } finally {
                setLoadingInsights(false);
            }
        };
        getInsights();
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                document.body.classList.remove("no-scroll");
                setShowLoginModal(false);
            }
        }

        if (showLoginModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showLoginModal]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                signupModalRef.current &&
                !signupModalRef.current.contains(event.target as Node)
            ) {
                document.body.classList.remove("no-scroll");
                setShowSignupModal(false);
            }
        }

        if (showSignupModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSignupModal]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleLogin = () => {
        document.body.classList.toggle("no-scroll");
        setShowLoginModal(!showLoginModal);
    };
    const toggleSignup = () => {
        document.body.classList.toggle("no-scroll");
        setShowSignupModal(!showSignupModal);
    };

    const handleLoginSuccess = (user: object, token: string) => {
        // Save user and token
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Update state
        setIsLoggedIn(true);
        setUserProfile(user);

        // Close login modal
        setShowLoginModal(false);
        document.body.classList.remove("no-scroll");
    };
    const handleSignUp = () => {
        toggleSignup();
        toggleLogin();
    }
    const handleLogin = () => {
        toggleLogin();
        toggleSignup();
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUserProfile(null);
    };

    const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target as Node)
            ) {
                setIsProfileMenuOpen(false);
            }
        }

        if (isProfileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isProfileMenuOpen]);

    return (
        <div className="sticky top-0 w-full z-40 bg-white container-padding shadow-custom-combined">
            <div className="container-1200">
                <div className="flex gap-10 justify-between items-center py-4 md:py-5 lg:py-5 md:gap-0">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="flex gap-2 items-center self-stretch my-auto w-36 text-xl leading-5 text-green-300"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Migrate Globe Logo"
                            width={100}
                            height={40}
                            className="block md:hidden object-contain shrink-0 self-stretch my-auto rounded-none"
                        />

                        <Image
                            src="/logo.svg"
                            alt="Migrate Globe Logo"
                            width={144}
                            height={40}
                            className="hidden md:block object-contain shrink-0 self-stretch my-auto rounded-none"
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-8 items-center self-stretch my-auto text-base font-medium whitespace-nowrap min-w-60 text-stone-500">
                        {navigationItems.map((item) => {
                            // const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                            const hrefSlug = item.href
                                .split("/")
                                .filter(Boolean)
                                .at(-1);
                            const isActive =
                                hrefSlug === last ||
                                (!last && hrefSlug === secondLast);
                            if (item.name === "Visa") {
                                return (
                                    <div
                                        className="pb-1 my-auto"
                                        key={item.name}
                                    >
                                        <VisaCategoriesGrid
                                            isActive={isActive}
                                            categories={insights || []}
                                            isLoading={loadingInsights}
                                            error={insightsError}
                                        />
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`gap-2.5 font-bold self-stretch pb-1 my-auto ${
                                        isActive
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
                        <Link href='/services/zoom-consultation' className="gap-2.5 self-stretch px-3 xl:px-6 py-2 my-auto text-sm font-medium text-center text-white bg-navy-blue rounded-md">
                            Book a Consultation
                        </Link>
                        <Link
                            href="/cart"
                            className="flex gap-2 items-center self-stretch my-auto w-6"
                        >
                            <CartIcon />
                        </Link>
                        {isLoggedIn ? (
                            <div className="relative">
                                {/* Profile Picture or Placeholder */}
                                <button onClick={toggleProfileMenu} className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                                    {userProfile?.avatar ? (
                                        <Image
                                            src={userProfile.avatar}
                                            alt="Profile"
                                            width={40}
                                            height={40}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40" className="w-full h-full">
                                            <circle cx="50" cy="50" r="45" fill="#E0E0E0" />
                                            <circle cx="50" cy="40" r="18" fill="#9E9E9E" />
                                            <rect x="30" y="58" width="40" height="20" rx="5" ry="5" fill="#BDBDBD" />
                                        </svg>
                                    )}
                                </button>
                                {isProfileMenuOpen && (
                                    <div ref={profileMenuRef} className="absolute right-0 mt-2 bg-gray-100 shadow-lg rounded-lg py-2 w-40">
                                        <button
                                            onClick={() => router.push("/profile")}
                                            className="w-full text-left px-4 py-2 text-sm text-neutral-900 hover:bg-gray-200"
                                        >
                                            Profile
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red hover:bg-gray-200"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={toggleLogin}
                                className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center whitespace-nowrap rounded-md border border-solid border-neutrals-300 text-neutrals-700"
                            >
                                Login
                            </button>
                        )}
                        {/* <button
                            onClick={toggleLogin}
                            className="gap-2.5 self-stretch px-6 py-2 my-auto text-sm font-medium text-center whitespace-nowrap rounded-md border border-solid border-neutrals-300 text-neutrals-700"
                        >
                            Login
                        </button> */}
                    </div>
                    {/* Mobile Hamburger Menu */}
                    <button
                        className="flex lg:hidden flex-col gap-1 p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-zinc-800 transition-all duration-300 ${
                                isMobileMenuOpen
                                    ? "rotate-45 translate-y-1.5"
                                    : ""
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
                    toggleLogin={toggleLogin}
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                    onClose={() => setIsMobileMenuOpen(false)}
                />

                {showLoginModal && (
                    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                        <div ref={modalRef}>
                            <LoginModal showModal={showLoginModal} toggleLogin={toggleLogin} handleSignUp={handleSignUp} handleLoginSuccess={handleLoginSuccess} setToast={setToast} />
                        </div>
                    </div>
                )}
                {showSignupModal && (
                    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                        <div ref={signupModalRef}>
                            <SignupModal showModal={showSignupModal} handleLogin={handleLogin} />
                        </div>
                    </div>
                )}
            </div>
            <Toast
                message={toast.message}
                type={toast.type}
                isOpen={toast.isOpen}
                onClose={() => setToast({ ...toast, isOpen: false })}
            />
        </div>
    );
}

export default Navbar;
