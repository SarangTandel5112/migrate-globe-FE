import VisaCard from "@/components/layout/VisaCard";
import React from "react";

function page() {
    const visaTypes = [
        {
            title: "Student Visa",
            description:
                "For International Students Looking To Pursue Education Abroad.",
            image: "/images/student.jpg",
        },
        {
            title: "Family Visa",
            description: "Reunite With Your Loved Ones Across Borders.",
            image: "/images/family.jpg",
        },
        {
            title: "Tourist Visa",
            description:
                "Discover The World With A Visa Tailored For Travel And Tourism.",
            image: "/images/tourist.jpg",
        },
        {
            title: "Business Visa",
            description:
                "For Professionals Attending Meetings, Conferences, Or Short-Term Work.",
            image: "/images/business.jpg",
        },
        {
            title: "Work Visa",
            description:
                "Build Your Career Internationally With A Legal Work Permit.",
            image: "/images/work.jpg",
        },
        {
            title: "Diplomatic Visa",
            description:
                "Reserved For Government Officials And Diplomatic Missions.",
            image: "/images/diplomatic.jpg",
        },
    ];

    return (
        <div className="pt-10">
            <h1 className="text-heading1 text-navy-blue">
                Explore the Right Visa for Your Journey
            </h1>
            <p className="text-description1 text-navy-blue-400 mt-2">
                Find detailed information about different visa categories based
                on your purpose — whether you’re studying, working, reuniting
                with family, or exploring new destinations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {visaTypes.map((visa, index) => (
                    <VisaCard visa={visa} key={index} />
                ))}
            </div>
        </div>
    );
}

export default page;
