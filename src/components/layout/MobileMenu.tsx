"use client";
import * as React from "react";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { navigationItems } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useOutsideClick<HTMLDivElement>(onClose);

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
        <div className="flex flex-col p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end p-2 mb-6"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
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
          <div className="flex flex-col gap-6 text-base font-medium tracking-wide">
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
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-center text-white bg-indigo-900 rounded-md">
              Book a Consultation
            </button>
            <div className="flex items-center justify-center gap-2 py-2">
              <img
                src="/window.svg"
                className="object-contain w-6 aspect-square"
                alt="Profile"
              />
            </div>
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-center rounded-md border border-solid border-[color:var(--Neutrals-300,#C0C0C0)] text-zinc-800">
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
