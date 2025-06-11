"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";

const OccupationTrackingPage: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("Electrical Engineer");
    const [showAllVisaTypes, setShowAllVisaTypes] = useState(false);
    const [showStateEligibility, setShowStateEligibility] = useState(false);
    const [showEOIStats, setShowEOIStats] = useState(false);

    const handleBack = () => {
        router.back();
    };

    const recentSearches = [
        "Electrical Engineer",
        "Occupation 2",
        "Occupation 2",
        "Occupation 2",
        "Occupation 2",
    ];

    const visaTypes = [
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
        },
        {
            subclass: "Subclass 189 (Skilled Independent) Points-Tested",
            eligible: true,
            list: "MLTSSL",
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
        DAMA: {
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
        { color: "#C5EBDE", label: "70" },
        { color: "#A2DFC9", label: "85" },
        { color: "#6FAC96", label: "130" },
        { color: "#456C5E", label: "135" },
        { color: "#38564B", label: "95" },
    ];

    const StatusIcon = ({ status }: { status: string }) => {
        if (status === "eligible") {
            return (
                <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path
                            d="M1 3L3 5L7 1"
                            stroke="#80CC28"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            );
        } else {
            return (
                <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                            d="M7 1L1 7M1 1L7 7"
                            stroke="#ED1D24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            );
        }
    };

    return (
        <div className="container-1200">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Back Button */}
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 w-fit text-navy-blue hover:text-navy-blue-600 transition-colors"
                    >
                        <BackIcon />
                        <span className="text-base font-semibold tracking-[0.2px] capitalize">
                            Back
                        </span>
                    </button>

                    {/* Search Section */}
                    <div className="bg-background-1 rounded-2xl p-4 md:p-6 flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-center p-3 border border-mint-green-100 rounded-full bg-white">
                            <div className="flex items-center gap-3 flex-1">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    className="w-6 h-6"
                                >
                                    <path
                                        d="M20.9999 21.5L16.6599 17.16"
                                        stroke="#808080"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                                        stroke="#808080"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="flex-1 text-neutrals-700 text-base font-medium bg-transparent outline-none"
                                    placeholder="Type occupation or name"
                                />
                            </div>
                            <button className="bg-navy-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-navy-blue-600 transition-colors">
                                Search
                            </button>
                        </div>

                        {/* Recent Searches */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-navy-blue-400 text-base font-medium capitalize">
                                Recent Search
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {recentSearches.map((search, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            className="w-4 h-4"
                                        >
                                            <circle
                                                cx="8"
                                                cy="7.5"
                                                r="6.5"
                                                stroke="#7D87AB"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1 1.5V5.5L3.66667 6.83333"
                                                stroke="#7D87AB"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-navy-blue-400 text-sm md:text-base font-medium">
                                            {search}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Occupation Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-1">
                                <span className="text-neutrals-700 text-base font-semibold">
                                    ANZSCO
                                </span>
                                <div className="bg-mint-green-50 border border-white rounded-full px-4 py-1.5">
                                    <span className="text-neutrals-700 text-sm font-medium">
                                        233311
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-navy-blue text-xl md:text-2xl font-semibold">
                                Electrical Engineer
                            </h1>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-2 border border-neutrals-300 rounded text-neutrals-700 text-sm font-medium hover:border-neutrals-400 transition-colors">
                                Free assessment
                            </button>
                            <button className="px-6 py-2 bg-navy-blue text-white rounded text-sm font-medium hover:bg-navy-blue-600 transition-colors">
                                Skilled assessment
                            </button>
                        </div>
                    </div>

                    {/* Visa Types Table */}
                    <div className="bg-white rounded-xl border border-neutrals-100 overflow-hidden">
                        <div
                            className="flex justify-between items-center p-4 border-b border-neutrals-100 cursor-pointer"
                            onClick={() =>
                                setShowAllVisaTypes(!showAllVisaTypes)
                            }
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

                        {/* Table Header */}
                        <div className="flex justify-between items-center p-4 border-b border-neutrals-100 bg-background-1">
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

                        {/* Table Rows */}
                        {visaTypes.map((visa, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-4 border-b border-neutrals-100"
                            >
                                <div className="text-neutrals-500 text-base font-normal w-64">
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

                    {/* State Eligibility */}
                    <div className="bg-white rounded-xl border border-neutrals-100 p-4 md:p-6">
                        <div
                            className="flex justify-between items-center cursor-pointer mb-6"
                            onClick={() =>
                                setShowStateEligibility(!showStateEligibility)
                            }
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

                        <div className="border-t border-neutrals-100 pt-6">
                            {/* Legend */}
                            <div className="flex flex-wrap justify-end gap-4 md:gap-12 mb-6">
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 rounded-full border border-green-500">
                                        <svg
                                            width="6"
                                            height="4"
                                            viewBox="0 0 6 4"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 2L2.33333 3.33333L5 0.666667"
                                                stroke="#80CC28"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-neutrals-700 text-xs">
                                        Occupation MAY be eligible
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 rounded-full border border-yellow-500">
                                        <svg
                                            width="6"
                                            height="2"
                                            viewBox="0 0 6 2"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 1L5 1"
                                                stroke="#FFB806"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-neutrals-700 text-xs">
                                        Special Conditions apply
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 rounded-full border border-red-500">
                                        <svg
                                            width="6"
                                            height="6"
                                            viewBox="0 0 6 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M5 1L1 5M1 1L5 5"
                                                stroke="#ED1D24"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-neutrals-700 text-xs">
                                        Occupation NOT eligible
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-neutrals-100 pt-6">
                                {/* State Eligibility Grid */}
                                {Object.entries(stateEligibility).map(
                                    ([visaCode, states]) => (
                                        <div
                                            key={visaCode}
                                            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-6"
                                        >
                                            <div className="bg-mint-green-50 rounded px-6 py-6 min-w-[200px] flex items-center justify-center">
                                                <span className="text-neutrals-700 text-xl md:text-2xl font-semibold">
                                                    {visaCode}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                                                {Object.entries(states).map(
                                                    ([state, status]) => (
                                                        <div
                                                            key={state}
                                                            className="flex flex-col gap-2"
                                                        >
                                                            <div className="flex items-center gap-2 px-1 py-1 bg-background-1 border border-neutrals-100 rounded-full">
                                                                <StatusIcon
                                                                    status={
                                                                        status
                                                                    }
                                                                />
                                                                <span className="text-neutrals-500 text-base font-normal">
                                                                    {state}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* EOI Statistics */}
                    <div className="bg-white rounded-xl border border-neutrals-100 p-4 md:p-6">
                        <div
                            className="flex justify-between items-center cursor-pointer mb-6"
                            onClick={() => setShowEOIStats(!showEOIStats)}
                        >
                            <h2 className="text-neutrals-700 text-base font-semibold">
                                EOI Statistics
                            </h2>
                            <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                className={`transition-transform ${
                                    showEOIStats ? "rotate-180" : ""
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

                        <div className="border-t border-neutrals-100 pt-6">
                            {/* Filter Controls */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Submitted",
                                        "Logged",
                                        "Held",
                                        "Invited",
                                    ].map((status) => (
                                        <button
                                            key={status}
                                            className="px-3 py-2 bg-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Chart view", "Table view"].map(
                                        (view) => (
                                            <button
                                                key={view}
                                                className="px-3 py-2 bg-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                                            >
                                                {view}
                                            </button>
                                        )
                                    )}
                                    <select className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                        <option>April</option>
                                    </select>
                                    <select className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                        <option>2025</option>
                                    </select>
                                </div>
                            </div>

                            <div className="border-t border-neutrals-100 pt-6">
                                {/* Chart Legend */}
                                <div className="flex flex-wrap justify-end gap-4 mb-6">
                                    {chartColors.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1"
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{
                                                    backgroundColor: item.color,
                                                }}
                                            ></div>
                                            <span className="text-neutrals-700 text-xs">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Charts Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                    {[
                                        "Subclass 189 Skilled Independent visa (Points-tested stream)",
                                        "Subclass 190 Skilled Nominated visa",
                                        "Subclass 491 (Family Sponsored stream)",
                                        "Subclass 491 (State Sponsored stream)",
                                    ].map((title, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-6"
                                        >
                                            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-mint-green-50 via-mint-green-200 to-mint-green-600 flex items-center justify-center">
                                                <div className="w-32 h-32 bg-white rounded-full"></div>
                                            </div>
                                            <p className="text-neutrals-700 text-sm text-center">
                                                {title}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-neutrals-100 pt-6">
                                    <div className="flex items-start gap-2">
                                        <div className="w-4 h-4 rounded-full border border-green-500 mt-1">
                                            <svg
                                                width="6"
                                                height="4"
                                                viewBox="0 0 6 4"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1 2L2.33333 3.33333L5 0.666667"
                                                    stroke="#80CC28"
                                                    strokeWidth="1.33333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-neutrals-500 text-base leading-normal">
                                            An EOI that meets all the
                                            requirements for all selected visa
                                            subclasses and has all fields
                                            completed can be submitted. Once
                                            submitted, points are attributed to
                                            the EOI based on the information
                                            provided. Submitted EOIs are
                                            eligible for selection in an
                                            invitation round, by a State and
                                            Territory government agency or
                                            Austrade, depending on the visa
                                            subclass(es) selected.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-96 bg-white rounded-xl p-6 h-fit">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-neutrals-700 text-base font-semibold">
                                ANZSCO
                            </span>
                            <div className="bg-mint-green-50 rounded-full px-4 py-1.5">
                                <span className="text-neutrals-700 text-sm font-medium">
                                    233311
                                </span>
                            </div>
                        </div>
                        <span className="text-neutrals-500 text-sm">
                            Electrical Engineer
                        </span>
                    </div>

                    <div className="border-t border-neutrals-100 my-4"></div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-neutrals-700 text-base font-semibold">
                                ANZSCO
                            </span>
                            <div className="bg-mint-green-50 rounded-full px-4 py-1.5">
                                <span className="text-neutrals-700 text-sm font-medium">
                                    233311
                                </span>
                            </div>
                        </div>
                        <span className="text-neutrals-500 text-sm">
                            Electrical Engineer
                        </span>
                    </div>

                    <div className="border-t border-neutrals-100 my-4"></div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-neutrals-700 text-base font-semibold">
                            Specialization
                        </h3>
                        <div className="text-neutrals-500 text-sm leading-normal">
                            Electrical Design Engineer
                            <br />
                            Railway Signalling Engineer
                            <br />
                            Signalling and Communications Engineer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccupationTrackingPage;
