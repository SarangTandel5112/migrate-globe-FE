import MyImage from "@/ui/myImage";
import RightIcon from "@assets/images/right-icon.svg";
import VideoCard from "@/components/layout/VideoCard";

function VideosSection() {
    return (
        <section className="container-1200">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-navy-blue mb-10">
                Watch Our Videos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                {/* {[
                        "/thumb1.jpg",
                        "/thumb2.jpg",
                        "/thumb3.jpg",
                    ].map((thumb, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="relative">
                                <img src={thumb} alt="Video Thumbnail" className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img src="/play-icon.svg" alt="Play" className="w-12 h-12" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-base text-navy-blue">
                                    Top 5 Mistakes To Avoid During Your Visa Interview
                                </h3>
                            </div>
                        </div>
                    ))} */}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-4">
                <button className="w-10 h-10 rounded-full bg-[#f0f1f7]">
                    <MyImage
                        src={RightIcon}
                        alt="left-icon"
                        className="rotate-180 w-3 h-3 m-auto"
                    />
                </button>
                <button className="w-10 h-10 rounded-full bg-navy-blue">
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
