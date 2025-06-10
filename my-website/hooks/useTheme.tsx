import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
            setThemeState(storedTheme);
        } else {
            // If no stored theme, detect system preference
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setThemeState(systemTheme);
        }
    }, []);

    const applyTheme = useCallback((themeToApply: Theme) => {
        document.documentElement.classList.toggle("dark", themeToApply === "dark");
    }, []);
    
    useEffect(() => {
        applyTheme(theme);
    }, [theme, applyTheme]);

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem("theme", newTheme);
        setThemeState(newTheme);
    };

    return { theme, setTheme };
} 