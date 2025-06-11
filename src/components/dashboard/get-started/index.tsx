'use client'
import React, { useState } from 'react'

const GetStartedForm = () => {
    const [country, setCountry] = useState("India");
    const [service, setService] = useState("");
    return (
        <>
            <div className="mt-10 bg-navy-blue text-white max-w-[80%] mx-auto my-10 rounded-xl p-4 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_auto] items-center gap-4 md:gap-0">
                    {/* Country Dropdown */}
                    <div className="px-4">
                        <label className="block text-sm mb-1">I Am From?</label>
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full rounded-md text-gray-800 px-4 py-2 outline-none"
                        >
                            <option value="India">🇮🇳 India</option>
                            <option value="USA">🇺🇸 USA</option>
                            <option value="UK">🇬🇧 UK</option>
                        </select>
                    </div>

                    {/* Vertical Divider 1 */}
                    <div className="hidden md:block h-14 bg-white/40" />

                    {/* Service Dropdown */}
                    <div className="px-4">
                        <label className="block text-sm mb-1">What Service Do You Need?</label>
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full rounded-md text-gray-800 px-4 py-2 outline-none"
                        >
                            <option value="Find visa options">Find visa options</option>
                            <option value="Check eligibility">Check eligibility</option>
                        </select>
                    </div>

                    {/* Vertical Divider 2 */}
                    <div className="hidden md:block h-14 bg-white/40" />

                    {/* Button */}
                    <div className="flex justify-center md:justify-end px-4">
                        <button className="bg-mint-green hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-md">
                            Get Started!
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GetStartedForm