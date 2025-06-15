import React from "react";
import Lottie from "lottie-react";
import animationData from "@assets/vlogger.json";
import { motion } from "framer-motion";

const features = [
    {
        icon: (
            <div className="h-[70px] w-[70px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Buy Documents Checklists",
        description:
            "Get A Verified Checklist Tailored To Your Visa And Occupation.",
        span: "col-span-8 lg:col-span-5",
    },
    {
        icon: (
            <div className="h-[200px] w-[200px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Skill Assessment",
        description:
            "Check If Your Occupation Is Eligible And Buy The Step-By-Step Assessment Guide Instantly.",
        span: "col-span-8 lg:col-span-5 row-span-2",
    },
    {
        icon: (
            <div className="h-[70px] w-[70px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Buy Cheapest Insurance",
        description:
            "Compare And Purchase Affordable Overseas Health Cover From Top",
        span: "col-span-8 lg:col-span-6",
    },
    {
        icon: (
            <div className="h-[70px] w-[70px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Smart Migration Plan",
        description:
            "Create Your Personalized Migration Route With Our Interactive Planning.",
        span: "col-span-8",
    },
    {
        icon: (
            <div className="h-[70px] w-[70px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Occupation Tracking Tool",
        description:
            "Track Updates On Your Occupation — Demand Trends, State Invites.",
        span: "col-span-8 lg:col-span-5",
    },
    {
        icon: (
            <div className="h-[70px] w-[70px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Find Visa Options",
        description:
            "Explore Visa Types That Match Your Profile, Goals, And Timeline — Fast",
        span: "col-span-12 lg:col-span-8",
    },
    {
        icon: (
            <div className="h-[70px] w-[70px]">
                <Lottie animationData={animationData} loop={true} />
            </div>
        ),
        title: "Zoom Consultations",
        description:
            "Get Expert Advice Face-To-Face — Online. Book A Call With Our",
        span: "col-span-12 lg:col-span-6",
    },
];

export default function FeatureGrid() {
    return (
        <div className="py-10 px-6 md:pt-[100px] lg:pt-[160px]">
            <motion.div
                className="grid grid-cols-24 grid-rows-3 lg:grid-rows-2 gap-4 auto-rows-fr"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }} // 👈 triggers when 20% visible
            >
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.2 }} // 👈 apply here as well
                        className={`bg-white p-4 rounded-xl shadow-md flex flex-col gap-2 ${item.span}`}
                    >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex flex-col gap-1 text-left">
                            <h3 className="font-semibold text-neutrals-700 text-base">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-neutrals">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
