"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ArrowDownIcon from "../icons/ArrowDown";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        country: "Australia",
        message: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-2/5 my-auto"
        >
            <div className="mx-auto">
                <div className="mb-6">
                    <h2 className="font-bold text-heading1 text-neutrals-700 capitalize mb-2">
                        Feel free to Contact
                    </h2>
                    <p className="text-description1 text-neutrals leading-6 tracking-[0.2px] capitalize">
                        Do you have any questions?
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* First Name and Last Name */}
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <label className="block font-semibold text-sm text-neutrals tracking-[0.24px] capitalize mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) =>
                                    handleInputChange(
                                        "firstName",
                                        e.target.value
                                    )
                                }
                                placeholder="Enter First Name"
                                className="w-full py-2.5 px-3 rounded border border-neutrals-200 bg-background-1 text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-navy-blue"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block font-semibold text-sm text-neutrals tracking-[0.24px] capitalize mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) =>
                                    handleInputChange(
                                        "lastName",
                                        e.target.value
                                    )
                                }
                                placeholder="Enter Last Name"
                                className="w-full py-2.5 px-3 rounded border border-neutrals-200 bg-background-1 text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-navy-blue"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block font-semibold text-sm text-neutrals leading-6 mb-1">
                            Phone number
                        </label>
                        <div className="flex gap-1">
                            {/* Country Code Selector */}
                            <div className="flex items-center gap-2.5 py-2.5 px-2.5 border border-neutrals-200 bg-background-1 rounded">
                                <div className="flex items-center gap-1">
                                    {/* India Flag */}

                                    <span className="text-sm text-neutrals-700 tracking-[0.24px] capitalize">
                                        +91
                                    </span>
                                    <ArrowDownIcon />
                                </div>
                            </div>

                            {/* Phone Input */}
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) =>
                                    handleInputChange("phone", e.target.value)
                                }
                                placeholder="123 456 7890"
                                className="flex-1 py-2.5 px-4 border border-neutrals-200 bg-background-1 rounded font-semibold text-base text-neutrals-300 leading-6 focus:outline-none focus:border-navy-blue"
                            />
                        </div>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block font-semibold text-sm text-neutrals tracking-[0.24px] capitalize mb-2">
                            Country
                        </label>
                        <div className="relative">
                            <select
                                value={formData.country}
                                onChange={(e) =>
                                    handleInputChange("country", e.target.value)
                                }
                                className="w-full py-2.5 px-3 rounded border border-neutrals-200 bg-background-1 text-base tracking-[0.24px] text-neutrals-700 focus:outline-none focus:border-navy-blue appearance-none"
                            >
                                <option value="Australia">Australia</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <ArrowDownIcon />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-semibold text-sm text-neutrals tracking-[0.24px] capitalize mb-2">
                            How can we help?
                        </label>
                        <textarea
                            value={formData.message}
                            onChange={(e) =>
                                handleInputChange("message", e.target.value)
                            }
                            placeholder="Type your message"
                            rows={4}
                            className="w-full py-2.5 px-3 rounded border border-neutrals-200 bg-background-1 text-base tracking-[0.24px] placeholder:text-neutrals-200 focus:outline-none focus:border-navy-blue resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-50 w-full sm:w-auto h-10 bg-navy-blue text-white rounded-md text-sm tracking-[0.46px] hover:bg-navy-blue/90 transition-colors px-20 py-3"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}

export default ContactForm;
