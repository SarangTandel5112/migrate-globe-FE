"use client";
import { easeOut, motion } from "framer-motion";
import VisaDetail from "@/components/visa/VisaDetails";
// import VisaTypeCard from "@/components/visa/VisaTypeCard";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import { useEffect, useRef, useState } from "react";

// const visaTypes = [
//     {
//         title: "Student Visa (Subclass 500)",
//         description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
//         active: true,
//     },
//     {
//         title: "Student Guardian Visa (Subclass 590)",
//         description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
//         active: false,
//     },
// ];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5,
//             ease: easeOut,
//         },
//     },
// };

const visaDropdownList = ['Visitor visas', 'Studying and training visas', 'Family and partner visas', 'Working and skilled visas', 'Refugee and humanitarian visas', 'Other visas', 'Repealed visas']

export default function Page() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        selectedPlan: "sub500",
    });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: value,
        }));
    };
    return (
        <div className="container-1200">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex justify-between items-start">
                    <div className="relative" ref={dropdownRef}>
                        {/* Student Visa Header with Dropdown */}
                        <div className="flex items-center cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
                            <h1 className="text-heading1 text-navy-blue ">
                                Student Visa
                            </h1>
                            <span className="text-xs ml-2">{open ? <ArrowDownIcon className="rotate-180" color="#263773" /> : <ArrowDownIcon color="#263773" />}</span>
                        </div>

                        {/* Dropdown Popover */}
                        {open && (
                            <div className="absolute top-full mt-2 w-56 max-h-[350px] overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-md z-50">
                                <ul className="space-y-4 p-3">
                                    {visaDropdownList?.map((o, i) => {
                                        return (
                                            <li key={i} className="text-sm text-neutrals hover:text-navy-blue cursor-pointer">
                                                {o}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* <h1 className="text-heading1 text-navy-blue">
                        Student Visa
                    </h1> */}
                    <button className="bg-navy-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                        Book a Consultation
                    </button>
                </div>

                <div className="border-b border-[#DEE2E5]"></div>

                {/* Animated Visa Type Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* {visaTypes.map((type, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <VisaTypeCard
                                title={type.title}
                                description={type.description}
                                active={type.active}
                            />
                        </motion.div>
                    ))} */}
                    <div className="relative">
                        <select
                            value={formData.selectedPlan}
                            onChange={(e) =>
                                handleInputChange("selectedPlan", e.target.value)
                            }
                            className="w-full p-3 rounded border-2 border-navy-blue bg-background-1 text-base font-semibold tracking-[0.24px] text-neutrals-700 focus:outline-none focus:border-navy-blue appearance-none"
                        >
                            <option value="sub590">Student Guardian Visa (Subclass 590)</option>
                            <option value="sub500">Student Visa (Subclass 500)</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <ArrowDownIcon />
                        </div>
                    </div>
                </motion.div>

                {/* Animated Heading */}
                <motion.h3
                    className="text-heading1 text-navy-blue"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Student Visa (Subclass 500)
                </motion.h3>

                {/* Animated Visa Detail */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <VisaDetail />
                </motion.div>
            </div>
        </div>
    );
}
