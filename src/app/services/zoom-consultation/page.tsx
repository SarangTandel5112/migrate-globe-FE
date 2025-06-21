"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import LeftSignIcon from "@/components/icons/LeftSign";
import ZoomBookForm from "@/components/zoom-book-form";


const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
// const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export default function ZoomConsultation() {
    const router = useRouter();
    const [selectedTime] = useState<string>('');
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

    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const dates: Date[] = [];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = daysInMonth(currentMonth, currentYear);

    for (let i = 0; i < firstDayOfMonth; i++) {
        dates.push(new Date(0)); // Empty cell
    }

    for (let d = 1; d <= totalDays; d++) {
        dates.push(new Date(currentYear, currentMonth, d));
    }
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1)
    const isCurrentMonthView = currentMonth === today.getMonth() && currentYear === today.getFullYear();

    const handlePrev = () => {
        if (isCurrentMonthView) return;
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNext = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    // const generateCalendarDays = () => {
    //     // Generate calendar days for September 2025
    //     const daysInMonth = 30;
    //     const startDay = 1; // Monday = 1, Sunday = 0
    //     const days = [];

    //     // Add empty cells for days before month starts
    //     for (let i = 0; i < startDay; i++) {
    //         days.push(null);
    //     }

    //     // Add days of the month
    //     for (let day = 1; day <= daysInMonth; day++) {
    //         days.push(day);
    //     }

    //     return days;
    // };

    // const calendarDays = generateCalendarDays();
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

    const isFormValid = Boolean(
        selectedTime &&
        formData.firstName &&
        formData.lastName &&
        formData.phone
    )

    return (
        <div className="container-1200">
            {/* Header Section */}
            <div className="mb-8">
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-navy-blue hover:opacity-75 transition-opacity"
                >
                    <BackIcon />
                    <span className="font-urbanist font-bold text-base text-navy-blue capitalize tracking-[0.2px]">
                        Back
                    </span>
                </button>

                <div className="md:space-y-1">
                    <h1 className="font-urbanist font-bold text-xl md:text-2xl text-navy-blue tracking-[0.608px]">
                        Zoom consultation
                    </h1>
                    <p className="font-urbanist text-sm md:text-base text-[#515F8F] leading-6 tracking-[0.2px] capitalize max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur. Nunc proin sed
                        dis arcu nulla eget lacus.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                {/* Left Column - Calendar and Time Slots */}
                <div className="flex-1 flex flex-col">
                    <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between p-4 h-full">
                        <div className="bg-[#F7F8FD] rounded-lg p-8 w-full md:w-[62%] lg:w-[68%]">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-center gap-4 mb-4">
                                {/* <button onClick={handlePrev} className="w-9 h-9 rounded-full bg-white flex items-center justify-center"> */}
                                <button
                                    onClick={handlePrev}
                                    className={`w-7 h-7 md:h-9 md:w-9 rounded-full flex items-center justify-center ${
                                        isCurrentMonthView ? "bg-white cursor-not-allowed" : "bg-navy-blue"
                                    }`}
                                    disabled={isCurrentMonthView}
                                >
                                    <LeftSignIcon color={isCurrentMonthView ? '#696969' : '#fff'} className='h-3 md:h-7' />
                                </button>

                                <h3 className="font-urbanist md:text-xl min-w-36 md:min-w-60 text-center text-[#333] tracking-[0.38px]">
                                    {/* {currentMonth} */}
                                    {new Date(currentYear, currentMonth).toLocaleString('default', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </h3>

                                <button onClick={handleNext} className="w-7 h-7 md:h-9 md:w-9 rounded-full rotate-180 bg-navy-blue flex items-center justify-center">
                                    <LeftSignIcon color='#fff' className='h-3 md:h-7' />
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
                                {/* {calendarDays.map((day, index) => ( */}
                                {dates.map((d, index) => {
                                    if (d.getFullYear() === 1970) return <div key={index} className="h-12"></div>; // Empty cells

                                    const isPast = d.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
                                    const isSelected = d.toDateString() === selectedDate?.toDateString();
                                    const isYesterday = d.toDateString() === yesterday.toDateString();

                                    return (
                                        <div key={index} className="h-12 flex items-center justify-center relative">
                                            <button
                                                onClick={() => d.getMonth() === currentMonth && !isPast && setSelectedDate(d)}
                                                className={`relative w-12 h-12 flex items-center justify-center rounded-full text-base lg:text-lg font-urbanist tracking-[-0.274px] transition-all
                                                ${isSelected
                                                        ? "bg-navy-blue text-white"
                                                        : !isPast
                                                            ? "hover:bg-white text-[#333]"
                                                            : "text-[#696969] cursor-not-allowed"
                                                    }`}
                                                disabled={isPast}
                                            >
                                                {/* Dot on yesterday */}
                                                {isYesterday && (
                                                    <div className="absolute bottom-1 right-[45%] w-1 h-1 bg-neutrals rounded-full"></div>
                                                )}
                                                <span className="relative z-10">{d.getDate()}</span>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Time Slots Section */}
                        <div className="mt-0 w-full md:w-[35%] lg:w-[30%]">
                            <h4 className="font-urbanist text-base text-center mt-4 md:mt-0 text-[#333] mb-4">
                                {selectedDate ? selectedDate.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                            </h4>

                            <div className="space-y-2">
                                {timeSlots.map((time) => (
                                    <div
                                        key={time}
                                        className="flex items-center gap-1.5 group"
                                    >
                                        <button
                                            // onClick={() => setSelectedTime(time)}
                                            className="flex-1 py-4 px-2 rounded-xl border text-base font-urbanist leading-6 transition-all bg-[#F7F8FD] text-[#333] border-[#D3D3D3] group-hover:bg-navy-blue group-hover:text-white group-hover:border-navy-blue"
                                        >
                                            {time}
                                        </button>

                                        <button className="py-4 px-5 bg-[#333] text-white text-base font-lexend leading-6 rounded-xl hidden group-hover:block">
                                            Weiter
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Booking Form */}
                <ZoomBookForm
                    formData={formData}
                    handleBookSlot={handleBookSlot}
                    handleInputChange={handleInputChange}
                    isFormValid={isFormValid}
                    key={'book-form'}
                />
            </div>
        </div>
    );
}
