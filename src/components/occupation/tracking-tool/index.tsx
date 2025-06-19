"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import MyImage from "@/ui/myImage";
import Clock from "@assets/images/Clock.svg";
import VisaType from "@/components/occupation/tracking-tool/visa-type";
import StateEligibility from "@/components/occupation/tracking-tool/state-eligibility";
import EOIStatistics from "@components/occupation/tracking-tool/eoi-stats";

const OccupationTracking: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("Electrical Engineer");
  const [showEOIStats, setShowEOIStats] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const recentSearches = [
    "Electrical Engineer",
    "Occupation 2",
    "Occupation 2",
    "Occupation 2",
    "Occupation 2",
  ];

  const visaTypes = [
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
    {
      subclass: "Subclass 189 (Skilled Independent) Points-Tested",
      eligible: true,
      list: "MLTSSL",
    },
  ];

  const stateEligibility = {
    "190": {
      NT: "eligible",
      VIC: "not-eligible",
      WA: "eligible",
      SA: "not-eligible",
      Tasmania: "eligible",
      NSW: "not-eligible",
      ACT: "eligible",
      QLD: "not-eligible",
    },
    "491": {
      NT: "eligible",
      VIC: "not-eligible",
      WA: "eligible",
      SA: "not-eligible",
      Tasmania: "eligible",
      NSW: "not-eligible",
      ACT: "eligible",
      QLD: "not-eligible",
    },
    DAMA: {
      NT: "eligible",
      VIC: "not-eligible",
      WA: "eligible",
      SA: "not-eligible",
      Tasmania: "eligible",
      NSW: "not-eligible",
      ACT: "eligible",
      QLD: "not-eligible",
    },
  };

  const chartColors = [
    { color: "#DCF3EB", label: "65" },
    { color: "#C5EBDE", label: "70" },
    { color: "#A2DFC9", label: "85" },
    { color: "#6FAC96", label: "130" },
    { color: "#456C5E", label: "135" },
    { color: "#38564B", label: "95" },
  ];

  return (
    <div className="container-1200">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 w-fit text-navy-blue hover:text-navy-blue-600 transition-colors pb-6"
      >
        <BackIcon />
        <span className="text-base font-semibold tracking-[0.2px] capitalize">
          Back
        </span>
      </button>
      <h1 className="block md:hidden font-bold text-heading1 text-navy-blue text-2xl pb-2">
        Occupation tracking tool
      </h1>

      <p className=" block md:hidden text-base text-navy-blue leading-6 tracking-[0.2px] capitalize pb-8">
        Stay ahead with real-time updates on visa demand, occupation
        eligibility, and migration pathway changes. Use this tool to make
        data-driven decisions about your migration plans.
      </p>

      {/* Search Section */}
      <div className="bg-[#FFFFFF] rounded-2xl p-4 md:p-6 flex flex-col gap-6">
        {/* Search Input */}
        <div className="flex items-center gap-3 border border-mint-green-100 rounded-full bg-[#F7F8FD] px-4 py-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 25"
            fill="none"
            className="w-5 h-5 shrink-0"
          >
            <path
              d="M20.9999 21.5L16.6599 17.16"
              stroke="#808080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
              stroke="#808080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-navy-blue-400 text-sm md:text-base font-medium bg-transparent outline-none placeholder:text-navy-blue-200"
            placeholder="Electrical Engineer"
          />
          <button className="hidden md:block bg-navy-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-navy-blue-600 transition-colors">
            Search
          </button>
        </div>

        {/* Recent Searches */}
        <div className="flex flex-col gap-3">
          <h3 className="text-navy-blue-400 text-base font-semibold">
            Recent Search
          </h3>
          <div className="flex flex-wrap gap-3">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-[#F5F6FB] rounded-full"
              >
                <MyImage
                  src={Clock}
                  alt="Clock"
                  height="16"
                  width="16"
                  className="w-4 h-4"
                />
                <span className="text-navy-blue-400 text-sm font-medium">
                  {search}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-neutrals-700 text-sm md:text-base font-semibold">
            ANZSCO
          </span>
          <div className="bg-mint-green-50 border border-white rounded-full px-3 py-1 md:px-4 md:py-1.5">
            <span className="text-neutrals-700 text-xs md:text-sm font-medium">
              233311
            </span>
          </div>
          <h1 className="text-navy-blue text-xl md:text-2xl font-semibold whitespace-nowrap">
            Electrical Engineer
          </h1>
        </div>

        {/* Right side: Buttons */}
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-4 py-2 border border-neutrals-300 rounded text-neutrals-700 text-xs md:text-sm font-medium hover:border-neutrals-400 transition-colors bg-white">
            Free assessment
          </button>
          <button className="flex-1 md:flex-none px-4 py-2 bg-navy-blue text-white rounded text-xs md:text-sm font-medium hover:bg-navy-blue-600 transition-colors">
            Skilled assessment
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-8 pt-4">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8 w-full lg:w-2/3 min-w-0">
          {/* Occupation Header */}

          <VisaType visaTypes={visaTypes} />

          {/* State Eligibility */}
          <StateEligibility stateEligibility={stateEligibility} />

          {/* EOI Statistics */}
          <EOIStatistics chartColors={chartColors} />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[320px] bg-white rounded-xl p-6 h-fit self-start">
          <div className="flex flex-col gap-2 md:gap-2">
            <div className="flex items-center gap-2">
              <span className="text-neutrals-700 text-sm md:text-base font-semibold">
                ANZSCO
              </span>
              <div className="bg-mint-green-50 rounded-full px-3 py-1 md:px-4 md:py-1.5">
                <span className="text-neutrals-700 text-xs md:text-sm font-medium">
                  233311
                </span>
              </div>
            </div>
            <span className="text-neutrals-600 text-xs md:text-sm">
              Electrical Engineer
            </span>
          </div>

          <div className="border-t border-neutrals-100 my-4"></div>

          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-neutrals-700 text-sm md:text-base font-semibold">
                ANZSCO
              </span>
              <div className="bg-mint-green-50 rounded-full px-3 py-1 md:px-4 md:py-1.5">
                <span className="text-neutrals-700 text-xs md:text-sm font-medium">
                  233311
                </span>
              </div>
            </div>
            <span className="text-neutrals-600 text-xs md:text-sm">
              Electrical Engineer
            </span>
          </div>

          <div className="border-t border-neutrals-100 my-2 md:my-4"></div>

          <div className="flex flex-col gap-2">
            <h3 className="text-neutrals-600 text-sm md:text-base font-semibold">
              Specialization
            </h3>
            <div className="text-neutrals-600 text-xs md:text-sm leading-normal">
              <ul className="list-disc list-inside [&>li::marker]:text-[9px] [&>li::marker]:text-neutrals">
                <li>Electrical Design Engineer</li>
                <li>Railway Signalling Engineer</li>
                <li>Signalling and Communications Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupationTracking;
