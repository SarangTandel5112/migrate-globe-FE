import Link from "next/link";

const VisaOption = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => (
    <div className="bg-background-1 rounded-lg p-4 md:p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <h3 className="text-navy-blue text-base font-semibold tracking-[0.24px] capitalize">
                {title}
            </h3>
            <p className="text-navy-blue-400 text-xs tracking-[0.2px] capitalize leading-normal">
                {description}
            </p>
        </div>
        <div className="flex gap-4 sm:gap-5">
            <Link
                href={"checklists/1"}
                className="flex-1 text-center sm:flex-none px-6 py-2 border border-neutrals-300 rounded text-neutrals-700 text-sm font-medium tracking-[0.46px] hover:border-neutrals-400 transition-colors"
            >
                More info
            </Link>
            <button className="flex-1 sm:flex-none px-6 py-2 bg-navy-blue text-white rounded text-sm font-medium tracking-[0.46px] hover:bg-navy-blue-600 transition-colors">
                Buy checklist
            </button>
        </div>
    </div>
);

export default VisaOption;
