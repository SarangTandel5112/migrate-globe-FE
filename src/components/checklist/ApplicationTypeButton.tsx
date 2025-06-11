"use client";

const ApplicationTypeButton = ({
    selected,
    onClick,
    Icon,
    title,
    description,
}: {
    selected: boolean;
    onClick: () => void;
    Icon: React.ElementType;
    title: string;
    description: string;
}) => (
    <button
        onClick={onClick}
        className={`col-span-6 lg:col-span-4 flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg border-2 transition-all ${
            selected
                ? "border-navy-blue bg-background-1"
                : "border-navy-blue-50 bg-white hover:border-navy-blue-100"
        }`}
    >
        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
            <Icon />
        </div>
        <div className="flex flex-col gap-1 text-left">
            <h3 className="text-neutrals-700 text-lg md:text-xl font-semibold tracking-[0.2px] capitalize">
                {title}
            </h3>
            <p className="text-neutrals text-sm md:text-base leading-6 tracking-[0.2px] capitalize">
                {description}
            </p>
        </div>
    </button>
);

export default ApplicationTypeButton;
