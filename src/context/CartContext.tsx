"use client";
import { createContext, useContext, useState } from "react";
import { getUserCart } from "@/api/cart";

// Define the context and its types
type CartContextType = {
    cartCount: number;
    setCartCount: (count: number) => void;
    fetchCartCount: (token: string) => void;
};

const defaultContextValue: CartContextType = {
    cartCount: 0,
    setCartCount: () => {},
    fetchCartCount: () => {},
};

const CartContext = createContext<CartContextType>(defaultContextValue);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        console.error("useCart must be used within a CartProvider");
    }
    return context;
};

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartCount, setCartCount] = useState<number>(0);

    // Fetch the cart count based on the user token
    const fetchCartCount = async (token: string) => {
        try {
            if (!token) {
                setCartCount(0);
                return;
            }

            const cart = await getUserCart(token);
            const totalCount =
                cart?.cartInsuranceItems?.length + cart?.checklists?.length ||
                0;
            setCartCount(totalCount);
        } catch (error) {
            console.error("Error fetching cart count", error);
            // Don't throw the error, just set cart count to 0 for unauthenticated users
            setCartCount(0);
        }
    };

    return (
        <CartContext.Provider
            value={{ cartCount, setCartCount, fetchCartCount }}
        >
            {children}
        </CartContext.Provider>
    );
};
