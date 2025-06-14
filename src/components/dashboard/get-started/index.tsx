"use client";
import MyImage from "@/ui/myImage";
import React, { useState } from "react";
import RightIcon from "@assets/images/right-icon.svg";

const GetStartedForm = () => {
  const [country, setCountry] = useState("India");
  const [service, setService] = useState("Find visa options");

  return (
    <div className="px-10 sm:px-16">
      <div className="mt-10 bg-navy-blue text-white max-w-6xl mx-auto my-10 rounded-2xl px-6 py-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_auto] items-end gap-4 md:gap-0">
          {/* Country Dropdown */}
          <div className="px-2">
            <label className="block text-sm mb-2">I Am From?</label>
            {/* <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-white text-gray-800 rounded-lg px-5 py-3 text-sm focus:outline-none"
            >
            <option value="India">🇮🇳 India</option>
            <option value="USA">🇺🇸 USA</option>
            <option value="UK">🇬🇧 UK</option>
            </select> */}
            <div className="relative w-full">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none w-full bg-white text-gray-800 rounded-lg px-5 pr-10 py-3 text-sm focus:outline-none"
              >
                <option value="India">🇮🇳 India</option>
                <option value="USA">🇺🇸 USA</option>
                <option value="UK">🇬🇧 UK</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block h-14 bg-white/40" />

          {/* Service Dropdown */}
          <div className="px-2">
            <label className="block text-sm mb-2">
              What Service Do You Need?
            </label>
            {/* <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-white text-gray-800 rounded-lg px-5 py-3 text-sm focus:outline-none"
            >
            <option value="Find visa options">Find visa options</option>
            <option value="Check eligibility">Check eligibility</option>
            </select> */}
            <div className="relative w-full">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none w-full bg-white text-gray-800 rounded-lg px-5 pr-10 py-3 text-sm focus:outline-none"
              >
                <option value="Find visa options">Find visa options</option>
                <option value="Check eligibility">Check eligibility</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"> */}
                {/* <MyImage src={RightIcon} alt="down arrow" className="w-4 h-4 rotate-90" /> */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block h-14 bg-white/40" />

          {/* Button */}
          <div className="flex justify-center md:justify-end px-2">
            <button className="bg-mint-green hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg text-sm">
              Get Started!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
