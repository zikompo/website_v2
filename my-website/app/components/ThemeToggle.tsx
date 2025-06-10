"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

type Theme = "light" | "dark";

const iconMap: Record<Theme, React.ReactNode> = {
    light: <Sun size={20} />,
    dark: <Moon size={20} />,
};

const nextTheme: Record<Theme, Theme> = {
    light: "dark",
    dark: "light",
};

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = nextTheme[theme];
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={`Switch to ${nextTheme[theme]} mode`}
        >
            {iconMap[theme]}
        </button>
    );
};
