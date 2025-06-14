import BlogsCards from "@/components/dashboard/blogs-cards";
import HeroSection from "@/components/dashboard/HeroSection";
import VisaCalculatorSection from "@/components/dashboard/visa-calc";

export default function Home() {
    return (
        <div className="py-8 lg:py-12 relative">
            <HeroSection />
            <VisaCalculatorSection />
            <BlogsCards />
        </div>
    );
}
