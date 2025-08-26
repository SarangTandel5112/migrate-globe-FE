"use client";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { navigationItems } from "@/constants/navigation";
import CartIcon from "../icons/CartIcon";
import { useEffect, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDown";
import { usePathname, useRouter } from "next/navigation";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    toggleLogin: () => void;
}

function MobileMenu({ isOpen, onClose, toggleLogin }: MobileMenuProps) {
    const [openMega, setOpenMega] = useState<string | null>(null);
    const menuRef = useOutsideClick<HTMLDivElement>(onClose);
    const pathname = usePathname();
    const router = useRouter();
    const segments = pathname.split("/").filter(Boolean);
    const last = segments.at(-1);
    const secondLast = segments.at(-2);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
                    isOpen
                        ? "bg-opacity-50 opacity-100"
                        : "bg-opacity-0 opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            ></div>

            {/* Mobile Menu Content */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full overflow-y-auto p-6">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="self-end p-2 mb-6"
                        aria-label="Close mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="#000"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Navigation Items */}
                    {/* <div className="flex flex-col gap-6 text-base font-medium tracking-wide">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                className={`pb-2 ${
                                    item.isActive
                                        ? "border-b-2 border-solid border-b-[color:var(--Mint-Green,#8BD7BC)] text-zinc-800"
                                        : "text-stone-500 border-b border-gray-100 hover:text-zinc-800 transition-colors"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div> */}
                    <div className="flex flex-col gap-6 text-base font-medium tracking-wide">
                        {navigationItems.map((item) => {
                            const isMega = item.type === "mega";
                            const isOpen = openMega === item.name;
                            // const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                            const hrefSlug = item.href
                                .split("/")
                                .filter(Boolean)
                                .at(-1);
                            const isActive =
                                hrefSlug === last ||
                                (!last && hrefSlug === secondLast);

                            if (isMega) {
                                return (
                                    <div key={item.name} className="pt-2">
                                        <button
                                            // onClick={() => setOpenMega(isOpen ? null : item.name)}
                                            onClick={() => {
                                                if (item?.name === "Visa")
                                                    router.push(
                                                        "/services/visa"
                                                    );
                                            }}
                                            className={`w-full flex justify-between items-center text-left pb-2 ${
                                                isActive
                                                    ? "border-b-2 border-[--Mint-Green] text-navy-blue"
                                                    : "text-neutrals border-b-2 border-gray-100"
                                            }`}
                                        >
                                            <span>{item.name}</span>
                                            <ArrowDownIcon
                                                className={`text-neutrals ${
                                                    isOpen ? " rotate-180" : ""
                                                }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenMega(
                                                        isOpen
                                                            ? null
                                                            : item?.name
                                                    );
                                                }}
                                            />
                                        </button>

                                        {isOpen &&
                                            item.groups?.map((group) => (
                                                <div
                                                    key={group.title}
                                                    className="mt-3 mb-4"
                                                >
                                                    <p className="text-sm font-medium text-gray-500 mb-2">
                                                        {group.title}
                                                    </p>
                                                    <ul className="space-y-1 pl-2">
                                                        {group.items.map(
                                                            (link) => (
                                                                <li
                                                                    key={
                                                                        link.name
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            link.href
                                                                        }
                                                                        onClick={
                                                                            onClose
                                                                        }
                                                                        className="block text-gray-700 hover:text-navy-blue transition"
                                                                    >
                                                                        {
                                                                            link.name
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>
                                );
                            }

                            // Regular nav item
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={onClose}
                                    className={`pb-2 ${
                                        isActive
                                            ? "border-b-2 border-[--Mint-Green] text-navy-blue"
                                            : "text-neutrals border-b border-gray-100 hover:text-zinc-800"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 mt-8">
                        <Link href='/services/zoom-consultation' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-center text-white bg-navy-blue rounded-md">
                            Book a Consultation
                        </Link>
                        <Link
                            href="/cart"
                            className="flex items-center justify-center gap-2 py-2"
                        >
                            <CartIcon />
                        </Link>
                        <button onClick={toggleLogin} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-center rounded-md border border-solid border-[color:var(--Neutrals-300,#C0C0C0)] text-zinc-800">
                            LogIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
