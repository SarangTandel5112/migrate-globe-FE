'use client'
import React from 'react'
import CheckFillIcon from '@/components/icons/CheckFillIcon';
import { useRouter } from 'next/navigation';

const Verified = () => {
    const router = useRouter();
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 text-center">
                <CheckFillIcon className="mx-auto text-green-500 w-16 h-16 mb-4" />

                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Email Verified Successfully!
                </h2>

                <p className="text-sm text-gray-600 mb-6">
                    Thank you for verifying your email. You can now enjoy full access to your account.
                </p>

                <button
                    onClick={() => router.push("/")}
                    className="w-full bg-navy-blue text-white py-2.5 rounded-lg font-medium text-sm hover:bg-navy-blue/90 transition"
                >
                    Explore Now
                </button>
            </div>
        </div>
    )
}

export default Verified