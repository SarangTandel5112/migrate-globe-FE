"use client";

import { easeOut, motion } from "framer-motion";
import VisaDetail from "@/components/visa/VisaDetails";
import VisaTypeCard from "@/components/visa/VisaTypeCard";

const visaTypes = [
    {
        title: "Student Visa (Subclass 500)",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        active: true,
    },
    {
        title: "Student Guardian Visa (Subclass 590)",
        description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
        active: false,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easeOut, // ✅ Correct type for Framer Motion v10+
        },
    },
};

export default function Page() {
    return (
        <div className="container-1200">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex justify-between items-start">
                    <h1 className="text-heading1 text-navy-blue">
                        Student Visa
                    </h1>
                    <button className="bg-navy-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                        Book a Consultation
                    </button>
                </div>

                <div className="border-b border-[#DEE2E5]"></div>

                {/* Animated Visa Type Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {visaTypes.map((type, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <VisaTypeCard
                                title={type.title}
                                description={type.description}
                                active={type.active}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Heading */}
                <motion.h3
                    className="text-heading1 text-navy-blue"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Student Visa (Subclass 500)
                </motion.h3>

                {/* Animated Visa Detail */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <VisaDetail />
                </motion.div>
            </div>
        </div>
    );
}
