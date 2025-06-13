import React from "react";
import { motion } from "framer-motion";

function ChecklistDetails() {
    return (
        <>
            {/* Image Section */}
            <motion.div
                className="w-full h-40 bg-gradient-to-r from-navy-blue to-[#515F8F] rounded-lg flex items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Visa document graphic representation */}
                <div className="absolute inset-0 opacity-20"></div>
            </motion.div>

            {/* Visa Information */}
            <motion.div
                className="space-y-4 mt-6"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                            ease: "easeOut",
                        },
                    },
                    hidden: { opacity: 0, y: 20 },
                }}
            >
                <motion.h2
                    className="font-bold text-base text-neutrals-700 tracking-[0.608px]"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.6 }}
                >
                    Global Talent visa (subclass 858)
                </motion.h2>
                <motion.p
                    className="text-base text-neutrals leading-6 tracking-[0.2px] capitalize"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Apply for the Global Talent visa (subclass 858) if you have
                    an internationally recognised record of exceptional and
                    outstanding achievement in an eligible field. To be eligible
                    for this visa, you must demonstrate that you will be of
                    benefit to the Australian community, be able to establish
                    yourself in Australia, and have a record of achievement in a
                    profession, sport, the arts, or academia and research.
                </motion.p>
            </motion.div>
        </>
    );
}

export default ChecklistDetails;
