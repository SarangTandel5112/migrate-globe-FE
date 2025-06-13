"use client";

import TitleDescription from "@/components/common/TitleDescription";
import CheckIcon from "@/components/icons/CheckIcon";
import React, { useState } from "react";

const InsuranceComparisonPage: React.FC = () => {
    const [formData, setFormData] = useState({
        adults: "",
        dependants: "",
        policyStart: "",
        policyEnd: "",
    });

    const insuranceProviders = [
        {
            name: "ZURICH",
            price: "$641.79",
            logo: "/images/zurich-logo.png", // You'll need to add actual logos
        },
        {
            name: "BUPA",
            price: "$641.79",
            logo: "/images/bupa-logo.png",
        },
        {
            name: "NIB",
            price: "$641.79",
            logo: "/images/nib-logo.png",
        },
        {
            name: "VIG",
            price: "$641.79",
            logo: "/images/vig-logo.png",
        },
        {
            name: "WINNER",
            price: "$641.79",
            logo: "/images/winner-logo.png",
        },
    ];

    const features = [
        {
            name: "Public Hospital",
            type: "checkmark",
            values: [true, true, true, true, true],
        },
        {
            name: "Private Hospital",
            type: "checkmark",
            values: [true, true, true, true, true],
        },
        {
            name: "Private Room",
            type: "checkmark",
            values: [true, true, true, true, true],
        },
        {
            name: "Ambulance Services",
            type: "checkmark",
            values: [true, true, true, true, true],
        },
        {
            name: "Prescription Medicines",
            type: "checkmark",
            values: [true, true, true, true, true],
        },
        {
            name: "Psychiatric Conditions",
            type: "text",
            values: [
                "2 Months",
                "2 Months",
                "2 Months",
                "2 Months",
                "2 Months",
            ],
        },
        {
            name: "Pregnancy Coverage",
            type: "text",
            values: [
                "12 Months",
                "12 Months",
                "12 Months",
                "12 Months",
                "12 Months",
            ],
        },
        {
            name: "Other Pre-Existing",
            type: "text",
            values: [
                "2 Months",
                "2 Months",
                "2 Months",
                "2 Months",
                "2 Months",
            ],
        },
        {
            name: "Refund Policy",
            type: "text",
            values: [
                "Online Only",
                "Online Only",
                "Online Only",
                "Online Only",
                "Online Only",
            ],
        },
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="container-1200">
            <div className="flex flex-col gap-8 md:gap-10">
                {/* Header Section */}
                <TitleDescription
                    title="Compare & Choose the Best Insurance for Your Australian
                        Journey"
                    description="Select your preferences and compare top policies from trusted providers. Find the one that fits your budget and coverage needs best."
                />

                {/* Form Section */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutrals-200">
                    <div className="flex flex-col lg:flex-row gap-4 items-end">
                        {/* Adults Dropdown */}
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-neutrals-500 text-sm font-semibold tracking-[0.24px] capitalize">
                                Adults
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.adults}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "adults",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                                >
                                    <option value="" disabled>
                                        Adults
                                    </option>
                                    <option value="1">1 Adult</option>
                                    <option value="2">2 Adults</option>
                                    <option value="3">3 Adults</option>
                                    <option value="4">4 Adults</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="12"
                                        height="7"
                                        viewBox="0 0 12 7"
                                        fill="none"
                                        className="w-3 h-2"
                                    >
                                        <path
                                            d="M1.35156 1.2L6.15156 6L10.9516 1.2"
                                            stroke="#7D87AB"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Dependants Dropdown */}
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-neutrals-500 text-sm font-semibold tracking-[0.24px] capitalize">
                                Dependants
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.dependants}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "dependants",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                                >
                                    <option value="" disabled>
                                        Adults
                                    </option>
                                    <option value="0">No Dependants</option>
                                    <option value="1">1 Dependant</option>
                                    <option value="2">2 Dependants</option>
                                    <option value="3">3 Dependants</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="12"
                                        height="7"
                                        viewBox="0 0 12 7"
                                        fill="none"
                                        className="w-3 h-2"
                                    >
                                        <path
                                            d="M1.10156 1.2L5.90156 6L10.7016 1.2"
                                            stroke="#7D87AB"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Policy Start Date */}
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-neutrals-500 text-sm font-semibold tracking-[0.24px] capitalize">
                                Policy Start
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={formData.policyStart}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "policyStart",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-neutrals-200 focus:outline-none focus:border-navy-blue-300"
                                    placeholder="Adults"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            d="M14.2512 1.2H3.05117C2.16752 1.2 1.45117 1.91634 1.45117 2.8V14C1.45117 14.8837 2.16752 15.6 3.05117 15.6H14.2512C15.1348 15.6 15.8512 14.8837 15.8512 14V2.8C15.8512 1.91634 15.1348 1.2 14.2512 1.2Z"
                                            stroke="#7D87AB"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1.45117 1H15.8512"
                                            stroke="#7D87AB"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Policy End Date */}
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-neutrals-500 text-sm font-semibold tracking-[0.24px] capitalize">
                                Policy Ends
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={formData.policyEnd}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "policyEnd",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-neutrals-200 focus:outline-none focus:border-navy-blue-300"
                                    placeholder="Adults"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            d="M14.0012 1.2H2.80117C1.91752 1.2 1.20117 1.91634 1.20117 2.8V14C1.20117 14.8837 1.91752 15.6 2.80117 15.6H14.0012C14.8848 15.6 15.6012 14.8837 15.6012 14V2.8C15.6012 1.91634 14.8848 1.2 14.0012 1.2Z"
                                            stroke="#7D87AB"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1.20117 1H15.6012"
                                            stroke="#7D87AB"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Get Quote Button */}
                        <button className="bg-navy-blue text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-navy-blue-600 transition-colors tracking-[0.46px]">
                            Get Quote
                        </button>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-2xl border border-neutrals-200 shadow-sm overflow-hidden">
                    {/* Header Row */}
                    <div className="flex border-b border-neutrals-200">
                        {/* Features Column */}
                        <div className="flex-1 p-6 border-r border-neutrals-200 bg-white">
                            <h3 className="text-navy-blue text-base font-semibold tracking-[0.2px] capitalize">
                                Features
                            </h3>
                        </div>

                        {/* Provider Columns */}
                        {insuranceProviders.map((provider, index) => (
                            <div
                                key={index}
                                className="flex-1 p-3 md:p-5 border-r last:border-r-0 border-neutrals-200 bg-white"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    {/* Logo placeholder - you'll need to add actual logos */}
                                    <div className="w-12 h-12 md:w-16 md:h-12 bg-neutrals-100 rounded flex items-center justify-center">
                                        <span className="text-xs text-neutrals-500">
                                            Logo
                                        </span>
                                    </div>

                                    {/* Provider name and price */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-1">
                                        <h4 className="text-navy-blue text-sm md:text-base font-semibold tracking-[0.2px] capitalize text-center md:text-left">
                                            {provider.name}
                                        </h4>
                                        <span className="text-navy-blue-400 text-xs font-semibold tracking-[0.2px] capitalize text-center md:text-right">
                                            ({provider.price})
                                        </span>
                                    </div>

                                    {/* Purchase button */}
                                    <button className="w-full bg-navy-blue text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-navy-blue-600 transition-colors tracking-[0.608px] capitalize">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Rows */}
                    {features.map((feature, featureIndex) => (
                        <div
                            key={featureIndex}
                            className="flex border-b last:border-b-0 border-neutrals-200"
                        >
                            {/* Feature Name */}
                            <div className="flex-1 p-6 border-r border-neutrals-200 bg-white">
                                <h4 className="text-navy-blue text-base font-bold tracking-[0.2px] capitalize">
                                    {feature.name}
                                </h4>
                            </div>

                            {/* Feature Values */}
                            {feature.values.map((value, valueIndex) => (
                                <div
                                    key={valueIndex}
                                    className="flex-1 p-6 border-r last:border-r-0 border-neutrals-200 bg-white"
                                >
                                    <div className="flex justify-center items-center">
                                        {feature.type === "checkmark" ? (
                                            value ? (
                                                <CheckIcon />
                                            ) : (
                                                <div className="w-6 h-6"></div>
                                            )
                                        ) : (
                                            <span className="text-navy-blue text-base font-bold tracking-[0.2px] capitalize text-center">
                                                {value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsuranceComparisonPage;
