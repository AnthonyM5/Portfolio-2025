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
import { Suspense } from "react";
import Lottie from "lottie-react";
// Simple loading component as fallback
var LoadingFallback = function () { return (_jsx("div", { style: { textAlign: 'center', padding: '1rem' }, children: "Loading animation..." })); };
var LottieAnimation = function (_a) {
    var animationData = _a.animationData, height = _a.height, width = _a.width, _b = _a.loop, loop = _b === void 0 ? true : _b, _c = _a.autoplay, autoplay = _c === void 0 ? true : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.style, style = _e === void 0 ? {} : _e;
    // Prepare options for Lottie component
    var options = {
        animationData: animationData,
        loop: loop,
        autoplay: autoplay,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };
    // Apply height and width to style if provided
    var combinedStyle = __assign(__assign(__assign({}, style), (height ? { height: "".concat(height, "px") } : {})), (width ? { width: "".concat(width, "px") } : {}));
    return (_jsx(Suspense, { fallback: _jsx(LoadingFallback, {}), children: _jsx(Lottie, __assign({}, options, { style: combinedStyle, className: className })) }));
};
export default LottieAnimation;
