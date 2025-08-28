'use client'
import React, { useEffect, useState } from "react";
import CouponIcon from "../icons/CouponIcon";
import { motion } from "framer-motion";
import { API_URL, RUPEE_SYMBOL } from "@/constants";
import Toast from "@/ui/toast";
import SpinnerLoadingIcon from "../icons/SpinnerLoading";

interface CartItem {
    id: string;
    title: string;
    description?: string;
    price: number;
    selected: boolean;
}

interface OrderSummaryProps {
    items: CartItem[];
    consultationCharge?: number;
    discount?: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    items,
    consultationCharge = 0,
    discount = 0
}) => {
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ message: "", type: "success" as "success" | "error", open: false });
    const [token, setToken] = useState<string | null>(null);
    
    useEffect(() => {
    if (typeof window !== 'undefined') {
        const storedData = localStorage?.getItem('token');
        if (storedData) setToken(storedData);
    }
    }, []);

    const selectedItems = items.filter((item) => item.selected);

    const subtotal = selectedItems.reduce(
        (sum, item) => sum + (item.price || 0),
        0
    );

    const finalTotal = subtotal + consultationCharge - discount;

    const handlePayment = async () => {
        // const token = localStorage.getItem("token");

        if (!token) {
            setToast({ message: "Please login first", type: "error", open: true });
            return;
        }

        if (selectedItems.length === 0) {
            setToast({ message: "Please select at least one item", type: "error", open: true });
            return;
        }
        setLoading(true);

        // Extract selected checklist and insurance item IDs
        try {
            const checklistIds = selectedItems
                .filter((item) => item.id.startsWith("checklist-"))
                .map((item) => item.id.replace("checklist-", ""));

            const cartInsuranceItemIds = selectedItems
                .filter((item) => item.id.startsWith("insurance-"))
                .map((item) => item.id.replace("insurance-", ""));

            const payload = { checklistIds, cartInsuranceItemIds };
            const response = await fetch(`${API_URL}orders/initiate-payment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (data?.checkout_url) window.location.href = data.checkout_url;
            else setToast({ message: "Payment initiation failed", type: "error", open: true });

            if (!response.ok) setToast({ message: data.message || "Payment failed", type: "error", open: true });

            setToast({ message: "Payment initiated successfully!", type: "success", open: true });

        } catch (err: any) {
            setToast({ message: err.message || "Something went wrong", type: "error", open: true });
        } finally {
            setLoading(false); // hide loader
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:w-72 lg:w-96"
        >
            <div className="md:sticky md:top-24 bg-neutrals-0 rounded-xl p-6 space-y-4">
                <h2 className="font-bold text-base text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                    Order Summary
                </h2>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-neutrals tracking-[0.608px]">
                        Selected Items
                    </span>
                    <span className="font-bold text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                        {RUPEE_SYMBOL}{subtotal.toLocaleString()}.00
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-neutrals tracking-[0.608px]">
                        Consultation
                    </span>
                    <span className="font-bold text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                        {RUPEE_SYMBOL}{consultationCharge.toLocaleString()}.00
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                        Discount:
                    </span>
                    <span className="text-base text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                        -{RUPEE_SYMBOL}{discount.toLocaleString()}.00
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                        Final Total:
                    </span>
                    <span className="font-bold text-xl text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                        {RUPEE_SYMBOL}{finalTotal.toLocaleString()}.00
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
                <button
                    className={`w-full py-2 px-6 rounded-md text-sm tracking-[0.46px] flex justify-center items-center gap-2 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-navy-blue text-white hover:bg-navy-blue/90"
                        }`}
                    onClick={handlePayment}
                    disabled={loading || selectedItems.length === 0}
                >
                    {loading && <span className="w-4 h-4 text-center flex justify-center"><SpinnerLoadingIcon /></span>}
                    {loading ? "Processing..." : "Make Payment"}
                </button>
            </div>
            <Toast message={toast.message} type={toast.type} isOpen={toast.open} onClose={() => setToast({ ...toast, open: false })} />
        </motion.div>
    );
};

export default OrderSummary;
