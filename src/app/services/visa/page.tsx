"use client";

import CommonCard from "@/components/layout/CommonCard";
import TitleDescription from "@/components/common/TitleDescription";
import React from "react";
import { motion } from "framer-motion";

function page() {
    const visaTypes = [
        {
            title: "Student Visa",
            description:
                "For International Students Looking To Pursue Education Abroad.",
            image: "/images/student.jpg",
        },
        {
            title: "Family Visa",
            description: "Reunite With Your Loved Ones Across Borders.",
            image: "/images/family.jpg",
        },
        {
            title: "Tourist Visa",
            description:
                "Discover The World With A Visa Tailored For Travel And Tourism.",
            image: "/images/tourist.jpg",
        },
        {
            title: "Business Visa",
            description:
                "For Professionals Attending Meetings, Conferences, Or Short-Term Work.",
            image: "/images/business.jpg",
        },
        {
            title: "Work Visa",
            description:
                "Build Your Career Internationally With A Legal Work Permit.",
            image: "/images/work.jpg",
        },
        {
            title: "Diplomatic Visa",
            description:
                "Reserved For Government Officials And Diplomatic Missions.",
            image: "/images/diplomatic.jpg",
        },
    ];

    return (
        <div className="container-1200">
            <div className="mb-6 sm:mb-10">
                <TitleDescription
                    title="Explore the Right Visa for Your Journey"
                    description="Find detailed information about different visa categories based
                on your purpose — whether you’re studying, working, reuniting
                with family, or exploring new destinations."
                />
            </div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {visaTypes.map((visa, index) => (
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
                        <CommonCard
                            image={{ src: "/india.png", alt: visa.title }}
                            title={visa.title}
                            key={index}
                            description={visa.description}
                            // wrapperClassName="hover:scale-105"
                            wrapperClassName="shadow-sm border-gray-200 hover:shadow-md"
                            link={{ href: "visa/2", label: "Get Details" }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default page;
