"use client";
import { usePageTracking } from "@/hooks/usePageTracking";

export default function PageTracker() {
    usePageTracking();
    return null; // This component doesn't render anything
}
