"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import UserIcon from "@/components/icons/UserIcon";
import BreifCaseIcon from "@/components/icons/BreifCaseIcon";
import ApplicationTypeButton from "@/components/checklist/ApplicationTypeButton";
import VisaOption from "@/components/checklist/VisaOption";
import ArrowDownIcon from "@/components/icons/ArrowDown";

const ENQUIRY_OPTIONS = [
    {
        type: "individual",
        Icon: UserIcon,
        title: "Individual",
        description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        type: "business",
        Icon: BreifCaseIcon,
        title: "Business",
        description: "Lorem ipsum dolor sit amet consectetur.",
    },
];

const VISA_OPTIONS = [
    {
        title: "Subclass 858 (Global Talent Visa - Permanent)",
        description:
            "Internationally recognized record of exceptional achievement in an eligible field; no age limit but applicants under 18 or over 55 must show exceptional benefit to Australia.",
    },
    {
        title: "Subclass 124 (Global Talent Visa - Offshore)",
        description:
            "Internationally recognized record of exceptional achievement in an eligible field; no age limit but applicants under 18 or over 55 must show exceptional benefit to Australia. For applicants outside Australia.",
    },
];

const VISA_CATEGORIES = [
    { value: "", label: "Find visa options", disabled: true },
    { value: "student", label: "Student Visa" },
    { value: "work", label: "Work Visa" },
    { value: "business", label: "Business Visa" },
    { value: "distinguished-talent", label: "Distinguished Talent Visa" },
];

const DocumentsChecklistsPage: React.FC = () => {
    const router = useRouter();
    const [selectedEnquiryType, setSelectedEnquiryType] = useState<
        "individual" | "business" | null
    >("individual");
    const [selectedVisaCategory, setSelectedVisaCategory] =
        useState<string>("");

    return (
        <div className="container-1200">
            <div className="flex flex-col gap-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
                >
                    <BackIcon />
                    <span className="font-urbanist font-semibold text-base text-navy-blue capitalize tracking-[0.2px]">
                        Back
                    </span>
                </button>

                <div className="flex flex-col gap-2">
                    <h1 className="text-heading1 text-navy-blue font-semibold tracking-[0.608px]">
                        Buy Documents Checklists
                    </h1>
                    <p className="text-navy-blue-400 text-description1 leading-6 tracking-[0.2px] capitalize">
                        Lorem ipsum dolor sit amet consectetur. Urna ullamcorper
                        orci tortor sed morbi enim.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6 md:gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                            Select Enquiry Type
                        </h2>
                        <div className="grid grid-cols-12 gap-4">
                            {ENQUIRY_OPTIONS.map((option) => (
                                <ApplicationTypeButton
                                    key={option.type}
                                    selected={
                                        selectedEnquiryType === option.type
                                    }
                                    onClick={() =>
                                        setSelectedEnquiryType(
                                            option.type as
                                                | "individual"
                                                | "business"
                                        )
                                    }
                                    Icon={option.Icon}
                                    title={option.title}
                                    description={option.description}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                            Select Visa Category Or Service Type
                        </label>
                        <div className="relative">
                            <select
                                value={selectedVisaCategory}
                                onChange={(e) =>
                                    setSelectedVisaCategory(e.target.value)
                                }
                                className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-neutrals-200 tracking-[0.24px] appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                            >
                                {VISA_CATEGORIES.map((option) => (
                                    <option
                                        key={option.value || "default"}
                                        value={option.value}
                                        disabled={option.disabled}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <ArrowDownIcon />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6">
                    <h2 className="text-navy-blue text-heading1 font-semibold tracking-[0.608px]">
                        Distinguished Talent Visa
                    </h2>
                    <div className="flex flex-col gap-6">
                        {VISA_OPTIONS.map((visa, index) => (
                            <VisaOption
                                key={index}
                                title={visa.title}
                                description={visa.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentsChecklistsPage;
