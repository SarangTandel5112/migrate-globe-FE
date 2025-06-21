'use client'
import { useEffect, useRef, useState } from "react";
import MyImage from "@/ui/myImage";
import RightIcon from "@assets/images/right-icon.svg";
import VideoCard from "@/components/layout/VideoCard";

const videos = [
    {
        youtubeId: 'dQw4w9WgXcQ',
        title: 'Top 5 Mistakes To Avoid During Your Visa Interview',
        description: 'Visa interviews can be stressful — avoid these common mistakes!',
    },
    {
        youtubeId: 'dQw4w9WgXcQ',
        title: 'Avoid Common Mistakes During Your Visa Interview',
        description: 'Visa interviews can be stressful — avoid these common mistakes!',
    },
    {
        youtubeId: 'dQw4w9WgXcQ',
        title: 'Visa Interview Tips During Your Visa Interview',
        description: 'Visa interviews can be stressful — avoid these common mistakes!',
    },
    {
        youtubeId: 'dQw4w9WgXcQ',
        title: 'Visa Interview Tips During Your Visa Interview',
        description: 'Visa interviews can be stressful — avoid these common mistakes!',
    }
];

function VideosSection() {
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            if (width < 768) setCardsPerPage(1);
            else if (width < 1024) setCardsPerPage(2);
            else setCardsPerPage(3);
        };

        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        const maxIndex = videos.length - cardsPerPage;
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        }
    };
    const canGoForward = currentIndex + cardsPerPage < videos.length;

    const translatePercentage = -(100 / cardsPerPage) * currentIndex;
    return (
        <section className="sm:container-1200">
            <div className="flex items-center justify-between mb-10 w-full">
                <h2 className="text-left sm:text-center w-full text-heading-large md:text-3xl font-bold text-navy-blue">
                    Watch Our Videos
                </h2>
                <button className="sm:hidden bg-mint-green-50 text-nowrap text-neutrals-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-mint-green-200">
                    View All
                </button>
            </div>

            <div className="block sm:hidden relative h-[360px]">
                {/* Card 3 (back, smallest, highest top offset) */}
                <div className="absolute -top-[32px] left-1/2 transform -translate-x-1/2 w-[90%] z-10 scale-[0.96]">
                    <VideoCard
                        youtubeId="dQw4w9WgXcQ"
                        title="Visa Interview Tips"
                        description="Be confident and clear!"
                        link={{ href: "#", label: "Watch Now" }}
                    />
                </div>

                {/* Card 2 (middle) */}
                <div className="absolute -top-[16px] left-1/2 transform -translate-x-1/2 w-[95%] z-20 scale-[0.98]">
                    <VideoCard
                        youtubeId="dQw4w9WgXcQ"
                        title="Avoid Common Mistakes"
                        description="Don’t forget your paperwork!"
                        link={{ href: "#", label: "Watch Now" }}
                    />
                </div>

                {/* Card 1 (topmost, full) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-30">
                    <VideoCard
                        youtubeId="dQw4w9WgXcQ"
                        title="Top 5 Mistakes To Avoid During Your Visa Interview"
                        description="Visa interviews can be stressful — avoid these common mistakes!"
                        link={{ href: "#", label: "Watch Now" }}
                    />
                </div>
            </div>

            {/* <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-3 gap-6">
                <VideoCard
                    youtubeId="dQw4w9WgXcQ"
                    title="Top 5 Mistakes To Avoid During Your Visa Interview"
                    description="Visa interviews can be stressful — avoid these common mistakes!"
                    link={{ href: "#", label: "Watch Now" }}
                />
                <VideoCard
                    youtubeId="dQw4w9WgXcQ"
                    title="Top 5 Mistakes To Avoid During Your Visa Interview"
                    description="Visa interviews can be stressful — avoid these common mistakes!"
                    link={{ href: "#", label: "Watch Now" }}
                />
                <VideoCard
                    youtubeId="dQw4w9WgXcQ"
                    title="Top 5 Mistakes To Avoid During Your Visa Interview"
                    description="Visa interviews can be stressful — avoid these common mistakes!"
                    link={{ href: "#", label: "Watch Now" }}
                />
            </div> */}
            <div className="hidden sm:block relative overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${translatePercentage}%)`, width: `${(100 / cardsPerPage) * videos.length}%` }}
                >
                    {videos.map((video, i) => (
                        <div
                            key={i}
                            className="p-2 h-full"
                            style={{ width: `${100 / videos.length}%` }}
                        >
                            <VideoCard
                                youtubeId={video.youtubeId}
                                title={video.title}
                                description={video.description}
                                link={{ href: '#', label: 'Watch Now' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="hidden sm:flex justify-center mt-8 space-x-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentIndex > 0
                        ? 'bg-navy-blue'
                        : 'bg-[#f0f1f7] cursor-not-allowed'
                        }`}
                // className="w-10 h-10 rounded-full bg-[#f0f1f7]"
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentIndex + cardsPerPage < videos.length
                        ? 'bg-navy-blue text-white'
                        : 'bg-[#f0f1f7] cursor-not-allowed'
                        }`}
                // className="w-10 h-10 rounded-full bg-navy-blue"
                >
                    <MyImage
                        src={RightIcon}
                        alt="left-icon"
                        className="w-3 h-3 m-auto"
                    />
                </button>
            </div>
        </section>
    );
}

export default VideosSection;
