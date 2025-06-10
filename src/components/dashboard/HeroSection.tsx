"use client";
import { useState } from "react";

export default function HeroSection() {
    const [country, setCountry] = useState("India");
    const [service, setService] = useState("");

    return (
        <section className="py-16 relative">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-navy-blue font-normal text-3xl md:text-4xl lg:text-6xl">
                    Planning To Move To
                    <span className="font-bold"> Australia?</span>
                </h1>
                <p className="text-navy-blue-400 text-base md:text-lg mt-4 font-medium lg:text-2xl">
                    From Visas To Universities, Job Options To Eligibility Get
                    Instant, Expert Answers.
                </p>

                {/* Form Section */}
                <div className="bg-navy-blue p-8 rounded-lg shadow-lg mt-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                    <div className="flex flex-col text-left">
                        <label
                            htmlFor="country"
                            className="text-white text-sm mb-1"
                        >
                            I Am From?
                        </label>
                        <select
                            id="country"
                            className="rounded px-3 py-2 text-gray-800"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="India">🇮🇳 India</option>
                            <option value="USA">🇺🇸 USA</option>
                            <option value="UK">🇬🇧 UK</option>
                            <option value="Canada">🇨🇦 Canada</option>
                            <option value="Other">🌍 Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col text-left">
                        <label
                            htmlFor="service"
                            className="text-white text-sm mb-1"
                        >
                            What Service Do You Need?
                        </label>
                        <select
                            id="service"
                            className="rounded px-3 py-2 text-gray-800"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        >
                            <option value="">Find visa options</option>
                            <option value="checklist">
                                Buy Documents Checklist
                            </option>
                            <option value="assessment">Skill Assessment</option>
                            <option value="insurance">
                                Buy Cheapest Insurance
                            </option>
                            <option value="map">Smart Migration Plan</option>
                            <option value="consultation">
                                Book Consultation
                            </option>
                        </select>
                    </div>

                    <button className="bg-mint-green hover:bg-green-600 text-white font-medium rounded px-6 py-2 mt-2 md:mt-6">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
