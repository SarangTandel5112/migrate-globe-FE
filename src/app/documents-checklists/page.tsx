"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DocumentsChecklistsPage: React.FC = () => {
  const router = useRouter();
  const [selectedEnquiryType, setSelectedEnquiryType] = useState<
    "individual" | "business" | null
  >("individual");
  const [selectedVisaCategory, setSelectedVisaCategory] = useState<string>("");

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen ">
      <div className="container-1200 px-4 md:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 w-fit text-navy-blue hover:text-navy-blue-600 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 17"
              fill="none"
              className="w-4 h-4"
            >
              <path
                d="M7.99992 13.1667L3.33325 8.5L7.99992 3.83333"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6666 8.5H3.33325"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base font-semibold tracking-[0.2px] capitalize">
              Back
            </span>
          </button>

          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-heading1 md:text-2xl lg:text-2xl text-navy-blue font-semibold tracking-[0.608px]">
              Buy Documents Checklists
            </h1>
            <p className="text-navy-blue-400 text-sm md:text-base leading-6 tracking-[0.2px] capitalize max-w-[727px]">
              Lorem ipsum dolor sit amet consectetur. Urna ullamcorper orci
              tortor sed morbi enim.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6 md:gap-10">
            {/* Select Enquiry Type */}
            <div className="flex flex-col gap-2">
              <h2 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                Select Enquiry Type
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Individual Option */}
                <button
                  onClick={() => setSelectedEnquiryType("individual")}
                  className={`flex-1 flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
                    selectedEnquiryType === "individual"
                      ? "border-navy-blue bg-background-1"
                      : "border-navy-blue-50 bg-white hover:border-navy-blue-100"
                  }`}
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="5"
                        stroke="#263773"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                        stroke="#263773"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-neutrals-700 text-lg md:text-xl font-semibold tracking-[0.2px] capitalize">
                      Individual
                    </h3>
                    <p className="text-neutrals-500 text-sm md:text-base leading-6 tracking-[0.2px] capitalize">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </button>

                {/* Business Option */}
                <button
                  onClick={() => setSelectedEnquiryType("business")}
                  className={`flex-1 flex items-start gap-4 p-4 rounded-lg border transition-all ${
                    selectedEnquiryType === "business"
                      ? "border-navy-blue bg-background-1"
                      : "border-navy-blue-50 bg-white hover:border-navy-blue-100"
                  }`}
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="#7D87AB"
                        strokeWidth="1.75"
                      />
                      <path
                        d="M8 21V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7"
                        stroke="#7D87AB"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 11V11.01"
                        stroke="#7D87AB"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 13C10.8366 16.2479 13.1634 16.2479 22 13"
                        stroke="#7D87AB"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-neutrals-700 text-lg md:text-xl font-semibold tracking-[0.2px] capitalize">
                      Business
                    </h3>
                    <p className="text-neutrals-500 text-sm md:text-base leading-6 tracking-[0.2px] capitalize">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Select Visa Category */}
            <div className="flex flex-col gap-2">
              <label className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                Select Visa Category Or Service Type
              </label>
              <div className="relative">
                <select
                  value={selectedVisaCategory}
                  onChange={(e) => setSelectedVisaCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-background-1 border border-neutrals-200 rounded text-base text-neutrals-200 tracking-[0.24px] appearance-none cursor-pointer focus:outline-none focus:border-navy-blue-300"
                >
                  <option value="" disabled>
                    Find visa options
                  </option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="distinguished-talent">
                    Distinguished Talent Visa
                  </option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    className="w-3 h-3"
                  >
                    <path
                      d="M1.6001 1.20001L6.4001 6.00001L11.2001 1.20001"
                      stroke="#7D87AB"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6">
            <h2 className="text-navy-blue text-heading1 md:text-2xl font-semibold tracking-[0.608px]">
              Distinguished Talent Visa
            </h2>

            <div className="flex flex-col gap-6">
              {/* Subclass 858 */}
              <div className="bg-background-1 rounded-lg p-4 md:p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                    Subclass 858 (Global Talent Visa - Permanent)
                  </h3>
                  <p className="text-navy-blue-400 text-xs tracking-[0.2px] capitalize leading-normal">
                    Internationally recognized record of exceptional achievement
                    in an eligible field; no age limit but applicants under 18
                    or over 55 must show exceptional benefit to Australia.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <button className="flex-1 sm:flex-none px-6 py-2 border border-neutrals-300 rounded text-neutrals-700 text-sm font-medium tracking-[0.46px] hover:border-neutrals-400 transition-colors">
                    More info
                  </button>
                  <button className="flex-1 sm:flex-none px-6 py-2 bg-navy-blue text-white rounded text-sm font-medium tracking-[0.46px] hover:bg-navy-blue-600 transition-colors">
                    Buy checklist
                  </button>
                </div>
              </div>

              {/* Subclass 124 */}
              <div className="bg-background-1 rounded-lg p-4 md:p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                    Subclass 124 (Global Talent Visa - Offshore)
                  </h3>
                  <p className="text-navy-blue-400 text-xs tracking-[0.2px] capitalize leading-normal">
                    Internationally recognized record of exceptional achievement
                    in an eligible field; no age limit but applicants under 18
                    or over 55 must show exceptional benefit to Australia. For
                    applicants outside Australia.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <button className="flex-1 sm:flex-none px-6 py-2 border border-neutrals-300 rounded text-neutrals-700 text-sm font-medium tracking-[0.46px] hover:border-neutrals-400 transition-colors">
                    More info
                  </button>
                  <button className="flex-1 sm:flex-none px-6 py-2 bg-navy-blue text-white rounded text-sm font-medium tracking-[0.46px] hover:bg-navy-blue-600 transition-colors">
                    Buy checklist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsChecklistsPage;
