"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillResult } from "@/types/skillAssessment";
import CheckFillIcon from "@/components/icons/CheckFillIcon";

interface SkillResultsProps {
    results: SkillResult[];
    onReset: () => void;
}

const SkillResults: React.FC<SkillResultsProps> = ({ results, onReset }) => {
    console.log("SkillResults received data:", results);

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-navy-blue">
                    Your Eligible Skills Assessment
                </h2>
                <p className="text-base text-neutrals-700">
                    Based on your qualifications and experience, you are
                    eligible for the following skills assessments:
                </p>
            </div>

            {results.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                    <p className="text-lg text-neutrals-700">
                        No skills found matching your criteria.
                    </p>
                    <p className="text-sm text-neutrals-600">
                        Try adjusting your qualifications or experience level.
                    </p>
                    <button
                        onClick={onReset}
                        className="mt-4 py-2 px-6 bg-navy-blue text-white rounded text-sm hover:bg-navy-blue/90 transition-colors"
                    >
                        Start Over
                    </button>
                </div>
            ) : (
                <>
                    <div className="text-sm text-neutrals-600 text-center">
                        Found {results.length} eligible skill
                        {results.length !== 1 ? "s" : ""}
                    </div>

                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                        {results.map((skill, index) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-neutrals-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckFillIcon />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-navy-blue mb-1">
                                                {skill.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-medium text-neutrals-700">
                                                    ANZSCO Code:
                                                </span>
                                                <span className="bg-mint-green-50 text-neutrals-700 text-xs font-medium px-3 py-1 rounded-full">
                                                    {skill.anzscoCode}
                                                </span>
                                                <span className="bg-navy-blue/10 text-navy-blue text-xs font-medium px-3 py-1 rounded-full">
                                                    {skill.field}
                                                </span>
                                            </div>
                                            {skill.description && (
                                                <p className="text-sm text-neutrals-600 mb-3">
                                                    {skill.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="border-t border-neutrals-100 pt-3 space-y-2">
                                            <div>
                                                <p className="text-xs font-semibold text-neutrals-700 mb-1">
                                                    Assessing Authority:
                                                </p>
                                                {skill.assessingAuthority
                                                    ?.website ? (
                                                    <a
                                                        href={
                                                            skill
                                                                .assessingAuthority
                                                                .website
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm font-medium text-navy-blue hover:underline"
                                                    >
                                                        {skill
                                                            .assessingAuthority
                                                            .name ||
                                                            "Unknown Authority"}{" "}
                                                        →
                                                    </a>
                                                ) : (
                                                    <span className="text-sm font-medium text-navy-blue">
                                                        {skill
                                                            .assessingAuthority
                                                            ?.name ||
                                                            "Unknown Authority"}
                                                    </span>
                                                )}
                                                {skill.assessingAuthority
                                                    ?.description && (
                                                    <p className="text-xs text-neutrals-600 mt-1">
                                                        {
                                                            skill
                                                                .assessingAuthority
                                                                .description
                                                        }
                                                    </p>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                                                <div>
                                                    <span className="text-neutrals-600">
                                                        Min. Experience:
                                                    </span>
                                                    <span className="ml-1 font-medium text-neutrals-700">
                                                        {skill.minExperience}{" "}
                                                        {skill.minExperience ===
                                                        1
                                                            ? "year"
                                                            : "years"}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-neutrals-600">
                                                        Min. Education:
                                                    </span>
                                                    <span className="ml-1 font-medium text-neutrals-700 capitalize">
                                                        {skill.minEducation.join(
                                                            ", "
                                                        )}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-neutrals-600">
                                                        English Required:
                                                    </span>
                                                    <span className="ml-1 font-medium text-neutrals-700 capitalize">
                                                        {skill.minEnglishLevel ===
                                                        "none"
                                                            ? "Not Required"
                                                            : skill.minEnglishLevel ===
                                                              "competent"
                                                            ? "IELTS 6.0+"
                                                            : skill.minEnglishLevel ===
                                                              "proficient"
                                                            ? "IELTS 7.0+"
                                                            : skill.minEnglishLevel ===
                                                              "superior"
                                                            ? "IELTS 8.0+"
                                                            : skill.minEnglishLevel}
                                                    </span>
                                                </div>
                                                {skill.requiresAustralianQualification && (
                                                    <div className="col-span-2">
                                                        <span className="text-xs text-amber-600 font-medium">
                                                            ⚠ Australian
                                                            qualification
                                                            preferred
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutrals-100">
                        <button
                            onClick={onReset}
                            className="flex-1 py-3 px-6 border border-neutrals-300 rounded text-sm font-medium text-neutrals-700 hover:bg-neutrals-50 transition-colors"
                        >
                            Start New Assessment
                        </button>
                        <button className="flex-1 py-3 px-6 bg-navy-blue text-white rounded text-sm font-medium hover:bg-navy-blue/90 transition-colors">
                            Get Full Assessment Report
                        </button>
                        <button className="flex-1 py-3 px-6 bg-mint-green text-navy-blue rounded text-sm font-medium hover:bg-mint-green/90 transition-colors">
                            Book Consultation
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SkillResults;
