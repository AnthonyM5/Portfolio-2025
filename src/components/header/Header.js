import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'; // Import the DarkModeToggle
import './Header.scss';
var Header = function () {
    var _a = useState(false), scrolled = _a[0], setScrolled = _a[1];
    var _b = useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    useEffect(function () {
        var handleScroll = function () {
            var isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        document.addEventListener('scroll', handleScroll);
        return function () {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    var toggleMenu = function () {
        setMenuOpen(!menuOpen);
    };
    var navLinks = [
        { name: 'Home', target: 'greeting' },
        { name: 'Skills', target: 'skills' },
        { name: 'Experience', target: 'experience' },
        { name: 'Projects', target: 'projects' },
        { name: 'Industry', target: 'industries' },
        { name: 'Contact', target: 'contact' }
    ];
    return (_jsx("header", { className: "header ".concat(scrolled ? 'scrolled' : ''), children: _jsxs("div", { className: "header-container", children: [_jsx("a", { href: "/", className: "logo", children: "AM" }), _jsxs("button", { className: "menu-toggle ".concat(menuOpen ? 'active' : ''), onClick: toggleMenu, "aria-label": "Toggle menu", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsx("nav", { className: "nav ".concat(menuOpen ? 'open' : ''), children: _jsxs("ul", { className: "nav-links", children: [navLinks.map(function (link, index) { return (_jsx("li", { children: _jsx(Link, { to: link.target, spy: true, smooth: true, offset: -70, duration: 500, onClick: function () { return setMenuOpen(false); }, activeClass: "active", children: link.name }) }, index)); }), _jsxs("li", { children: [_jsx(DarkModeToggle, {}), " "] })] }) })] }) }));
};
export default Header;
