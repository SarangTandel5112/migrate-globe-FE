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
import { CalculatorState, VisaCalculatorProps } from "@/utils/interface";
import Tooltip from "@/components/Tooltip";

export default function VisaCalculator({
    questions,
    scoreRequired,
    title,
}: VisaCalculatorProps) {
    const router = useRouter();

    const [calculatorState, setCalculatorState] = useState<CalculatorState>({});
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [showResults, setShowResults] = useState(false);

    const validQuestions = questions.filter(
        (q) => q.option && q.option.length > 0
    );

    const updateCalculatorState = (questionId: number, optionId: number) => {
        setCalculatorState((prev) => ({
            ...prev,
            [questionId]: optionId,
        }));
    };

    const calculateTotalPoints = () => {
        let total = 0;
        const overseasWorkQuestionId = 32;
        const australianWorkQuestionId = 33;

        let overseasWorkPoints = 0;
        let australianWorkPoints = 0;

        for (const questionId in calculatorState) {
            const selectedOptionId = calculatorState[questionId];
            const question = validQuestions.find(
                (q) => q.id === parseInt(questionId)
            );

            if (question && selectedOptionId !== undefined) {
                const selectedOption = question.option.find(
                    (opt) => opt.id === selectedOptionId
                );
                if (selectedOption) {
                    if (question.id === overseasWorkQuestionId) {
                        overseasWorkPoints = selectedOption.point;
                    } else if (question.id === australianWorkQuestionId) {
                        australianWorkPoints = selectedOption.point;
                    } else {
                        total += selectedOption.point;
                    }
                }
            }
        }

        const cappedWorkExperience = Math.min(
            overseasWorkPoints + australianWorkPoints,
            20
        );
        total += cappedWorkExperience;

        return total;
    };

    const calculateMaxPoints = () => {
        let maxTotal = 0;
        const overseasWorkQuestionId = 32;
        const australianWorkQuestionId = 33;

        let maxOverseasPoints = 0;
        let maxAustralianPoints = 0;

        validQuestions.forEach((question) => {
            const maxPointsForQuestion = Math.max(
                ...question.option.map((opt) => opt.point)
            );
            if (question.id === overseasWorkQuestionId) {
                maxOverseasPoints = maxPointsForQuestion;
            } else if (question.id === australianWorkQuestionId) {
                maxAustralianPoints = maxPointsForQuestion;
            } else {
                maxTotal += maxPointsForQuestion;
            }
        });

        const cappedMaxWorkExperience = Math.min(
            maxOverseasPoints + maxAustralianPoints,
            20
        );
        maxTotal += cappedMaxWorkExperience;

        return maxTotal;
    };

    const totalScore = calculateTotalPoints();
    const maxPossibleScore = calculateMaxPoints();
    const minimumScore = scoreRequired;
    const progressPercentage =
        maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 0;

    const handleOptionSelection = (questionId: number, optionId: number) => {
        updateCalculatorState(questionId, optionId);
    };

    const nextStep = () => {
        if (currentStep < validQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = (step: number) => {
        setCurrentStep(step);
    };

    const currentQuestion = validQuestions[currentStep];
    console.log(currentQuestion, "----currentQuestion-------");

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative">
            <div
                className={`container-1200 ${
                    showResults ? "blur-sm" : ""
                } transition-all duration-300`}
            >
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
                        {title}
                    </h1>
                </div>

                {/* Main Content */}
                <motion.div
                    className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Left Column - Form Section */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl border border-white/80 backdrop-blur-[20px] p-6">
                            {/* Current Question */}
                            <div className="space-y-6 mb-8">
                                <div className="mb-4">
                                    <h3 className="font-semibold text-heading1 text-neutrals-700 mb-2">
                                        {currentQuestion.title}
                                    </h3>
                                    <p className="text-sm text-neutrals leading-6">
                                        {currentQuestion.question}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {currentQuestion.option.map(
                                        (option, index) => (
                                            <motion.div
                                                key={option.id}
                                                className="flex items-start gap-4"
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                <div className="relative flex-shrink-0 w-6 h-6">
                                                    <input
                                                        type="radio"
                                                        id={option.id.toString()}
                                                        name={currentQuestion.id.toString()}
                                                        value={option.value}
                                                        checked={
                                                            calculatorState[
                                                                currentQuestion
                                                                    .id
                                                            ] === option.id
                                                        }
                                                        onChange={() =>
                                                            handleOptionSelection(
                                                                currentQuestion.id,
                                                                option.id
                                                            )
                                                        }
                                                        className="sr-only"
                                                    />
                                                    <label
                                                        htmlFor={option.id.toString()}
                                                        className="cursor-pointer block w-full h-full"
                                                    >
                                                        {calculatorState[
                                                            currentQuestion.id
                                                        ] === option.id ? (
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
                                                <div className="flex-1">
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            handleOptionSelection(
                                                                currentQuestion.id,
                                                                option.id
                                                            )
                                                        }
                                                    >
                                                        <h3 className="font-semibold flex items-center gap-2 text-base text-neutrals-700 leading-6 tracking-[0.2px] mb-1">
                                                            <span>
                                                                {
                                                                    option.label.split(
                                                                        "\\n"
                                                                    )[0]
                                                                }
                                                            </span>
                                                            {option.hint && (
                                                                <span
                                                                    className="inline ml-0.5"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.stopPropagation()
                                                                    } // Prevent option selection when clicking hint
                                                                >
                                                                    <Tooltip
                                                                        content={
                                                                            option.hint
                                                                        }
                                                                    >
                                                                        <span className="inline-block w-4 h-4 rounded-full bg-gray-300 text-xs text-gray-600 hover:bg-gray-400 hover:text-gray-700 transition-colors cursor-help leading-4 text-center align-baseline">
                                                                            i
                                                                        </span>
                                                                    </Tooltip>
                                                                </span>
                                                            )}
                                                        </h3>
                                                        {option.label.includes(
                                                            "\\n"
                                                        ) && (
                                                            <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                                                                {option.label
                                                                    .split(
                                                                        "\\n"
                                                                    )
                                                                    .slice(1)
                                                                    .join(
                                                                        "\\n"
                                                                    )}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-[5px] transition-colors ${
                                        currentStep === 0
                                            ? "text-gray-400 cursor-not-allowed"
                                            : "text-navy-blue hover:bg-gray-100"
                                    }`}
                                >
                                    <span className="text-sm tracking-[0.46px]">
                                        Previous
                                    </span>
                                </button>
                                <button
                                    onClick={nextStep}
                                    className={`flex items-center gap-2.5 px-6 py-2 rounded-[5px] transition-colors bg-navy-blue text-neutrals-0 hover:bg-navy-blue/90`}
                                >
                                    <span className="text-sm tracking-[0.46px]">
                                        {currentStep ===
                                        validQuestions.length - 1
                                            ? "Calculate Score"
                                            : "Next"}
                                    </span>
                                    {currentStep <
                                        validQuestions.length - 1 && (
                                        <div className="relative w-6 h-6">
                                            <ArrowRightIcon />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Progress and Checklist */}
                    <div className="lg:w-80">
                        <div className="bg-white rounded-2xl p-4 space-y-6">
                            {/* Progress Circle */}
                            <div className="flex items-center gap-6">
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <svg
                                        width="128"
                                        height="128"
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
                                            strokeDasharray={`${
                                                progressPercentage * 2.6
                                            } ${
                                                260 - progressPercentage * 2.6
                                            }`}
                                            strokeLinecap="round"
                                            className="transition-all duration-500"
                                        />
                                    </svg>
                                    {/* Points text inside the circle */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-navy-blue">
                                            {totalScore
                                                .toString()
                                                .padStart(2, "0")}
                                        </span>
                                        <span className="text-xs text-navy-blue-400">
                                            Points
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    {/* <div className="mb-2">
                                    <span className="text-sm text-navy-blue-400 tracking-[0.2px]">
                                        Total Score:
                                    </span>
                                    <span className="text-xl text-navy-blue-400 tracking-[0.2px] ml-1">
                                        {totalScore.toString().padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-navy-blue-400 tracking-[0.2px] ml-1">
                                        Points
                                    </span>
                                </div> */}
                                    <p className="text-sm text-navy-blue-200 tracking-[0.2px]">
                                        <span className="text-navy-blue-200">
                                            Minimum required score for most
                                            skilled visas
                                        </span>
                                        <span className="text-navy-blue-400">
                                            :{" "}
                                        </span>
                                        <span
                                            className={`font-medium ${
                                                totalScore >= minimumScore
                                                    ? "text-green-600"
                                                    : "text-navy-blue"
                                            }`}
                                        >
                                            {minimumScore} points
                                        </span>
                                    </p>
                                    {totalScore >= minimumScore && (
                                        <p className="text-xs text-green-600 font-medium mt-1">
                                            ✓ You meet the minimum requirement!
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Checklist */}
                            <div className="space-y-0">
                                {validQuestions.map((question, index) => {
                                    const isCompleted =
                                        calculatorState[question.id] !==
                                        undefined;
                                    const selectedOptionId =
                                        calculatorState[question.id];
                                    const selectedOption = question.option.find(
                                        (opt) => opt.id === selectedOptionId
                                    );
                                    const points = selectedOption
                                        ? selectedOption.point
                                        : null;

                                    return (
                                        <motion.div
                                            key={question.id}
                                            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                                                isCompleted
                                                    ? "bg-background"
                                                    : ""
                                            }`}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                                ease: "easeOut",
                                            }}
                                            onClick={() => goToStep(index)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-6 h-6 flex-shrink-0">
                                                    {isCompleted ? (
                                                        <div className="relative w-6 h-6 bg-mint-green-600 rounded-full flex items-center justify-center">
                                                            <CheckFillIcon />
                                                        </div>
                                                    ) : (
                                                        <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                                            <CheckRoundIcon />
                                                        </div>
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-base tracking-[0.2px] capitalize leading-6 ${
                                                        isCompleted
                                                            ? "text-navy-blue font-bold"
                                                            : "text-navy-blue-400"
                                                    }`}
                                                >
                                                    {question.title}
                                                </span>
                                            </div>
                                            {isCompleted && points !== null && (
                                                <div className="w-6 h-6 bg-mint-green-50 rounded-xl flex items-center justify-center">
                                                    <span className="font-bold text-xs text-mint-green-700 tracking-[0.2px] capitalize">
                                                        {points}
                                                    </span>
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Results Modal Overlay */}
            {showResults && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-[600px] w-full"
                    >
                        <h2 className="text-2xl font-bold text-navy-blue mb-4">
                            Your Results
                        </h2>
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <svg
                                    width="128"
                                    height="128"
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
                                        strokeDasharray={`${
                                            progressPercentage * 2.6
                                        } ${260 - progressPercentage * 2.6}`}
                                        strokeLinecap="round"
                                        className="transition-all duration-500"
                                    />
                                </svg>
                                {/* Points text inside the circle */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-navy-blue">
                                        {totalScore.toString().padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-navy-blue-400">
                                        Points
                                    </span>
                                </div>
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
                                <p className="text-sm text-navy-blue-200 tracking-[0.2px]">
                                    <span className="text-navy-blue-200">
                                        Minimum required score for most skilled
                                        visas
                                    </span>
                                    <span className="text-navy-blue-400">
                                        :{" "}
                                    </span>
                                    <span
                                        className={`font-medium ${
                                            totalScore >= minimumScore
                                                ? "text-green-600"
                                                : "text-navy-blue"
                                        }`}
                                    >
                                        {minimumScore} points
                                    </span>
                                </p>
                                {totalScore >= minimumScore && (
                                    <p className="text-xs text-green-600 font-medium mt-1">
                                        ✓ You meet the minimum requirement!
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() =>
                                    router.push("/services/zoom-consultation")
                                }
                                className="w-full bg-navy-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
                            >
                                Book Consultation
                            </button>
                            <button
                                onClick={() => setShowResults(false)}
                                className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
