import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/40 backdrop-blur-md">
            <div className="container mx-auto py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} R2DSolutions. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
