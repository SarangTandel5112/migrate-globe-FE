"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ArrowDownIcon from "../icons/ArrowDown";
import { usePlatformInput } from "@/hooks/usePlatformInput";
import { API_URL, countriesList } from "@/constants";
import { getAuthHeaders } from "@/utils/helpers";

function ContactForm() {
    const { inputType } = usePlatformInput();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        country: countriesList[0],
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        // Validate First Name
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = "First name must be at least 2 characters";
        }

        // Validate Last Name
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters";
        }

        // Validate Phone Number
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
        }

        // Validate Country
        if (!formData.country) {
            newErrors.country = "Please select a country";
        }

        // Validate Message
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (!validateForm()) return;

        try {
            const payload = {
                firstName: formData?.firstName,
                lastName: formData?.lastName,
                phoneNumber: formData?.phone,
                country: formData?.country.name,
                countryCode: formData?.country.dialCode,
                question: formData?.message,
            };
            const token = localStorage?.getItem("token");
            const response = await fetch(`${API_URL}contacts`, {
                method: "POST",
                headers: getAuthHeaders(token || ""),
                body: JSON.stringify({ data: payload }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const data = await response.json();
            console.log("Form submitted successfully:", data);

            // Reset form after successful submission
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                country: countriesList[0],
                message: "",
            });
            setErrors({});
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitted(false);
        }
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsSubmitted(true);

    //     if (validateForm()) {
    //         console.log("Form submitted:", formData);
    //         // Handle form submission here
    //         // Reset form after successful submission
    //         // setFormData({
    //         //     firstName: "",
    //         //     lastName: "",
    //         //     phone: "",
    //         //     country: "Australia",
    //         //     message: "",
    //         // });
    //         // setErrors({});
    //         // setIsSubmitted(false);
    //     }
    // };

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
                                className={`w-full py-2.5 px-3 rounded border text-neutral-700 bg-background-1 text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-navy-blue ${
                                    errors.firstName
                                        ? "border-red-500"
                                        : "border-neutrals-200"
                                }`}
                            />
                            {isSubmitted && errors.firstName && (
                                <p className="text-red text-xs mt-1">
                                    {errors.firstName}
                                </p>
                            )}
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
                                className={`w-full py-2.5 px-3 rounded border text-neutral-700 bg-background-1 text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-navy-blue ${
                                    errors.lastName
                                        ? "border-red-500"
                                        : "border-neutrals-200"
                                }`}
                            />
                            {isSubmitted && errors.lastName && (
                                <p className="text-red text-xs mt-1">
                                    {errors.lastName}
                                </p>
                            )}
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
                                type={inputType}
                                // type={'text'}
                                value={formData.phone}
                                maxLength={10}
                                // pattern="\d*"
                                // pattern= "[0-9*]"
                                onChange={(e) =>
                                    handleInputChange("phone", e.target.value)
                                }
                                placeholder="123 456 7890"
                                className={`flex-1 py-2.5 px-4 border !text-neutral-700 bg-background-1 rounded font-semibold text-base text-neutrals-300 leading-6 focus:outline-none focus:border-navy-blue ${
                                    errors.phone
                                        ? "border-red-500"
                                        : "border-neutrals-200"
                                }`}
                            />
                        </div>
                        {isSubmitted && errors.phone && (
                            <p className="text-red text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block font-semibold text-sm text-neutrals tracking-[0.24px] capitalize mb-2">
                            Country
                        </label>
                        <div className="relative">
                            <select
                                value={formData.country.name}
                                onChange={(e) => {
                                    const selected = countriesList.find(
                                        (c) => c.name === e.target.value
                                    );
                                    if (selected) {
                                        setFormData((prev) => ({
                                            ...prev,
                                            country: selected, // store the full object
                                        }));
                                    }
                                }}
                                className={`w-full py-2.5 px-3 rounded border bg-background-1 text-base tracking-[0.24px] text-neutrals-700 focus:outline-none focus:border-navy-blue appearance-none ${
                                    errors.country
                                        ? "border-red-500"
                                        : "border-neutrals-200"
                                }`}
                            >
                                {countriesList.map((country) => (
                                    <option
                                        key={country.name}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <ArrowDownIcon />
                            </div>
                        </div>
                        {isSubmitted && errors.country && (
                            <p className="text-red text-xs mt-1">
                                {errors.country}
                            </p>
                        )}
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
                            className={`w-full py-2.5 px-3 rounded border text-neutrals-700 bg-background-1 text-base tracking-[0.24px] placeholder:text-neutrals-200 focus:outline-none focus:border-navy-blue resize-none ${
                                errors.message
                                    ? "border-red-500"
                                    : "border-neutrals-200"
                            }`}
                        />
                        {isSubmitted && errors.message && (
                            <p className="text-red text-xs mt-1">
                                {errors.message}
                            </p>
                        )}
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
