"use client";
import { useState } from "react";
import ErrorIcon from "@/components/icons/ErrorIcon";
import Google from "@assets/images/Google.png";
import Apple from "@assets/images/Apple.png";
import Facebook from "@assets/images/Facebook.png";
import MyImage from "@/ui/myImage";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { API_URL } from "@/constants";
import CheckFillIcon from "@/components/icons/CheckFillIcon";
import BackIcon from "../icons/BackIcon";

function SocialButton({ icon, text, handleClick }: { icon: StaticImageData; text: string; handleClick?: () => void }) {
    return (
        <button className="w-full border border-gray-300 rounded py-2 flex items-center justify-center gap-3 text-sm text-grayish-700 hover:bg-gray-50" onClick={handleClick}>
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

type LoginPageProps = {
    showModal?: boolean;
    handleSignUp?: () => void;
};

export default function LoginModal({ showModal, handleSignUp }: LoginPageProps) {
    const [step, setStep] = useState<"email" | "password" | "forgot" | "forgotSuccess">("email");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleNext = async () => {
        if (step === "email") {
            if (!validateEmail(email)) {
                setError("Please enter correct email");
                return;
            }
            setError("");
            setStep("password");
        } else if (step === "password") {
            if (password.length < 6) {
                setError("Please enter correct password");
                return;
            }
            setError("");
            try {
                const response = await fetch(`${API_URL}auth/local`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ identifier: email, password }),
                });

                if (!response.ok) {
                    const errData = await response.json();
                    setError(errData.message || "Login failed");
                    return;
                }

                const data = await response.json();
                console.log("Login success:", data);

                if (data.token) {
                    localStorage.setItem("token", data.token);
                }

                // redirect or close modal
            } catch (err) {
                console.error("Login error:", err);
                setError("Something went wrong. Please try again.");
            }
        } else if (step === "forgot") {
            if (!validateEmail(email)) {
                setError("Please enter a valid email");
                return;
            }
            setError("");

            try {
                const res = await fetch(`${API_URL}auth/forgot-password`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                if (!res.ok) {
                    const errData = await res.json();
                    return setError(errData.message || "Failed to send reset link");
                }

                setStep("forgotSuccess");
            } catch (err) {
                console.error("Forgot password error:", err);
                setError("Something went wrong. Please try again.");
            }
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

            {step === "email" || step === "password" ? (
                <>
                    <h2 className="text-xl font-semibold text-center mb-6 text-grayish-900">
                        Login your account
                    </h2>

                    {/* Email or Password Input */}
                    <div className="mb-4">
                        <label className="text-sm mb-1 block text-grayish-700">
                            {step === "email" ? "Email" : "Password"}
                        </label>
                        <div className="relative">
                            <input
                                type={step === "email" ? "email" : "password"}
                                placeholder={step === "email" ? "Enter your email" : "Enter your password"}
                                value={step === "email" ? email : password}
                                onChange={(e) => {
                                    setError("");
                                    // (step === "email") ? setEmail(e.target.value) : setPassword(e.target.value);
                                    // (step === "email" ? setEmail : setPassword)(e.target.value);
                                    if (step === "email") {
                                        setEmail(e.target.value);
                                    } else {
                                        setPassword(e.target.value);
                                    }
                                }}
                                className={`w-full px-4 py-2 text-sm border text-grayish rounded-lg ${
                                    error ? "border-red" : "border-gray-300"
                                } focus:outline-none`}
                            />
                            {error && <ErrorIcon className="absolute right-3 top-2.5 text-red-500 text-xl" />}
                        </div>
                        {error && <p className="text-xs text-red mt-1">{error}</p>}
                    </div>

                    <div className="flex justify-end items-center mb-4 mx-2 text-sm">
                        <button onClick={() => setStep("forgot")} className="text-navy-blue font-medium">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full bg-navy-blue text-white py-2 rounded font-semibold text-sm mb-4"
                    >
                        {step === "email" ? "Next" : "Confirm"}
                    </button>
                </>
            ) : step === "forgot" ? (
                <>
                    <h2 className="text-xl font-semibold text-center mb-6 text-grayish-900">
                        Forgot Password
                    </h2>
                    <button onClick={() => setStep("email")} className="flex items-center text-sm mb-5 text-grayish-700">
                        <BackIcon width={12} height={13} /><p className="mx-1">Back</p>
                    </button>
                    <p className="text-sm text-grayish-600 mb-4">
                        Enter your registered email, and we’ll send you a reset link.
                    </p>

                    <div className="mb-4">
                        <label className="text-sm mb-1 block text-grayish-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => {
                                setError("");
                                setEmail(e.target.value);
                            }}
                            className={`w-full px-4 py-2 text-sm border rounded-lg ${
                                error ? "border-red" : "border-gray-300"
                            } focus:outline-none text-grayish`}
                        />
                        {error && <p className="text-xs text-red mt-1">{error}</p>}
                    </div>

                    <div className="flex justify-end">
                        {/* <button onClick={() => setStep("email")} className="flex items-center text-sm text-grayish-700">
                            <BackIcon /> Back
                        </button> */}
                        <button
                            onClick={handleNext}
                            className="bg-navy-blue text-white py-2 px-4 rounded font-semibold text-sm"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </>
            ) : step === "forgotSuccess" ? (
                <div className="text-center p-6">
                    <CheckFillIcon className="mx-auto text-green-500 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reset Link Sent</h3>
                    <p className="text-sm text-gray-600">
                        We’ve sent a password reset link to <strong>{email}</strong>.  
                        Please check your inbox to continue.
                    </p>
                    <button
                        onClick={() => setStep("email")}
                        className="mt-6 bg-navy-blue text-white py-2 px-4 rounded font-semibold text-sm"
                    >
                        Back to Login
                    </button>
                </div>
            ) : null}

            {/* OR Divider */}
            {(step === "email" || step === "password") && (
                <>
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
                        <SocialButton icon={Google} text="Sign up with Google" handleClick={() => { window.location.href = `${API_URL}connect/google`; }} />
                        <SocialButton icon={Facebook} text="Sign up with Facebook" />
                        <SocialButton icon={Apple} text="Sign up with Apple" />
                    </div>

                    <p className="text-sm text-center text-grayish-600 mt-4">
                        Don&apos;t have an account?{" "}
                        <span className="text-navy-blue font-medium cursor-pointer" onClick={handleSignUp}>
                            Sign Up
                        </span>
                    </p>
                </>
            )}
        </div>
    );
}
