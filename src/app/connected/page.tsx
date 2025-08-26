"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConnectedPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("id_token");

      if (token) {
        if (typeof window !== 'undefined') {
          localStorage.setItem("token", token);
        }
      window.history.replaceState({}, "", "/connected");
      router.push("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Connecting your account...</p>
    </div>
  );
}
