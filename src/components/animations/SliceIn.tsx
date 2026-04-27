"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface SliceInProps {
    children: React.ReactNode;
    delay?: number;
    once?: boolean;
}

export default function SliceIn({ children, delay = 0, once = true }: SliceInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            viewport={{ once, amount: 0.1 }}
            transition={{ duration: 0.45, ease, delay }}
        >
            {children}
        </motion.div>
    );
}
