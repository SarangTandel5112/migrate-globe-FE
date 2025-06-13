"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    isOpen: boolean;
}

export default function FaqsSection() {
    const [faqItems, setFaqItems] = useState<FAQItem[]>([
        {
            id: "1",
            question: "What is MigrateGlobe?",
            answer: "MigrateGlobe is a comprehensive visa and immigration platform offering expert guidance for students, workers, and travelers across multiple destinations.",
            isOpen: false,
        },
        {
            id: "2",
            question: "Is visa consultation with MigrateGlobe free?",
            answer: "Our initial consultation is completely free. You'll only pay for advanced services like documentation support or premium processing packages.",
            isOpen: false,
        },
        {
            id: "3",
            question: "What are the types of visas I can apply for?",
            answer: "We help with Student Visas, Work Visas, Business Visas, Family Visas, and specialized visas like Global Talent visas.",
            isOpen: false,
        },
        {
            id: "4",
            question: "How long does the visa process usually take?",
            answer: "Visa processing times vary based on the country and type, ranging typically from 2 weeks to several months depending on the complexity.",
            isOpen: false,
        },
        {
            id: "5",
            question:
                "Can MigrateGlobe help me with SOPs, LORs, and resume writing?",
            answer: "Yes, we provide support for crafting Statements of Purpose, Letters of Recommendation, and professional resumes to strengthen your application.",
            isOpen: false,
        },
    ]);

    const toggleFAQ = (id: string) => {
        setFaqItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-10 lg:py-20 px-4 md:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-8">
                    <h2 className="font-bold text-4xl text-navy-blue tracking-[0.608px] mb-2">
                        FAQ
                    </h2>
                    <p className="text-2xl text-navy-blue-400 tracking-[0.608px]">
                        Got questions? Find answers here.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: Number(item.id) * 0.1,
                                ease: "easeOut",
                            }}
                            className="border-b border-neutrals-200 pb-5"
                        >
                            <button
                                onClick={() => toggleFAQ(item.id)}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="font-bold text-base text-navy-blue tracking-[0.608px] capitalize">
                                    {item.question}
                                </h3>

                                <motion.div
                                    animate={{ rotate: item.isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-6 h-6 flex items-center justify-center"
                                >
                                    {item.isOpen ? <MinusIcon /> : <PlusIcon />}
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {item.isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-3 text-sm text-navy-blue-400 tracking-[0.2px] capitalize">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
