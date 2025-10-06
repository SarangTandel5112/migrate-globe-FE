"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, Variants, Easing } from "framer-motion";
import BackIcon from "@/components/icons/BackIcon";
import TitleDescription from "@/components/common/TitleDescription";
import MyImage from "@/ui/myImage";
import EducationIcon from "@assets/images/education.png";
import VloggerIcon from "@assets/images/vlogger.png";
import BusinessmanIcon from "@assets/images/businessman.png";
import SkillResults from "./SkillResults";
import {
    QualificationLevel,
    OccupationField,
    SkillResult,
    SkillAssessmentData,
    EnglishProficiency,
    CountryOfQualification,
} from "@/types/skillAssessment";
import { SkillAssessmentConfig } from "@/types/skillAssessmentConfig";
import {
    fetchSkillAssessments,
    fetchAssessmentConfig,
} from "@/api/skill-assessment";

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
    const [config, setConfig] = useState<SkillAssessmentConfig | null>(null);
    const [selectedQualification, setSelectedQualification] =
        useState<QualificationLevel>("diploma");
    const [workExperience, setWorkExperience] = useState<number>(5);
    const [selectedField, setSelectedField] = useState<OccupationField | "">(
        ""
    );
    const [englishProficiency, setEnglishProficiency] = useState<
        EnglishProficiency | ""
    >("");
    const [countryOfQualification, setCountryOfQualification] = useState<
        CountryOfQualification | ""
    >("");
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [direction, setDirection] = useState<number>(1); // 1 for next, -1 for back
    const [skillsData, setSkillsData] = useState<SkillAssessmentData | null>(
        null
    );
    const [filteredResults, setFilteredResults] = useState<SkillResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Calculate total steps based on config or default
    const totalSteps = config?.totalSteps || 6;

    const qualifications = [
        { id: "diploma", label: "Diploma" },
        { id: "bachelors", label: "Bachelors" },
        { id: "masters", label: "Masters" },
        { id: "other", label: "Other" },
    ] as const;

    const occupationFields: { id: OccupationField; label: string }[] = [
        { id: "ICT", label: "Information & Communication Technology" },
        { id: "Engineering", label: "Engineering" },
        { id: "Healthcare", label: "Healthcare & Medical" },
        { id: "Trades", label: "Trades & Construction" },
        { id: "Education", label: "Education & Teaching" },
        { id: "Business", label: "Business & Management" },
        { id: "Accounting", label: "Accounting & Finance" },
        { id: "Hospitality", label: "Hospitality & Tourism" },
        { id: "Social Services", label: "Social Services" },
        { id: "Other", label: "Other Professions" },
    ];

    const englishLevels: {
        id: EnglishProficiency;
        label: string;
        description: string;
    }[] = [
        {
            id: "native",
            label: "Native English Speaker",
            description: "Born in English-speaking country or exempt",
        },
        {
            id: "superior",
            label: "Superior (IELTS 8.0+)",
            description: "Very high proficiency",
        },
        {
            id: "proficient",
            label: "Proficient (IELTS 7.0-7.5)",
            description: "Required for teaching & healthcare",
        },
        {
            id: "competent",
            label: "Competent (IELTS 6.0-6.5)",
            description: "Standard for most occupations",
        },
        {
            id: "basic",
            label: "Basic (Below IELTS 6.0)",
            description: "Below minimum requirement",
        },
        {
            id: "none",
            label: "Not Tested Yet",
            description: "Haven't taken English test",
        },
    ];

    const qualificationCountries: {
        id: CountryOfQualification;
        label: string;
    }[] = [
        { id: "australia", label: "Australia" },
        { id: "newzealand", label: "New Zealand" },
        { id: "uk-usa-canada", label: "UK / USA / Canada" },
        { id: "other", label: "Other Country" },
    ];

    // Load configuration and skills data from Strapi API
    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);

                // Fetch configuration and skills in parallel
                const [configData, skillsResult] = await Promise.all([
                    fetchAssessmentConfig(),
                    fetchSkillAssessments(),
                ]);

                console.log(configData, "---configData---");
                console.log(skillsResult, "---skillsResult---");

                setConfig(configData);
                setSkillsData({ skills: skillsResult });

                // Set default work experience from config
                if (configData.experienceRange?.default) {
                    setWorkExperience(configData.experienceRange.default);
                }
            } catch (error) {
                console.error("Error loading data from Strapi:", error);
                // Fallback to local JSON if API fails
                try {
                    const response = await fetch("/skillAssessmentData.json");
                    const data: SkillAssessmentData = await response.json();
                    setSkillsData(data);
                } catch (fallbackError) {
                    console.error(
                        "Error loading fallback data:",
                        fallbackError
                    );
                }
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    // English proficiency hierarchy
    const englishProficiencyRank = {
        none: 0,
        basic: 1,
        competent: 2,
        proficient: 3,
        superior: 4,
        native: 5,
    };

    // Filter skills based on user input
    const filterSkills = () => {
        console.log("=== FILTER SKILLS DEBUG ===");
        console.log("skillsData:", skillsData);
        console.log("selectedQualification:", selectedQualification);
        console.log("selectedField:", selectedField);
        console.log("workExperience:", workExperience);
        console.log("englishProficiency:", englishProficiency);
        console.log("countryOfQualification:", countryOfQualification);

        if (!skillsData) {
            console.log("No skillsData available");
            return [];
        }

        console.log("Total skills to filter:", skillsData.skills.length);

        const filtered = skillsData.skills.filter((skill) => {
            // Match field
            const fieldMatch =
                selectedField === "" || skill.field === selectedField;

            // Match education level
            const educationMatch = skill.minEducation.includes(
                selectedQualification
            );

            // Match experience (user experience should be >= min required)
            const experienceMatch = workExperience >= skill.minExperience;

            // Match English proficiency (user level should be >= required level)
            const userEnglishRank = englishProficiency
                ? englishProficiencyRank[englishProficiency]
                : 0;
            const requiredEnglishRank =
                englishProficiencyRank[skill.minEnglishLevel];
            const englishMatch = userEnglishRank >= requiredEnglishRank;

            // Match country of qualification
            const countryMatch =
                countryOfQualification === "" ||
                skill.preferredCountries.includes(countryOfQualification);

            const matches = fieldMatch && educationMatch && experienceMatch && englishMatch && countryMatch;

            // Log details for first few skills or failed matches
            if (!matches) {
                console.log(`❌ ${skill.title} (${skill.anzscoCode}):`, {
                    field: `${skill.field} (match: ${fieldMatch})`,
                    education: `needs: ${skill.minEducation.join('/')} | has: ${selectedQualification} (match: ${educationMatch})`,
                    experience: `needs: ${skill.minExperience}+ years | has: ${workExperience} years (match: ${experienceMatch})`,
                    english: `needs: ${skill.minEnglishLevel} (rank ${requiredEnglishRank}) | has: ${englishProficiency} (rank ${userEnglishRank}) (match: ${englishMatch})`,
                    country: `prefers: ${skill.preferredCountries.join('/')} | has: ${countryOfQualification} (match: ${countryMatch})`,
                });
            } else {
                console.log(`✅ ${skill.title} - ALL CRITERIA MATCHED`);
            }

            return matches;
        });

        console.log(`Filtered results: ${filtered.length} out of ${skillsData.skills.length}`);
        return filtered;
    };

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setDirection(1);
            setCurrentStep((prev) => prev + 1);
        } else if (currentStep === totalSteps - 1) {
            // Moving to step 4 (results)
            setIsLoading(true);
            setDirection(1);

            // Simulate API call delay
            setTimeout(() => {
                const results = filterSkills();
                console.log("Filtered results:", results);
                setFilteredResults(results);
                setIsLoading(false);
                setCurrentStep(totalSteps);
            }, 800);
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

    const handleReset = () => {
        setSelectedQualification("diploma");
        setWorkExperience(14);
        setSelectedField("");
        setEnglishProficiency("");
        setCountryOfQualification("");
        setCurrentStep(1);
        setDirection(-1);
        setFilteredResults([]);
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
                        title={config?.title || "Skill Assessment"}
                        description={
                            config?.description ||
                            "Discover which Australian skills assessments you're eligible for based on your qualifications and experience."
                        }
                    />
                </div>

                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-6 space-y-6">
                    {config?.showProgressIndicator &&
                        currentStep < (config?.totalSteps || 6) && (
                            <div className="text-right text-xs text-neutrals-700 capitalize font-bold tracking-wide">
                                Step {currentStep} of{" "}
                                {(config?.totalSteps || 6) - 1}
                            </div>
                        )}

                    <div className="relative w-full min-h-[500px] overflow-hidden">
                        <AnimatePresence custom={direction} mode="wait">
                            {currentStep === 6 ? (
                                <motion.div
                                    key={currentStep}
                                    custom={direction}
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="w-full"
                                >
                                    <SkillResults
                                        results={filteredResults}
                                        onReset={handleReset}
                                    />
                                </motion.div>
                            ) : (
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
                                                {config?.stepTitles?.[0]
                                                    ?.title ||
                                                    "Your Qualification"}
                                            </h2>
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                                {(
                                                    config?.qualificationLevels ||
                                                    qualifications
                                                ).map((q: any) => (
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
                                                {config?.stepTitles?.[1]
                                                    ?.title ||
                                                    "Work Experience"}
                                            </h2>
                                            <div className="flex items-center gap-4 w-full">
                                                <div className="relative flex-1">
                                                    <div className="h-2 bg-gray-200 rounded-full">
                                                        <div
                                                            className="h-2 bg-navy-blue rounded-full"
                                                            style={{
                                                                width: `${
                                                                    (workExperience /
                                                                        (config
                                                                            ?.experienceRange
                                                                            ?.max ||
                                                                            30)) *
                                                                    100
                                                                }%`,
                                                            }}
                                                        />
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min={
                                                            config
                                                                ?.experienceRange
                                                                ?.min || 0
                                                        }
                                                        max={
                                                            config
                                                                ?.experienceRange
                                                                ?.max || 30
                                                        }
                                                        value={workExperience}
                                                        onChange={(e) =>
                                                            setWorkExperience(
                                                                parseInt(
                                                                    e.target
                                                                        .value
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
                                                {config?.stepTitles?.[2]
                                                    ?.title ||
                                                    "Field of Experience"}
                                            </h2>
                                            <select
                                                value={selectedField}
                                                onChange={(e) =>
                                                    setSelectedField(
                                                        e.target
                                                            .value as OccupationField
                                                    )
                                                }
                                                className="w-full border rounded px-3 py-2 text-base text-neutrals-700 border-neutral-700"
                                            >
                                                <option value="" disabled>
                                                    Select Field
                                                </option>
                                                {(
                                                    config?.occupationFields ||
                                                    occupationFields
                                                ).map((field: any) => (
                                                    <option
                                                        key={field.id}
                                                        value={field.id}
                                                    >
                                                        {field.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </>
                                    )}

                                    {currentStep === 4 && (
                                        <div className="w-full space-y-4">
                                            <div className="text-center mb-8">
                                                <h2 className="text-xl font-bold text-navy-blue mb-2">
                                                    {config?.stepTitles?.[3]
                                                        ?.title ||
                                                        "English Language Proficiency"}
                                                </h2>
                                                {config?.stepTitles?.[3]
                                                    ?.subtitle && (
                                                    <p className="text-sm text-neutrals-600">
                                                        {
                                                            config.stepTitles[3]
                                                                .subtitle
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                            <div className="grid gap-3 max-h-80 overflow-y-auto pr-2">
                                                {(
                                                    config?.englishLevels ||
                                                    englishLevels
                                                ).map((level: any) => (
                                                    <button
                                                        key={level.id}
                                                        onClick={() =>
                                                            setEnglishProficiency(
                                                                level.id
                                                            )
                                                        }
                                                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                                                            englishProficiency ===
                                                            level.id
                                                                ? "border-navy-blue bg-navy-blue/5"
                                                                : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <p className="font-semibold text-navy-blue">
                                                                    {
                                                                        level.label
                                                                    }
                                                                </p>
                                                                <p className="text-xs text-neutrals-600 mt-1">
                                                                    {
                                                                        level.description
                                                                    }
                                                                </p>
                                                            </div>
                                                            {englishProficiency ===
                                                                level.id && (
                                                                <div className="w-5 h-5 rounded-full bg-navy-blue flex items-center justify-center">
                                                                    <svg
                                                                        className="w-3 h-3 text-white"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 5 && (
                                        <div className="w-full space-y-6">
                                            <div className="text-center mb-8">
                                                <h2 className="text-xl font-bold text-navy-blue mb-2">
                                                    {config?.stepTitles?.[4]
                                                        ?.title ||
                                                        "Country of Qualification"}
                                                </h2>
                                                {config?.stepTitles?.[4]
                                                    ?.subtitle && (
                                                    <p className="text-sm text-neutrals-600">
                                                        {
                                                            config.stepTitles[4]
                                                                .subtitle
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {(
                                                    config?.qualificationCountries ||
                                                    qualificationCountries
                                                ).map((country: any) => (
                                                    <button
                                                        key={country.id}
                                                        onClick={() =>
                                                            setCountryOfQualification(
                                                                country.id
                                                            )
                                                        }
                                                        className={`p-6 rounded-lg border-2 text-center transition-all ${
                                                            countryOfQualification ===
                                                            country.id
                                                                ? "border-navy-blue bg-navy-blue/5"
                                                                : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                    >
                                                        <p className="font-semibold text-navy-blue text-lg">
                                                            {country.label}
                                                        </p>
                                                        {countryOfQualification ===
                                                            country.id && (
                                                            <div className="mt-2">
                                                                <div className="w-5 h-5 mx-auto rounded-full bg-navy-blue flex items-center justify-center">
                                                                    <svg
                                                                        className="w-3 h-3 text-white"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {currentStep < totalSteps && (
                        <>
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
                                    disabled={
                                        isLoading ||
                                        (currentStep === 3 &&
                                            selectedField === "") ||
                                        (currentStep === 4 &&
                                            englishProficiency === "") ||
                                        (currentStep === 5 &&
                                            countryOfQualification === "")
                                    }
                                    className="py-2 px-5 bg-navy-blue text-white rounded text-sm hover:bg-navy-blue/90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : currentStep === 5 ? (
                                        "See Results"
                                    ) : (
                                        "Next"
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
