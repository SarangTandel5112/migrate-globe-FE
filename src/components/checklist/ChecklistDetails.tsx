import React from "react";

function ChecklistDetails() {
    return (
        <>
            {/* Page Header */}
            <div className="space-y-2">
                <h1 className="text-heading1 font-bold text-navy-blue tracking-[0.608px]">
                    Buy Documents Checklists
                </h1>
                <p className="text-description1 text-navy-blue-400 leading-6 tracking-[0.2px] capitalize max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur. Urna ullamcorper
                    orci tortor sed morbi enim.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full h-40 bg-gradient-to-r from-navy-blue to-[#515F8F] rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Visa document graphic representation */}
                <div className="absolute inset-0 opacity-20"></div>
            </div>

            {/* Visa Information */}
            <div className="space-y-4">
                <h2 className="font-bold text-base text-neutrals-700 tracking-[0.608px]">
                    Global Talent visa (subclass 858)
                </h2>
                <p className="text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                    Apply for the Global Talent visa (subclass 858) if you have
                    an internationally recognised record of exceptional and
                    outstanding achievement in an eligible field. To be eligible
                    for this visa, you must demonstrate that you will be of
                    benefit to the Australian community, be able to establish
                    yourself in Australia, and have a record of achievement in a
                    profession, sport, the arts, or academia and research.
                </p>
            </div>
        </>
    );
}

export default ChecklistDetails;
