"use client";
import React, { useState, useMemo } from "react";
import { FeatureGridProps } from "@/utils/interface";
import { useRouter } from "next/navigation";
import { Country, searchCountries } from "@/utils/countries";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const GetStartedForm = ({
    services,
    countries,
}: FeatureGridProps & { countries: Country[] }) => {
    // Memoize service options to prevent recalculation on every render
    const serviceOptions = useMemo(() => 
        services.map((service) => ({
            label: service?.title,
            value: service?.key,
        })), [services]
    );

    const [service, setService] = useState(serviceOptions[0]?.value || "");
    const [selectedService, setSelectedService] = useState(serviceOptions[0] || { label: "", value: "" });
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();
    const dropdownRef = useOutsideClick<HTMLDivElement>(() =>
        setShowDropdown(false)
    );
    const serviceDropdownRef = useOutsideClick<HTMLDivElement>(() =>
        setShowServiceDropdown(false)
    );

    const filteredCountries = useMemo(() => 
        isSearching ? searchCountries(countries, searchQuery) : countries,
        [countries, searchQuery, isSearching]
    );

    const onGetStarted = () => {
        router.push(`/services/${service}`);
    };

    return (
        <div className="px-10 sm:px-16 hidden md:block">
            <div className="mt-10 bg-navy-blue text-white max-w-6xl mx-auto my-10 rounded-2xl px-6 py-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_auto] items-end gap-4 md:gap-0">
                    {/* Country Dropdown */}
                    <div className="px-2">
                        <label className="block text-sm mb-2 text-white font-medium">
                            I Am From?
                        </label>
                        <div className="relative w-full" ref={dropdownRef}>
                            <div className="relative">
                                {selectedCountry?.flag && (
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg z-10 animate-in fade-in-0 zoom-in-50 duration-200">
                                        {selectedCountry.flag}
                                    </span>
                                )}
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSearchQuery(value);
                                        setIsSearching(value.length > 0);
                                        // Clear selected country when user types something different
                                        if (selectedCountry && value !== selectedCountry.name) {
                                            setSelectedCountry(null);
                                        }
                                        setShowDropdown(true);
                                    }}
                                    onFocus={() => {
                                        // If no text in input, show all countries
                                        if (!searchQuery.trim()) {
                                            setIsSearching(false);
                                        }
                                        setShowDropdown(true);
                                    }}
                                    onBlur={() => {
                                        // Delay closing to allow for click events on dropdown items
                                        setTimeout(() => {
                                            setShowDropdown(false);
                                            setIsSearching(false);
                                        }, 200);
                                    }}
                                    placeholder="Select your country..."
                                    className={`w-full bg-white text-gray-800 rounded-lg ${
                                        selectedCountry?.flag ? "pl-12" : "pl-5"
                                    } pr-10 py-3 text-sm focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300`}
                                />
                                {showDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-100">
                                        {filteredCountries.length > 0 ? (
                                            filteredCountries.map(
                                                (countryOption) => (
                                                    <button
                                                        key={countryOption.id}
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // Prevent input blur
                                                        }}
                                                        onClick={() => {
                                                            setSearchQuery(countryOption.name);
                                                            setSelectedCountry(countryOption);
                                                            setShowDropdown(false);
                                                            setIsSearching(false);
                                                        }}
                                                        className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex items-center gap-2 text-gray-800 transition-colors duration-150"
                                                    >
                                                        {countryOption.flag && (
                                                            <span className="text-lg transform transition-transform duration-150 hover:scale-110">
                                                                {countryOption.flag}
                                                            </span>
                                                        )}
                                                        {countryOption.name}
                                                    </button>
                                                )
                                            )
                                        ) : (
                                            <div className="px-3 py-2 text-gray-500 text-center">
                                                {isSearching ? (
                                                    <div>
                                                        No countries found for &ldquo;{searchQuery}&rdquo;
                                                        <br />
                                                        <span className="text-sm text-gray-400">Try a different search term</span>
                                                    </div>
                                                ) : (
                                                    "No countries available"
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div
                                className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                                onClick={() => {
                                    // Clear search to show all countries
                                    setSearchQuery("");
                                    setIsSearching(false);
                                    setShowDropdown(!showDropdown);
                                }}
                            >
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        showDropdown ? "rotate-180" : "rotate-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider 1 */}
                    <div className="hidden md:block h-14 bg-white/40" />

                    {/* Service Dropdown */}
                    <div className="px-2">
                        <label className="block text-sm mb-2 text-white font-medium">
                            What Service Do You Need?
                        </label>
                        <div className="relative w-full" ref={serviceDropdownRef}>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={selectedService.label}
                                    readOnly
                                    onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                                    onFocus={() => setShowServiceDropdown(true)}
                                    className="w-full bg-white text-gray-800 rounded-lg pl-5 pr-10 py-3 text-sm focus:outline-none cursor-pointer transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300"
                                />
                                {showServiceDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-100">
                                        {serviceOptions.map((serviceOption) => (
                                            <button
                                                key={serviceOption.value}
                                                onMouseDown={(e) => {
                                                    e.preventDefault(); // Prevent input blur
                                                }}
                                                onClick={() => {
                                                    setSelectedService(serviceOption);
                                                    setService(serviceOption.value);
                                                    setShowServiceDropdown(false);
                                                }}
                                                className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-gray-800 transition-colors duration-150"
                                            >
                                                {serviceOption.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div
                                className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                                onClick={() => {
                                    setShowServiceDropdown(!showServiceDropdown);
                                }}
                            >
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        showServiceDropdown ? "rotate-180" : "rotate-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider 2 */}
                    <div className="hidden md:block h-14 bg-white/40" />

                    {/* Button */}
                    <div className="flex justify-center md:justify-end px-2">
                        <button
                            onClick={onGetStarted}
                            className="bg-mint-green text-black font-semibold px-6 py-3 rounded-lg text-sm hover:scale-105 transition-transform"
                        >
                            Get Started!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedForm;