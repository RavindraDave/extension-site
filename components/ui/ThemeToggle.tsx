"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme-preference";
const LIGHT_THEME = "modernTech";
const DARK_THEME = "darkMode";

// Theme colors
const themes = {
    modernTech: {
        background: "#F1F5F9",
        foreground: "#01184c",
        card: "#ffffff",
        cardForeground: "#01184c",
        popover: "#ffffff",
        popoverForeground: "#01184c",
        primary: "#e94430",
        primaryForeground: "#ffffff",
        secondary: "#e2e8f0",
        secondaryForeground: "#0f172a",
        accent: "#f1f5f9",
        accentForeground: "#0f172a",
        muted: "#e2e8f0",
        mutedForeground: "#64748b",
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",
        border: "#cbd5e1",
        input: "#cbd5e1",
        ring: "#e94430",
    },
    darkMode: {
        background: "#020617",
        foreground: "#F8FAFC",
        card: "#0f172a",
        cardForeground: "#F8FAFC",
        popover: "#0f172a",
        popoverForeground: "#F8FAFC",
        primary: "#e94430",
        primaryForeground: "#ffffff",
        secondary: "#1e293b",
        secondaryForeground: "#F8FAFC",
        accent: "#1e293b",
        accentForeground: "#F8FAFC",
        muted: "#334155",
        mutedForeground: "#94a3b8",
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",
        border: "#1e293b",
        input: "#1e293b",
        ring: "#e94430",
    },
};

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        const prefersDark = savedTheme === DARK_THEME;
        setIsDark(prefersDark);
        applyTheme(prefersDark ? DARK_THEME : LIGHT_THEME);
    }, []);

    // Apply theme by updating CSS variables
    const applyTheme = (themeId: string) => {
        const theme = themes[themeId as keyof typeof themes];
        const root = document.documentElement;

        Object.entries(theme).forEach(([key, value]) => {
            const cssVar = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            root.style.setProperty(`--${cssVar}`, value);
        });
    };

    // Handle theme toggle
    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        const newTheme = newIsDark ? DARK_THEME : LIGHT_THEME;
        applyTheme(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    };

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-secondary hover:scale-110 active:scale-95"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    );
}
