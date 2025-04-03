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
import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
var withSplashScreen = function (WrappedComponent) {
    return function (props) {
        var _a = useState(true), loading = _a[0], setLoading = _a[1];
        useEffect(function () {
            // Display splash screen for minimum time
            var timer = setTimeout(function () {
                setLoading(false);
            }, 2500);
            return function () { return clearTimeout(timer); };
        }, []);
        return loading ? _jsx(SplashScreen, {}) : _jsx(WrappedComponent, __assign({}, props));
    };
};
export default withSplashScreen;
