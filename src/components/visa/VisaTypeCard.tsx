function VisaTypeCard({ type }: any) {
    return (
        <div
            className={`border px-4 py-3 rounded-lg w-full md:w-auto cursor-pointer transition-colors ${
                type.active
                    ? "bg-navy-blue"
                    : "border-navy-blue bg-background-1"
            }`}
        >
            <h3
                className={`text-base font-semibold ${
                    type.active ? "text-neutrals-00" : "text-neutrals-700"
                }`}
            >
                {type.title}
            </h3>
            <p
                className={`text-sm font-normal ${
                    type.active ? "text-neutrals-100" : "text-neutrals"
                }`}
            >
                {type.description}
            </p>
        </div>
    );
}

export default VisaTypeCard;
