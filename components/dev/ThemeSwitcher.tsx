"use client";

import { useState, useEffect } from "react";
import { themes, defaultTheme, type ThemeVariant } from "@/lib/theme-config";
import { Palette, Check } from "lucide-react";

const STORAGE_KEY = "dev-theme-preference";

export function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<ThemeVariant>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeVariant;
        if (savedTheme && themes[savedTheme]) {
            setCurrentTheme(savedTheme);
            applyTheme(savedTheme);
        }
    }, []);

    // Apply theme by updating CSS variables
    const applyTheme = (themeId: ThemeVariant) => {
        const theme = themes[themeId];
        const root = document.documentElement;

        // Apply each color variable
        Object.entries(theme.colors).forEach(([key, value]) => {
            // Convert camelCase to kebab-case
            const cssVar = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            root.style.setProperty(`--${cssVar}`, value);
        });
    };

    // Handle theme selection
    const handleThemeChange = (themeId: ThemeVariant) => {
        setCurrentTheme(themeId);
        applyTheme(themeId);
        localStorage.setItem(STORAGE_KEY, themeId);
        setIsOpen(false);
    };

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen]);

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary/40 active:scale-95"
                aria-label="Theme Switcher"
                aria-expanded={isOpen}
            >
                <Palette className="h-5 w-5" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 -z-10"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu */}
                    <div className="absolute bottom-16 right-0 w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl backdrop-blur-xl">
                        <div className="border-b border-border bg-secondary/50 px-4 py-3">
                            <h3 className="font-heading text-sm font-bold text-foreground">
                                Development Theme Switcher
                            </h3>
                            <p className="text-xs text-muted-foreground">
                                Select a theme to preview
                            </p>
                        </div>

                        <div className="max-h-96 overflow-y-auto p-2">
                            {Object.values(themes).map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => handleThemeChange(theme.id)}
                                    className="group relative flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors hover:bg-secondary/80"
                                >
                                    {/* Color Preview */}
                                    <div
                                        className="mt-0.5 h-10 w-10 shrink-0 rounded-lg border border-border shadow-sm"
                                        style={{
                                            background: theme.colors.background,
                                            borderColor: theme.colors.border,
                                        }}
                                    >
                                        <div
                                            className="h-full w-full rounded-lg opacity-30"
                                            style={{
                                                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
                                            }}
                                        />
                                    </div>

                                    {/* Theme Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm text-foreground">
                                                {theme.name}
                                            </span>
                                            {currentTheme === theme.id && (
                                                <Check className="h-4 w-4 text-primary" />
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                            {theme.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="border-t border-border bg-secondary/30 px-4 py-2">
                            <p className="text-xs text-muted-foreground text-center">
                                Dev only • Not in production
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
