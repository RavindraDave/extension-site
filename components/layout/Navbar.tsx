import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-transform group-hover:scale-105">
                        <span className="font-bold text-lg">R</span>
                    </div>
                    <span className="font-heading text-xl font-bold tracking-tight text-foreground">R2DSolutions</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md md:block"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}
