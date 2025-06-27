"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackIcon from "@/components/icons/BackIcon";
import UserIcon from "@/components/icons/UserIcon";
import BreifCaseIcon from "@/components/icons/BreifCaseIcon";
import ApplicationTypeButton from "@/components/checklist/ApplicationTypeButton";
import VisaOption from "@/components/checklist/VisaOption";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import TitleDescription from "@/components/common/TitleDescription";
import { fadeUpVariants } from "@/utils/animation-variant";

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

const CheckList: React.FC = () => {
    const router = useRouter();
    const [selectedEnquiryType, setSelectedEnquiryType] = useState<
        "individual" | "business" | null
    >("individual");
    const [selectedVisaCategory, setSelectedVisaCategory] =
        useState<string>("");

    return (
        <div className="flex flex-col gap-8">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
            >
                <BackIcon />
                <span className="font-urbanist font-semibold text-base text-navy-blue capitalize tracking-[0.2px]">
                    Back
                </span>
            </button>

            <TitleDescription
                title="Buy Documents Checklists"
                description="Lorem ipsum dolor sit amet consectetur. Urna ullamcorper orci tortor sed morbi enim."
            />

            {/* ✅ Animate This Card */}
            <motion.div
                className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6 md:gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariants}
                custom={0}
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                        Select Enquiry Type
                    </h2>
                    <div className="grid grid-cols-12 gap-4">
                        {ENQUIRY_OPTIONS.map((option) => (
                            <ApplicationTypeButton
                                key={option.type}
                                selected={selectedEnquiryType === option.type}
                                onClick={() =>
                                    setSelectedEnquiryType(
                                        option.type as "individual" | "business"
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
            </motion.div>

            {/* ✅ Animate Visa Options - With Stagger */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delayChildren: 0.4, // Increase initial delay
                            staggerChildren: 0.25, // More delay between children for slower stagger
                            duration: 0.8, // Add duration for the parent
                            ease: [0.25, 0.1, 0.25, 1], // Smooth easing (equivalent to ease-out)
                        },
                    },
                }}
                className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6"
            >
                <h2 className="text-navy-blue text-heading1 font-semibold tracking-[0.608px]">
                    Distinguished Talent Visa
                </h2>

                <div className="flex flex-col gap-6">
                    {VISA_OPTIONS.map((visa, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        ease: "easeOut",
                                        delay: index * 0.15,
                                    },
                                },
                            }}
                        >
                            <VisaOption
                                title={visa.title}
                                description={visa.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default CheckList;
