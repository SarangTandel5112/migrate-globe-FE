"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { API_URL } from "@/constants";

interface ResetPasswordProps {
  idToken: string | null;
}

const ResetPassword = ({ idToken }: ResetPasswordProps) => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit handler
  const handleSubmit = async () => {
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!idToken) {
      setError("Invalid or expired reset link.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code: idToken, // ✅ use the token you passed in
            password,
            passwordConfirmation: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data?.message || "Something went wrong. Try again.");
      } else {
        setSuccess("Your password has been reset successfully.");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-2">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please enter your new password below.
        </p>

        {/* Password input */}
        <div className="mb-4">
          <label className="text-sm mb-1 block text-gray-700">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-sm text-gray-800"
          />
        </div>

        {/* Confirm password input */}
        <div className="mb-4">
          <label className="text-sm mb-1 block text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
            placeholder="Confirm new password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-sm text-gray-800"
          />
        </div>

        {/* Error / Success */}
        {error && <p className="text-xs text-red mb-3">{error}</p>}
        {success && <p className="text-xs text-green-600 mb-3">{success}</p>}

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-navy-blue text-white py-2 rounded-lg font-medium text-sm hover:bg-navy-blue/90 transition disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;