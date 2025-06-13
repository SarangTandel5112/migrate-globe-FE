import MyImage from "@/ui/myImage";
import Arrow from "@assets/images/Arrow.svg";
import Link from "next/link";

function Boxlayout({ service }: any) {
    return (
        <div
            className={`bg-white p-3 rounded-xl flex flex-col gap-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200`}
        >
            <div
                className={`border-white p-4 flex gap-4 flex-col rounded-xl ${service.color}`}
            >
                <div className="w-10 h-10 bg-[#FFFFFF80] rounded-full flex items-center justify-center shadow-sm">
                    <MyImage
                        src={service?.icon}
                        alt={service?.title}
                        height={18}
                        width={18}
                    />
                </div>

                <h3 className="text-heading2 card-title text-neutrals-700 font-semibold line-clamp-2 leading-[1.5rem] sm:leading-[1.75rem] min-h-title-sm sm:min-h-title-md">
                    {service.title}
                </h3>

                <p className="text-description1 card-description text-neutrals tracking-[0.2px] leading-[1.3rem] sm:leading-[1.5rem] line-clamp-3 min-h-desc-sm sm:min-h-desc-md">
                    {service.description}
                </p>
            </div>
            <div className="pb-1 flex justify-between items-center">
                <button className="flex items-center text-base font-semibold text-gray-800 group px-3 py-2">
                    Learn more
                </button>
                <Link
                    href={service.link}
                    className="pointer ml-2 w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center "
                >
                    <MyImage
                        src={Arrow}
                        alt="Arrow"
                        className="max-w-[280px] mx-auto"
                        height="15"
                        width="15"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Boxlayout;
