"use client";

import { useState } from "react";
import CartSummary from "@/components/cart/CartSummary";
import OrderSummary from "@/components/cart/OrderSummary";
import { motion } from "framer-motion";
import ServiceCard from "@/components/common/ServiceCard";

interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    selected: boolean;
}

export default function Cart() {
    const [cartItems] = useState<CartItem[]>([
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
        <div>
            <div className="mb-10">
                <h1 className="font-bold text-heading1 text-navy-blue tracking-[0.608px] mb-6">
                    My Cart
                </h1>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10">
                    {/* Cart Items */}
                    <CartSummary />

                    {/* Order Summary */}
                    <OrderSummary
                        subtotal={subtotal}
                        consultation={consultation}
                        discount={discount}
                        finalTotal={finalTotal}
                    />
                </div>
            </div>

            {/* Service Recommendations */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // triggers when 20% in view
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.2 },
                    },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                },
                            },
                        }}
                    >
                        <ServiceCard {...service} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
