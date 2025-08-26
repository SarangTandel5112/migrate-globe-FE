'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Verified = () => {
    const router = useRouter();
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto text-green-500 w-24 h-24 mb-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path
                        d="M8 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="checkmark"
                    />
                </svg>

                <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                    Email Verified Successfully!
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                    Thank you for verifying your email. You now have full access to your account.
                </p>

                <p className="text-sm text-gray-600 mb-6">
                    Explore the platform and start using all available features. We&apos;re excited to have you onboard!
                </p>

                <button
                    onClick={() => router.push("/")}
                    className="w-full max-w-xs bg-navy-blue text-white py-3 rounded-lg font-medium text-lg hover:bg-navy-blue/90 transition"
                >
                    Explore Now
                </button>
            </div>
        </div>
    )
}

export default Verified