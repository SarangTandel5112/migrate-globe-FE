"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteIcon from "@/components/icons/DeleteIcon";
import CouponIcon from "@/components/icons/CouponIcon";

interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    selected: boolean;
}

export default function Cart() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: "1",
            title: "Global Talent visa (subclass 858)",
            description:
                "Apply for the Global Talent visa (subclass 858) if you have an internationally recognised record of exceptional and outstanding achievement in an eligible field. To be eligible for this visa, you must demonstrate that you will be of benefit to the Australian community, be able to establish yourself in Australia, and have a record of achievement in a profession, sport, the arts, or academia and research.",
            price: 1999,
            selected: true,
        },
        {
            id: "2",
            title: "Global Talent visa (subclass 858)",
            description:
                "Apply for the Global Talent visa (subclass 858) if you have an internationally recognised record of exceptional and outstanding achievement in an eligible field. To be eligible for this visa, you must demonstrate that you will be of benefit to the Australian community, be able to establish yourself in Australia, and have a record of achievement in a profession, sport, the arts, or academia and research.",
            price: 1999,
            selected: false,
        },
        {
            id: "3",
            title: "Global Talent visa (subclass 858)",
            description:
                "Apply for the Global Talent visa (subclass 858) if you have an internationally recognised record of exceptional and outstanding achievement in an eligible field. To be eligible for this visa, you must demonstrate that you will be of benefit to the Australian community, be able to establish yourself in Australia, and have a record of achievement in a profession, sport, the arts, or academia and research.",
            price: 1999,
            selected: false,
        },
    ]);

    const [couponCode, setCouponCode] = useState("");

    const handleItemSelect = (id: string) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const handleRemoveItem = (id: string) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const selectedItems = cartItems.filter((item) => item.selected);
    const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const consultation = 999;
    const discount = 500;
    const finalTotal = subtotal + consultation - discount;

    const services = [
        {
            id: "insurance",
            title: "Buy Cheapest Insurance",
            description:
                "Compare and purchase affordable overseas health cover from top",
            icon: "🛡️",
        },
        {
            id: "tracking",
            title: "Occupation Tracking Tool",
            description:
                "Track updates on your occupation — demand trends, state invites,",
            icon: "💼",
        },
        {
            id: "consultation",
            title: "Zoom Consultations",
            description:
                "Get expert advice face-to-face — online. Book a call with our",
            icon: "💻",
        },
    ];

    return (
        <div className="container-1200">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <h1 className="font-bold text-heading1 text-navy-blue tracking-[0.608px] mb-6">
                        My Cart
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-10">
                        {/* Cart Items */}
                        <div className="flex-1 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={` rounded-lg p-4 flex items-start gap-3 ${
                                        item.selected
                                            ? "bg-neutrals-0 border-2 border-neutrals-100"
                                            : "border border-neutrals-100"
                                    }`}
                                >
                                    {/* Checkbox */}
                                    <button
                                        onClick={() =>
                                            handleItemSelect(item.id)
                                        }
                                        className="mt-1 w-6 h-6 flex-shrink-0"
                                    >
                                        {item.selected ? (
                                            <div className="w-6 h-6 bg-[#6FAC96] rounded flex items-center justify-center">
                                                <svg
                                                    width="8"
                                                    height="6"
                                                    viewBox="0 0 8 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 3L3 5L7 1"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 border-2 border-[#C0C0C0] rounded flex items-center justify-center">
                                                <svg
                                                    width="8"
                                                    height="6"
                                                    viewBox="0 0 8 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 3L3 5L7 1"
                                                        stroke="#C0C0C0"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </button>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="mb-4">
                                            <h3 className="font-bold text-base text-neutrals-700 tracking-[0.608px] mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xl text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                                ₹{item.price.toLocaleString()}
                                                .00
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleRemoveItem(item.id)
                                                }
                                                className="flex items-center gap-2 py-2 px-2 border border-neutrals-200 bg-background rounded hover:bg-[#EDEDED] transition-colors"
                                            >
                                                <DeleteIcon />
                                                <span className="font-bold text-sm text-navy-blue leading-6 tracking-[0.2px] capitalize">
                                                    Remove
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-96">
                            <div className="bg-white rounded-xl p-6 space-y-4">
                                <h2 className="font-bold text-base text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                    Order Summary
                                </h2>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutrals tracking-[0.608px]">
                                        Buy Documents Checklist
                                    </span>
                                    <span className="font-bold text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                                        ₹{subtotal.toLocaleString()}.00
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutrals tracking-[0.608px]">
                                        Consultation
                                    </span>
                                    <span className="font-bold text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                                        ₹{consultation.toLocaleString()}.00
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                        Discount:
                                    </span>
                                    <span className="text-base text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                        -₹{discount}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-sm text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                        Final Total:
                                    </span>
                                    <span className="font-bold text-xl text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                        ₹{finalTotal.toLocaleString()}
                                    </span>
                                </div>

                                <div className="w-full h-px bg-neutrals-100"></div>

                                {/* Coupon Code */}
                                <div className="flex items-center gap-4 py-2 px-4 border border-neutrals-200 bg-neutrals-100 rounded-md">
                                    <CouponIcon />
                                    <span className="text-sm text-neutrals-400 tracking-[0.46px]">
                                        Add coupon code
                                    </span>
                                </div>

                                {/* Make Payment Button */}
                                <button className="w-full py-2 px-6 bg-navy-blue text-white rounded-md text-sm tracking-[0.46px] hover:bg-navy-blue/90 transition-colors">
                                    Make Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <div className="w-[70px] h-[70px] bg-[#F7F8FD] rounded-xl flex items-center justify-center text-3xl mb-4">
                                {service.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-base text-[#333] tracking-[0.2px] capitalize">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[#696969] tracking-[0.2px] capitalize">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
