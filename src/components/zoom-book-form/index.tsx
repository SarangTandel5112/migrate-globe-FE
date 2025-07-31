import { usePlatformInput } from '@/hooks/usePlatformInput';
import React from 'react'

type FormDataType = {
  firstName: string;
  lastName: string;
  emailId: string;
  phone: string;
  country: string;
};

type ZoomBookFormProps = {
  formData: FormDataType;
  handleInputChange: (field: keyof FormDataType, value: string) => void;
  handleBookSlot: () => void;
  isFormValid: boolean;
  isBooking?: boolean;
  bookingError?: string | null;
};

const ZoomBookForm: React.FC<ZoomBookFormProps> = ({
  formData,
  handleInputChange,
  handleBookSlot,
  isFormValid,
  isBooking = false,
  bookingError = null,
}) => {
    const { inputType } = usePlatformInput();
    return (
        <div className="lg:w-80 h-full">
            <div className="bg-white rounded-xl p-4 space-y-6">
                {/* First Name */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
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
                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] text-navy-blue focus:outline-none focus:border-navy-blue"
                    />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
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
                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] text-navy-blue focus:outline-none focus:border-navy-blue"
                    />
                </div>

                {/* Email ID */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
                        Email ID
                    </label>
                    <input
                        type="email"
                        value={formData.emailId}
                        onChange={(e) =>
                            handleInputChange(
                                "emailId",
                                e.target.value
                            )
                        }
                        placeholder="Enter Email ID"
                        className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] placeholder:text-[#D3D3D3] text-navy-blue focus:outline-none focus:border-navy-blue"
                    />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                    <label className="block font-urbanist font-bold text-sm text-[#333] leading-6">
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
                            type={inputType}
                            value={formData.phone}
                            maxLength={10}
                            onChange={(e) =>
                                handleInputChange(
                                    "phone",
                                    e.target.value
                                )
                            }
                            placeholder="123 456 7890"
                            className="flex-1 py-2.5 px-4 border w-full border-[#D3D3D3] bg-[#F7F8FD] rounded font-urbanist font-bold text-base placeholder:text-[#C0C0C0] text-navy-blue leading-6 focus:outline-none focus:border-navy-blue"
                        />
                    </div>
                </div>

                {/* Country */}
                <div className="space-y-2">
                    <label className="block font-urbanist font-bold text-sm text-[#696969] tracking-[0.24px] capitalize">
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
                            className="w-full py-2.5 px-3 rounded border border-[#D3D3D3] bg-[#F7F8FD] font-urbanist text-base tracking-[0.24px] text-navy-blue focus:outline-none focus:border-navy-blue appearance-none"
                        >
                            <option value="Australia">Australia</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.59961 1.20001L6.39961 6.00001L11.1996 1.20001"
                                    stroke="#7D87AB"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {bookingError && (
                    <div className="text-red-500 text-sm font-urbanist text-center">
                        {bookingError}
                    </div>
                )}

                {/* Book Slot Button */}
                <button
                    onClick={handleBookSlot}
                    disabled={!isFormValid || isBooking}
                    className={`w-full h-10 rounded-md font-urbanist text-sm tracking-[0.46px] transition-all ${
                        isFormValid && !isBooking
                            ? "bg-navy-blue text-white hover:bg-navy-blue/90"
                            : "bg-[#D3D3D3] text-[#696969] cursor-not-allowed"
                    }`}
                >
                    {isBooking ? "Booking..." : "Book slot"}
                </button>
            </div>
        </div>
    )
}

export default ZoomBookForm