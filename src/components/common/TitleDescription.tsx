function TitleDescription({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-heading1 text-navy-blue font-semibold tracking-[0.608px]">
                {title}
            </h1>
            <p className="text-navy-blue-400 text-description1 leading-6 tracking-[0.2px] capitalize">
                {description}
            </p>
        </div>
    );
}

export default TitleDescription;
