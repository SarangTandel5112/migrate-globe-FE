"use client";
import React from "react";
import { FooterLinkSection } from "../footer/FooterLinkSection";
import { SocialIcons } from "../footer/SocialIcons";
import { LegalLinksRow } from "../footer/LegalLinksRow";
import Image from "next/image";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/visa", label: "Visa" },
    { href: "/services", label: "Services" },
    { href: "/insurance", label: "Insurance" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
    { href: "#", label: "Smart Migration Plan (Buy Map)" },
    { href: "#", label: "Buy Documents Checklists" },
    { href: "#", label: "Find Visa Options" },
    { href: "#", label: "Buy Cheapest Insurance" },
    { href: "#", label: "Zoom Consultations" },
    { href: "#", label: "Occupation Tracking Tool" },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-blue text-white container-padding">
            <div className="container-1200 pt-4 md:pt-8 lg:pt-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-12">
                    <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16 justify-start md:justify-evenly">
                        <FooterLinkSection title="Content" links={NAV_LINKS} />
                        <FooterLinkSection title="Services" links={SERVICE_LINKS} />
                    </div>

                    {/* <div className="hidden lg:flex flex flex-col gap-4 text-center md:text-left">
                        <h3 className="hidden md:block text-white text-base font-bold leading-7">
                            Social Media
                        </h3>
                        <div className="flex items-center gap-4">
                            <SocialIcons />
                        </div>
                    </div> */}

                    <div className="flex gap-4 sm:gap-12 md:gap-4 lg:gap-16 flex-col sm:flex-row-reverse md:flex-col-reverse lg:flex-row items-start md:items-start">
                        <div className="flex items-start flex-col gap-3 block text-center md:text-left lg:mt-0">
                            <h3 className="text-white text-base font-bold leading-7">
                                Social Media
                            </h3>
                            <div className="flex items-center gap-4">
                                <SocialIcons />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:max-w-xs">
                            <h3 className="text-white text-base font-bold leading-7">
                                Subscribe
                            </h3>
                            <div className="flex items-center border border-gray-300 rounded-md bg-white overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 px-4 py-3 text-sm text-gray-600/60 bg-transparent outline-none placeholder:text-gray-600/60"
                                />
                                <button className="p-3 bg-white hover:bg-gray-50 transition-colors">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            d="M9 18L15 12L9 6"
                                            stroke="#263773"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-white/70 text-xs leading-relaxed">
                                Gravida sed justo, justo, id est et. Amet tristique
                                convallis sed porttitor nullam eu ut. Duis et odio
                                aliquam bibendum. Metus et lectus id viverra
                                fringilla magna morbi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/6 my-5 md:my-8 lg:my-10"></div>

            <div className="container-1200 pb-4 md:pb-8 lg:pb-16">
                <div className="flex flex-col-reverse gap-6 sm:flex-row sm:justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src="/logo-white.svg"
                            alt="Migrate Globe Logo"
                            width={160}
                            height={40}
                            className="object-contain shrink-0 self-stretch my-auto rounded-none"
                        />
                    </div>

                    <div className="flex justify-between gap-4 sm:hidden">
                        <LegalLinksRow />
                        {/* <SocialIcons /> */}
                    </div>

                    <div className="hidden sm:flex sm:items-center gap-6 lg:gap-8">
                        <LegalLinksRow />
                    </div>

                    {/* <div className="hidden md:flex items-center gap-4">
                        <SocialIcons />
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
