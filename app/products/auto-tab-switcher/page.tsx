"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Laptop2, Repeat, Settings, Zap } from "lucide-react";

const features = [
    {
        title: "Automated Cycling",
        description: "Set configurable intervals (down to seconds) to rotate through your open tabs.",
    },
    {
        title: "Dual Modes",
        description: "Control all windows globally or manage each window independently with separate timers.",
    },
    {
        title: "Smart Pause",
        description: "Intelligent activity detection pauses cycling when you interact with the browser.",
    },
    {
        title: "Diagnostics",
        description: "Detailed logging and badge indicators to track exactly what's happening.",
    },
];

export default function AutoTabSwitcherPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden px-4 py-24 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg shadow-secondary/20">
                        <Repeat className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="font-heading mb-6 text-5xl font-bold sm:text-6xl">
                        Auto Tab Switcher
                    </h1>
                    <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl">
                        The ultimate tool for kiosks, dashboards, and multi-monitor setups.
                        Automate your browser workflow instantly.
                    </p>
                    <button className="rounded-full bg-secondary px-8 py-3 font-semibold text-white transition-all hover:bg-secondary/90">
                        Add to Chrome
                    </button>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="glass rounded-2xl border border-white/5 p-8 transition-colors hover:border-secondary/20"
                        >
                            <h3 className="font-heading mb-3 text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
