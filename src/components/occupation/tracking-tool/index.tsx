"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackIcon from "@/components/icons/BackIcon";
import MyImage from "@/ui/myImage";
import Clock from "@assets/images/Clock.svg";
import VisaType from "@/components/occupation/tracking-tool/visa-type";
import StateEligibility from "@/components/occupation/tracking-tool/state-eligibility";
import EOIStatistics from "@/components/occupation/tracking-tool/eoi-stats";
import { fadeUpVariants } from "@/utils/animation-variant";

const OccupationTracking: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("Electrical Engineer");

    const handleBack = () => router.back();

    const recentSearches = [
        "Electrical Engineer",
        "Mechanical Engineer",
        "Civil Engineer",
    ];

    const visaTypes = [
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 190 (State Sponsored)",
            eligible: false,
            list: "STSOL",
        },
    ];

    const stateEligibility = {
        "190": {
            NT: "eligible",
            VIC: "not-eligible",
            WA: "eligible",
            SA: "not-eligible",
            Tasmania: "eligible",
            NSW: "not-eligible",
            ACT: "eligible",
            QLD: "not-eligible",
        },
        "491": {
            NT: "eligible",
            VIC: "not-eligible",
            WA: "eligible",
            SA: "not-eligible",
            Tasmania: "eligible",
            NSW: "not-eligible",
            ACT: "eligible",
            QLD: "not-eligible",
        },
    };

    const chartColors = [
        { color: "#DCF3EB", label: "65" },
        { color: "#A2DFC9", label: "85" },
        { color: "#6FAC96", label: "130" },
    ];

    return (
        <div className="container-1200">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="flex items-center gap-2 w-fit text-navy-blue hover:text-navy-blue-600 transition-colors pb-6"
            >
                <BackIcon />
                <span className="text-base font-semibold tracking-[0.2px] capitalize">
                    Back
                </span>
            </button>

            {/* Title Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <h1 className="block md:hidden font-bold text-2xl text-navy-blue pb-2">
                    Occupation Tracking Tool
                </h1>
                <p className="block md:hidden text-base text-navy-blue pb-8">
                    Stay ahead with real-time updates on visa demand,
                    eligibility, and migration changes.
                </p>
            </motion.div>

            {/* Search Section */}
            <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6"
            >
                <div className="flex items-center gap-3 border border-mint-green-100 rounded-full bg-[#F7F8FD] px-4 py-2">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 25"
                        fill="none"
                        className="w-5 h-5 shrink-0"
                    >
                        <path
                            d="M20.9999 21.5L16.6599 17.16"
                            stroke="#808080"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                            stroke="#808080"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 text-navy-blue-400 text-sm md:text-base font-medium bg-transparent outline-none"
                        placeholder="Search occupation..."
                    />
                    <button className="hidden md:block bg-navy-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-navy-blue-600 transition-colors">
                        Search
                    </button>
                </div>

                {/* Recent Searches */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-navy-blue-400 text-base font-semibold">
                        Recent Searches
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {recentSearches.map((search, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-[#F5F6FB] rounded-full"
                            >
                                <MyImage
                                    src={Clock}
                                    alt="Clock"
                                    className="w-4 h-4"
                                />
                                <span className="text-navy-blue-400 text-sm font-medium">
                                    {search}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ANZSCO */}
            <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4"
            >
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-neutrals-700 text-sm md:text-base font-semibold">
                        ANZSCO
                    </span>
                    <div className="bg-mint-green-50 rounded-full px-3 py-1 md:px-4 md:py-1.5">
                        <span className="text-neutrals-700 text-xs md:text-sm font-medium">
                            233311
                        </span>
                    </div>
                    <h1 className="text-navy-blue text-xl md:text-2xl font-semibold whitespace-nowrap">
                        Electrical Engineer
                    </h1>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-2 border border-neutrals-300 rounded text-neutrals-700 text-xs md:text-sm font-medium bg-white hover:border-neutrals-400 transition-colors">
                        Free Assessment
                    </button>
                    <button className="flex-1 md:flex-none px-4 py-2 bg-navy-blue text-white rounded text-xs md:text-sm font-medium hover:bg-navy-blue-600 transition-colors">
                        Skilled Assessment
                    </button>
                </div>
            </motion.div>

            <div className="flex flex-col-reverse lg:flex-row gap-8 pt-4">
                {/* Main Content */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 flex flex-col gap-8 w-full lg:w-2/3 min-w-0"
                >
                    <VisaType visaTypes={visaTypes} />
                    <StateEligibility stateEligibility={stateEligibility} />
                    <EOIStatistics chartColors={chartColors} />
                </motion.div>

                {/* Sidebar */}
                <motion.aside
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-[320px] bg-white rounded-xl p-6 h-fit self-start"
                >
                    <div className="flex flex-col gap-2 md:gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-neutrals-700 text-sm md:text-base font-semibold">
                                ANZSCO
                            </span>
                            <div className="bg-mint-green-50 rounded-full px-3 py-1 md:px-4 md:py-1.5">
                                <span className="text-neutrals-700 text-xs md:text-sm font-medium">
                                    233311
                                </span>
                            </div>
                        </div>
                        <span className="text-neutrals-600 text-xs md:text-sm">
                            Electrical Engineer
                        </span>

                        <div className="border-t border-neutrals-100 my-4"></div>

                        <h3 className="text-neutrals-600 text-sm md:text-base font-semibold">
                            Specialization
                        </h3>
                        <ul className="text-neutrals-600 text-xs md:text-sm list-disc list-inside [&>li::marker]:text-[9px] [&>li::marker]:text-neutrals">
                            <li>Electrical Design Engineer</li>
                            <li>Railway Signalling Engineer</li>
                            <li>Signalling and Communications Engineer</li>
                        </ul>
                    </div>
                </motion.aside>
            </div>
        </div>
    );
};

export default OccupationTracking;
