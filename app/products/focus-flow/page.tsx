"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Smart Pomodoro Timer",
        description: "Customizable work/break intervals with auto-start and smart long-break cycles.",
    },
    {
        title: "Nuclear Mode",
        description: "Lock yourself into deep work with tamper-proof commitment protocols.",
    },
    {
        title: "Advanced Analytics",
        description: "Visualize your productivity with heatmaps, streak tracking, and focus scores.",
    },
    {
        title: "Website Blocking",
        description: "Block distracting domains, keywords, or specific URLs with daily allowances.",
    },
];

export default function FocusFlowPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden px-4 py-24 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
                        <Clock className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="font-heading mb-6 text-5xl font-bold sm:text-6xl">
                        Focus Flow
                    </h1>
                    <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl">
                        The all-in-one productivity suite for deep work. Combine Pomodoro
                        timers with ruthless distraction blocking.
                    </p>
                    <button className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90">
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
                            className="glass rounded-2xl border border-white/5 p-8 transition-colors hover:border-primary/20"
                        >
                            <h3 className="font-heading mb-3 text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Teaser */}
            <section className="container mx-auto max-w-4xl px-4 py-16 text-center">
                <div className="rounded-3xl border border-secondary/20 bg-secondary/5 p-12">
                    <h2 className="font-heading mb-4 text-3xl font-bold">Go Pro with Premium</h2>
                    <p className="text-muted-foreground mb-8">Unlock Nuclear Mode, Unlimited Schedules, and detailed Data Exports.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Nuclear Mode', 'Streak Protection', 'YouTube Controls', 'Priority Support'].map((item) => (
                            <div key={item} className="flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary">
                                <CheckCircle2 className="h-4 w-4" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
