import DeleteIcon from "@/components/icons/DeleteIcon";
import { motion } from "framer-motion";
import EmptyState from "@/ui/EmptyState";
import Link from "next/link";


interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    selected: boolean;
}
interface CartSummaryProps {
  items: CartItem[];
  loading: boolean;
  error: string;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartSummary({ items, loading, error, onSelect, onRemove }: CartSummaryProps) {
    return (
        <div className="flex-1 space-y-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {(error || !items || (!loading && items?.length === 0)) &&
                    <EmptyState
                        title="No items in your cart"
                        subtitle="Explore services and add them to your cart."
                        cta={
                            <Link
                                href="/services"
                                className="inline-flex items-center rounded-lg bg-navy-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                            >
                                Browse services
                            </Link>
                        }
                    />
                }
                {items && items?.length > 0 && items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                        className={`rounded-lg p-4 my-1 flex items-start gap-3 ${
                            item.selected
                                ? "bg-neutrals-0 border-2 border-neutrals-100"
                                : "border border-neutrals-100"
                        }`}
                    >
                        {/* Checkbox */}
                        <button
                            onClick={() => onSelect(item.id)}
                            className="mt-1 w-6 h-6 flex-shrink-0"
                        >
                            {item.selected ? (
                                <motion.div
                                    // layoutId={`checkbox-${item.id}`}
                                    className="w-6 h-6 bg-[#6FAC96] rounded flex items-center justify-center"
                                >
                                    {" "}
                                    <svg
                                        width="8"
                                        height="6"
                                        viewBox="0 0 8 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 3L3 5L7 1"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                            ) : (
                                <div className="w-6 h-6 border-2 border-[#C0C0C0] rounded flex items-center justify-center">
                                    <svg
                                        width="8"
                                        height="6"
                                        viewBox="0 0 8 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 3L3 5L7 1"
                                            stroke="#C0C0C0"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="mb-4">
                                <h3 className="font-bold text-base text-neutrals-700 tracking-[0.608px] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-base text-neutrals leading-6 tracking-[0.2px] capitalize">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="font-bold text-xl text-neutrals-700 leading-6 tracking-[0.2px] capitalize">
                                    ₹{item.price.toLocaleString()}
                                    .00
                                </span>

                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="flex items-center gap-2 py-2 px-2 border border-neutrals-200 bg-background rounded hover:bg-[#EDEDED] transition-colors"
                                >
                                    <DeleteIcon />
                                    <span className="font-bold text-sm text-navy-blue leading-6 tracking-[0.2px] capitalize">
                                        Remove
                                    </span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
