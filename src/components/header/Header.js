import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './Header.scss';
var Header = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(false), isDarkMode = _b[0], setIsDarkMode = _b[1];
    var _c = useState(false), scrolled = _c[0], setScrolled = _c[1];
    // Check initial theme on mount
    useEffect(function () {
        var savedTheme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
        else {
            setIsDarkMode(prefersDark);
        }
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    var handleScroll = function () {
        setScrolled(window.scrollY > 50);
    };
    var toggleMenu = function () {
        setIsOpen(!isOpen);
    };
    var toggleTheme = function () {
        var newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        // Set theme in localStorage and update document attribute
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    return (_jsx("header", { className: "header ".concat(scrolled ? 'scrolled' : ''), children: _jsxs("div", { className: "header-inner", children: [_jsx("div", { className: "logo", children: _jsx("a", { href: "#", className: "logo-text", children: "AM" }) }), _jsx("button", { className: "menu-toggle", onClick: toggleMenu, "aria-label": "Toggle menu", children: _jsx("span", { className: "hamburger ".concat(isOpen ? 'active' : '') }) }), _jsx("nav", { className: "navigation ".concat(isOpen ? 'open' : ''), children: _jsxs("ul", { className: "nav-list", children: [_jsx("li", { children: _jsx("a", { href: "#greeting", className: "nav-link", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#skills", className: "nav-link", children: "Skills" }) }), _jsx("li", { children: _jsx("a", { href: "#experience", className: "nav-link", children: "Experience" }) }), _jsx("li", { children: _jsx("a", { href: "#projects", className: "nav-link", children: "Projects" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", className: "nav-link", children: "Contact" }) })] }) }), _jsx("button", { className: "theme-toggle-btn", onClick: toggleTheme, "aria-label": isDarkMode ? "Switch to light mode" : "Switch to dark mode", children: isDarkMode ? (_jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 1V3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 21V23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M4.22 4.22L5.64 5.64", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M18.36 18.36L19.78 19.78", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M1 12H3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M21 12H23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M4.22 19.78L5.64 18.36", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M18.36 5.64L19.78 4.22", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] })) : (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7479 21.1181 10.0795 20.7461C8.41108 20.3741 6.8802 19.5345 5.67423 18.3285C4.46826 17.1226 3.62866 15.5917 3.25668 13.9232C2.8847 12.2548 2.99552 10.5148 3.57627 8.90707C4.15703 7.29935 5.18362 5.89027 6.53604 4.84464C7.88845 3.79901 9.51061 3.16017 11.213 3.003C10.2391 4.34511 9.73379 5.95518 9.76823 7.60173C9.80267 9.24827 10.3752 10.8363 11.3957 12.1421C12.4162 13.4479 13.8232 14.3939 15.4001 14.8365C16.9771 15.2791 18.6461 15.1987 20.174 14.608L21 12.79Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })) })] }) }));
};
export default Header;
