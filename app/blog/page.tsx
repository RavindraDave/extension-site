import { motion } from "framer-motion";
import Link from "next/link";

// Placeholder data - in a real app this would come from MDX files
const posts = [
    {
        slug: "productivity-tips-2025",
        title: "10 Productivity Hacks for 2025",
        excerpt: "Maximize your flow state with these chrome extension workflows.",
        date: "2025-01-15",
        category: "Productivity",
    },
    {
        slug: "building-extensions",
        title: "Building Secure Chrome Extensions",
        excerpt: "A deep dive into Manifest V3 security best practices.",
        date: "2024-12-20",
        category: "Development",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen container mx-auto px-4 py-24">
            <div className="mb-16 text-center">
                <h1 className="font-heading mb-4 text-4xl font-bold">Latest Updates</h1>
                <p className="text-muted-foreground text-lg">
                    Tips, tricks, and insights from the R2DSolutions team.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="glass h-full rounded-2xl border border-white/5 p-6 transition-all hover:border-primary/20 hover:shadow-lg">
                            <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                                <span>{post.category}</span>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <h2 className="font-heading mb-3 text-2xl font-bold group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-muted-foreground">{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
