'use client'
import React, { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDown";
import { useRouter } from "next/navigation";

// Define the visa category structure
interface VisaCategory {
    title: string;
    visas: string[];
}

// Define the prop types
interface VisaCategoriesGridProps {
    isActive: boolean;
}

// Visa category data
const visaCategories: VisaCategory[] = [
    {
        title: "Visitor visas",
        visas: [
            "Electronic Travel Authority (subclass 601)",
            "eVisitor (subclass 651)",
            "Transit visa (subclass 771)",
            "Visitor (subclass 600)",
            "Work and Holiday visa (subclass 462)",
            "Working Holiday visa (subclass 417)",
        ],
    },
    {
        title: "Family and partner visas",
        visas: [
            "Adoption visa (subclass 102)",
            "Aged Dependent Relative visa (subclass 114)",
            "Aged Dependent Relative visa (subclass 838)",
            "Aged Parent visa (subclass 804)",
            "Carer visa (subclass 836)",
            "Carer visa (subclass 116)",
            "Child visa (subclass 101)",
            "Child visa (subclass 802)",
            "Contributory Aged Parent (Temporary) visa (subclass 884)",
            "Contributory Aged Parent visa (subclass 864)",
            "Contributory Parent (Temporary) visa (subclass 173)",
            "Contributory Parent visa (subclass 143)",
            "Dependent Child visa (subclass 445)",
            "New Zealand Citizen Family Relationship visa (subclass 461)",
            "Orphan Relative (subclass 117)",
            "Orphan Relative (subclass 837)",
            "Parent visa (subclass 103)",
            "Partner (Provisional and Migrant) visa (subclass 309 100)",
            "Partner visa (subclass 820 801)",
            "Prospective Marriage visa (subclass 300)",
        ],
    },
    {
        title: "Studying and training visas",
        visas: [
            "Student visa (subclass 500)",
            "Student Guardian visa (subclass 590)",
            "Training visa (subclass 407)",
        ],
    },
];

const newVisaCategories: VisaCategory[][] = [
    [visaCategories[0], visaCategories[2], visaCategories[0]],  // Visitor, Studying, Visitor
    [visaCategories[1]], // Family and partner visas
    [visaCategories[0], visaCategories[2]]  // Visitor, Studying
];

export const VisaCategoriesGrid: React.FC<VisaCategoriesGridProps> = ({ isActive }) => {
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
                className={`flex items-center gap-1 pb-1 font-medium transition ${
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
                        {newVisaCategories.map((categoryGroup, colIdx) => (
                            <div key={colIdx} className="space-y-4">
                                {categoryGroup.map((category, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-lg font-semibold text-navy-blue mb-3">
                                            {category.title}
                                        </h4>
                                        <ul className="space-y-1">
                                            {category.visas.map((visa, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm text-gray-600 hover:text-navy-blue cursor-pointer text-wrap"
                                                >
                                                    {visa}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
