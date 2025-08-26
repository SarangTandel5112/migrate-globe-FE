import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  duration?: number; // optional, default 3000ms
}

const Toast: React.FC<ToastProps> = ({ message, type, isOpen, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 w-80 py-3 px-6 rounded-md text-white ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : "bg-blue-500"
      } shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-xl">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
