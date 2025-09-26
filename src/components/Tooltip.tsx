"use client";
import React, { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface TooltipProps {
    children: React.ReactNode;
    content: string;
    className?: string;
}

export default function Tooltip({
    children,
    content,
    className = "",
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useOutsideClick<HTMLDivElement>(() =>
        setIsVisible(false)
    );

    return (
        <div className={`relative inline-block ${className}`} ref={tooltipRef}>
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onClick={() => setIsVisible(!isVisible)}
                className="cursor-pointer"
            >
                {children}
            </div>

            {isVisible && (
                <div className="absolute z-50 w-64 p-3 mt-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg bottom-full left-1/2 transform -translate-x-1/2">
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    {content}
                </div>
            )}
        </div>
    );
}
