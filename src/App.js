import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';
import "./App.scss";
// Components
import Header from "@/components/header/Header";
import Greeting from "@/components/greeting/Greeting";
import Footer from "@/components/footer/Footer";
import { TopButton } from "./components/topButton/Top";
import SplashScreen from "./components/splashScreen/SplashScreen";
// Container Components
import { Skills } from "./containers/skills/Skills";
import { Projects } from "./containers/projects/Projects";
import { Achievement } from "./containers/achievement/Achievement";
import { Blogs } from "./containers/blogs/Blogs";
import { Contact } from "./containers/contact/Contact";
import { Experience } from "./containers/experience/Experience";
function App() {
    var _a = useState(true), loading = _a[0], setLoading = _a[1];
    useEffect(function () {
        // Initialize theme from localStorage or system preference
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
        else {
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
        }
        var timer = setTimeout(function () {
            setLoading(false);
        }, 2000);
        return function () { return clearTimeout(timer); };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(AnimatePresence, { children: loading && _jsx(SplashScreen, {}) }), !loading && (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Greeting, {}), _jsx(Skills, {}), _jsx(Experience, {}), _jsx(Projects, {}), _jsx(Achievement, {}), _jsx(Blogs, {}), _jsx(Contact, {})] }), _jsx(Footer, {}), _jsx(TopButton, {})] }))] }));
}
export default App;
