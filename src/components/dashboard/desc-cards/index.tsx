"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import airplaneAnimation from "@assets/animations/Airplane.json";
import checkListAnimation from "@assets/animations/CheckList.json";
import insuranceAnimation from "@assets/animations/Insurance.json";
import occupationAnimation from "@assets/animations/OccupationTracking.json";
import skillAnimation from "@assets/animations/SkillAssement.json";
import visaAnimation from "@assets/animations/Visaoption.json";
import zoomAnimation from "@assets/animations/ZoomMeeting.json";
import { useRouter } from "next/navigation";

const features = [
    {
        icon: (
            <div className="h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px]">
                <Lottie animationData={checkListAnimation} loop={true} />
            </div>
        ),
        title: "Buy Documents Checklists",
        href: "/services/checklists",
        description:
            "Get A Verified Checklist Tailored To Your Visa And Occupation.",
        span: "col-span-12 md:col-span-8 lg:col-span-5",
    },
    {
        icon: (
            <div className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px]">
                <Lottie animationData={skillAnimation} loop={true} />
            </div>
        ),
        title: "Skill Assessment",
        href: "/services/skill-assessment",
        description:
            "Check If Your Occupation Is Eligible And Buy The Step-By-Step Assessment Guide Instantly.",
        span: "col-span-12 md:col-span-8 lg:col-span-5 md:row-span-2 md:flex-col",
    },
    {
        icon: (
            <div className="h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px] lg:h-[110px] lg:w-[110px]">
                <Lottie animationData={insuranceAnimation} loop={true} />
            </div>
        ),
        title: "Buy Cheapest Insurance",
        href: "/services/insurance",
        description:
            "Compare And Purchase Affordable Overseas Health Cover From Top",
        span: "col-span-12 md:col-span-8 lg:col-span-6",
    },
    {
        icon: (
            <div className="h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px]">
                <Lottie animationData={airplaneAnimation} loop={true} />
            </div>
        ),
        title: "Smart Migration Plan",
        href: "/services/smart-migration-plan",
        description:
            "Create Your Personalized Migration Route With Our Interactive Planning.",
        span: "col-span-12 md:col-span-8",
    },
    {
        icon: (
            <div className="h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px]">
                <Lottie animationData={occupationAnimation} loop={true} />
            </div>
        ),
        title: "Occupation Tracking Tool",
        href: "/services/occupation-tracking-tool",
        description:
            "Track Updates On Your Occupation — Demand Trends, State Invites.",
        span: "col-span-12 md:col-span-8 lg:col-span-5",
    },
    {
        icon: (
            <div className="h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] md:h-[120px] md:w-[120px]">
                <Lottie animationData={visaAnimation} loop={true} />
            </div>
        ),
        title: "Find Visa Options",
        href: "/services/visa",
        description:
            "Explore Visa Types That Match Your Profile, Goals, And Timeline — Fast",
        span: "col-span-12 md:col-span-12 lg:col-span-8",
    },
    {
        icon: (
            <div className="h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] md:h-[110px] md:w-[110px]">
                <Lottie animationData={zoomAnimation} loop={true} />
            </div>
        ),
        title: "Zoom Consultations",
        href: "/services/zoom-consultation",
        description:
            "Get Expert Advice Face-To-Face — Online. Book A Call With Our",
        span: "col-span-full md:col-span-12 lg:col-span-6",
    },
];

export default function FeatureGrid() {
    const router = useRouter();
    return (
        <div className="py-10 px-[10px] sm:px-6 pt-[100px] sm:pt-[130px] md:pt-[100px] lg:pt-[160px]">
            <motion.div
                className="grid grid-cols-24 grid-rows-3 lg:grid-rows-2 gap-2 md:gap-4 auto-rows-fr cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.1 }}
            >
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        onClick={() => router.push(item.href)}
                        viewport={{ once: true, amount: 0.2 }}
                        className={`bg-white hover:bg-gradient-to-r hover:from-[#dce7ff] hover:to-[#6AF8C5] p-3 pl-1 pr-2 sm:p-4 rounded-xl shadow-md flex flex-row items-center ${item.span} `}
                    >
                        <div className="text-2xl">{item.icon}</div>

                        <div className="flex flex-col gap-1 text-left">
                            <h3 className="font-semibold text-neutrals-700 text-base">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-neutrals hidden sm:block">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
