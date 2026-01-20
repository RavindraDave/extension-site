import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/40 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/20">
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
                            className="text-sm font-medium text-muted-foreground/90 transition-all hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:scale-105 active:scale-95 md:block"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}
