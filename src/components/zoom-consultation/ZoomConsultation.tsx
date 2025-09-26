"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/BackIcon";
import LeftSignIcon from "@/components/icons/LeftSign";
import ZoomBookForm from "@/components/zoom-book-form";
import { motion } from "framer-motion";
import { bookConsultation } from "@/api/zoom-consultation";
import { useTimeSlots } from "@/hooks/useTimeSlots";
import { convertSlotToLocalReliable, Country } from "@/utils/helpers";
import Toast from "@/ui/toast";
import { Country as CountryType } from "@/utils/countries";

const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();
// const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

interface FormData {
    firstName: string;
    lastName: string;
    emailId: string;
    phone: string;
    country: Country;
}

export default function ZoomConsultation({
    countries,
}: {
    countries: CountryType[];
}) {
    const router = useRouter();
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [isBooking, setIsBooking] = useState(false);
    const [bookingError, setBookingError] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        emailId: "",
        phone: "",
        country: "Australia",
    });

    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error" | "info";
        isOpen: boolean;
    }>({
        message: "",
        type: "info",
        isOpen: false,
    });
    // const [token, setToken] = useState(null);

    // useEffect(() => {
    // if (typeof window !== 'undefined') {
    //     const storedData = localStorage?.getItem('token');
    //     if (storedData) setToken(JSON.parse(storedData));
    // }
    // }, []);

    // Use custom hook for time slots
    const {
        timeSlots,
        loading: loadingTimeSlots,
        error: timeSlotsError,
        refetch,
    } = useTimeSlots(selectedDate);

    // Map slots to display times in local timezone
    const localTimeSlots = timeSlots?.slots?.map((slot) => ({
        original: slot, // keep raw time string
        local: convertSlotToLocalReliable(selectedDate!, slot), // display in user TZ
    }));

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
    yesterday.setDate(today.getDate() - 1);
    const isCurrentMonthView =
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

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

    const showToast = (message: string, type: "success" | "error" | "info") => {
        setToast({ message, type, isOpen: true });
    };

    // const calendarDays = generateCalendarDays();
    const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleBookSlot = async () => {
        if (
            selectedTime &&
            selectedDate &&
            formData.firstName &&
            formData.lastName &&
            formData.emailId &&
            formData.phone
        ) {
            try {
                setIsBooking(true);
                setBookingError(null);

                // Format the date as YYYY-MM-DD
                // const formattedDate = selectedDate.toISOString().split('T')[0];
                const year = selectedDate.getFullYear();
                const month = String(selectedDate.getMonth() + 1).padStart(
                    2,
                    "0"
                );
                const day = String(selectedDate.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`;
                // Format time to HH:MM:SS.000 format
                const timeParts = selectedTime.split(" ");
                const time = timeParts[0];
                const period = timeParts[1];
                // let [hours, minutes] = time.split(':').map(Number);
                const [rawHours, minutes] = time.split(":").map(Number);
                let hours = rawHours;
                if (period === "PM" && hours < 12) hours += 12;
                if (period === "AM" && hours === 12) hours = 0;

                const formattedTime = `${hours
                    .toString()
                    .padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:00.000`;

                const bookingData = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    countryCode: "+91", // Default to India for now
                    phoneNumber: formData.phone,
                    country: formData.country,
                    date: formattedDate,
                    time: formattedTime,
                    email: formData.emailId,
                };

                const token = localStorage?.getItem("token");
                const result = await bookConsultation(bookingData, token || "");

                // Handle successful booking - redirect to checkout URL
                if (result?.checkout_url) {
                    // Redirect to the checkout URL
                    window.location.href = result.checkout_url;
                } else {
                    console.error("No checkout URL received from API");
                    showToast(
                        "Booking successful but no payment link received",
                        "info"
                    );
                    setBookingError(
                        "Booking successful but no payment link received"
                    );
                }
            } catch (error) {
                console.error("Booking failed:", error);
                setBookingError(
                    error instanceof Error
                        ? error.message
                        : "Failed to book consultation"
                );
                showToast(
                    error instanceof Error
                        ? error.message
                        : "Failed to book consultation",
                    "error"
                );
            } finally {
                setIsBooking(false);
            }
        }
    };

    const isFormValid = Boolean(
        selectedTime &&
            selectedDate &&
            formData.firstName &&
            formData.lastName &&
            formData.emailId &&
            formData.phone
    );

    return (
        <div>
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
                        Choose your preferred date and time to book a
                        consultation with ease. Streamline your appointment with
                        secure, flexible, and efficient scheduling.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            {/* <div className="flex flex-col lg:flex-row gap-6 items-stretch"> */}
            <motion.div
                className="flex flex-col lg:flex-row gap-6 items-stretch"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
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
                                        isCurrentMonthView
                                            ? "bg-white cursor-not-allowed"
                                            : "bg-navy-blue"
                                    }`}
                                    disabled={isCurrentMonthView}
                                >
                                    <LeftSignIcon
                                        color={
                                            isCurrentMonthView
                                                ? "#696969"
                                                : "#fff"
                                        }
                                        className="h-3 md:h-7"
                                    />
                                </button>

                                <h3 className="font-urbanist md:text-xl min-w-36 md:min-w-60 text-center text-[#333] tracking-[0.38px]">
                                    {/* {currentMonth} */}
                                    {new Date(
                                        currentYear,
                                        currentMonth
                                    ).toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </h3>

                                <button
                                    onClick={handleNext}
                                    className="w-7 h-7 md:h-9 md:w-9 rounded-full rotate-180 bg-navy-blue flex items-center justify-center"
                                >
                                    <LeftSignIcon
                                        color="#fff"
                                        className="h-3 md:h-7"
                                    />
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
                                    if (d.getFullYear() === 1970)
                                        return (
                                            <div
                                                key={index}
                                                className="h-12"
                                            ></div>
                                        ); // Empty cells

                                    const isPast =
                                        d.getTime() <
                                        new Date(
                                            today.getFullYear(),
                                            today.getMonth(),
                                            today.getDate()
                                        ).getTime();
                                    const isSelected =
                                        d.toDateString() ===
                                        selectedDate?.toDateString();
                                    const isYesterday =
                                        d.toDateString() ===
                                        yesterday.toDateString();

                                    return (
                                        <div
                                            key={index}
                                            className="h-12 flex items-center justify-center relative"
                                        >
                                            <button
                                                onClick={() =>
                                                    d.getMonth() ===
                                                        currentMonth &&
                                                    !isPast &&
                                                    setSelectedDate(d)
                                                }
                                                className={`relative w-12 h-12 flex items-center justify-center rounded-full text-base lg:text-lg font-urbanist tracking-[-0.274px] transition-all
                                                ${
                                                    isSelected
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
                                                <span className="relative z-10">
                                                    {d.getDate()}
                                                </span>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Time Slots Section */}
                        <div className="mt-0 w-full md:w-[35%] lg:w-[30%] flex flex-col">
                            <h4 className="font-urbanist text-base text-center mt-4 md:mt-0 text-[#333] mb-4">
                                {selectedDate
                                    ? selectedDate.toLocaleDateString(
                                          undefined,
                                          {
                                              weekday: "long",
                                              day: "numeric",
                                              month: "long",
                                              year: "numeric",
                                          }
                                      )
                                    : ""}
                            </h4>

                            <div className="max-h-[480px] overflow-y-auto">
                                <div className="space-y-2">
                                    {loadingTimeSlots ? (
                                        <div className="text-center py-4">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-navy-blue mx-auto"></div>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Loading time slots...
                                            </p>
                                        </div>
                                    ) : timeSlotsError ? (
                                        <div className="text-center py-4">
                                            <p className="text-sm text-red-500">
                                                {timeSlotsError}
                                            </p>
                                            <button
                                                onClick={refetch}
                                                className="text-sm text-navy-blue underline mt-2"
                                            >
                                                Try again
                                            </button>
                                        </div>
                                    ) : timeSlots?.slots?.length === 0 ? (
                                        <div className="text-center py-4">
                                            <p className="text-sm text-gray-500">
                                                No time slots available for this
                                                date
                                            </p>
                                        </div>
                                    ) : (
                                        // timeSlots?.slots?.map((time, i) => (
                                        localTimeSlots?.map((time, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-1.5 group"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.1,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                <button
                                                    onClick={() =>
                                                        setSelectedTime(
                                                            time?.original
                                                        )
                                                    }
                                                    className={`flex-1 py-4 px-2 rounded-xl border text-base font-urbanist leading-6 transition-all bg-[#F7F8FD] text-[#333] border-[#D3D3D3] group-hover:bg-navy-blue group-hover:text-white group-hover:border-navy-blue ${
                                                        selectedTime ===
                                                        time?.original
                                                            ? "bg-navy-blue text-white border-navy-blue"
                                                            : ""
                                                    }`}
                                                >
                                                    {time?.local}
                                                </button>
                                                {/* <button onClick={() => setSelectedTime(time?.original)} className="py-4 px-5 bg-[#333] text-white text-base font-lexend leading-6 rounded-xl hidden group-hover:block">
                                                Weiter
                                            </button> */}
                                            </motion.div>
                                        ))
                                    )}
                                </div>
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
                    isBooking={isBooking}
                    bookingError={bookingError}
                    countries={countries}
                    key={"book-form"}
                />
            </motion.div>
            <Toast
                message={toast.message}
                type={toast.type}
                isOpen={toast.isOpen}
                onClose={() => setToast({ ...toast, isOpen: false })}
            />
        </div>
    );
}
