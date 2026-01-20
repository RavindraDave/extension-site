"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, ShieldAlert, Timer, Zap, Keyboard, Settings, Activity, Star } from "lucide-react";

const products = [
    {
        id: "auto-tab-switcher",
        name: "Auto Tab Switcher",
        tagline: "Automate Your Workflow",
        description:
            "Transform your browser into a powerful automated display system. Perfect for monitoring dashboards, digital signage, and multi-display setups.",
        icon: Zap,
        gradient: "from-secondary via-secondary/80 to-secondary/50",
        features: [
            { icon: Zap, text: "Automated Tab Cycling" },
            { icon: Clock, text: "Per-Window Control" },
            { icon: ShieldAlert, text: "Activity Awareness" },
            { icon: Keyboard, text: "Keyboard Shortcuts" },
            { icon: Settings, text: "Flexible Operating Modes" },
            { icon: Activity, text: "Professional Diagnostics" },
        ],
        href: "/products/auto-tab-switcher",
    },
    {
        id: "focus-flow",
        name: "Focus Flow",
        tagline: "Reclaim Your Attention",
        description:
            "The ultimate productivity suite combining a Pomodoro timer, powerful website blocker, and advanced analytics to help you achieve deep work.",
        icon: Timer,
        gradient: "from-primary via-primary/80 to-primary/50",
        features: [
            { icon: Clock, text: "Smart Pomodoro Timer" },
            { icon: ShieldAlert, text: "Nuclear Mode Blocking" },
            { icon: Activity, text: "Deep Focus Analytics" },
            { icon: Zap, text: "YouTube Distraction Controls" },
            { icon: Settings, text: "Custom Schedules" },
            { icon: Star, text: "Streak & Achievements" },
        ],
        href: "/products/focus-flow",
    },
];

export function ProductShowcase() {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="mb-16 text-center">
                <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
                    Our Premium Tools
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                    Built for professionals who value their time and focus. Open source,
                    privacy-first, and crafted with care.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group glass relative overflow-hidden rounded-3xl border border-white/5 p-8 transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
                    >
                        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${product.gradient} opacity-[0.15] blur-3xl transition-opacity group-hover:opacity-25`} />

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 shadow-inner backdrop-blur-md">
                                <product.icon className="h-6 w-6 text-foreground" />
                            </div>

                            <h3 className="font-heading mb-2 text-2xl font-bold">
                                {product.name}
                            </h3>
                            <p className="mb-4 text-sm font-medium text-primary">
                                {product.tagline}
                            </p>
                            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                                {product.description}
                            </p>

                            <div className="mb-8 space-y-3">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <feature.icon className="h-4 w-4 text-accent" />
                                        <span className="text-sm text-foreground/80">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={product.href}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                            >
                                Learn more <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
