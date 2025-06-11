"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import TitleDescription from "@/components/common/TitleDescription";

type QualificationLevel = "diploma" | "bachelors" | "masters" | "other";

export default function SkillAssessment() {
    const router = useRouter();
    const [selectedQualification, setSelectedQualification] =
        useState<QualificationLevel>("diploma");
    const [workExperience, setWorkExperience] = useState<number>(14);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const totalSteps = 3;

    const qualifications: { id: QualificationLevel; label: string }[] = [
        { id: "diploma", label: "Diploma" },
        { id: "bachelors", label: "Bachelors" },
        { id: "masters", label: "Masters" },
        { id: "other", label: "Other" },
    ];

    const handleQualificationSelect = (qualification: QualificationLevel) => {
        setSelectedQualification(qualification);
    };

    const handleWorkExperienceChange = (value: number) => {
        setWorkExperience(value);
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else {
            // Handle final submission
            console.log("Assessment completed:", {
                selectedQualification,
                workExperience,
            });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else {
            router.back();
        }
    };

    return (
        <div className="container-1200">
            <div className="flex flex-col items-center gap-10">
                {/* Back Button */}
                <div className="w-full">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-[#263773] hover:opacity-75 transition-opacity"
                    >
                        <BackIcon />
                        <span className="font-urbanist font-bold text-base text-[#263773] capitalize tracking-[0.2px]">
                            Back
                        </span>
                    </button>
                </div>

                {/* Page Header */}
                <div className="w-full space-y-2">
                    <TitleDescription
                        title="Skill Assessment"
                        description="Lorem ipsum dolor sit amet consectetur. Urna ullamcorper orci tortor sed morbi enim."
                    />
                </div>

                {/* Assessment Card */}
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-6 space-y-6">
                    {/* Step Indicator */}
                    <div className="text-right">
                        <span className="font-urbanist font-bold text-xs text-[#333] tracking-[0.608px] capitalize">
                            Step {currentStep} of {totalSteps}
                        </span>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col items-center space-y-6">
                        {currentStep === 1 && (
                            <>
                                {/* Education Icon */}
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Graduation Cap Icon */}
                                        <svg
                                            width="128"
                                            height="128"
                                            viewBox="0 0 128 128"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-[#263773]"
                                        >
                                            <path
                                                d="M64 16L8 40L64 64L120 40L64 16Z"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                            />
                                            <path
                                                d="M24 56V88C24 96 44 104 64 104C84 104 104 96 104 88V56"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                            />
                                            <path
                                                d="M120 40V80"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        {/* Certificate/Diploma overlay */}
                                        <div className="absolute -bottom-4 -right-4 w-16 h-12 bg-[#6FAC96] rounded-sm flex items-center justify-center">
                                            <div className="w-3 h-6 bg-[#8BD7BC] rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Title and Options */}
                                <div className="w-full space-y-6">
                                    <h2 className="font-urbanist font-bold text-xl text-[#263773] text-center tracking-[0.24px] capitalize">
                                        Your Qualification
                                    </h2>

                                    {/* Qualification Options */}
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        {qualifications.map((qualification) => (
                                            <button
                                                key={qualification.id}
                                                onClick={() =>
                                                    handleQualificationSelect(
                                                        qualification.id
                                                    )
                                                }
                                                className={`px-4 py-3 rounded-full border transition-all duration-200 ${
                                                    selectedQualification ===
                                                    qualification.id
                                                        ? "bg-[#263773] text-white border-white"
                                                        : "bg-[#EDEDED] text-[#696969] border-white hover:bg-[#D3D3D3]"
                                                }`}
                                            >
                                                <span className="font-urbanist text-lg font-medium tracking-[0.608px] capitalize">
                                                    {qualification.label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                {/* Work Experience Icon */}
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Person with laptop icon */}
                                        <svg
                                            width="128"
                                            height="128"
                                            viewBox="0 0 128 128"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-[#263773]"
                                        >
                                            {/* Head */}
                                            <circle
                                                cx="64"
                                                cy="32"
                                                r="16"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                fill="none"
                                            />
                                            {/* Body */}
                                            <path
                                                d="M48 48C48 48 48 64 64 64C80 64 80 48 80 48"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                            {/* Arms */}
                                            <path
                                                d="M32 72L48 64L64 72"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M96 72L80 64L64 72"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        {/* Laptop overlay */}
                                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-[#6FAC96] rounded-sm flex items-center justify-center">
                                            <div className="w-16 h-10 bg-[#8BD7BC] rounded-sm flex items-center justify-center">
                                                <div className="w-3 h-3 bg-[#6FAC96] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Title and Slider */}
                                <div className="w-full space-y-6">
                                    <h2 className="font-urbanist font-bold text-xl text-[#263773] text-center tracking-[0.24px] capitalize">
                                        Work Experience
                                    </h2>

                                    {/* Slider Container */}
                                    <div className="flex items-center gap-6">
                                        {/* Slider */}
                                        <div className="flex-1 relative">
                                            <div className="w-full h-2 bg-[#EDEDED] rounded-full">
                                                <div
                                                    className="h-2 bg-[#263773] rounded-full relative"
                                                    style={{
                                                        width: `${
                                                            (workExperience /
                                                                30) *
                                                            100
                                                        }%`,
                                                    }}
                                                >
                                                    <div className="absolute -right-2.5 -top-1.5 w-5 h-5 bg-[#263773] border-2 border-white rounded-full shadow-lg cursor-pointer"></div>
                                                </div>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="30"
                                                value={workExperience}
                                                onChange={(e) =>
                                                    handleWorkExperienceChange(
                                                        parseInt(e.target.value)
                                                    )
                                                }
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                        </div>

                                        {/* Years Display */}
                                        <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm min-w-[120px]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-urbanist text-xl text-[#141414] font-medium">
                                                    {workExperience}
                                                </span>
                                                <span className="font-urbanist text-xl text-[#737373] ml-2">
                                                    years
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-[#EDEDED]"></div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-5">
                        <button
                            onClick={handleBack}
                            className="py-2 px-6 border border-[#C0C0C0] text-[#333] rounded-md font-urbanist text-sm tracking-[0.46px] hover:bg-[#F7F8FD] transition-colors"
                        >
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            className="py-2 px-6 bg-[#263773] text-white rounded-md font-urbanist text-sm tracking-[0.46px] hover:bg-[#263773]/90 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
