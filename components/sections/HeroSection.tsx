"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
            {/* Subtle Gradient Mesh (Much lighter/softer) */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

            {/* Semantic Content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-md"
                >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Elevate Your Browser Workflow</span>
                </motion.div>

                <h1 className="font-heading mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                    R2DSolutions <br />
                    <span className="text-primary text-4xl sm:text-6xl block mt-2 font-semibold tracking-normal opacity-90">
                        Requirement to Development
                    </span>
                </h1>

                <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                    We transform your ideas into powerful digital reality. Explore our premium extensions or partner with us for custom software solutions.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/products"
                        className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Explore Extensions
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 font-semibold text-foreground transition-all hover:bg-secondary/50 hover:border-sidebar-border"
                    >
                        Custom Development
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
