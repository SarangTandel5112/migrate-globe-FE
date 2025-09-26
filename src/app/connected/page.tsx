"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authenticateWithToken } from "@/api/auth";
import {
    getRedirectUrlAfterLogin,
    clearLastVisitedPage,
} from "@/utils/navigation";

export default function ConnectedPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log("========connected==============");

    useEffect(() => {
        const handleAuthentication = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                console.log(urlParams, "-----urlParams-----");

                const token = urlParams.get("id_token");
                console.log(token, "-----token-----");

                if (token) {
                    // Call the authentication API
                    const authResult = await authenticateWithToken(token);
                    console.log("Authentication result:", authResult);

                    // Store tokens in localStorage following the same pattern as login flow
                    if (typeof window !== "undefined") {
                        // Store the original Google token for reference
                        localStorage.setItem("google_token", token);

                        // Store JWT token and user data following the login flow pattern
                        if (authResult.data?.jwt) {
                            localStorage.setItem("token", authResult.data.jwt);
                        }
                        if (authResult.data?.user) {
                            localStorage.setItem(
                                "user",
                                JSON.stringify(authResult.data.user)
                            );
                        }
                    }

                    // Clean up URL and redirect
                    window.history.replaceState({}, "", "/connected");

                    // Get the redirect URL (last visited page or home)
                    const redirectUrl = getRedirectUrlAfterLogin();

                    // Clear the stored last visited page since we're redirecting
                    clearLastVisitedPage();

                    // Redirect to the appropriate page after successful authentication
                    // Keep loading state until redirect completes
                    setTimeout(() => {
                        router.push(redirectUrl);
                        // Fallback redirect if router.push doesn't work
                        setTimeout(() => {
                            window.location.href = redirectUrl;
                        }, 500);
                    }, 1000);
                } else {
                    setError("No authentication token found in URL");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Authentication error:", error);
                setError(
                    error instanceof Error
                        ? error.message
                        : "Authentication failed"
                );
                setLoading(false);
            }
            // Note: Don't set loading to false on success - keep loader until redirect
        };

        handleAuthentication();
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                {loading && (
                    <>
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">
                            Connecting your account...
                        </p>
                    </>
                )}
                {error && (
                    <>
                        <div className="text-red-600 mb-4">
                            <svg
                                className="w-8 h-8 mx-auto mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                            </svg>
                        </div>
                        <p className="text-red-600 font-semibold mb-2">
                            Authentication Failed
                        </p>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={() => router.push("/")}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Go to Home
                        </button>
                    </>
                )}
                {!loading && !error && (
                    <>
                        <div className="text-green-600 mb-4">
                            <svg
                                className="w-8 h-8 mx-auto mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <p className="text-green-600 font-semibold mb-2">
                            Successfully Connected!
                        </p>
                        <p className="text-gray-600">
                            Redirecting you to the home page...
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
