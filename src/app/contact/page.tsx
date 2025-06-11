"use client";

import { useState } from "react";

interface FAQItem {
    id: string;
    question: string;
    answer?: string;
    isOpen: boolean;
}

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        country: "Australia",
        message: "",
    });

    const [faqItems, setFaqItems] = useState<FAQItem[]>([
        {
            id: "1",
            question: "What is MigrateGlobe?",
            isOpen: false,
        },
        {
            id: "2",
            question: "Is visa consultation with MigrateGlobe free?",
            answer: "Our initial consultation is completely free. You'll only pay for advanced services like documentation support or premium processing packages.",
            isOpen: true,
        },
        {
            id: "3",
            question: "What are the types of visas I can apply for?",
            isOpen: false,
        },
        {
            id: "4",
            question: "How long does the visa process usually take?",
            isOpen: false,
        },
        {
            id: "5",
            question:
                "Can MigrateGlobe help me with SOPs, LORs, and resume writing?",
            isOpen: false,
        },
    ]);

    const offices = [
        {
            id: "australia",
            name: "Australia",
            address: "Suite 15, 11 Ada St, Harris Park, NSW 2150",
        },
        {
            id: "delhi",
            name: "New Delhi",
            address:
                "C8/1, 2nd Floor, Rohini Sector 7, Rohini East Metro Station, New Delhi-110085",
        },
        {
            id: "rajasthan",
            name: "Rajasthan",
            address:
                "Sri Ganga Nagar - 63, near PNB Bank, P Block, Sri Ganganagar, Rajasthan 335001, India",
        },
        {
            id: "haryana1",
            name: "Haryana",
            address:
                "Sirsa - Study Globe, Barnala Rd, near Welcome Palace, Sirsa, Haryana 125055, India",
        },
        {
            id: "haryana2",
            name: "Haryana",
            address:
                "Hisar - SHOPPING COMPLEX, SCO 83, 2ND FLOOR, near Jain Jewellers, PLA, Hisar, Haryana 125001, India",
        },
    ];

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

    const toggleFAQ = (id: string) => {
        setFaqItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

    return (
        <div className="container-1200">
            {/* Contact Section */}
            <div className="flex flex-col lg:flex-row">
                {/* Left Section - Map and Locations */}
                <div className="lg:w-3/5 bg-[#263773] relative">
                    <div className="p-10">
                        {/* Contact Info Header */}
                        <div className="flex flex-col lg:flex-row gap-10 mb-8">
                            <div className="flex-1">
                                <h3 className="font-urbanist font-bold text-sm text-white tracking-[0.608px] capitalize mb-1">
                                    E-mail
                                </h3>
                                <p className="font-urbanist text-base text-white tracking-[0.608px] capitalize">
                                    📧 visas@studyglobe.au
                                </p>
                            </div>

                            <div>
                                <h3 className="font-urbanist font-bold text-sm text-white tracking-[0.608px] capitalize mb-1">
                                    Phone
                                </h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 1H7L9 6L6.5 7.5C7.57096 9.67153 9.32847 11.429 11.5 12.5L13 10L18 12V16C18 17.1046 17.1046 18 16 18C7.92765 17.5094 1.49056 11.0724 1 3C1 1.89543 1.89543 1 3 1"
                                                stroke="white"
                                                strokeWidth="1.75"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="font-urbanist text-base text-white tracking-[0.608px] capitalize">
                                            +61 282136300
                                        </span>
                                    </div>

                                    <div className="w-px h-6 bg-[#7D87AB]"></div>

                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 1H7L9 6L6.5 7.5C7.57096 9.67153 9.32847 11.429 11.5 12.5L13 10L18 12V16C18 17.1046 17.1046 18 16 18C7.92765 17.5094 1.49056 11.0724 1 3C1 1.89543 1.89543 1 3 1"
                                                stroke="white"
                                                strokeWidth="1.75"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="font-urbanist text-base text-white tracking-[0.608px] capitalize">
                                            +61 282136300
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* World Map */}
                        <div className="h-96 bg-[#263773] relative mb-8 overflow-hidden">
                            {/* Simplified world map with dot pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 600 300"
                                    className="w-full h-full"
                                >
                                    {/* Create dot pattern for world map effect */}
                                    <defs>
                                        <pattern
                                            id="dots"
                                            patternUnits="userSpaceOnUse"
                                            width="8"
                                            height="8"
                                        >
                                            <circle
                                                cx="4"
                                                cy="4"
                                                r="1"
                                                fill="#7D87AB"
                                            />
                                        </pattern>
                                    </defs>
                                    {/* Continental shapes using dot pattern */}
                                    <path
                                        d="M50 80 Q100 60 150 80 Q200 100 250 90 Q300 70 350 90 L350 140 Q300 120 250 130 Q200 150 150 130 Q100 110 50 130 Z"
                                        fill="url(#dots)"
                                    />
                                    <path
                                        d="M100 160 Q150 140 200 160 Q250 180 300 170 L300 220 Q250 230 200 210 Q150 190 100 210 Z"
                                        fill="url(#dots)"
                                    />
                                    <path
                                        d="M350 100 Q400 80 450 100 Q500 120 550 110 L550 160 Q500 170 450 150 Q400 130 350 150 Z"
                                        fill="url(#dots)"
                                    />
                                </svg>
                            </div>

                            {/* Location marker for Australia */}
                            <div className="absolute bottom-20 right-32">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-[#263773] border border-[#8BD7BC] rounded-full"></div>
                                    <div className="w-2 h-2 bg-[#8BD7BC] rounded-full absolute top-0.5 left-0.5"></div>
                                </div>
                                <div className="absolute -top-8 -left-8 bg-[#8BD7BC] rounded-full px-2 py-1 flex items-center gap-1">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.59023 5.59837C1.43835 5.59837 1.2927 5.53804 1.1853 5.43065C1.07791 5.32325 1.01758 5.1776 1.01758 5.02572V2.73512C1.01756 2.64087 1.04082 2.54807 1.08527 2.46496C1.12972 2.38185 1.194 2.31099 1.27241 2.25868L2.99036 1.11338C3.08446 1.0506 3.19505 1.01709 3.30818 1.01709C3.4213 1.01709 3.53189 1.0506 3.626 1.11338L5.34395 2.25868C5.42235 2.31099 5.48663 2.38185 5.53108 2.46496C5.57554 2.54807 5.59879 2.64087 5.59877 2.73512V5.02572C5.59877 5.1776 5.53844 5.32325 5.43105 5.43065C5.32366 5.53804 5.178 5.59837 5.02613 5.59837H1.59023Z"
                                            stroke="#333333"
                                            strokeWidth="1.1453"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.3069 5.7267C10.3069 4.5117 9.82426 3.34645 8.96512 2.48731C8.10598 1.62817 6.94074 1.14551 5.72573 1.14551C4.51072 1.14551 3.34547 1.62817 2.48633 2.48731C1.62719 3.34645 1.14453 4.5117 1.14453 5.7267C1.14453 8.58594 4.31644 11.5637 5.38157 12.4834C5.48085 12.5579 5.60163 12.5981 5.72573 12.5979"
                                            stroke="#333333"
                                            strokeWidth="1.1453"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1.30859 2.59832V0.880371"
                                            stroke="#333333"
                                            strokeWidth="1.1453"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2.72576 4.44469C3.67456 4.44469 4.44371 3.67553 4.44371 2.72674C4.44371 1.77794 3.67456 1.00879 2.72576 1.00879C1.77696 1.00879 1.00781 1.77794 1.00781 2.72674C1.00781 3.67553 1.77696 4.44469 2.72576 4.44469Z"
                                            stroke="#333333"
                                            strokeWidth="1.1453"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="font-urbanist font-bold text-xs text-[#333] tracking-[0.348px] capitalize">
                                        Australia
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Our Locations */}
                        <div className="mb-8">
                            <h2 className="font-urbanist font-bold text-2xl text-white capitalize mb-4">
                                Our Locations
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                {offices.slice(0, 3).map((office) => (
                                    <div
                                        key={office.id}
                                        className="bg-[#515F8F] rounded p-4"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2 9.00015C1.73478 9.00015 1.48043 8.89479 1.29289 8.70726C1.10536 8.51972 1 8.26537 1 8.00015V4.00015C0.999975 3.83556 1.04058 3.6735 1.11821 3.52837C1.19583 3.38323 1.30808 3.2595 1.445 3.16815L4.445 1.16815C4.60933 1.05851 4.80245 1 5 1C5.19755 1 5.39067 1.05851 5.555 1.16815L8.555 3.16815C8.69192 3.2595 8.80417 3.38323 8.88179 3.52837C8.95942 3.6735 9.00002 3.83556 9 4.00015V8.00015C9 8.26537 8.89464 8.51972 8.70711 8.70726C8.51957 8.89479 8.26522 9.00015 8 9.00015H2Z"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 13.993 6.539 19.193 8.399 20.799C8.57237 20.929 8.78329 20.9992 9 20.999"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M1 4V1"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h3 className="font-urbanist font-bold text-base text-white tracking-[0.608px] capitalize">
                                                {office.name}
                                            </h3>
                                        </div>
                                        <p className="font-urbanist text-xs text-[#BEC3D5] tracking-[0.608px] capitalize">
                                            {office.address}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {offices.slice(3).map((office) => (
                                    <div
                                        key={office.id}
                                        className="bg-[#515F8F] rounded p-4"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2 9.00015C1.73478 9.00015 1.48043 8.89479 1.29289 8.70726C1.10536 8.51972 1 8.26537 1 8.00015V4.00015C0.999975 3.83556 1.04058 3.6735 1.11821 3.52837C1.19583 3.38323 1.30808 3.2595 1.445 3.16815L4.445 1.16815C4.60933 1.05851 4.80245 1 5 1C5.19755 1 5.39067 1.05851 5.555 1.16815L8.555 3.16815C8.69192 3.2595 8.80417 3.38323 8.88179 3.52837C8.95942 3.6735 9.00002 3.83556 9 4.00015V8.00015C9 8.26537 8.89464 8.51972 8.70711 8.70726C8.51957 8.89479 8.26522 9.00015 8 9.00015H2Z"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 13.993 6.539 19.193 8.399 20.799C8.57237 20.929 8.78329 20.9992 9 20.999"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M1 4V1"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z"
                                                    stroke="#BEC3D5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h3 className="font-urbanist font-bold text-base text-white tracking-[0.608px] capitalize">
                                                {office.name}
                                            </h3>
                                        </div>
                                        <p className="font-urbanist text-xs text-[#BEC3D5] tracking-[0.608px] capitalize">
                                            {office.address}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="lg:w-2/5 p-10">
                    <div className="max-w-md">
                        <div className="mb-6">
                            <h2 className="font-urbanist font-bold text-2xl text-[#333] capitalize mb-2">
                                Feel free to Contact
                            </h2>
                            <p className="font-urbanist text-base text-[#696969] leading-6 tracking-[0.2px] capitalize">
                                Do you have any questions?
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* First Name and Last Name */}
                            <div className="flex gap-5">
                                <div className="flex-1">
                                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize mb-2">
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

                                <div className="flex-1">
                                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize mb-2">
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
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block font-urbanist font-bold text-sm text-[#333] leading-6 mb-1">
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
                            <div>
                                <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize mb-2">
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
                                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] text-[#333] focus:outline-none focus:border-[#263773] appearance-none"
                                    >
                                        <option value="Australia">
                                            Australia
                                        </option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.60156 1.6001L6.40156 6.4001L11.2016 1.6001"
                                                stroke="#7D87AB"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize mb-2">
                                    How can we help?
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "message",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Type your message"
                                    rows={4}
                                    className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] focus:outline-none focus:border-[#263773] resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="w-50 h-10 bg-[#263773] text-white rounded-md font-urbanist text-sm tracking-[0.46px] hover:bg-[#263773]/90 transition-colors px-6"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className="font-urbanist font-bold text-4xl text-[#263773] tracking-[0.608px] mb-2">
                            FAQ
                        </h2>
                        <p className="font-urbanist text-2xl text-[#515F8F] tracking-[0.608px]">
                            Got questions? Find answers here.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqItems.map((item) => (
                            <div
                                key={item.id}
                                className="border-b border-[#D3D3D3] pb-4"
                            >
                                <button
                                    onClick={() => toggleFAQ(item.id)}
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <h3 className="font-urbanist font-bold text-base text-[#263773] tracking-[0.608px] capitalize">
                                        {item.question}
                                    </h3>
                                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                                        {item.isOpen ? (
                                            <svg
                                                width="16"
                                                height="2"
                                                viewBox="0 0 16 2"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1H15"
                                                    stroke="#6FAC96"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <div className="relative">
                                                <svg
                                                    width="16"
                                                    height="2"
                                                    viewBox="0 0 16 2"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 1H15"
                                                        stroke="#6FAC96"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <svg
                                                    width="2"
                                                    height="16"
                                                    viewBox="0 0 2 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                >
                                                    <path
                                                        d="M1 1V15"
                                                        stroke="#6FAC96"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </button>

                                {item.isOpen && item.answer && (
                                    <div className="mt-4">
                                        <p className="font-urbanist text-sm text-[#515F8F] tracking-[0.608px] capitalize max-w-lg">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
