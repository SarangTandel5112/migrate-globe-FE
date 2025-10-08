"use client";
import React, { useEffect, useState, useMemo } from "react";
import { usePlatformInput } from "@/hooks/usePlatformInput";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Toast from "@/ui/toast";
import { Country, searchCountries } from "@/utils/countries";

type FormDataType = {
    firstName: string;
    lastName: string;
    emailId: string;
    phone: string;
    country: string;
};

type ZoomBookFormProps = {
    formData: FormDataType;
    handleInputChange: (field: keyof FormDataType, value: string) => void;
    handleBookSlot: () => void;
    isFormValid: boolean;
    isBooking?: boolean;
    bookingError?: string | null;
    countries: Country[];
};

const ZoomBookForm: React.FC<ZoomBookFormProps> = ({
    formData,
    handleInputChange,
    handleBookSlot,
    isFormValid,
    isBooking = false,
    bookingError = null,
    countries,
}) => {
    const { inputType } = usePlatformInput();
    const [showToast, setShowToast] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<object | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(
        null
    );
    const [selectedPhoneCountry, setSelectedPhoneCountry] =
        useState<Country | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
    const [phoneSearchQuery, setPhoneSearchQuery] = useState("");
    const [isPhoneSearching, setIsPhoneSearching] = useState(false);
    const dropdownRef = useOutsideClick<HTMLDivElement>(() =>
        setShowDropdown(false)
    );
    const phoneDropdownRef = useOutsideClick<HTMLDivElement>(() =>
        setShowPhoneDropdown(false)
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedData = localStorage?.getItem("token");
            const storedUserData = localStorage?.getItem("user");
            if (storedData) setToken(storedData);
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                setUser(userData);

                // Pre-fill form with user data
                if (userData) {
                    handleInputChange("firstName", userData.firstName || "");
                    handleInputChange("lastName", userData.lastName || "");
                    handleInputChange("emailId", userData.email || "");
                    handleInputChange("phone", userData.phone || "");

                    // Handle country selection
                    const countryName = userData.country || "India";
                    handleInputChange("country", countryName);

                    // Find and set the selected country object
                    const countryObj = countries.find(
                        (c) => c.name === countryName
                    );
                    if (countryObj) {
                        setSelectedCountry(countryObj);
                        setSelectedPhoneCountry(countryObj); // Sync phone country
                        setSearchQuery(countryObj.name);
                    } else {
                        setSearchQuery(countryName);
                        // Set default phone country to India if no country found
                        const defaultPhoneCountry = countries.find(
                            (c) => c.name === "India"
                        );
                        if (defaultPhoneCountry) {
                            setSelectedPhoneCountry(defaultPhoneCountry);
                        }
                    }
                } else {
                    // Set default phone country to India when no user data
                    const defaultPhoneCountry = countries.find(
                        (c) => c.name === "India"
                    );
                    if (defaultPhoneCountry) {
                        setSelectedPhoneCountry(defaultPhoneCountry);
                    }
                }
            }
        }
    }, [countries]); // Add countries dependency to handle country selection when countries load

    const filteredCountries = useMemo(
        () =>
            isSearching ? searchCountries(countries, searchQuery) : countries,
        [countries, searchQuery, isSearching]
    );

    const filteredPhoneCountries = useMemo(() => {
        if (!isPhoneSearching || !phoneSearchQuery.trim()) {
            return countries;
        }
        const lowercaseQuery = phoneSearchQuery.toLowerCase();
        return countries.filter(
            (country) =>
                country.name?.toLowerCase().includes(lowercaseQuery) ||
                country.phone_code?.toLowerCase().includes(lowercaseQuery) ||
                country.iso2?.toLowerCase().includes(lowercaseQuery)
        );
    }, [countries, phoneSearchQuery, isPhoneSearching]);

    const userProfile = user || token;

    // Helper function to sync phone country when main country changes
    const handleCountrySelect = (countryOption: Country) => {
        setSearchQuery(countryOption.name);
        setSelectedCountry(countryOption);
        setSelectedPhoneCountry(countryOption); // Sync phone country
        handleInputChange("country", countryOption.name);
        setShowDropdown(false);
        setIsSearching(false);
    };

    // Helper function to sync main country when phone country changes
    const handlePhoneCountrySelect = (countryOption: Country) => {
        setSelectedPhoneCountry(countryOption);
        // Also sync with main country selection
        setSelectedCountry(countryOption);
        setSearchQuery(countryOption.name);
        handleInputChange("country", countryOption.name);
        setShowPhoneDropdown(false);
        setPhoneSearchQuery(""); // Clear phone search
        setIsPhoneSearching(false);
    };

    const handleBookingClick = () => {
        if (!userProfile) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            // Dispatch event to open login modal
            window.dispatchEvent(new Event("open-login-modal"));
            return;
        }
        handleBookSlot();
    };
    return (
        <div className="lg:w-80 h-full">
            <div className="bg-white rounded-xl p-4 space-y-6">
                {/* First Name */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
                        First Name
                    </label>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                        }
                        placeholder="Enter First Name"
                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] text-navy-blue focus:outline-none focus:border-navy-blue"
                    />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
                        Last Name
                    </label>
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Enter Last Name"
                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] text-navy-blue focus:outline-none focus:border-navy-blue"
                    />
                </div>

                {/* Email ID */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
                        Email ID
                    </label>
                    <input
                        type="email"
                        value={formData.emailId}
                        onChange={(e) =>
                            handleInputChange("emailId", e.target.value)
                        }
                        placeholder="Enter Email ID"
                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] text-navy-blue focus:outline-none focus:border-navy-blue"
                    />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                    <label className="block font-urbanist font-bold text-sm text-[#333] leading-6">
                        Phone number
                    </label>
                    <div className="flex gap-1">
                        {/* Country Code Selector */}
                        <div className="relative" ref={phoneDropdownRef}>
                            <div className="relative">
                                {selectedPhoneCountry?.flag &&
                                    !isPhoneSearching && (
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sm z-10">
                                            {selectedPhoneCountry.flag}
                                        </span>
                                    )}
                                <input
                                    type="text"
                                    value={
                                        phoneSearchQuery ||
                                        selectedPhoneCountry?.phone_code ||
                                        "+91"
                                    }
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setPhoneSearchQuery(value);
                                        setIsPhoneSearching(value.length > 0);
                                        setShowPhoneDropdown(true);
                                    }}
                                    onFocus={() => {
                                        if (!phoneSearchQuery.trim()) {
                                            setIsPhoneSearching(false);
                                        }
                                        setShowPhoneDropdown(true);
                                    }}
                                    onBlur={() => {
                                        setTimeout(() => {
                                            setShowPhoneDropdown(false);
                                            setIsPhoneSearching(false);
                                            setPhoneSearchQuery("");
                                        }, 200);
                                    }}
                                    placeholder="Search code..."
                                    className={`w-auto py-2.5 px-2 border border-[#D3D3D3] bg-[#F7F8FD] rounded font-urbanist text-sm text-[#333] tracking-[0.24px] hover:border-navy-blue focus:outline-none focus:border-navy-blue transition-colors min-w-[40px] max-w-[80px] ${
                                        selectedPhoneCountry?.flag &&
                                        !isPhoneSearching
                                            ? "pl-7"
                                            : "pl-2"
                                    }`}
                                />
                                <div
                                    className="absolute inset-y-0 right-1 flex items-center cursor-pointer"
                                    onClick={() => {
                                        setPhoneSearchQuery("");
                                        setIsPhoneSearching(false);
                                        setShowPhoneDropdown(
                                            !showPhoneDropdown
                                        );
                                    }}
                                >
                                    <svg
                                        className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
                                            showPhoneDropdown
                                                ? "rotate-180"
                                                : "rotate-0"
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
                            {showPhoneDropdown && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-100">
                                    {filteredPhoneCountries.length > 0 ? (
                                        filteredPhoneCountries.map(
                                            (countryOption) => (
                                                <button
                                                    key={countryOption.id}
                                                    onMouseDown={(e) => {
                                                        e.preventDefault(); // Prevent input blur
                                                    }}
                                                    onClick={() => {
                                                        handlePhoneCountrySelect(
                                                            countryOption
                                                        );
                                                    }}
                                                    className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex items-center gap-2 text-gray-800 transition-colors duration-150"
                                                >
                                                    {countryOption.flag && (
                                                        <span className="text-sm transform transition-transform duration-150 hover:scale-110">
                                                            {countryOption.flag}
                                                        </span>
                                                    )}
                                                    <span className="font-medium text-xs min-w-[35px]">
                                                        {
                                                            countryOption.phone_code
                                                        }
                                                    </span>
                                                </button>
                                            )
                                        )
                                    ) : (
                                        <div className="px-3 py-2 text-gray-500 text-center">
                                            {isPhoneSearching ? (
                                                <div>
                                                    No countries found for
                                                    &ldquo;{phoneSearchQuery}
                                                    &rdquo;
                                                    <br />
                                                    <span className="text-sm text-gray-400">
                                                        Try searching by country
                                                        name, phone code, or
                                                        country code
                                                    </span>
                                                </div>
                                            ) : (
                                                "No countries available"
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Phone Input */}
                        <input
                            type={inputType}
                            value={formData.phone}
                            maxLength={10}
                            onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                            }
                            placeholder="123 456 7890"
                            className="flex-1 py-2.5 px-4 border w-full border-[#D3D3D3] bg-[#F7F8FD] rounded font-urbanist font-bold text-base placeholder:text-[#C0C0C0] text-navy-blue leading-6 focus:outline-none focus:border-navy-blue"
                        />
                    </div>
                </div>

                {/* Country */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
                        Country
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
                                    if (
                                        selectedCountry &&
                                        value !== selectedCountry.name
                                    ) {
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
                                placeholder={
                                    selectedCountry
                                        ? selectedCountry.name
                                        : "Select your country..."
                                }
                                className={`w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] text-navy-blue focus:outline-none focus:border-navy-blue transition-all duration-200 ${
                                    selectedCountry?.flag ? "pl-12" : "pl-3"
                                }`}
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
                                                        handleCountrySelect(
                                                            countryOption
                                                        );
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
                                                    No countries found for
                                                    &ldquo;{searchQuery}&rdquo;
                                                    <br />
                                                    <span className="text-sm text-gray-400">
                                                        Try a different search
                                                        term
                                                    </span>
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

                {/* Error Message */}
                {bookingError && (
                    <div className="text-red-500 text-sm font-urbanist text-center">
                        {bookingError}
                    </div>
                )}

                {/* Book Slot Button */}
                <button
                    onClick={handleBookingClick}
                    disabled={!isFormValid || isBooking}
                    className={`w-full h-10 rounded-md font-urbanist text-sm tracking-[0.46px] transition-all ${
                        isFormValid && !isBooking
                            ? "bg-navy-blue text-white hover:bg-navy-blue/90"
                            : "bg-[#D3D3D3] text-[#696969] cursor-not-allowed"
                    }`}
                >
                    {isBooking ? "Booking..." : "Book slot"}
                </button>
            </div>
            <Toast
                message="Please login to book a slot"
                type="error"
                isOpen={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
};

export default ZoomBookForm;
