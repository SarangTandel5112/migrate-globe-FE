"use client";
import TitleDescription from "@/components/common/TitleDescription";
import CalendarIcon from "@/components/icons/Calendar";
import ComparisonTable from "@/components/insurance/comparison-table";
import React, { useRef, useState } from "react";

const InsuranceComparisonPage: React.FC = () => {
    const [formData, setFormData] = useState({
        adults: "",
        dependants: "",
        policyStart: "",
        policyEnd: "",
    });
    const policyStartDateRef = useRef<HTMLInputElement>(null);
    const policyEndDateRef = useRef<HTMLInputElement>(null);

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {/* Adults */}
                        <div className="flex flex-col gap-2">
                            <label className="text-neutrals text-sm font-semibold tracking-[0.24px] capitalize">
                                Adults
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.adults}
                                    onChange={(e) => handleInputChange("adults", e.target.value)}
                                    className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                                >
                                    <option value="" disabled>Adults</option>
                                    <option value="1">1 Adult</option>
                                    <option value="2">2 Adults</option>
                                    <option value="3">3 Adults</option>
                                    <option value="4">4 Adults</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="w-3 h-2">
                                        <path d="M1.35156 1.2L6.15156 6L10.9516 1.2" stroke="#7D87AB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Dependants */}
                        <div className="flex flex-col gap-2">
                            <label className="text-neutrals text-sm font-semibold tracking-[0.24px] capitalize">
                                Dependants
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.dependants}
                                    onChange={(e) => handleInputChange("dependants", e.target.value)}
                                    className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                                >
                                    <option value="" disabled>Dependants</option>
                                    <option value="0">No Dependants</option>
                                    <option value="1">1 Dependant</option>
                                    <option value="2">2 Dependants</option>
                                    <option value="3">3 Dependants</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="w-3 h-2">
                                        <path d="M1.10156 1.2L5.90156 6L10.7016 1.2" stroke="#7D87AB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Policy Start */}
                        <div className="flex flex-col gap-2">
                            <label className="text-neutrals text-sm font-semibold tracking-[0.24px] capitalize">
                                Policy Start
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={formData.policyStart}
                                    onChange={(e) => handleInputChange("policyStart", e.target.value)}
                                    ref={policyStartDateRef}
                                    className="w-full px-3 py-2.5 pr-10 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue focus:outline-none focus:border-navy-blue-300 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:pointer-events-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy-blue hover:text-navy-blue-600 transition-colors"
                                    onClick={() => {
                                        const input = policyStartDateRef.current as HTMLInputElement & { showPicker?: () => void };
                                        if (input?.showPicker) {
                                            input.showPicker();
                                        } else {
                                            input?.click();
                                        }
                                    }}
                                >
                                    <CalendarIcon />
                                </button>
                            </div>
                        </div>

                        {/* Policy End */}
                        <div className="flex flex-col gap-2">
                            <label className="text-neutrals text-sm font-semibold tracking-[0.24px] capitalize">
                                Policy End
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={formData.policyEnd}
                                    onChange={(e) => handleInputChange("policyEnd", e.target.value)}
                                    ref={policyEndDateRef}
                                    className="w-full px-3 py-2.5 pr-10 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue focus:outline-none focus:border-navy-blue-300 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:pointer-events-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy-blue hover:text-navy-blue-600 transition-colors"
                                    onClick={() => {
                                        const input = policyEndDateRef.current as HTMLInputElement & { showPicker?: () => void };
                                        if (input?.showPicker) {
                                            input.showPicker();
                                        } else {
                                            input?.click();
                                        }
                                    }}
                                >
                                    <CalendarIcon />
                                </button>
                            </div>
                        </div>

                        {/* Get Quote Button */}
                        <div className="flex items-end col-span-1 md:col-span-2 lg:col-span-1">
                            <button className="w-full bg-navy-blue text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-navy-blue-600 transition-colors tracking-[0.46px]">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>


                {/* Comparison Table */}
                <ComparisonTable />
            </div>
        </div>
    );
};

export default InsuranceComparisonPage;
