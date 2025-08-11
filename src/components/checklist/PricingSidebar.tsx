"use client"
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function PricingSidebar({
    price,
    processingTime,
    }: {
    price: number | null;
    processingTime: string | null;
    }) {
    const router = useRouter();

    const handleBuyChecklist = () => {
        console.log("Buy checklist clicked");
        router.push("/cart");
    };

    const handleBookConsultation = () => {
        console.log("Book consultation clicked");
        router.push("/services/zoom-consultation");
    };

    return (
        <motion.div
            className="md:w-72 lg:w-96"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="md:sticky md:top-8">
                <div className="bg-white rounded-xl p-6 space-y-4">
                    {/* Product Title */}
                    <h3 className="font-semibold text-sm text-neutrals-700 tracking-[0.608px]">
                        Buy Documents Checklist
                    </h3>

                    {/* Price */}
                    <div className="font-semibold text-2xl text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                        {price ? `₹${price.toLocaleString()}`: "N/A"}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                        Visa-ready checklist tailored to your profile
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-[#BEC3D5]"></div>

                    {/* Processing Time */}
                    <div className="space-y-1">
                        <h4 className="font-semibold text-sm text-neutrals-700 tracking-[0.608px]">
                            Processing time
                        </h4>
                        <p className="text-sm text-neutrals leading-6 tracking-[0.2px] capitalize">
                            {processingTime || "N/A"}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                        {/* Buy Checklist Button */}
                        <motion.button
                            onClick={handleBuyChecklist}
                            className="w-full py-2 px-6 bg-navy-blue text-white rounded-md text-sm tracking-[0.46px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Buy checklist
                        </motion.button>

                        {/* Book Consultation Button */}
                        <motion.button
                            onClick={handleBookConsultation}
                            className="w-full py-2 px-6 border border-[#D3D3D3] text-navy-blue rounded-md text-sm tracking-[0.46px]"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#F7F8FD",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Book a Consultation
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default PricingSidebar;
