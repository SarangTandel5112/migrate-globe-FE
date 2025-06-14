import { useState, useEffect } from "react";

export const usePlatformInput = () => {
  const [platform, setPlatform] = useState("Unknown");
  const [inputType, setInputType] = useState("tel");

  const detectPlatform = () => {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    
    // iOS detection - check for iOS devices and exclude Windows Phone
    if (/iPad|iPhone|iPod/.test(userAgent) && !userAgent.includes('MSStream')) {
      return "iOS";
    }
    
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    
    return "Desktop";
  };

  useEffect(() => {
    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);
    
    // Android = number, iOS/Desktop = tel
    setInputType(detectedPlatform === "Android" ? "number" : "tel");
  }, []);

  return { platform, inputType };
};
