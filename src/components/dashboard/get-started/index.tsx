"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FeatureGridProps } from "@/utils/interface";
import { useRouter } from "next/navigation";

const GetStartedForm = ({ services }: FeatureGridProps) => {
  // Change service state to store value, and define options as label/value pairs
  const serviceOptions = services.map((service) => ({
    label: service?.title,
    value: service?.key,
  }));
  const countries = [
    { value: "India", label: "🇮🇳 India" },
    { value: "USA", label: "🇺🇸 USA" },
    { value: "UK", label: "🇬🇧 UK" },
    { value: "Australia", label: "🇦🇺 Australia" },
    { value: "Canada", label: "🇨🇦 Canada" },
    { value: "Germany", label: "🇩🇪 Germany" },
    { value: "France", label: "🇫🇷 France" },
    { value: "Italy", label: "🇮🇹 Italy" },
    { value: "Japan", label: "🇯🇵 Japan" },
    { value: "South Korea", label: "🇰🇷 South Korea" },
    { value: "China", label: "🇨🇳 China" },
    { value: "Brazil", label: "🇧🇷 Brazil" },
    { value: "South Africa", label: "🇿🇦 South Africa" },
    { value: "Russia", label: "🇷🇺 Russia" },
    { value: "New Zealand", label: "🇳🇿 New Zealand" },
    { value: "Singapore", label: "🇸🇬 Singapore" },
    { value: "Ireland", label: "🇮🇪 Ireland" },
    { value: "Netherlands", label: "🇳🇱 Netherlands" },
    { value: "Spain", label: "🇪🇸 Spain" },
    { value: "Sweden", label: "🇸🇪 Sweden" },
  ];

  const [country, setCountry] = useState("India");
  const [service, setService] = useState(serviceOptions[0].value);
  const router = useRouter();

  const onGetStarted = () => {
    router.push(`/services/${service}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-10 sm:px-16 hidden md:block"
    >
      <div className="mt-10 bg-navy-blue text-white max-w-6xl mx-auto my-10 rounded-2xl px-6 py-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_auto] items-end gap-4 md:gap-0">
          {/* Country Dropdown */}
          <div className="px-2">
            <label className="block text-sm mb-2">I Am From?</label>
            <div className="relative w-full">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none w-full bg-white text-gray-800 rounded-lg px-5 pr-10 py-3 text-sm focus:outline-none"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
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
            <div className="relative w-full">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="appearance-none w-full bg-white text-gray-800 rounded-lg px-5 pr-10 py-3 text-sm focus:outline-none"
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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

          {/* Vertical Divider 2 */}
          <div className="hidden md:block h-14 bg-white/40" />

          {/* Button */}
          <div className="flex justify-center md:justify-end px-2">
            <motion.button
              onClick={onGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-mint-green text-black font-semibold px-6 py-3 rounded-lg text-sm"
            >
              Get Started!
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetStartedForm;
