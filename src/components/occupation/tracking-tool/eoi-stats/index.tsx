"use client";
import MyImage from "@/ui/myImage";
import React, { useState, useEffect, useMemo } from "react";
import Check from "@assets/images/Check.svg";
import { AnimatePresence, motion } from "framer-motion";

interface ChartColorProps {
    color: string;
    label: string;
}

interface EOIData {
    visa_type: string;
    point: string;
    EOI_count: string;
    EOI_status: string;
    EOI_month: string;
    EOI_year: string;
    VType: string;
    color: string;
    visa_title: string;
}

interface EOIStatisticsProps {
    chartColors: ChartColorProps[];
    eoiStatistics?: any;
}

const MONTHS = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
];

const STATUSES = ["SUBMITTED", "LOGGED", "HELD", "INVITED"];

const EOIStatistics = ({ chartColors, eoiStatistics }: EOIStatisticsProps) => {
    const [showEOIStats, setShowEOIStats] = useState(true);

    // Get available years and months from data
    const availableYears = useMemo(() => {
        if (!eoiStatistics) return [];
        return Object.keys(eoiStatistics).sort().reverse(); // Most recent first
    }, [eoiStatistics]);

    const getAvailableMonths = (year: string) => {
        if (!eoiStatistics || !eoiStatistics[year]) return [];
        return Object.keys(eoiStatistics[year]).sort();
    };

    // Initialize with the latest available year and month
    const [selectedYear, setSelectedYear] = useState(() => {
        return availableYears[0] || new Date().getFullYear().toString();
    });

    const availableMonths = useMemo(() => getAvailableMonths(selectedYear), [eoiStatistics, selectedYear]);

    const [selectedMonth, setSelectedMonth] = useState(() => {
        const months = getAvailableMonths(availableYears[0] || new Date().getFullYear().toString());
        return months[months.length - 1] || String(new Date().getMonth() + 1).padStart(2, '0');
    });

    const [selectedStatus, setSelectedStatus] = useState("SUBMITTED");
    const [viewMode, setViewMode] = useState<"chart" | "table">("chart");

    // Update available months when year changes
    useEffect(() => {
        const months = getAvailableMonths(selectedYear);
        if (months.length > 0 && !months.includes(selectedMonth)) {
            setSelectedMonth(months[months.length - 1]); // Set to latest month
        }
    }, [selectedYear]);

    // Extract EOI data for selected filters
    const eoiData = useMemo(() => {
        if (!eoiStatistics || !eoiStatistics[selectedYear]?.[selectedMonth]?.[selectedStatus]) {
            return [];
        }

        const statusData = eoiStatistics[selectedYear][selectedMonth][selectedStatus];
        if (statusData.recordsets && statusData.recordsets[1]) {
            return statusData.recordsets[1] as EOIData[];
        }
        return [];
    }, [eoiStatistics, selectedYear, selectedMonth, selectedStatus]);

    // Calculate pie chart data
    const calculatePieData = (visaTitle: string) => {
        const data = eoiData.filter((item: EOIData) => item.visa_title === visaTitle);
        if (data.length === 0) return [];

        const total = data.reduce((sum: number, item: EOIData) => sum + parseInt(item.EOI_count || '0'), 0);

        return data.map((item: EOIData) => ({
            ...item,
            percentage: total > 0 ? (parseInt(item.EOI_count) / total) * 100 : 0,
        }));
    };

    const visaSubclasses = [
        "Subclass 189 Skilled Independent visa (Points-tested stream)",
        "Subclass 190 Skilled Nominated visa",
        "Subclass 491 (Family Sponsored stream)",
        "Subclass 491 (State Sponsored stream)",
    ];

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
                    className={`transition-transform ${
                        showEOIStats ? "rotate-180" : ""
                    }`}
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
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="w-full px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                            >
                                {STATUSES.map((status) => (
                                    <option key={status} value={status}>
                                        {status.charAt(0) + status.slice(1).toLowerCase()}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="w-full px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                            >
                                {availableMonths.length > 0 ? (
                                    availableMonths.map((monthValue) => {
                                        const monthData = MONTHS.find(m => m.value === monthValue);
                                        return (
                                            <option key={monthValue} value={monthValue}>
                                                {monthData?.label || monthValue}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option value="">No data</option>
                                )}
                            </select>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                            >
                                {availableYears.length > 0 ? (
                                    availableYears.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No data</option>
                                )}
                            </select>
                        </div>

                        {/* Desktop Filter Controls */}
                        <div className="hidden md:flex justify-between items-center mb-6">
                            <div className="flex gap-2">
                                {STATUSES.map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setSelectedStatus(status)}
                                        className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                                            selectedStatus === status
                                                ? "bg-navy-blue text-white"
                                                : "bg-neutrals-100 text-navy-blue-400 hover:bg-neutrals-200"
                                        }`}
                                    >
                                        {status.charAt(0) + status.slice(1).toLowerCase()}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)}
                                    className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                                >
                                    {availableMonths.length > 0 ? (
                                        availableMonths.map((monthValue) => {
                                            const monthData = MONTHS.find(m => m.value === monthValue);
                                            return (
                                                <option key={monthValue} value={monthValue}>
                                                    {monthData?.label || monthValue}
                                                </option>
                                            );
                                        })
                                    ) : (
                                        <option value="">No data</option>
                                    )}
                                </select>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                                >
                                    {availableYears.length > 0 ? (
                                        availableYears.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="">No data</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        {/* Chart Legend */}
                        <div className="flex flex-wrap justify-start md:justify-end gap-4 mb-4">
                            {chartColors.map(
                                (item: ChartColorProps, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1"
                                    >
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{
                                                backgroundColor: item.color,
                                            }}
                                        ></div>
                                        <span className="text-neutrals-700 text-xs">
                                            {item.label}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Chart View Dropdown for Mobile */}
                        <div className="md:hidden mb-6 flex justify-end">
                            <select
                                value={viewMode}
                                onChange={(e) => setViewMode(e.target.value as "chart" | "table")}
                                className="px-3 py-2 bg-white border border-neutrals-100 rounded-full text-navy-blue-400 text-xs font-medium"
                            >
                                <option value="chart">Chart View</option>
                                <option value="table">Table View</option>
                            </select>
                        </div>

                        {/* Chart/Table Toggle for Desktop */}
                        <div className="hidden md:flex justify-end gap-2 mb-6">
                            <button
                                onClick={() => setViewMode("chart")}
                                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                                    viewMode === "chart"
                                        ? "bg-navy-blue text-white"
                                        : "bg-neutrals-100 text-navy-blue-400 hover:bg-neutrals-200"
                                }`}
                            >
                                Chart View
                            </button>
                            <button
                                onClick={() => setViewMode("table")}
                                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                                    viewMode === "table"
                                        ? "bg-navy-blue text-white"
                                        : "bg-neutrals-100 text-navy-blue-400 hover:bg-neutrals-200"
                                }`}
                            >
                                Table View
                            </button>
                        </div>

                        {/* No Data Message */}
                        {(!eoiStatistics || eoiData.length === 0) && (
                            <div className="text-center py-12">
                                <p className="text-neutrals-600 text-sm">
                                    No EOI statistics available for {MONTHS.find(m => m.value === selectedMonth)?.label} {selectedYear}
                                </p>
                            </div>
                        )}

                        {/* Charts Grid or Table */}
                        {eoiData.length > 0 && (
                            viewMode === "chart" ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                    {visaSubclasses.map((title, index) => {
                                        const visaData = calculatePieData(title);
                                        const total = visaData.reduce((sum, item) => sum + parseInt(item.EOI_count), 0);

                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center gap-4"
                                            >
                                                <div className="w-40 h-40 flex items-center justify-center relative">
                                                    {total > 0 ? (
                                                        <>
                                                            <svg
                                                                width="130"
                                                                height="130"
                                                                viewBox="0 0 36 36"
                                                                className="rotate-[-90deg]"
                                                            >
                                                                <circle
                                                                    cx="18"
                                                                    cy="18"
                                                                    r="15.915"
                                                                    fill="white"
                                                                />
                                                                {visaData.map((item, idx) => {
                                                                    const previousPercentage = visaData
                                                                        .slice(0, idx)
                                                                        .reduce((sum, d) => sum + d.percentage, 0);
                                                                    // Use theme colors
                                                                    const colors = ["#2F4F4F", "#3D6B6B", "#5D9C9C", "#A7DED9", "#DBF5F1"];
                                                                    return (
                                                                        <circle
                                                                            key={idx}
                                                                            cx="18"
                                                                            cy="18"
                                                                            r="15.915"
                                                                            fill="transparent"
                                                                            stroke={colors[idx % colors.length]}
                                                                            strokeWidth="4"
                                                                            strokeDasharray={`${item.percentage} ${100 - item.percentage}`}
                                                                            strokeDashoffset={`-${previousPercentage}`}
                                                                        />
                                                                    );
                                                                })}
                                                            </svg>
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <span className="text-navy-blue font-bold text-lg">{total}</span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="text-neutrals-400 text-sm">No data</div>
                                                    )}
                                                </div>
                                                <p className="text-neutrals-800 font-medium text-sm text-center tracking-[0.608px]">
                                                    {title}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full text-sm">
                                        <thead className="bg-neutrals-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-neutrals-700">Visa Type</th>
                                                <th className="px-4 py-3 text-left font-semibold text-neutrals-700">Points</th>
                                                <th className="px-4 py-3 text-right font-semibold text-neutrals-700">Count</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {eoiData.map((item: EOIData, idx: number) => {
                                                const colors = ["#2F4F4F", "#3D6B6B", "#5D9C9C", "#A7DED9", "#DBF5F1"];
                                                return (
                                                    <tr key={idx} className="border-t border-neutrals-100 hover:bg-neutrals-50">
                                                        <td className="px-4 py-3 text-neutrals-700">
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                                                    style={{ backgroundColor: colors[idx % colors.length] }}
                                                                />
                                                                {item.visa_title}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-neutrals-600">{item.point}</td>
                                                        <td className="px-4 py-3 text-right font-medium text-neutrals-700">
                                                            {parseInt(item.EOI_count).toLocaleString()}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        )}

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
                                    An EOI that meets all the requirements for
                                    all selected visa subclasses and has all
                                    fields completed can be submitted. Once
                                    submitted, points are attributed to the EOI
                                    based on the information provided. Submitted
                                    EOIs are eligible for selection in an
                                    invitation round, by a State and Territory
                                    government agency or Austrade, depending on
                                    the visa subclass(es) selected.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EOIStatistics;
