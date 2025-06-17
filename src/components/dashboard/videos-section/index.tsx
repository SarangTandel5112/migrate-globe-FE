import MyImage from "@/ui/myImage";
import RightIcon from "@assets/images/right-icon.svg";
import VideoCard from "@/components/layout/VideoCard";

function VideosSection() {
    return (
        <section className="container-1200">
            <h2 className="text-center text-heading-large md:text-3xl font-semibold text-navy-blue mb-10">
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
