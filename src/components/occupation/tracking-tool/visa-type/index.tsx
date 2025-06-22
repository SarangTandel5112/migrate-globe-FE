"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface VisaTypeProps {
    subclass: string;
    eligible: boolean;
    list: string;
}

const VisaType = ({ visaTypes }: { visaTypes: VisaTypeProps[] }) => {
    const [showAllVisaTypes, setShowAllVisaTypes] = useState(true);
    return (
        <div className="bg-white rounded-xl border border-neutrals-100 overflow-hidden">
            {/* Toggle Header */}
            <div
                className="flex justify-between items-center p-4 border-b border-neutrals-100 cursor-pointer"
                onClick={() => setShowAllVisaTypes(!showAllVisaTypes)}
            >
                <h2 className="text-neutrals-700 text-base font-semibold">
                    All Visa Type
                </h2>
                <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    className={`transition-transform ${
                        showAllVisaTypes ? "rotate-180" : ""
                    }`}
                >
                    <path
                        d="M1 1L7 7L13 1"
                        stroke="#808080"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <AnimatePresence initial={false}>
                {showAllVisaTypes && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-neutrals-100 pt-6"
                    >
                        {/* Desktop Table Header */}
                        <div className="hidden md:flex justify-between items-center p-4 border-b border-neutrals-100 bg-background-1">
                            <span className="text-neutrals-700 text-base font-normal w-64">
                                Visa Subclass
                            </span>
                            <span className="text-neutrals-700 text-base font-normal">
                                Eligibility
                            </span>
                            <span className="text-neutrals-700 text-base font-normal w-24">
                                List
                            </span>
                        </div>

                        {/* Desktop Table Rows */}
                        <div className="hidden md:block">
                            {visaTypes?.map((visa: any, index: any) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4 border-b border-neutrals-100"
                                >
                                    <div className="text-base font-normal w-64 text-heading1 text-neutrals-600">
                                        {visa.subclass}
                                    </div>
                                    <div className="flex justify-center w-16">
                                        <div className="w-6 h-6 bg-mint-green-600 rounded-full flex items-center justify-center">
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1 3L3 5L7 1"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-background-1 border border-neutrals-200 rounded-full px-3 py-2 w-24">
                                        <span className="text-navy-blue text-sm font-semibold">
                                            {visa.list}
                                        </span>
                                        <div className="bg-mint-green-50 rounded-full p-1">
                                            <svg
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                            >
                                                <path
                                                    d="M0.666504 0.666687H7.33317V7.33335M0.666504 7.33335L7.33317 0.666687"
                                                    stroke="#263773"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile View */}
                        <div className="block md:hidden">
                            {visaTypes.map((visa: any, index: any) => (
                                <div
                                    key={index}
                                    className="border-b border-neutrals-100 px-4 py-3"
                                >
                                    {/* Visa Subclass Label and Value */}
                                    <div className="mb-1">
                                        <div className="text-base font-normal text-heading1 text-neutrals-600">
                                            {visa.subclass}
                                        </div>
                                        <span className="text-xs text-neutrals-600 block md:hidden">
                                            Visa Subclass
                                        </span>
                                    </div>

                                    {/* Eligibility and List */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex items-center gap-2 text-neutrals-600 text-sm">
                                            <div className="w-5 h-5 bg-mint-green-600 rounded-full flex items-center justify-center">
                                                <svg
                                                    width="8"
                                                    height="6"
                                                    viewBox="0 0 8 6"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M1 3L3 5L7 1"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <span>Eligibility</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-background-1 border border-neutrals-200 rounded-full px-3 py-2 ml-auto">
                                            <span className="text-navy-blue text-sm font-semibold">
                                                {visa.list}
                                            </span>
                                            <div className="bg-mint-green-50 rounded-full p-1">
                                                <svg
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 8 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M0.666504 0.666687H7.33317V7.33335M0.666504 7.33335L7.33317 0.666687"
                                                        stroke="#263773"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VisaType;
