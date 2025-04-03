import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolio } from '@/config/portfolio';
import './Blogs.scss';
export var Blogs = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    var itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (_jsx("section", { className: "blogs-section", id: "industries", ref: ref, children: _jsxs("div", { className: "blogs-container", children: [_jsx(motion.h2, { className: "section-title", initial: { opacity: 0, y: -20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }, transition: { duration: 0.6 }, children: portfolio.blogs.title }), _jsx(motion.p, { className: "section-subtitle", initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: portfolio.blogs.subtitle }), _jsx(motion.div, { className: "blogs-grid", variants: containerVariants, initial: "hidden", animate: inView ? "visible" : "hidden", children: portfolio.blogs.blogs.map(function (blog, index) { return (_jsxs(motion.div, { className: "blog-card", variants: itemVariants, children: [_jsxs("div", { className: "blog-image", children: [_jsx("img", { src: blog.image, alt: blog.title }), _jsx("div", { className: "blog-date", children: blog.date })] }), _jsxs("div", { className: "blog-content", children: [_jsx("span", { className: "blog-category", children: blog.category }), _jsx("h3", { children: blog.title }), _jsx("p", { children: blog.summary }), _jsx("a", { href: blog.url, target: "_blank", rel: "noreferrer", className: "read-more", children: "Read More" })] })] }, index)); }) }), _jsx(motion.div, { className: "blogs-cta", initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6, delay: 0.4 } })] }) }));
};
export default Blogs;
