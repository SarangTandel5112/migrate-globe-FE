interface VisaTypeCardProps {
    active?: boolean;
    title?: string;
    description?: string;
}

function VisaTypeCard({ active, title, description }: VisaTypeCardProps) {
    return (
        <div
            className={`border px-4 py-3 rounded-lg w-full md:w-auto cursor-pointer transition-colors ${
                active ? "bg-navy-blue" : "border-navy-blue bg-background-1"
            }`}
        >
            <h3
                className={`text-base font-semibold ${
                    active ? "text-neutrals-00" : "text-neutrals-700"
                }`}
            >
                {title}
            </h3>
            <p
                className={`text-sm font-normal ${
                    active ? "text-neutrals-100" : "text-neutrals"
                }`}
            >
                {description}
            </p>
        </div>
    );
}

export default VisaTypeCard;
