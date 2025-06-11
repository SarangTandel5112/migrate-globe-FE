import Link from "next/link";

const LEGAL_LINKS = [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/cookies", label: "Cookies" },
];

export const LegalLinksRow = () => (
    <div className="flex items-center gap-6 lg:gap-9">
        {LEGAL_LINKS.map((link) => (
            <Link
                key={link.href + link.label}
                href={link.href}
                className="text-white text-sm font-medium hover:text-white/80 transition-colors"
            >
                {link.label}
            </Link>
        ))}
    </div>
);
