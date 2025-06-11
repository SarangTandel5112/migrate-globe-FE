import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export const SocialIcons = () => (
    <div className="flex items-center gap-4">
        {[InstagramIcon, FacebookIcon, LinkedInIcon].map((Icon, index) => (
            <Link key={index} href="#">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors">
                    <Icon />
                </div>
            </Link>
        ))}
    </div>
);
