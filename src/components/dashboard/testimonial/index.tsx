"use client";

import { motion, easeOut } from "framer-motion";
import MyImage from "@/ui/myImage";
import RightIcon from "@assets/images/right-icon.svg";
import RahulImg from "@assets/images/rahul.png";
import { containerVariants } from "@/utils/animation-variant";

function Testimonials() {
    return (
        <motion.div
            className="container-1200"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-center text-navy-blue text-heading-large font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                What Our Clients Says
            </motion.h2>

            <motion.div
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* Left: Client Image + Label */}
                <motion.div
                    className="w-full md:w-[360px] flex-shrink-0 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                        <MyImage
                            src={RahulImg}
                            alt="Rahul Mehra"
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute left-4 bottom-4 bg-white px-3 py-1 rounded-md text-xs text-navy-blue text-left shadow">
                            Rahul Mehra
                            <br />
                            Skilled Independent Visa – Subclass 189
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text & Arrows */}
                <motion.div
                    className="flex flex-col text-left justify-between w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    <div>
                        <h3 className="text-heading-large2 font-semibold text-navy-blue mb-4 leading-snug">
                            Landing My Dream Job In Australia – Stress-Free!
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            MigrateGlobe made the entire visa process crystal
                            clear. I used their visa points calculator and
                            instantly knew I was eligible for Subclass 189.
                            Their team helped fine-tune my documentation and
                            guided me through every government touchpoint.
                            Today, I&apos;m living and working in Sydney as a
                            Data Analyst — all thanks to them!
                        </p>
                    </div>

                    {/* Bottom Arrows */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button className="w-10 h-10 rounded-full bg-[#f0f1f7] flex items-center justify-center">
                            <MyImage
                                src={RightIcon}
                                alt="left-icon"
                                className="rotate-180 w-3 h-3"
                            />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-navy-blue text-white flex items-center justify-center">
                            <MyImage
                                src={RightIcon}
                                alt="right-icon"
                                className="w-3 h-3"
                            />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Testimonials;
