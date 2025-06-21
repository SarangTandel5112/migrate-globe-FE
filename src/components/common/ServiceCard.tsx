import Lottie from "lottie-react";
import zoomAnimation from "@assets/animations/ZoomMeeting.json";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="bg-white flex items-center rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className=" rounded-xl flex items-center justify-center">
                <Lottie
                    className="w-[100px] h-[100px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]"
                    animationData={zoomAnimation}
                    loop={true}
                />
            </div>
            <div className="space-y-2">
                <h3 className="font-bold text-base text-[#333] tracking-[0.2px] capitalize">
                    {title}
                </h3>
                <p className="text-sm text-neutrals tracking-[0.2px] capitalize">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
