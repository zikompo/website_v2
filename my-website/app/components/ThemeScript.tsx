import React from 'react';

const ThemeScript = () => {
    const script = `
        (function() {
            const theme = localStorage.getItem('theme');
            if (theme) {
                document.documentElement.classList.toggle('dark', theme === 'dark');
            } else {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.toggle('dark', systemTheme);
            }
        })();
    `;

    return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ThemeScript; 