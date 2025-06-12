import React from 'react'
import MyImage from '@/ui/myImage'
import Icon1 from '@assets/images/checklist.png'

const features = [
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Buy Documents Checklists",
        description: "Get A Verified Checklist Tailored To Your Visa And Occupation.",
        span: "col-span-1"
    },
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Skill Assessment",
        description: "Check If Your Occupation Is Eligible And Buy The Step-By-Step Assessment Guide Instantly.",
        span: "col-span-1 row-span-2"
    },
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Buy Cheapest Insurance",
        description: "Compare And Purchase Affordable Overseas Health Cover From Top",
        span: "col-span-1 row-start-1 col-start-3"
    },
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Smart Migration Plan (Buy Map)",
        description: "Create Your Personalized Migration Route With Our Interactive Planning Map.",
        span: "col-span-2 row-start-1 col-start-4"
    },
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Occupation Tracking Tool",
        description: "Track Updates On Your Occupation — Demand Trends, State Invites.",
        span: "col-span-1"
    },
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Find Visa Options",
        description: "Explore Visa Types That Match Your Profile, Goals, And Timeline — Fast",
        span: "col-span-2 row-start-2 col-start-3"
    },
    {
        icon: <MyImage src={Icon1} alt='icon1' className="text-3xl text-blue-600" />,
        title: "Zoom Consultations",
        description: "Get Expert Advice Face-To-Face — Online. Book A Call With Our",
        span: "col-span-1 row-start-2 col-start-5"
    },
];

export default function FeatureGrid() {
    return (
        <div className="bg-[#6E85DC] py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-5 grid-rows-2 gap-4 auto-rows-fr">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className={`bg-white p-5 rounded-xl shadow-md flex flex-col gap-2 ${item.span}`}
                    >
                        <div className="text-2xl">{item.icon}</div>
                        <h3 className="font-semibold text-neutrals-700">{item.title}</h3>
                        <p className="text-sm text-neutrals">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
