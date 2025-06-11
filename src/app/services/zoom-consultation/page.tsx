"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";

export default function ZoomConsultation() {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<number>(21);
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [currentMonth, setCurrentMonth] = useState<string>("September 2025");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        country: "Australia",
    });

    const timeSlots = [
        "4:30 PM",
        "5:30 PM",
        "6:30 PM",
        "7:30 PM",
        "8:30 PM",
        "9:30 PM",
    ];

    const generateCalendarDays = () => {
        // Generate calendar days for September 2025
        const daysInMonth = 30;
        const startDay = 1; // Monday = 1, Sunday = 0
        const days = [];

        // Add empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    const calendarDays = generateCalendarDays();
    const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleBookSlot = () => {
        if (
            selectedTime &&
            formData.firstName &&
            formData.lastName &&
            formData.phone
        ) {
            // Handle booking logic here
            console.log("Booking:", {
                selectedDate,
                selectedTime,
                ...formData,
            });
        }
    };

    const isFormValid =
        selectedTime &&
        formData.firstName &&
        formData.lastName &&
        formData.phone;

    return (
        <div className="container-1200">
            {/* Header Section */}
            <div className="mb-8">
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-[#263773] hover:opacity-75 transition-opacity"
                >
                    <BackIcon />
                    <span className="font-urbanist font-bold text-base text-[#263773] capitalize tracking-[0.2px]">
                        Back
                    </span>
                </button>

                <div className="space-y-2">
                    <h1 className="font-urbanist font-bold text-2xl text-[#263773] tracking-[0.608px]">
                        Zoom consultation
                    </h1>
                    <p className="font-urbanist text-base text-[#515F8F] leading-6 tracking-[0.2px] capitalize max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur. Nunc proin sed
                        dis arcu nulla eget lacus.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column - Calendar and Time Slots */}
                <div className="flex-1">
                    <div className="bg-white rounded-xl p-4">
                        <div className="bg-[#F7F8FD] rounded-lg p-8">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                    <svg
                                        width="9"
                                        height="15"
                                        viewBox="0 0 9 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 14L1.5 7.53824L7.5 1.07648"
                                            stroke="#696969"
                                            strokeWidth="1.3259"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>

                                <h3 className="font-urbanist text-xl text-[#333] tracking-[0.38px]">
                                    {currentMonth}
                                </h3>

                                <button className="w-9 h-9 rounded-full bg-[#263773] flex items-center justify-center">
                                    <svg
                                        width="9"
                                        height="15"
                                        viewBox="0 0 9 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.5 1L7.5 7.46176L1.5 13.9235"
                                            stroke="white"
                                            strokeWidth="1.3259"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Week Days Header */}
                            <div className="grid grid-cols-7 gap-0 mb-2">
                                {weekDays.map((day) => (
                                    <div
                                        key={day}
                                        className="h-12 flex items-center justify-center"
                                    >
                                        <span className="font-urbanist text-sm text-[#333]">
                                            {day}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-0">
                                {calendarDays.map((day, index) => (
                                    <div
                                        key={index}
                                        className="h-12 flex items-center justify-center relative"
                                    >
                                        {day && (
                                            <button
                                                onClick={() =>
                                                    setSelectedDate(day)
                                                }
                                                className={`relative w-12 h-12 flex items-center justify-center rounded-full text-lg font-urbanist tracking-[-0.274px] transition-all ${
                                                    day === selectedDate
                                                        ? "bg-[#263773] text-white"
                                                        : day >= 14 && day <= 30
                                                        ? "hover:bg-white text-[#333]"
                                                        : "text-[#696969] cursor-not-allowed"
                                                }`}
                                                disabled={day < 14}
                                            >
                                                {day === 13 && (
                                                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#696969] rounded-full"></div>
                                                )}
                                                {day >= 14 &&
                                                    day <= 30 &&
                                                    day !== selectedDate && (
                                                        <div className="absolute inset-0 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
                                                    )}
                                                <span className="relative z-10">
                                                    {day}
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Time Slots Section */}
                    <div className="mt-6">
                        <h4 className="font-urbanist text-base text-[#333] mb-4">
                            Thursday, 21 September
                        </h4>

                        <div className="space-y-2">
                            {timeSlots.map((time) => (
                                <div
                                    key={time}
                                    className="flex items-center gap-1.5"
                                >
                                    <button
                                        onClick={() => setSelectedTime(time)}
                                        className={`flex-1 py-4 px-18 rounded-xl border text-lg font-urbanist leading-6 transition-all ${
                                            selectedTime === time
                                                ? "bg-[#263773] text-white border-[#263773]"
                                                : "bg-[#F7F8FD] text-[#333] border-[#D3D3D3] hover:border-[#263773]"
                                        }`}
                                    >
                                        {time}
                                    </button>

                                    {selectedTime === time && (
                                        <button className="py-4 px-6 bg-[#333] text-white text-lg font-lexend leading-6 rounded-xl">
                                            Weiter
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Booking Form */}
                <div className="lg:w-80">
                    <div className="bg-white rounded-xl p-4 space-y-6">
                        {/* First Name */}
                        <div className="space-y-2">
                            <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
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
                                className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-[#263773]"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
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
                                className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-[#263773]"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1">
                            <label className="block font-urbanist font-bold text-sm text-[#333] leading-6">
                                Phone number
                            </label>
                            <div className="flex gap-1">
                                {/* Country Code Selector */}
                                <div className="flex items-center gap-2.5 py-2.5 px-2.5 border border-[#D3D3D3] bg-[#F7F8FD] rounded">
                                    <div className="flex items-center gap-1">
                                        {/* India Flag */}
                                        <div className="w-3.5 h-3.5 relative">
                                            <div className="absolute inset-0 rounded-sm overflow-hidden">
                                                <div className="h-1/3 bg-[#FF9933]"></div>
                                                <div className="h-1/3 bg-[#F7F7F7] flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#000080] flex items-center justify-center">
                                                        <div className="w-1 h-1 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                                                            <div className="w-0.5 h-0.5 rounded-full bg-[#6666B3]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-1/3 bg-[#138808]"></div>
                                            </div>
                                        </div>
                                        <span className="font-urbanist text-sm text-[#333] tracking-[0.24px] capitalize">
                                            +91
                                        </span>
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.5 1.25L5 4.75L8.5 1.25"
                                                stroke="#7D87AB"
                                                strokeWidth="1.16667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "phone",
                                            e.target.value
                                        )
                                    }
                                    placeholder="123 456 7890"
                                    className="flex-1 py-2.5 px-4 border border-[#D3D3D3] bg-[#F7F8FD] rounded font-urbanist font-bold text-base text-[#C0C0C0] leading-6 focus:outline-none focus:border-[#263773]"
                                />
                            </div>
                        </div>

                        {/* Country */}
                        <div className="space-y-2">
                            <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
                                Country
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.country}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "country",
                                            e.target.value
                                        )
                                    }
                                    className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] text-[#D3D3D3] focus:outline-none focus:border-[#263773] appearance-none"
                                >
                                    <option value="Australia">Australia</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        width="12"
                                        height="7"
                                        viewBox="0 0 12 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.59961 1.20001L6.39961 6.00001L11.1996 1.20001"
                                            stroke="#7D87AB"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Book Slot Button */}
                        <button
                            onClick={handleBookSlot}
                            disabled={!isFormValid}
                            className={`w-full h-10 rounded-md font-urbanist text-sm tracking-[0.46px] transition-all ${
                                isFormValid
                                    ? "bg-[#263773] text-white hover:bg-[#263773]/90"
                                    : "bg-[#D3D3D3] text-[#696969] cursor-not-allowed"
                            }`}
                        >
                            Book slot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
