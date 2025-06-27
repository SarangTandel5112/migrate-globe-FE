// components/services/ServicesClient.tsx
"use client";

import React, { useState } from "react";
import RowsIcon from "@/components/icons/RowsIcon";
import GridIcon from "@/components/icons/GridIcon";
import Boxlayout from "@/components/services/Boxlayout";
import LineLayout from "@/components/services/LineLayout";
import { motion } from "framer-motion";
import PlaneIcon from "@assets/images/plane.svg";
import FileIcon from "@assets/images/file.svg";
import SearchFileIcon from "@assets/images/visa-search.svg";
import ChartIcon from "@assets/images/chart-network.svg";
import UmbrellaIcon from "@assets/images/Umbrella.svg";
import ShakehandsIcon from "@assets/images/shakehands.svg";
import VideoIcon from "@assets/images/Video.svg";
import ToolIcon from "@assets/images/ToolBox.svg";
import { Service } from "@/utils/interface";

const ICON_MAP: Record<string, string> = {
    "smart-migration-plan": PlaneIcon,
    checklists: FileIcon,
    visa: SearchFileIcon,
    "skill-assessment": ChartIcon,
    insurance: UmbrellaIcon,
    "zoom-consultation": VideoIcon,
    "occupation-tracking-tool": ToolIcon,
    "course-advice": ShakehandsIcon,
};

const COLOR_MAP: Record<string, string> = {
    "smart-migration-plan": "bg-[#E0F3FF]",
    checklists: "bg-orange-100",
    visa: "bg-purple-100",
    "skill-assessment": "bg-green-100",
    insurance: "bg-[#FFCBCB]",
    "zoom-consultation": "bg-yellow-100",
    "occupation-tracking-tool": "bg-gray-100",
    "course-advice": "bg-green-200",
};

export default function Services({ services }: { services: Service[] }) {
    const [displayCard, setDisplayCard] = useState(true);

    const mapped = services.map((item) => ({
        title: item?.title,
        description: item?.subtitle,
        link: `/services/${item?.key}`,
        color: COLOR_MAP[item?.key] || "bg-gray-100",
        icon: ICON_MAP[item?.key] || ToolIcon,
    }));

    return (
        <div className="container-1200">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-heading1 text-navy-blue">
                    Services We Offer
                </h1>
                <div className="flex gap-1 bg-white rounded-3xl p-1">
                    <button
                        onClick={() => setDisplayCard(false)}
                        className={`w-8 h-8 flex items-center justify-center rounded-3xl ${
                            !displayCard ? "bg-navy-blue" : ""
                        }`}
                    >
                        <RowsIcon color={!displayCard ? "#fff" : "#7D87AB"} />
                    </button>
                    <button
                        onClick={() => setDisplayCard(true)}
                        className={`w-8 h-8 flex items-center justify-center rounded-3xl ${
                            displayCard ? "bg-navy-blue" : ""
                        }`}
                    >
                        <GridIcon color={displayCard ? "#fff" : "#7D87AB"} />
                    </button>
                </div>
            </div>

            <section className="py-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {displayCard &&
                        mapped.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Boxlayout {...service} />
                            </motion.div>
                        ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl bg-white"
                >
                    {!displayCard &&
                        mapped.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <LineLayout
                                    service={service}
                                    isLast={index < mapped.length - 1}
                                />
                            </motion.div>
                        ))}
                </motion.div>
            </section>
        </div>
    );
}
