import { jsx as _jsx } from "react/jsx-runtime";
import LottieAnimation from "../LottieAnimation";
var DisplayLottie = function (_a) {
    var animationPath = _a.animationPath, className = _a.className;
    return (_jsx(LottieAnimation, { animationPath: animationPath, loop: true, autoplay: true, className: className, style: { width: "100%", height: "100%" } }));
};
export default DisplayLottie;
