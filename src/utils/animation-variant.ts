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
