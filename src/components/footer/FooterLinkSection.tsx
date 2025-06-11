import Link from "next/link";

export const FooterLinkSection = ({
    title,
    links,
}: {
    title: string;
    links: { href: string; label: string }[];
}) => (
    <div className="flex flex-col gap-4">
        {title && (
            <h3 className="text-white text-base font-bold leading-7">
                {title}
            </h3>
        )}
        <nav className="flex flex-col gap-3">
            {links.map((link) => (
                <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="text-white/70 text-base font-normal hover:text-white transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    </div>
);
