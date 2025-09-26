import { API_URL } from "@/constants";
import { getAuthHeaders } from "@/utils/helpers";

export const addChecklistToCart = async (
    token: string,
    checklistId: string
) => {
    try {
        const response = await fetch(`${API_URL}carts/add-checklist`, {
            method: "POST",
            headers: getAuthHeaders(token),
            body: JSON.stringify({ checklist: checklistId }),
        });

        const result = await response.json();

        if (!response.ok) {
            // Handle specific error cases
            if (response.status === 400) {
                if (result?.error?.message?.includes("already")) {
                    throw new Error(
                        "This checklist has already been added to your cart"
                    );
                } else if (result?.error?.message?.includes("purchased")) {
                    throw new Error(
                        "You have already purchased this checklist"
                    );
                }
            }
            throw new Error(
                result?.error?.message || "Failed to add checklist"
            );
        }

        return result;
    } catch (error) {
        console.error("Error adding checklist to cart:", error);
        throw error;
    }
};

export const getUserCart = async (token: string) => {
    try {
        if (!token) {
            throw new Error("Missing or invalid credentials");
        }

        const response = await fetch(`${API_URL}carts/my-cart`, {
            headers: getAuthHeaders(token),
        });

        const result = await response.json();

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Missing or invalid credentials");
            }
            throw new Error(result.error?.message || "Failed to get cart");
        }

        return result.cart;
    } catch (error) {
        console.error("Error getting cart:", error);
        throw error;
    }
};

// Remove item from cart
export const removeChecklistFromCart = async (
    token: string,
    checklistId: string
) => {
    try {
        const response = await fetch(`${API_URL}carts/remove-checklist`, {
            method: "POST",
            headers: getAuthHeaders(token),
            body: JSON.stringify({ checklist: checklistId }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.error?.message || "Failed to remove checklist"
            );
        }

        return result;
    } catch (error) {
        console.error("Error removing checklist from cart:", error);
        throw error;
    }
};

// Remove insurance from cart
export const removeInsuranceFromCart = async (
    token: string,
    cartInsuranceItemId: string
) => {
    try {
        const response = await fetch(`${API_URL}carts/remove-insurance`, {
            method: "POST",
            headers: getAuthHeaders(token),
            body: JSON.stringify({ id: cartInsuranceItemId }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.error?.message || "Failed to remove insurance"
            );
        }

        return result;
    } catch (error) {
        console.error("Error removing insurance from cart:", error);
        throw error;
    }
};

// Add insurance to cart
export const addInsuranceToCart = async (token: string, payload: object) => {
    try {
        const response = await fetch(`${API_URL}carts/add-insurance`, {
            method: "POST",
            headers: getAuthHeaders(token),
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error?.message || "Failed to add insurance");
        }

        return result;
    } catch (error) {
        console.error("Error adding insurance from cart:", error);
        throw error;
    }
};
