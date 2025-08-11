import { useState, useEffect } from "react";

export const usePlatformInput = () => {
  const [platform, setPlatform] = useState("Unknown");
  const [inputType, setInputType] = useState("number");

  const detectPlatform = () => {
    const userAgent = navigator.userAgent || navigator.vendor || '';

    // Apple devices (iOS or macOS)
    if (
      /iPhone|iPad|iPod|Macintosh|Mac OS X/.test(userAgent) &&
      !/Windows/.test(userAgent)
    ) {
      return "Apple";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    return "Other";
  };

  useEffect(() => {
    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);

    // Use 'tel' for Apple devices, 'number' for others
    setInputType(detectedPlatform === "Apple" ? "tel" : "number");
  }, []);

  return { platform, inputType };
};
