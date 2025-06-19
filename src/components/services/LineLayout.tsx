import MyImage from "@/ui/myImage";
import GoArrow from "@assets/images/GoArrow.svg";
import Link from "next/link";

interface Service {
    color?: string;
    icon: string;
    title: string;
    description: string;
    link: string;
}

interface LineLayoutProps {
    service: Service;
    isLast?: boolean;
}

function LineLayout(props: LineLayoutProps) {
    return (
        <div className="">
            <div className="flex items-center gap-4 px-5 py-7">
                {/* ICON */}
                <div
                    className={`${props.service.color} w-16 h-16 flex items-center justify-center rounded-md`}
                >
                    <MyImage
                        src={props.service.icon}
                        alt={props.service.title}
                        height={20}
                        width={20}
                    />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                    <h3 className="font-semibold text-navy-blue text-heading2">
                        {props.service.title}
                    </h3>
                    <p className="text-base text-navy-blue-400 w-full md:w-3/4">
                        {props.service.description}
                    </p>
                </div>

                {/* ARROW */}
                <Link
                    href={props.service.link}
                    className="ml-2 w-10 h-10 rounded-full bg-navy-blue-150 border flex items-center justify-center"
                >
                    <MyImage
                        src={GoArrow}
                        alt="Go Arrow"
                        className="mx-auto"
                        height={15}
                        width={15}
                    />
                </Link>
            </div>

            {props.isLast && (
                <div className="h-px w-[95%] bg-gray-200 mx-auto my-0" />
            )}
        </div>
    );
}

export default LineLayout;
