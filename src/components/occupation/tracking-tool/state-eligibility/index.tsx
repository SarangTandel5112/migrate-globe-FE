"use client";

import MyImage from "@/ui/myImage";
import React, { useState } from "react";
import Check from "@assets/images/Check.svg";
import Frame from "@assets/images/Frame.svg";
import none from "@assets/images/none.svg";
import { motion, AnimatePresence } from "framer-motion";

type EligibilityStatus = "eligible" | "not_eligible" | string;

type StateMap = Record<string, EligibilityStatus>;

interface StateEligibilityProps {
    stateEligibility: Record<string, StateMap>;
}

const StatusIcon = ({
    status,
    classname = "",
}: {
    status: EligibilityStatus;
    classname?: string;
}) => {
    const commonClasses =
        "w-6 h-6 rounded-full border-2 flex items-center justify-center";

    return (
        <div
            className={`${commonClasses} ${
                status === "eligible" ? "border-green-500" : "border-red"
            } ${classname}`}
        >
            {status === "eligible" ? (
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path
                        d="M1 3L3 5L7 1"
                        stroke="#80CC28"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                        d="M7 1L1 7M1 1L7 7"
                        stroke="#ED1D24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    );
};

const StateEligibility = ({ stateEligibility }: StateEligibilityProps) => {
    const [showStateEligibility, setShowStateEligibility] = useState(true);

    return (
        <div className="bg-white rounded-xl border border-neutrals-100 p-4 md:p-4">
            <div
                className="flex justify-between items-center cursor-pointer mb-0"
                onClick={() => setShowStateEligibility(!showStateEligibility)}
            >
                <h2 className="text-neutrals-700 text-base font-semibold">
                    State Eligibility
                </h2>
                <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    className={`transition-transform ${
                        showStateEligibility ? "rotate-180" : ""
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
                {showStateEligibility && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-neutrals-100 mt-5 pt-5"
                    >
                        {/* Legend */}
                        <div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-12 mb-6">
                            {[
                                {
                                    src: Check,
                                    label: "Occupation MAY Be Eligible",
                                },
                                {
                                    src: none,
                                    label: "Special Conditions Apply",
                                },
                                {
                                    src: Frame,
                                    label: "Occupation NOT Eligible",
                                },
                            ].map(({ src, label }, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-1"
                                >
                                    <MyImage
                                        src={src}
                                        alt={label}
                                        className="w-4 h-4"
                                        height="16"
                                        width="16"
                                    />
                                    <span className="text-neutrals-700 text-xs">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-neutrals-100 pt-6">
                            {Object.entries(stateEligibility).map(
                                ([visaCode, states], index, arr) => {
                                    const stateEntries = Object.entries(states);

                                    return (
                                        <div key={visaCode}>
                                            {/* Desktop Layout */}
                                            <div className="hidden md:flex md:flex-row md:items-center gap-6 mb-4 overflow-y-auto">
                                                <div className="bg-mint-green-50 rounded p-5 lg:p-6 min-w-[160px] mb-4 md:mb-0 flex items-center justify-center">
                                                    <span className="text-neutrals-700 text-2xl font-semibold">
                                                        {visaCode}
                                                    </span>
                                                </div>
                                                <div className="columns-4 gap-2 space-y-2">
                                                    {stateEntries.map(
                                                        ([state, status]) => (
                                                            <div
                                                                key={state}
                                                                className="flex items-center gap-2 px-3 py-1 bg-background-1 border border-neutrals-100 rounded-full whitespace-nowrap"
                                                            >
                                                                <StatusIcon
                                                                    status={
                                                                        status
                                                                    }
                                                                    classname="!w-5 !h-5 shrink-0"
                                                                />
                                                                <span className="text-neutrals-600 text-sm font-normal">
                                                                    {state}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {/* Mobile Layout */}
                                            <div className="md:hidden mb-6">
                                                <div className="flex justify-left mb-3">
                                                    <div className="bg-mint-green-50 rounded px-6 py-3 min-w-[140px] flex items-center justify-center">
                                                        <span className="text-neutrals-700 text-xl font-semibold">
                                                            {visaCode}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    className="grid gap-2"
                                                    style={{
                                                        gridTemplateColumns:
                                                            "repeat(4, max-content)",
                                                    }}
                                                >
                                                    {stateEntries.map(
                                                        ([state, status]) => (
                                                            <div
                                                                key={state}
                                                                className="flex items-center gap-1 px-3 py-1 bg-background-1 border border-neutrals-100 rounded-full w-fit"
                                                            >
                                                                <StatusIcon
                                                                    status={
                                                                        status
                                                                    }
                                                                    classname="!w-3 !h-3 shrink-0"
                                                                />
                                                                <span className="text-neutrals-600 text-xs leading-tight text-left">
                                                                    {state}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            {index !== arr.length - 1 && (
                                                <div className="border-b border-neutrals-100 mb-6" />
                                            )}
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StateEligibility;
