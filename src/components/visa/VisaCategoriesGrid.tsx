'use client'
import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDown";
import { useRouter } from "next/navigation";
import { VisaType } from "@/utils/interface";

// Define the prop types
interface VisaCategoriesGridProps {
    isActive: boolean;
    categories: VisaType[];
    isLoading?: boolean;
    error?: string | null;
}

export const VisaCategoriesGrid: React.FC<VisaCategoriesGridProps> = ({ isActive, categories }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 200);
    };

    return (
        <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={() => {
                    router.push('/services/visa');
                    setOpen(false);
                }}
                className={`flex font-bold items-center gap-1 transition ${
                    isActive
                        ? "border-b-2 border-solid border-b-mint-green text-neutrals-700"
                        : "text-neutrals hover:text-neutrals-700 transition-colors"
                }`}
            >
                Visa
                <span className="text-xs">
                    <ArrowDownIcon className={open ? "rotate-180" : ""} />
                </span>
            </button>

            {open && (
                <div className="absolute -left-52 top-full mt-2 max-w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[75vw] 2xl:w-[55vw] bg-white border border-gray-200 shadow-xl rounded-xl z-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {categories.map((category) => (
                        <div key={category.id} className="space-y-4">
                            <div>
                            <h4 className="text-lg font-semibold text-navy-blue mb-3">
                                {category.name}
                            </h4>
                            <ul className="space-y-1">
                                {/* {category.visas.map((visa) => ( */}
                                {Array.isArray(category.visas) &&
                                    category.visas.every(
                                        (v) => typeof v === "object" && v !== null && "id" in v && "title" in v
                                    ) &&
                                    (category.visas as { id: string; title: string }[]).map((visa) => (
                                <li
                                    key={visa.id}
                                    className="text-sm text-gray-600 hover:text-navy-blue cursor-pointer text-wrap"
                                    // onClick={() => router.push(`/services/visa/${category?.documentId}`)}
                                    onClick={() => {
                                        const basePath = `/services/visa/${category?.documentId}`;
                                        const query = `?visa=${encodeURIComponent(visa?.title ?? '')}`;
                                        router.push(`${basePath}${query}`);
                                    }}
                                >
                                    {visa.title}
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};
