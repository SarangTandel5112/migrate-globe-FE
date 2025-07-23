"use client";
import { useState } from "react";
import ErrorIcon from "@/components/icons/ErrorIcon";
import Google from "@assets/images/Google.png";
import Apple from "@assets/images/Apple.png";
import Facebook from "@assets/images/Facebook.png";
import MyImage from "@/ui/myImage";
import type { StaticImageData } from "next/image";
import Image from "next/image";

function SocialButton({ icon, text }: { icon: StaticImageData; text: string }) {
    return (
        <button className="w-full border border-gray-300 rounded py-2 flex items-center justify-center gap-3 text-sm text-grayish-700 hover:bg-gray-50">
            <MyImage
                src={icon}
                alt={text}
                width={20}
                height={20}
                className=""
            />
            {text}
        </button>
    );
}

type SignupPageProps = {
    showModal?: boolean;
    handleLogin?: () => void;
};

export default function SignupModal({ showModal, handleLogin }: SignupPageProps) {
    const [step, setStep] = useState<"form" | "otp">("form");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleNext = () => {
        if (step === "form") {
            if (!username.trim()) {
                return setError("Username is required");
            }
            if (!validateEmail(email)) {
                return setError("Please enter a valid email");
            }
            if (password.length < 6) {
                return setError("Password must be at least 6 characters");
            }

            setError("");
            setStep("otp");

            // You can trigger OTP API call here

        } else {
            if (otp.length !== 6) {
                return setError("Enter valid 6-digit OTP");
            }

            setError("");
            console.log({ username, email, password, otp });

            // Submit final signup here
        }
    };

    return (
        <div
            className={`bg-white ${
                showModal ? "p-6 rounded-xl w-[400px]" : "min-h-screen p-6"
            }`}
        >
            <div className="flex justify-center mb-6">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    className="h-6"
                    width={100}
                    height={24}
                />
            </div>

            <h2 className="text-xl font-semibold text-center mb-6 text-grayish-900">
                Create your account
            </h2>

            {/* Step 1: Form */}
            {step === "form" && (
                <>
                    {/* Username */}
                    <div className="mb-4">
                        <label className="text-sm mb-1 block text-grayish-700">
                            Username
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={username}
                                placeholder="Enter your username"
                                onChange={(e) => {
                                    setError("");
                                    setUsername(e.target.value);
                                }}
                                className={`w-full px-4 py-2 text-sm border rounded-lg ${
                                    error && !username ? "border-red" : "border-gray-300"
                                } focus:outline-none text-grayish`}
                            />
                            {error && !username && (
                                <ErrorIcon className="absolute right-3 top-2.5 text-red-500 text-xl" />
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-sm mb-1 block text-grayish-700">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={(e) => {
                                    setError("");
                                    setEmail(e.target.value);
                                }}
                                className={`w-full px-4 py-2 text-sm border rounded-lg ${
                                    error && !validateEmail(email)
                                        ? "border-red"
                                        : "border-gray-300"
                                } focus:outline-none text-grayish`}
                            />
                            {error && !validateEmail(email) && (
                                <ErrorIcon className="absolute right-3 top-2.5 text-red-500 text-xl" />
                            )}
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-sm mb-1 block text-grayish-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={(e) => {
                                    setError("");
                                    setPassword(e.target.value);
                                }}
                                className={`w-full px-4 py-2 text-sm border rounded-lg ${
                                    error && password.length < 6
                                        ? "border-red"
                                        : "border-gray-300"
                                } focus:outline-none text-grayish`}
                            />
                            {error && password.length < 6 && (
                                <ErrorIcon className="absolute right-3 top-2.5 text-red-500 text-xl" />
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* Step 2: OTP */}
            {step === "otp" && (
                <>
                    {/* Back Button */}
                    <button
                        onClick={() => setStep("form")}
                        className="text-sm text-navy-blue font-medium mb-5"
                    >
                        ← Back
                    </button>
                    <div className="mb-4">
                        <label className="text-sm mb-1 block text-grayish-700">
                            OTP Verification
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={otp}
                                placeholder="Enter 6-digit OTP"
                                onChange={(e) => {
                                    setError("");
                                    setOtp(e.target.value);
                                }}
                                className={`w-full px-4 py-2 text-sm border text-grayish rounded-lg ${
                                    error ? "border-red" : "border-gray-300"
                                } focus:outline-none`}
                            />
                            {error && (
                                <ErrorIcon className="absolute right-3 top-2.5 text-red-500 text-xl" />
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* Error Message */}
            {error && <p className="text-xs text-red mt-1">{error}</p>}

            {/* Action Button */}
            <button
                onClick={handleNext}
                className="w-full bg-navy-blue text-white py-2 rounded font-semibold text-sm mb-4 mt-2"
            >
                {step === "form" ? "Next" : "Sign Up"}
            </button>

            {/* OR Divider */}
            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-grayish">OR</span>
                </div>
            </div>

            {/* Social Logins */}
            <div className="space-y-2">
                <SocialButton icon={Google} text="Sign up with Google" />
                <SocialButton icon={Facebook} text="Sign up with Facebook" />
                <SocialButton icon={Apple} text="Sign up with Apple" />
            </div>

            <p className="text-sm text-center text-grayish-600 mt-4">
                Already have an account?{" "}
                <span className="text-navy-blue font-medium cursor-pointer" onClick={handleLogin}>
                    Login
                </span>
            </p>
        </div>
    );
}
