import BlogsCards from "@/components/dashboard/blogs-cards";
import HeroSection from "@/components/dashboard/HeroSection";
import Testimonials from "@/components/dashboard/testimonial";
import VideosSection from "@/components/dashboard/videos-section";
import VisaCalculatorSection from "@/components/dashboard/visa-calc";

export default function Home() {
    return (
        <div className="py-8 lg:py-12 relative flex flex-col gap-[60px] md:gap-[90px] lg:gap-[120px]">
            <HeroSection />
            <VisaCalculatorSection />
            <Testimonials />
            <BlogsCards />
            <VideosSection />
        </div>
    );
}
