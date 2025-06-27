"use client";

import TitleDescription from "@/components/common/TitleDescription";
import VisaCard from "@/components/layout/VisaCard";
import { Insight } from "@/utils/interface";
import { motion } from "framer-motion";
import React from "react";

interface InsightsProps {
    insights: Insight[];
}

function Insights({ insights }: InsightsProps) {
    return (
        <div>
            <div className="mb-6 sm:mb-10">
                <TitleDescription
                    title="Insights & Updates"
                    description="Stay informed with the latest news, reforms, and expert tips on Australian visas and migration."
                />
            </div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {insights.map((insight) => (
                    <motion.div
                        key={insight.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: insight.order * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <VisaCard
                            title={insight.title}
                            description={insight.subtitle}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Insights;
