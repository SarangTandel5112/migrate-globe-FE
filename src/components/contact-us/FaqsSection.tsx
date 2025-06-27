"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

interface FAQItem {
    id: number | string;
    question: string;
    answer: string;
    isOpen: boolean;
}

interface FaqsSectionProps {
    faqs: { id: number | string; question: string; answer: string }[];
}

export default function FaqsSection({ faqs }: FaqsSectionProps) {
    const [faqItems, setFaqItems] = useState<FAQItem[]>(
        faqs.map((faq) => ({ ...faq, isOpen: false }))
    );

    const toggleFAQ = (id: number | string) => {
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
