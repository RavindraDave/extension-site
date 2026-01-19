"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Rocket, Search } from "lucide-react";
import Link from "next/link";

const steps = [
    { title: "Discovery", description: "We analyze your requirements and feasibility.", icon: Search },
    { title: "Development", description: "Agile build process with regular updates.", icon: Code2 },
    { title: "Launch", description: "Store submission and post-launch support.", icon: Rocket },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <section className="px-4 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="font-heading mb-6 text-4xl font-bold sm:text-5xl">
                        Custom Extension Development
                    </h1>
                    <p className="text-muted-foreground mb-12 text-xl">
                        Need a custom browser solution? We build high-performance, secure, and compliant extensions tailored to your business needs.
                    </p>
                </motion.div>

                <div className="container mx-auto grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <div key={i} className="glass rounded-2xl p-8 hover:bg-white/5">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading mb-2 text-xl font-semibold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary/90">
                        Start Your Project <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
