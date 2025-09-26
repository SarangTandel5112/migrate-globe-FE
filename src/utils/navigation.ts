// Utility functions for managing last visited page

export const LAST_VISITED_PAGE_KEY = "lastVisitedPage";

// Store the current page as the last visited page
export const storeLastVisitedPage = (path: string) => {
    if (typeof window !== "undefined") {
        // Don't store login/signup pages or auth-related pages
        const excludedPaths = [
            "/login",
            "/signup",
            "/connected",
            "/reset-password",
        ];
        if (!excludedPaths.includes(path)) {
            localStorage.setItem(LAST_VISITED_PAGE_KEY, path);
        }
    }
};

// Get the last visited page
export const getLastVisitedPage = (): string | null => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(LAST_VISITED_PAGE_KEY);
    }
    return null;
};

// Clear the last visited page
export const clearLastVisitedPage = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(LAST_VISITED_PAGE_KEY);
    }
};

// Get redirect URL after login
export const getRedirectUrlAfterLogin = (): string => {
    const lastVisitedPage = getLastVisitedPage();
    return lastVisitedPage || "/";
};
