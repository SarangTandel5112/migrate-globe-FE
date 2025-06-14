import React from "react";
import CouponIcon from "../icons/CouponIcon";
import { motion } from "framer-motion";

function OrderSummary({
    subtotal,
    consultation,
    discount,
    finalTotal,
}: {
    subtotal: number;
    consultation: number;
    discount: number;
    finalTotal: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:w-72 lg:w-96"
        >
            <div className="md:sticky md:top-8 bg-neutrals-0 rounded-xl p-6 space-y-4">
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
        </motion.div>
    );
}

export default OrderSummary;
