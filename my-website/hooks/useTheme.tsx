import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>("system");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme) {
            setThemeState(storedTheme);
        }
    }, []);

    const applyTheme = useCallback((themeToApply: Theme) => {
        if (themeToApply === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.classList.toggle("dark", systemTheme === "dark");
        } else {
            document.documentElement.classList.toggle("dark", themeToApply === "dark");
        }
    }, []);
    
    useEffect(() => {
        applyTheme(theme);

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => applyTheme("system");
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme, applyTheme]);

    const setTheme = (newTheme: Theme) => {
        if (newTheme === "system") {
            localStorage.removeItem("theme");
        } else {
            localStorage.setItem("theme", newTheme);
        }
        setThemeState(newTheme);
    };

    return { theme, setTheme };
} 