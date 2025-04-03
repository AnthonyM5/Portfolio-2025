import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './DarkModeToggle.scss';
var DarkModeToggle = function () {
    // Initialize with user's preference or system preference
    var _a = useState(function () {
        // Check for saved theme preference or use system preference
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }), isDarkMode = _a[0], setIsDarkMode = _a[1];
    // Effect to update the document with the current theme
    useEffect(function () {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
    var toggleTheme = function () {
        setIsDarkMode(!isDarkMode);
    };
    return (_jsx("button", { className: "dark-mode-toggle", onClick: toggleTheme, "aria-label": isDarkMode ? 'Switch to light mode' : 'Switch to dark mode', children: isDarkMode ? _jsx(FaSun, {}) : _jsx(FaMoon, {}) }));
};
export default DarkModeToggle;
