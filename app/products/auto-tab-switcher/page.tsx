"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldAlert, Zap, Keyboard, Settings, Activity, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FAQSection } from "@/components/sections/FAQSection";
import dashboardImg from "./assets/dashboard_monitoring.png";
import signageImg from "./assets/digital_signage.png";
import tradingImg from "./assets/trading_finance.png";

export default function AutoTabSwitcherPage() {
    const features = [
        {
            icon: Zap,
            title: "Automated Tab Cycling",
            description: "Automatically cycle through your open tabs at a configurable interval. Set it and forget it."
        },
        {
            icon: Clock,
            title: "Per-Window Control",
            description: "Independent control for each browser window. Run different cycles on different monitors simultaneously."
        },
        {
            icon: ShieldAlert,
            title: "Activity Awareness",
            description: "Smart pause detection keeps you uninterrupted. The cycle pauses when you interact with the browser."
        },
        {
            icon: Keyboard,
            title: "Keyboard Shortcuts",
            description: "Instant control with global hotkeys (Ctrl+Shift+P). Pause or resume without opening the popup."
        },
        {
            icon: Settings,
            title: "Flexible Modes",
            description: "Switch between Global Mode (all windows) and Window Mode (specific windows) to suit your workflow."
        },
        {
            icon: Activity,
            title: "Pro Diagnostics",
            description: "Detailed activity logging and diagnostics to troubleshoot complex multi-display setups."
        }
    ];

    const useCases = [
        {
            title: "Dashboard Monitoring",
            description: "Rotate through analytics dashboards (Datadog, Grafana, Google Analytics) on a dedicated monitor to keep your team informed.",
            image: dashboardImg
        },
        {
            title: "Digital Signage",
            description: "Power screens in your office lobby or shop. Cyclically display announcements, news, or promotional slides.",
            image: signageImg
        },
        {
            title: "Trading Stations",
            description: "Monitor multiple financial markets. Cycle through stock charts, crypto tickers, and news feeds hands-free.",
            image: tradingImg
        }
    ];

    const faqs = [
        {
            question: "Can I set different intervals for different tabs?",
            answer: "Currently, the interval is set per-window. You can have different intervals for different windows (e.g., fast cycle on Monitor 1, slow cycle on Monitor 2), but all tabs within a window share the same interval."
        },
        {
            question: "Does it work if the browser is minimized?",
            answer: "Yes, Auto Tab Switcher uses the Chrome Alarms API to ensure reliable switching even when the browser is in the background or minimized, although visual updates naturally happen when visible."
        },
        {
            question: "Will it interrupt me while I'm working?",
            answer: "Not if you enable 'Pause on Activity'. This smart feature detects mouse movement or typing and temporarily pauses the timer, so you can work uninterrupted. It resumes automatically when you're done."
        },
        {
            question: "Is my data private?",
            answer: "Absolutely. Auto Tab Switcher runs entirely locally on your device. We do not collect, store, or transmit any of your browsing data or settings."
        }
    ];

    const reviews = [
        {
            user: "Renato Alves",
            role: "Chrome Web Store Review",
            content: "Simple yet powerful extension. The ability to set custom time intervals and automatically cycle through tabs is extremely useful for monitoring dashboards and online services. Lightweight, reliable, and very efficient.",
            rating: 5
        },
        {
            user: "R D",
            role: "Chrome Web Store Review",
            content: "Simple and elegant, does what's mentioned, works for my usage without any issue. Great for creating profiles with pre-defined lists of URLs.",
            rating: 5
        },
        {
            user: "Engr Azhar",
            role: "Chrome Web Store Review",
            content: "Lovely, simple and nice working. Exactly what I needed for my workflow.",
            rating: 5
        }
    ];
    return (
        <div className="flex flex-col gap-0">
            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-md">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>v1.2.0 Now Available</span>
                    </div>

                    <h1 className="font-heading mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                        Auto Tab Switcher
                    </h1>
                    <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                        Transform your browser into a powerful automated display system.
                        Perfect for monitoring dashboards, digital signage, and multi-display setups.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="https://chromewebstore.google.com/detail/auto-tab-switcher/mophipfldpoeeimgjfmcnidafjggmiko"
                            target="_blank"
                            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Add to Chrome
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-4 py-24">
                <div className="mb-16 text-center">
                    <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">Power Features</h2>
                    <p className="text-muted-foreground text-lg">Everything you need for complete control.</p>
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
            <section className="bg-secondary/10 py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">Proven Use Cases</h2>
                        <p className="text-muted-foreground text-lg">Trusted by professionals worldwide.</p>
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
                                            <span>Optimized for 24/7 reliability</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                            <span>Zero memory leaks</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-1">
                                    {/* Image Placeholder - Will be replaced with generated image */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black/40 shadow-2xl transition-transform hover:scale-[1.02]">
                                        <Image
                                            src={useCase.image}
                                            alt={useCase.title}
                                            fill
                                            className="object-cover opacity-80"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="container mx-auto px-4 py-24">
                <div className="mb-16 text-center">
                    <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">Loved by Users</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {reviews.map((review, i) => (
                        <div key={i} className="rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm">
                            <div className="mb-4 flex gap-1">
                                {[...Array(review.rating)].map((_, r) => (
                                    <Star key={r} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 text-lg italic">"{review.content}"</p>
                            <div>
                                <div className="font-semibold text-foreground">{review.user}</div>
                                <div className="text-sm text-primary">{review.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection items={faqs} title="Common Questions" />

            {/* Bottom CTA */}
            <section className="border-t border-white/5 py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading mb-6 text-3xl font-bold sm:text-4xl">Ready to automate your workflow?</h2>
                    <Link
                        href="https://chromewebstore.google.com/detail/auto-tab-switcher/mophipfldpoeeimgjfmcnidafjggmiko"
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-12 py-6 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105"
                    >
                        Get Auto Tab Switcher
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
