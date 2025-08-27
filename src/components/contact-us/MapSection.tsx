"use client";
import { motion } from "framer-motion";
import CallIcon from "../icons/CallIcon";
import LocationCard from "./LocationCard";
import { fadeUpVariants } from "@/utils/animation-variant";
import IconMap from "../icons/map";
import { useState } from "react";

interface Location {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
    x: number;
    y: number;
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
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(locations?.[0] || null);
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
                    <div className="relative w-full overflow-y-auto inset-0 opacity-30">
                        <IconMap />
                        {locations?.map((loc: Location) => (
                            <div
                                key={loc.id}
                                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                                style={{ left: loc.x, top: loc.y }}
                                onClick={() => setSelectedLocation(loc)}
                            >
                                {/* Marker Circle with Location Icon */}
                                {selectedLocation?.id === loc.id && <div
                                    className={`relative w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedLocation?.id === loc.id
                                            ? "border-green-400 scale-110 shadow-lg"
                                            : ""
                                        }`}
                                >
                                    {/* Location Pin Icon */}
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                </div>}

                                {/* Label Bubble for selected marker */}
                                {selectedLocation?.id === loc.id && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-fade-in">
                                        <div className="relative px-3 py-1 bg-green-400 text-black rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap border border-green-500">
                                            {/* Location Icon in bubble */}
                                            <svg className="w-4 h-4 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            <span className="font-medium">{loc.name}</span>

                                            {/* Triangular pointer */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rotate-45"></div>
                                        </div>
                                    </div>
                                )}

                                {/* Subtle hover effect for non-selected markers */}
                                {/* {selectedLocation?.id !== loc.id && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                            {loc.name}
                                        </div>
                                    </div>
                                )} */}
                            </div>
                        ))}
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
                                className="w-full lg:w-1/3 flex cursor-pointer"
                            >
                                <div className="h-full w-full" onClick={() => setSelectedLocation(office)}>
                                    <LocationCard {...office} selectedLocation={selectedLocation} />
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
                                className="w-full lg:w-1/2 flex cursor-pointer"
                            >
                                <div className="h-full w-full" onClick={() => setSelectedLocation(office)}>
                                    <LocationCard {...office} selectedLocation={selectedLocation} />
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
