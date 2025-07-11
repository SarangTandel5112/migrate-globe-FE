import { Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Use easing array (cubic-bezier equivalent to easeOut)
            delay: custom * 0.15, // use custom for delay control
        },
    }),
};

export const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
            staggerChildren: 0.2, // ⭐ cards animate one by one
            delayChildren: 0.3, // ⭐ starts AFTER title animation
        },
    },
};

export const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

export const visaContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};