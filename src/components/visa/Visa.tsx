"use client";

import CommonCard from "@/components/layout/CommonCard";
import TitleDescription from "@/components/common/TitleDescription";
import React from "react";
import { motion } from "framer-motion";
import { VisaType } from "@/utils/interface";

interface VisaProps {
    visaTypes: VisaType[];
}

function Visa({ visaTypes }: VisaProps) {
    return (
        <div>
            <div className="mb-6 sm:mb-10">
                <TitleDescription
                    title="Explore the Right Visa for Your Journey"
                    description="Find detailed information about different visa categories based on your purpose — whether you're studying, working, reuniting with family, or exploring new destinations."
                />
            </div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {visaTypes.map((visa) => (
                    <motion.div
                        key={visa.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: visa.order * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <CommonCard
                            image={{ src: "/india.png", alt: visa.name }}
                            title={visa.name}
                            key={visa.id}
                            description={visa.description}
                            wrapperClassName="shadow-sm border-gray-200 hover:shadow-md"
                            link={{ href: `/visa/${visa.documentId}`, label: "Get Details" }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Visa;
