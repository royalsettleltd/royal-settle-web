// Variants for animations
import { Variants } from "framer-motion";
export const float: Variants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

export const phoneFloat: Variants = {
    animate: {
        y: [0, -6, 0],
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

export const bounce:Variants = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};