import BlogsCards from "@/components/dashboard/blogs-cards";
import HeroSection from "@/components/dashboard/HeroSection";
import Testimonials from "@/components/dashboard/testimonial";
import VideosSection from "@/components/dashboard/videos-section";
import VisaCalculatorSection from "@/components/dashboard/visa-calc";
import { HomepageData } from "@/utils/interface";

export default async function Home() {
  const res = await fetch(
    "https://admin.migrateglobe.com/api/dashboard?populate[heroSection][populate][intro]=*&populate[heroSection][populate][services]=*&populate[visaCalculator][populate][intro]=*&populate[testimonial][populate][intro]=*&populate[testimonial][populate][testimonials][populate]=*&populate[blog][populate][intro]=*&populate[blog][populate][insights_and_updates][populate]=*&populate[videos][populate][intro]=*&populate[videos][populate][videos]=*"
  );
  const json = await res.json();
  const data: HomepageData = json.data;
  return (
    <div className="py-8 lg:py-12 relative flex flex-col gap-[60px] md:gap-[90px] lg:gap-[120px]">
      <HeroSection heroSection={data.heroSection} />
      <VisaCalculatorSection visaCalculator={data.visaCalculator} />
      <Testimonials testimonial={data.testimonial} />
      <BlogsCards blog={data.blog} />
      <VideosSection videos={data.videos} />
    </div>
  );
}
