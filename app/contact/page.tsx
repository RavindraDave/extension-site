"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <section className="px-4 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="font-heading mb-6 text-4xl font-bold sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="text-muted-foreground mb-12 text-xl">
                        Have a project in mind or need support for our extensions? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="container mx-auto grid gap-8 md:grid-cols-2 max-w-4xl">
                    <div className="glass rounded-2xl p-8 hover:bg-white/5 text-left">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary/80">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading mb-2 text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground mb-4">For general inquiries and project proposals.</p>
                        <a href="mailto:contact@r2dsolutions.com" className="text-primary hover:underline">contact@r2dsolutions.com</a>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:bg-white/5 text-left">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary/80">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading mb-2 text-xl font-semibold">Support</h3>
                        <p className="text-muted-foreground mb-4">Need help with Focus Flow or Auto Tab Switcher?</p>
                        <a href="mailto:support@r2dsolutions.com" className="text-primary hover:underline">support@r2dsolutions.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
