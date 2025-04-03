import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./Top.scss"; // Fix the import path to use relative path and SCSS extension
import { FaArrowUp } from "react-icons/fa";
export var TopButton = function () {
    var _a = useState(false), isVisible = _a[0], setIsVisible = _a[1];
    useEffect(function () {
        var toggleVisibility = function () {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return function () {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (_jsx(_Fragment, { children: isVisible && (_jsx("button", { className: "top-btn", onClick: scrollToTop, "aria-label": "Scroll to top", children: _jsx(FaArrowUp, {}) })) }));
};
