"use client";
import GetStartedForm from "@components/dashboard/get-started";
import FeatureGrid from "@components/dashboard/desc-cards";

export default function HeroSection() {
  return (
    <div className="-mx-8">
      <div className="md:bg-[url('/hero_md.png')] lg:bg-[url('/hero_main.png')] bg-cover bg-center w-full md:-mt-20 lg:-mt-24 mx-auto ">
        <div className="pt-[120px]">
          <div className="text-center px-10 sm:px-16">
            <h1 className="text-navy-blue font-normal text-3xl md:text-4xl lg:text-6xl">
              Planning To Move To
              <span className="font-bold"> Australia?</span>
            </h1>
            <p className="text-navy-blue-400 text-base md:text-lg mt-4 font-medium lg:text-2xl">
              From Visas To Universities, Job Options To Eligibility Get
              Instant, Expert Answers.
            </p>
          </div>
          <GetStartedForm />
          <FeatureGrid />
        </div>
      </div>
    </div>
  );
}
