import React from "react";

export default function Services() {
  const services = [
    {
      title: "Smart Migration Plan (Buy Map)",
      description:
        "Create Your Personalized Migration Route With Our Interactive Planning Map.",
      color: "bg-blue-100",
      icon: "✈️",
    },
    {
      title: "Buy Documents Checklists",
      description:
        "Get A Verified Checklist Tailored To Your Visa And Occupation. No Confusion. No Missing Docs.",
      color: "bg-orange-100",
      icon: "📄",
    },
    {
      title: "Find Visa Options",
      description:
        "Explore Visa Types That Match Your Profile, Goals, And Timeline — Fast And Accurate.",
      color: "bg-purple-100",
      icon: "📄",
    },
    {
      title: "Skill Assessment",
      description:
        "Check If Your Occupation Is Eligible And Buy The Step-By-Step Assessment Guide Instantly.",
      color: "bg-green-100",
      icon: "📋",
    },
    {
      title: "Buy Cheapest Insurance",
      description:
        "Compare And Purchase Affordable Overseas Health Cover From Top Providers.",
      color: "bg-red-100",
      icon: "🌍",
    },
    {
      title: "Zoom Consultations",
      description:
        "Get Expert Advice Face-To-Face — Online. Book A Call With Our Migration Consultants.",
      color: "bg-yellow-100",
      icon: "💻",
    },
    {
      title: "Occupation Tracking Tool",
      description:
        "Track Updates On Your Occupation — Demand Trends, State Invites, And Policy Changes.",
      color: "bg-gray-100",
      icon: "🛠️",
    },
    {
      title: "Admission & Course Change Advice",
      description:
        "Switching Your Course Or College? Get Guidance To Stay Compliant And Visa-Safe.",
      color: "bg-green-200",
      icon: "🧾",
    },
  ];

  return (
    <>
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-xl font-semibold text-blue-900 mb-10">
          Services We Offer
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-white p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200`}
            >
              <div
                className={`order-2 border-white p-2 rounded-xl ${service.color}`}
              >
                <div className="top-4 left-4">
                  <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-sm">{service.icon}</span>
                  </div>
                </div>
                <div className="pt-5">
                  <h3 className="font-semibold text-base text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 pb-1 flex justify-between">
                <button className="flex items-center text-sm font-medium text-gray-800 hover:text-blue-600 group">
                  Learn more
                </button>
                <span className="ml-2 w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
