"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldAlert, Zap, Settings, Activity, CheckCircle2, Star, Trophy, Youtube, Flame } from "lucide-react";
import Link from "next/link";
import { FAQSection } from "@/components/sections/FAQSection";

export default function FocusFlowPage() {
    const features = [
        {
            icon: Clock,
            title: "Smart Pomodoro Timer",
            description: "Customizable work and break intervals with automatic cycles and badge-based progress tracking."
        },
        {
            icon: ShieldAlert,
            title: "Nuclear Mode",
            description: "Lock out distractions with a cryptographic commitment mechanism that's virtually impossible to bypass."
        },
        {
            icon: Activity,
            title: "Deep Analytics",
            description: "Comprehensive dashboard with 7-day trends, heatmap, and a unique Focus Score to track your progress."
        },
        {
            icon: Youtube,
            title: "YouTube Controls",
            description: "Reclaim your time on YouTube by hiding shorts, recommendations, and comments while you study."
        },
        {
            icon: Settings,
            title: "Advanced Scheduling",
            description: "Create complex blocking schedules for specific times and days. Perfect for work-life balance."
        },
        {
            icon: Trophy,
            title: "Gamified Progress",
            description: "Stay motivated with daily streaks, achievements, and level-up badges as you master your focus."
        }
    ];

    const useCases = [
        {
            title: "Deep Work for Developers",
            description: "Block Slack, Jira, and StackOverflow rabbit holes during intense coding sessions. Use Nuclear Mode to guarantee focus.",
            image: "/focus_work.png"
        },
        {
            title: "Distraction-Free Studying",
            description: "Students can block social media and clean up YouTube UI to focus strictly on educational content without the 'algorithm' pull.",
            image: "/student_focus.png"
        },
        {
            title: "Mindful Browsing",
            description: "Set daily allowances for time-sink websites. Get notified when your 30-minute Reddit limit is up.",
            image: "/mindful_browsing.png"
        }
    ];

    const faqs = [
        {
            question: "Is Nuclear Mode truly un-stoppable?",
            answer: "We use HMAC-SHA256 cryptographic signatures and security challenges. While no software is 100% impossible to remove (you could uninstall Chrome), it's designed to provide the maximum possible friction to stop you from caving in during a weak moment."
        },
        {
            question: "Do I need an account to use Focus Flow?",
            answer: "No. Focus Flow is privacy-first. All your data, settings, and analytics reside locally on your device. We don't even have a 'login' button."
        },
        {
            question: "Can I sync my settings across computers?",
            answer: "Yes! If you choose to enable the optional Chrome Sync, your block lists and settings will sync perfectly between your work and home computers."
        },
        {
            question: "What is the 'Focus Score'?",
            answer: "It's our proprietary algorithm (0-100) that weights your session completion rate, consistency over the last 7 days, and your current streak to give you a single metric of your 'Focus Health'."
        }
    ];

    return (
        <div className="flex flex-col gap-0">
            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md">
                        <Flame className="h-4 w-4" />
                        <span>Achieve Your Peak Flow State</span>
                    </div>

                    <h1 className="font-heading mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                        Focus Flow
                    </h1>
                    <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                        The ultimate productivity hub. Combine expert Pomodoro timing with un-bypassable website blocking and professional analytics.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Notified on Launch
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-4 py-24 border-t border-white/5">
                <div className="mb-16 text-center">
                    <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">Built for Deep Work</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Focus Flow replaces 3 separate extensions with one beautiful, integrated experience. <span className="text-primary font-semibold">Coming Soon.</span></p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl border border-border bg-card/30 p-8 transition-colors hover:border-primary/20 hover:bg-card/50"
                        >
                            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-primary/5 py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">How Developers & Students will use it</h2>
                    </div>

                    <div className="space-y-20">
                        {useCases.map((useCase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col gap-12 lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                            >
                                <div className="flex-1 space-y-6">
                                    <h3 className="font-heading text-3xl font-bold text-primary">{useCase.title}</h3>
                                    <p className="text-muted-foreground text-xl leading-relaxed">{useCase.description}</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                            <span>Verified productivity gains</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                            <span>Privacy-first architecture</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-1">
                                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black/40 shadow-2xl">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={useCase.image}
                                            alt={useCase.title}
                                            className="h-full w-full object-cover opacity-80"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection items={faqs} title="Frequently Asked Questions" />

            {/* Bottom CTA */}
            <section className="border-t border-white/5 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading mb-6 text-3xl font-bold sm:text-4xl">Ready to take back your time?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-12 py-6 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105"
                    >
                        Notify Me on Launch
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
