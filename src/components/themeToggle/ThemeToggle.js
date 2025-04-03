import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
var ThemeToggle = function () {
    var _a = useState(false), isDark = _a[0], setIsDark = _a[1];
    useEffect(function () {
        // Check if user has a theme preference in localStorage
        var savedTheme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
        else if (prefersDark) {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);
    var toggleTheme = function () {
        var newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };
    return (_jsx("button", { className: "theme-toggle", onClick: toggleTheme, "aria-label": isDark ? 'Switch to light mode' : 'Switch to dark mode', children: isDark ? _jsx(FiSun, { size: 20 }) : _jsx(FiMoon, { size: 20 }) }));
};
export default ThemeToggle;
