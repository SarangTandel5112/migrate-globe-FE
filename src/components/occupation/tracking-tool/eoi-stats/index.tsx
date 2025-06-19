'use client'
import MyImage from '@/ui/myImage'
import React, { useState } from 'react'
import Check from "@assets/images/Check.svg";
import { AnimatePresence, motion } from 'framer-motion';

const EOIStatistics = ({ chartColors }: any) => {
    const [showEOIStats, setShowEOIStats] = useState(true)
    return (
        <div className="bg-white rounded-xl border border-neutrals-100 p-4 md:p-4">
            <div
                className="flex justify-between items-center cursor-pointer mb-0"
                onClick={() => setShowEOIStats(!showEOIStats)}
            >
                <h2 className="text-neutrals-700 text-base font-semibold">
                    EOI Statistics
                </h2>
                <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    className={`transition-transform ${showEOIStats ? "rotate-180" : ""}`}
                >
                    <path
                        d="M1 1L7 7L13 1"
                        stroke="#808080"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <AnimatePresence initial={false}>
                {showEOIStats && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-neutrals-100 mt-4 pt-5"
                    >
                        {/* Mobile Filter Dropdowns */}
                        <div className="flex flex-row md:hidden gap-3 mb-6">
                            <select className="w-full px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                <option>Submitted</option>
                                <option>Logged</option>
                                <option>Held</option>
                                <option>Invited</option>
                            </select>

                            <select className="w-full px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                <option>April</option>
                            </select>
                            <select className="w-full px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                <option>2025</option>
                            </select>
                        </div>

                        {/* Desktop Filter Controls */}
                        <div className="hidden md:flex justify-between items-center mb-6">
                            <div className="flex gap-2">
                                {["Submitted", "Logged", "Held", "Invited"].map((status) => (
                                    <button
                                        key={status}
                                        className="px-3 py-2 bg-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <select className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                    <option>April</option>
                                </select>
                                <select className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                    <option>2025</option>
                                </select>
                            </div>
                        </div>

                        {/* Chart Legend */}
                        <div className="flex flex-wrap justify-start md:justify-end gap-4 mb-4">
                            {chartColors.map((item: any, index: any) => (
                                <div key={index} className="flex items-center gap-1">
                                    <div
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <span className="text-neutrals-700 text-xs">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Chart View Dropdown for Mobile */}
                        <div className="md:hidden mb-6 flex justify-end">
                            <select className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium">
                                <option>Chart View</option>
                                <option>Table View</option>
                            </select>
                        </div>

                        {/* Chart/Table Toggle for Desktop */}
                        <div className="hidden md:flex justify-end gap-2 mb-6">
                            {["Chart View", "Table View"].map((view) => (
                                <button
                                    key={view}
                                    className="px-3 py-2 bg-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                                >
                                    {view}
                                </button>
                            ))}
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            {[
                                "Subclass 189 Skilled Independent visa (Points-tested stream)",
                                "Subclass 190 Skilled Nominated visa",
                                "Subclass 491 (Family Sponsored stream)",
                                "Subclass 491 (State Sponsored stream)",
                            ].map((title, index) => (
                                <div key={index} className="flex flex-col items-center gap-6">
                                    <div className="w-40 h-40 flex items-center justify-center">
                                        {/* Dummy SVG Pie Chart */}
                                        <svg
                                            width="130"
                                            height="130"
                                            viewBox="0 0 36 36"
                                            className="rotate-[-90deg]"
                                        >
                                            <circle cx="18" cy="18" r="15.915" fill="white" />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="transparent"
                                                stroke="#2F4F4F"
                                                strokeWidth="4"
                                                strokeDasharray="20 80"
                                                strokeDashoffset="0"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="transparent"
                                                stroke="#3D6B6B"
                                                strokeWidth="4"
                                                strokeDasharray="20 80"
                                                strokeDashoffset="-20"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="transparent"
                                                stroke="#5D9C9C"
                                                strokeWidth="4"
                                                strokeDasharray="20 80"
                                                strokeDashoffset="-40"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="transparent"
                                                stroke="#A7DED9"
                                                strokeWidth="4"
                                                strokeDasharray="20 80"
                                                strokeDashoffset="-60"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="transparent"
                                                stroke="#DBF5F1"
                                                strokeWidth="4"
                                                strokeDasharray="20 80"
                                                strokeDashoffset="-80"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-neutrals-800 font-medium text-sm text-center tracking-[0.608px]">
                                        {title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="border-t border-neutrals-100 pt-6">
                            <div className="flex items-start gap-2 align-baseline">
                                <MyImage
                                    src={Check}
                                    alt="Check"
                                    className="w-5 h-5 align-baseline mt-1"
                                    height="16"
                                    width="16"
                                />
                                <p className="text-neutrals-600 mt-1 text-base leading-normal align-baseline">
                                    An EOI that meets all the requirements for all selected visa
                                    subclasses and has all fields completed can be submitted.
                                    Once submitted, points are attributed to the EOI based on
                                    the information provided. Submitted EOIs are eligible for
                                    selection in an invitation round, by a State and Territory
                                    government agency or Austrade, depending on the visa
                                    subclass(es) selected.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default EOIStatistics