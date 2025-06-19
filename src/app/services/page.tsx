"use client";
import React, { useState } from "react";
import PlaneIcon from "@assets/images/plane.svg";
import FileIcon from "@assets/images/file.svg";
import SearchFileIcon from "@assets/images/visa-search.svg";
import ChartIcon from "@assets/images/chart-network.svg";
import UmbrellaIcon from "@assets/images/Umbrella.svg";
import ShakehandsIcon from "@assets/images/shakehands.svg";
import VideoIcon from "@assets/images/Video.svg";
import ToolIcon from "@assets/images/ToolBox.svg";
import Boxlayout from "@/components/services/Boxlayout";
import LineLayout from "@/components/services/LineLayout";
import { motion } from "framer-motion";
import RowsIcon from "@/components/icons/RowsIcon";
import GridIcon from "@/components/icons/GridIcon";

export default function Services() {
    const services = [
        {
            title: "Smart Migration Plan (Buy Map)",
            description:
                "Create Your Personalized Migration Route With Our Interactive Planning Map.",
            color: "bg-[#E0F3FF]",
            icon: PlaneIcon,
            link: "#",
        },
        {
            title: "Buy Documents Checklists",
            description:
                "Get A Verified Checklist Tailored To Your Visa And Occupation. No Confusion. No Missing Docs.",
            color: "bg-orange-100",
            icon: FileIcon,
            link: "/services/checklists",
        },
        {
            title: "Find Visa Options",
            description:
                "Explore Visa Types That Match Your Profile, Goals, And Timeline — Fast And Accurate.",
            color: "bg-purple-100",
            icon: SearchFileIcon,
            link: "/visa",
        },
        {
            title: "Skill Assessment",
            description:
                "Check If Your Occupation Is Eligible And Buy The Step-By-Step Assessment Guide Instantly.",
            color: "bg-green-100",
            icon: ChartIcon,
            link: "/services/skill-assessment",
        },
        {
            title: "Buy Cheapest Insurance",
            description:
                "Compare And Purchase Affordable Overseas Health Cover From Top Providers.",
            color: "bg-[#FFCBCB]",
            icon: UmbrellaIcon,
            link: "/insurance",
        },
        {
            title: "Zoom Consultations",
            description:
                "Get Expert Advice Face-To-Face — Online. Book A Call With Our Migration Consultants.",
            color: "bg-yellow-100",
            icon: VideoIcon,
            link: "/services/zoom-consultation",
        },
        {
            title: "Occupation Tracking Tool",
            description:
                "Track Updates On Your Occupation — Demand Trends, State Invites, And Policy Changes.",
            color: "bg-gray-100",
            icon: ToolIcon,
            link: "/services/occupation-tracking-tool",
        },
        {
            title: "Admission & Course Change Advice",
            description:
                "Switching Your Course Or College? Get Guidance To Stay Compliant And Visa-Safe.",
            color: "bg-green-200",
            icon: ShakehandsIcon,
            link: "#",
        },
    ];

    const [displayCard, setDisplayCard] = useState(true);
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
                        <RowsIcon color={!displayCard ? '#fff' : '#7D87AB'} />
                    </button>
                    <button
                        onClick={() => setDisplayCard(true)}
                        className={`w-8 h-8 flex items-center justify-center rounded-3xl ${
                            displayCard ? "bg-navy-blue" : ""
                        }`}
                    >
                        <GridIcon color={displayCard ? '#fff' : '#7D87AB'} />
                    </button>
                </div>
            </div>
            <section className="py-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[350px] sm:max-w-none mx-auto"
                >
                    {displayCard &&
                        services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <Boxlayout
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    color={service.color}
                                    link={service.link}
                                />
                            </motion.div>
                        ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="rounded-xl bg-white"
                >
                    {!displayCard &&
                        services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <LineLayout
                                    service={service}
                                    key={index}
                                    isLast={index < services.length - 1}
                                />
                            </motion.div>
                        ))}
                </motion.div>
            </section>
        </div>
    );
}
