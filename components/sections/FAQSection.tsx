"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
    description?: string;
}

export function FAQSection({
    items,
    title = "Frequently Asked Questions",
    description = "Everything you need to know about the product.",
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                    <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-lg">{description}</p>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-border bg-card/50 px-6 backdrop-blur-sm transition-all hover:border-primary/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between py-6 text-left"
                            >
                                <span className="font-heading text-lg font-semibold text-foreground">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-muted-foreground">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
