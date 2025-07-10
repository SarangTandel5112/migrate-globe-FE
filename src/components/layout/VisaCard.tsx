import Image from "next/image";
import Link from "next/link";

interface VisaCardProps {
    title: string;
    description: string;
    imageUrl?: string;
}

export default function VisaCard({ title, description, imageUrl }: VisaCardProps) {
    return (
        <div className="rounded-xl overflow-hidden border border-[#E0E4F3] shadow-bottom-blue transition-transform hover:scale-105 bg-white cursor-pointer">
            <Image
src={imageUrl || "/india.png"}
                alt={title}
                width={500}
                height={200}
                className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col gap-2 lg:gap-3">
                <h3 className="text-heading2 text-navy-blue">{title}</h3>
                <p className="text-description1 text-navy-blue-400 line-clamp-2 min-h-[calc(1.5rem*2)]">
                    {description}
                </p>
                <Link
                    href="#"
                    className="text-mint-green-600 text-description1 font-semibold underline"
                >
                    Get Details
                </Link>
            </div>
        </div>
    );
}
