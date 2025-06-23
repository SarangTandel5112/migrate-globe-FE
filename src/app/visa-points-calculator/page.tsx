"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import FillRadioIcon from "@/components/icons/FillRadioIcon";
import RadioButtonIcon from "@/components/icons/RadioButtonIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import CheckFillIcon from "@/components/icons/CheckFillIcon";
import CheckRoundIcon from "@/components/icons/CheckRoundIcon";
import { motion } from "framer-motion";

export default function VisaPointsCalculator() {
    const router = useRouter();
    const [selectedVisa, setSelectedVisa] = useState<string>("189");

    const visaOptions = [
        {
            id: "189",
            title: "Independent Visa (Subclass 189)",
            description: "You must have an occupation on the MLTSSL.",
        },
        {
            id: "190",
            title: "Skilled Nominated Visa (Subclass 190)",
            description:
                "Requires nomination by a State or Territory government. You must have an occupation on the MLTSSL or STSOL.",
        },
        {
            id: "491",
            title: "Skilled Regional (Provisional) Visa (Subclass 491)",
            description:
                "Requires nomination by a State or Territory government, or sponsorship by a suitable family member.You must have an occupation on the MLTSSL or STSOL or ROL.",
        },
    ];

    const checklistItems = [
        {
            id: "visa-subclass",
            label: "Visa Subclass",
            completed: true,
            points: "05",
        },
        { id: "age", label: "Age", completed: false },
        { id: "english-language", label: "English Language", completed: false },
        {
            id: "overseas-work",
            label: "Overseas Work Experience",
            completed: false,
        },
        {
            id: "australian-work",
            label: "Australian Work Experience",
            completed: false,
        },
        {
            id: "education",
            label: "Educational Qualifications",
            completed: false,
        },
        {
            id: "australian-education",
            label: "Australian Educational Qualification",
            completed: false,
        },
        {
            id: "specialist-education",
            label: "Specialist Educational Qualification",
            completed: false,
        },
        {
            id: "community-language",
            label: "Accredited Community Language",
            completed: false,
        },
        {
            id: "partner-qualifications",
            label: "Partner Qualifications",
            completed: false,
        },
        {
            id: "professional-year",
            label: "Professional Year in Australia",
            completed: false,
        },
    ];

    const totalScore = 5;
    const minimumScore = 65;
    const progressPercentage = (totalScore / 100) * 100;

    return (
        <div className="container-1200">
            {/* Header Section */}
            <div className="mb-8">
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
                >
                    <BackIcon />
                    <span className="font-semibold text-base text-navy-blue capitalize tracking-[0.2px]">
                        Back
                    </span>
                </button>

                <h1 className="font-semibold text-heading1 text-navy-blue tracking-[0.608px]">
                    Visa Points Calculator
                </h1>
            </div>

            {/* Main Content */}
            {/* <div className="flex flex-col lg:flex-row gap-6 lg:gap-8"> */}
            <motion.div
                className="flex flex-col lg:flex-row gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Left Column - Form Section */}
                <div className="flex-1">
                    <div className="bg-white rounded-2xl border border-white/80 backdrop-blur-[20px] p-6">
                        {/* Section Header */}
                        <div className="mb-6">
                            <h2 className="font-semibold text-heading1 text-neutrals-700 tracking-[0.608px] mb-1">
                                Choose Your Visa Subclass
                            </h2>
                            <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                                Select the visa type you are applying for:
                            </p>
                        </div>

                        {/* Visa Options */}
                        <div className="space-y-6 mb-8">
                            {visaOptions.map((option, index) => (
                                <motion.div
                                    key={option.id}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                >
                                    {/* Radio Button */}
                                    <div className="relative flex-shrink-0 w-6 h-6 mt-1">
                                        <input
                                            type="radio"
                                            id={option.id}
                                            name="visa-type"
                                            value={option.id}
                                            checked={selectedVisa === option.id}
                                            onChange={(e) =>
                                                setSelectedVisa(e.target.value)
                                            }
                                            className="sr-only"
                                        />
                                        <label
                                            htmlFor={option.id}
                                            className="cursor-pointer block w-full h-full"
                                        >
                                            {selectedVisa === option.id ? (
                                                <div className="relative">
                                                    <FillRadioIcon />
                                                </div>
                                            ) : (
                                                <div className="relative">
                                                    <RadioButtonIcon />
                                                </div>
                                            )}
                                        </label>
                                    </div>

                                    {/* Option Content */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-base text-neutrals-700 leading-6 tracking-[0.2px] capitalize mb-1">
                                            {option.title}
                                        </h3>
                                        <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                                            {option.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Next Button */}
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2.5 bg-navy-blue text-neutrals-0 px-6 py-2 rounded-[5px] hover:bg-navy-blue/90 transition-colors">
                                <span className="text-sm tracking-[0.46px]">
                                    Next
                                </span>
                                <div className="relative w-6 h-6">
                                    <ArrowRightIcon />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Progress and Checklist */}
                <div className="lg:w-80">
                    <div className="bg-white rounded-2xl p-4 space-y-6">
                        {/* Progress Circle */}
                        <div className="flex items-center gap-6">
                            <div className="relative w-25 h-25 flex-shrink-0">
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    className="transform -rotate-90"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="41.5"
                                        fill="none"
                                        stroke="#DCF3EB"
                                        strokeWidth="17"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="41.5"
                                        fill="none"
                                        stroke="#6FAC96"
                                        strokeWidth="17"
                                        strokeDasharray={`${progressPercentage * 2.6
                                            } ${260 - progressPercentage * 2.6}`}
                                        strokeLinecap="round"
                                        className="transition-all duration-500"
                                    />
                                </svg>
                            </div>

                            <div className="flex-1">
                                <div className="mb-2">
                                    <span className="text-base text-navy-blue-400 tracking-[0.2px]">
                                        Total Score:
                                    </span>
                                    <span className="text-2xl text-navy-blue-400 tracking-[0.2px] ml-1">
                                        {totalScore.toString().padStart(2, "0")}
                                    </span>
                                    <span className="text-base text-navy-blue-400 tracking-[0.2px] ml-1">
                                        Points
                                    </span>
                                </div>
                                <p className="text-xs text-navy-blue-200 tracking-[0.2px]">
                                    <span className="text-navy-blue-200">
                                        Minimum required score for most skilled
                                        visas
                                    </span>
                                    <span className="text-navy-blue-400">
                                        :{" "}
                                    </span>
                                    <span className="text-navy-blue font-medium">
                                        {minimumScore} points
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-0">
                            {checklistItems.map((item, index) => (
                                // <div
                                //     key={item.id}
                                //     className={`flex items-center justify-between p-3 rounded-lg ${item.completed ? "bg-background" : ""
                                //         }`}
                                // >
                                    <motion.div
                                        key={item.id}
                                        className={`flex items-center justify-between p-3 rounded-lg ${item.completed ? "bg-background" : ""}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                    >
                                    <div className="flex items-center gap-4">
                                        {/* Checkbox */}
                                        <div className="w-6 h-6 flex-shrink-0">
                                            {item.completed ? (
                                                <div className="relative w-6 h-6 bg-mint-green-600 rounded-full flex items-center justify-center">
                                                    <CheckFillIcon />
                                                </div>
                                            ) : (
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                                    <CheckRoundIcon />
                                                </div>
                                            )}
                                        </div>

                                        {/* Label */}
                                        <span
                                            className={`text-sm tracking-[0.2px] capitalize leading-6 ${item.completed
                                                    ? "text-navy-blue font-bold"
                                                    : "text-navy-blue-400"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Points Badge */}
                                    {item.completed && item.points && (
                                        <div className="w-6 h-6 bg-mint-green-50 rounded-xl flex items-center justify-center">
                                            <span className="font-bold text-xs text-mint-green-700 tracking-[0.2px] capitalize">
                                                {item.points}
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
