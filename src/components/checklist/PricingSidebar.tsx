import { useRouter } from "next/navigation";

function PricingSidebar() {
    const router = useRouter();

    const handleBuyChecklist = () => {
        // Handle purchase logic here
        console.log("Buy checklist clicked");
        // Could redirect to cart or payment page
        router.push("/cart");
    };

    const handleBookConsultation = () => {
        // Handle consultation booking
        console.log("Book consultation clicked");
        // Could redirect to consultation booking page
        router.push("/zoom-consultation");
    };
    return (
        <div className="md:w-72 lg:w-96">
            <div className="md:sticky md:top-8">
                <div className="bg-white rounded-xl p-6 space-y-4">
                    {/* Product Title */}
                    <h3 className="font-semibold text-sm text-neutrals-700 tracking-[0.608px]">
                        Buy Documents Checklist
                    </h3>

                    {/* Price */}
                    <div className="font-semibold text-2xl text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                        ₹1,999.00
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
                            6 - 33 months
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                        {/* Buy Checklist Button */}
                        <button
                            onClick={handleBuyChecklist}
                            className="w-full py-2 px-6 bg-navy-blue text-white rounded-md text-sm tracking-[0.46px] hover:bg-navy-blue/90 transition-colors"
                        >
                            Buy checklist
                        </button>

                        {/* Book Consultation Button */}
                        <button
                            onClick={handleBookConsultation}
                            className="w-full py-2 px-6 border border-[#D3D3D3] text-navy-blue rounded-md text-sm tracking-[0.46px] hover:bg-[#F7F8FD] transition-colors"
                        >
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingSidebar;
