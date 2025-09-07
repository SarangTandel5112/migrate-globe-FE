"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConnectedPage() {
  const router = useRouter();
  console.log("========connected==============");
  

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams,'-----urlParams-----');
    
    const token = urlParams.get("id_token");
    console.log(token,'-----token-----');


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
