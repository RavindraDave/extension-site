
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
    Rocket,
    Shield,
    Zap,
    Star,
    Clock,
    Layout,
    BarChart,
    Calendar,
    Lock,
    AlertTriangle,
    Brain,
    Keyboard,
    CheckCircle2,
    Construction
} from "lucide-react";

export const metadata: Metadata = {
    title: "Focus Flow Documentation | R2DSolutions",
    description: "Comprehensive user guide and documentation for the Focus Flow Chrome Extension.",
};

export default function FocusFlowDocs() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/5 to-background border-b border-border/50">
                <div className="container mx-auto px-4 py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fadeIn">
                        <Rocket className="w-4 h-4" />
                        <span>Official Documentation</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-heading">
                        Master Your <span className="text-primary">Focus</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about using Focus Flow to reclaim your attention, boost productivity, and achieve your goals.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 grid gap-12 lg:grid-cols-[250px_1fr]">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:block sticky top-24 h-fit">
                    <nav className="space-y-1">
                        <QuickLink href="#getting-started">Getting Started</QuickLink>
                        <QuickLink href="#core-features">Core Features</QuickLink>
                        <QuickLink href="#pro-tips">Pro Tips</QuickLink>
                        <QuickLink href="#premium">Premium Features</QuickLink>
                        <QuickLink href="#shortcuts">Shortcuts</QuickLink>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="space-y-16">

                    {/* Getting Started */}
                    <section id="getting-started" className="scroll-mt-24 space-y-6">
                        <SectionHeader icon={Rocket} title="Getting Started" />
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card
                                title="Installation & Setup"
                                content="Focus Flow works right out of the box. Pin the extension to your browser toolbar for quick access. We require minimal permissions solely to block distracting sites during your focus sessions."
                            />
                            <Card
                                title="Your First Session"
                                content="1. Open the popup (Alt+Shift+F). 
                2. Select a duration (e.g., 25m).
                3. Click Start. Distractions are now blocked!"
                            />
                        </div>
                    </section>

                    {/* Core Features */}
                    <section id="core-features" className="scroll-mt-24 space-y-6">
                        <SectionHeader icon={Zap} title="Core Features" />
                        <div className="grid gap-6 md:grid-cols-2">
                            <FeatureCard
                                icon={Clock}
                                title="Pomodoro Timer"
                                desc="Customizable work/break intervals. Default is 25m work / 5m break, but standard Pomodoro settings can be adjusted in the Options page."
                            />
                            <FeatureCard
                                icon={Shield}
                                title="Website Blocking"
                                desc="Create powerful blocking rules. Use wildcards (e.g., *.social) or keywords to block entire categories of distractions."
                            />
                            <FeatureCard
                                icon={BarChart}
                                title="Analytics Dashboard"
                                desc="Track your daily focus time, completed sessions, and visualize your productivity streaks over time."
                            />
                            <FeatureCard
                                icon={Calendar}
                                title="Schedules"
                                desc="Automate your focus. Set up 'Work Hours' to automatically block distracting sites from 9 AM to 5 PM on weekdays."
                            />
                        </div>

                        <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-primary" /> Blocking Modes
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="p-4 bg-background rounded-lg border border-border/50">
                                    <div className="font-semibold mb-1">Standard</div>
                                    <div className="text-sm text-muted-foreground">Blocks sites only when a timer is running.</div>
                                </div>
                                <div className="p-4 bg-background rounded-lg border border-border/50">
                                    <div className="font-semibold mb-1">Always Block</div>
                                    <div className="text-sm text-muted-foreground">Sites are blocked 24/7. No exceptions.</div>
                                </div>
                                <div className="p-4 bg-background rounded-lg border border-border/50">
                                    <div className="font-semibold mb-1">Scheduled</div>
                                    <div className="text-sm text-muted-foreground">Blocks based on your defined calendar schedules.</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pro Tips */}
                    <section id="pro-tips" className="scroll-mt-24 space-y-6">
                        <SectionHeader icon={Brain} title="Pro Tips" />

                        <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                            <h3 className="font-semibold text-yellow-600 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Strict Blocking
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Find yourself disabling the extension when you want to cheat? Turn on <strong>Strict Blocking</strong> in the Dashboard.
                                This prevents you from accessing settings or stopping the timer while a session is active.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Mastering Wildcards</h3>
                            <div className="grid gap-3 text-sm">
                                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                    <code className="bg-background px-2 py-1 rounded text-primary border">*.news</code>
                                    <span className="text-muted-foreground">Blocks 'bbc.news', 'cnn.news', etc.</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                    <code className="bg-background px-2 py-1 rounded text-primary border">*social*</code>
                                    <span className="text-muted-foreground">Blocks any URL containing the word 'social'.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Premium Features */}
                    <section id="premium" className="scroll-mt-24 space-y-6">
                        <SectionHeader icon={Star} title="Premium Features" />
                        <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/20 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold">Focus Flow Pro</h3>
                                    <p className="text-muted-foreground">For power users who need absolute control.</p>
                                </div>
                                <div className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-2">
                                    <Construction className="w-4 h-4" /> Coming Soon
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <PremiumFeature icon="∞" title="Unlimited Everything" desc="Remove limits on Block Rules and Schedules." />
                                <PremiumFeature icon="☢️" title="Nuclear Mode" desc="Override all rules and block internet access completely for deep work." />
                                <PremiumFeature icon="☁️" title="Cloud Sync" desc="Sync your settings and stats across all your devices." />
                                <PremiumFeature icon="🤖" title="AI Insights" desc="Personalized productivity analytics and recommendations." />
                            </div>
                        </div>
                    </section>

                    {/* Shortcuts */}
                    <section id="shortcuts" className="scroll-mt-24 space-y-6 pb-20">
                        <SectionHeader icon={Keyboard} title="Keyboard Shortcuts" />
                        <div className="grid gap-4 max-w-xl">
                            <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg border border-border">
                                <span className="font-medium">Open Popup</span>
                                <kbd className="px-2 py-1 bg-background border border-border rounded text-xs font-sans text-muted-foreground shadow-sm">Alt + Shift + F</kbd>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg border border-border">
                                <span className="font-medium">Start/Stop Timer</span>
                                <kbd className="px-2 py-1 bg-background border border-border rounded text-xs font-sans text-muted-foreground shadow-sm">Alt + Shift + P</kbd>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}

// Subcomponents

function SectionHeader({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex items-center gap-3 pb-2 border-b border-border/40">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Icon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        </div>
    );
}

function QuickLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a href={href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
            {children}
        </a>
    );
}

function Card({ title, content }: { title: string, content: string }) {
    return (
        <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-4 p-5 rounded-xl border border-border/60 hover:bg-muted/50 transition-colors">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-semibold mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function PremiumFeature({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-lg shadow-sm">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    );
}
