"use client";

import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="px-4 text-center pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-md">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Built for Professionals</span>
                    </div>

                    <h1 className="font-heading mb-6 text-4xl font-bold sm:text-5xl">
                        Browser Extensions That Work <br />
                        <span className="text-primary">As Hard As You Do</span>
                    </h1>

                    <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                        Powerful tools designed for knowledge workers, developers, and professionals who refuse to let distractions derail their goals. Privacy-first, professionally crafted, and battle-tested.
                    </p>
                </motion.div>
            </section>

            {/* Product Cards */}
            <ProductShowcase />

            {/* Bottom CTA Section */}
            <section className="px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="glass rounded-3xl border border-border p-12 text-center">
                        <h2 className="font-heading mb-4 text-3xl font-bold">
                            Need Something Custom?
                        </h2>
                        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                            We build tailored browser extensions for businesses with unique workflows. From concept to Chrome Web Store, we handle everything.
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:scale-105"
                        >
                            Explore Custom Development
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
