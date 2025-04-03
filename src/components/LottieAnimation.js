var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { loadLottieAnimation } from '../utils/lottieLoader';
// Simple loading component as fallback
var LoadingFallback = function () { return (_jsx("div", { style: { textAlign: 'center', padding: '1rem' }, children: "Loading animation..." })); };
var LottieAnimation = function (_a) {
    var animationPath = _a.animationPath, height = _a.height, width = _a.width, _b = _a.loop, loop = _b === void 0 ? true : _b, _c = _a.autoplay, autoplay = _c === void 0 ? true : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.style, style = _e === void 0 ? {} : _e;
    var _f = useState(null), animationData = _f[0], setAnimationData = _f[1];
    var _g = useState(false), error = _g[0], setError = _g[1];
    useEffect(function () {
        var isMounted = true;
        // Ensure path starts with / for public directory
        var path = animationPath.startsWith('/') ? animationPath : "/".concat(animationPath);
        loadLottieAnimation(path)
            .then(function (data) {
            if (isMounted) {
                setAnimationData(data);
                setError(false);
            }
        })
            .catch(function (err) {
            console.error("Failed to load animation:", path, err);
            if (isMounted) {
                setError(true);
            }
        });
        return function () {
            isMounted = false;
        };
    }, [animationPath]);
    // Apply height and width to style if provided - Fix TypeScript error with correct typing
    var combinedStyle = __assign(__assign(__assign(__assign({}, style), (height ? { height: typeof height === 'number' ? "".concat(height, "px") : height } : {})), (width ? { width: typeof width === 'number' ? "".concat(width, "px") : width } : {})), { visibility: 'visible', opacity: 1, display: 'block' });
    if (error) {
        return _jsx("div", { className: className, style: combinedStyle, children: "Failed to load animation" });
    }
    if (!animationData) {
        return _jsx(LoadingFallback, {});
    }
    return (_jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(Lottie, { animationData: animationData, loop: loop, autoplay: autoplay, style: combinedStyle, className: "lottie-animation ".concat(className), rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
                progressiveLoad: false
            } }) }));
};
export default LottieAnimation;
