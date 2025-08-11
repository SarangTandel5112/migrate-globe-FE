"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, Variants, Easing } from "framer-motion";
import BackIcon from "@/components/icons/BackIcon";
import TitleDescription from "@/components/common/TitleDescription";
import MyImage from "@/ui/myImage";
import EducationIcon from "@assets/images/education.png";
import VloggerIcon from "@assets/images/vlogger.png";
import BusinessmanIcon from "@assets/images/businessman.png";

type QualificationLevel = "diploma" | "bachelors" | "masters" | "other";

const cubicBezier: Easing = [0.42, 0, 0.58, 1]; // Cast the array to Easing

const variants: Variants = {
    initial: (direction: number) => ({
        opacity: 0,
        y: direction > 0 ? 20 : -20,
    }),
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: cubicBezier, // ✅ properly typed now
        },
    },
    exit: (direction: number) => ({
        opacity: 0,
        y: direction > 0 ? -20 : 20,
        transition: {
            duration: 0.4,
            ease: cubicBezier, // ✅ properly typed now
        },
    }),
};
export default function SkillAssessment() {
    const router = useRouter();
    const totalSteps = 3;
    const [selectedQualification, setSelectedQualification] =
        useState<QualificationLevel>("diploma");
    const [workExperience, setWorkExperience] = useState<number>(14);
    const [formData, setFormData] = useState({ experience: "" });
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [direction, setDirection] = useState<number>(1); // 1 for next, -1 for back

    const qualifications = [
        { id: "diploma", label: "Diploma" },
        { id: "bachelors", label: "Bachelors" },
        { id: "masters", label: "Masters" },
        { id: "other", label: "Other" },
    ] as const;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setDirection(1);
            setCurrentStep((prev) => prev + 1);
        } else {
            console.log("Assessment completed:", {
                selectedQualification,
                workExperience,
                ...formData,
            });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setDirection(-1);
            setCurrentStep((prev) => prev - 1);
        } else {
            router.back();
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-10">
                <div className="w-full">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
                    >
                        <BackIcon />
                        <span className="font-bold text-base text-navy-blue capitalize tracking-[0.2px]">
                            Back
                        </span>
                    </button>
                </div>

                <div className="w-full space-y-2">
                    <TitleDescription
                        title="Skill Assessment"
                        description="Lorem ipsum dolor sit amet consectetur. Urna ullamcorper orci tortor sed morbi enim."
                    />
                </div>

                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-6 space-y-6">
                    <div className="text-right text-xs text-neutrals-700 capitalize font-bold tracking-wide">
                        Step {currentStep} of {totalSteps}
                    </div>

                    <div className="relative w-full h-[500px] overflow-hidden">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute w-full h-full flex flex-col items-center justify-center"
                            >
                                {currentStep === 1 && (
                                    <>
                                        <MyImage
                                            src={EducationIcon}
                                            alt="education"
                                            className="w-40 h-40 mb-6"
                                        />
                                        <h2 className="text-xl font-bold text-center text-navy-blue mb-6">
                                            Your Qualification
                                        </h2>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                            {qualifications.map((q) => (
                                                <button
                                                    key={q.id}
                                                    onClick={() =>
                                                        setSelectedQualification(
                                                            q.id
                                                        )
                                                    }
                                                    className={`px-4 py-2 rounded-full border transition-all ${
                                                        selectedQualification ===
                                                        q.id
                                                            ? "bg-navy-blue text-white"
                                                            : "bg-gray-200 text-neutrals hover:bg-gray-300"
                                                    }`}
                                                >
                                                    {q.label}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {currentStep === 2 && (
                                    <>
                                        <MyImage
                                            src={VloggerIcon}
                                            alt="experience"
                                            className="w-40 h-40 mb-6"
                                        />
                                        <h2 className="text-xl font-bold text-center text-navy-blue mb-6">
                                            Work Experience
                                        </h2>
                                        <div className="flex items-center gap-4 w-full">
                                            <div className="relative flex-1">
                                                <div className="h-2 bg-gray-200 rounded-full">
                                                    <div
                                                        className="h-2 bg-navy-blue rounded-full"
                                                        style={{
                                                            width: `${
                                                                (workExperience /
                                                                    30) *
                                                                100
                                                            }%`,
                                                        }}
                                                    />
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="30"
                                                    value={workExperience}
                                                    onChange={(e) =>
                                                        setWorkExperience(
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                    className="absolute inset-0 w-full h-full opacity-0"
                                                />
                                            </div>
                                            <div className="min-w-[100px] text-center">
                                                <span className="text-xl font-semibold text-neutrals-700">
                                                    {workExperience}
                                                </span>{" "}
                                                <span className="text-gray-500">
                                                    years
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {currentStep === 3 && (
                                    <>
                                        <MyImage
                                            src={BusinessmanIcon}
                                            alt="field"
                                            className="w-40 h-40 mb-6"
                                        />
                                        <h2 className="text-xl font-bold text-center text-navy-blue mb-6">
                                            Field of Experience
                                        </h2>
                                        <select
                                            value={formData.experience}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    experience: e.target.value,
                                                }))
                                            }
                                            className="w-full border rounded px-3 py-2 text-base text-neutrals-700 border-neutral-700"
                                        >
                                            <option value="" disabled>
                                                Select Field
                                            </option>
                                            <option value="1">1+</option>
                                            <option value="2">2+</option>
                                            <option value="3">3+</option>
                                            <option value="4">4+</option>
                                        </select>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-full h-px bg-neutrals-100"></div>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleBack}
                            className="py-2 px-5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="py-2 px-5 bg-navy-blue text-white rounded text-sm hover:bg-navy-blue/90"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
