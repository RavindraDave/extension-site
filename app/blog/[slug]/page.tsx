import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Placeholder data - typically this would be imported from a shared source
const posts = [
    {
        slug: "productivity-tips-2025",
        title: "10 Productivity Hacks for 2025",
        content: `
      <p>Productivity in 2025 is all about leveraging AI and automating mundane tasks. Here are our top tips...</p>
      <h3>1. Use Focus Flow</h3>
      <p>Blocking distractions is more meaningful than ever.</p>
      <h3>2. Automate Tabs</h3>
      <p>Don't waste time switching tabs manually.</p>
    `,
        date: "2025-01-15",
        category: "Productivity",
    },
    {
        slug: "building-extensions",
        title: "Building Secure Chrome Extensions",
        content: `
      <p>With Manifest V3, security is paramount. Here's how we ensure R2DSolutions extensions are safe...</p>
      <h3>CSP Headers</h3>
      <p>Strict Content Security Policy is a must.</p>
    `,
        date: "2024-12-20",
        category: "Development",
    },
];

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto max-w-3xl px-4 py-24">
            <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
            </Link>

            <div className="mb-8">
                <div className="mb-4 flex gap-4 text-sm text-muted-foreground">
                    <span className="text-primary">{post.category}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h1 className="font-heading mb-6 text-4xl font-bold sm:text-5xl">
                    {post.title}
                </h1>
            </div>

            <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
