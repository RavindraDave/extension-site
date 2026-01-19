"use client";

import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { motion } from "framer-motion";

export default function ProductsPage() {
    return (
        <div className="min-h-screen pt-24">
            <section className="px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="font-heading mb-6 text-4xl font-bold sm:text-5xl">
                        Our Products
                    </h1>
                    <p className="text-muted-foreground mb-12 text-xl">
                        Premium tools designed to enhance your digital workflow.
                    </p>
                </motion.div>
            </section>
            <ProductShowcase />
        </div>
    );
}
