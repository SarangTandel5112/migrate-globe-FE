"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import TitleDescription from "@/components/common/TitleDescription";
import MyImage from "@/ui/myImage";
import EducationIcon from "@assets/images/education.png";
import VloggerIcon from "@assets/images/vlogger.png";
import BusinessmanIcon from "@assets/images/businessman.png";

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
    const [formData, setFormData] = useState({
        experience: "",
    });

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

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="container-1200">
            <div className="flex flex-col items-center gap-10">
                {/* Back Button */}
                <div className="w-full">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
                    >
                        <BackIcon />
                        <span className="font-urbanist font-bold text-base text-navy-blue capitalize tracking-[0.2px]">
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
                        <span className="font-urbanist font-bold text-xs text-neutrals-700 tracking-[0.608px] capitalize">
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
                                        <MyImage
                                            src={EducationIcon}
                                            alt="education"
                                        />
                                    </div>
                                </div>

                                {/* Title and Options */}
                                <div className="w-full space-y-6">
                                    <h2 className="font-urbanist font-bold text-xl text-navy-blue text-center tracking-[0.24px] capitalize">
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
                                                        ? "bg-navy-blue text-white border-white"
                                                        : "bg-[#EDEDED] text-neutrals border-white hover:bg-[#D3D3D3]"
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
                                        <MyImage
                                            src={VloggerIcon}
                                            alt="vlogger-icon"
                                        />
                                    </div>
                                </div>

                                {/* Title and Slider */}
                                <div className="w-full space-y-6">
                                    <h2 className="font-urbanist font-bold text-xl text-navy-blue text-center tracking-[0.24px] capitalize">
                                        Work Experience
                                    </h2>

                                    {/* Slider Container */}
                                    <div className="flex items-center gap-6">
                                        {/* Slider */}
                                        <div className="flex-1 relative">
                                            <div className="w-full h-2 bg-[#EDEDED] rounded-full">
                                                <div
                                                    className="h-2 bg-navy-blue rounded-full relative"
                                                    style={{
                                                        width: `${
                                                            (workExperience /
                                                                30) *
                                                            100
                                                        }%`,
                                                    }}
                                                >
                                                    <div className="absolute -right-2.5 -top-1.5 w-5 h-5 bg-navy-blue border-2 border-white rounded-full shadow-lg cursor-pointer"></div>
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

                        {currentStep === 3 && (
                            <>
                                {/* Work Experience Icon */}
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Person with laptop icon */}
                                        <MyImage
                                            src={BusinessmanIcon}
                                            alt="vlogger-icon"
                                        />
                                    </div>
                                </div>

                                {/* Title and Slider */}
                                <div className="w-full space-y-6">
                                    <h2 className="font-urbanist font-bold text-xl text-navy-blue text-center tracking-[0.24px] capitalize">
                                        Field of Experience
                                    </h2>

                                    {/* Slider Container */}
                                    <div className="relative">
                                        <select
                                            value={formData.experience}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "experience",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-navy-blue appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                                        >
                                            <option value="" disabled>
                                                Select Field
                                            </option>
                                            <option value="1">1+</option>
                                            <option value="2">2+</option>
                                            <option value="3">3+</option>
                                            <option value="4">4+</option>
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
                            </>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-neutrals-100"></div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-5">
                        <button
                            onClick={handleBack}
                            className="py-2 px-6 border border-neutrals-300 text-neutrals-700 rounded-md font-urbanist text-sm tracking-[0.46px] hover:bg-[#F7F8FD] transition-colors"
                        >
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            className="py-2 px-6 bg-navy-blue text-white rounded-md font-urbanist text-sm tracking-[0.46px] hover:bg-navy-blue/90 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
