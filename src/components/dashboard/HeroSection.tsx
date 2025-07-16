"use client";
import GetStartedForm from "@components/dashboard/get-started";
import FeatureGrid from "@components/dashboard/desc-cards";
import Lottie from "lottie-react";
import planeAnmiation from "@assets/animations/plane.json";
import { motion } from "framer-motion";
import { HeroSectionProps } from "@/utils/interface";
import { parseMarkdownTitle } from "@/utils/richTextParser";

export default function HeroSection({ heroSection }: HeroSectionProps) {

    return (
        <div className="-mx-5 md:-mx-6 lg:-mx-8">
            <div className="bg-[url('/hero_sm.png')] md:bg-[url('/hero_md.png')] lg:bg-[url('/hero_main.png')] bg-cover bg-center w-full  -mt-20 lg:-mt-24 mx-auto relative">
                <div className="pt-[40px] sm:pt-[60px] md:pt-[120px] z-[2] relative">
                    <div className="text-center px-10 sm:px-16">
                        <motion.h1
                            className="text-navy-blue font-normal text-3xl md:text-4xl lg:text-6xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {parseMarkdownTitle(heroSection.intro.title)}
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
                            {heroSection.intro.description}
                        </motion.p>
                    </div>
                    <GetStartedForm services={heroSection.services}/>
                    <FeatureGrid services={heroSection.services} />
                </div>
                <div className="absolute top-0 z-[1]">
                    <Lottie animationData={planeAnmiation} loop={true} />
                </div>
            </div>
        </div>
    );
}
