import { jsx as _jsx } from "react/jsx-runtime";
import Lottie from "lottie-react";
var DisplayLottie = function (_a) {
    var animationData = _a.animationData;
    return (_jsx(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { width: "100%", height: "100%" }, rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        } }));
};
export default DisplayLottie;
