interface VideoCardProps {
    youtubeId: string;
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

export default function VideoCard({
    youtubeId,
    title,
    description,
    link,
    wrapperClassName = "",
    contentClassName = "",
}: VideoCardProps) {
    return (
        <div
            className={`bg-white rounded-xl overflow-hidden border border-[#E0E4F3] shadow-bottom-blue hover:scale-105 transition-transform cursor-pointer flex flex-col ${wrapperClassName}`}
        >
            <div className="w-full aspect-video">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className={`p-4 flex flex-col flex-1 ${contentClassName}`}>
                <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-heading1 font-semibold text-left text-navy-blue">
                        {title}
                    </h3>
                    <p className="text-description1 text-navy-blue-400">
                        {description}
                    </p>
                </div>

                {link && (
                    <a
                        href={link.href}
                        className={`mt-3 text-mint-green-600 text-description1 font-semibold underline ${
                            link.className || ""
                        }`}
                    >
                        {link.label}
                    </a>
                )}
            </div>
        </div>
    );
}
