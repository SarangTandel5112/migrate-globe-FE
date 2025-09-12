"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackIcon from "@/components/icons/BackIcon";
// import MyImage from "@/ui/myImage";
// import Clock from "@assets/images/Clock.svg";
import VisaType from "@/components/occupation/tracking-tool/visa-type";
import StateEligibility from "@/components/occupation/tracking-tool/state-eligibility";
import EOIStatistics from "@/components/occupation/tracking-tool/eoi-stats";
import { fadeUpVariants } from "@/utils/animation-variant";

// Types for API responses
interface OccupationSearchResult {
    id: number;
    documentId: string;
    code: string;
    title: string;
}

interface OccupationSearchResponse {
    data: OccupationSearchResult[];
    meta: {
        total: number;
        query: string;
    };
}

interface OccupationDocument {
    // Add properties based on the actual API response structure
    [key: string]: any;
}

const OccupationTracking: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<OccupationSearchResult[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOccupation, setSelectedOccupation] = useState<OccupationSearchResult | null>(null);
    const [occupationDetails, setOccupationDetails] = useState<OccupationDocument | null>(null);
    const { visaEligibility, stateEligibility } = occupationDetails?.data || {};
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleBack = () => router.back();

    // API functions
    const searchOccupations = async (query: string): Promise<OccupationSearchResult[]> => {
        if (!query.trim()) return [];
        
        try {
            const response = await fetch(
                `https://admin.migrateglobe.com/api/occupation-trackings/search?query=${encodeURIComponent(query)}`
            );
            const data: OccupationSearchResponse = await response.json();
            return data.data || [];
        } catch (error) {
            console.error('Error searching occupations:', error);
            return [];
        }
    };

    const fetchOccupationDetails = async (documentId: string): Promise<OccupationDocument | null> => {
        try {
            const response = await fetch(
                `https://admin.migrateglobe.com/api/occupation-trackings/document/${documentId}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching occupation details:', error);
            return null;
        }
    };

    // Search handler with debouncing
    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (searchQuery.trim()) {
                setIsLoading(true);
                const results = await searchOccupations(searchQuery);
                setSearchResults(results);
                setIsDropdownOpen(results.length > 0);
                setSelectedIndex(-1);
                setIsLoading(false);
            } else {
                setSearchResults([]);
                setIsDropdownOpen(false);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    // Handle occupation selection
    const handleOccupationSelect = async (occupation: OccupationSearchResult) => {
        setSelectedOccupation(occupation);
        setSearchQuery(occupation.title);
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
        
        // Fetch detailed occupation data
        setIsLoading(true);
        const details = await fetchOccupationDetails(occupation.documentId);
        setOccupationDetails(details);
        setIsLoading(false);
    };

    // Handle search button click or Enter key
    const handleSearch = async () => {
        if (searchQuery.trim()) {
            setIsLoading(true);
            const results = await searchOccupations(searchQuery);
            setSearchResults(results);
            setIsDropdownOpen(results.length > 0);
            setSelectedIndex(-1);
            setIsLoading(false);
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isDropdownOpen || searchResults.length === 0) {
            if (e.key === 'Enter') {
                handleSearch();
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => 
                    prev < searchResults.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => 
                    prev > 0 ? prev - 1 : searchResults.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
                    handleOccupationSelect(searchResults[selectedIndex]);
                } else {
                    handleSearch();
                }
                break;
            case 'Escape':
                setIsDropdownOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // const recentSearches = [
    //     "Electrical Engineer",
    //     "Mechanical Engineer",
    //     "Civil Engineer",
    // ];

    // const visaTypes = [
    //     {
    //         subclass: "Subclass 189 (Skilled Independent) Points-Tested",
    //         eligible: true,
    //         list: "MLTSSL",
    //     },
    //     {
    //         subclass: "Subclass 190 (State Sponsored)",
    //         eligible: false,
    //         list: "STSOL",
    //     },
    // ];

    // const oldStateEligibilityData = {
    //     "190": {
    //         NT: "eligible",
    //         VIC: "not-eligible",
    //         WA: "eligible",
    //         SA: "not-eligible",
    //         Tasmania: "eligible",
    //         NSW: "not-eligible",
    //         ACT: "eligible",
    //         QLD: "not-eligible",
    //     },
    //     "491": {
    //         NT: "eligible",
    //         VIC: "not-eligible",
    //         WA: "eligible",
    //         SA: "not-eligible",
    //         Tasmania: "eligible",
    //         NSW: "not-eligible",
    //         ACT: "eligible",
    //         QLD: "not-eligible",
    //     },
    // };

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
                <div className="relative" ref={dropdownRef}>
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
                            ref={inputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={() => {
                                if (searchResults.length > 0) {
                                    setIsDropdownOpen(true);
                                }
                            }}
                            className="flex-1 text-navy-blue-400 text-sm md:text-base font-medium bg-transparent outline-none"
                            placeholder="Search occupation..."
                        />
                        {isLoading && (
                            <div className="w-5 h-5 border-2 border-navy-blue border-t-transparent rounded-full animate-spin"></div>
                        )}
                        <button 
                            onClick={handleSearch}
                            className="hidden md:block bg-navy-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-navy-blue-600 transition-colors"
                        >
                            Search
                        </button>
                    </div>

                    {/* Dropdown Results */}
                    {isDropdownOpen && searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {searchResults.map((result, index) => (
                                <div
                                    key={result.id}
                                    onClick={() => handleOccupationSelect(result)}
                                    className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${
                                        index === selectedIndex ? 'bg-gray-50' : ''
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-navy-blue">
                                                {result.title}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                ANZSCO: {result.code}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* No Results */}
                    {isDropdownOpen && searchResults.length === 0 && !isLoading && searchQuery.trim() && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <div className="px-4 py-3 text-center text-gray-500 text-sm">
                                No occupations found for &quot;{searchQuery}&quot;
                            </div>
                        </div>
                    )}
                </div>

                {/* Recent Searches */}
                {/* <div className="flex flex-col gap-3">
                    <h3 className="text-navy-blue-400 text-base font-semibold">
                        Recent Searches
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {recentSearches.map((search, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-[#F5F6FB] rounded-full cursor-pointer"
                                onClick={() => setSearchQuery(search)}
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
                </div> */}
            </motion.div>

            {/* ANZSCO */}
            {occupationDetails && selectedOccupation && (
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
                                {selectedOccupation.code}
                            </span>
                        </div>
                        <h1 className="text-navy-blue text-xl md:text-2xl font-semibold whitespace-nowrap">
                            {selectedOccupation.title}
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
            )}

            {occupationDetails && <div className="flex flex-col-reverse lg:flex-row gap-8 pt-4">
                {/* Main Content */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 flex flex-col gap-8 w-full lg:w-2/3 min-w-0"
                >
                    <VisaType visaTypes={visaEligibility || []} />
                    <StateEligibility stateEligibility={stateEligibility || {}} />
                    <EOIStatistics chartColors={chartColors} />
                </motion.div>

                {/* Sidebar */}
                {selectedOccupation && (
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
                                        {selectedOccupation.code}
                                    </span>
                                </div>
                            </div>
                            <span className="text-neutrals-600 text-xs md:text-sm">
                                {selectedOccupation.title}
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
                )}
            </div>}
        </div>
    );
};

export default OccupationTracking;
