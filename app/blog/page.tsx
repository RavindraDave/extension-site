import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="min-h-screen container mx-auto px-4 py-24 flex items-center justify-center">
            <div className="text-center max-w-2xl">
                <div className="mb-8 flex justify-center">
                    <div className="p-6 rounded-full bg-primary/10 text-primary">
                        <PenTool className="w-12 h-12" />
                    </div>
                </div>
                <h1 className="font-heading mb-6 text-4xl font-bold sm:text-5xl">
                    Blog Coming Soon
                </h1>
                <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                    We are currently crafting deep dives into productivity workflows, extension security, and the future of work. <br />
                    Stay tuned for high-quality articles.
                </p>
            </div>
        </div>
    );
}
