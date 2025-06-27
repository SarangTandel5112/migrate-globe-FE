"use client";

import ChecklistDetails from "@/components/checklist/ChecklistDetails";
import PricingSidebar from "@/components/checklist/PricingSidebar";
import TitleDescription from "@/components/common/TitleDescription";
import BackIcon from "@/components/icons/BackIcon";
import { useRouter } from "next/navigation";

export default function ChecklistDetailsMain() {
    const router = useRouter();

    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column - Main Content */}
                <div className="flex-1 space-y-6">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
                    >
                        <BackIcon />
                        <span className="font-urbanist font-semibold text-base text-navy-blue capitalize tracking-[0.2px]">
                            Back
                        </span>
                    </button>
                    <TitleDescription
                        title="Buy Documents Checklists"
                        description="Lorem ipsum dolor sit amet consectetur. Urna ullamcorper orci tortor sed morbi enim."
                    />

                    <ChecklistDetails />
                </div>

                {/* Right Column - Pricing Sidebar */}
                <PricingSidebar />
            </div>
        </div>
    );
}
