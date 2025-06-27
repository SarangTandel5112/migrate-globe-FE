"use client";

import { motion } from "framer-motion";
import CallIcon from "../icons/CallIcon";
import LocationCard from "./LocationCard";
import { fadeUpVariants } from "@/utils/animation-variant";

interface Location {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
}
interface Phone {
    id: number;
    name: string;
    number: string;
}
interface Email {
    id: number;
    name: string;
    email: string;
}

interface MapSectionProps {
    locations: Location[];
    phones: Phone[];
    emails: Email[];
}

function MapSection({ locations, phones, emails }: MapSectionProps) {
    return (
        <div className="lg:w-3/5 bg-navy-blue relative">
            <div className="p-10">
                {/* Contact Info Header */}
                <motion.div
                    className="flex flex-col lg:flex-row gap-10 mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUpVariants}
                >
                    <div className="flex-1">
                        <h3 className="font-bold text-sm text-neutrals-0 tracking-[0.608px] capitalize mb-1">
                            E-mail
                        </h3>
                        {emails.map((email) => (
                            <p key={email.id} className="text-base text-neutrals-0 tracking-[0.608px]">
                                📧 {email.email}
                            </p>
                        ))}
                    </div>

                    <div>
                        <h3 className="font-bold text-sm text-neutrals-0 tracking-[0.608px] capitalize mb-1">
                            Phone
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                            {phones.map((phone) => (
                                <div key={phone.id} className="flex items-center gap-2">
                                    <CallIcon />
                                    <span className="text-base text-neutrals-0 tracking-[0.608px] capitalize">
                                        {phone.number}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* World Map */}
                <motion.div
                    className="h-96 bg-navy-blue relative mb-8 overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Simplified world map with dot pattern */}
                    <div className="absolute inset-0 opacity-30">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 600 300"
                            className="w-full h-full"
                        >
                            {/* Create dot pattern for world map effect */}
                            <defs>
                                <pattern
                                    id="dots"
                                    patternUnits="userSpaceOnUse"
                                    width="8"
                                    height="8"
                                >
                                    <circle
                                        cx="4"
                                        cy="4"
                                        r="1"
                                        fill="#7D87AB"
                                    />
                                </pattern>
                            </defs>
                            {/* Continental shapes using dot pattern */}
                            <path
                                d="M50 80 Q100 60 150 80 Q200 100 250 90 Q300 70 350 90 L350 140 Q300 120 250 130 Q200 150 150 130 Q100 110 50 130 Z"
                                fill="url(#dots)"
                            />
                            <path
                                d="M100 160 Q150 140 200 160 Q250 180 300 170 L300 220 Q250 230 200 210 Q150 190 100 210 Z"
                                fill="url(#dots)"
                            />
                            <path
                                d="M350 100 Q400 80 450 100 Q500 120 550 110 L550 160 Q500 170 450 150 Q400 130 350 150 Z"
                                fill="url(#dots)"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* Our Locations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.7,
                                ease: "easeOut",
                                staggerChildren: 0.2,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="mb-8"
                >
                    <h2 className="font-bold text-2xl text-white capitalize mb-4">
                        Our Locations
                    </h2>

                    <div className="flex flex-col gap-4 md:flex-row">
                        {locations.slice(0, 3).map((office, index) => (
                            <motion.div
                                key={office.id}
                                variants={fadeUpVariants}
                                custom={index}
                                className="w-full lg:w-1/3 flex"
                            >
                                <div className="h-full w-full">
                                    <LocationCard {...office} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Second row: 2 equal-height cards */}
                    <div className="flex flex-col gap-4 md:flex-row mt-4">
                        {locations.slice(3).map((office, index) => (
                            <motion.div
                                key={office.id}
                                variants={fadeUpVariants}
                                custom={index + 3}
                                className="w-full lg:w-1/2 flex"
                            >
                                <div className="h-full w-full">
                                    <LocationCard {...office} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default MapSection;
