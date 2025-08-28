"use client";
import { useEffect, useState } from "react";
import CartSummary from "@/components/cart/CartSummary";
import OrderSummary from "@/components/cart/OrderSummary";
import { motion } from "framer-motion";
import ServiceCard from "@/components/common/ServiceCard";
import { getUserCart, removeChecklistFromCart, removeInsuranceFromCart } from "@/api/cart";
import Toast from "@/ui/toast";
import { useRouter } from "next/navigation";

interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    selected: boolean;
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [token, setToken] = useState<string | null>(null);
    const [toast, setToast] = useState({
        message: "",
        type: "success" as "success" | "error",
        open: false,
    });
    const router = useRouter()

    useEffect(() => {
        const t = localStorage?.getItem("token");
        if (!t) {
            setError("Please login to view your cart");
            setToast({ message: "Please login to view your cart", type: "error", open: true });
            setLoading(false);
            router.push("/"); // redirect
            return;
        }
    setToken(t);

    (async () => {
      try {
        const cart = await getUserCart(t);

        const insuranceItems = cart?.cartInsuranceItems?.map((ci: any) => ({
          id: `insurance-${ci.documentId}`,
          title: ci.insurance?.name || "Insurance Plan",
          description: ci.notes || "Insurance policy",
          price: ci.totalPrice || 0,
          selected: true,
        })) || [];

        const checklistItems = cart?.checklists?.map((cl: any) => ({
          id: `checklist-${cl.documentId}`,
          title: cl.title,
          description: cl.subtitle || cl.description?.[0]?.children?.[0]?.text || "",
          price: cl.price || 0,
          selected: true,
        })) || [];

        setCartItems([...insuranceItems, ...checklistItems]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

    const handleItemSelect = (id: string) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const handleRemoveItem = async (id: string) => {
        try {
            let type: "insurance" | "checklist" = "checklist";
            let actualId: string | number = id;

            if (id.startsWith("insurance-")) {
                type = "insurance";
                actualId = id.replace("insurance-", "");
            } else if (id.startsWith("checklist-")) {
                type = "checklist";
                actualId = id.replace("checklist-", "");
            }

            if (type === "insurance") {
                await removeInsuranceFromCart(token || '', actualId);
            } else {
                await removeChecklistFromCart(token || '', actualId);
            }

            setCartItems((items) => items.filter((item) => item.id !== id));

            setToast({
                message: `${type === "insurance" ? "Insurance" : "Checklist"} removed successfully`,
                type: "success",
                open: true,
            });
        } catch (err: any) {
            console.error(err);

            setToast({
                message: "Failed to remove item. Please try again.",
                type: "error",
                open: true,
            });
        }
    };


    const consultation = 0;
    const discount = 0;
    const services = [
        {
            id: "insurance",
            title: "Buy Cheapest Insurance",
            description:
                "Compare and purchase affordable overseas health cover from top",
            icon: "🛡️",
        },
        {
            id: "tracking",
            title: "Occupation Tracking Tool",
            description:
                "Track updates on your occupation — demand trends, state invites,",
            icon: "💼",
        },
        {
            id: "consultation",
            title: "Zoom Consultations",
            description:
                "Get expert advice face-to-face — online. Book a call with our",
            icon: "💻",
        },
    ];

    return (
        <div>
            <div className="mb-10">
                <h1 className="font-bold text-heading1 text-navy-blue tracking-[0.608px] mb-6">
                    My Cart
                </h1>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10">
                    {/* Cart Items */}
                    <CartSummary
                        items={cartItems}
                        loading={loading}
                        error={error}
                        onSelect={handleItemSelect}
                        onRemove={handleRemoveItem}
                    />

                    {/* Order Summary */}
                    <OrderSummary
                        items={cartItems}
                        consultationCharge={consultation}
                        discount={discount}
                    />
                </div>
            </div>

            {/* Service Recommendations */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // triggers when 20% in view
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.2 },
                    },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                },
                            },
                        }}
                    >
                        <ServiceCard {...service} />
                    </motion.div>
                ))}
            </motion.div>
            <Toast
                message={toast.message}
                type={toast.type}
                isOpen={toast.open}
                onClose={() => setToast({ ...toast, open: false })}
            />
        </div>
    );
}
