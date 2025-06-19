"use client";

import CalenderIcon from "@/components/icons/CalenderIcon";
import CouponIcon from "@/components/icons/CouponIcon";
import UserCheck from "@/components/icons/UserCheck";
import VideoIcon from "@/components/icons/VideoIcon";
import ConsultationTab from "@/components/profile/ConsultationTab";
import ProfileTab from "@/components/profile/ProfileTab";
import PurchaseTab from "@/components/profile/PurchaseTab";
import TabButton from "@/components/profile/TabButton";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="container-1200">
            {/* <ProfileDashboard /> */}
            <div className="flex flex-col gap-10">
                {/* Header with gradient background */}
                <div className="rounded-lg overflow-hidden">
                    <div className="h-28 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 relative">
                        {/* Profile Card */}
                    </div>
                    <div className="w-100 -mt-12 z-10">
                        <div className="bg-white shadow-lg p-6 flex items-end gap-6 min-w-96">
                            <div className="w-[100px] h-[100px] bg-gray-300 overflow-hidden">
                                <Image
                                    src="/profile.png"
                                    alt="Belle Ferguson"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover relative"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="font-heading1 font-bold text-xl text-neutrals-700 leading-6 mb-2.5">
                                            Belle Ferguson
                                        </h2>
                                        <div className="flex items-center gap-1.5">
                                            <CalenderIcon className="w-5 h-5 text-neutrals" />
                                            <span className=" text-base text-neutrals leading-tight">
                                                Joined April 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-0">
                    <TabButton
                        id="profile"
                        label="Profile"
                        icon={<UserCheck className="w-5 h-5" />}
                        isActive={activeTab === "profile"}
                        onClick={setActiveTab}
                    />
                    <TabButton
                        id="purchase"
                        label="My purchase"
                        icon={<CouponIcon className="w-5 h-5" />}
                        isActive={activeTab === "purchase"}
                        onClick={setActiveTab}
                    />
                    <TabButton
                        id="consultation"
                        label="Consultation"
                        icon={<VideoIcon className="w-5 h-5" />}
                        isActive={activeTab === "consultation"}
                        onClick={setActiveTab}
                    />
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {activeTab === "profile" && <ProfileTab />}

                    {activeTab === "purchase" && <PurchaseTab />}

                    {activeTab === "consultation" && <ConsultationTab />}
                </div>
            </div>
        </div>
    );
}
