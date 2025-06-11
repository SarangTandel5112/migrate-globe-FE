import Image from "next/image";
import Link from "next/link";

export default function VisaCard({ visa }: { visa: any }) {
    return (
        <div className="rounded-xl overflow-hidden border border-[#E0E4F3] shadow-bottom-blue transition-transform hover:scale-105 bg-white cursor-pointer">
            <Image
                src="/india.png"
                alt={visa.title}
                width={500}
                height={200}
                className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col gap-2 lg:gap-3">
                <h3 className="text-heading2 text-navy-blue">{visa.title}</h3>
                <p className="text-description1 text-navy-blue-400 line-clamp-2 min-h-[calc(1.5rem*2)]">
                    {visa.description}
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
