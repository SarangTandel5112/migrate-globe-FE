"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
  children: ReactNode;
};

type ToastType = "error" | "success";

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    isOpen: boolean;
  }>({
    message: "",
    type: "error",
    isOpen: false,
  });
  const [token, setToken] = useState<string | null>(null);
      
    useEffect(() => {
    if (typeof window !== 'undefined') {
        const storedData = localStorage?.getItem('token');
        if (storedData) setToken(storedData);
    }
    }, []);


  useEffect(() => {
    // const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setToast({
        message: "Please login to access this page",
        type: "error",
        isOpen: true,
      });

      setTimeout(() => {
        router.push("/"); // redirect to homepage or login page
      }, 2000);
    }
  }, [router, token]);

  if (!isAuthenticated) {
    return (
      <>
        {toast.isOpen && (
          <div
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-6 rounded-md text-white transition-all duration-300
              ${toast.type === "error" ? "bg-red" : "bg-green-500"}
            `}
            onClick={() => setToast({ ...toast, isOpen: false })}
          >
            {toast.message}
          </div>
        )}
      </>
    );
  }

  return <>{children}</>;
}
