"use client";
import MyImage from "@/ui/myImage";
import GoArrow from "@assets/images/GoArrow.svg";
import Arrow from "@assets/images/Arrow.svg";
import Grid from "@assets/images/Grid.svg";
import Rows from "@assets/images/Rows.svg";
import React, { useState } from "react";

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

  const [displayCard, setDisplayCard] = useState(true);
  return (
    <>
      <div className="container-1200 flex items-center justify-between mb-6">
        <h1 className="text-heading1 text-navy-blue">Services We Offer</h1>
        <div className="flex gap-1 border-2 border-white bg-white rounded-3xl p-2">
          <button
            onClick={() => setDisplayCard(false)}
            className={`w-9 h-9 flex items-center justify-center rounded-3xl ${
              !displayCard ? "bg-navy-blue" : ""
            }`}
          >
            <MyImage
              src={Rows}
              alt="Rows"
              className="max-w-[280px] mx-auto "
              height="16"
              width="16"
            />
          </button>
          <button
            onClick={() => setDisplayCard(true)}
            className={`w-9 h-9 flex items-center justify-center rounded-3xl ${
              displayCard ? "bg-navy-blue" : ""
            }`}
          >
            <MyImage
              src={Grid}
              alt="Grid"
              className="max-w-[280px] mx-auto bg-navy-blue"
              height="16"
              width="16"
            />
          </button>
        </div>
      </div>
      <section className="py-3 blue-50 container-1200">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayCard &&
            services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200`}
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
                    <h3 className="text-heading2 text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pb-1 flex justify-between">
                  <button className="flex items-center text-sm font-medium text-gray-800 group">
                    Learn more
                  </button>
                  <span className="ml-2 w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center ">
                    <MyImage
                      src={Arrow}
                      alt="Arrow"
                      className="max-w-[280px] mx-auto"
                      height="15"
                      width="15"
                    />
                  </span>
                </div>
              </div>
            ))}{" "}
        </div>

        <div className="rounded-xl border-4 border-white">
          {!displayCard &&
            services.map((service, index) => (
              <div key={index}>
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 m-0 bg-white "
                >
                  <div
                    className={`${service.color} w-10 h-10 flex items-center justify-center rounded-md ${service.icon}`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 ">
                    <h3 className="font-semibold text-gray-800 text-base">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                  <span className="ml-2 w-6 h-6 rounded-full bg-navy-blue-150 border  flex items-center justify-center">
                    <MyImage
                      src={GoArrow}
                      alt="Go Arrow"
                      className="max-w-[280px] mx-auto"
                      height="15"
                      width="15"
                    />
                  </span>{" "}
                </div>

                {index < services.length - 1 && (
                  <hr className="mx-3 border-t border-gray-200" />
                )}
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
