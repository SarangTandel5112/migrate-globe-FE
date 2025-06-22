"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MyImage from "@/ui/myImage";
import RightIcon from "@assets/images/right-icon.svg";
import VideoCard from "@/components/layout/VideoCard";
import { childVariants, containerVariants } from "@/utils/animation-variant";

const videos = [
    {
        youtubeId: "dQw4w9WgXcQ",
        title: "Top 5 Mistakes To Avoid During Your Visa Interview",
        description:
            "Visa interviews can be stressful — avoid these common mistakes!",
    },
    {
        youtubeId: "dQw4w9WgXcQ",
        title: "Avoid Common Mistakes During Your Visa Interview",
        description:
            "Visa interviews can be stressful — avoid these common mistakes!",
    },
    {
        youtubeId: "dQw4w9WgXcQ",
        title: "Visa Interview Tips During Your Visa Interview",
        description:
            "Visa interviews can be stressful — avoid these common mistakes!",
    },
    {
        youtubeId: "dQw4w9WgXcQ",
        title: "Visa Interview Tips During Your Visa Interview",
        description:
            "Visa interviews can be stressful — avoid these common mistakes!",
    },
];

function VideosSection() {
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const updateCardsPerPage = () => {
                const width = window.innerWidth;
                if (width < 768) setCardsPerPage(1);
                else if (width < 1024) setCardsPerPage(2);
                else setCardsPerPage(3);
            };

            updateCardsPerPage();
            window.addEventListener("resize", updateCardsPerPage);
            return () =>
                window.removeEventListener("resize", updateCardsPerPage);
        }
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        const maxIndex = videos.length - cardsPerPage;
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        }
    };
    const canGoForward = currentIndex + cardsPerPage < videos.length;
    const translatePercentage = -(100 / cardsPerPage) * currentIndex;

    return (
        <motion.section
            className="sm:container-1200"
            // initial="hidden"
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
        >
            {/* Title */}
            <motion.div
                variants={childVariants}
                className="flex items-center justify-between mb-10 w-full"
            >
                <h2 className="text-left sm:text-center w-full text-heading-large md:text-3xl font-bold text-navy-blue">
                    Watch Our Videos
                </h2>
                <button className="sm:hidden bg-mint-green-50 whitespace-nowrap text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All
                </button>
            </motion.div>

            {/* Mobile stacked cards */}
            <motion.div
                variants={containerVariants}
                className="sm:hidden space-y-6 relative h-[360px]"
            >
                {videos.slice(0, 3).map((video, i) => {
                    // Different top offsets and scale for the stacked effect (like your original)
                    const positions = [
                        { top: 0, scale: 1, zIndex: 30, width: "100%" },
                        { top: -16, scale: 0.98, zIndex: 20, width: "95%" },
                        { top: -32, scale: 0.96, zIndex: 10, width: "90%" },
                    ];
                    const style =
                        positions[i] || positions[positions.length - 1];

                    return (
                        <motion.div
                            key={i}
                            variants={childVariants}
                            className="absolute left-1/2 rounded-md shadow-sm"
                            style={{
                                top: style.top,
                                zIndex: style.zIndex,
                                width: style.width,
                                transform: `translateX(-50%) scale(${style.scale})`,
                            }}
                        >
                            <VideoCard
                                youtubeId={video.youtubeId}
                                title={video.title}
                                description={video.description}
                                link={{ href: "#", label: "Watch Now" }}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Desktop carousel with animated cards */}
            <motion.div
                variants={containerVariants}
                // initial="hidden"
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="hidden sm:block relative overflow-hidden"
            >
                <div
                    ref={containerRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(${translatePercentage}%)`,
                        width: `${(100 / cardsPerPage) * videos.length}%`,
                    }}
                >
                    {videos.map((video, i) => (
                        <motion.div
                            key={i}
                            variants={childVariants}
                            className="p-2 h-full"
                            style={{ width: `${100 / videos.length}%` }}
                        >
                            <VideoCard
                                youtubeId={video.youtubeId}
                                title={video.title}
                                description={video.description}
                                link={{ href: "#", label: "Watch Now" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Pagination buttons */}
            <motion.div
                variants={childVariants}
                className="hidden sm:flex justify-center mt-8 space-x-4"
            >
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentIndex > 0
                            ? "bg-navy-blue"
                            : "bg-[#f0f1f7] cursor-not-allowed"
                    }`}
                >
                    <MyImage
                        src={RightIcon}
                        alt="left-icon"
                        className="rotate-180 w-3 h-3 m-auto"
                    />
                </button>
                <button
                    onClick={handleNext}
                    disabled={!canGoForward}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        canGoForward
                            ? "bg-navy-blue text-white"
                            : "bg-[#f0f1f7] cursor-not-allowed"
                    }`}
                >
                    <MyImage
                        src={RightIcon}
                        alt="right-icon"
                        className="w-3 h-3 m-auto"
                    />
                </button>
            </motion.div>
        </motion.section>
    );
}

export default VideosSection;
