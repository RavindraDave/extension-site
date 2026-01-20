"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="font-heading mb-8 text-4xl font-bold">Privacy Policy</h1>
            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-foreground italic mb-20">Last updated: January 20, 2026</p>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">1. Introduction</h2>
                    <p className="mb-8">
                        R2DSolutions ("we", "us", "our") is committed to protecting your privacy. This policy explains how our Chrome extensions, specifically <strong>Focus Flow</strong> and <strong>Auto Tab Switcher</strong>, handle your data.
                    </p>
                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl my-8">
                        <p className="font-bold m-0">Summary:</p>
                        <p className="m-0">We do not collect, sell, or transmit your personal data. All processing happens locally on your device. We follow a "Privacy by Design" approach.</p>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">2. Data Collection and Usage</h2>

                    <h3 className="text-xl font-semibold mb-4">No Remote Data Collection</h3>
                    <p className="mb-8">
                        Our extensions do not transmit any data to external servers. We do not use third-party analytics (like Google Analytics) or tracking pixels. Your browsing behavior remains private and untouchable by us or any third party.
                    </p>

                    <h3 className="text-xl font-semibold mb-4">Local Data Storage</h3>
                    <p className="mb-8">
                        We save your preferences and settings locally on your computer using the Chrome Storage API (`chrome.storage.local`). This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Focus Flow:</strong> Timer settings (work/break intervals), lists of blocked websites, themes, and focus statistics (calculated locally).</li>
                        <li><strong>Auto Tab Switcher:</strong> Tab cycling intervals, window/tab rules, and operating modes.</li>
                    </ul>
                    <p className="mt-8 italic">This data never leaves your browser instance and is not accessible to R2DSolutions.</p>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">3. Permissions Usage</h2>
                    <p className="mb-10">Each extension requires specific permissions to perform its core functions. We only request the minimum permissions necessary.</p>

                    <div className="space-y-4 not-prose">
                        <PermissionAccordion
                            title="Auto Tab Switcher Permissions"
                            colorClass="bg-primary"
                            textColorClass="text-primary"
                            isOpenDefault={true}
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <PermissionCard name="tabs" description="Used to identify, switch, and manage active tabs automatically." colorClass="text-primary" />
                                <PermissionCard name="storage" description="To save your custom tab switching intervals and rules." colorClass="text-primary" />
                                <PermissionCard name="alarms" description="To trigger the automatic tab switch at precise intervals." colorClass="text-primary" />
                                <PermissionCard name="windows" description="To manage focus between different browser windows for multi-display setups." colorClass="text-primary" />
                                <PermissionCard name="downloads" description="Allows you to export your configuration rules as a local backup file." colorClass="text-primary" />
                            </div>
                        </PermissionAccordion>

                        <PermissionAccordion
                            title="Focus Flow Permissions"
                            colorClass="bg-primary"
                            textColorClass="text-primary"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <PermissionCard name="storage" description="To save your Pomodoro settings and block rules locally." colorClass="text-primary" />
                                <PermissionCard name="alarms" description="To run focus timers accurately in the background." colorClass="text-primary" />
                                <PermissionCard name="notifications" description="To alert you when a work or break session completes." colorClass="text-primary" />
                                <PermissionCard name="declarativeNetRequest" description="To block access to distracting sites on your blocklist efficiently." colorClass="text-primary" />
                                <PermissionCard name="tabs" description="To detect the current tab URL and apply block rules accordingly." colorClass="text-primary" />
                            </div>
                        </PermissionAccordion>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">4. User Rights</h2>
                    <p className="mb-8">
                        Since we do not hold your data on our servers, there is no personal data for us to provide, modify, or delete.
                    </p>
                    <p className="mt-8 mb-4">
                        <strong>Full Control:</strong> You can clear all data stored by our extensions at any time by:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Uninstalling the extension.</li>
                        <li>Clearing the extension's storage through Chrome's developer tools.</li>
                        <li>Manually resetting settings within the extension's options page.</li>
                    </ol>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-primary">5. Contact</h2>
                    <p className="mb-4">
                        If you have questions about this privacy policy, please contact us at:
                    </p>
                    <p className="font-bold">Email: admin@r2dsolutions.com</p>
                </section>
            </div>
        </div>
    );
}

function PermissionAccordion({ title, children, colorClass, textColorClass, isOpenDefault = false }: { title: string, children: React.ReactNode, colorClass: string, textColorClass: string, isOpenDefault?: boolean }) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className="border border-border rounded-xl bg-card/30 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
            >
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${colorClass}`}></div>
                    {title}
                </h3>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 border-t border-white/5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function PermissionCard({ name, description, colorClass }: { name: string, description: string, colorClass: string }) {
    return (
        <div className="border border-border p-4 rounded-lg bg-card/50">
            <span className={`font-mono font-bold ${colorClass}`}>{name}</span>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
    );
}
