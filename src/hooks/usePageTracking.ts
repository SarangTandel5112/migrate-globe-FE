import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { storeLastVisitedPage } from "@/utils/navigation";

// Hook to track the current page and store it as the last visited page
export const usePageTracking = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Store the current page as the last visited page
        storeLastVisitedPage(pathname);
    }, [pathname]);
};

export default usePageTracking;
