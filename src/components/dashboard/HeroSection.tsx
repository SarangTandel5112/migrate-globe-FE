import GetStartedForm from "@components/dashboard/get-started";
import FeatureGrid from "@components/dashboard/desc-cards";
import VisaCalculatorSection from "@components/dashboard/visa-calc";

export default function HeroSection() {
    return (
        <section className="py-16 relative bg-background-1">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-navy-blue font-normal text-3xl md:text-4xl lg:text-6xl">
                    Planning To Move To
                    <span className="font-bold"> Australia?</span>
                </h1>
                <p className="text-navy-blue-400 text-base md:text-lg mt-4 font-medium lg:text-2xl">
                    From Visas To Universities, Job Options To Eligibility Get
                    Instant, Expert Answers.
                </p>

                <GetStartedForm />
                <FeatureGrid />
                <VisaCalculatorSection />
            </div>
        </section>
    );
}
