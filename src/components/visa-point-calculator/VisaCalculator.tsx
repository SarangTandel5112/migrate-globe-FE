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

// Types for the API response structure


export default function VisaCalculator({ questions, scoreRequired, title }: VisaCalculatorProps) {
  const router = useRouter();
  
  // Initialize calculator state
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({});
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Get questions in order (filter out empty questions)
  const validQuestions = questions.filter(q => q.option && q.option.length > 0);

  // Update calculator state
  const updateCalculatorState = (questionId: string, points: number) => {
    setCalculatorState(prev => ({
      ...prev,
      [questionId]: points
    }));
  };

  // Calculate total points according to Schedule 6D
  const calculateTotalPoints = () => {
    let total = 0;
    
    // Add points for each answered question
    Object.values(calculatorState).forEach(points => {
      total += points;
    });

    // Apply work experience capping (overseas + Australian work experience max 20 points)
    const overseasWork = calculatorState['6D.3'] || 0;
    const australianWork = calculatorState['6D.4'] || 0;
    const workExperience = overseasWork + australianWork;
    const cappedWorkExperience = workExperience > 20 ? 20 : workExperience;
    
    // Remove individual work experience points and add capped total
    total = total - overseasWork - australianWork + cappedWorkExperience;
    
    return total;
  };

  const totalScore = calculateTotalPoints();
  const minimumScore = scoreRequired;
  const progressPercentage = (totalScore / 100) * 100;

  // Handle question option selection
  const handleOptionSelection = (questionId: string, points: number) => {
    updateCalculatorState(questionId, points);
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < validQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
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

  // Get current question
  const currentQuestion = validQuestions[currentStep];

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

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
          {title}
        </h1>
        {/* <p className="text-lg text-gray-600 mt-2">
          Based on Schedule 6D — General Points Test for General Skilled Migration Visas
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Current minimum requirement: <span className="font-semibold text-blue-600">{minimumScore} points</span>
        </p> */}
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
            {/* Section Header */}
            {/* <div className="mb-6">
              <h2 className="font-semibold text-heading1 text-neutrals-700 tracking-[0.608px] mb-1">
                Step {currentStep + 1} of {validQuestions.length}
              </h2>
              <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                Complete the following question to calculate your points:
              </p>
            </div> */}

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
                {currentQuestion.option.map((option, index) => (
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
                    {/* Radio Button */}
                    <div className="relative flex-shrink-0 w-6 h-6">
                      <input
                        type="radio"
                        id={option.id.toString()}
                        name={currentQuestion.item}
                        value={option.value}
                        checked={calculatorState[currentQuestion.item] === option.point}
                        onChange={() => handleOptionSelection(currentQuestion.item, option.point)}
                        className="sr-only"
                      />
                      <label
                        htmlFor={option.id.toString()}
                        className="cursor-pointer block w-full h-full"
                      >
                        {calculatorState[currentQuestion.item] === option.point ? (
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
                        {option.label.split('\n')[0]}
                      </h3>
                      {option.label.includes('\n') && (
                        <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                          {option.label.split('\n').slice(1).join('\n')}
                        </p>
                      )}
                    </div>

                    {/* Points Badge */}
                    {/* <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                        {option.point}
                      </span>
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button 
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-[5px] transition-colors ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-navy-blue hover:bg-gray-100'
                }`}
              >
                <span className="text-sm tracking-[0.46px]">Previous</span>
              </button>

              <button 
                onClick={nextStep}
                disabled={currentStep === validQuestions.length - 1}
                className={`flex items-center gap-2.5 px-6 py-2 rounded-[5px] transition-colors ${
                  currentStep === validQuestions.length - 1
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-navy-blue text-neutrals-0 hover:bg-navy-blue/90'
                }`}
              >
                <span className="text-sm tracking-[0.46px]">
                  {currentStep === validQuestions.length - 1 ? 'Complete' : 'Next'}
                </span>
                {currentStep < validQuestions.length - 1 && (
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
                    strokeDasharray={`${
                      progressPercentage * 2.6
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
                  <span className={`font-medium ${
                    totalScore >= minimumScore ? 'text-green-600' : 'text-navy-blue'
                  }`}>
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
                const isCompleted = calculatorState[question.item] !== undefined;
                const points = isCompleted ? calculatorState[question.item] : null;
                
                return (
                  <motion.div
                    key={question.id}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      isCompleted ? "bg-background" : ""
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
                      {/* Checkbox */}
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

                      {/* Label */}
                      <span
                        className={`text-sm tracking-[0.2px] capitalize leading-6 ${
                          isCompleted
                            ? "text-navy-blue font-bold"
                            : "text-navy-blue-400"
                        }`}
                      >
                        {question.title}
                      </span>
                    </div>

                    {/* Points Badge */}
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

      {/* Footer Information */}
      {/* <div className="mt-8 bg-white rounded-2xl border border-white/80 backdrop-blur-[20px] p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About Schedule 6D</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            This calculator is based on the official Schedule 6D — General Points Test for General Skilled Migration Visas 
            mentioned in Subregulation 2.26AC(1) of the Migration Regulations 1994.
          </p>
          <p>
            The points test evaluates applicants based on age, English language proficiency, work experience, 
            educational qualifications, and other factors to determine eligibility for skilled migration visas.
          </p>
          <p>
            <strong>Current minimum requirement:</strong> {minimumScore} points for all General Skilled Migration visas (Subclass 189, 190, 491).
          </p>
        </div>
      </div> */}
    </div>
  );
}
