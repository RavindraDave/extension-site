export type ThemeVariant =
    | "modernTech"
    | "warmMinimalist"
    | "highContrast"
    | "pureWhite"
    | "darkMode"
    | "gradient";

export interface ThemeColors {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
}

export interface Theme {
    id: ThemeVariant;
    name: string;
    description: string;
    colors: ThemeColors;
}

export const themes: Record<ThemeVariant, Theme> = {
    modernTech: {
        id: "modernTech",
        name: "Modern Tech",
        description: "Cool slate gray - Professional and crisp",
        colors: {
            background: "#F1F5F9",  // More visible gray (Slate 100)
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
    },
    warmMinimalist: {
        id: "warmMinimalist",
        name: "Warm Beige",
        description: "Warm beige tone - Comfortable and inviting",
        colors: {
            background: "#F5F1E8",  // Noticeable warm beige
            foreground: "#01184c",
            card: "#ffffff",
            cardForeground: "#01184c",
            popover: "#ffffff",
            popoverForeground: "#01184c",
            primary: "#e94430",
            primaryForeground: "#ffffff",
            secondary: "#EBE6DD",
            secondaryForeground: "#0f172a",
            accent: "#F5F1E8",
            accentForeground: "#0f172a",
            muted: "#EBE6DD",
            mutedForeground: "#78716c",
            destructive: "#ef4444",
            destructiveForeground: "#ffffff",
            border: "#DDD8CF",
            input: "#DDD8CF",
            ring: "#e94430",
        },
    },
    highContrast: {
        id: "highContrast",
        name: "Blue Tinted",
        description: "Soft blue background - Modern and fresh",
        colors: {
            background: "#EFF6FF",  // Light blue (Blue 50)
            foreground: "#01184c",
            card: "#ffffff",
            cardForeground: "#01184c",
            popover: "#ffffff",
            popoverForeground: "#01184c",
            primary: "#e94430",
            primaryForeground: "#ffffff",
            secondary: "#DBEAFE",
            secondaryForeground: "#0f172a",
            accent: "#EFF6FF",
            accentForeground: "#0f172a",
            muted: "#DBEAFE",
            mutedForeground: "#64748b",
            destructive: "#ef4444",
            destructiveForeground: "#ffffff",
            border: "#BFDBFE",
            input: "#BFDBFE",
            ring: "#e94430",
        },
    },
    pureWhite: {
        id: "pureWhite",
        name: "Pure White",
        description: "Bright white - Clean and traditional",
        colors: {
            background: "#ffffff",
            foreground: "#01184c",
            card: "#f8fafc",
            cardForeground: "#01184c",
            popover: "#ffffff",
            popoverForeground: "#01184c",
            primary: "#e94430",
            primaryForeground: "#ffffff",
            secondary: "#f1f5f9",
            secondaryForeground: "#0f172a",
            accent: "#f8fafc",
            accentForeground: "#0f172a",
            muted: "#f1f5f9",
            mutedForeground: "#64748b",
            destructive: "#ef4444",
            destructiveForeground: "#ffffff",
            border: "#e2e8f0",
            input: "#e2e8f0",
            ring: "#e94430",
        },
    },
    darkMode: {
        id: "darkMode",
        name: "Dark Mode",
        description: "Enterprise dark - High-end and immersive",
        colors: {
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
    },
    gradient: {
        id: "gradient",
        name: "Gradient Background",
        description: "Subtle depth - Premium feel with gradient",
        colors: {
            background: "linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 100%)",  // More visible gradient
            foreground: "#01184c",
            card: "#ffffff",
            cardForeground: "#01184c",
            popover: "#ffffff",
            popoverForeground: "#01184c",
            primary: "#e94430",
            primaryForeground: "#ffffff",
            secondary: "#f1f5f9",
            secondaryForeground: "#0f172a",
            accent: "#e0e7ff",
            accentForeground: "#0f172a",
            muted: "#f1f5f9",
            mutedForeground: "#64748b",
            destructive: "#ef4444",
            destructiveForeground: "#ffffff",
            border: "#e2e8f0",
            input: "#e2e8f0",
            ring: "#e94430",
        },
    },
};

export const defaultTheme: ThemeVariant = "modernTech";
