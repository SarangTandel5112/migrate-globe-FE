"use client";
import GetStartedForm from "@components/dashboard/get-started";
import FeatureGrid from "@components/dashboard/desc-cards";
import Lottie from "lottie-react";
import planeAnmiation from "@assets/animations/plane.json";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="-mx-8">
            <div className="md:bg-[url('/hero_md.png')] lg:bg-[url('/hero_main.png')] bg-cover bg-center w-full md:-mt-20 lg:-mt-24 mx-auto relative">
                <div className="pt-[60px] md:pt-[120px]">
                    <div className="text-center px-10 sm:px-16">
                        <motion.h1
                            className="text-navy-blue font-normal text-3xl md:text-4xl lg:text-6xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Planning To Move To{" "}
                            <span className="font-bold">Australia?</span>
                        </motion.h1>

                        <motion.p
                            className="text-navy-blue-400 text-base md:text-lg mt-4 font-medium lg:text-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.2,
                            }}
                        >
                            From Visas To Universities, Job Options To
                            Eligibility Get Instant, Expert Answers.
                        </motion.p>
                    </div>
                    <GetStartedForm />
                    <FeatureGrid />
                </div>
                <div className="absolute top-0 z-[-1]">
                    <Lottie animationData={planeAnmiation} loop={true} />
                </div>
            </div>
        </div>
    );
}
