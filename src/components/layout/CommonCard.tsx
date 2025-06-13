import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CommonCardProps {
    image: {
        src: string | StaticImageData;
        alt?: string;
        heightClass?: string;
    };
    title: string;
    description: string;
    link?: {
        href: string;
        label: string;
        className?: string;
    };
    wrapperClassName?: string;
    contentClassName?: string;
}

export default function CommonCard({
    image,
    title,
    description,
    link,
    wrapperClassName = "",
    contentClassName = "",
}: CommonCardProps) {
    return (
        <div
            className={`bg-white rounded-xl overflow-hidden border border-[#E0E4F3] shadow-bottom-blue transition-transform cursor-pointer flex flex-col ${wrapperClassName}`}
        >
            <Image
                src={image.src}
                alt={image.alt || title}
                width={500}
                height={200}
                className={`w-full object-cover ${image.heightClass || "h-52"}`}
            />

            {/* Content block with flex-grow for spacing */}
            <div className={`p-4 flex flex-col flex-1 ${contentClassName}`}>
                <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-description1 font-semibold text-left text-navy-blue">
                        {title}
                    </h3>
                    <p className="text-sm text-navy-blue-400 line-clamp-2 min-h-[calc(1.5rem*2)]">
                        {description}
                    </p>
                </div>

                {link && (
                    <Link
                        href={link.href}
                        className={`mt-3 text-mint-green-600 text-description1 font-semibold underline ${
                            link.className || ""
                        }`}
                    >
                        {link.label}
                    </Link>
                )}
            </div>
        </div>
    );
}
