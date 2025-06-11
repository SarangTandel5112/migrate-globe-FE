"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    { id: "education", label: "Educational Qualifications", completed: false },
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
    <div className="min-h-screen bg-[#F7F8FD] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-[#263773] hover:opacity-75 transition-opacity"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00065 13.1667L3.33398 8.5L8.00065 3.83334"
                stroke="#263773"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6673 8.5H3.33398"
                stroke="#263773"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-urbanist font-bold text-base text-[#263773] capitalize tracking-[0.2px]">
              Back
            </span>
          </button>

          <h1 className="font-urbanist font-bold text-2xl text-[#263773] tracking-[0.608px]">
            Visa Points Calculator
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Form Section */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-white/80 backdrop-blur-[20px] p-6">
              {/* Section Header */}
              <div className="mb-6">
                <h2 className="font-urbanist font-bold text-2xl text-[#333] tracking-[0.608px] mb-1">
                  Choose Your Visa Subclass
                </h2>
                <p className="font-urbanist text-sm text-[#696969] leading-6 tracking-[0.2px] capitalize">
                  Select the visa type you are applying for:
                </p>
              </div>

              {/* Visa Options */}
              <div className="space-y-6 mb-8">
                {visaOptions.map((option) => (
                  <div key={option.id} className="flex items-start gap-4">
                    {/* Radio Button */}
                    <div className="relative flex-shrink-0 w-6 h-6 mt-1">
                      <input
                        type="radio"
                        id={option.id}
                        name="visa-type"
                        value={option.id}
                        checked={selectedVisa === option.id}
                        onChange={(e) => setSelectedVisa(e.target.value)}
                        className="sr-only"
                      />
                      <label
                        htmlFor={option.id}
                        className="cursor-pointer block w-full h-full"
                      >
                        {selectedVisa === option.id ? (
                          <div className="relative">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="11.25"
                                stroke="#6FAC96"
                                strokeWidth="1.5"
                              />
                              <circle cx="12" cy="12" r="6" fill="#6FAC96" />
                            </svg>
                          </div>
                        ) : (
                          <div className="relative">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="11.25"
                                stroke="#D3D3D3"
                                strokeWidth="1.5"
                              />
                              <circle cx="12" cy="12" r="6" fill="#D3D3D3" />
                            </svg>
                          </div>
                        )}
                      </label>
                    </div>

                    {/* Option Content */}
                    <div className="flex-1">
                      <h3 className="font-urbanist font-bold text-base text-[#333] leading-6 tracking-[0.2px] capitalize mb-1">
                        {option.title}
                      </h3>
                      <p className="font-urbanist text-sm text-[#696969] leading-6 tracking-[0.2px] capitalize">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <div className="flex justify-end">
                <button className="flex items-center gap-2.5 bg-[#263773] text-white px-6 py-2 rounded-[5px] hover:bg-[#263773]/90 transition-colors">
                  <span className="font-urbanist text-sm tracking-[0.46px]">
                    Next
                  </span>
                  <div className="relative w-6 h-6">
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -left-2"
                    >
                      <path
                        d="M1 11L6 6L1 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                      strokeDasharray={`${progressPercentage * 2.6} ${260 - progressPercentage * 2.6}`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <span className="font-urbanist text-base text-[#515F8F] tracking-[0.2px]">
                      Total Score:
                    </span>
                    <span className="font-urbanist text-2xl text-[#515F8F] tracking-[0.2px] ml-1">
                      {totalScore.toString().padStart(2, "0")}
                    </span>
                    <span className="font-urbanist text-base text-[#515F8F] tracking-[0.2px] ml-1">
                      Points
                    </span>
                  </div>
                  <p className="font-urbanist text-xs text-[#929BB9] tracking-[0.2px]">
                    <span className="text-[#929BB9]">
                      Minimum required score for most skilled visas
                    </span>
                    <span className="text-[#515F8F]">: </span>
                    <span className="text-[#263773] font-medium">
                      {minimumScore} points
                    </span>
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-0">
                {checklistItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      item.completed ? "bg-[#F7F8FD]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Checkbox */}
                      <div className="w-6 h-6 flex-shrink-0">
                        {item.completed ? (
                          <div className="relative w-6 h-6 bg-[#6FAC96] rounded-full flex items-center justify-center">
                            <svg
                              width="8"
                              height="6"
                              viewBox="0 0 8 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 3L3 5L7 1"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 border-2 border-[#C0C0C0] rounded-full flex items-center justify-center">
                            <svg
                              width="8"
                              height="6"
                              viewBox="0 0 8 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 3L3 5L7 1"
                                stroke="#C0C0C0"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className={`font-urbanist text-sm tracking-[0.2px] capitalize leading-6 ${
                          item.completed
                            ? "text-[#263773] font-bold"
                            : "text-[#515F8F]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* Points Badge */}
                    {item.completed && item.points && (
                      <div className="w-6 h-6 bg-[#DCF3EB] rounded-xl flex items-center justify-center">
                        <span className="font-urbanist font-bold text-xs text-[#538171] tracking-[0.2px] capitalize">
                          {item.points}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
