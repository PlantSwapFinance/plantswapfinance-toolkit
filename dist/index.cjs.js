'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate$1 = styled.keyframes(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled__default['default'].svg(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$S, templateObject_2$k, templateObject_3$9;

var Icon$2b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$2a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$29 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$28 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$R;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$5 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$5.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$5.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$5.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.plant-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.plant-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled__default['default'].button(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$Q;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("plant-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("plant-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$5.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$P;

var Icon$27 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$26 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$25 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$24 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$23 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$22 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$21 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$20 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1$ = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M91.495 223.425c-9.76-9.762-30.33-5.014-45.946 10.605-15.616 15.62-20.363 36.196-10.603 45.958s30.33 5.014 45.946-10.606c15.615-15.619 20.362-36.195 10.603-45.957z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M49.124 230.561l35.343 35.351-7.069 7.071-35.343-35.352 7.069-7.07zM37.098 246.756l31.102 31.11-7.069 7.07-31.102-31.11 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M63.288 251.786s-6.4-70.004-38.193-38.202c-31.794 31.802 38.193 38.202 38.193 38.202z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M77.408 230.488l7.07 7.07-7.07 7.071-7.068-7.071 7.068-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M66.372 247.774l18.096 18.101-7.069 7.07-18.096-18.1 7.069-7.071zM37.098 246.756l31.102 31.11-7.069 7.07-31.102-31.11 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M63.288 256.786h-.5c-4.4-.4-43.492-4.5-50.09-22.501-2.7-7.5.3-15.601 8.798-24.201 8.498-8.601 16.697-11.501 24.195-8.801 18.097 6.501 22.096 45.603 22.496 50.103.1 1.5-.4 2.9-1.4 4-1 .8-2.2 1.4-3.5 1.4zm-22.996-46.502c-4 0-8.398 3.6-11.698 6.8-3.799 3.8-8.098 9.301-6.498 13.701 2.9 8.1 22.295 13.201 35.393 15.201-2.2-14.701-7.699-32.602-15.197-35.402-.7-.2-1.3-.3-2-.3zM77.408 230.488l7.07 7.07-7.07 7.071-7.068-7.071 7.068-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M48.49 290.088c-6.898 0-12.797-2.2-17.096-6.6-8.898-8.901-8.698-24.602.5-40.002l8.598 5.1c-6.599 11.2-7.398 22.401-2 27.901 3.5 3.501 9.199 4.501 16.097 2.9 7.799-1.8 15.897-6.6 22.796-13.5 6.898-6.901 11.698-15.001 13.497-22.801 1.6-6.901.6-12.701-2.9-16.101-5.498-5.501-16.696-4.701-27.894 2l-5.099-8.601c15.397-9.2 31.194-9.3 39.992-.5 5.999 6.001 7.999 15.001 5.599 25.402-2.2 9.6-7.998 19.401-16.197 27.601-8.198 8.201-17.996 13.901-27.594 16.201-2.8.7-5.599 1-8.299 1z" })));
};

var Icon$1_ = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M386.724 280.488c4 4.1 6.199 8.5 6.199 13 0 9.301-9.098 18.001-24.695 25.102 4.299 3.9 6.699 8.1 6.699 12.4 0 9.601-11.398 18.301-30.094 24.902 5.199 3.8 8.098 8.1 8.098 12.6 0 10.901-17.297 20.501-43.591 26.102 4.199 3.4 6.598 7.3 6.598 11.4 0 13.801-26.894 25.002-59.988 25.002s-59.988-11.201-59.988-25.002c0-4.1 2.399-8 6.598-11.4-26.294-5.601-43.591-15.201-43.591-26.102 0-4.5 2.899-8.7 8.098-12.6-18.796-6.601-30.094-15.401-30.094-24.902 0-4.4 2.4-8.5 6.699-12.4-15.597-7.101-24.695-15.701-24.695-25.102 0-4.5 2.199-8.9 6.199-13-12.198-7.301-19.197-15.601-19.197-24.502 0-8.9 6.999-17.201 19.197-24.501-4-4.1-6.199-8.5-6.199-13.001 0-9.3 9.098-18.001 24.695-25.101-4.299-3.9-6.699-8.1-6.699-12.401 0-9.6 11.398-18.301 30.094-24.901-5.199-3.9-8.098-8.1-8.098-12.601 0-10.9 17.297-20.501 43.591-26.101-4.199-3.4-6.598-7.301-6.598-11.401 0-12 20.196-22 47.191-24.401l12.797-25.601 12.798 25.601c26.994 2.4 47.19 12.4 47.19 24.401 0 4.1-2.399 8.001-6.598 11.401 26.294 5.6 43.591 15.201 43.591 26.101 0 4.501-2.899 8.701-8.098 12.601 18.796 6.6 30.094 15.401 30.094 24.901 0 4.401-2.4 8.501-6.699 12.401 15.597 7.1 24.695 15.701 24.695 25.101 0 4.501-2.199 8.901-6.199 13.001 12.198 7.3 19.197 15.601 19.197 24.501 0 8.901-6.999 17.201-19.197 24.502z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M315.938 405.994c0 13.801-26.894 25.002-59.988 25.002s-59.988-11.201-59.988-25.002c0-4.1 2.399-8 6.598-11.4 15.297 3.3 33.694 5.2 53.39 5.2 19.696 0 38.093-1.9 53.39-5.2 4.199 3.4 6.598 7.3 6.598 11.4zM189.263 166.181s-20.996 16.101-48.391 5.201c4.8-5.801 13.998-11.001 26.195-15.301 5.299 3.8 12.898 7.2 22.196 10.1zM368.628 168.982c-20.396 23.501-72.186 2.9-72.186 2.9 21.496-3.2 38.793-8.801 48.291-15.801 10.598 3.7 18.796 8 23.895 12.901zM243.153 81.577l-12.198 24.401s-17.397 1-32.894 6.601c-1.399-2.1-2.099-4.301-2.099-6.601 0-12 20.196-22 47.191-24.401zM315.938 105.978c0 2.5-.9 4.901-2.499 7.201 0 0-8.199-7.701-32.494-7.201l-12.198-24.401c26.995 2.4 47.191 12.4 47.191 24.401z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M484.121 174.295c9.76-9.762 5.013-30.338-10.602-45.958-15.616-15.619-36.187-20.367-45.947-10.605-9.759 9.762-5.012 30.338 10.603 45.957 15.616 15.62 36.187 20.368 45.946 10.606z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M470.044 124.69l7.069 7.071-35.343 35.352-7.069-7.071 35.343-35.352zM481.782 141.174l7.069 7.071-30.607 30.614-7.069-7.07 30.607-30.615z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M449.612 139.68s-60.088 10.601-29.294 41.402c31.394 31.402 29.294-41.402 29.294-41.402zM449.612 139.68s72.186 1.5 41.392-29.301c-31.394-31.502-41.392 29.301-41.392 29.301z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M355.931 507c13.804 0 24.995-17.91 24.995-40.002 0-22.093-11.191-40.003-24.995-40.003-13.805 0-24.996 17.91-24.996 40.003 0 22.092 11.191 40.002 24.996 40.002z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M330.935 461.997h49.991v10.001h-49.991v-10.001zM333.935 481.998h43.991v10.001h-43.991v-10.001z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M355.931 458.097s-49.991-35.002-49.991 8.501c0 44.502 49.991-8.501 49.991-8.501zM355.931 458.097s49.99 52.103 49.99 8.501c0-44.403-49.99-8.501-49.99-8.501z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M91.495 223.425c-9.76-9.762-30.33-5.014-45.946 10.605-15.616 15.62-20.363 36.196-10.603 45.958s30.33 5.014 45.946-10.606c15.615-15.619 20.362-36.195 10.603-45.957z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M49.124 230.561l35.343 35.352-7.069 7.07-35.343-35.352 7.069-7.07zM37.098 246.756L68.2 277.865l-7.069 7.071-31.102-31.11 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M63.288 251.786s-6.4-70.004-38.193-38.202c-31.794 31.802 38.193 38.202 38.193 38.202z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M77.408 230.488l7.07 7.07-7.07 7.071-7.068-7.071 7.068-7.07z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M392.923 293.488c0 .6 0 1.2-.1 1.8-33.793 8.701-96.381 8.801-96.381 8.801 38.693-3.6 70.986-12.301 90.282-23.701 4 4.2 6.199 8.6 6.199 13.1zM189.263 300.589s-35.893 7.9-68.287.3c-1.299-2.4-1.999-5.101-1.999-7.601 0-4.5 2.199-8.2 6.199-13.2 14.697 8.9 37.092 16 64.087 20.501zM179.065 254.686s-47.291 21.901-69.886-8.9c3.199-5.101 8.598-9.901 15.997-14.301 9.298 9.601 28.494 17.701 53.889 23.201zM402.221 244.986c-87.183 45.002-146.271 17.301-146.271 17.301 61.388 0 113.378-12.901 130.774-30.702 6.999 4.1 12.298 8.6 15.497 13.401zM209.559 215.484s-38.792 19.901-85.883-8.3c4.199-5.001 11.098-9.601 20.096-13.801 10.998 10 35.093 18.001 65.787 22.101zM386.525 205.284c-16.897 18.301-53.59 4.3-53.59 4.3 15.897-4.3 28.195-9.801 35.193-16.101 7.999 3.5 14.197 7.5 18.397 11.801zM374.927 330.99c0 .7-.1 1.5-.2 2.2-21.496 1.101-41.692-3.5-41.692-3.5 13.797-3 25.695-6.8 35.193-11.1 4.299 3.9 6.699 8 6.699 12.4zM255.95 337.291s-62.388 18.101-118.377-2.501c-.4-1.2-.6-2.5-.6-3.7 0-4.4 2.4-8.5 6.699-12.4 24.795 11.2 65.787 18.601 112.278 18.601zM255.95 368.492s-47.391 21.101-96.981.3v-.3c0-4.5 2.899-8.7 8.098-12.6 21.796 7.7 53.59 12.6 88.883 12.6zM352.931 368.492v.9c-21.896-.5-43.791-4.9-43.791-4.9 13.597-2.1 25.695-5.1 35.693-8.6 5.199 3.9 8.098 8.1 8.098 12.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M262.449 354.992c0 9.8-6.499 13.5-6.499 13.5-13.697 0-26.895-.7-39.192-2.1-3.6-6.3-7.799-17.301-4.699-31.501 13.797 1.5 28.494 2.3 43.791 2.3.1.1 6.599 8.1 6.599 17.801z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M216.758 366.392c4.499.5 8.998.9 13.697 1.2-7.499-13.6-3.499-31.401-3.499-31.401-5.099-.3-9.998-.8-14.797-1.3-3.2 14.2.999 25.201 4.599 31.501z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M296.942 309.089l-.9-10c59.789-5.501 104.88-24.102 104.88-43.103h9.998c0 13.301-11.798 25.402-34.094 35.102-20.096 8.701-48.49 15.101-79.884 18.001zM188.463 305.689c-54.789-9.101-87.483-27.702-87.483-49.703h9.998c0 16.001 31.794 32.002 79.085 39.902l-1.6 9.801zM177.965 259.787c-40.692-8.801-63.987-23.802-63.987-40.803h9.998c0 11.001 21.996 23.802 56.089 31.202l-2.1 9.601zM255.95 267.287v-10.001c77.785 0 131.974-20.301 131.974-38.302h9.998c0 14.001-15.097 26.302-43.591 35.402-26.395 8.501-61.288 12.901-98.381 12.901zM208.859 220.484c-48.09-6.4-76.885-21.201-76.885-39.502h9.998c0 10.201 23.396 23.602 68.187 29.602l-1.3 9.9zM334.335 214.384l-2.6-9.7c28.195-7.501 38.193-17.201 38.193-23.702h9.998c0 13.701-16.197 25.502-45.591 33.402zM187.763 171.182c-22.095-6.701-33.793-16.201-33.793-27.202h9.998c0 4.001 6.999 11.801 26.795 17.801l-3 9.401zM297.242 177.082l-1.5-9.8c34.294-5.101 52.19-16.301 52.19-23.302h9.998c0 15.001-22.695 27.502-60.688 33.102zM258.45 372.793l-4.999-8.701c.1-.1 3.999-2.6 3.999-9.2 0-5.301-2.5-10.201-4.099-12.801-36.093-.2-69.987-4.6-95.782-12.801-28.494-9-43.591-21.301-43.591-35.302h9.998c0 18.001 54.189 38.502 131.974 38.502 1.5 0 2.899.6 3.899 1.701.3.4 7.599 9.4 7.599 20.801 0 10-5.699 15.9-8.998 17.801zM334.035 334.79l-2.1-9.6c33.994-7.4 55.989-20.201 55.989-31.202h9.998c0 17.001-23.295 32.002-63.887 40.802z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 373.493c-60.088 0-123.976-14.901-123.976-42.503h9.998c0 7.301 11.998 15.701 31.394 21.701 21.996 6.901 51.39 10.801 82.584 10.801v10.001zM309.84 369.492l-1.6-9.9c42.292-6.701 61.588-19.501 61.588-28.602h9.998c.1 17.201-26.095 31.602-69.986 38.502z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 373.493c-13.597 0-26.995-.7-39.692-2.101-1.6-.2-3-1.1-3.799-2.5-4.3-7.5-8.599-19.601-5.199-35.002.499-2.5 2.899-4.2 5.398-3.9 13.898 1.5 28.395 2.3 43.292 2.3 1.5 0 2.899.7 3.899 1.8.3.401 7.599 9.501 7.599 20.902 0 10-5.699 15.9-8.998 17.801-.8.5-1.6.7-2.5.7zm-35.993-11.801c10.998 1.1 22.596 1.7 34.293 1.8 1.2-1.1 3.2-3.8 3.2-8.5 0-5.301-2.5-10.201-4.099-12.801-12.698-.1-25.096-.7-37.093-1.8-1 8.9 1.2 16.201 3.699 21.301z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 405.294c-49.39 0-101.98-13.3-101.98-36.302h9.998c0 10.001 34.993 26.302 91.982 26.302s91.982-16.301 91.982-26.302h9.998c0 23.002-52.59 36.302-101.98 36.302z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M236.054 434.596c-27.395-3.9-45.091-15.101-45.091-28.602 0-2.3.5-5.2 2.399-8.5-25.495-6.7-39.392-16.801-39.392-29.002 0-3.8 1.3-7.4 3.999-10.8-17.097-7.301-25.995-16.501-25.995-26.702 0-3.8 1.2-7.4 3.6-10.9-17.697-9.601-21.596-19.601-21.596-26.602 0-4.1 1.299-8 3.799-11.8-13.697-9.601-16.797-19.101-16.797-25.702 0-6.6 3.1-16.101 16.797-25.701-2.5-3.8-3.799-7.8-3.799-11.801 0-7 3.899-17.101 21.596-26.601-2.4-3.5-3.6-7.101-3.6-10.901 0-10.3 8.898-19.401 25.995-26.701-2.699-3.4-3.999-7.001-3.999-10.801 0-12.2 13.897-22.401 39.392-29.001-1.899-3.2-2.399-6.201-2.399-8.501 0-14.3 19.596-25.901 48.99-29.101l5.399-10.9 8.898 4.5-6.698 13.3c-.8 1.5-2.3 2.6-4 2.7-26.394 2.4-42.691 12-42.691 19.501 0 3 2.599 5.801 4.799 7.501 1.5 1.2 2.199 3.2 1.7 5.1-.5 1.9-1.9 3.3-3.8 3.7-27.394 5.8-39.692 14.801-39.692 21.201 0 3.3 3.299 6.501 6.099 8.501 1.5 1.1 2.299 2.9 1.999 4.8-.3 1.9-1.499 3.4-3.299 4-16.697 5.901-26.695 13.501-26.695 20.201 0 2.8 1.7 5.701 5.099 8.701 1.3 1.1 1.9 2.8 1.6 4.5-.3 1.7-1.3 3.1-2.899 3.8-13.998 6.401-21.796 13.701-21.796 20.501 0 3.1 1.599 6.301 4.799 9.501 1.1 1.1 1.6 2.6 1.4 4.1-.2 1.5-1.1 2.9-2.4 3.6-7.598 4.5-16.697 11.701-16.697 20.201 0 8.501 9.099 15.601 16.697 20.201 1.3.8 2.2 2.1 2.4 3.601.2 1.5-.3 3-1.4 4.1-3.2 3.2-4.799 6.4-4.799 9.5 0 6.801 7.698 14.101 21.796 20.501a5.175 5.175 0 012.899 3.801c.3 1.7-.3 3.4-1.6 4.5-3.399 3-5.099 5.9-5.099 8.7 0 6.701 9.998 14.301 26.795 20.201 1.7.6 2.999 2.1 3.299 4.001.3 1.9-.499 3.7-1.999 4.8-2.8 2-6.099 5.2-6.099 8.5 0 6.401 12.298 15.401 39.692 21.201 1.9.4 3.4 1.801 3.799 3.701.4 1.9-.199 3.8-1.699 5.1-2.2 1.8-4.799 4.5-4.799 7.5 0 6.601 12.797 15.401 36.493 18.701l-1.4 10.101zM255.95 435.996v-10.001c31.494 0 54.989-10.6 54.989-20.001 0-3-2.599-5.8-4.799-7.5-1.499-1.2-2.199-3.2-1.699-5.1.499-1.9 1.899-3.3 3.799-3.701 27.394-5.8 39.692-14.8 39.692-21.201 0-3.3-3.299-6.5-6.099-8.5-1.499-1.1-2.299-2.9-1.999-4.8.3-1.9 1.499-3.401 3.299-4.001 16.797-5.9 26.795-13.5 26.795-20.201 0-2.8-1.7-5.7-5.099-8.7-1.3-1.1-1.9-2.8-1.6-4.5.3-1.7 1.3-3.101 2.9-3.801 13.997-6.4 21.795-13.7 21.795-20.501 0-3.1-1.599-6.3-4.799-9.5-1.1-1.1-1.6-2.6-1.4-4.1.2-1.5 1.1-2.901 2.4-3.601 7.599-4.5 16.697-11.7 16.697-20.201 0-8.5-9.098-15.601-16.697-20.201-1.3-.8-2.2-2.1-2.4-3.6-.2-1.5.3-3 1.4-4.1 3.2-3.2 4.799-6.401 4.799-9.501 0-6.8-7.698-14.1-21.795-20.501-1.5-.7-2.6-2.1-2.9-3.8-.3-1.7.3-3.4 1.6-4.5 3.399-3 5.099-5.901 5.099-8.701 0-6.7-9.998-14.3-26.795-20.201-1.7-.6-2.999-2.1-3.299-4-.3-1.9.5-3.7 1.999-4.8 2.8-2 6.099-5.201 6.099-8.501 0-6.4-12.298-15.401-39.692-21.201-1.9-.4-3.4-1.8-3.799-3.7-.4-1.9.2-3.8 1.699-5.1 2.2-1.8 4.799-4.501 4.799-7.501 0-7.5-16.297-17.1-42.691-19.5-1.7-.2-3.2-1.2-4-2.7l-5.898-11.901 8.898-4.5 4.699 9.4c29.394 3.2 48.99 14.8 48.99 29.101 0 2.3-.5 5.201-2.399 8.501 25.495 6.7 39.392 16.801 39.392 29.001 0 3.8-1.3 7.401-3.999 10.801 17.097 7.3 25.995 16.501 25.995 26.701 0 3.801-1.2 7.401-3.599 10.901 17.696 9.6 21.595 19.601 21.595 26.601 0 4.101-1.299 8.001-3.799 11.801 13.697 9.6 16.797 19.101 16.797 25.701 0 6.601-3.1 16.101-16.797 25.702 2.5 3.8 3.799 7.8 3.799 11.8 0 7.001-3.899 17.101-21.595 26.602 2.399 3.5 3.599 7.1 3.599 10.9 0 10.301-8.898 19.401-25.995 26.702 2.699 3.4 3.999 7 3.999 10.8 0 12.201-13.897 22.402-39.392 29.002 1.899 3.2 2.399 6.2 2.399 8.5 0 17.001-27.894 29.902-64.987 29.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M238.621 79.199l8.938 4.47-12.2 24.408-8.939-4.471 12.201-24.407zM273.158 79.155l12.201 24.408-8.939 4.47-12.2-24.407 8.938-4.47zM434.015 193.983c-5.299 0-11.098-3.1-17.296-9.301-8.799-8.8-11.998-17.3-9.399-25.301 5.599-17.701 37.793-23.901 41.392-24.501 1.4-.3 2.9.1 4 1 1.099.9 1.799 2.3 1.799 3.7.2 7.7.5 46.503-15.297 53.303-1.599.7-3.399 1.1-5.199 1.1zm10.598-48.103c-11.198 2.901-25.395 8.801-27.794 16.401-1.3 4.201.999 9.301 6.998 15.301 4.899 4.9 9.098 7.2 11.498 6.2 5.799-2.6 9.098-20.601 9.298-37.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M452.312 144.68h-2.8c-1.399 0-2.799-.7-3.699-1.8-.9-1.1-1.3-2.6-1.1-4 .6-3.7 6.399-36.002 24.095-41.702 8.099-2.6 16.797.6 25.795 9.6 8.099 8.101 10.898 15.601 8.099 22.102-6.299 14.5-38.693 15.8-50.39 15.8zm21.895-38.302c-.799 0-1.599.1-2.399.4-7.599 2.4-13.398 16.701-16.097 28.002 17.297-.4 35.193-3.9 37.693-9.601.999-2.3-1.2-6.4-5.899-11.1-5.099-5.201-9.498-7.701-13.298-7.701z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M458.734 136.003l7.069 7.07L453.08 155.8l-7.069-7.07 12.723-12.727zM482.136 140.821l7.068 7.07-31.314 31.322-7.068-7.07 31.314-31.322zM316.238 489.299c-1.799 0-3.599-.3-5.299-1-6.698-2.7-10.098-10.001-10.098-21.801 0-12.401 3.8-20.702 11.298-24.602 16.497-8.6 43.592 9.801 46.591 11.901 1.2.8 2 2.1 2.1 3.6.1 1.4-.3 2.9-1.3 3.9-4.699 5.201-27.095 28.002-43.292 28.002zm6.099-39.602c-2.1 0-3.999.4-5.499 1.2-3.899 2-5.899 7.3-5.899 15.701 0 7 1.4 11.5 3.8 12.5 6.298 2.5 22.195-9.4 33.293-20.101-7.798-4.7-18.196-9.3-25.695-9.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M395.623 488.999c-16.097 0-38.593-22.501-43.292-27.402-1-1-1.5-2.5-1.4-3.9.1-1.4.9-2.8 2.1-3.6 2.999-2.2 29.894-20.901 46.491-12.401 7.598 3.9 11.398 12.301 11.398 25.002 0 11.5-3.3 18.701-9.898 21.401-1.7.6-3.5.9-5.399.9zm-31.794-30.102c12.497 11.901 27.595 22.201 33.393 19.801 2.3-.9 3.7-5.3 3.7-12.1 0-8.701-2-14.101-5.999-16.101-7.599-3.901-22.396 3.1-31.094 8.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M346.932 461.997h17.997v10.001h-17.997v-10.001zM333.935 481.998h43.991v10.001h-43.991v-10.001zM66.372 247.774l18.096 18.101-7.069 7.07-18.096-18.1 7.069-7.071zM37.098 246.756L68.2 277.865l-7.069 7.071-31.102-31.11 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M63.288 256.786h-.5c-4.4-.4-43.492-4.5-50.09-22.501-2.7-7.5.3-15.601 8.798-24.201 8.498-8.601 16.697-11.501 24.195-8.801 18.097 6.501 22.096 45.603 22.496 50.103.1 1.5-.4 2.9-1.4 4-1 .8-2.2 1.4-3.5 1.4zm-22.996-46.502c-4 0-8.398 3.6-11.698 6.8-3.799 3.8-8.098 9.301-6.498 13.701 2.9 8.1 22.295 13.201 35.393 15.201-2.2-14.701-7.699-32.602-15.197-35.402-.7-.2-1.3-.3-2-.3zM77.408 230.488l7.07 7.07-7.07 7.071-7.068-7.071 7.068-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M48.49 290.088c-6.898 0-12.797-2.2-17.096-6.6-8.898-8.901-8.698-24.602.5-40.002l8.598 5.1c-6.599 11.201-7.398 22.401-2 27.901 3.5 3.501 9.199 4.501 16.097 2.901 7.799-1.801 15.897-6.601 22.796-13.501 6.898-6.901 11.698-15.001 13.497-22.801 1.6-6.901.6-12.701-2.9-16.101-5.498-5.501-16.696-4.701-27.894 2l-5.099-8.601c15.397-9.2 31.194-9.3 39.992-.5 5.999 6.001 7.999 15.001 5.599 25.402-2.2 9.6-7.998 19.401-16.197 27.601-8.198 8.201-17.996 13.901-27.594 16.201-2.8.7-5.599 1-8.299 1zM470.508 184.382c-8.198 0-17.396-3.1-26.395-9.3l5.699-8.2c12.098 8.3 24.795 9.9 30.794 3.9 5.999-6.001 4.299-19.101-3.999-31.002l8.198-5.7c11.498 16.501 12.598 34.102 2.9 43.802-4.399 4.3-10.398 6.5-17.197 6.5zM421.918 149.281c-6.499-13.801-5.699-27.302 2.199-35.102 7.799-7.801 21.096-8.601 34.893-2.3l-4.199 9.1c-9.798-4.5-18.896-4.4-23.595.3-4.799 4.8-4.799 13.901-.2 23.801l-9.098 4.201zM355.93 512c-13.697 0-25.295-13.201-28.894-32.702l9.798-1.8c2.7 14.501 10.498 24.501 19.096 24.501 8.499 0 16.497-10.4 19.097-24.801l9.798 1.8C381.326 498.699 369.728 512 355.93 512zM338.934 448.697l-9.398-3.401c5.199-14.4 15.297-23.301 26.394-23.301 10.998 0 20.996 8.801 26.295 23.001l-9.398 3.501c-3.699-10.201-10.198-16.501-16.897-16.501-6.698 0-13.197 6.4-16.996 16.701z" })));
};

var Icon$1Z = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M386.724 280.488c4 4.1 6.199 8.5 6.199 13 0 9.301-9.098 18.001-24.695 25.102 4.299 3.9 6.699 8.1 6.699 12.4 0 9.601-11.398 18.301-30.094 24.902 5.199 3.8 8.098 8.1 8.098 12.6 0 10.901-17.297 20.501-43.591 26.102 4.199 3.4 6.598 7.3 6.598 11.4 0 13.801-26.894 25.002-59.988 25.002s-59.988-11.201-59.988-25.002c0-4.1 2.399-8 6.598-11.4-26.294-5.601-43.591-15.201-43.591-26.102 0-4.5 2.899-8.7 8.098-12.6-18.796-6.601-30.094-15.401-30.094-24.902 0-4.4 2.4-8.5 6.699-12.4-15.597-7.101-24.695-15.701-24.695-25.102 0-4.5 2.199-8.9 6.199-13-12.198-7.301-19.197-15.601-19.197-24.502 0-8.9 6.999-17.201 19.197-24.501-4-4.1-6.199-8.5-6.199-13.001 0-9.3 9.098-18.001 24.695-25.101-4.299-3.9-6.699-8.1-6.699-12.401 0-9.6 11.398-18.301 30.094-24.901-5.199-3.9-8.098-8.1-8.098-12.601 0-10.9 17.297-20.501 43.591-26.101-4.199-3.4-6.598-7.301-6.598-11.401 0-12 20.196-22 47.191-24.401l12.797-25.601 12.798 25.601c26.994 2.4 47.19 12.4 47.19 24.401 0 4.1-2.399 8.001-6.598 11.401 26.294 5.6 43.591 15.201 43.591 26.101 0 4.501-2.899 8.701-8.098 12.601 18.796 6.6 30.094 15.401 30.094 24.901 0 4.401-2.4 8.501-6.699 12.401 15.597 7.1 24.695 15.701 24.695 25.101 0 4.501-2.199 8.901-6.199 13.001 12.198 7.3 19.197 15.601 19.197 24.501 0 8.901-6.999 17.201-19.197 24.502z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M315.938 405.994c0 13.801-26.894 25.002-59.988 25.002s-59.988-11.201-59.988-25.002c0-4.1 2.399-8 6.598-11.4 15.297 3.3 33.694 5.2 53.39 5.2 19.696 0 38.093-1.9 53.39-5.2 4.199 3.4 6.598 7.3 6.598 11.4zM189.263 166.181s-20.996 16.101-48.391 5.201c4.8-5.801 13.998-11.001 26.195-15.301 5.299 3.8 12.898 7.2 22.196 10.1zM368.628 168.982c-20.396 23.501-72.186 2.9-72.186 2.9 21.496-3.2 38.793-8.801 48.291-15.801 10.598 3.7 18.796 8 23.895 12.901zM243.153 81.577l-12.198 24.401s-17.397 1-32.894 6.601c-1.399-2.101-2.099-4.301-2.099-6.601 0-12 20.196-22.001 47.191-24.401zM315.938 105.978c0 2.5-.9 4.9-2.499 7.201 0 0-8.199-7.701-32.494-7.201l-12.198-24.401c26.995 2.4 47.191 12.4 47.191 24.401zM392.923 293.488c0 .6 0 1.2-.1 1.8-33.793 8.701-96.381 8.801-96.381 8.801 38.693-3.6 70.986-12.301 90.282-23.701 4 4.2 6.199 8.6 6.199 13.1zM189.263 300.589s-35.893 7.9-68.287.3c-1.299-2.4-1.999-5.101-1.999-7.601 0-4.5 2.199-8.2 6.199-13.2 14.697 8.9 37.092 16 64.087 20.501zM179.065 254.686s-47.291 21.901-69.886-8.9c3.199-5.101 8.598-9.901 15.997-14.301 9.298 9.601 28.494 17.701 53.889 23.201zM402.221 244.986c-87.183 45.002-146.271 17.301-146.271 17.301 61.388 0 113.378-12.901 130.774-30.702 6.999 4.1 12.298 8.6 15.497 13.401zM209.559 215.484s-38.792 19.901-85.883-8.3c4.199-5.001 11.098-9.601 20.096-13.801 10.998 10 35.093 18.001 65.787 22.101zM386.525 205.284c-16.897 18.301-53.59 4.3-53.59 4.3 15.897-4.3 28.195-9.801 35.193-16.101 7.999 3.5 14.197 7.5 18.397 11.801zM374.927 330.99c0 .7-.1 1.5-.2 2.2-21.496 1.101-41.692-3.5-41.692-3.5 13.797-3 25.695-6.8 35.193-11.1 4.299 3.9 6.699 8 6.699 12.4zM255.95 337.291s-62.388 18.101-118.377-2.501c-.4-1.2-.6-2.5-.6-3.7 0-4.4 2.4-8.5 6.699-12.4 24.795 11.2 65.787 18.601 112.278 18.601zM255.95 368.492s-47.391 21.101-96.981.3v-.3c0-4.5 2.899-8.7 8.098-12.6 21.796 7.7 53.59 12.6 88.883 12.6zM352.931 368.492v.9c-21.896-.5-43.791-4.9-43.791-4.9 13.597-2.1 25.695-5.1 35.693-8.6 5.199 3.9 8.098 8.1 8.098 12.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M262.449 354.992c0 9.8-6.499 13.5-6.499 13.5-13.697 0-26.895-.7-39.192-2.1-3.6-6.3-7.799-17.301-4.699-31.501 13.797 1.5 28.494 2.3 43.791 2.3.1.1 6.599 8.1 6.599 17.801z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M216.758 366.392c4.499.5 8.998.9 13.697 1.2-7.499-13.6-3.499-31.401-3.499-31.401-5.099-.3-9.998-.8-14.797-1.3-3.2 14.2.999 25.201 4.599 31.501z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M296.942 309.089l-.9-10c59.789-5.501 104.88-24.102 104.88-43.103h9.998c0 13.301-11.798 25.402-34.094 35.102-20.096 8.701-48.49 15.101-79.884 18.001zM188.463 305.689c-54.789-9.1-87.483-27.701-87.483-49.703h9.998c0 16.001 31.794 32.002 79.085 39.902l-1.6 9.801zM177.965 259.787c-40.692-8.801-63.987-23.802-63.987-40.803h9.998c0 11.001 21.996 23.802 56.089 31.202l-2.1 9.601zM255.95 267.287v-10.001c77.785 0 131.974-20.301 131.974-38.302h9.998c0 14.001-15.097 26.302-43.591 35.402-26.395 8.501-61.288 12.901-98.381 12.901zM208.859 220.484c-48.09-6.4-76.885-21.201-76.885-39.502h9.998c0 10.201 23.396 23.602 68.187 29.602l-1.3 9.9zM334.335 214.384l-2.6-9.7c28.195-7.501 38.193-17.201 38.193-23.702h9.998c0 13.701-16.197 25.502-45.591 33.402zM187.763 171.182c-22.095-6.701-33.793-16.201-33.793-27.202h9.998c0 4 6.999 11.801 26.795 17.801l-3 9.401zM297.242 177.082l-1.5-9.8c34.294-5.101 52.19-16.301 52.19-23.302h9.998c0 15.001-22.695 27.502-60.688 33.102zM258.45 372.793l-4.999-8.701c.1-.1 3.999-2.6 3.999-9.2 0-5.301-2.5-10.201-4.099-12.801-36.093-.2-69.987-4.6-95.782-12.801-28.494-9-43.591-21.301-43.591-35.302h9.998c0 18.001 54.189 38.502 131.974 38.502 1.5 0 2.899.6 3.899 1.701.3.4 7.599 9.4 7.599 20.801 0 10-5.699 15.9-8.998 17.801zM334.035 334.79l-2.1-9.6c33.994-7.4 55.989-20.201 55.989-31.202h9.998c0 17.001-23.295 32.002-63.887 40.802z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 373.493c-60.088 0-123.976-14.901-123.976-42.503h9.998c0 7.301 11.998 15.701 31.394 21.702 21.996 6.9 51.39 10.8 82.584 10.8v10.001zM309.84 369.492l-1.6-9.9c42.292-6.7 61.588-19.501 61.588-28.602h9.998c.1 17.201-26.095 31.602-69.986 38.502z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 373.493c-13.597 0-26.995-.7-39.692-2.101-1.6-.2-3-1.1-3.799-2.5-4.3-7.5-8.599-19.601-5.199-35.002.499-2.5 2.899-4.2 5.398-3.9 13.898 1.5 28.395 2.3 43.292 2.3 1.5 0 2.899.7 3.899 1.8.3.401 7.599 9.501 7.599 20.902 0 10-5.699 15.9-8.998 17.801-.8.5-1.6.7-2.5.7zm-35.993-11.801c10.998 1.1 22.596 1.7 34.293 1.8 1.2-1.1 3.2-3.8 3.2-8.5 0-5.301-2.5-10.201-4.099-12.801-12.698-.1-25.096-.7-37.093-1.8-1 8.9 1.2 16.201 3.699 21.301z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 405.294c-49.39 0-101.98-13.3-101.98-36.302h9.998c0 10.001 34.993 26.302 91.982 26.302s91.982-16.301 91.982-26.302h9.998c0 23.002-52.59 36.302-101.98 36.302z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M236.054 434.596c-27.395-3.9-45.091-15.101-45.091-28.602 0-2.3.5-5.2 2.399-8.5-25.495-6.7-39.392-16.801-39.392-29.002 0-3.8 1.3-7.4 3.999-10.8-17.097-7.301-25.995-16.501-25.995-26.702 0-3.8 1.2-7.4 3.6-10.9-17.697-9.601-21.596-19.601-21.596-26.602 0-4.1 1.299-8 3.799-11.8-13.697-9.601-16.797-19.101-16.797-25.702 0-6.6 3.1-16.101 16.797-25.701-2.5-3.8-3.799-7.8-3.799-11.801 0-7 3.899-17.101 21.596-26.601-2.4-3.5-3.6-7.101-3.6-10.901 0-10.3 8.898-19.401 25.995-26.701-2.699-3.4-3.999-7.001-3.999-10.801 0-12.2 13.897-22.401 39.392-29.001-1.899-3.2-2.399-6.201-2.399-8.501 0-14.3 19.596-25.901 48.99-29.101l5.399-10.9 8.898 4.5-6.698 13.3c-.8 1.5-2.3 2.6-4 2.7-26.394 2.4-42.691 12-42.691 19.501 0 3 2.599 5.801 4.799 7.501 1.5 1.2 2.199 3.2 1.7 5.1-.5 1.9-1.9 3.3-3.8 3.7-27.394 5.8-39.692 14.801-39.692 21.201 0 3.3 3.299 6.501 6.099 8.501 1.5 1.1 2.299 2.9 1.999 4.8-.3 1.9-1.499 3.4-3.299 4-16.697 5.901-26.695 13.501-26.695 20.201 0 2.8 1.7 5.701 5.099 8.701 1.3 1.1 1.9 2.8 1.6 4.5-.3 1.7-1.3 3.1-2.899 3.8-13.998 6.401-21.796 13.701-21.796 20.501 0 3.1 1.599 6.301 4.799 9.501 1.1 1.1 1.6 2.6 1.4 4.1-.2 1.5-1.1 2.9-2.4 3.6-7.598 4.5-16.697 11.701-16.697 20.201 0 8.501 9.099 15.601 16.697 20.201 1.3.8 2.2 2.101 2.4 3.601.2 1.5-.3 3-1.4 4.1-3.2 3.2-4.799 6.4-4.799 9.5 0 6.801 7.698 14.101 21.796 20.501a5.175 5.175 0 012.899 3.801c.3 1.7-.3 3.4-1.6 4.5-3.399 3-5.099 5.9-5.099 8.7 0 6.701 9.998 14.301 26.795 20.201 1.7.6 2.999 2.101 3.299 4.001.3 1.9-.499 3.7-1.999 4.8-2.8 2-6.099 5.2-6.099 8.5 0 6.401 12.298 15.401 39.692 21.201 1.9.4 3.4 1.801 3.799 3.701.4 1.9-.199 3.8-1.699 5.1-2.2 1.8-4.799 4.5-4.799 7.5 0 6.601 12.797 15.401 36.493 18.701l-1.4 10.101zM255.95 435.996v-10.001c31.494 0 54.989-10.6 54.989-20.001 0-3-2.599-5.8-4.799-7.5-1.499-1.2-2.199-3.2-1.699-5.1.499-1.9 1.899-3.3 3.799-3.7 27.394-5.801 39.692-14.801 39.692-21.202 0-3.3-3.299-6.5-6.099-8.5-1.499-1.1-2.299-2.9-1.999-4.8.3-1.9 1.499-3.401 3.299-4.001 16.797-5.9 26.795-13.5 26.795-20.201 0-2.8-1.7-5.7-5.099-8.7-1.3-1.1-1.9-2.8-1.6-4.5.3-1.7 1.3-3.101 2.9-3.801 13.997-6.4 21.795-13.7 21.795-20.501 0-3.1-1.599-6.3-4.799-9.5-1.1-1.1-1.6-2.6-1.4-4.1.2-1.5 1.1-2.901 2.4-3.601 7.599-4.5 16.697-11.7 16.697-20.201 0-8.5-9.098-15.601-16.697-20.201-1.3-.8-2.2-2.1-2.4-3.6-.2-1.5.3-3 1.4-4.1 3.2-3.2 4.799-6.4 4.799-9.501 0-6.8-7.698-14.1-21.795-20.501-1.5-.7-2.6-2.1-2.9-3.8-.3-1.7.3-3.4 1.6-4.5 3.399-3 5.099-5.901 5.099-8.701 0-6.7-9.998-14.3-26.795-20.201-1.7-.6-2.999-2.1-3.299-4-.3-1.9.5-3.7 1.999-4.8 2.8-2 6.099-5.201 6.099-8.501 0-6.4-12.298-15.401-39.692-21.201-1.9-.4-3.4-1.8-3.799-3.7-.4-1.9.2-3.8 1.699-5.1 2.2-1.8 4.799-4.501 4.799-7.501 0-7.5-16.297-17.1-42.691-19.5-1.7-.2-3.2-1.2-4-2.7l-5.898-11.901 8.898-4.5 4.699 9.4c29.394 3.2 48.99 14.8 48.99 29.101 0 2.3-.5 5.201-2.399 8.501 25.495 6.7 39.392 16.801 39.392 29.001 0 3.801-1.3 7.401-3.999 10.801 17.097 7.3 25.995 16.501 25.995 26.701 0 3.801-1.2 7.401-3.599 10.901 17.696 9.6 21.595 19.601 21.595 26.601 0 4.101-1.299 8.001-3.799 11.801 13.697 9.6 16.797 19.101 16.797 25.701 0 6.601-3.1 16.101-16.797 25.702 2.5 3.8 3.799 7.8 3.799 11.8 0 7.001-3.899 17.101-21.595 26.602 2.399 3.5 3.599 7.1 3.599 10.9 0 10.301-8.898 19.401-25.995 26.702 2.699 3.4 3.999 7 3.999 10.8 0 12.201-13.897 22.402-39.392 29.002 1.899 3.2 2.399 6.2 2.399 8.5 0 17.001-27.894 29.902-64.987 29.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M238.621 79.199l8.938 4.47-12.2 24.408-8.939-4.471 12.201-24.407zM273.158 79.155l12.201 24.408-8.939 4.47-12.2-24.407 8.938-4.47z" })));
};

var Icon$1Y = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M386.724 280.488c4 4.1 6.199 8.5 6.199 13 0 9.301-9.098 18.001-24.695 25.102 4.299 3.9 6.699 8.1 6.699 12.4 0 9.601-11.398 18.301-30.094 24.902 5.199 3.8 8.098 8.1 8.098 12.6 0 10.901-17.297 20.501-43.591 26.102 4.199 3.4 6.598 7.3 6.598 11.4 0 13.801-26.894 25.002-59.988 25.002s-59.988-11.201-59.988-25.002c0-4.1 2.399-8 6.598-11.4-26.294-5.601-43.591-15.201-43.591-26.102 0-4.5 2.899-8.7 8.098-12.6-18.796-6.601-30.094-15.401-30.094-24.902 0-4.4 2.4-8.5 6.699-12.4-15.597-7.101-24.695-15.701-24.695-25.102 0-4.5 2.199-8.9 6.199-13-12.198-7.301-19.197-15.601-19.197-24.502 0-8.9 6.999-17.201 19.197-24.501-4-4.1-6.199-8.5-6.199-13.001 0-9.3 9.098-18.001 24.695-25.101-4.299-3.9-6.699-8.1-6.699-12.401 0-9.6 11.398-18.301 30.094-24.901-5.199-3.9-8.098-8.1-8.098-12.601 0-10.9 17.297-20.501 43.591-26.101-4.199-3.4-6.598-7.301-6.598-11.401 0-12 20.196-22 47.191-24.401l12.797-25.601 12.798 25.601c26.994 2.4 47.19 12.4 47.19 24.401 0 4.1-2.399 8.001-6.598 11.401 26.294 5.6 43.591 15.201 43.591 26.101 0 4.501-2.899 8.701-8.098 12.601 18.796 6.6 30.094 15.401 30.094 24.901 0 4.401-2.4 8.501-6.699 12.401 15.597 7.1 24.695 15.701 24.695 25.101 0 4.501-2.199 8.901-6.199 13.001 12.198 7.3 19.197 15.601 19.197 24.501 0 8.901-6.999 17.201-19.197 24.502z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M315.938 405.994c0 13.801-26.894 25.002-59.988 25.002s-59.988-11.201-59.988-25.002c0-4.1 2.399-8 6.598-11.4 15.297 3.3 33.694 5.2 53.39 5.2 19.696 0 38.093-1.9 53.39-5.2 4.199 3.4 6.598 7.3 6.598 11.4z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M5 68.376s125.875-10.4 178.065-6.6c69.387 5 136.574 17.2 209.259 17.2 72.686 0 114.578-17.2 114.578-17.2V32.374s-121.276 14.2-180.765 14.2c-119.976 0-246.651-41.601-246.651-41.601l-10.998 7.1 46.191 23.201L5 43.474v24.902z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M189.263 166.181s-20.996 16.101-48.391 5.201c4.8-5.801 13.998-11.001 26.195-15.301 5.299 3.8 12.898 7.2 22.196 10.1zM368.628 168.982c-20.396 23.501-72.186 2.9-72.186 2.9 21.496-3.2 38.793-8.801 48.291-15.801 10.598 3.7 18.796 8 23.895 12.901zM243.153 81.577l-12.198 24.401s-17.397 1-32.894 6.601c-1.399-2.1-2.099-4.301-2.099-6.601 0-12 20.196-22 47.191-24.401zM315.938 105.978c0 2.5-.9 4.901-2.499 7.201 0 0-8.199-7.701-32.494-7.201l-12.198-24.401c26.995 2.4 47.191 12.4 47.191 24.401z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M484.121 174.295c9.76-9.762 5.013-30.338-10.602-45.958-15.616-15.619-36.187-20.367-45.947-10.605-9.759 9.762-5.012 30.338 10.603 45.957 15.616 15.62 36.187 20.368 45.946 10.606z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M470.044 124.69l7.069 7.07-35.344 35.351-7.069-7.07 35.344-35.351zM481.782 141.174l7.069 7.071-30.608 30.613-7.069-7.07 30.608-30.614z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M449.612 139.68s-60.088 10.601-29.294 41.402c31.394 31.402 29.294-41.402 29.294-41.402zM449.612 139.68s72.186 1.5 41.392-29.301c-31.394-31.502-41.392 29.301-41.392 29.301z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M355.931 507c13.804 0 24.995-17.91 24.995-40.002 0-22.093-11.191-40.003-24.995-40.003-13.805 0-24.996 17.91-24.996 40.003 0 22.092 11.191 40.002 24.996 40.002z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M330.935 461.997h49.991v10h-49.991v-10zM333.935 481.998h43.991v10h-43.991v-10z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M355.931 458.097s-49.991-35.002-49.991 8.501c0 44.502 49.991-8.501 49.991-8.501zM355.931 458.097s49.99 52.103 49.99 8.501c0-44.403-49.99-8.501-49.99-8.501z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M91.495 223.425c-9.76-9.762-30.33-5.014-45.946 10.605-15.616 15.62-20.363 36.196-10.603 45.958s30.33 5.014 45.946-10.606c15.615-15.619 20.362-36.195 10.603-45.957z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M49.124 230.561l35.344 35.351-7.069 7.07-35.344-35.351 7.069-7.07zM37.098 246.756l31.103 31.109-7.069 7.07-31.103-31.109 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M63.288 251.786s-6.4-70.004-38.193-38.202c-31.794 31.802 38.193 38.202 38.193 38.202z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M77.409 230.488l7.069 7.071-7.07 7.07-7.069-7.07 7.07-7.071z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M392.923 293.488c0 .6 0 1.2-.1 1.8-33.793 8.701-96.381 8.801-96.381 8.801 38.693-3.6 70.986-12.301 90.282-23.701 4 4.2 6.199 8.6 6.199 13.1zM189.263 300.589s-35.893 7.9-68.287.3c-1.299-2.4-1.999-5.101-1.999-7.601 0-4.5 2.199-8.2 6.199-13.2 14.697 8.9 37.092 16 64.087 20.501zM179.065 254.686s-47.291 21.901-69.886-8.9c3.199-5.101 8.598-9.901 15.997-14.301 9.298 9.601 28.494 17.701 53.889 23.201zM402.221 244.986c-87.183 45.002-146.271 17.301-146.271 17.301 61.388 0 113.378-12.901 130.774-30.702 6.999 4.1 12.298 8.6 15.497 13.401zM209.559 215.484s-38.792 19.901-85.883-8.3c4.199-5.001 11.098-9.601 20.096-13.801 10.998 10 35.093 18.001 65.787 22.101zM386.525 205.284c-16.897 18.301-53.59 4.3-53.59 4.3 15.897-4.3 28.195-9.801 35.193-16.101 7.999 3.5 14.197 7.5 18.397 11.801zM374.927 330.99c0 .7-.1 1.5-.2 2.2-21.496 1.1-41.692-3.5-41.692-3.5 13.797-3 25.695-6.8 35.193-11.1 4.299 3.9 6.699 8 6.699 12.4zM255.95 337.291s-62.388 18.101-118.377-2.501c-.4-1.2-.6-2.5-.6-3.7 0-4.4 2.4-8.5 6.699-12.4 24.795 11.2 65.787 18.601 112.278 18.601zM255.95 368.492s-47.391 21.101-96.981.3v-.3c0-4.5 2.899-8.7 8.098-12.6 21.796 7.7 53.59 12.6 88.883 12.6zM352.931 368.492v.9c-21.896-.5-43.791-4.9-43.791-4.9 13.597-2.1 25.695-5.1 35.693-8.6 5.199 3.9 8.098 8.1 8.098 12.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M262.449 354.992c0 9.8-6.499 13.5-6.499 13.5-13.697 0-26.895-.7-39.192-2.1-3.6-6.3-7.799-17.301-4.699-31.501 13.797 1.5 28.494 2.3 43.791 2.3.1.1 6.599 8.1 6.599 17.801z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M79.484 4.973l-10.997 7.1 46.191 23.201s84.683 11.2 211.358 11.2C206.16 46.575 79.484 4.974 79.484 4.974zM216.758 366.392c4.499.5 8.998.9 13.697 1.2-7.499-13.6-3.499-31.401-3.499-31.401-5.099-.3-9.998-.8-14.797-1.3-3.2 14.2.999 25.201 4.599 31.501z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M392.323 83.977c-46.391 0-91.082-5-134.273-9.8-24.596-2.8-50.091-5.6-75.386-7.5-40.092-2.901-123.376 2.5-157.369 5l-.7-10.001c34.194-2.5 118.077-7.9 158.769-5 25.495 1.9 51.09 4.7 75.785 7.5 42.992 4.8 87.383 9.8 133.174 9.8 59.789 0 98.681-11.9 109.579-15.7V37.975c-24.595 2.8-123.976 13.6-175.766 13.6-110.578 0-228.155-35.602-245.852-41.102l-1.7 1.1 38.393 19.301c2 1 3.1 3.2 2.7 5.4-.4 2.2-2.3 3.8-4.499 4L9.998 48.176v19.801H0V43.475c0-2.6 2-4.8 4.6-5l91.781-6.9-30.094-15.002c-1.6-.8-2.7-2.4-2.7-4.2-.1-1.8.8-3.5 2.3-4.5l10.998-7.1c1.3-.8 2.8-1 4.3-.5 1.299.4 127.274 41.302 245.051 41.302 58.489 0 178.965-14 180.165-14.2 1.4-.2 2.8.3 3.899 1.2 1.1.9 1.7 2.3 1.7 3.7v29.4c0 2.001-1.2 3.901-3.099 4.601-1.8.8-43.692 17.701-116.578 17.701zM296.942 309.089l-.9-10c59.789-5.501 104.88-24.102 104.88-43.103h9.998c0 13.301-11.798 25.402-34.094 35.102-20.096 8.701-48.49 15.101-79.884 18.001zM188.463 305.689c-54.789-9.101-87.483-27.702-87.483-49.703h9.998c0 16.001 31.794 32.002 79.085 39.902l-1.6 9.801zM177.965 259.787c-40.692-8.801-63.987-23.802-63.987-40.803h9.998c0 11.001 21.996 23.802 56.089 31.202l-2.1 9.601zM255.95 267.287v-10.001c77.785 0 131.974-20.301 131.974-38.302h9.998c0 14.001-15.097 26.302-43.591 35.402-26.395 8.501-61.288 12.901-98.381 12.901zM208.859 220.484c-48.09-6.4-76.885-21.201-76.885-39.502h9.998c0 10.201 23.396 23.602 68.187 29.602l-1.3 9.9zM334.335 214.384l-2.6-9.7c28.195-7.501 38.193-17.201 38.193-23.702h9.998c0 13.701-16.197 25.502-45.591 33.402zM187.763 171.182c-22.095-6.701-33.793-16.201-33.793-27.202h9.998c0 4 6.999 11.801 26.795 17.801l-3 9.401zM297.242 177.082l-1.5-9.8c34.294-5.101 52.19-16.301 52.19-23.302h9.998c0 15.001-22.695 27.502-60.688 33.102zM258.45 372.793l-4.999-8.701c.1-.1 3.999-2.6 3.999-9.2 0-5.301-2.5-10.201-4.099-12.801-36.093-.2-69.987-4.6-95.782-12.801-28.494-9-43.591-21.301-43.591-35.302h9.998c0 18.001 54.189 38.502 131.974 38.502 1.5 0 2.899.6 3.899 1.701.3.4 7.599 9.4 7.599 20.801 0 10-5.699 15.9-8.998 17.801zM334.035 334.79l-2.1-9.6c33.994-7.4 55.989-20.201 55.989-31.202h9.998c0 17.001-23.295 32.002-63.887 40.802z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 373.493c-60.088 0-123.976-14.901-123.976-42.503h9.998c0 7.301 11.998 15.701 31.394 21.701 21.996 6.901 51.39 10.801 82.584 10.801v10.001zM309.84 369.492l-1.6-9.9c42.292-6.701 61.588-19.501 61.588-28.602h9.998c.1 17.201-26.095 31.602-69.986 38.502z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 373.493c-13.597 0-26.995-.7-39.692-2.101-1.6-.2-3-1.1-3.799-2.5-4.3-7.5-8.599-19.601-5.199-35.002.499-2.5 2.899-4.2 5.398-3.9 13.898 1.5 28.395 2.3 43.292 2.3 1.5 0 2.899.7 3.899 1.8.3.401 7.599 9.501 7.599 20.902 0 10-5.699 15.9-8.998 17.801-.8.5-1.6.7-2.5.7zm-35.993-11.801c10.998 1.1 22.596 1.7 34.293 1.8 1.2-1.1 3.2-3.8 3.2-8.5 0-5.301-2.5-10.201-4.099-12.801-12.698-.1-25.096-.7-37.093-1.8-1 8.9 1.2 16.201 3.699 21.301z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.95 405.294c-49.39 0-101.98-13.3-101.98-36.302h9.998c0 10.001 34.993 26.302 91.982 26.302s91.982-16.301 91.982-26.302h9.998c0 23.002-52.59 36.302-101.98 36.302z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M236.054 434.596c-27.395-3.9-45.091-15.101-45.091-28.602 0-2.3.5-5.2 2.399-8.5-25.495-6.7-39.392-16.801-39.392-29.002 0-3.8 1.3-7.4 3.999-10.8-17.097-7.301-25.995-16.501-25.995-26.702 0-3.8 1.2-7.4 3.6-10.9-17.697-9.601-21.596-19.601-21.596-26.602 0-4.1 1.299-8 3.799-11.8-13.697-9.601-16.797-19.101-16.797-25.702 0-6.6 3.1-16.101 16.797-25.701-2.5-3.8-3.799-7.8-3.799-11.801 0-7 3.899-17.101 21.596-26.601-2.4-3.5-3.6-7.101-3.6-10.901 0-10.3 8.898-19.401 25.995-26.701-2.699-3.4-3.999-7.001-3.999-10.801 0-12.2 13.897-22.401 39.392-29.001-1.899-3.2-2.399-6.201-2.399-8.501 0-14.3 19.596-25.901 48.99-29.101l5.399-10.9 8.898 4.5-6.698 13.3c-.8 1.5-2.3 2.6-4 2.7-26.394 2.4-42.691 12-42.691 19.501 0 3 2.599 5.801 4.799 7.501 1.5 1.2 2.199 3.2 1.7 5.1-.5 1.9-1.9 3.3-3.8 3.7-27.394 5.8-39.692 14.801-39.692 21.201 0 3.3 3.299 6.501 6.099 8.501 1.5 1.1 2.299 2.9 1.999 4.8-.3 1.9-1.499 3.4-3.299 4-16.697 5.901-26.695 13.501-26.695 20.201 0 2.8 1.7 5.701 5.099 8.701 1.3 1.1 1.9 2.8 1.6 4.5-.3 1.7-1.3 3.1-2.899 3.8-13.998 6.401-21.796 13.701-21.796 20.501 0 3.1 1.599 6.301 4.799 9.501 1.1 1.1 1.6 2.6 1.4 4.1-.2 1.5-1.1 2.9-2.4 3.6-7.598 4.5-16.697 11.701-16.697 20.201 0 8.501 9.099 15.601 16.697 20.201 1.3.8 2.2 2.101 2.4 3.601.2 1.5-.3 3-1.4 4.1-3.2 3.2-4.799 6.4-4.799 9.5 0 6.801 7.698 14.101 21.796 20.501a5.175 5.175 0 012.899 3.801c.3 1.7-.3 3.4-1.6 4.5-3.399 3-5.099 5.9-5.099 8.7 0 6.701 9.998 14.301 26.795 20.201 1.7.6 2.999 2.101 3.299 4.001.3 1.9-.499 3.7-1.999 4.8-2.8 2-6.099 5.2-6.099 8.5 0 6.401 12.298 15.401 39.692 21.201 1.9.4 3.4 1.801 3.799 3.701.4 1.9-.199 3.8-1.699 5.1-2.2 1.8-4.799 4.5-4.799 7.5 0 6.601 12.797 15.401 36.493 18.701l-1.4 10.101zM255.95 435.996v-10.001c31.494 0 54.989-10.6 54.989-20.001 0-3-2.599-5.8-4.799-7.5-1.499-1.2-2.199-3.2-1.699-5.1.499-1.9 1.899-3.3 3.799-3.701 27.394-5.8 39.692-14.8 39.692-21.201 0-3.3-3.299-6.5-6.099-8.5-1.499-1.1-2.299-2.9-1.999-4.8.3-1.9 1.499-3.401 3.299-4.001 16.797-5.9 26.795-13.5 26.795-20.201 0-2.8-1.7-5.7-5.099-8.7-1.3-1.1-1.9-2.8-1.6-4.5.3-1.7 1.3-3.101 2.9-3.801 13.997-6.4 21.795-13.7 21.795-20.501 0-3.1-1.599-6.3-4.799-9.5-1.1-1.1-1.6-2.6-1.4-4.1.2-1.501 1.1-2.901 2.4-3.601 7.599-4.5 16.697-11.7 16.697-20.201 0-8.5-9.098-15.601-16.697-20.201-1.3-.8-2.2-2.1-2.4-3.6-.2-1.5.3-3 1.4-4.1 3.2-3.2 4.799-6.401 4.799-9.501 0-6.8-7.698-14.1-21.795-20.501-1.5-.7-2.6-2.1-2.9-3.8-.3-1.7.3-3.4 1.6-4.5 3.399-3 5.099-5.901 5.099-8.701 0-6.7-9.998-14.3-26.795-20.201-1.7-.6-2.999-2.1-3.299-4-.3-1.9.5-3.7 1.999-4.8 2.8-2 6.099-5.201 6.099-8.501 0-6.4-12.298-15.401-39.692-21.201-1.9-.4-3.4-1.8-3.799-3.7-.4-1.9.2-3.8 1.699-5.1 2.2-1.8 4.799-4.501 4.799-7.501 0-7.5-16.297-17.1-42.691-19.5-1.7-.2-3.2-1.2-4-2.7l-5.898-11.902 8.898-4.5 4.699 9.4c29.394 3.2 48.99 14.802 48.99 29.102 0 2.3-.5 5.201-2.399 8.501 25.495 6.7 39.392 16.801 39.392 29.001 0 3.8-1.3 7.401-3.999 10.801 17.097 7.3 25.995 16.501 25.995 26.701 0 3.801-1.2 7.401-3.599 10.901 17.696 9.6 21.595 19.601 21.595 26.601 0 4.101-1.299 8.001-3.799 11.801 13.697 9.6 16.797 19.101 16.797 25.701 0 6.601-3.1 16.101-16.797 25.702 2.5 3.8 3.799 7.8 3.799 11.8 0 7.001-3.899 17.101-21.595 26.602 2.399 3.5 3.599 7.1 3.599 10.9 0 10.301-8.898 19.401-25.995 26.702 2.699 3.4 3.999 7 3.999 10.8 0 12.201-13.897 22.402-39.392 29.002 1.899 3.2 2.399 6.2 2.399 8.5 0 17.001-27.894 29.902-64.987 29.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M238.621 79.199l8.938 4.47-12.201 24.407-8.938-4.47 12.201-24.407zM273.158 79.155l12.201 24.407-8.938 4.471-12.201-24.408 8.938-4.47zM434.015 193.983c-5.299 0-11.098-3.1-17.296-9.301-8.799-8.8-11.998-17.3-9.399-25.301 5.599-17.701 37.793-23.901 41.392-24.501 1.4-.3 2.9.1 4 1 1.099.9 1.799 2.3 1.799 3.7.2 7.7.5 46.503-15.297 53.303-1.599.7-3.399 1.1-5.199 1.1zm10.598-48.103c-11.198 2.901-25.395 8.801-27.794 16.401-1.3 4.201.999 9.301 6.998 15.301 4.899 4.9 9.098 7.2 11.498 6.2 5.799-2.6 9.098-20.601 9.298-37.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M452.312 144.68h-2.8c-1.399 0-2.799-.7-3.699-1.8-.9-1.1-1.3-2.6-1.1-4 .6-3.7 6.399-36.002 24.095-41.702 8.099-2.6 16.797.6 25.795 9.6 8.099 8.101 10.898 15.601 8.099 22.102-6.299 14.5-38.693 15.8-50.39 15.8zm21.895-38.302c-.799 0-1.599.1-2.399.4-7.599 2.4-13.398 16.701-16.097 28.002 17.297-.4 35.193-3.9 37.693-9.601.999-2.3-1.2-6.4-5.899-11.1-5.099-5.201-9.498-7.701-13.298-7.701z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M458.734 136.003l7.069 7.07-12.723 12.726-7.069-7.07 12.723-12.726zM482.136 140.821l7.068 7.07-31.314 31.321-7.069-7.07 31.315-31.321zM316.238 489.299c-1.799 0-3.599-.3-5.299-1-6.698-2.7-10.098-10.001-10.098-21.801 0-12.401 3.8-20.702 11.298-24.602 16.497-8.6 43.592 9.801 46.591 11.901 1.2.8 2 2.1 2.1 3.6.1 1.4-.3 2.9-1.3 3.9-4.699 5.201-27.095 28.002-43.292 28.002zm6.099-39.602c-2.1 0-3.999.4-5.499 1.2-3.899 2-5.899 7.3-5.899 15.701 0 7 1.4 11.5 3.8 12.5 6.298 2.5 22.195-9.4 33.293-20.101-7.798-4.7-18.196-9.3-25.695-9.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M395.623 488.999c-16.097 0-38.593-22.501-43.292-27.402-1-1-1.5-2.5-1.4-3.9.1-1.4.9-2.8 2.1-3.6 2.999-2.2 29.894-20.901 46.491-12.401 7.598 3.9 11.398 12.301 11.398 25.002 0 11.5-3.3 18.701-9.898 21.401-1.7.6-3.5.9-5.399.9zm-31.794-30.102c12.497 11.901 27.595 22.201 33.393 19.801 2.3-.9 3.7-5.3 3.7-12.1 0-8.701-2-14.101-5.999-16.101-7.599-3.901-22.396 3.1-31.094 8.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M346.932 461.997h17.997v10h-17.997v-10zM333.935 481.998h43.991v10h-43.991v-10zM66.372 247.774l18.096 18.1-7.069 7.07-18.096-18.1 7.069-7.07zM37.098 246.756l31.103 31.109-7.069 7.07-31.103-31.109 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M63.288 256.786h-.5c-4.4-.4-43.492-4.5-50.09-22.501-2.7-7.5.3-15.601 8.798-24.201 8.498-8.601 16.697-11.501 24.195-8.801 18.097 6.501 22.096 45.603 22.496 50.103.1 1.5-.4 2.9-1.4 4-1 .8-2.2 1.4-3.5 1.4zm-22.996-46.502c-4 0-8.398 3.6-11.698 6.8-3.799 3.8-8.098 9.301-6.498 13.701 2.9 8.1 22.295 13.201 35.393 15.201-2.2-14.701-7.699-32.602-15.197-35.402-.7-.2-1.3-.3-2-.3zM77.409 230.488l7.069 7.071-7.07 7.07-7.069-7.07 7.07-7.071z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M48.49 290.088c-6.898 0-12.797-2.2-17.096-6.6-8.898-8.901-8.698-24.602.5-40.002l8.598 5.1c-6.599 11.201-7.398 22.401-2 27.901 3.5 3.501 9.199 4.501 16.097 2.901 7.799-1.801 15.897-6.601 22.796-13.501 6.898-6.901 11.698-15.001 13.497-22.801 1.6-6.901.6-12.701-2.9-16.101-5.498-5.501-16.696-4.701-27.894 2l-5.099-8.601c15.397-9.2 31.194-9.3 39.992-.5 5.999 6.001 7.999 15.001 5.599 25.402-2.2 9.6-7.998 19.401-16.197 27.601-8.198 8.201-17.996 13.901-27.594 16.201-2.8.7-5.599 1-8.299 1zM470.508 184.382c-8.198 0-17.396-3.1-26.395-9.3l5.699-8.2c12.098 8.3 24.795 9.9 30.794 3.9 5.999-6.001 4.299-19.101-3.999-31.002l8.198-5.7c11.498 16.501 12.598 34.102 2.9 43.802-4.399 4.3-10.398 6.5-17.197 6.5zM421.918 149.281c-6.499-13.801-5.699-27.302 2.199-35.102 7.799-7.801 21.096-8.601 34.893-2.3l-4.199 9.1c-9.798-4.5-18.896-4.4-23.595.3-4.799 4.8-4.799 13.901-.2 23.801l-9.098 4.201zM355.93 512c-13.697 0-25.295-13.201-28.894-32.702l9.798-1.8c2.7 14.501 10.498 24.501 19.096 24.501 8.499 0 16.497-10.4 19.097-24.801l9.798 1.8C381.326 498.699 369.728 512 355.93 512zM338.934 448.697l-9.398-3.401c5.199-14.4 15.297-23.301 26.394-23.301 10.998 0 20.996 8.801 26.295 23.001l-9.398 3.501c-3.699-10.201-10.198-16.501-16.897-16.501-6.698 0-13.197 6.4-16.996 16.701z" })));
};

var Icon$1X = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M484.121 174.295c9.76-9.762 5.013-30.338-10.602-45.957-15.616-15.62-36.187-20.368-45.947-10.606-9.759 9.762-5.012 30.338 10.603 45.957 15.616 15.62 36.187 20.368 45.946 10.606z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M470.044 124.69l7.069 7.07-35.344 35.351-7.069-7.07 35.344-35.351zM481.782 141.174l7.069 7.071-30.608 30.614-7.069-7.071 30.608-30.614z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M449.612 139.68s-60.088 10.601-29.294 41.402c31.394 31.402 29.294-41.402 29.294-41.402zM449.612 139.68s72.186 1.5 41.392-29.301c-31.394-31.502-41.392 29.301-41.392 29.301z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M355.931 507c13.804 0 24.995-17.91 24.995-40.002 0-22.093-11.191-40.003-24.995-40.003-13.805 0-24.996 17.91-24.996 40.003 0 22.092 11.191 40.002 24.996 40.002z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M330.935 461.997h49.991v10h-49.991v-10zM333.935 481.998h43.991v10h-43.991v-10z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M355.931 458.097s-49.991-35.002-49.991 8.501c0 44.502 49.991-8.501 49.991-8.501zM355.931 458.097s49.99 52.103 49.99 8.501c0-44.403-49.99-8.501-49.99-8.501z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M91.495 223.425c-9.76-9.762-30.33-5.014-45.946 10.605-15.616 15.62-20.363 36.196-10.603 45.958s30.33 5.014 45.946-10.606c15.615-15.619 20.362-36.195 10.603-45.957z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M49.124 230.561l35.344 35.351-7.069 7.07-35.344-35.351 7.069-7.07zM37.098 246.756l31.103 31.109-7.069 7.07-31.103-31.109 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M63.288 251.786s-6.4-70.004-38.193-38.202c-31.794 31.802 38.193 38.202 38.193 38.202z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M77.409 230.488l7.069 7.071-7.07 7.07-7.069-7.07 7.07-7.071z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M434.015 193.983c-5.299 0-11.098-3.1-17.296-9.301-8.799-8.8-11.998-17.301-9.399-25.301 5.599-17.701 37.793-23.901 41.392-24.501 1.4-.3 2.9.1 4 1 1.099.9 1.799 2.3 1.799 3.7.2 7.7.5 46.502-15.297 53.303-1.599.7-3.399 1.1-5.199 1.1zm10.598-48.103c-11.198 2.9-25.395 8.801-27.794 16.401-1.3 4.2.999 9.301 6.998 15.301 4.899 4.9 9.098 7.2 11.498 6.2 5.799-2.6 9.098-20.601 9.298-37.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M452.312 144.68h-2.8c-1.399 0-2.799-.7-3.699-1.8-.9-1.1-1.3-2.6-1.1-4 .6-3.7 6.399-36.002 24.095-41.702 8.099-2.6 16.797.6 25.795 9.6 8.099 8.101 10.898 15.601 8.099 22.101-6.299 14.501-38.693 15.801-50.39 15.801zm21.895-38.302c-.799 0-1.599.1-2.399.4-7.599 2.4-13.398 16.701-16.097 28.002 17.297-.4 35.193-3.9 37.693-9.601.999-2.3-1.2-6.4-5.899-11.1-5.099-5.201-9.498-7.701-13.298-7.701z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M458.734 136.003l7.069 7.07-12.723 12.726-7.069-7.07 12.723-12.726zM482.136 140.821l7.068 7.07-31.314 31.321-7.069-7.07 31.315-31.321zM316.238 489.299c-1.799 0-3.599-.3-5.299-1-6.698-2.7-10.098-10.001-10.098-21.801 0-12.401 3.8-20.702 11.298-24.602 16.497-8.6 43.592 9.801 46.591 11.901 1.2.8 2 2.1 2.1 3.6.1 1.4-.3 2.9-1.3 3.9-4.699 5.201-27.095 28.002-43.292 28.002zm6.099-39.602c-2.1 0-3.999.4-5.499 1.2-3.899 2-5.899 7.3-5.899 15.701 0 7 1.4 11.5 3.8 12.5 6.298 2.5 22.195-9.4 33.293-20.101-7.798-4.7-18.196-9.3-25.695-9.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M395.623 488.999c-16.097 0-38.593-22.501-43.292-27.402-1-1-1.5-2.5-1.4-3.9.1-1.4.9-2.8 2.1-3.6 2.999-2.2 29.894-20.901 46.491-12.401 7.598 3.9 11.398 12.301 11.398 25.002 0 11.5-3.3 18.701-9.898 21.401-1.7.6-3.5.9-5.399.9zm-31.794-30.102c12.497 11.901 27.595 22.201 33.393 19.801 2.3-.9 3.7-5.3 3.7-12.1 0-8.701-2-14.101-5.999-16.101-7.599-3.901-22.396 3.1-31.094 8.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M346.932 461.997h17.997v10h-17.997v-10zM333.935 481.998h43.991v10h-43.991v-10zM66.372 247.774l18.096 18.1-7.069 7.07-18.096-18.1 7.069-7.07zM37.098 246.756l31.103 31.109-7.069 7.07-31.103-31.109 7.07-7.07z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M63.288 256.786h-.5c-4.4-.4-43.492-4.5-50.09-22.501-2.7-7.5.3-15.601 8.798-24.201 8.498-8.601 16.697-11.501 24.195-8.801 18.097 6.501 22.096 45.603 22.496 50.103.1 1.5-.4 2.9-1.4 4-1 .8-2.2 1.4-3.5 1.4zm-22.996-46.502c-4 0-8.398 3.6-11.698 6.8-3.799 3.8-8.098 9.301-6.498 13.701 2.9 8.1 22.295 13.201 35.393 15.201-2.2-14.701-7.699-32.602-15.197-35.402-.7-.2-1.3-.3-2-.3zM77.409 230.488l7.069 7.071-7.07 7.07-7.069-7.07 7.07-7.071z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M48.49 290.088c-6.898 0-12.797-2.2-17.096-6.6-8.898-8.901-8.698-24.602.5-40.002l8.598 5.1c-6.599 11.2-7.398 22.401-2 27.901 3.5 3.501 9.199 4.501 16.097 2.9 7.799-1.8 15.897-6.6 22.796-13.5 6.898-6.901 11.698-15.001 13.497-22.801 1.6-6.901.6-12.701-2.9-16.101-5.498-5.501-16.696-4.701-27.894 2l-5.099-8.601c15.397-9.2 31.194-9.3 39.992-.5 5.999 6.001 7.999 15.001 5.599 25.402-2.2 9.6-7.998 19.401-16.197 27.601-8.198 8.201-17.996 13.901-27.594 16.201-2.8.7-5.599 1-8.299 1zM470.508 184.383c-8.198 0-17.396-3.101-26.395-9.301l5.699-8.2c12.098 8.3 24.795 9.9 30.794 3.9 5.999-6.001 4.299-19.101-3.999-31.002l8.198-5.7c11.498 16.501 12.598 34.102 2.9 43.802-4.399 4.3-10.398 6.501-17.197 6.501zM421.918 149.281c-6.499-13.801-5.699-27.302 2.199-35.102 7.799-7.801 21.096-8.601 34.893-2.3l-4.199 9.1c-9.798-4.5-18.896-4.4-23.595.3-4.799 4.8-4.799 13.901-.2 23.801l-9.098 4.201zM355.93 512c-13.697 0-25.295-13.201-28.894-32.702l9.798-1.8c2.7 14.501 10.498 24.501 19.096 24.501 8.499 0 16.497-10.4 19.097-24.801l9.798 1.8C381.326 498.699 369.728 512 355.93 512zM338.934 448.697l-9.398-3.401c5.199-14.4 15.297-23.301 26.394-23.301 10.998 0 20.996 8.801 26.295 23.001l-9.398 3.501c-3.699-10.201-10.198-16.501-16.897-16.501-6.698 0-13.197 6.4-16.996 16.701z" })));
};

var Icon$1W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1V = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M345.432 337.632l-8.898-4.602 11.798-22.809-7.099-30.412 9.698-2.301 7.499 32.213c.3 1.2.1 2.401-.4 3.401l-12.598 24.51zM381.026 336.932l-9.799-2.201 5.399-24.51-10.498-29.511 9.399-3.402 10.997 30.912c.3.901.4 1.801.2 2.801l-5.698 25.911z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M249.851 4.802c32.294 0 45.091 21.008 48.891 74.129 2.799 39.215 63.887 24.709 108.578 69.127 44.692 44.417 47.291 111.143 47.291 111.143s52.19 54.321 52.19 80.332c0 25.91-66.287-49.72-84.584-57.223-18.296-7.503-164.967 35.414-164.967-84.833S214.658 85.533 214.658 85.533l-47.691 3.302 41.492-35.414S205.06 4.8 249.851 4.8z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M506.901 339.533c0 25.91-66.287-49.62-84.583-57.123-5.999-2.401-25.795.501-49.691 1.501-.899-1-46.29-19.808-65.187-57.423-18.996-38.014-2.799-85.033-2.799-85.033s.6 26.611 14.197 61.524c13.597 34.914 43.092 26.211 43.092 26.211 11.297 46.818 39.292 7.602 39.292 7.602 25.695 40.816 53.489 22.409 53.489 22.409s52.19 54.422 52.19 80.332z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M454.711 259.201s-27.894 18.407-53.489-22.409c0 0-27.895 39.316-39.293-7.602 0 0-29.494 8.703-43.091-26.311-13.598-34.913-14.197-61.524-14.197-61.524s12.297 63.425 48.79 64.325l-3.499-9.803c.5 1.1 15.897 33.212 40.892 22.308l-12.398-22.308c1 1.5 36.293 55.921 73.786 43.416 2.199 12.105 2.499 19.908 2.499 19.908z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M222.456 86.434c-4.699-1.6-7.898-1-7.898-1l-47.591 3.4 41.492-35.413s20.796 10.404 13.997 33.013z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M240.953 37.815h9.998V53.82h-9.998V37.815z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M222.456 86.434c2.4-8.003 1.3-14.506-.999-19.508-9.199 17.107-54.49 21.909-54.49 21.909l47.691-3.302s3.199-.7 7.798.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M240.953 37.815h9.998V53.82h-9.998V37.815z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M503.102 349.937c-9.099 0-23.196-11.905-49.691-35.914-13.297-12.105-26.994-24.61-32.993-27.011-2.8-1.1-13.598-.4-24.095.4-32.794 2.301-87.583 6.203-119.277-23.409-16.397-15.206-24.695-37.615-24.695-66.426 0-71.328-15.397-94.737-24.596-102.34-6.598-5.502-12.097-4.702-12.097-4.702-.2 0-.4.1-.6.1l-47.691 3.302c-2.099.1-4.199-1.1-4.999-3.102-.8-2-.3-4.301 1.4-5.702L203.46 51.32c0-6.803 1.2-25.41 13.298-38.315C224.856 4.402 236.054 0 250.051 0c40.092 0 50.49 31.512 53.89 78.73 1.199 16.607 14.197 21.509 38.892 29.412 20.596 6.603 46.291 14.806 68.187 36.515 41.892 41.616 47.89 100.939 48.59 112.643 9.398 9.904 52.39 56.723 52.39 82.433 0 6.102-2.8 8.603-5.199 9.703-1.2.301-2.4.501-3.699.501zm-88.783-73.529c4.499 0 7.599.4 9.898 1.3 7.599 3.102 20.696 15.006 35.993 28.912 9.298 8.403 18.796 17.106 26.995 23.609 8.698 6.903 12.897 8.903 14.697 9.504v-.2c0-19.608-36.693-62.125-50.79-76.83-.9-.901-1.3-2.101-1.4-3.302 0-.6-2.999-65.325-45.791-107.842-20.196-20.108-43.591-27.511-64.187-34.113-23.696-7.603-44.192-14.106-45.891-38.215-4.2-58.023-19.297-69.427-43.992-69.427-11.098 0-19.896 3.301-25.995 9.804-11.797 12.605-10.498 33.213-10.498 33.413.1 1.6-.5 3.1-1.699 4.101l-29.895 25.61 32.394-2.2c2.1-.3 10.598-.9 19.996 6.902 18.797 15.506 28.295 52.521 28.295 110.043 0 25.91 7.198 45.818 21.495 59.123 28.595 26.611 80.685 22.909 111.779 20.708 7.798-.5 13.897-.9 18.596-.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M439.014 268.405c-2.399 0-4.999-.2-7.698-.8-11.298-2.401-21.496-9.904-30.594-22.409-5.299 5.802-14.697 13.705-24.595 11.804-7.999-1.5-13.998-8.903-17.897-22.008-9.998 1-32.493-.4-44.091-30.112-13.798-35.414-14.497-62.224-14.497-63.325l9.998-.2c0 .3.7 26.31 13.797 59.924 11.698 30.111 35.993 23.609 36.993 23.309 1.299-.4 2.699-.2 3.899.5 1.2.7 2 1.801 2.399 3.101 2.8 11.405 6.799 18.207 11.298 19.008 6.399 1.2 15.597-8.404 19.097-13.206.999-1.4 2.599-2.1 4.199-2.1 1.699 0 3.199.9 4.099 2.3 8.398 13.406 17.796 21.309 27.894 23.61 10.598 2.401 18.397-2.501 18.697-2.701l5.499 8.403c-.5.2-7.799 4.902-18.497 4.902zM227.256 87.934l-9.599-2.9c5.499-18.208-10.797-26.811-11.497-27.211l4.499-8.904c8.498 4.202 22.995 17.907 16.597 39.015zM347.732 333.23l-8.898-4.602 9.498-18.407-5.899-25.61 9.698-2.301 6.399 27.411c.3 1.2.1 2.401-.4 3.401l-10.398 20.108zM382.125 332.03l-9.798-2.201 4.399-19.608-8.898-24.81 9.398-3.401 9.299 26.21c.299.901.399 1.801.199 2.801l-4.599 21.009z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M382.799 193.234l22.701 40.915-8.739 4.85-22.701-40.915 8.739-4.85zM354.751 194.378l11.966 33.453-9.419 3.37-11.965-33.453 9.418-3.37z" })));
};

var Icon$1U = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M345.432 337.832l-8.898-4.602 11.798-22.809-7.099-30.412 9.698-2.301 7.499 32.213c.3 1.2.1 2.401-.4 3.401l-12.598 24.51zM381.026 337.132l-9.799-2.201 5.399-24.51-10.498-29.511 9.399-3.402 10.997 30.912c.3.901.4 1.801.2 2.802l-5.698 25.91z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M506.902 373.846c0 34.013-22.695 58.023-47.991 71.328-25.295 13.305-80.684 62.024-111.278 62.024H164.369c-30.694 0-85.983-48.719-111.278-62.024S5.1 407.859 5.1 373.846c0-34.013 20.595-42.717 39.891-42.717H466.91c19.296 0 39.992 8.704 39.992 42.717z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M466.909 331.129H358.63s28.294 5.702 28.294 24.91-38.992 109.543-302.94 109.543c26.594 18.707 59.288 41.616 80.384 41.616h183.264c30.694 0 85.983-48.719 111.278-62.024 25.296-13.305 47.991-37.315 47.991-71.328 0-34.013-20.696-42.717-39.992-42.717z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M80.984 331.129h120.477c14.397-25.009 9.098-125.349-24.095-136.953-30.095-10.604-96.382 56.922-96.382 136.953z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M188.863 202.879a94.969 94.969 0 00-5.699 12.805c-12.797 34.414-14.797 86.534-5.698 115.445h23.895c12.597-21.708 10.198-100.439-12.498-128.25z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M319.938 331.129H199.461c-14.397-25.009-9.098-125.349 24.095-136.953 30.095-10.604 96.382 56.922 96.382 136.953z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M237.354 193.976v3.701c0 33.213 9.898 59.223 29.394 77.43 14.197 13.206 31.694 20.608 49.79 24.71-11.598-55.322-51.39-99.139-79.184-105.841z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M249.851 5.002c32.294 0 45.091 21.008 48.891 74.129 2.799 39.215 63.887 24.709 108.578 69.127 44.692 44.417 47.291 111.143 47.291 111.143s52.19 54.321 52.19 80.332c0 25.91-66.287-49.72-84.584-57.223-18.296-7.503-164.967 35.414-164.967-84.833S214.658 85.733 214.658 85.733l-47.691 3.302 41.492-35.414S205.06 5 249.851 5z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M506.901 339.733c0 25.91-66.287-49.62-84.583-57.123-5.999-2.401-25.795.501-49.691 1.501-.899-1-46.29-19.808-65.187-57.423-18.996-38.014-2.799-85.033-2.799-85.033s.6 26.611 14.197 61.524c13.597 34.914 43.092 26.211 43.092 26.211 11.297 46.818 39.292 7.603 39.292 7.603 25.695 40.815 53.489 22.408 53.489 22.408s52.19 54.422 52.19 80.332z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M454.711 259.401s-27.894 18.407-53.489-22.409c0 0-27.895 39.316-39.293-7.602 0 0-29.494 8.703-43.091-26.311-13.598-34.913-14.197-61.524-14.197-61.524s12.297 63.425 48.79 64.325l-3.499-9.803c.5 1.1 15.897 33.212 40.892 22.308l-12.398-22.308c1 1.5 36.293 55.921 73.786 43.416 2.199 12.105 2.499 19.908 2.499 19.908z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M222.456 86.634c-4.699-1.6-7.898-1-7.898-1l-47.591 3.4 41.492-35.413s20.796 10.404 13.997 33.013z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M240.953 38.015h9.998V54.02h-9.998V38.015z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M52.551 353.671l8.9 4.57-12.661 24.661-8.9-4.57 12.661-24.661zM132.396 353.592l8.8 4.76L127.866 383l-8.799-4.761 13.329-24.647zM224.028 353.594l8.989 4.38-13.317 27.338-8.989-4.38 13.317-27.338zM317.893 355.915l7.779 6.281-14.005 17.353-7.779-6.281 14.005-17.353z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M407.949 356.42l18.67 30.668-8.539 5.2-18.67-30.667 8.539-5.201z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M91.182 404.896l16.636 17.986-7.34 6.792-16.635-17.987 7.34-6.791zM172.111 405.333l7.9 6.131-20.659 26.63-7.9-6.131 20.659-26.63zM279.622 397.705l26.709 21.378-6.251 7.812-26.709-21.378 6.251-7.812z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M366.115 405.046l7.34 6.791-16.636 17.987-7.34-6.791 16.636-17.987zM452.607 405.89l14.001 21.324-8.359 5.491-14.001-21.324 8.359-5.491zM229.209 459.678l9.089 4.18-11.329 24.642-9.089-4.18 11.329-24.642zM307.108 454.224l18.029 18.032-7.07 7.071-18.029-18.032 7.07-7.071zM168.607 458.069l7.96 6.051-12.645 16.64-7.96-6.051 12.645-16.64z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M223.584 418.056l7.96 6.051-12.645 16.641-7.96-6.051 12.645-16.641z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M396.003 440.892l7.07 7.071-20.644 20.649-7.07-7.072 20.644-20.648zM476.22 341.812l18.004 28.164-8.429 5.391-18.004-28.164 8.429-5.391z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M39.832 406.173l8.91 4.54-18.344 36.007-8.91-4.54 18.344-36.007z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M439.651 439.761l5.338 30.054-9.848 1.75-5.338-30.054 9.848-1.75zM110.433 462.863l6.28 7.782-25.984 20.979-6.28-7.782 25.984-20.979zM376.417 483.075l25.299 12.649-4.472 8.943-25.298-12.649 4.471-8.943z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M150.113 311.072l29.972 33.294-7.43 6.691-29.972-33.294 7.43-6.691zM98.518 312.409l9.059 4.241-14.672 31.357-9.06-4.24 14.673-31.358zM272.216 312.519l9.328 3.59-12.818 33.319-9.328-3.59 12.818-33.319z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M115.978 256.4c8.798-23.109 33.693-44.517 39.992-43.817 6.298.7-9.198 18.807-17.697 42.817-8.498 24.009-12.497 43.217-21.796 42.716-9.298-.5-11.797-12.004-.499-41.716z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M222.456 86.634c2.4-8.003 1.3-14.506-.999-19.508-9.199 17.107-54.49 21.909-54.49 21.909l47.691-3.302s3.199-.7 7.798.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M240.953 38.015h9.998V54.02h-9.998V38.015zM52.551 353.671l8.899 4.57-12.66 24.661-8.9-4.57 12.661-24.661zM132.396 353.592l8.8 4.76L127.866 383l-8.799-4.761 13.329-24.647zM224.028 353.594l8.989 4.38-13.317 27.338-8.989-4.38 13.317-27.338zM317.893 355.915l7.779 6.281-14.005 17.353-7.779-6.281 14.005-17.353zM407.949 356.42l18.669 30.667-8.539 5.201-18.67-30.667 8.54-5.201zM91.182 404.896l16.636 17.986-7.34 6.792-16.636-17.987 7.34-6.791zM172.111 405.333l7.899 6.131-20.659 26.63-7.899-6.131 20.659-26.63zM279.622 397.705l26.709 21.378-6.251 7.812-26.709-21.378 6.251-7.812zM366.115 405.046l7.34 6.791-16.636 17.987-7.34-6.791 16.636-17.987zM452.607 405.89l14 21.324-8.359 5.491-14-21.324 8.359-5.491zM229.209 459.678l9.089 4.18-11.329 24.642-9.089-4.18 11.329-24.642zM307.108 454.224l18.029 18.032-7.07 7.071-18.029-18.032 7.07-7.071zM168.607 458.069l7.96 6.051-12.645 16.64-7.96-6.051 12.645-16.64zM223.584 418.056l7.96 6.051-12.645 16.641-7.96-6.051 12.645-16.641zM396.003 440.892l7.07 7.071-20.644 20.649-7.07-7.072 20.644-20.648zM476.22 341.812l18.004 28.164-8.429 5.391-18.004-28.164 8.429-5.391zM39.832 406.173l8.909 4.54-18.344 36.007-8.909-4.54 18.344-36.007zM439.65 439.761l5.339 30.054-9.848 1.75-5.339-30.054 9.848-1.75zM110.433 462.863l6.28 7.782-25.984 20.979-6.28-7.782 25.984-20.979zM376.417 483.075l25.299 12.649-4.472 8.943-25.298-12.649 4.471-8.943zM150.113 311.072l29.972 33.294-7.43 6.691-29.972-33.294 7.43-6.691zM98.518 312.409l9.058 4.241-14.672 31.357-9.059-4.24 14.673-31.358zM272.216 312.519l9.328 3.59-12.818 33.319-9.328-3.59 12.818-33.319z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M503.102 350.137c-9.099 0-23.196-11.905-49.691-35.914-13.297-12.105-26.994-24.61-32.993-27.011-2.8-1.1-13.598-.4-24.095.4-32.794 2.301-87.583 6.203-119.277-23.409-16.397-15.206-24.695-37.615-24.695-66.426 0-71.328-15.397-94.737-24.596-102.34-6.598-5.502-12.097-4.702-12.097-4.702-.2 0-.4.1-.6.1l-47.691 3.302c-2.099.1-4.199-1.1-4.999-3.102-.8-2-.3-4.301 1.4-5.702L203.46 51.52c0-6.803 1.2-25.41 13.298-38.315C224.856 4.602 236.054.2 250.051.2c40.092 0 50.49 31.512 53.89 78.73 1.199 16.607 14.197 21.509 38.892 29.412 20.596 6.603 46.291 14.806 68.187 36.515 41.892 41.616 47.89 100.939 48.59 112.643 9.398 9.904 52.39 56.723 52.39 82.433 0 6.102-2.8 8.603-5.199 9.703-1.2.301-2.4.501-3.699.501zm-88.783-73.529c4.499 0 7.599.4 9.898 1.3 7.599 3.102 20.696 15.006 35.993 28.912 9.298 8.403 18.796 17.106 26.995 23.609 8.698 6.903 12.897 8.903 14.697 9.504v-.2c0-19.608-36.693-62.125-50.79-76.83-.9-.901-1.3-2.101-1.4-3.302 0-.6-2.999-65.325-45.791-107.842-20.196-20.108-43.591-27.511-64.187-34.113-23.696-7.603-44.192-14.106-45.891-38.215-4.2-58.023-19.297-69.427-43.992-69.427-11.098 0-19.896 3.301-25.995 9.804-11.797 12.605-10.498 33.213-10.498 33.413.1 1.6-.5 3.1-1.699 4.101l-29.895 25.61 32.394-2.2c2.1-.3 10.598-.9 19.996 6.902 18.797 15.506 28.295 52.521 28.295 110.043 0 25.91 7.198 45.818 21.495 59.123 28.595 26.611 80.685 22.909 111.779 20.708 7.798-.5 13.897-.9 18.596-.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M439.014 268.605c-2.399 0-4.999-.2-7.698-.8-11.298-2.401-21.496-9.904-30.594-22.409-5.299 5.802-14.697 13.705-24.595 11.804-7.999-1.5-13.998-8.903-17.897-22.008-9.998 1-32.493-.4-44.091-30.112-13.798-35.414-14.497-62.224-14.497-63.325l9.998-.2c0 .3.7 26.311 13.797 59.924 11.698 30.111 35.993 23.609 36.993 23.309 1.299-.4 2.699-.2 3.899.5 1.2.7 2 1.801 2.399 3.101 2.8 11.405 6.799 18.207 11.298 19.008 6.399 1.2 15.597-8.404 19.097-13.206.999-1.4 2.599-2.1 4.199-2.1 1.699 0 3.199.9 4.099 2.301 8.398 13.405 17.796 21.308 27.894 23.609 10.598 2.401 18.397-2.501 18.697-2.701l5.499 8.403c-.5.2-7.799 4.902-18.497 4.902zM227.256 88.134l-9.599-2.9c5.499-18.208-10.797-26.811-11.497-27.211l4.499-8.904c8.498 4.202 22.995 17.907 16.597 39.015zM347.732 333.43l-8.898-4.602 9.498-18.407-5.899-25.61 9.698-2.301 6.399 27.411c.3 1.2.1 2.401-.4 3.401l-10.398 20.108zM382.125 332.23l-9.798-2.201 4.399-19.608-8.898-24.81 9.398-3.401 9.299 26.21c.299.901.399 1.801.199 2.802l-4.599 21.008z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M382.799 193.434l22.701 40.915-8.739 4.85-22.701-40.915 8.739-4.85zM354.751 194.578l11.966 33.453-9.419 3.37-11.965-33.453 9.418-3.37zM87.283 311.822l-9.898-1.301c3.3-24.209 12.197-48.319 25.895-69.927 12.197-19.208 27.194-34.914 42.291-44.117 12.698-7.803 24.296-10.204 33.394-7.003 11.198 3.901 19.996 15.706 26.295 35.014l-9.498 3.101c-5.199-16.006-12.098-25.91-20.096-28.711-6.099-2.201-14.997 0-24.896 6.102-26.594 16.206-56.889 58.223-63.487 106.842z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M319.938 336.131H199.461c-1.799 0-3.399-1-4.299-2.501-11.898-20.608-10.798-79.031 2.1-113.744 6.198-16.607 14.497-26.811 24.695-30.412 10.298-3.601 23.995 0 38.492 10.304l-5.799 8.203c-11.597-8.203-22.295-11.504-29.394-9.003-7.198 2.501-13.597 11.004-18.596 24.509-11.998 32.313-12.198 83.833-4.099 102.74h112.278c-.6-15.906-3.8-32.012-9.598-47.818l9.398-3.502c6.898 18.608 10.298 37.515 10.298 56.322 0 2.701-2.2 4.902-4.999 4.902z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M285.944 512.2H164.268c-22.696 0-54.889-22.609-83.284-42.617-11.697-8.203-22.695-16.006-30.394-20.007C18.496 432.669 0 405.058 0 373.846c0-30.312 16.397-47.719 44.991-47.719H466.91c6.599 0 12.697.901 17.996 2.801l-3.299 9.504c-4.299-1.5-9.298-2.201-14.697-2.201H44.991c-23.195 0-34.993 12.705-34.993 37.715 0 38.915 31.694 59.723 45.291 66.926 8.199 4.302 18.996 11.905 31.394 20.608 25.895 18.207 58.089 40.816 77.585 40.816h121.676v9.904zM347.632 512.2H305.94v-10.004h41.692c19.496 0 51.69-22.609 77.585-40.816 12.498-8.803 23.196-16.306 31.394-20.608 13.597-7.203 45.291-28.011 45.291-66.926 0-11.605-2.599-20.708-7.698-26.911l7.698-6.302c6.599 8.103 9.898 19.208 9.898 33.213 0 31.212-18.496 58.823-50.69 75.83-7.598 4.001-18.696 11.804-30.394 20.007-28.294 19.908-60.488 42.517-83.084 42.517z" })));
};

var Icon$1T = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#066AC8", d: "M251 224h-10v-16.5c0-26.7-5-88.8-54-88.8v-10c21 0 38.2 10.1 49.2 29.2 9.7 16.8 14.8 40.9 14.8 69.5V224zM271 224h-10v-16.5c0-28.7 5.1-52.8 14.8-69.6 11-19.2 28.2-29.4 49.2-29.4v10c-49 0-54 62.2-54 89V224z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M256 243.5c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20zM276 293.5c0 41.4-9 100-20 100s-20-58.6-20-100 9-50 20-50 20 8.6 20 50z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M243 273s-23-51.5-39.2-72.7C189.7 181.9 108.3 75 64.2 75 20.1 75 5 91 5 131s30.3 36.3 47.4 76.5c17.1 40.2-9.9 65.5 41.5 65.5H243z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M162.7 149.8c-45.3-27.7-49.7 2.5-49.7 2.5C43.7 120.5 89.7 185 89.7 185c-27 30 10.3 38.5 10.3 38.5-37 30.5 6 49.5 6 49.5H93.9c-51.4 0-24.4-25.3-41.5-65.5S5 171 5 131s15.1-56 59.3-56c26.8 0 67.5 39.7 98.4 74.8z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M243 273H89c-9.3 0-24 22.7-24 75.3 0 52.6 24 88.7 89 88.7 26.3 0 26.5-30.8 47.7-52 16.3-16.3 41.3-41.2 41.3-66.5V273z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M187 405.6c-9 16.3-14.6 31.4-33 31.4-65 0-89-36-89-88.7S79.7 273 89 273h11s-13 14.5-3.5 26c0 0-15 27 3.5 36.5 0 0-16.5 36 13 47 0 0 14.4 27.5 38.2 18 0 0 11.3 18.2 35.8 5.1zM229.7 253.8c-67.7-30.7-128.6-25.4-129.3-25.4l-1-10c2.6-.2 64.1-5.7 134.3 26.2l-4 9.2z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M187.4 238.5c-45.7-20.4-77.5-81.2-78.8-83.8l8.9-4.6c.3.6 31.6 60.3 74 79.3l-4.1 9.1z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M140.2 199.9c-26.8-11.2-50-9.9-50.2-9.9l-.6-10c1-.1 25.8-1.4 54.7 10.7l-3.9 9.2z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M94.9 128.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM54.9 128.4c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zM269 273s23-51.5 39.2-72.7C322.3 181.9 403.7 75 447.8 75c44.1 0 59.2 16 59.2 56s-30.3 36.3-47.4 76.5c-17.1 40.2 9.9 65.5-41.5 65.5H269zM269 273h154s24 22.7 24 75.3c0 52.6-24 88.7-89 88.7-26.3 0-26.5-30.8-47.7-52-16.3-16.3-41.3-41.2-41.3-66.5V273z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M439.3 293c-5-13.7-11.4-20-16.3-20H269v20h170.3z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M349.3 149.8c45.3-27.7 49.7 2.5 49.7 2.5 69.3-31.8 23.3 32.6 23.3 32.6 27 30-10.3 38.5-10.3 38.5 37 30.5-6 49.5-6 49.5h12.1c51.4 0 24.4-25.3 41.5-65.5C476.7 167.3 507 171 507 131c0-40-15.1-56-59.3-56-26.8 0-67.5 39.7-98.4 74.8zM325 405.6c9 16.3 14.6 31.4 33 31.4 65 0 89-36 89-88.7S432.3 273 423 273h-11s13 14.5 3.5 26c0 0 15 27-3.5 36.5 0 0 16.5 36-13 47 0 0-14.4 27.5-38.2 18 0 0-11.3 18.2-35.8 5.1z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M282.3 253.6l-4.1-9c70.3-31.9 131.8-26.6 134.3-26.4l-1 9.8c-.8 0-61.6-5.1-129.2 25.6z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M324.6 238.5l-4.1-9.1c42.5-19 73.7-78.7 74-79.3l8.9 4.6c-1.3 2.5-33.1 63.4-78.8 83.8z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M371.8 199.9l-3.8-9.2c28.9-12 53.6-10.7 54.7-10.7l-.6 10c-.3 0-23.6-1.2-50.3 9.9z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M417.1 128.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM457.1 128.4c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z" }),
        React__default['default'].createElement("path", { fill: "#066AC8", d: "M418.5 293h20.7c-5-13.7-11.4-20-16.3-20h-11c.1 0 9.1 10 6.6 20z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M72.7 293H243v-20H89c-4.9 0-11.3 6.3-16.3 20z" }),
        React__default['default'].createElement("path", { fill: "#066AC8", d: "M72.7 293h20.7c-2.4-10 6.5-20 6.5-20H89c-4.9 0-11.3 6.3-16.3 20z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M159.9 352.7c-7.4 0-15-2.6-21.2-8.6-4-3.8-8.3-12.5.3-42.8 4.4-15.6 10.1-29.6 10.4-30.2l9.2 3.8c-.1.1-5.8 14.1-10 29.2-7.7 27.3-3.5 32.4-3 32.8 9.9 9.6 23.4 5.6 29.5 0 8.5-8 62.4-53.3 64.7-55.2l6.4 7.7c-.6.5-56 47-64.3 54.8-5.6 5.2-13.7 8.5-22 8.5z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M145.719 290.221l.77 9.97-49.551 3.827-.77-9.97 49.551-3.827zM137.981 313.753l3.9 9.21-40.064 16.965-3.9-9.21 40.064-16.965zM142.146 340.399l7.62 6.48-33.048 38.862-7.62-6.48 33.048-38.862zM177.15 335.233l8.99 4.38-30.703 63.02-8.99-4.38 30.703-63.02zM204.648 313.574l10 .24-1.558 64.9-10-.24 1.558-64.9zM352.1 352.7c-8.4 0-16.5-3.3-22.1-8.5-8.3-7.8-63.7-54.3-64.3-54.8l6.4-7.7c2.3 1.9 56.2 47.2 64.7 55.2 6 5.7 19.6 9.6 29.5 0 .5-.5 4.7-5.6-3-32.9-4.3-15.1-10-28.9-10-29.1l9.2-3.8c.2.6 6 14.6 10.4 30.2 8.6 30.4 4.3 39 .3 42.8-6.1 6-13.7 8.6-21.1 8.6z" }),
        React__default['default'].createElement("path", { fill: "#097FED", d: "M366.354 290.185l49.551 3.827-.77 9.97-49.551-3.827.77-9.97zM374.137 313.87l40.064 16.965-3.9 9.21-40.064-16.965 3.9-9.21zM369.877 340.585l33.048 38.862-7.62 6.48-33.048-38.862 7.62-6.48zM334.807 335.386l30.704 63.02-8.99 4.38-30.704-63.02 8.99-4.38zM307.267 313.607l1.557 64.9-10 .24-1.557-64.9 10-.24z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 248.5c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm0-40c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 208h-10c0-27-5.3-89.5-54-89.5v-10c21.2 0 38.2 10.4 49.2 29.6C245.9 155 251 179 251 208zM271 208h-10c0-29 5.1-53 14.8-69.9 11-19.2 28-29.6 49.2-29.6v10c-48.8 0-54 62.5-54 89.5zM243 278H93.9c-36.1 0-38.5-12.8-39.4-33.7-.4-10.1-.9-21.5-6.6-34.8-7.1-16.6-16.3-25.1-25.3-33.2C10.9 165.6 0 155.6 0 131c0-22.1 4.6-36.9 14.6-46.6C24.8 74.6 40.5 70 64.2 70c19.9 0 48.1 19 84 56.6 27.6 29 51.4 60 59.2 70.2l.3.5c16.4 21.4 38.8 71.5 39.8 73.7.7 1.5.6 3.3-.4 4.8-.8 1.3-2.4 2.2-4.1 2.2zM64.2 80C23.7 80 10 92.9 10 131c0 20.2 8.1 27.6 19.3 37.8 9.3 8.5 19.8 18.1 27.7 36.7 6.4 15 7 28 7.4 38.3.4 8.5.6 14.6 3.8 18.2 3.6 4 11.7 5.9 25.6 5.9h141.3c-6.9-14.7-23.2-48.8-35.4-64.6l-.4-.5C139.8 124.8 90.5 80 64.2 80z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M154 442c-32.4 0-56.8-8.8-72.6-26.2C67.2 400.1 60 377.4 60 348.3c0-22.8 2.8-42.6 8-57l9.4 3.4C74 304 70 320.9 70 348.3c0 26.5 6.3 46.9 18.8 60.7 13.8 15.2 35.7 22.9 65.2 22.9 12.7 0 17.7-8.4 25.6-23.2 4.7-8.8 9.9-18.7 18.5-27.3l.3-.3c15.7-15.7 39.5-39.5 39.5-62.6V273h10v45.5c0 27.2-25.6 52.8-42.5 69.7l-.3.3c-7.5 7.5-12.2 16.4-16.8 24.9-7.6 14.7-15 28.6-34.3 28.6zM104 277.6c-.9-.4-21.4-9.7-23.8-26.7-1.2-8.5 2.3-17 10.4-25.5-5.6-2.7-12.4-7.3-14.8-15-2.5-7.7.1-16.4 7.6-25.7-6.7-10-19.2-31.4-10.8-41.5 5.7-6.9 17.4-6.2 37.5 2.4 1.7-3.5 4.7-7.6 10.2-10.2 10.7-5 25.8-1.6 45.1 10.2l-5.2 8.5c-15.8-9.6-28.4-13-35.6-9.7-5.5 2.6-6.5 8.6-6.5 8.6-.2 1.6-1.2 2.9-2.6 3.7-1.4.8-3 .8-4.5.2-26.3-12.1-30.5-7.6-30.7-7.4-2.7 3.3 3.7 18.8 13.5 32.6 1.4 1.9 1.2 4.5-.4 6.2-4.8 5.3-10 12.9-8.1 19.1 2.1 6.7 12.4 10.4 15.8 11.2 1.9.4 3.3 1.9 3.8 3.7.5 1.8-.2 3.8-1.7 5-9.6 7.9-14 15.4-13.1 22.1 1.6 11.4 17.8 18.9 17.9 18.9l-4 9.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M229.7 253.8c-67.7-30.7-128.6-25.4-129.3-25.4l-1-10c2.6-.2 64.1-5.7 134.3 26.2l-4 9.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M187.4 238.5c-45.7-20.4-77.5-81.2-78.8-83.8l8.9-4.6c.3.6 31.6 60.3 74 79.3l-4.1 9.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M140.2 199.9c-26.8-11.2-50-9.9-50.2-9.9l-.6-10c1-.1 25.8-1.4 54.7 10.7l-3.9 9.2zM95 133.4c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.8 15-15 15zm0-20c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zM55 133.4c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0-30c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM159.9 352.7c-7.4 0-15-2.6-21.2-8.6-4-3.8-8.3-12.5.3-42.8 4.4-15.6 10.1-29.6 10.4-30.2l9.2 3.8c-.1.1-5.8 14.1-10 29.2-7.7 27.3-3.5 32.4-3 32.8 9.9 9.6 23.4 5.6 29.5 0 8.5-8 62.4-53.3 64.7-55.2l6.4 7.7c-.6.5-56 47-64.3 54.8-5.6 5.2-13.7 8.5-22 8.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M170.2 415.3c-9.6 0-16.7-4.5-20.8-9-19.3 5.3-33.9-9.6-39.9-19.9-8-3.4-13.5-8.8-16.6-16.1-5-12.1-1.4-26.1.9-32.9-3.4-2.7-5.7-6.1-7-10.3-3.1-10.3 1.4-22.3 3.9-27.7-6.6-11.2.5-24.1 5.6-29.8l7.4 6.7-3.7-3.3 3.7 3.3c-.4.5-10 11.5-3.4 19.5 1.3 1.6 1.5 3.8.5 5.6-2 3.7-6.8 15-4.5 22.8.9 3 2.8 5.2 5.9 6.8 2.4 1.2 3.4 4.1 2.3 6.5-.1.2-7.5 16.7-2.4 29 2.2 5.2 6.3 8.9 12.6 11.2 1.2.4 2.1 1.3 2.7 2.4.5.9 12.7 23.4 31.9 15.7 2.3-.9 4.8-.1 6.1 2 .9 1.4 9.7 13.8 29.2 3.3l4.7 8.8c-7.1 3.9-13.5 5.4-19.1 5.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M145.719 290.221l.77 9.97-49.551 3.827-.77-9.97 49.551-3.827zM137.981 313.753l3.9 9.21-40.064 16.965-3.9-9.21 40.064-16.965zM142.146 340.399l7.62 6.48-33.048 38.862-7.62-6.48 33.048-38.862zM177.15 335.233l8.99 4.38-30.703 63.02-8.99-4.38 30.703-63.02zM204.648 313.574l10 .24-1.558 64.9-10-.24 1.558-64.9zM358 442c-19.3 0-26.7-13.9-34.4-28.5-4.5-8.6-9.2-17.4-16.8-24.9l-.3-.3c-16.9-16.9-42.5-42.5-42.5-69.7V273c0-2.8 2.2-5 5-5h154c14.4 0 29 27.6 29 80.3 0 29.1-7.2 51.8-21.4 67.4-15.8 17.5-40.2 26.3-72.6 26.3zm-84-164v40.5c0 23.1 23.8 46.9 39.5 62.6l.3.3c8.6 8.6 13.9 18.5 18.5 27.3 7.9 14.8 12.9 23.2 25.6 23.2 29.4 0 51.4-7.7 65.2-22.9 12.5-13.8 18.8-34.2 18.8-60.7 0-52.7-15-70.3-19-70.3H274z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M408 277.6l-4-9.1 2 4.6-2-4.6c4.5-2 16.6-9.4 17.9-19 .9-6.8-3.5-14.2-13.1-22.1-1.5-1.2-2.1-3.2-1.7-5 .4-1.8 1.9-3.3 3.8-3.7 3.7-.9 13.7-4.6 15.8-11.2 1.9-6.1-3.3-13.7-8.1-19-1.6-1.7-1.7-4.3-.4-6.2 9.8-13.7 16.2-29.3 13.5-32.6-.2-.2-4.3-4.7-30.7 7.4-1.4.7-3.1.6-4.5-.2s-2.3-2.1-2.6-3.7c0-.2-1.1-6.1-6.6-8.7-5.1-2.3-15.4-2.6-35.5 9.7l-5.2-8.5c19.3-11.8 34.4-15.2 45.1-10.2 5.4 2.5 8.5 6.7 10.2 10.2 20.1-8.6 31.8-9.3 37.5-2.4 8.4 10.1-4.1 31.5-10.8 41.5 7.5 9.4 10.1 18 7.6 25.7-2.4 7.6-9.2 12.3-14.8 15 8.1 8.4 11.6 17 10.4 25.5-2.3 16.9-22.9 26.2-23.8 26.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M282.3 253.6l-4.1-9c70.3-31.9 131.8-26.6 134.3-26.4l-1 9.8c-.8 0-61.6-5.1-129.2 25.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M324.6 238.5l-4.1-9.1c42.5-19 73.7-78.7 74-79.3l8.9 4.6c-1.3 2.5-33.1 63.4-78.8 83.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M371.8 199.9l-3.8-9.2c28.9-12 53.6-10.7 54.7-10.7l-.6 10c-.3 0-23.6-1.2-50.3 9.9zM417 133.4c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm0-20c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM457 133.4c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-8.9 20-20 20zm0-30c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.4-10-10-10zM352.1 352.7c-8.4 0-16.5-3.3-22.1-8.5-8.3-7.8-63.7-54.3-64.3-54.8l6.4-7.7c2.3 1.9 56.2 47.2 64.7 55.2 6 5.7 19.6 9.6 29.5 0 .5-.5 4.7-5.6-3-32.9-4.3-15.1-10-28.9-10-29.1l9.2-3.8c.2.6 6 14.6 10.4 30.2 8.6 30.4 4.3 39 .3 42.8-6.1 6-13.7 8.6-21.1 8.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M341.8 415.3c-5.6 0-11.9-1.5-19.1-5.3l4.7-8.8c19.5 10.4 28.3-1.9 29.2-3.4 1.3-2 3.9-2.9 6.1-2 19.4 7.7 31.4-14.7 31.9-15.7.6-1.1 1.5-1.9 2.7-2.4 6.3-2.3 10.4-6 12.6-11.3 4.2-10.3-.3-24.4-2.4-29-1.1-2.4-.1-5.3 2.3-6.5 3-1.6 5-3.8 5.9-6.8 2.4-7.8-2.4-19.1-4.5-22.8-1-1.8-.8-4 .5-5.6 6.6-8-3-19-3.4-19.5l7.5-6.7c5.1 5.7 12.1 18.6 5.6 29.8 2.5 5.4 7 17.4 3.9 27.7-1.3 4.2-3.6 7.7-7 10.3 2.3 6.8 5.9 20.8.9 32.9-3 7.3-8.6 12.7-16.6 16.1-6.1 10.3-20.7 25.2-39.9 19.9-4.2 4.6-11.3 9.1-20.9 9.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M366.354 290.185l49.551 3.827-.77 9.97-49.551-3.827.77-9.97zM374.137 313.87l40.064 16.965-3.9 9.21-40.064-16.965 3.9-9.21zM369.877 340.585l33.048 38.862-7.62 6.48-33.048-38.862 7.62-6.48zM334.807 335.386l30.704 63.02-8.99 4.38-30.704-63.02 8.99-4.38zM307.267 313.607l1.557 64.9-10 .24-1.557-64.9 10-.24zM256 398.5c-6.2 0-10.8-6.3-14.9-20.4-2.9-10.2-5.5-24-7.3-39.9l9.9-1.2c3.7 31.8 9.2 47.5 12.3 51 3.1-3.6 8.6-19.3 12.3-51.2l9.9 1.2c-1.9 16-4.4 29.8-7.3 40-4.1 14.2-8.7 20.5-14.9 20.5zM268.6 264.3c-3.4-15.8-9.4-15.8-12.6-15.8-3.2 0-9.2 0-12.6 15.8l-9.8-2.1c3.5-15.9 10.8-23.6 22.4-23.6 11.6 0 18.9 7.7 22.4 23.6l-9.8 2.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M418.1 278H269c-1.7 0-3.3-.9-4.2-2.3-.9-1.4-1.1-3.2-.4-4.8.9-2.1 23.4-52.3 39.8-73.7l.4-.6c1.7-2.3 4.3-5.7 7.6-9.9l7.9 6.2c-3.3 4.2-5.8 7.5-7.6 9.8l-.4.6c-12.1 15.9-28.5 49.9-35.4 64.6H418c13.9 0 22.1-1.9 25.6-5.9 3.2-3.6 3.5-9.7 3.8-18.2.5-10.4 1-23.3 7.4-38.3 7.9-18.6 18.4-28.2 27.7-36.7 11.2-10.2 19.3-17.6 19.3-37.8 0-38.1-13.7-51-54.2-51-22.6 0-62.2 33.1-111.7 93.1l-7.7-6.4c21-25.5 40.5-46.4 57.9-62.2C411.9 81.3 432 70 447.8 70c23.7 0 39.5 4.6 49.6 14.4 10 9.6 14.6 24.5 14.6 46.6 0 24.6-10.9 34.6-22.5 45.2-8.9 8.2-18.2 16.6-25.3 33.2-5.7 13.4-6.2 24.8-6.6 34.8-.9 21-3.3 33.8-39.5 33.8z" })));
};

var Icon$1S = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M251 224h-10v-16.5c0-26.7-5-88.8-54-88.8v-10c21 0 38.2 10.1 49.2 29.2 9.7 16.8 14.8 40.9 14.8 69.5V224zM271 224h-10v-16.5c0-28.7 5.1-52.8 14.8-69.6 11-19.2 28.2-29.4 49.2-29.4v10c-49 0-54 62.2-54 89V224z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M256 243.5c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20zM276 293.5c0 41.4-9 100-20 100s-20-58.6-20-100 9-50 20-50 20 8.6 20 50z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M243 273s-23-51.5-39.2-72.7C189.7 181.9 108.3 75 64.2 75 20.1 75 5 91 5 131s30.3 36.3 47.4 76.5c17.1 40.2-9.9 65.5 41.5 65.5H243z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M162.7 149.8c-45.3-27.7-49.7 2.5-49.7 2.5C43.7 120.5 89.7 185 89.7 185c-27 30 10.3 38.5 10.3 38.5-37 30.5 6 49.5 6 49.5H93.9c-51.4 0-24.4-25.3-41.5-65.5S5 171 5 131s15.1-56 59.3-56c26.8 0 67.5 39.7 98.4 74.8z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M243 273H89c-9.3 0-24 22.7-24 75.3 0 52.6 24 88.7 89 88.7 26.3 0 26.5-30.8 47.7-52 16.3-16.3 41.3-41.2 41.3-66.5V273z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M187 405.6c-9 16.3-14.6 31.4-33 31.4-65 0-89-36-89-88.7S79.7 273 89 273h11s-13 14.5-3.5 26c0 0-15 27 3.5 36.5 0 0-16.5 36 13 47 0 0 14.4 27.5 38.2 18 0 0 11.3 18.2 35.8 5.1zM229.7 253.8c-67.7-30.7-128.6-25.4-129.3-25.4l-1-10c2.6-.2 64.1-5.7 134.3 26.2l-4 9.2z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M187.4 238.5c-45.7-20.4-77.5-81.2-78.8-83.8l8.9-4.6c.3.6 31.6 60.3 74 79.3l-4.1 9.1z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M140.2 199.9c-26.8-11.2-50-9.9-50.2-9.9l-.6-10c1-.1 25.8-1.4 54.7 10.7l-3.9 9.2z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M94.9 128.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM54.9 128.4c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zM269 273s23-51.5 39.2-72.7C322.3 181.9 403.7 75 447.8 75c44.1 0 59.2 16 59.2 56s-30.3 36.3-47.4 76.5c-17.1 40.2 9.9 65.5-41.5 65.5H269zM269 273h154s24 22.7 24 75.3c0 52.6-24 88.7-89 88.7-26.3 0-26.5-30.8-47.7-52-16.3-16.3-41.3-41.2-41.3-66.5V273z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M439.3 293c-5-13.7-11.4-20-16.3-20H269v20h170.3z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M349.3 149.8c45.3-27.7 49.7 2.5 49.7 2.5 69.3-31.8 23.3 32.6 23.3 32.6 27 30-10.3 38.5-10.3 38.5 37 30.5-6 49.5-6 49.5h12.1c51.4 0 24.4-25.3 41.5-65.5C476.7 167.3 507 171 507 131c0-40-15.1-56-59.3-56-26.8 0-67.5 39.7-98.4 74.8zM325 405.6c9 16.3 14.6 31.4 33 31.4 65 0 89-36 89-88.7S432.3 273 423 273h-11s13 14.5 3.5 26c0 0 15 27-3.5 36.5 0 0 16.5 36-13 47 0 0-14.4 27.5-38.2 18 0 0-11.3 18.2-35.8 5.1z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M282.3 253.6l-4.1-9c70.3-31.9 131.8-26.6 134.3-26.4l-1 9.8c-.8 0-61.6-5.1-129.2 25.6z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M324.6 238.5l-4.1-9.1c42.5-19 73.7-78.7 74-79.3l8.9 4.6c-1.3 2.5-33.1 63.4-78.8 83.8z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M371.8 199.9l-3.8-9.2c28.9-12 53.6-10.7 54.7-10.7l-.6 10c-.3 0-23.6-1.2-50.3 9.9z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M417.1 128.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM457.1 128.4c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M418.5 293h20.7c-5-13.7-11.4-20-16.3-20h-11c.1 0 9.1 10 6.6 20z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M72.7 293H243v-20H89c-4.9 0-11.3 6.3-16.3 20z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M72.7 293h20.7c-2.4-10 6.5-20 6.5-20H89c-4.9 0-11.3 6.3-16.3 20z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M159.9 352.7c-7.4 0-15-2.6-21.2-8.6-4-3.8-8.3-12.5.3-42.8 4.4-15.6 10.1-29.6 10.4-30.2l9.2 3.8c-.1.1-5.8 14.1-10 29.2-7.7 27.3-3.5 32.4-3 32.8 9.9 9.6 23.4 5.6 29.5 0 8.5-8 62.4-53.3 64.7-55.2l6.4 7.7c-.6.5-56 47-64.3 54.8-5.6 5.2-13.7 8.5-22 8.5z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M145.719 290.221l.77 9.97-49.551 3.827-.77-9.97 49.551-3.827zM137.981 313.753l3.9 9.21-40.064 16.965-3.9-9.21 40.064-16.965zM142.146 340.399l7.62 6.48-33.048 38.862-7.62-6.48 33.048-38.862zM177.15 335.233l8.99 4.38-30.703 63.02-8.99-4.38 30.703-63.02zM204.648 313.574l10 .24-1.558 64.9-10-.24 1.558-64.9zM352.1 352.7c-8.4 0-16.5-3.3-22.1-8.5-8.3-7.8-63.7-54.3-64.3-54.8l6.4-7.7c2.3 1.9 56.2 47.2 64.7 55.2 6 5.7 19.6 9.6 29.5 0 .5-.5 4.7-5.6-3-32.9-4.3-15.1-10-28.9-10-29.1l9.2-3.8c.2.6 6 14.6 10.4 30.2 8.6 30.4 4.3 39 .3 42.8-6.1 6-13.7 8.6-21.1 8.6z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M366.354 290.185l49.551 3.827-.77 9.97-49.551-3.827.77-9.97zM374.137 313.87l40.064 16.965-3.9 9.21-40.064-16.965 3.9-9.21zM369.877 340.585l33.048 38.862-7.62 6.48-33.048-38.862 7.62-6.48zM334.807 335.385l30.704 63.02-8.99 4.38-30.704-63.02 8.99-4.38zM307.267 313.607l1.557 64.9-10 .24-1.557-64.9 10-.24z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 248.5c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm0-40c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 208h-10c0-27-5.3-89.5-54-89.5v-10c21.2 0 38.2 10.4 49.2 29.6C245.9 155 251 179 251 208zM271 208h-10c0-29 5.1-53 14.8-69.9 11-19.2 28-29.6 49.2-29.6v10c-48.8 0-54 62.5-54 89.5zM243 278H93.9c-36.1 0-38.5-12.8-39.4-33.7-.4-10.1-.9-21.5-6.6-34.8-7.1-16.6-16.3-25.1-25.3-33.2C10.9 165.6 0 155.6 0 131c0-22.1 4.6-36.9 14.6-46.6C24.8 74.6 40.5 70 64.2 70c19.9 0 48.1 19 84 56.6 27.6 29 51.4 60 59.2 70.2l.3.5c16.4 21.4 38.8 71.5 39.8 73.7.7 1.5.6 3.3-.4 4.8-.8 1.3-2.4 2.2-4.1 2.2zM64.2 80C23.7 80 10 92.9 10 131c0 20.2 8.1 27.6 19.3 37.8 9.3 8.5 19.8 18.1 27.7 36.7 6.4 15 7 28 7.4 38.3.4 8.5.6 14.6 3.8 18.2 3.6 4 11.7 5.9 25.6 5.9h141.3c-6.9-14.7-23.2-48.8-35.4-64.6l-.4-.5C139.8 124.8 90.5 80 64.2 80z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M154 442c-32.4 0-56.8-8.8-72.6-26.2C67.2 400.1 60 377.4 60 348.3c0-22.8 2.8-42.6 8-57l9.4 3.4C74 304 70 320.9 70 348.3c0 26.5 6.3 46.9 18.8 60.7 13.8 15.2 35.7 22.9 65.2 22.9 12.7 0 17.7-8.4 25.6-23.2 4.7-8.8 9.9-18.7 18.5-27.3l.3-.3c15.7-15.7 39.5-39.5 39.5-62.6V273h10v45.5c0 27.2-25.6 52.8-42.5 69.7l-.3.3c-7.5 7.5-12.2 16.4-16.8 24.9-7.6 14.7-15 28.6-34.3 28.6zM104 277.6c-.9-.4-21.4-9.7-23.8-26.7-1.2-8.5 2.3-17 10.4-25.5-5.6-2.7-12.4-7.3-14.8-15-2.5-7.7.1-16.4 7.6-25.7-6.7-10-19.2-31.4-10.8-41.5 5.7-6.9 17.4-6.2 37.5 2.4 1.7-3.5 4.7-7.6 10.2-10.2 10.7-5 25.8-1.6 45.1 10.2l-5.2 8.5c-15.8-9.6-28.4-13-35.6-9.7-5.5 2.6-6.5 8.6-6.5 8.6-.2 1.6-1.2 2.9-2.6 3.7-1.4.8-3 .8-4.5.2-26.3-12.1-30.5-7.6-30.7-7.4-2.7 3.3 3.7 18.8 13.5 32.6 1.4 1.9 1.2 4.5-.4 6.2-4.8 5.3-10 12.9-8.1 19.1 2.1 6.7 12.4 10.4 15.8 11.2 1.9.4 3.3 1.9 3.8 3.7.5 1.8-.2 3.8-1.7 5-9.6 7.9-14 15.4-13.1 22.1 1.6 11.4 17.8 18.9 17.9 18.9l-4 9.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M229.7 253.8c-67.7-30.7-128.6-25.4-129.3-25.4l-1-10c2.6-.2 64.1-5.7 134.3 26.2l-4 9.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M187.4 238.5c-45.7-20.4-77.5-81.2-78.8-83.8l8.9-4.6c.3.6 31.6 60.3 74 79.3l-4.1 9.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M140.2 199.9c-26.8-11.2-50-9.9-50.2-9.9l-.6-10c1-.1 25.8-1.4 54.7 10.7l-3.9 9.2zM95 133.4c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.8 15-15 15zm0-20c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zM55 133.4c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0-30c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM159.9 352.7c-7.4 0-15-2.6-21.2-8.6-4-3.8-8.3-12.5.3-42.8 4.4-15.6 10.1-29.6 10.4-30.2l9.2 3.8c-.1.1-5.8 14.1-10 29.2-7.7 27.3-3.5 32.4-3 32.8 9.9 9.6 23.4 5.6 29.5 0 8.5-8 62.4-53.3 64.7-55.2l6.4 7.7c-.6.5-56 47-64.3 54.8-5.6 5.2-13.7 8.5-22 8.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M170.2 415.3c-9.6 0-16.7-4.5-20.8-9-19.3 5.3-33.9-9.6-39.9-19.9-8-3.4-13.5-8.8-16.6-16.1-5-12.1-1.4-26.1.9-32.9-3.4-2.7-5.7-6.1-7-10.3-3.1-10.3 1.4-22.3 3.9-27.7-6.6-11.2.5-24.1 5.6-29.8l7.4 6.7-3.7-3.3 3.7 3.3c-.4.5-10 11.5-3.4 19.5 1.3 1.6 1.5 3.8.5 5.6-2 3.7-6.8 15-4.5 22.8.9 3 2.8 5.2 5.9 6.8 2.4 1.2 3.4 4.1 2.3 6.5-.1.2-7.5 16.7-2.4 29 2.2 5.2 6.3 8.9 12.6 11.2 1.2.4 2.1 1.3 2.7 2.4.5.9 12.7 23.4 31.9 15.7 2.3-.9 4.8-.1 6.1 2 .9 1.4 9.7 13.8 29.2 3.3l4.7 8.8c-7.1 3.9-13.5 5.4-19.1 5.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M145.719 290.221l.77 9.97-49.551 3.827-.77-9.97 49.551-3.827zM137.981 313.753l3.9 9.21-40.064 16.965-3.9-9.21 40.064-16.965zM142.146 340.399l7.62 6.48-33.048 38.862-7.62-6.48 33.048-38.862zM177.15 335.233l8.99 4.38-30.703 63.02-8.99-4.38 30.703-63.02zM204.648 313.574l10 .24-1.558 64.9-10-.24 1.558-64.9zM358 442c-19.3 0-26.7-13.9-34.4-28.5-4.5-8.6-9.2-17.4-16.8-24.9l-.3-.3c-16.9-16.9-42.5-42.5-42.5-69.7V273c0-2.8 2.2-5 5-5h154c14.4 0 29 27.6 29 80.3 0 29.1-7.2 51.8-21.4 67.4-15.8 17.5-40.2 26.3-72.6 26.3zm-84-164v40.5c0 23.1 23.8 46.9 39.5 62.6l.3.3c8.6 8.6 13.9 18.5 18.5 27.3 7.9 14.8 12.9 23.2 25.6 23.2 29.4 0 51.4-7.7 65.2-22.9 12.5-13.8 18.8-34.2 18.8-60.7 0-52.7-15-70.3-19-70.3H274z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M408 277.6l-4-9.1 2 4.6-2-4.6c4.5-2 16.6-9.4 17.9-19 .9-6.8-3.5-14.2-13.1-22.1-1.5-1.2-2.1-3.2-1.7-5 .4-1.8 1.9-3.3 3.8-3.7 3.7-.9 13.7-4.6 15.8-11.2 1.9-6.1-3.3-13.7-8.1-19-1.6-1.7-1.7-4.3-.4-6.2 9.8-13.7 16.2-29.3 13.5-32.6-.2-.2-4.3-4.7-30.7 7.4-1.4.7-3.1.6-4.5-.2s-2.3-2.1-2.6-3.7c0-.2-1.1-6.1-6.6-8.7-5.1-2.3-15.4-2.6-35.5 9.7l-5.2-8.5c19.3-11.8 34.4-15.2 45.1-10.2 5.4 2.5 8.5 6.7 10.2 10.2 20.1-8.6 31.8-9.3 37.5-2.4 8.4 10.1-4.1 31.5-10.8 41.5 7.5 9.4 10.1 18 7.6 25.7-2.4 7.6-9.2 12.3-14.8 15 8.1 8.4 11.6 17 10.4 25.5-2.3 16.9-22.9 26.2-23.8 26.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M282.3 253.6l-4.1-9c70.3-31.9 131.8-26.6 134.3-26.4l-1 9.8c-.8 0-61.6-5.1-129.2 25.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M324.6 238.5l-4.1-9.1c42.5-19 73.7-78.7 74-79.3l8.9 4.6c-1.3 2.5-33.1 63.4-78.8 83.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M371.8 199.9l-3.8-9.2c28.9-12 53.6-10.7 54.7-10.7l-.6 10c-.3 0-23.6-1.2-50.3 9.9zM417 133.4c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm0-20c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM457 133.4c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-8.9 20-20 20zm0-30c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.4-10-10-10zM352.1 352.7c-8.4 0-16.5-3.3-22.1-8.5-8.3-7.8-63.7-54.3-64.3-54.8l6.4-7.7c2.3 1.9 56.2 47.2 64.7 55.2 6 5.7 19.6 9.6 29.5 0 .5-.5 4.7-5.6-3-32.9-4.3-15.1-10-28.9-10-29.1l9.2-3.8c.2.6 6 14.6 10.4 30.2 8.6 30.4 4.3 39 .3 42.8-6.1 6-13.7 8.6-21.1 8.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M341.8 415.3c-5.6 0-11.9-1.5-19.1-5.3l4.7-8.8c19.5 10.4 28.3-1.9 29.2-3.4 1.3-2 3.9-2.9 6.1-2 19.4 7.7 31.4-14.7 31.9-15.7.6-1.1 1.5-1.9 2.7-2.4 6.3-2.3 10.4-6 12.6-11.3 4.2-10.3-.3-24.4-2.4-29-1.1-2.4-.1-5.3 2.3-6.5 3-1.6 5-3.8 5.9-6.8 2.4-7.8-2.4-19.1-4.5-22.8-1-1.8-.8-4 .5-5.6 6.6-8-3-19-3.4-19.5l7.5-6.7c5.1 5.7 12.1 18.6 5.6 29.8 2.5 5.4 7 17.4 3.9 27.7-1.3 4.2-3.6 7.7-7 10.3 2.3 6.8 5.9 20.8.9 32.9-3 7.3-8.6 12.7-16.6 16.1-6.1 10.3-20.7 25.2-39.9 19.9-4.2 4.6-11.3 9.1-20.9 9.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M366.354 290.185l49.551 3.827-.77 9.97-49.551-3.827.77-9.97zM374.137 313.87l40.064 16.965-3.9 9.21-40.064-16.965 3.9-9.21zM369.877 340.585l33.048 38.862-7.62 6.48-33.048-38.862 7.62-6.48zM334.807 335.385l30.704 63.02-8.99 4.38-30.704-63.02 8.99-4.38zM307.267 313.607l1.557 64.9-10 .24-1.557-64.9 10-.24zM256 398.5c-6.2 0-10.8-6.3-14.9-20.4-2.9-10.2-5.5-24-7.3-39.9l9.9-1.2c3.7 31.8 9.2 47.5 12.3 51 3.1-3.6 8.6-19.3 12.3-51.2l9.9 1.2c-1.9 16-4.4 29.8-7.3 40-4.1 14.2-8.7 20.5-14.9 20.5zM268.6 264.3c-3.4-15.8-9.4-15.8-12.6-15.8-3.2 0-9.2 0-12.6 15.8l-9.8-2.1c3.5-15.9 10.8-23.6 22.4-23.6 11.6 0 18.9 7.7 22.4 23.6l-9.8 2.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M418.1 278H269c-1.7 0-3.3-.9-4.2-2.3-.9-1.4-1.1-3.2-.4-4.8.9-2.1 23.4-52.3 39.8-73.7l.4-.6c1.7-2.3 4.3-5.7 7.6-9.9l7.9 6.2c-3.3 4.2-5.8 7.5-7.6 9.8l-.4.6c-12.1 15.9-28.5 49.9-35.4 64.6H418c13.9 0 22.1-1.9 25.6-5.9 3.2-3.6 3.5-9.7 3.8-18.2.5-10.4 1-23.3 7.4-38.3 7.9-18.6 18.4-28.2 27.7-36.7 11.2-10.2 19.3-17.6 19.3-37.8 0-38.1-13.7-51-54.2-51-22.6 0-62.2 33.1-111.7 93.1l-7.7-6.4c21-25.5 40.5-46.4 57.9-62.2C411.9 81.3 432 70 447.8 70c23.7 0 39.5 4.6 49.6 14.4 10 9.6 14.6 24.5 14.6 46.6 0 24.6-10.9 34.6-22.5 45.2-8.9 8.2-18.2 16.6-25.3 33.2-5.7 13.4-6.2 24.8-6.6 34.8-.9 21-3.3 33.8-39.5 33.8z" })));
};

var Icon$1R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1M = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("g", { "clip-path": "url(#clip0)" },
                React__default['default'].createElement("path", { d: "M416.3 65.3C416.3 65.3 402.3 36.6 432.3 15C432.3 15 458.5 38.7 446.6 66.7C446.6 66.7 467.9 38.7 506.9 54.8C506.9 54.8 504.9 102.7 454.9 96.1C454.9 96.1 493.9 116.1 467.9 165.1C467.9 165.1 427.2 152.1 432.2 117.8C432.2 117.8 428.2 162.5 374.2 165.1C374.2 165.1 364.7 115.8 406.2 99.1C406.2 99.1 372.9 103.4 356.9 65.8C357 65.7 371.3 41 416.3 65.3Z", fill: "#D84861" }),
                React__default['default'].createElement("path", { d: "M446.7 66.7C458.6 38.7 432.4 15 432.4 15C402.4 36.7 416.4 65.3 416.4 65.3C371.4 41 357.1 65.6 357.1 65.6C373.1 103.3 406.4 98.9 406.4 98.9C395.3 103.4 387.8 110.2 382.9 117.7C413.7 110 439.2 88.8 452.7 60.7C448.7 64 446.7 66.7 446.7 66.7Z", fill: "#E17084" }),
                React__default['default'].createElement("path", { d: "M385.7 398.3C385.7 398.3 414.4 384.3 436 414.3C436 414.3 412.3 440.5 384.3 428.6C384.3 428.6 412.3 449.9 396.2 488.9C396.2 488.9 348.3 486.9 354.9 436.9C354.9 436.9 334.9 475.9 285.9 449.9C285.9 449.9 298.9 409.2 333.2 414.2C333.2 414.2 288.5 410.2 285.9 356.2C285.9 356.2 335.2 346.7 351.9 388.2C351.9 388.2 347.6 354.9 385.2 338.9C385.3 339 410 353.3 385.7 398.3Z", fill: "#D84861" }),
                React__default['default'].createElement("path", { d: "M385.3 339C347.6 355 352 388.3 352 388.3C335.3 346.8 286 356.3 286 356.3C288.4 405.7 326 413.3 332.4 414.2C309.9 411.4 296.7 428.3 290.5 439.9C343.8 437.6 386.3 393.9 387 340.2C386 339.4 385.3 339 385.3 339Z", fill: "#E17084" }),
                React__default['default'].createElement("path", { d: "M250.7 104.7C250.7 104.7 264.7 133.4 234.7 155C234.7 155 208.5 131.3 220.4 103.3C220.4 103.3 199.1 131.3 160.1 115.2C160.1 115.2 162.1 67.3 212.1 73.9C212.1 73.9 173.1 53.9 199.1 4.9C199.1 4.9 239.8 17.9 234.8 52.2C234.8 52.2 238.8 7.5 292.8 4.9C292.8 4.9 302.3 54.2 260.8 70.9C260.8 70.9 294.1 66.6 310.1 104.2C310 104.3 295.7 129 250.7 104.7Z", fill: "#D84861" }),
                React__default['default'].createElement("path", { d: "M270.9 9C240.9 19.4 235.5 46.2 234.8 51.4C238.9 17.8 199 5 199 5C173 54 212 74 212 74C162 67.3 160 115.3 160 115.3C160.6 115.6 161.2 115.8 161.8 116C221 115 268.9 67.8 270.9 9Z", fill: "#E17084" }),
                React__default['default'].createElement("path", { d: "M422 117.2L413.4 112.2L425 92.2L404.1 81.9L408.5 72.9L434.2 85.6C435.4 86.2 436.4 87.3 436.8 88.6C437.2 89.9 437 91.4 436.3 92.6L422 117.2Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M442.3 117.2L428 92.5C427.3 91.3 427.1 89.9 427.5 88.5C427.9 87.2 428.8 86.1 430.1 85.5L455.8 72.8L460.2 81.8L439.3 92.1L450.9 112.1L442.3 117.2Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M427 60H437V90H427V60Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M361 419C360.1 419 359.3 418.8 358.5 418.3L333.8 404L338.8 395.4L358.8 407L369.1 386.1L378.1 390.5L365.4 416.2C364.8 417.4 363.7 418.4 362.4 418.8C362 418.9 361.5 419 361 419Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M369.2 442.2L358.9 421.3L338.9 432.9L333.9 424.3L358.6 410C359.8 409.3 361.2 409.1 362.6 409.5C363.9 409.9 365 410.8 365.6 412.1L378.3 437.8L369.2 442.2Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M361 409H391V419H361V409Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M258.5 97.2L232.8 84.5C231.6 83.9 230.6 82.8 230.2 81.5C229.8 80.2 230 78.7 230.7 77.5L245 52.8L253.6 57.8L242 77.8L262.9 88.1L258.5 97.2Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M211.2 97.2L206.8 88.2L227.7 77.9L216.1 57.9L224.7 52.9L239 77.5C239.7 78.7 239.9 80.1 239.5 81.5C239.1 82.8 238.2 83.9 236.9 84.5L211.2 97.2Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M230 80H240V110H230V80Z", fill: "#C12944" }),
                React__default['default'].createElement("path", { d: "M122.4 387.4C122.4 387.4 131.7 406.5 111.7 421C111.7 421 94.1999 405.2 102.1 386.6C102.1 386.6 87.8999 405.3 61.8999 394.5C61.8999 394.5 63.1999 362.6 96.5999 367C96.5999 367 70.5999 353.7 87.8999 321C87.8999 321 115 329.7 111.7 352.6C111.7 352.6 114.4 322.8 150.4 321C150.4 321 156.7 353.9 129.1 365C129.1 365 151.3 362.1 162 387.2C162 387.2 152.4 403.7 122.4 387.4Z", fill: "#E17084" }),
                React__default['default'].createElement("path", { d: "M422 117.2L413.4 112.2L425 92.2L404.1 81.9L408.5 72.9L434.2 85.6C435.4 86.2 436.4 87.3 436.8 88.6C437.2 89.9 437 91.4 436.3 92.6L422 117.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M442.3 117.2L428 92.5C427.3 91.3 427.1 89.9 427.5 88.5C427.9 87.2 428.8 86.1 430.1 85.5L455.8 72.8L460.2 81.8L439.3 92.1L450.9 112.1L442.3 117.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M427 60H437V90H427V60Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M468 170C467.5 170 467 169.9 466.5 169.8C455.3 166.2 437.5 156.1 430.2 139.2C429.5 140.5 428.6 141.8 427.8 143.2C420.1 154.6 404.6 168.6 374.7 170.1C372.2 170.2 370 168.5 369.5 166.1C369.4 165.6 367 152.6 369.9 137.4C372.8 122.6 379.7 110.8 390.3 102.6C388.9 102.2 387.5 101.8 386.1 101.3C375.7 97.7 361.5 88.9 352.5 67.7C351.9 66.2 352 64.6 352.8 63.2C353.4 62.1 367.8 38.5 408.8 56.1C407.1 44.4 408.7 26 429.5 11C431.4 9.6 434 9.8 435.8 11.3C436.8 12.2 455.7 29.7 454.9 53.1C456.5 52.1 458.2 51.1 460.1 50.2C470.3 45.2 487.1 41.1 509 50.1C510.9 50.9 512.2 52.8 512.1 54.9C512.1 55.8 511 77.8 494.8 91.4C487.9 97.2 479.5 100.5 469.7 101.3C473.6 105.6 477.6 111.5 479.9 119C484.4 133.3 481.9 149.6 472.6 167.3C471.5 169 469.8 170 468 170ZM406.3 94C408.6 94 410.6 95.5 411.2 97.8C411.8 100.2 410.6 102.7 408.2 103.7C377.9 115.9 377.7 148 378.7 159.7C419.2 155.6 426.2 125 427.2 118.4C427.3 117.9 427.3 117.4 427.4 116.9C427.8 114.2 430.2 112.3 432.9 112.7C435.6 113 437.5 115.4 437.3 118.1C437.3 118.2 437.2 118.7 437.1 119.5C434.4 142.8 456.3 154.7 465.5 158.7C471.9 145.1 473.5 132.8 470.2 122.2C465.6 107.4 452.8 100.5 452.6 100.4C450.4 99.3 449.4 96.8 450.1 94.5C450.8 92.2 453.1 90.7 455.5 91.1C469.2 92.9 480.1 90.5 488 83.9C497.4 76 500.4 64 501.4 58.1C468.6 46.6 450.6 69.5 450.5 69.8C449 71.8 446.2 72.4 444 71.1C441.8 69.8 440.9 67.1 441.9 64.8C450.1 45.6 437.7 28.5 431.7 21.8C422.8 29.3 418.2 38.3 417.9 48.5C417.7 56.9 420.6 63.2 420.6 63.2C421.6 65.2 421.1 67.5 419.6 69C418.1 70.5 415.7 70.8 413.8 69.8C381.1 52.1 366.9 62 362.6 66.4C377.2 97.1 404.3 94.2 405.5 94.1C405.9 94 406.1 94 406.3 94Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M361 419C360.1 419 359.3 418.8 358.5 418.3L333.8 404L338.8 395.4L358.8 407L369.1 386.1L378.1 390.5L365.4 416.2C364.8 417.4 363.7 418.4 362.4 418.8C362 418.9 361.5 419 361 419Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M369.2 442.2L358.9 421.3L338.9 432.9L333.9 424.3L358.6 410C359.8 409.3 361.2 409.1 362.6 409.5C363.9 409.9 365 410.8 365.6 412.1L378.3 437.8L369.2 442.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M361 409H391V419H361V409Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M396.3 494C396.2 494 396.2 494 396.1 494C395.2 494 373.2 492.9 359.6 476.7C353.9 469.9 350.5 461.4 349.7 451.6C343.9 456.9 335.4 462.2 323.7 463.6L322.5 453.7C342 451.3 350.6 434.9 350.7 434.8C351.8 432.6 354.3 431.6 356.6 432.3C358.9 433 360.4 435.3 360.1 437.7C358.3 451.4 360.7 462.3 367.3 470.2C375.2 479.6 387.2 482.6 393.1 483.6C404.6 450.8 381.7 432.8 381.4 432.7C379.4 431.2 378.8 428.4 380.1 426.2C381.4 424 384.1 423.1 386.4 424.1C405.6 432.2 422.7 419.9 429.4 413.9C421.9 405 412.9 400.4 402.7 400.1C394.3 399.9 388 402.8 388 402.8C386 403.8 383.7 403.3 382.2 401.8C380.7 400.2 380.4 397.9 381.4 396C399.1 363.3 389.2 349.1 384.8 344.8C354.1 359.4 357 386.5 357.1 387.7C357.4 390.2 355.8 392.5 353.4 393.2C351 393.8 348.5 392.6 347.5 390.2C335.3 359.9 303.2 359.7 291.5 360.7C295.6 401.2 326.2 408.2 332.8 409.2C333.3 409.3 333.8 409.3 334.3 409.4C337 409.8 338.9 412.2 338.5 414.9C338.1 417.6 335.8 419.5 333.1 419.3C333 419.3 332.5 419.2 331.7 419.1C308.4 416.4 296.5 438.3 292.5 447.5C296.6 449.5 300.7 451 304.6 452L302 461.7C296.2 460.1 290.1 457.7 283.9 454.4C281.8 453.3 280.7 450.8 281.5 448.5C285.1 437.3 295.2 419.5 312.1 412.2C310.8 411.5 309.5 410.6 308.1 409.8C296.7 402.1 282.7 386.6 281.2 356.7C281.1 354.2 282.8 352 285.2 351.5C285.7 351.4 298.7 349 313.9 351.9C328.7 354.8 340.5 361.7 348.7 372.3C349.1 370.9 349.5 369.5 350 368.1C353.6 357.7 362.4 343.5 383.6 334.5C385.1 333.9 386.7 334 388.1 334.8C389.2 335.4 412.8 349.8 395.2 390.8C406.9 389.1 425.3 390.7 440.3 411.5C441.7 413.4 441.5 416 440 417.8C439.1 418.8 421.6 437.7 398.2 436.9C399.2 438.5 400.2 440.2 401.1 442.1C406.1 452.3 410.2 469.1 401.2 491C400.1 492.8 398.3 494 396.3 494Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M258.5 97.2L232.8 84.5C231.6 83.9 230.6 82.8 230.2 81.5C229.8 80.2 230 78.7 230.7 77.5L245 52.8L253.6 57.8L242 77.8L262.9 88.1L258.5 97.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M211.2 97.2L206.8 88.2L227.7 77.9L216.1 57.9L224.7 52.9L239 77.5C239.7 78.7 239.9 80.1 239.5 81.5C239.1 82.8 238.2 83.9 236.9 84.5L211.2 97.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M230 80H240V110H230V80Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M234.7 160C233.5 160 232.3 159.6 231.3 158.7C230.3 157.8 211.4 140.3 212.2 116.9C210.6 117.9 208.9 118.9 207 119.8C196.8 124.8 180 128.9 158.1 119.9C156.2 119.1 154.9 117.2 155 115.1C155 114.2 156.1 92.2 172.3 78.6C179.2 72.8 187.6 69.5 197.4 68.7C193.5 64.4 189.5 58.5 187.2 51C182.7 36.7 185.2 20.4 194.5 2.7C195.6 0.600002 198.1 -0.499998 200.4 0.300002C211.6 3.9 229.4 14 236.7 30.9C237.4 29.6 238.3 28.3 239.1 26.9C247 15.4 262.5 1.5 292.4 2.01166e-06C294.9 -0.099998 297.1 1.6 297.6 4C297.7 4.5 300.1 17.5 297.2 32.7C294.3 47.5 287.4 59.3 276.8 67.5C278.2 67.9 279.6 68.3 281 68.8C291.4 72.4 305.6 81.2 314.6 102.4C315.2 103.9 315.1 105.5 314.3 106.9C313.7 108 299.3 131.6 258.3 114C260 125.7 258.4 144.1 237.6 159.1C236.7 159.7 235.7 160 234.7 160ZM220.3 98.3C221.2 98.3 222 98.5 222.8 99C225 100.3 225.9 103 224.9 105.3C216.7 124.5 229.1 141.6 235.1 148.3C244 140.8 248.6 131.8 248.9 121.6C249.1 113.2 246.2 106.9 246.2 106.9C245.2 104.9 245.7 102.6 247.2 101.1C248.8 99.6 251.1 99.3 253 100.3C285.7 118 299.9 108.1 304.2 103.7C289.6 73 262.5 75.9 261.3 76C258.8 76.3 256.5 74.7 255.8 72.3C255.2 69.9 256.4 67.4 258.8 66.4C289.1 54.2 289.3 22.1 288.3 10.4C247.8 14.5 240.8 45.1 239.8 51.7C239.7 52.2 239.7 52.7 239.6 53.2C239.2 55.9 236.8 57.8 234.1 57.4C231.4 57.1 229.5 54.7 229.7 52C229.7 51.9 229.8 51.4 229.9 50.6C232.6 27.3 210.7 15.4 201.5 11.4C195.1 25 193.5 37.3 196.8 47.9C201.4 62.7 214.2 69.6 214.4 69.7C216.6 70.8 217.6 73.3 216.9 75.6C216.2 77.9 213.9 79.4 211.5 79C197.8 77.2 186.9 79.6 179 86.2C169.6 94.1 166.6 106.1 165.6 112C198.4 123.5 216.4 100.6 216.5 100.3C217.3 99 218.8 98.3 220.3 98.3Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M111.8 426C110.6 426 109.4 425.6 108.4 424.7C107.8 424.1 96.1 413.4 95.2 398.5C86.8 402.9 74.7 405.2 60.1 399.1C58.2 398.3 56.9 396.4 57 394.3C57 393.6 57.8 378.3 69.1 368.8C73.2 365.3 78.1 363.1 83.7 362.2C81.7 359.5 79.8 356.2 78.5 352.2C75.4 342.2 77 330.9 83.5 318.7C84.6 316.6 87.1 315.5 89.4 316.3C96.6 318.6 107.6 324.7 113.3 334.9C119.1 326.1 130 317 150.1 316C152.6 315.9 154.8 317.6 155.3 320C157.3 330.3 156.4 349.5 143.2 361.9C151.6 364.9 160.9 371.7 166.6 385.2C167.2 386.7 167.1 388.3 166.3 389.7C165.9 390.5 156.2 406.4 129.6 396.2C130 405 127 416.1 114.7 425C113.8 425.7 112.8 426 111.8 426ZM102.2 381.6C103.1 381.6 103.9 381.8 104.7 382.3C106.9 383.6 107.8 386.2 106.8 388.5C102.2 399.4 108.3 409.3 112.2 414.1C123.8 403.2 118.6 391 117.9 389.6C117 387.6 117.4 385.3 119 383.8C120.6 382.3 122.9 382 124.8 383C143.7 393.2 152.7 389 156.1 386.3C146.7 367.9 129.9 369.9 129.8 369.9C127.3 370.2 125 368.6 124.3 366.2C123.6 363.8 124.9 361.2 127.3 360.3C145.4 353.1 146.6 334.9 146.1 326.4C121.8 329.7 117.5 348.3 116.9 352.3C116.9 352.6 116.8 352.9 116.8 353.3C116.4 356 114 357.9 111.3 357.5C108.6 357.2 106.7 354.8 106.9 352.1C106.9 352.1 106.9 351.9 107 351.5C108.8 338 97 330.5 90.6 327.4C87.1 335.5 86.3 342.8 88.3 349.1C91.2 358.2 99.1 362.5 99.1 362.5C101.3 363.6 102.3 366.1 101.6 368.4C100.9 370.7 98.6 372.2 96.2 371.9C87.5 370.7 80.7 372.2 75.8 376.3C70.6 380.6 68.6 387.1 67.7 391.1C87.3 397.2 98 384 98.5 383.4C99.2 382.2 100.7 381.6 102.2 381.6Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M422 117.2L413.4 112.2L425 92.2L404.1 81.9L408.5 72.9L434.2 85.6C435.4 86.2 436.4 87.3 436.8 88.6C437.2 89.9 437 91.4 436.3 92.6L422 117.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M442.3 117.2L428 92.5C427.3 91.3 427.1 89.9 427.5 88.5C427.9 87.2 428.8 86.1 430.1 85.5L455.8 72.8L460.2 81.8L439.3 92.1L450.9 112.1L442.3 117.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M427 60H437V90H427V60Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M468 170C467.5 170 467 169.9 466.5 169.8C455.3 166.2 437.5 156.1 430.2 139.2C429.5 140.5 428.6 141.8 427.8 143.2C420.1 154.6 404.6 168.6 374.7 170.1C372.2 170.2 370 168.5 369.5 166.1C369.4 165.6 367 152.6 369.9 137.4C372.8 122.6 379.7 110.8 390.3 102.6C388.9 102.2 387.5 101.8 386.1 101.3C375.7 97.7 361.5 88.9 352.5 67.7C351.9 66.2 352 64.6 352.8 63.2C353.4 62.1 367.8 38.5 408.8 56.1C407.1 44.4 408.7 26 429.5 11C431.4 9.6 434 9.8 435.8 11.3C436.8 12.2 455.7 29.7 454.9 53.1C456.5 52.1 458.2 51.1 460.1 50.2C470.3 45.2 487.1 41.1 509 50.1C510.9 50.9 512.2 52.8 512.1 54.9C512.1 55.8 511 77.8 494.8 91.4C487.9 97.2 479.5 100.5 469.7 101.3C473.6 105.6 477.6 111.5 479.9 119C484.4 133.3 481.9 149.6 472.6 167.3C471.5 169 469.8 170 468 170ZM406.3 94C408.6 94 410.6 95.5 411.2 97.8C411.8 100.2 410.6 102.7 408.2 103.7C377.9 115.9 377.7 148 378.7 159.7C419.2 155.6 426.2 125 427.2 118.4C427.3 117.9 427.3 117.4 427.4 116.9C427.8 114.2 430.2 112.3 432.9 112.7C435.6 113 437.5 115.4 437.3 118.1C437.3 118.2 437.2 118.7 437.1 119.5C434.4 142.8 456.3 154.7 465.5 158.7C471.9 145.1 473.5 132.8 470.2 122.2C465.6 107.4 452.8 100.5 452.6 100.4C450.4 99.3 449.4 96.8 450.1 94.5C450.8 92.2 453.1 90.7 455.5 91.1C469.2 92.9 480.1 90.5 488 83.9C497.4 76 500.4 64 501.4 58.1C468.6 46.6 450.6 69.5 450.5 69.8C449 71.8 446.2 72.4 444 71.1C441.8 69.8 440.9 67.1 441.9 64.8C450.1 45.6 437.7 28.5 431.7 21.8C422.8 29.3 418.2 38.3 417.9 48.5C417.7 56.9 420.6 63.2 420.6 63.2C421.6 65.2 421.1 67.5 419.6 69C418.1 70.5 415.7 70.8 413.8 69.8C381.1 52.1 366.9 62 362.6 66.4C377.2 97.1 404.3 94.2 405.5 94.1C405.9 94 406.1 94 406.3 94Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M361 419C360.1 419 359.3 418.8 358.5 418.3L333.8 404L338.8 395.4L358.8 407L369.1 386.1L378.1 390.5L365.4 416.2C364.8 417.4 363.7 418.4 362.4 418.8C362 418.9 361.5 419 361 419Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M369.2 442.2L358.9 421.3L338.9 432.9L333.9 424.3L358.6 410C359.8 409.3 361.2 409.1 362.6 409.5C363.9 409.9 365 410.8 365.6 412.1L378.3 437.8L369.2 442.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M361 409H391V419H361V409Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M396.3 494C396.2 494 396.2 494 396.1 494C395.2 494 373.2 492.9 359.6 476.7C353.9 469.9 350.5 461.4 349.7 451.6C343.9 456.9 335.4 462.2 323.7 463.6L322.5 453.7C342 451.3 350.6 434.9 350.7 434.8C351.8 432.6 354.3 431.6 356.6 432.3C358.9 433 360.4 435.3 360.1 437.7C358.3 451.4 360.7 462.3 367.3 470.2C375.2 479.6 387.2 482.6 393.1 483.6C404.6 450.8 381.7 432.8 381.4 432.7C379.4 431.2 378.8 428.4 380.1 426.2C381.4 424 384.1 423.1 386.4 424.1C405.6 432.2 422.7 419.9 429.4 413.9C421.9 405 412.9 400.4 402.7 400.1C394.3 399.9 388 402.8 388 402.8C386 403.8 383.7 403.3 382.2 401.8C380.7 400.2 380.4 397.9 381.4 396C399.1 363.3 389.2 349.1 384.8 344.8C354.1 359.4 357 386.5 357.1 387.7C357.4 390.2 355.8 392.5 353.4 393.2C351 393.8 348.5 392.6 347.5 390.2C335.3 359.9 303.2 359.7 291.5 360.7C295.6 401.2 326.2 408.2 332.8 409.2C333.3 409.3 333.8 409.3 334.3 409.4C337 409.8 338.9 412.2 338.5 414.9C338.1 417.6 335.8 419.5 333.1 419.3C333 419.3 332.5 419.2 331.7 419.1C308.4 416.4 296.5 438.3 292.5 447.5C296.6 449.5 300.7 451 304.6 452L302 461.7C296.2 460.1 290.1 457.7 283.9 454.4C281.8 453.3 280.7 450.8 281.5 448.5C285.1 437.3 295.2 419.5 312.1 412.2C310.8 411.5 309.5 410.6 308.1 409.8C296.7 402.1 282.7 386.6 281.2 356.7C281.1 354.2 282.8 352 285.2 351.5C285.7 351.4 298.7 349 313.9 351.9C328.7 354.8 340.5 361.7 348.7 372.3C349.1 370.9 349.5 369.5 350 368.1C353.6 357.7 362.4 343.5 383.6 334.5C385.1 333.9 386.7 334 388.1 334.8C389.2 335.4 412.8 349.8 395.2 390.8C406.9 389.1 425.3 390.7 440.3 411.5C441.7 413.4 441.5 416 440 417.8C439.1 418.8 421.6 437.7 398.2 436.9C399.2 438.5 400.2 440.2 401.1 442.1C406.1 452.3 410.2 469.1 401.2 491C400.1 492.8 398.3 494 396.3 494Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M258.5 97.2L232.8 84.5C231.6 83.9 230.6 82.8 230.2 81.5C229.8 80.2 230 78.7 230.7 77.5L245 52.8L253.6 57.8L242 77.8L262.9 88.1L258.5 97.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M211.2 97.2L206.8 88.2L227.7 77.9L216.1 57.9L224.7 52.9L239 77.5C239.7 78.7 239.9 80.1 239.5 81.5C239.1 82.8 238.2 83.9 236.9 84.5L211.2 97.2Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M230 80H240V110H230V80Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M234.7 160C233.5 160 232.3 159.6 231.3 158.7C230.3 157.8 211.4 140.3 212.2 116.9C210.6 117.9 208.9 118.9 207 119.8C196.8 124.8 180 128.9 158.1 119.9C156.2 119.1 154.9 117.2 155 115.1C155 114.2 156.1 92.2 172.3 78.6C179.2 72.8 187.6 69.5 197.4 68.7C193.5 64.4 189.5 58.5 187.2 51C182.7 36.7 185.2 20.4 194.5 2.7C195.6 0.600002 198.1 -0.499998 200.4 0.300002C211.6 3.9 229.4 14 236.7 30.9C237.4 29.6 238.3 28.3 239.1 26.9C247 15.4 262.5 1.5 292.4 2.01166e-06C294.9 -0.099998 297.1 1.6 297.6 4C297.7 4.5 300.1 17.5 297.2 32.7C294.3 47.5 287.4 59.3 276.8 67.5C278.2 67.9 279.6 68.3 281 68.8C291.4 72.4 305.6 81.2 314.6 102.4C315.2 103.9 315.1 105.5 314.3 106.9C313.7 108 299.3 131.6 258.3 114C260 125.7 258.4 144.1 237.6 159.1C236.7 159.7 235.7 160 234.7 160ZM220.3 98.3C221.2 98.3 222 98.5 222.8 99C225 100.3 225.9 103 224.9 105.3C216.7 124.5 229.1 141.6 235.1 148.3C244 140.8 248.6 131.8 248.9 121.6C249.1 113.2 246.2 106.9 246.2 106.9C245.2 104.9 245.7 102.6 247.2 101.1C248.8 99.6 251.1 99.3 253 100.3C285.7 118 299.9 108.1 304.2 103.7C289.6 73 262.5 75.9 261.3 76C258.8 76.3 256.5 74.7 255.8 72.3C255.2 69.9 256.4 67.4 258.8 66.4C289.1 54.2 289.3 22.1 288.3 10.4C247.8 14.5 240.8 45.1 239.8 51.7C239.7 52.2 239.7 52.7 239.6 53.2C239.2 55.9 236.8 57.8 234.1 57.4C231.4 57.1 229.5 54.7 229.7 52C229.7 51.9 229.8 51.4 229.9 50.6C232.6 27.3 210.7 15.4 201.5 11.4C195.1 25 193.5 37.3 196.8 47.9C201.4 62.7 214.2 69.6 214.4 69.7C216.6 70.8 217.6 73.3 216.9 75.6C216.2 77.9 213.9 79.4 211.5 79C197.8 77.2 186.9 79.6 179 86.2C169.6 94.1 166.6 106.1 165.6 112C198.4 123.5 216.4 100.6 216.5 100.3C217.3 99 218.8 98.3 220.3 98.3Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M111.8 426C110.6 426 109.4 425.6 108.4 424.7C107.8 424.1 96.1 413.4 95.2 398.5C86.8 402.9 74.7 405.2 60.1 399.1C58.2 398.3 56.9 396.4 57 394.3C57 393.6 57.8 378.3 69.1 368.8C73.2 365.3 78.1 363.1 83.7 362.2C81.7 359.5 79.8 356.2 78.5 352.2C75.4 342.2 77 330.9 83.5 318.7C84.6 316.6 87.1 315.5 89.4 316.3C96.6 318.6 107.6 324.7 113.3 334.9C119.1 326.1 130 317 150.1 316C152.6 315.9 154.8 317.6 155.3 320C157.3 330.3 156.4 349.5 143.2 361.9C151.6 364.9 160.9 371.7 166.6 385.2C167.2 386.7 167.1 388.3 166.3 389.7C165.9 390.5 156.2 406.4 129.6 396.2C130 405 127 416.1 114.7 425C113.8 425.7 112.8 426 111.8 426ZM102.2 381.6C103.1 381.6 103.9 381.8 104.7 382.3C106.9 383.6 107.8 386.2 106.8 388.5C102.2 399.4 108.3 409.3 112.2 414.1C123.8 403.2 118.6 391 117.9 389.6C117 387.6 117.4 385.3 119 383.8C120.6 382.3 122.9 382 124.8 383C143.7 393.2 152.7 389 156.1 386.3C146.7 367.9 129.9 369.9 129.8 369.9C127.3 370.2 125 368.6 124.3 366.2C123.6 363.8 124.9 361.2 127.3 360.3C145.4 353.1 146.6 334.9 146.1 326.4C121.8 329.7 117.5 348.3 116.9 352.3C116.9 352.6 116.8 352.9 116.8 353.3C116.4 356 114 357.9 111.3 357.5C108.6 357.2 106.7 354.8 106.9 352.1C106.9 352.1 106.9 351.9 107 351.5C108.8 338 97 330.5 90.6 327.4C87.1 335.5 86.3 342.8 88.3 349.1C91.2 358.2 99.1 362.5 99.1 362.5C101.3 363.6 102.3 366.1 101.6 368.4C100.9 370.7 98.6 372.2 96.2 371.9C87.5 370.7 80.7 372.2 75.8 376.3C70.6 380.6 68.6 387.1 67.7 391.1C87.3 397.2 98 384 98.5 383.4C99.2 382.2 100.7 381.6 102.2 381.6Z", fill: "#4D2419" }),
                React__default['default'].createElement("path", { d: "M234.7 160C233.5 160 232.3 159.6 231.3 158.7C230.3 157.8 211.4 140.3 212.2 116.9C210.6 117.9 208.9 118.9 207 119.8C196.8 124.8 180 128.9 158.1 119.9C156.2 119.1 154.9 117.2 155 115.1C155 114.2 156.1 92.2 172.3 78.6C179.2 72.8 187.6 69.5 197.4 68.7C193.5 64.4 189.5 58.5 187.2 51C182.7 36.7 185.2 20.4 194.5 2.7C195.6 0.600002 198.1 -0.499998 200.4 0.300002C211.6 3.9 229.4 14 236.7 30.9C237.4 29.6 238.3 28.3 239.1 26.9C247 15.4 262.5 1.5 292.4 2.01166e-06C294.9 -0.099998 297.1 1.6 297.6 4C297.7 4.5 300.1 17.5 297.2 32.7C294.3 47.5 287.4 59.3 276.8 67.5C278.2 67.9 279.6 68.3 281 68.8C291.4 72.4 305.6 81.2 314.6 102.4C315.2 103.9 315.1 105.5 314.3 106.9C313.7 108 299.3 131.6 258.3 114C260 125.7 258.4 144.1 237.6 159.1C236.7 159.7 235.7 160 234.7 160ZM220.3 98.3C221.2 98.3 222 98.5 222.8 99C225 100.3 225.9 103 224.9 105.3C216.7 124.5 229.1 141.6 235.1 148.3C244 140.8 248.6 131.8 248.9 121.6C249.1 113.2 246.2 106.9 246.2 106.9C245.2 104.9 245.7 102.6 247.2 101.1C248.8 99.6 251.1 99.3 253 100.3C285.7 118 299.9 108.1 304.2 103.7C289.6 73 262.5 75.9 261.3 76C258.8 76.3 256.5 74.7 255.8 72.3C255.2 69.9 256.4 67.4 258.8 66.4C289.1 54.2 289.3 22.1 288.3 10.4C247.8 14.5 240.8 45.1 239.8 51.7C239.7 52.2 239.7 52.7 239.6 53.2C239.2 55.9 236.8 57.8 234.1 57.4C231.4 57.1 229.5 54.7 229.7 52C229.7 51.9 229.8 51.4 229.9 50.6C232.6 27.3 210.7 15.4 201.5 11.4C195.1 25 193.5 37.3 196.8 47.9C201.4 62.7 214.2 69.6 214.4 69.7C216.6 70.8 217.6 73.3 216.9 75.6C216.2 77.9 213.9 79.4 211.5 79C197.8 77.2 186.9 79.6 179 86.2C169.6 94.1 166.6 106.1 165.6 112C198.4 123.5 216.4 100.6 216.5 100.3C217.3 99 218.8 98.3 220.3 98.3Z", fill: "#4D2419" })),
            React__default['default'].createElement("defs", null,
                React__default['default'].createElement("clipPath", { id: "clip0" },
                    React__default['default'].createElement("rect", { width: "512", height: "512", fill: "white" }))))));
};

var Icon$1L = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props)));
};

var Icon$1K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1E = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M201.7 75.7S225 77.5 225 105H5c0-39 44-33 44-33S31 29.4 87 29.4c0 0 2.7-24.4 32-24.4s12.7 35.6 12.7 35.6 60.1-31.3 70 35.1z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M90.5 83c-5-24.5 31.4-15 31.4-15s-1.2-16.6 9.6-27.4l.3-.4c1.1-2.6 7.8-18.5 2.6-28.1-35.8 5.6-30 37.5-30 37.5s-10.1-12.9-21.1-.5C72.2 61.5 90.5 83 90.5 83z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M225 110H5c-2.8 0-5-2.2-5-5 0-12.1 3.9-21.7 11.5-28.3 9.5-8.3 22.6-9.9 30.7-10-1.4-6.8-2.1-17.4 3.9-26.4 6.5-9.8 18.9-15.1 36.8-15.8C85.9 14.2 95.8 0 119 0c9 0 15.5 3 19.2 8.8 4.4 6.8 3.5 16 1.8 23.1 10.6-3.4 27.2-6.5 41.7.9 12.7 6.5 20.8 19.4 24.4 38.6 10 2.4 24 11.4 24 33.7-.1 2.7-2.3 4.9-5.1 4.9zM10.3 100h209.4c-2.3-17.4-16.7-19.2-18.4-19.4-2.3-.2-4.2-2-4.5-4.2-2.6-17.7-9.2-29.4-19.6-34.7-18.2-9.3-42.9 3.2-43.2 3.3-1.9 1-4.2.6-5.8-.8-1.5-1.5-2-3.8-1.1-5.7 2-4.3 6.7-17.9 2.6-24.3-.7-1-2.6-4.1-10.8-4.1-23.9 0-26.8 18-27 20-.3 2.5-2.4 4.4-5 4.4-16.6 0-27.6 3.8-32.6 11.4-6.6 9.9-.9 24.1-.8 24.2.7 1.7.5 3.6-.6 5S50 77.3 48.3 77c-.2 0-19.2-2.4-30.3 7.3-4.3 3.7-6.9 9-7.7 15.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M85.6 84c-1.9-9.2 1.3-14.5 4.2-17.3 7-6.6 19.7-6 27.4-4.8.7-6.6 3-17 10.9-24.9l7.1 7.1c-9 9-8.2 23.4-8.2 23.6.1 1.6-.6 3.2-1.8 4.2-1.2 1-2.9 1.4-4.4 1-5.9-1.5-19.4-3.2-24 1.1-.6.6-2.5 2.3-1.3 8l-9.9 2z" })));
};

var Icon$1D = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M310.3 477.7S287 479.5 287 507h220c0-39-44-33-44-33s6.4-30.9-49.6-30.9c0 0 8.9-36.1-20.4-36.1-29.3 0-34.7 35.6-34.7 35.6s-38.1-31.3-48 35.1zM201.7 75.7S225 77.5 225 105H5c0-39 44-33 44-33S31 29.4 87 29.4c0 0 2.7-24.4 32-24.4s12.7 35.6 12.7 35.6 60.1-31.3 70 35.1z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M90.5 83c-5-24.5 31.4-15 31.4-15s-1.2-16.6 9.6-27.4l.3-.4c1.1-2.6 7.8-18.5 2.6-28.1-35.8 5.6-30 37.5-30 37.5s-10.1-12.9-21.1-.5C72.2 61.5 90.5 83 90.5 83zM385.5 467s11.5-23.9 27.9-23.9c0 0 5.3-21.4-5.7-31.3-31.4 14.3-22.2 55.2-22.2 55.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M507 512h-60v-10h54.7c-.8-6.7-3.4-12-7.8-15.8-11.1-9.7-30.1-7.3-30.2-7.2-1.6.2-3.2-.4-4.3-1.5-1.1-1.2-1.6-2.8-1.2-4.4 0-.2 1.2-6.7-4-12.9-6.6-7.9-20.7-12.1-40.7-12.1-1.5 0-3-.7-3.9-1.9-.9-1.2-1.3-2.8-.9-4.3 1.1-4.5 2.8-17.8-2.7-24.8-2.7-3.4-6.9-5.1-12.8-5.1-24.6 0-29.6 30-29.8 31.3-.3 1.8-1.5 3.3-3.2 3.9-1.7.6-3.6.3-5-.8-.1-.1-11.5-9.1-21.6-5.2-8.9 3.4-15.2 16.3-18.3 37.2-.3 2.3-2.2 4.1-4.6 4.3-1.7.2-16.1 2-18.4 19.3H427v10H287c-2.8 0-5-2.2-5-5 0-22.3 14-31.3 24-33.7 4-22.9 12-36.8 24-41.5 9.5-3.7 19-.5 25 2.7 4.3-14.1 15.6-32.6 38-32.6 9.1 0 16.1 3 20.7 9 6.5 8.3 6.4 20.1 5.6 27.2 20.5.8 34.9 6.1 42.7 15.8 4.3 5.2 5.7 10.7 6.1 14.7 7.9-.1 22.2 1.1 32.4 10 7.6 6.7 11.5 16.2 11.5 28.3 0 2.9-2.2 5.1-5 5.1zM225 110H5c-2.8 0-5-2.2-5-5 0-12.1 3.9-21.7 11.5-28.3 9.5-8.3 22.6-9.9 30.7-10-1.4-6.8-2.1-17.4 3.9-26.4 6.5-9.8 18.9-15.1 36.8-15.8C85.9 14.2 95.8 0 119 0c9 0 15.5 3 19.2 8.8 4.4 6.8 3.5 16 1.8 23.1 10.6-3.4 27.2-6.5 41.7.9 12.7 6.5 20.8 19.4 24.4 38.6 10 2.4 24 11.4 24 33.7-.1 2.7-2.3 4.9-5.1 4.9zM10.3 100h209.4c-2.3-17.4-16.7-19.2-18.4-19.4-2.3-.2-4.2-2-4.5-4.2-2.6-17.7-9.2-29.4-19.6-34.7-18.2-9.3-42.9 3.2-43.2 3.3-1.9 1-4.2.6-5.8-.8-1.5-1.5-2-3.8-1.1-5.7 2-4.3 6.7-17.9 2.6-24.3-.7-1-2.6-4.1-10.8-4.1-23.9 0-26.8 18-27 20-.3 2.5-2.4 4.4-5 4.4-16.6 0-27.6 3.8-32.6 11.4-6.6 9.9-.9 24.1-.8 24.2.7 1.7.5 3.6-.6 5S50 77.3 48.3 77c-.2 0-19.2-2.4-30.3 7.3-4.3 3.7-6.9 9-7.7 15.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M85.6 84c-1.9-9.2 1.3-14.5 4.2-17.3 7-6.6 19.7-6 27.4-4.8.7-6.6 3-17 10.9-24.9l7.1 7.1c-9 9-8.2 23.4-8.2 23.6.1 1.6-.6 3.2-1.8 4.2-1.2 1-2.9 1.4-4.4 1-5.9-1.5-19.4-3.2-24 1.1-.6.6-2.5 2.3-1.3 8l-9.9 2zM389.8 469.2l-9.1-4.3c.5-1.1 13.3-26.8 32.3-26.8v10c-10 0-20.4 15.2-23.2 21.1z" })));
};

var Icon$1C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React__default['default'].createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$1y = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M256 5c22.3 0 25 47.3 25 88s-25 88-25 88-25-48-25-88 4.7-88 25-88z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M256 507c-22.3 0-25-47.3-25-88s25-88 25-88 25 48 25 88-4.7 88-25 88z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M78.5 78.5c15.8-15.8 51.1 15.8 79.9 44.5 28.8 28.7 44.6 80 44.6 80s-51.6-16.3-79.9-44.5c-28.3-28.2-59-65.6-44.6-80z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M433.5 433.5c-15.8 15.8-51.1-15.8-79.9-44.5-28.8-28.7-44.6-80-44.6-80s51.6 16.3 79.9 44.5c28.3 28.3 59 65.6 44.6 80z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M5 256c0-22.3 47.3-25 88-25s88 25 88 25-48 25-88 25-88-4.7-88-25z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M507 256c0 22.3-47.3 25-88 25s-88-25-88-25 48-25 88-25 88 4.7 88 25z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M78.5 433.5c-15.8-15.8 15.8-51.1 44.5-79.9 28.7-28.8 80-44.6 80-44.6s-16.3 51.6-44.5 79.9c-28.3 28.3-65.6 59-80 44.6z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M203 309s-16.3 51.7-44.5 79.9c-28.2 28.2-65.5 58.9-79.9 44.5L203 309z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M433.5 78.5c15.8 15.8-15.8 51.1-44.5 79.9-28.7 28.8-80 44.6-80 44.6s16.3-51.6 44.5-79.9c28.3-28.3 65.6-59 80-44.6z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M388.9 158.4c28.8-28.8 60.1-64.3 44.5-79.9L309 203s51.2-15.8 79.9-44.6zM159.9 487.9c-20.6-8.5-5-53.3 10.6-90.9 15.6-37.6 56.8-71.7 56.8-71.7s4.7 53.9-10.6 90.9c-15.3 37-38 79.5-56.8 71.7z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M352.1 24.1c20.6 8.5 5 53.3-10.6 90.9-15.6 37.6-56.8 71.7-56.8 71.7s-4.7-53.9 10.6-90.9c15.3-36.9 38-79.5 56.8-71.7z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M352.1 487.9c-20.6 8.5-41.2-34.2-56.8-71.7-15.6-37.6-10.6-90.9-10.6-90.9s41.5 34.8 56.8 71.7c15.3 36.9 29.3 83.1 10.6 90.9z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M159.9 24.1c20.6-8.5 41.2 34.2 56.8 71.7 15.6 37.5 10.6 90.9 10.6 90.9s-41.5-34.8-56.8-71.7c-15.3-36.9-29.3-83.1-10.6-90.9z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M487.9 352.1c-8.5 20.6-53.3 5-90.9-10.6-37.6-15.6-71.7-56.8-71.7-56.8s53.9-4.7 90.9 10.6c36.9 15.3 79.5 38 71.7 56.8z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M24.1 159.9c8.5-20.6 53.3-5 90.9 10.6 37.6 15.6 71.7 56.8 71.7 56.8s-53.9 4.7-90.9-10.6c-37-15.3-79.5-38-71.7-56.8z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M487.9 159.9c8.5 20.6-34.2 41.2-71.7 56.8-37.5 15.6-90.9 10.6-90.9 10.6s34.8-41.5 71.7-56.8c36.9-15.3 83.1-29.3 90.9-10.6z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M24.1 352.1c-8.5-20.6 34.2-41.2 71.7-56.8 37.6-15.6 90.9-10.6 90.9-10.6s-34.8 41.5-71.7 56.8c-36.9 15.3-83.1 29.3-90.9 10.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M256 356c55.228 0 100-44.772 100-100s-44.772-100-100-100-100 44.772-100 100 44.772 100 100 100z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M305.1 168.9c8.2 14.5 12.9 31.3 12.9 49.1 0 55.2-44.8 100-100 100-17.9 0-34.6-4.7-49.1-12.9C186 335.5 218.6 356 256 356c55.2 0 100-44.8 100-100 0-37.4-20.5-70-50.9-87.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 361c-57.9 0-105-47.1-105-105s47.1-105 105-105 105 47.1 105 105-47.1 105-105 105zm0-200c-52.4 0-95 42.6-95 95s42.6 95 95 95 95-42.6 95-95-42.6-95-95-95z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M271.5 158.4l-9.3-3.6c6.3-16.2 13.8-40.1 13.8-61.8 0-20.5 0-83-20-83-9.7 0-20 21.8-20 83 0 21.4 7.6 45.4 13.9 61.8l-9.3 3.6C233.9 141.2 226 115.9 226 93c0-61.7 10.1-93 30-93 26.4 0 30 47 30 93 0 23.2-7.9 48.4-14.5 65.4zM256 512c-26.4 0-30-47-30-93 0-23.2 7.9-48.4 14.5-65.4l9.3 3.6c-6.3 16.2-13.8 40.1-13.8 61.8 0 20.5 0 83 20 83 9.7 0 20-21.8 20-83 0-11.9-2.3-25.9-7-41.6l9.6-2.8c4.9 16.6 7.4 31.5 7.4 44.4 0 61.7-10.1 93-30 93zM423.1 442.7c-7.6 0-16.7-3.5-27.4-10.6-15.6-10.3-32.6-26.6-45.6-39.6-16.4-16.4-28.6-39.8-36-56.5l9.2-4c7 15.9 18.6 38.1 33.9 53.4 12.7 12.7 29.2 28.5 44 38.3 14 9.2 23.7 11.3 28.8 6.2 6-6-1.8-20.4-7-28.5-7.9-12.3-20.9-27.6-37.6-44.3-15.1-15.1-37.4-26.8-53.5-33.9l4-9.1c16.8 7.4 40.3 19.7 56.5 35.9 12 12 28.5 29.7 38.9 46 12.1 18.8 14 32.6 5.6 41-3.7 3.8-8.3 5.7-13.8 5.7zM156.2 188.1c-15.2-8.2-27.5-17.1-36.6-26.2C75.9 118.3 60.9 89.1 75 75c9-9 22.9-7.3 41.4 4.9C132 90.2 149 106.5 162 119.5c16.4 16.4 28.6 39.8 36 56.5l-9.2 4c-7-15.9-18.6-38.1-33.9-53.4-14.5-14.5-58.7-58.7-72.8-44.5-6.8 6.8 1.3 29.6 44.5 72.8 8.4 8.4 20 16.7 34.3 24.5l-4.7 8.7zM93 286c-61.7 0-93-10.1-93-30 0-26.4 47-30 93-30 23.2 0 48.4 7.9 65.4 14.5l-3.6 9.3C138.6 243.5 114.7 236 93 236c-20.5 0-83 0-83 20 0 9.7 21.8 20 83 20 21.4 0 45.4-7.6 61.8-13.9l3.6 9.3C141.2 278.1 115.9 286 93 286zM419 286c-23.2 0-48.4-7.9-65.4-14.5l3.6-9.3c16.2 6.3 40.1 13.8 61.8 13.8 20.5 0 83 0 83-20 0-9.7-21.8-20-83-20-21.4 0-45.4 7.6-61.8 13.9l-3.6-9.3C370.8 234 396.1 226 419 226c61.7 0 93 10.1 93 30 0 26.4-47 30-93 30zM87.9 442.1c-5.2 0-9.5-1.7-12.9-5.1-9-9-7.3-22.9 4.9-41.4C90.2 380 106.5 363 119.5 350c16.4-16.4 39.8-28.6 56.5-36l4 9.2c-15.9 7-38.1 18.6-53.4 33.9-12.7 12.7-28.5 29.2-38.3 44-9.2 14-11.3 23.7-6.2 28.8 6 6 20.4-1.8 28.5-7 12.3-7.9 27.6-20.9 44.3-37.6 15.1-15.1 26.8-37.4 33.9-53.5l9.1 4c-7.4 16.8-19.7 40.3-35.9 56.5-12 12-29.7 28.5-46 38.9-11.2 7.4-20.6 10.9-28.1 10.9zM336 198l-4-9.2c15.9-7 38.1-18.6 53.4-33.9 12.7-12.7 28.5-29.2 38.3-44 9.2-14 11.3-23.7 6.2-28.8-6-6-20.4 1.8-28.5 7-12.3 7.9-27.6 20.9-44.3 37.6-15.1 15.1-26.7 37.4-33.9 53.5l-9.1-4c7.4-16.8 19.7-40.3 35.9-56.5 12-12 29.7-28.5 46-38.9 18.8-12.1 32.6-14 41-5.6 9 9 7.3 22.9-4.9 41.4-10.3 15.6-26.6 32.6-39.6 45.6-16.5 16.2-39.8 28.4-56.5 35.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M164.6 493.8c-2.2 0-4.4-.4-6.6-1.3-11.7-4.8-15.5-18.3-11.3-40.1 3.6-18.4 12.1-40.3 19.2-57.3 8.9-21.5 25.8-41.7 38.4-54.9l7.2 6.9c-12 12.6-28.1 31.8-36.4 51.8-6.9 16.6-15.2 37.9-18.6 55.4-3.2 16.5-1.4 26.2 5.3 29 8.9 3.7 26.8-12.5 50.2-69 8.2-19.7 10.4-44.8 10.8-62.4l10 .2c-.4 18.4-2.8 44.8-11.6 66-20.7 50.3-39.8 75.7-56.6 75.7zM307.7 171.8l-7.2-6.9c12-12.6 28.1-31.8 36.4-51.8 6.9-16.6 15.2-37.9 18.6-55.4 3.2-16.5 1.4-26.2-5.3-29-8.9-3.7-26.8 12.5-50.2 69-8.2 19.7-10.4 44.8-10.8 62.4l-10-.2c.4-18.4 2.8-44.8 11.6-66 23.6-57 44.9-82.1 63.3-74.4 11.7 4.8 15.5 18.3 11.3 40.1-3.6 18.4-12.1 40.3-19.2 57.3-9 21.4-25.9 41.7-38.5 54.9zM346.6 494c-9.4 0-19.2-7.3-29-21.9-10.5-15.5-19.9-37-27-54-8.9-21.5-11.2-47.7-11.6-66l10-.2c.4 17.4 2.6 42.3 10.9 62.4 6.9 16.6 16 37.5 26 52.3 9.4 13.9 17.5 19.5 24.2 16.8 8.9-3.7 10.1-27.8-13.3-84.3-8.2-19.7-24.4-39-36.5-51.8l7.2-6.9c12.7 13.3 29.7 33.7 38.5 54.8 23.6 57 26.3 89.8 7.9 97.4-2.4.9-4.8 1.4-7.3 1.4zM204.4 171.7c-12.7-13.3-29.7-33.7-38.5-54.8-23.6-57-26.3-89.8-7.9-97.4 11.7-4.8 23.9 2 36.3 20.4 10.5 15.5 19.9 37 27 54 8.9 21.5 11.2 47.7 11.6 66l-10 .2c-.4-17.4-2.6-42.3-10.9-62.4-6.9-16.6-16-37.5-26-52.3-9.4-13.9-17.5-19.5-24.2-16.8-8.9 3.7-10.1 27.8 13.3 84.3 8.2 19.7 24.3 39 36.5 51.8l-7.2 7zM467.9 366.9c-4.6 0-9.7-.6-15.5-1.7-18.4-3.6-40.3-12.1-57.3-19.2-21.5-8.9-41.7-25.8-54.9-38.4l6.9-7.2c12.6 12 31.8 28.1 51.8 36.4 16.6 6.9 37.9 15.2 55.4 18.6 16.5 3.2 26.2 1.4 29-5.3 3.7-8.9-12.5-26.8-69-50.2-19.7-8.2-44.8-10.4-62.4-10.8l.2-10c18.4.4 44.8 2.8 66 11.6 57 23.6 82.1 44.9 74.4 63.3-3.6 8.6-11.8 12.9-24.6 12.9zM159.9 232.9c-18.4-.4-44.8-2.8-66-11.6-57-23.6-82.1-44.9-74.4-63.3 4.8-11.7 18.3-15.5 40.1-11.3 18.4 3.6 40.3 12.1 57.3 19.2 21.5 8.9 41.7 25.8 54.9 38.4l-6.9 7.2c-12.6-12-31.8-28.1-51.8-36.4-16.6-6.9-37.9-15.2-55.4-18.6-16.5-3.2-26.2-1.4-29 5.3-3.7 8.9 12.5 26.8 69 50.2 19.7 8.2 44.8 10.4 62.4 10.8l-.2 10.1zM352.1 233l-.2-10c17.4-.4 42.3-2.6 62.4-10.9 16.6-6.9 37.5-16 52.3-26 13.9-9.4 19.5-17.5 16.8-24.2-3.7-8.9-27.8-10.1-84.3 13.3-19.7 8.2-39 24.4-51.8 36.5l-6.9-7.2c13.3-12.7 33.7-29.7 54.8-38.5 57-23.6 89.8-26.3 97.4-7.9 4.8 11.7-2 23.9-20.4 36.3-15.5 10.5-37 19.9-54 27-21.6 8.8-47.8 11.2-66.1 11.6zM43.8 366c-12.9 0-21-4-24.4-12.1-4.8-11.7 2-23.9 20.4-36.3 15.5-10.5 37-19.9 54-27 21.5-8.9 47.7-11.2 66-11.6l.2 10c-17.4.4-42.3 2.6-62.4 10.9-16.6 6.9-37.5 16-52.3 26-13.9 9.4-19.5 17.5-16.8 24.2 3.7 8.9 27.8 10.1 84.3-13.3 19.7-8.2 39-24.3 51.8-36.5l6.9 7.2c-13.3 12.7-33.7 29.7-54.8 38.5-31.9 13.4-56.3 20-72.9 20z" })));
};

var Icon$1x = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M144.458 266.26s97.574-25.539 91.27 64.533c0 0-79.664 34.326-91.27-64.533zM448.928 316.102s-90.266-70.438-122.504-4.943c-.144 0 48.715 83.893 122.504 4.943z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M144.458 266.26l91.27 64.533c6.304-90.209-91.27-64.533-91.27-64.533zM448.498 316.513l.429-.411s-90.266-70.438-122.504-4.943c0 0 .144.137.287.549l121.788 4.805z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M194.379 292.906l78.104 55.297-8.511 11.04-78.103-55.297 8.51-11.04zM273.32 302.237l114.366 4.717-.616 13.717-114.366-4.717.616-13.717z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M260.372 416.609l-13.755-3.845 2.006-6.591c33.097-110.667 18.053-208.977 17.91-209.938l-1.147-6.728 14.185-2.06 1.146 6.728c.717 4.119 15.761 102.155-18.196 215.706l-2.149 6.728z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M148.041 131.839c0 31.305 46.422 32.953 46.422 32.953s-33.527 15.653-23.211 43.663c10.316 28.01 54.159-14.005 54.159-14.005s-25.79 54.372 12.036 54.372 36.106-53.549 36.106-53.549 15.045 57.257 43.844 29.658c28.799-27.598-16.334-46.134-16.334-46.134s61.897 19.772 61.897-18.948-50.721-21.42-50.721-21.42 54.16-37.072 29.229-60.963c-24.931-23.891-52.44 20.596-52.44 20.596s13.754-55.197-24.931-55.197c-38.686 0-30.089 52.725-30.089 52.725s-17.193-35.15-42.124-26.912c-24.931 8.239 1.719 48.332 1.719 48.332s-45.562-16.477-45.562 14.829z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M424.283 494.323c-45.276 6.179-104.307 9.886-168.783 9.886-64.476 0-123.507-3.707-168.783-9.886 18.196-16.888 58.458-51.352 104.451-71.124 20.918-9.062 42.84-14.966 64.475-14.966 21.636 0 43.557 6.041 64.476 14.966 45.706 19.772 86.111 54.236 104.164 71.124z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M312.239 138.429s54.16-37.072 29.229-60.963c-10.459-10.023-21.492-7.964-30.662-2.197-14.185 65.906-70.923 116.846-141.417 125.634.287 2.471.86 4.943 1.863 7.689 10.316 28.01 54.159-14.005 54.159-14.005s-25.79 54.373 12.036 54.373 36.106-53.549 36.106-53.549 15.045 57.256 43.844 29.658c28.799-27.599-16.334-46.135-16.334-46.135s61.897 19.635 61.897-19.085-50.721-21.42-50.721-21.42z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M255.5 180.17c19.783 0 35.82-15.368 35.82-34.326s-16.037-34.326-35.82-34.326-35.82 15.368-35.82 34.326 16.037 34.326 35.82 34.326z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M255.5 187.035c-23.641 0-42.984-18.536-42.984-41.191 0-22.656 19.343-41.192 42.984-41.192 23.641 0 42.984 18.536 42.984 41.192 0 22.655-19.343 41.191-42.984 41.191zm0-68.652c-15.761 0-28.656 12.357-28.656 27.461 0 15.103 12.895 27.461 28.656 27.461s28.656-12.358 28.656-27.461c0-15.104-12.895-27.461-28.656-27.461z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M237.447 255.688c-13.325 0-19.916-5.767-23.211-10.573-5.588-8.376-5.158-20.046-3.009-30.344-9.887 6.453-21.922 11.945-31.952 9.748-4.871-1.098-11.319-4.256-14.757-13.73-6.591-17.85 1.576-32.267 11.749-41.878-17.051-4.531-35.391-15.378-35.391-37.072 0-11.946 5.588-18.125 10.317-21.145 8.167-5.492 19.486-5.492 28.655-4.119-4.155-9.474-7.88-21.695-4.298-31.443 2.293-6.179 7.164-10.71 14.042-12.907 15.617-5.217 28.226 2.334 37.109 11.26 1.146-9.063 4.012-18.949 10.603-26.363C243.751 39.707 252.778 36 264.097 36c10.889 0 19.772 3.844 25.647 10.984 6.591 7.964 8.597 18.948 8.883 28.834 6.448-5.766 14.615-10.984 23.498-12.082 6.161-.687 15.331.137 24.358 8.787 6.304 6.041 9.313 13.593 8.596 21.694-1.003 12.22-10.029 24.166-19.199 33.365 7.594.138 15.474 1.511 21.922 5.904 8.167 5.493 12.322 14.417 12.322 26.226 0 13.318-6.305 20.595-11.749 24.302-8.167 5.63-19.343 7.003-29.946 6.591 2.436 3.295 4.299 7.14 5.158 11.259 1.863 9.474-1.862 18.811-11.175 27.873-10.603 10.16-19.916 10.435-25.934 8.787-8.31-2.196-14.614-9.062-19.343-16.751-2.435 8.239-6.304 16.751-12.752 23.205-7.164 7.14-16.19 10.71-26.936 10.71zm-12.036-68.104c1.433 0 2.866.412 4.012 1.236 2.866 1.922 3.869 5.492 2.436 8.513-5.301 11.122-11.462 31.855-5.731 40.368.716 1.098 2.865 4.256 11.176 4.256 6.734 0 12.178-2.06 16.62-6.453 13.038-12.77 12.322-39.819 12.322-40.093-.143-3.433 2.579-6.454 6.161-7.003 3.582-.412 7.021 1.785 7.88 5.08 3.153 11.809 11.32 29.521 19.916 31.718 3.296.824 7.308-.961 11.893-5.218 5.731-5.492 8.31-10.847 7.307-15.515-1.863-9.474-16.477-17.438-21.349-19.36-3.582-1.51-5.301-5.355-3.868-8.788 1.432-3.432 5.301-5.217 9.026-4.119 9.027 2.884 35.247 8.65 46.709.687 3.869-2.746 5.732-7.003 5.732-13.181 0-7.278-2.006-12.221-6.305-15.104-9.456-6.453-28.799-1.922-34.817.137-3.438 1.099-7.164-.274-8.74-3.295-1.719-3.021-.716-6.728 2.149-8.787 8.597-5.905 31.379-24.715 32.668-39.682.43-4.119-1.003-7.689-4.442-10.847-4.011-3.844-8.166-5.492-12.465-4.943-12.179 1.51-25.074 18.4-28.799 24.166-1.863 2.883-5.588 4.119-8.883 2.883-3.296-1.235-5.158-4.668-4.299-7.963 2.006-7.827 5.015-30.482-3.582-40.917-3.152-3.845-7.88-5.767-14.328-5.767-7.02 0-12.178 2.06-16.047 6.316-9.17 10.298-8.167 31.306-7.021 38.446.573 3.432-1.576 6.59-5.014 7.689-3.439.961-7.021-.55-8.597-3.708-.144-.274-14.758-29.52-33.241-23.341-3.582 1.235-4.585 3.02-5.158 4.53-3.152 8.65 5.731 26.363 10.603 33.64 1.719 2.472 1.432 5.767-.43 7.964-2.006 2.334-5.158 3.158-8.024 2.059-5.731-2.059-23.928-6.727-31.808-1.51-1.003.687-4.012 2.746-4.012 9.886 0 24.303 39.115 26.088 39.545 26.088 3.296.137 6.018 2.334 6.734 5.492.717 3.158-.859 6.179-3.868 7.552-1.146.549-27.653 13.318-19.629 35.15 1.576 4.256 3.582 4.668 4.441 4.943 8.597 1.922 27.653-11.671 37.969-21.42 1.433-1.098 3.296-1.785 5.158-1.785zM205.782 343.425c-9.886 0-20.776-1.785-31.092-7.552-20.632-11.259-33.241-34.463-37.252-68.927-.43-3.295 1.862-6.453 5.158-7.414 2.005-.549 49.288-12.632 78.66 10.435 16.334 12.77 23.498 33.365 21.635 61.238-.143 2.472-1.862 4.806-4.155 5.767-1.003.412-15.187 6.453-32.954 6.453zm-53.3-71.81c4.155 26.362 13.898 44.075 29.229 52.45 17.623 9.612 38.542 4.669 46.996 1.922.716-20.87-4.872-36.111-16.621-45.31-18.196-14.28-47.139-11.259-59.604-9.062zM386.601 356.744a51.51 51.51 0 01-6.591-.412c-37.396-3.982-59.031-40.505-59.891-42.015l12.465-6.728c.144.274 19.057 31.854 49.002 35.012 18.053 1.923 37.109-6.728 56.596-25.813-15.905-10.847-58.888-36.935-86.971-22.793l-6.591-12.22c43.27-21.831 106.17 26.637 108.892 28.697 1.577 1.236 2.436 2.883 2.579 4.806.144 1.922-.429 3.707-1.862 5.08-22.495 24.303-45.133 36.386-67.628 36.386z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M194.379 292.906l78.104 55.297-8.511 11.04-78.103-55.297 8.51-11.04zM273.32 302.237l114.366 4.717-.616 13.717-114.366-4.717.616-13.717z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M262.377 410.018l-13.754-3.845c33.097-110.667 18.053-208.977 17.91-209.938l14.184-2.06c.573 4.119 15.618 102.155-18.34 215.843z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M419.412 499.266c-27.224-25.264-97.86-84.305-163.912-84.305s-136.546 58.904-163.769 84.168l-10.03-9.886c28.513-26.5 102.589-88.013 173.799-88.013 71.21 0 145.285 61.65 173.798 88.15l-9.886 9.886z" })));
};

var Icon$1w = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M178.5 167.7s68.1-18.6 63.7 47c0 0-55.6 25-63.7-47zM391 204s-63-51.3-85.5-3.6c-.1 0 34 61.1 85.5 3.6z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M178.5 167.7l63.7 47c4.4-65.7-63.7-47-63.7-47zM390.7 204.3l.3-.3s-63-51.3-85.5-3.6c0 0 .1.1.2.4l85 3.5z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M213.342 187.107l54.511 40.273-5.94 8.04-54.511-40.273 5.94-8.04zM268.437 193.902l79.82 3.436-.43 9.99-79.82-3.436.43-9.99z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M259.4 277.2l-9.6-2.8 1.4-4.8c23.1-80.6 12.6-152.2 12.5-152.9l-.8-4.9 9.9-1.5.8 4.9c.5 3 11 74.4-12.7 157.1l-1.5 4.9z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M416 341H96l20 136c11 11 62.7 30 140 30s128-18 140-30l20-136z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M102.8 387c32 8.4 88.7 14 153.2 14 64.5 0 121.2-5.6 153.2-14l6.8-46H96l6.8 46z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M256 281c-100 0-181 13.4-181 30v30c0 16.6 81 30 181 30s181-13.4 181-30v-30c0-16.6-81-30-181-30z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", fillRule: "evenodd", d: "M256 281c-100 0-181 13.4-181 30v30c0 15.2 68.5 27.8 157.2 29.7 15.1-26.4 23.8-57 23.8-89.7z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M256 341c99.964 0 181-13.431 181-30 0-16.569-81.036-30-181-30S75 294.431 75 311c0 16.569 81.036 30 181 30z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M181 69.8c0 22.8 32.4 24 32.4 24s-23.4 11.4-16.2 31.8c7.2 20.4 37.8-10.2 37.8-10.2s-18 39.6 8.4 39.6 25.2-39 25.2-39 10.5 41.7 30.6 21.6-11.4-33.6-11.4-33.6S331 118.4 331 90.2c0-28.2-35.4-15.6-35.4-15.6s37.8-27 20.4-44.4-36.6 15-36.6 15S289 5 262 5s-21 38.4-21 38.4-12-25.6-29.4-19.6 1.2 35.2 1.2 35.2S181 47 181 69.8z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M373.8 333.8C342.2 338.3 301 341 256 341s-86.2-2.7-117.8-7.2c12.7-12.3 40.8-37.4 72.9-51.8 14.6-6.6 29.9-10.9 45-10.9 15.1 0 30.4 4.4 45 10.9 31.9 14.4 60.1 39.5 72.7 51.8z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M295.6 74.6s37.8-27 20.4-44.4c-7.3-7.3-15-5.8-21.4-1.6-9.9 48-49.5 85.1-98.7 91.5.2 1.8.6 3.6 1.3 5.6 7.2 20.4 37.8-10.2 37.8-10.2s-18 39.6 8.4 39.6 25.2-39 25.2-39 10.5 41.7 30.6 21.6-11.4-33.6-11.4-33.6S331 118.4 331 90.2c0-28.2-35.4-15.6-35.4-15.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M256 105c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 110c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30zm0-50c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M243.4 160c-9.3 0-13.9-4.2-16.2-7.7-3.9-6.1-3.6-14.6-2.1-22.1-6.9 4.7-15.3 8.7-22.3 7.1-3.4-.8-7.9-3.1-10.3-10-4.6-13 1.1-23.5 8.2-30.5-11.9-3.3-24.7-11.2-24.7-27 0-8.7 3.9-13.2 7.2-15.4 5.7-4 13.6-4 20-3-2.9-6.9-5.5-15.8-3-22.9 1.6-4.5 5-7.8 9.8-9.4 10.9-3.8 19.7 1.7 25.9 8.2.8-6.6 2.8-13.8 7.4-19.2C247.8 2.7 254.1 0 262 0c7.6 0 13.8 2.8 17.9 8 4.6 5.8 6 13.8 6.2 21 4.5-4.2 10.2-8 16.4-8.8 4.3-.5 10.7.1 17 6.4 4.4 4.4 6.5 9.9 6 15.8-.7 8.9-7 17.6-13.4 24.3 5.3.1 10.8 1.1 15.3 4.3 5.7 4 8.6 10.5 8.6 19.1 0 9.7-4.4 15-8.2 17.7-5.7 4.1-13.5 5.1-20.9 4.8 1.7 2.4 3 5.2 3.6 8.2 1.3 6.9-1.3 13.7-7.8 20.3-7.4 7.4-13.9 7.6-18.1 6.4-5.8-1.6-10.2-6.6-13.5-12.2-1.7 6-4.4 12.2-8.9 16.9-5 5.2-11.3 7.8-18.8 7.8zm-8.4-49.6c1 0 2 .3 2.8.9 2 1.4 2.7 4 1.7 6.2-3.7 8.1-8 23.2-4 29.4.5.8 2 3.1 7.8 3.1 4.7 0 8.5-1.5 11.6-4.7 9.1-9.3 8.6-29 8.6-29.2-.1-2.5 1.8-4.7 4.3-5.1 2.5-.3 4.9 1.3 5.5 3.7 2.2 8.6 7.9 21.5 13.9 23.1 2.3.6 5.1-.7 8.3-3.8 4-4 5.8-7.9 5.1-11.3-1.3-6.9-11.5-12.7-14.9-14.1-2.5-1.1-3.7-3.9-2.7-6.4 1-2.5 3.7-3.8 6.3-3 6.3 2.1 24.6 6.3 32.6.5 2.7-2 4-5.1 4-9.6 0-5.3-1.4-8.9-4.4-11-6.6-4.7-20.1-1.4-24.3.1-2.4.8-5-.2-6.1-2.4-1.2-2.2-.5-4.9 1.5-6.4 6-4.3 21.9-18 22.8-28.9.3-3-.7-5.6-3.1-7.9-2.8-2.8-5.7-4-8.7-3.6-8.5 1.1-17.5 13.4-20.1 17.6-1.3 2.1-3.9 3-6.2 2.1-2.3-.9-3.6-3.4-3-5.8 1.4-5.7 3.5-22.2-2.5-29.8-2.2-2.8-5.5-4.2-10-4.2-4.9 0-8.5 1.5-11.2 4.6-6.4 7.5-5.7 22.8-4.9 28 .4 2.5-1.1 4.8-3.5 5.6-2.4.7-4.9-.4-6-2.7-.1-.2-10.3-21.5-23.2-17-2.5.9-3.2 2.2-3.6 3.3-2.2 6.3 4 19.2 7.4 24.5 1.2 1.8 1 4.2-.3 5.8-1.4 1.7-3.6 2.3-5.6 1.5-4-1.5-16.7-4.9-22.2-1.1-.7.5-2.8 2-2.8 7.2 0 17.7 27.3 19 27.6 19 2.3.1 4.2 1.7 4.7 4s-.6 4.5-2.7 5.5c-.8.4-19.3 9.7-13.7 25.6 1.1 3.1 2.5 3.4 3.1 3.6 6 1.4 19.3-8.5 26.5-15.6 1-.8 2.3-1.3 3.6-1.3zM221.3 223.9c-6.9 0-14.5-1.3-21.7-5.5-14.4-8.2-23.2-25.1-26-50.2-.3-2.4 1.3-4.7 3.6-5.4 1.4-.4 34.4-9.2 54.9 7.6 11.4 9.3 16.4 24.3 15.1 44.6-.1 1.8-1.3 3.5-2.9 4.2-.7.3-10.6 4.7-23 4.7zm-37.2-52.3c2.9 19.2 9.7 32.1 20.4 38.2 12.3 7 26.9 3.4 32.8 1.4.5-15.2-3.4-26.3-11.6-33-12.7-10.4-32.9-8.2-41.6-6.6zM347.5 233.6c-1.6 0-3.1-.1-4.6-.3-26.1-2.9-41.2-29.5-41.8-30.6l8.7-4.9c.1.2 13.3 23.2 34.2 25.5 12.6 1.4 25.9-4.9 39.5-18.8-11.1-7.9-41.1-26.9-60.7-16.6l-4.6-8.9c30.2-15.9 74.1 19.4 76 20.9 1.1.9 1.7 2.1 1.8 3.5.1 1.4-.3 2.7-1.3 3.7-15.7 17.7-31.5 26.5-47.2 26.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M213.342 187.107l54.511 40.273-5.94 8.04-54.511-40.273 5.94-8.04zM268.437 193.902l79.82 3.436-.43 9.99-79.82-3.436.43-9.99z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.8 272.4l-9.6-2.8c23.1-80.6 12.6-152.2 12.5-152.9l9.9-1.5c.4 3 10.9 74.4-12.8 157.2zM256 346c-48.6 0-94.4-3.1-128.8-8.9C75.9 328.6 70 318.2 70 311h10c0 1.7 8.3 9.6 48.8 16.3 33.9 5.6 79.1 8.7 127.2 8.7 48.1 0 93.2-3.1 127.2-8.7 40.5-6.7 48.8-14.6 48.8-16.3h10c0 7.2-5.9 17.6-57.2 26.1-34.4 5.8-80.2 8.9-128.8 8.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M276.1 375.8l-.2-10c43.7-.8 84.1-4.2 113.6-9.7 35.2-6.5 42.4-13.6 42.4-15.2v-30c0-.1-2-6.8-34.7-13.6-24.3-5.1-58.6-8.8-96.5-10.4l.4-10c38.5 1.6 73.4 5.4 98.2 10.6 29.1 6.1 42.7 13.6 42.7 23.4v30c0 6.7-5.2 16.7-50.6 25-30.1 5.6-71 9.1-115.3 9.9zM256 376c-48.6 0-94.4-3.1-128.8-8.9C75.9 358.6 70 348.2 70 341v-30c0-9.8 13.5-17.3 42.5-23.4 24.7-5.2 59.5-9 97.9-10.6l.4 10c-37.9 1.6-72.1 5.3-96.3 10.4C82 304.3 80 310.9 80 311v30c0 1.7 8.3 9.6 48.8 16.3 33.9 5.6 79.1 8.7 127.2 8.7v10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 512c-76.5 0-130.8-18.8-143.5-31.5-.8-.8-1.3-1.7-1.4-2.8L93.2 356.4l9.9-1.5 17.6 119.5C132.9 484.7 182.3 502 256 502c71.4 0 121.8-16 135.3-27.5L408.9 355l9.9 1.5L401 477.8c-.2 1.1-.7 2-1.4 2.8-12.2 12.1-62 31.4-143.6 31.4zM370.4 337.4C351.4 319 302.1 276 256 276c-46.1 0-95.3 42.9-114.3 61.3l-7-7.2C154.6 310.8 206.3 266 256 266s101.4 44.9 121.3 64.2l-6.9 7.2z" })));
};

var Icon$1v = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M178.5 160.7s68.1-18.6 63.7 47c0 0-55.6 25-63.7-47zM391 197s-63-51.3-85.5-3.6c-.1 0 34 61.1 85.5 3.6z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M178.5 160.7l63.7 47c4.4-65.7-63.7-47-63.7-47zM390.7 197.3l.3-.3s-63-51.3-85.5-3.6c0 0 .1.1.2.4l85 3.5z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M213.342 180.107l54.511 40.273-5.94 8.04-54.511-40.273 5.94-8.04zM268.437 186.902l79.82 3.436-.43 9.99-79.82-3.436.43-9.99z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M259.4 270.2l-9.6-2.8 1.4-4.8c23.1-80.6 12.6-152.2 12.5-152.9l-.8-4.9 9.9-1.5.8 4.9c.5 3 11 74.4-12.7 157.1l-1.5 4.9z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M416 334H96l20 136c11 11 62.7 30 140 30s128-18 140-30l20-136z" }),
        React__default['default'].createElement("path", { fill: "#8D2323", d: "M102.8 380c32 8.4 88.7 14 153.2 14 64.5 0 121.2-5.6 153.2-14l6.8-46H96l6.8 46z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M256 274c-100 0-181 13.4-181 30v30c0 16.6 81 30 181 30s181-13.4 181-30v-30c0-16.6-81-30-181-30z" }),
        React__default['default'].createElement("path", { fill: "#CE4C4C", fillRule: "evenodd", d: "M256 274c-100 0-181 13.4-181 30v30c0 15.2 68.5 27.8 157.2 29.7 15.1-26.4 23.8-57 23.8-89.7z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#862727", d: "M256 334c99.964 0 181-13.431 181-30 0-16.569-81.036-30-181-30S75 287.431 75 304c0 16.569 81.036 30 181 30z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M181 62.8c0 22.8 32.4 24 32.4 24s-23.4 11.4-16.2 31.8c7.2 20.4 37.8-10.2 37.8-10.2s-18 39.6 8.4 39.6 25.2-39 25.2-39 10.5 41.7 30.6 21.6S287.8 97 287.8 97 331 111.4 331 83.2c0-28.2-35.4-15.6-35.4-15.6s37.8-27 20.4-44.4-36.6 15-36.6 15S289-2 262-2s-21 38.4-21 38.4-12-25.6-29.4-19.6 1.2 35.2 1.2 35.2S181 40 181 62.8z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M373.8 326.8C342.2 331.3 301 334 256 334s-86.2-2.7-117.8-7.2c12.7-12.3 40.8-37.4 72.9-51.8 14.6-6.6 29.9-10.9 45-10.9 15.1 0 30.4 4.4 45 10.9 31.9 14.4 60.1 39.5 72.7 51.8z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M295.6 67.6s37.8-27 20.4-44.4c-7.3-7.3-15-5.8-21.4-1.6-9.9 48-49.5 85.1-98.7 91.5.2 1.8.6 3.6 1.3 5.6 7.2 20.4 37.8-10.2 37.8-10.2s-18 39.6 8.4 39.6 25.2-39 25.2-39 10.5 41.7 30.6 21.6-11.4-33.6-11.4-33.6S331 111.4 331 83.2c0-28.2-35.4-15.6-35.4-15.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M256 98c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 103c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30zm0-50c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M243.4 153c-9.3 0-13.9-4.2-16.2-7.7-3.9-6.1-3.6-14.6-2.1-22.1-6.9 4.7-15.3 8.7-22.3 7.1-3.4-.8-7.9-3.1-10.3-10-4.6-13 1.1-23.5 8.2-30.5-11.9-3.3-24.7-11.2-24.7-27 0-8.7 3.9-13.2 7.2-15.4 5.7-4 13.6-4 20-3-2.9-6.9-5.5-15.8-3-22.9 1.6-4.5 5-7.8 9.8-9.4 10.9-3.8 19.7 1.7 25.9 8.2.8-6.6 2.8-13.8 7.4-19.2C247.8-4.3 254.1-7 262-7c7.6 0 13.8 2.8 17.9 8 4.6 5.8 6 13.8 6.2 21 4.5-4.2 10.2-8 16.4-8.8 4.3-.5 10.7.1 17 6.4 4.4 4.4 6.5 9.9 6 15.8-.7 8.9-7 17.6-13.4 24.3 5.3.1 10.8 1.1 15.3 4.3 5.7 4 8.6 10.5 8.6 19.1 0 9.7-4.4 15-8.2 17.7-5.7 4.1-13.5 5.1-20.9 4.8 1.7 2.4 3 5.2 3.6 8.2 1.3 6.9-1.3 13.7-7.8 20.3-7.4 7.4-13.9 7.6-18.1 6.4-5.8-1.6-10.2-6.6-13.5-12.2-1.7 6-4.4 12.2-8.9 16.9-5 5.2-11.3 7.8-18.8 7.8zm-8.4-49.6c1 0 2 .3 2.8.9 2 1.4 2.7 4 1.7 6.2-3.7 8.1-8 23.2-4 29.4.5.8 2 3.1 7.8 3.1 4.7 0 8.5-1.5 11.6-4.7 9.1-9.3 8.6-29 8.6-29.2-.1-2.5 1.8-4.7 4.3-5.1 2.5-.3 4.9 1.3 5.5 3.7 2.2 8.6 7.9 21.5 13.9 23.1 2.3.6 5.1-.7 8.3-3.8 4-4 5.8-7.9 5.1-11.3-1.3-6.9-11.5-12.7-14.9-14.1-2.5-1.1-3.7-3.9-2.7-6.4 1-2.5 3.7-3.8 6.3-3 6.3 2.1 24.6 6.3 32.6.5 2.7-2 4-5.1 4-9.6 0-5.3-1.4-8.9-4.4-11-6.6-4.7-20.1-1.4-24.3.1-2.4.8-5-.2-6.1-2.4-1.2-2.2-.5-4.9 1.5-6.4 6-4.3 21.9-18 22.8-28.9.3-3-.7-5.6-3.1-7.9-2.8-2.8-5.7-4-8.7-3.6-8.5 1.1-17.5 13.4-20.1 17.6-1.3 2.1-3.9 3-6.2 2.1-2.3-.9-3.6-3.4-3-5.8 1.4-5.7 3.5-22.2-2.5-29.8-2.2-2.8-5.5-4.2-10-4.2-4.9 0-8.5 1.5-11.2 4.6-6.4 7.5-5.7 22.8-4.9 28 .4 2.5-1.1 4.8-3.5 5.6-2.4.7-4.9-.4-6-2.7-.1-.2-10.3-21.5-23.2-17-2.5.9-3.2 2.2-3.6 3.3-2.2 6.3 4 19.2 7.4 24.5 1.2 1.8 1 4.2-.3 5.8-1.4 1.7-3.6 2.3-5.6 1.5-4-1.5-16.7-4.9-22.2-1.1-.7.5-2.8 2-2.8 7.2 0 17.7 27.3 19 27.6 19 2.3.1 4.2 1.7 4.7 4s-.6 4.5-2.7 5.5c-.8.4-19.3 9.7-13.7 25.6 1.1 3.1 2.5 3.4 3.1 3.6 6 1.4 19.3-8.5 26.5-15.6 1-.8 2.3-1.3 3.6-1.3zM221.3 216.9c-6.9 0-14.5-1.3-21.7-5.5-14.4-8.2-23.2-25.1-26-50.2-.3-2.4 1.3-4.7 3.6-5.4 1.4-.4 34.4-9.2 54.9 7.6 11.4 9.3 16.4 24.3 15.1 44.6-.1 1.8-1.3 3.5-2.9 4.2-.7.3-10.6 4.7-23 4.7zm-37.2-52.3c2.9 19.2 9.7 32.1 20.4 38.2 12.3 7 26.9 3.4 32.8 1.4.5-15.2-3.4-26.3-11.6-33-12.7-10.4-32.9-8.2-41.6-6.6zM347.5 226.6c-1.6 0-3.1-.1-4.6-.3-26.1-2.9-41.2-29.5-41.8-30.6l8.7-4.9c.1.2 13.3 23.2 34.2 25.5 12.6 1.4 25.9-4.9 39.5-18.8-11.1-7.9-41.1-26.9-60.7-16.6l-4.6-8.9c30.2-15.9 74.1 19.4 76 20.9 1.1.9 1.7 2.1 1.8 3.5.1 1.4-.3 2.7-1.3 3.7-15.7 17.7-31.5 26.5-47.2 26.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M213.342 180.107l54.511 40.273-5.94 8.04-54.511-40.273 5.94-8.04zM268.437 186.902l79.82 3.436-.43 9.99-79.82-3.436.43-9.99z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.8 265.4l-9.6-2.8c23.1-80.6 12.6-152.2 12.5-152.9l9.9-1.5c.4 3 10.9 74.4-12.8 157.2zM256 339c-48.6 0-94.4-3.1-128.8-8.9C75.9 321.6 70 311.2 70 304h10c0 1.7 8.3 9.6 48.8 16.3 33.9 5.6 79.1 8.7 127.2 8.7 48.1 0 93.2-3.1 127.2-8.7 40.5-6.7 48.8-14.6 48.8-16.3h10c0 7.2-5.9 17.6-57.2 26.1-34.4 5.8-80.2 8.9-128.8 8.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M276.1 368.8l-.2-10c43.7-.8 84.1-4.2 113.6-9.7 35.2-6.5 42.4-13.6 42.4-15.2v-30c0-.1-2-6.8-34.7-13.6-24.3-5.1-58.6-8.8-96.5-10.4l.4-10c38.5 1.6 73.4 5.4 98.2 10.6 29.1 6.1 42.7 13.6 42.7 23.4v30c0 6.7-5.2 16.7-50.6 25-30.1 5.6-71 9.1-115.3 9.9zM256 369c-48.6 0-94.4-3.1-128.8-8.9C75.9 351.6 70 341.2 70 334v-30c0-9.8 13.5-17.3 42.5-23.4 24.7-5.2 59.5-9 97.9-10.6l.4 10c-37.9 1.6-72.1 5.3-96.3 10.4C82 297.3 80 303.9 80 304v30c0 1.7 8.3 9.6 48.8 16.3 33.9 5.6 79.1 8.7 127.2 8.7v10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 505c-76.5 0-130.8-18.8-143.5-31.5-.8-.8-1.3-1.7-1.4-2.8L93.2 349.4l9.9-1.5 17.6 119.5C132.9 477.7 182.3 495 256 495c71.4 0 121.8-16 135.3-27.5L408.9 348l9.9 1.5L401 470.8c-.2 1.1-.7 2-1.4 2.8-12.2 12.1-62 31.4-143.6 31.4zM370.4 330.4C351.4 312 302.1 269 256 269c-46.1 0-95.3 42.9-114.3 61.3l-7-7.2C154.6 303.8 206.3 259 256 259s101.4 44.9 121.3 64.2l-6.9 7.2z" })));
};

var Icon$1u = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M327 25c-7.8-7.8-31.8-20-71-20s-62 11-71 20c-8.7 9.1-21.7 24.9-31 48-9.7 24-11.1 45.3-11 58h226c-.8-14.8-3.9-37.2-14.7-62-8.4-19.4-18.9-34-27.3-44z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M369 131H143c-.1-8.8.6-21.7 4.2-36.8 28.9-7 67-11.2 108.8-11.2 41 0 78.4 4.1 107 10.8 4 14.7 5.5 27.6 6 37.2z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M249.5 131H369c-.8-14.8-3.9-37.2-14.7-62-8.5-19.4-18.9-34-27.3-44-3.4-3.4-9.8-7.6-19.2-11.3-2.5 47-24.6 88.8-58.3 117.3z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M249.5 131H369c-.5-9.6-2-22.5-6-37.2-21-4.9-46.7-8.4-75.1-10-9.7 18.1-22.8 34-38.4 47.2z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M361.5 191c35.2-9 57.5-20.3 57.5-33.8 0-24.3-73-44.1-163-44.1S93 133 93 157.3c0 13.4 22.3 24.7 57.5 33.7h211z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M169 246c-35 0-38-26.7-38-39s9.7-17 30-17h8v56zM343 246c35 0 38-26.7 38-39s-9.7-17-30-17h-8v56z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M368.5 207L343 233v13c32.5-12.2 25.5-39 25.5-39zM143.5 207l25.5 26v13c-32.5-12.2-25.5-39-25.5-39z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M286 307h-60v38l-98.4 45.8c-21.1 9.9-34.6 31.1-34.6 54.4V507h326v-61.8c0-23.3-13.5-44.5-34.6-54.4L286 345v-38z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M322 361.8l-19 19.6s-20.5 18.1-47 18.1-47-18.1-47-18.1l-19-19.6 36-16.8v-38h60v38l36 16.8z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M286 339.2V307h-60v32.6c8.1 5.1 14 8.4 14 8.4h32s5.9-3.5 14-8.8z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M351 151v39s-3.9 67.4-24 95.7c-12 16.9-55 42.3-55 42.3h-32s-41.8-23.2-55-42.3c-19.7-28.5-24-95.7-24-95.7v-39c22.9-4.3 57-7 95-7s72 2.7 95 7z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M317.8 207c-2.7-1.9-9.1-5.9-17.9-6-9-.1-15.2 4.8-17.9 5.8l-4 12.2h37.9l1.9-12zM194.3 207c2.7-1.9 9.1-5.9 17.9-6 9-.1 15.2 4.8 17.9 5.8L234 219h-37.9l-1.8-12z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M256 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M192.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM204 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M210 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M228.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM319.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM298 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M292 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M283.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4zM185 147.5s-6.1 42.5-24 42.5c0 0-18-11.9-18-34.6 9.5-3.1 24-5.9 42-7.9zM327 147.5s6.1 42.5 24 42.5c0 0 18-11.9 18-34.6-9.5-3.1-24-5.9-42-7.9zM362 503v4H150v-4c0-20.5 3.1-41 9.2-60.6 3.8-12.3 6.5-24.8 7.9-37.6l5-44.2c1-8.9 8.6-15.6 17.5-15.6 9.2 0 16.8 7 17.6 16.2L214 442h84l6.7-80.8c.8-9.2 8.4-16.2 17.6-16.2 9 0 16.5 6.7 17.5 15.6l5 44.2c1.5 12.8 4.1 25.3 7.9 37.6 6.2 19.6 9.3 40.1 9.3 60.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M169 251c-27.7 0-43-15.6-43-44 0-22 25.4-22 35-22v10c-23.1 0-25 6.2-25 12 0 22.6 11.1 34 33 34v10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M147.005 203.493l22.12 22.563-7.14 7-22.12-22.563 7.14-7zM343 251v-10c21.9 0 33-11.4 33-34 0-5.8-1.9-12-25-12v-10c9.6 0 35 0 35 22 0 28.4-15.3 44-43 44z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M365.027 203.412l7.14 7-22.12 22.562-7.14-7 22.12-22.562zM256 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5zM192.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM204 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M210 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M228.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM319.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM298 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M292 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M283.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M272 333h-32c-.8 0-1.7-.2-2.4-.6-1.7-1-42.9-24-56.7-43.9-20.3-29.3-24.7-95.4-24.9-98.2l10-.6c0 .7 4.4 66.1 23.1 93.1 11.3 16.3 45.6 36.4 52.2 40.2h29.3c6.9-4.1 42.1-25.9 52.3-40.2 19-26.8 23-92.4 23.1-93.1l10 .6c-.2 2.8-4.3 69.2-24.9 98.3-12.5 17.6-54.7 42.7-56.5 43.7-.8.5-1.7.7-2.6.7zM350.1 155.9c-23.5-4.4-57.8-6.9-94.1-6.9s-70.6 2.5-94.1 6.9l-1.8-9.8c24.1-4.5 59-7.1 95.9-7.1 36.9 0 71.8 2.6 95.9 7.1l-1.8 9.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M362.6 195.4l-2.2-9.7C400 176.6 414 164.5 414 157c0-7-11.6-17.5-44-26.3-30.4-8.2-70.8-12.7-114-12.7s-83.6 4.5-114 12.7c-32.5 8.8-44 19.3-44 26.3 0 7.5 14 19.6 53.6 28.7l-2.2 9.7C121.4 189 88 177.1 88 157c0-31.8 86.6-49 168-49s168 17.2 168 49c0 20.1-33.4 32-61.4 38.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M161 195c-1 0-1.9-.3-2.8-.8-.8-.5-20.2-13.7-20.2-38.7 0-2.1 1.4-4.1 3.4-4.7 9.8-3.3 24.6-6.1 43.1-8.1 1.5-.2 3.1.4 4.1 1.5 1.1 1.1 1.6 2.7 1.4 4.2-.7 4.6-7.4 46.6-29 46.6zm-12.8-35.9c1.4 14.2 10.7 22.9 14.3 25.8 8-1.9 13.8-19.1 16.4-31.5-12.6 1.5-23 3.5-30.7 5.7zM351 195c-21.6 0-28.3-42-28.9-46.8-.2-1.5.3-3.1 1.4-4.2 1.1-1.1 2.6-1.7 4.1-1.5 18.4 2 33.3 4.8 43.1 8.1 2 .7 3.4 2.6 3.4 4.7 0 25-19.4 38.2-20.2 38.7-1 .7-1.9 1-2.9 1zm-17.9-41.7c2.7 12.5 8.5 29.7 16.4 31.5 3.5-2.8 12.9-11.6 14.3-25.8-7.7-2.1-18.1-4.1-30.7-5.7zM363.5 124.7c-1.7-18.6-6.4-36.7-13.8-53.7-6.7-15.4-15.6-29.7-26.4-42.6C316.7 21.9 294.4 10 256 10c-36 0-58.4 9.5-67.4 18.5-12.9 13.5-23 29.1-29.9 46.4-6.4 15.9-10 32.6-10.6 49.8l-10-.3c.6-18.3 4.4-36.2 11.3-53.2 7.5-18.5 18.2-35.2 32-49.6l.1-.1c5-5 25.3-21.5 74.5-21.5 41.9 0 66.6 13.5 74.5 21.5l.3.3c11.5 13.7 21 28.9 28.1 45.2 7.8 18 12.7 37.1 14.6 56.8l-10 .9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M361.9 98.7C332.6 91.8 295 88 256 88c-31.4 0-61.8 2.4-87.9 7l-1.7-9.8C193 80.5 224 78 256 78c39.8 0 78.2 3.9 108.2 11l-2.3 9.7zM362 512H150c-2.8 0-5-2.2-5-5v-4c0-21.1 3.2-42 9.5-62.1 3.7-11.9 6.3-24.3 7.7-36.7l5-44.2c1.3-11.4 11-20.1 22.5-20.1 11.7 0 21.6 9.1 22.6 20.8l6.3 76.2h74.8l6.3-76.2c1-11.7 10.9-20.8 22.6-20.8 11.5 0 21.2 8.6 22.5 20.1l5 44.2c1.4 12.4 4 24.7 7.7 36.7 6.3 20.1 9.5 41 9.5 62.1v4c0 2.8-2.2 5-5 5zm-207-10h202c-.1-19.7-3.1-39.3-9-58.1-3.9-12.5-6.7-25.5-8.1-38.5l-5-44.2c-.7-6.4-6.1-11.2-12.6-11.2s-12.1 5.1-12.6 11.6l-6.7 80.8c-.2 2.6-2.4 4.6-5 4.6h-84c-2.6 0-4.8-2-5-4.6l-6.7-80.8c-.5-6.5-6.1-11.6-12.6-11.6-6.4 0-11.8 4.8-12.6 11.2l-5 44.2c-1.5 13-4.2 26-8.1 38.5-5.9 18.8-8.9 38.4-9 58.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 404.5c-28.1 0-49.4-18.6-50.3-19.4l6.6-7.5c.2.2 19.5 16.9 43.7 16.9 24.2 0 43.5-16.7 43.7-16.9l6.6 7.5c-.9.8-22.2 19.4-50.3 19.4zM207.6 359.1l-4.2-9.1 17.7-8.2v-22.2h10V345c0 1.9-1.1 3.7-2.9 4.5l-20.6 9.6zM304.4 359.1l-20.6-9.6c-1.8-.8-2.9-2.6-2.9-4.5v-25.8h10v22.6l17.7 8.2-4.2 9.1zM419 512h-37v-10h32v-56.8c0-21.3-12.5-40.9-31.8-49.8l-43.4-20.2 4.2-9.1 43.4 20.2c22.8 10.6 37.5 33.8 37.5 58.9V507c.1 2.8-2.1 5-4.9 5zM362 512H93c-2.8 0-5-2.2-5-5v-61.8c0-25.2 14.7-48.3 37.5-58.9l43.4-20.2 4.2 9.1-43.4 20.2c-19.3 9-31.8 28.6-31.8 49.8V502h264v10h.1z" })));
};

var Icon$1t = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#007E3A", d: "M327 25c-7.8-7.8-31.8-20-71-20s-62 11-71 20c-8.7 9.1-21.7 24.9-31 48-9.7 24-11.1 45.3-11 58h226c-.8-14.8-3.9-37.2-14.7-62-8.4-19.4-18.9-34-27.3-44z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M369 131H143c-.1-8.8.6-21.7 4.2-36.8 28.9-7 67-11.2 108.8-11.2 41 0 78.4 4.1 107 10.8 4 14.7 5.5 27.6 6 37.2z" }),
        React__default['default'].createElement("path", { fill: "#005628", d: "M249.5 131H369c-.8-14.8-3.9-37.2-14.7-62-8.5-19.4-18.9-34-27.3-44-3.4-3.4-9.8-7.6-19.2-11.3-2.5 47-24.6 88.8-58.3 117.3z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M249.5 131H369c-.5-9.6-2-22.5-6-37.2-21-4.9-46.7-8.4-75.1-10-9.7 18.1-22.8 34-38.4 47.2z" }),
        React__default['default'].createElement("path", { fill: "#007E3A", d: "M361.5 191c35.2-9 57.5-20.3 57.5-33.8 0-24.3-73-44.1-163-44.1S93 133 93 157.3c0 13.4 22.3 24.7 57.5 33.7h211z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M169 246c-35 0-38-26.7-38-39s9.7-17 30-17h8v56zM343 246c35 0 38-26.7 38-39s-9.7-17-30-17h-8v56z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M368.5 207L343 233v13c32.5-12.2 25.5-39 25.5-39zM143.5 207l25.5 26v13c-32.5-12.2-25.5-39-25.5-39z" }),
        React__default['default'].createElement("path", { fill: "#007E3A", d: "M286 307h-60v38l-98.4 45.8c-21.1 9.9-34.6 31.1-34.6 54.4V507h326v-61.8c0-23.3-13.5-44.5-34.6-54.4L286 345v-38z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M322 361.8l-19 19.6s-20.5 18.1-47 18.1-47-18.1-47-18.1l-19-19.6 36-16.8v-38h60v38l36 16.8z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M286 339.2V307h-60v32.6c8.1 5.1 14 8.4 14 8.4h32s5.9-3.5 14-8.8z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M351 151v39s-3.9 67.4-24 95.7c-12 16.9-55 42.3-55 42.3h-32s-41.8-23.2-55-42.3c-19.7-28.5-24-95.7-24-95.7v-39c22.9-4.3 57-7 95-7s72 2.7 95 7z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M317.8 207c-2.7-1.9-9.1-5.9-17.9-6-9-.1-15.2 4.8-17.9 5.8l-4 12.2h37.9l1.9-12zM194.3 207c2.7-1.9 9.1-5.9 17.9-6 9-.1 15.2 4.8 17.9 5.8L234 219h-37.9l-1.8-12z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M256 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M192.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM204 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M210 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M228.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM319.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM298 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M292 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M283.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4zM185 147.5s-6.1 42.5-24 42.5c0 0-18-11.9-18-34.6 9.5-3.1 24-5.9 42-7.9zM327 147.5s6.1 42.5 24 42.5c0 0 18-11.9 18-34.6-9.5-3.1-24-5.9-42-7.9zM362 503v4H150v-4c0-20.5 3.1-41 9.2-60.6 3.8-12.3 6.5-24.8 7.9-37.6l5-44.2c1-8.9 8.6-15.6 17.5-15.6 9.2 0 16.8 7 17.6 16.2L214 442h84l6.7-80.8c.8-9.2 8.4-16.2 17.6-16.2 9 0 16.5 6.7 17.5 15.6l5 44.2c1.5 12.8 4.1 25.3 7.9 37.6 6.2 19.6 9.3 40.1 9.3 60.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M169 251c-27.7 0-43-15.6-43-44 0-22 25.4-22 35-22v10c-23.1 0-25 6.2-25 12 0 22.6 11.1 34 33 34v10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M147.005 203.493l22.12 22.563-7.14 7-22.12-22.563 7.14-7zM343 251v-10c21.9 0 33-11.4 33-34 0-5.8-1.9-12-25-12v-10c9.6 0 35 0 35 22 0 28.4-15.3 44-43 44z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M365.027 203.412l7.14 7-22.12 22.562-7.14-7 22.12-22.562zM256 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5zM192.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM204 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M210 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M228.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM319.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM298 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M292 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M283.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M272 333h-32c-.8 0-1.7-.2-2.4-.6-1.7-1-42.9-24-56.7-43.9-20.3-29.3-24.7-95.4-24.9-98.2l10-.6c0 .7 4.4 66.1 23.1 93.1 11.3 16.3 45.6 36.4 52.2 40.2h29.3c6.9-4.1 42.1-25.9 52.3-40.2 19-26.8 23-92.4 23.1-93.1l10 .6c-.2 2.8-4.3 69.2-24.9 98.3-12.5 17.6-54.7 42.7-56.5 43.7-.8.5-1.7.7-2.6.7zM350.1 155.9c-23.5-4.4-57.8-6.9-94.1-6.9s-70.6 2.5-94.1 6.9l-1.8-9.8c24.1-4.5 59-7.1 95.9-7.1 36.9 0 71.8 2.6 95.9 7.1l-1.8 9.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M362.6 195.4l-2.2-9.7C400 176.6 414 164.5 414 157c0-7-11.6-17.5-44-26.3-30.4-8.2-70.8-12.7-114-12.7s-83.6 4.5-114 12.7c-32.5 8.8-44 19.3-44 26.3 0 7.5 14 19.6 53.6 28.7l-2.2 9.7C121.4 189 88 177.1 88 157c0-31.8 86.6-49 168-49s168 17.2 168 49c0 20.1-33.4 32-61.4 38.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M161 195c-1 0-1.9-.3-2.8-.8-.8-.5-20.2-13.7-20.2-38.7 0-2.1 1.4-4.1 3.4-4.7 9.8-3.3 24.6-6.1 43.1-8.1 1.5-.2 3.1.4 4.1 1.5 1.1 1.1 1.6 2.7 1.4 4.2-.7 4.6-7.4 46.6-29 46.6zm-12.8-35.9c1.4 14.2 10.7 22.9 14.3 25.8 8-1.9 13.8-19.1 16.4-31.5-12.6 1.5-23 3.5-30.7 5.7zM351 195c-21.6 0-28.3-42-28.9-46.8-.2-1.5.3-3.1 1.4-4.2 1.1-1.1 2.6-1.7 4.1-1.5 18.4 2 33.3 4.8 43.1 8.1 2 .7 3.4 2.6 3.4 4.7 0 25-19.4 38.2-20.2 38.7-1 .7-1.9 1-2.9 1zm-17.9-41.7c2.7 12.5 8.5 29.7 16.4 31.5 3.5-2.8 12.9-11.6 14.3-25.8-7.7-2.1-18.1-4.1-30.7-5.7zM363.5 124.7c-1.7-18.6-6.4-36.7-13.8-53.7-6.7-15.4-15.6-29.7-26.4-42.6C316.7 21.9 294.4 10 256 10c-36 0-58.4 9.5-67.4 18.5-12.9 13.5-23 29.1-29.9 46.4-6.4 15.9-10 32.6-10.6 49.8l-10-.3c.6-18.3 4.4-36.2 11.3-53.2 7.5-18.5 18.2-35.2 32-49.6l.1-.1c5-5 25.3-21.5 74.5-21.5 41.9 0 66.6 13.5 74.5 21.5l.3.3c11.5 13.7 21 28.9 28.1 45.2 7.8 18 12.7 37.1 14.6 56.8l-10 .9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M361.9 98.7C332.6 91.8 295 88 256 88c-31.4 0-61.8 2.4-87.9 7l-1.7-9.8C193 80.5 224 78 256 78c39.8 0 78.2 3.9 108.2 11l-2.3 9.7zM362 512H150c-2.8 0-5-2.2-5-5v-4c0-21.1 3.2-42 9.5-62.1 3.7-11.9 6.3-24.3 7.7-36.7l5-44.2c1.3-11.4 11-20.1 22.5-20.1 11.7 0 21.6 9.1 22.6 20.8l6.3 76.2h74.8l6.3-76.2c1-11.7 10.9-20.8 22.6-20.8 11.5 0 21.2 8.6 22.5 20.1l5 44.2c1.4 12.4 4 24.7 7.7 36.7 6.3 20.1 9.5 41 9.5 62.1v4c0 2.8-2.2 5-5 5zm-207-10h202c-.1-19.7-3.1-39.3-9-58.1-3.9-12.5-6.7-25.5-8.1-38.5l-5-44.2c-.7-6.4-6.1-11.2-12.6-11.2s-12.1 5.1-12.6 11.6l-6.7 80.8c-.2 2.6-2.4 4.6-5 4.6h-84c-2.6 0-4.8-2-5-4.6l-6.7-80.8c-.5-6.5-6.1-11.6-12.6-11.6-6.4 0-11.8 4.8-12.6 11.2l-5 44.2c-1.5 13-4.2 26-8.1 38.5-5.9 18.8-8.9 38.4-9 58.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 404.5c-28.1 0-49.4-18.6-50.3-19.4l6.6-7.5c.2.2 19.5 16.9 43.7 16.9 24.2 0 43.5-16.7 43.7-16.9l6.6 7.5c-.9.8-22.2 19.4-50.3 19.4zM207.6 359.1l-4.2-9.1 17.7-8.2v-22.2h10V345c0 1.9-1.1 3.7-2.9 4.5l-20.6 9.6zM304.4 359.1l-20.6-9.6c-1.8-.8-2.9-2.6-2.9-4.5v-25.8h10v22.6l17.7 8.2-4.2 9.1zM419 512h-37v-10h32v-56.8c0-21.3-12.5-40.9-31.8-49.8l-43.4-20.2 4.2-9.1 43.4 20.2c22.8 10.6 37.5 33.8 37.5 58.9V507c.1 2.8-2.1 5-4.9 5zM362 512H93c-2.8 0-5-2.2-5-5v-61.8c0-25.2 14.7-48.3 37.5-58.9l43.4-20.2 4.2 9.1-43.4 20.2c-19.3 9-31.8 28.6-31.8 49.8V502h264v10h.1z" })));
};

var Icon$1s = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#2FABF1", d: "M327 25c-7.8-7.8-31.8-20-71-20s-62 11-71 20c-8.7 9.1-21.7 24.9-31 48-9.7 24-11.1 45.3-11 58h226c-.8-14.8-3.9-37.2-14.7-62-8.4-19.4-18.9-34-27.3-44z" }),
        React__default['default'].createElement("path", { fill: "#D1D346", d: "M369 131H143c-.1-8.8.6-21.7 4.2-36.8 28.9-7 67-11.2 108.8-11.2 41 0 78.4 4.1 107 10.8 4 14.7 5.5 27.6 6 37.2z" }),
        React__default['default'].createElement("path", { fill: "#2282B8", d: "M249.5 131H369c-.8-14.8-3.9-37.2-14.7-62-8.5-19.4-18.9-34-27.3-44-3.4-3.4-9.8-7.6-19.2-11.3-2.5 47-24.6 88.8-58.3 117.3z" }),
        React__default['default'].createElement("path", { fill: "#95972F", d: "M249.5 131H369c-.5-9.6-2-22.5-6-37.2-21-4.9-46.7-8.4-75.1-10-9.7 18.1-22.8 34-38.4 47.2z" }),
        React__default['default'].createElement("path", { fill: "#2FABF1", d: "M361.5 191c35.2-9 57.5-20.3 57.5-33.8 0-24.3-73-44.1-163-44.1S93 133 93 157.3c0 13.4 22.3 24.7 57.5 33.7h211z" }),
        React__default['default'].createElement("path", { fill: "#FFD987", d: "M169 246c-35 0-38-26.7-38-39s9.7-17 30-17h8v56zM343 246c35 0 38-26.7 38-39s-9.7-17-30-17h-8v56z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M368.5 207L343 233v13c32.5-12.2 25.5-39 25.5-39zM143.5 207l25.5 26v13c-32.5-12.2-25.5-39-25.5-39z" }),
        React__default['default'].createElement("path", { fill: "#F83A20", d: "M286 307h-60v38l-98.4 45.8c-21.1 9.9-34.6 31.1-34.6 54.4V507h326v-61.8c0-23.3-13.5-44.5-34.6-54.4L286 345v-38z" }),
        React__default['default'].createElement("path", { fill: "#FFD58F", d: "M322 361.8l-19 19.6s-20.5 18.1-47 18.1-47-18.1-47-18.1l-19-19.6 36-16.8v-38h60v38l36 16.8z" }),
        React__default['default'].createElement("path", { fill: "#FFD06B", d: "M286 339.2V307h-60v32.6c8.1 5.1 14 8.4 14 8.4h32s5.9-3.5 14-8.8z" }),
        React__default['default'].createElement("path", { fill: "#FFD987", d: "M351 151v39s-3.9 67.4-24 95.7c-12 16.9-55 42.3-55 42.3h-32s-41.8-23.2-55-42.3c-19.7-28.5-24-95.7-24-95.7v-39c22.9-4.3 57-7 95-7s72 2.7 95 7z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M317.8 207c-2.7-1.9-9.1-5.9-17.9-6-9-.1-15.2 4.8-17.9 5.8l-4 12.2h37.9l1.9-12zM194.3 207c2.7-1.9 9.1-5.9 17.9-6 9-.1 15.2 4.8 17.9 5.8L234 219h-37.9l-1.8-12z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M256 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5zM192.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM204 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M210 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M228.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM319.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM298 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M292 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M283.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4zM185 147.5s-6.1 42.5-24 42.5c0 0-18-11.9-18-34.6 9.5-3.1 24-5.9 42-7.9zM327 147.5s6.1 42.5 24 42.5c0 0 18-11.9 18-34.6-9.5-3.1-24-5.9-42-7.9zM362 503v4H150v-4c0-20.5 3.1-41 9.2-60.6 3.8-12.3 6.5-24.8 7.9-37.6l5-44.2c1-8.9 8.6-15.6 17.5-15.6 9.2 0 16.8 7 17.6 16.2L214 442h84l6.7-80.8c.8-9.2 8.4-16.2 17.6-16.2 9 0 16.5 6.7 17.5 15.6l5 44.2c1.5 12.8 4.1 25.3 7.9 37.6 6.2 19.6 9.3 40.1 9.3 60.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M169 251c-27.7 0-43-15.6-43-44 0-22 25.4-22 35-22v10c-23.1 0-25 6.2-25 12 0 22.6 11.1 34 33 34v10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M147.005 203.493l22.12 22.563-7.14 7-22.12-22.563 7.14-7zM343 251v-10c21.9 0 33-11.4 33-34 0-5.8-1.9-12-25-12v-10c9.6 0 35 0 35 22 0 28.4-15.3 44-43 44z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M365.027 203.412l7.14 7-22.12 22.562-7.14-7 22.12-22.562zM256 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5zM192.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM204 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M210 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M228.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM319.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM298 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M292 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M283.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M272 333h-32c-.8 0-1.7-.2-2.4-.6-1.7-1-42.9-24-56.7-43.9-20.3-29.3-24.7-95.4-24.9-98.2l10-.6c0 .7 4.4 66.1 23.1 93.1 11.3 16.3 45.6 36.4 52.2 40.2h29.3c6.9-4.1 42.1-25.9 52.3-40.2 19-26.8 23-92.4 23.1-93.1l10 .6c-.2 2.8-4.3 69.2-24.9 98.3-12.5 17.6-54.7 42.7-56.5 43.7-.8.5-1.7.7-2.6.7zM350.1 155.9c-23.5-4.4-57.8-6.9-94.1-6.9s-70.6 2.5-94.1 6.9l-1.8-9.8c24.1-4.5 59-7.1 95.9-7.1 36.9 0 71.8 2.6 95.9 7.1l-1.8 9.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M362.6 195.4l-2.2-9.7C400 176.6 414 164.5 414 157c0-7-11.6-17.5-44-26.3-30.4-8.2-70.8-12.7-114-12.7s-83.6 4.5-114 12.7c-32.5 8.8-44 19.3-44 26.3 0 7.5 14 19.6 53.6 28.7l-2.2 9.7C121.4 189 88 177.1 88 157c0-31.8 86.6-49 168-49s168 17.2 168 49c0 20.1-33.4 32-61.4 38.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M161 195c-1 0-1.9-.3-2.8-.8-.8-.5-20.2-13.7-20.2-38.7 0-2.1 1.4-4.1 3.4-4.7 9.8-3.3 24.6-6.1 43.1-8.1 1.5-.2 3.1.4 4.1 1.5 1.1 1.1 1.6 2.7 1.4 4.2-.7 4.6-7.4 46.6-29 46.6zm-12.8-35.9c1.4 14.2 10.7 22.9 14.3 25.8 8-1.9 13.8-19.1 16.4-31.5-12.6 1.5-23 3.5-30.7 5.7zM351 195c-21.6 0-28.3-42-28.9-46.8-.2-1.5.3-3.1 1.4-4.2 1.1-1.1 2.6-1.7 4.1-1.5 18.4 2 33.3 4.8 43.1 8.1 2 .7 3.4 2.6 3.4 4.7 0 25-19.4 38.2-20.2 38.7-1 .7-1.9 1-2.9 1zm-17.9-41.7c2.7 12.5 8.5 29.7 16.4 31.5 3.5-2.8 12.9-11.6 14.3-25.8-7.7-2.1-18.1-4.1-30.7-5.7zM363.5 124.7c-1.7-18.6-6.4-36.7-13.8-53.7-6.7-15.4-15.6-29.7-26.4-42.6C316.7 21.9 294.4 10 256 10c-36 0-58.4 9.5-67.4 18.5-12.9 13.5-23 29.1-29.9 46.4-6.4 15.9-10 32.6-10.6 49.8l-10-.3c.6-18.3 4.4-36.2 11.3-53.2 7.5-18.5 18.2-35.2 32-49.6l.1-.1c5-5 25.3-21.5 74.5-21.5 41.9 0 66.6 13.5 74.5 21.5l.3.3c11.5 13.7 21 28.9 28.1 45.2 7.8 18 12.7 37.1 14.6 56.8l-10 .9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M361.9 98.7C332.6 91.8 295 88 256 88c-31.4 0-61.8 2.4-87.9 7l-1.7-9.8C193 80.5 224 78 256 78c39.8 0 78.2 3.9 108.2 11l-2.3 9.7zM362 512H150c-2.8 0-5-2.2-5-5v-4c0-21.1 3.2-42 9.5-62.1 3.7-11.9 6.3-24.3 7.7-36.7l5-44.2c1.3-11.4 11-20.1 22.5-20.1 11.7 0 21.6 9.1 22.6 20.8l6.3 76.2h74.8l6.3-76.2c1-11.7 10.9-20.8 22.6-20.8 11.5 0 21.2 8.6 22.5 20.1l5 44.2c1.4 12.4 4 24.7 7.7 36.7 6.3 20.1 9.5 41 9.5 62.1v4c0 2.8-2.2 5-5 5zm-207-10h202c-.1-19.7-3.1-39.3-9-58.1-3.9-12.5-6.7-25.5-8.1-38.5l-5-44.2c-.7-6.4-6.1-11.2-12.6-11.2s-12.1 5.1-12.6 11.6l-6.7 80.8c-.2 2.6-2.4 4.6-5 4.6h-84c-2.6 0-4.8-2-5-4.6l-6.7-80.8c-.5-6.5-6.1-11.6-12.6-11.6-6.4 0-11.8 4.8-12.6 11.2l-5 44.2c-1.5 13-4.2 26-8.1 38.5-5.9 18.8-8.9 38.4-9 58.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 404.5c-28.1 0-49.4-18.6-50.3-19.4l6.6-7.5c.2.2 19.5 16.9 43.7 16.9 24.2 0 43.5-16.7 43.7-16.9l6.6 7.5c-.9.8-22.2 19.4-50.3 19.4zM207.6 359.1l-4.2-9.1 17.7-8.2v-22.2h10V345c0 1.9-1.1 3.7-2.9 4.5l-20.6 9.6zM304.4 359.1l-20.6-9.6c-1.8-.8-2.9-2.6-2.9-4.5v-25.8h10v22.6l17.7 8.2-4.2 9.1zM419 512h-37v-10h32v-56.8c0-21.3-12.5-40.9-31.8-49.8l-43.4-20.2 4.2-9.1 43.4 20.2c22.8 10.6 37.5 33.8 37.5 58.9V507c.1 2.8-2.1 5-4.9 5zM362 512H93c-2.8 0-5-2.2-5-5v-61.8c0-25.2 14.7-48.3 37.5-58.9l43.4-20.2 4.2 9.1-43.4 20.2c-19.3 9-31.8 28.6-31.8 49.8V502h264v10h.1z" })));
};

var Icon$1r = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#4F963E", d: "M260 25c-7.8-7.8-31.8-20-71-20s-62 11-71 20c-8.7 9.1-21.7 24.9-31 48-9.7 24-11.1 45.3-11 58h226c-.8-14.8-3.9-37.2-14.7-62-8.4-19.4-18.9-34-27.3-44z" }),
        React__default['default'].createElement("path", { fill: "#9B5310", d: "M302 131H76c-.1-8.8.6-21.7 4.2-36.8 28.9-7 67-11.2 108.8-11.2 41 0 78.4 4.1 107 10.8 4 14.7 5.5 27.6 6 37.2z" }),
        React__default['default'].createElement("path", { fill: "#366C29", d: "M182.5 131H302c-.8-14.8-3.9-37.2-14.7-62-8.5-19.4-18.9-34-27.3-44-3.4-3.4-9.8-7.6-19.2-11.3-2.5 47-24.6 88.8-58.3 117.3z" }),
        React__default['default'].createElement("path", { fill: "#83460E", d: "M182.5 131H302c-.5-9.6-2-22.5-6-37.2-21-4.9-46.7-8.4-75.1-10-9.7 18.1-22.8 34-38.4 47.2z" }),
        React__default['default'].createElement("path", { fill: "#4F963E", d: "M294.5 191c35.2-9 57.5-20.3 57.5-33.8 0-24.3-73-44.1-163-44.1S26 133 26 157.3c0 13.4 22.3 24.7 57.5 33.7h211z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M102 246c-35 0-38-26.7-38-39s9.7-17 30-17h8v56zM276 246c35 0 38-26.7 38-39s-9.7-17-30-17h-8v56z" }),
        React__default['default'].createElement("path", { fill: "#89610A", d: "M301.5 207L276 233v13c32.5-12.2 25.5-39 25.5-39zM76.5 207l25.5 26v13c-32.5-12.2-25.5-39-25.5-39z" }),
        React__default['default'].createElement("path", { fill: "#DC70AA", d: "M219 307h-60v38l-98.4 45.8C39.5 400.7 26 421.9 26 445.2V507h326v-61.8c0-23.3-13.5-44.5-34.6-54.4L219 345v-38z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M255 361.8l-19 19.6s-20.5 18.1-47 18.1-47-18.1-47-18.1l-19-19.6 36-16.8v-38h60v38l36 16.8z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M219 339.2V307h-60v32.6c8.1 5.1 14 8.4 14 8.4h32s5.9-3.5 14-8.8z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M284 151v39s-3.9 67.4-24 95.7c-12 16.9-55 42.3-55 42.3h-32s-41.8-23.2-55-42.3C98.3 257.2 94 190 94 190v-39c22.9-4.3 57-7 95-7s72 2.7 95 7z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M250.8 207c-2.7-1.9-9.1-5.9-17.9-6-9-.1-15.2 4.8-17.9 5.8l-4 12.2h37.9l1.9-12zM127.3 207c2.7-1.9 9.1-5.9 17.9-6 9-.1 15.2 4.8 17.9 5.8L167 219h-37.9l-1.8-12z" }),
        React__default['default'].createElement("path", { fill: "#89610A", d: "M189 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M125.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM137 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M143 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M161.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM252.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM231 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M225 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M216.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4z" }),
        React__default['default'].createElement("path", { fill: "#391910", d: "M118 147.5S111.9 190 94 190c0 0-18-11.9-18-34.6 9.5-3.1 24-5.9 42-7.9zM260 147.5s6.1 42.5 24 42.5c0 0 18-11.9 18-34.6-9.5-3.1-24-5.9-42-7.9z" }),
        React__default['default'].createElement("path", { fill: "#3279AC", d: "M295 503v4H83v-4c0-20.5 3.1-41 9.2-60.6 3.8-12.3 6.5-24.8 7.9-37.6l5-44.2c1-8.9 8.6-15.6 17.5-15.6 9.2 0 16.8 7 17.6 16.2L147 442h84l6.7-80.8c.8-9.2 8.4-16.2 17.6-16.2 9 0 16.5 6.7 17.5 15.6l5 44.2c1.5 12.8 4.1 25.3 7.9 37.6 6.2 19.6 9.3 40.1 9.3 60.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M102 251c-27.7 0-43-15.6-43-44 0-22 25.4-22 35-22v10c-23.1 0-25 6.2-25 12 0 22.6 11.1 34 33 34v10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M80.005 203.493l22.12 22.563-7.14 7-22.12-22.563 7.14-7zM276 251v-10c21.9 0 33-11.4 33-34 0-5.8-1.9-12-25-12v-10c9.6 0 35 0 35 22 0 28.4-15.3 44-43 44z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M298.027 203.412l7.14 7-22.12 22.562-7.14-7 22.12-22.562zM189 282.1c-18.6 0-29.7-11.4-31.7-13.7l7.5-6.7c1 1.1 9.8 10.4 24.6 10.3 14.1-.1 22.4-8.6 23.9-10.3l7.5 6.7c-2 2.3-13 13.5-31.3 13.7h-.5zM125.5 181.3l-5.1-8.6c5.2-3.1 13.6-6.7 24.5-6.7h.3c10.8.1 19.1 3.7 24.3 6.7l-5.1 8.6c-4.1-2.4-10.7-5.3-19.2-5.3h-.2c-8.6 0-15.3 2.9-19.5 5.3zM137 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M143 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M161.3 211.5c-1-.4-2-.9-3.2-1.5-3.1-1.7-7.5-4-13.1-4-5.2 0-10.5 1.8-15.2 5.1l-5.8-8.2c6.4-4.5 13.6-6.9 20.8-6.9h.2c8.1 0 14.1 3.2 17.7 5.1.7.4 1.6.8 1.9.9l-3.3 9.5zM252.5 181.3c-4.2-2.4-10.9-5.4-19.7-5.3-8.5 0-15.2 2.9-19.2 5.3l-5.1-8.6c5.1-3 13.5-6.6 24.3-6.7 11.1 0 19.6 3.6 24.8 6.7l-5.1 8.6zM231 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M225 201h10v18h-10v-18z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M216.7 211.5l-3.4-9.4c.3-.1 1.2-.6 1.9-.9 3.6-1.9 9.7-5.2 17.9-5.1 7.3 0 14.5 2.4 20.8 6.9l-5.8 8.2c-4.7-3.3-9.9-5.1-15.2-5.1h-.1c-5.6 0-9.8 2.3-12.9 4-1.2.5-2.2 1-3.2 1.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M205 333h-32c-.8 0-1.7-.2-2.4-.6-1.7-1-42.9-24-56.7-43.9-20.3-29.3-24.7-95.4-24.9-98.2l10-.6c0 .7 4.4 66.1 23.1 93.1 11.3 16.3 45.6 36.4 52.2 40.2h29.3c6.9-4.1 42.1-25.9 52.3-40.2 19-26.8 23-92.4 23.1-93.1l10 .6c-.2 2.8-4.3 69.2-24.9 98.3-12.5 17.6-54.7 42.7-56.5 43.7-.8.5-1.7.7-2.6.7zM283.1 155.9c-23.5-4.4-57.8-6.9-94.1-6.9s-70.6 2.5-94.1 6.9l-1.8-9.8c24.1-4.5 59-7.1 95.9-7.1 36.9 0 71.8 2.6 95.9 7.1l-1.8 9.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M295.6 195.4l-2.2-9.7C333 176.6 347 164.5 347 157c0-7-11.6-17.5-44-26.3-30.4-8.2-70.8-12.7-114-12.7s-83.6 4.5-114 12.7C42.5 139.5 31 150 31 157c0 7.5 14 19.6 53.6 28.7l-2.2 9.7C54.4 189 21 177.1 21 157c0-31.8 86.6-49 168-49s168 17.2 168 49c0 20.1-33.4 32-61.4 38.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M94 195c-1 0-1.9-.3-2.8-.8-.8-.5-20.2-13.7-20.2-38.7 0-2.1 1.4-4.1 3.4-4.7 9.8-3.3 24.6-6.1 43.1-8.1 1.5-.2 3.1.4 4.1 1.5 1.1 1.1 1.6 2.7 1.4 4.2-.7 4.6-7.4 46.6-29 46.6zm-12.8-35.9c1.4 14.2 10.7 22.9 14.3 25.8 8-1.9 13.8-19.1 16.4-31.5-12.6 1.5-23 3.5-30.7 5.7zM284 195c-21.6 0-28.3-42-28.9-46.8-.2-1.5.3-3.1 1.4-4.2 1.1-1.1 2.6-1.7 4.1-1.5 18.4 2 33.3 4.8 43.1 8.1 2 .7 3.4 2.6 3.4 4.7 0 25-19.4 38.2-20.2 38.7-1 .7-1.9 1-2.9 1zm-17.9-41.7c2.7 12.5 8.5 29.7 16.4 31.5 3.5-2.8 12.9-11.6 14.3-25.8-7.7-2.1-18.1-4.1-30.7-5.7zM296.5 124.7c-1.7-18.6-6.4-36.7-13.8-53.7-6.7-15.4-15.6-29.7-26.4-42.6C249.7 21.9 227.4 10 189 10c-36 0-58.4 9.5-67.4 18.5-12.9 13.5-23 29.1-29.9 46.4-6.4 15.9-10 32.6-10.6 49.8l-10-.3c.6-18.3 4.4-36.2 11.3-53.2 7.5-18.5 18.2-35.2 32-49.6l.1-.1c5-5 25.3-21.5 74.5-21.5 41.9 0 66.6 13.5 74.5 21.5l.3.3c11.5 13.7 21 28.9 28.1 45.2 7.8 18 12.7 37.1 14.6 56.8l-10 .9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M294.9 98.7C265.6 91.8 228 88 189 88c-31.4 0-61.8 2.4-87.9 7l-1.7-9.8C126 80.5 157 78 189 78c39.8 0 78.2 3.9 108.2 11l-2.3 9.7zM295 512H83c-2.8 0-5-2.2-5-5v-4c0-21.1 3.2-42 9.5-62.1 3.7-11.9 6.3-24.3 7.7-36.7l5-44.2c1.3-11.4 11-20.1 22.5-20.1 11.7 0 21.6 9.1 22.6 20.8l6.3 76.2h74.8l6.3-76.2c1-11.7 10.9-20.8 22.6-20.8 11.5 0 21.2 8.6 22.5 20.1l5 44.2c1.4 12.4 4 24.7 7.7 36.7 6.3 20.1 9.5 41 9.5 62.1v4c0 2.8-2.2 5-5 5zM88 502h202c-.1-19.7-3.1-39.3-9-58.1-3.9-12.5-6.7-25.5-8.1-38.5l-5-44.2c-.7-6.4-6.1-11.2-12.6-11.2s-12.1 5.1-12.6 11.6l-6.7 80.8c-.2 2.6-2.4 4.6-5 4.6h-84c-2.6 0-4.8-2-5-4.6l-6.7-80.8c-.5-6.5-6.1-11.6-12.6-11.6-6.4 0-11.8 4.8-12.6 11.2l-5 44.2c-1.5 13-4.2 26-8.1 38.5-5.9 18.8-8.9 38.4-9 58.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M189 404.5c-28.1 0-49.4-18.6-50.3-19.4l6.6-7.5c.2.2 19.5 16.9 43.7 16.9 24.2 0 43.5-16.7 43.7-16.9l6.6 7.5c-.9.8-22.2 19.4-50.3 19.4zM140.6 359.1l-4.2-9.1 17.7-8.2v-22.2h10V345c0 1.9-1.1 3.7-2.9 4.5l-20.6 9.6zM237.4 359.1l-20.6-9.6c-1.8-.8-2.9-2.6-2.9-4.5v-25.8h10v22.6l17.7 8.2-4.2 9.1zM352 512h-37v-10h32v-56.8c0-21.3-12.5-40.9-31.8-49.8l-43.4-20.2 4.2-9.1 43.4 20.2c22.8 10.6 37.5 33.8 37.5 58.9V507c.1 2.8-2.1 5-4.9 5zM295 512H26c-2.8 0-5-2.2-5-5v-61.8c0-25.2 14.7-48.3 37.5-58.9l43.4-20.2 4.2 9.1-43.4 20.2c-19.3 9-31.8 28.6-31.8 49.8V502h264v10h.1z" })));
};

var Icon$1q = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M46.5 320s63-51.3 85.5-3.6c0 0-34 61.1-85.5 3.6z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M46.5 320c51.5 57.5 85.5-3.6 85.5-3.6L46.5 320z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M175.3 387.4l-10-.7c8.1-112.2-32.3-185.1-32.7-185.8l8.7-4.9c.4.8 10.8 19.3 20.2 52.3 8.8 30.2 18.2 78.9 13.8 139.1z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M91.4 56c30.4 0 32 43.2 32 43.2s15.2-31.2 42.4-21.6c27.2 9.6-13.6 50.4-13.6 50.4s52.8-24 52.8 11.2-52 33.6-52 33.6 55.6 14 28.8 40.8C155 240.4 137 198.4 137 198.4s19.2 57.6-18.4 57.6c-37.6 0-20.8-47.1-20.8-47.1s-36 50.3-59.2 27.1c-23.2-23.2 20-48.8 20-48.8S5 200 5 164s51.2-28 51.2-28-34.1-16-26.1-39.2c8-23.2 46.9 1.6 46.9 1.6S61 56 91.4 56z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M205 139.2c0-35.2-52.8-11.2-52.8-11.2s40.8-40.8 13.6-50.4c-4.3-1.5-8.4-2-12.1-1.8C145.6 137.3 100.2 187 41 201.6c-8.5 9.4-14.5 22.2-2.4 34.4 23.2 23.2 59.2-27.1 59.2-27.1S81 256 118.6 256s18.4-57.6 18.4-57.6 18 42 44.8 15.2c26.8-26.8-28.8-40.8-28.8-40.8s52 1.6 52-33.6z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M507 507s-24-84-106.7-55.3c0 0-37.3-36.7-71.3-36.7s-76.7 18-76.7 18-52-46-82-46-46 40.7-94 60C28.3 466.3 5 507 5 507h502zM105 191c19.33 0 35-15.67 35-35s-15.67-35-35-35-35 15.67-35 35 15.67 35 35 35z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M121.1 124.9c2.5 4.8 3.9 10.3 3.9 16.1 0 19.3-15.7 35-35 35-5.8 0-11.3-1.4-16.1-3.9C79.7 183.3 91.5 191 105 191c19.3 0 35-15.7 35-35 0-13.5-7.7-25.3-18.9-31.1z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M254.9 223.7s-68.1-18.6-63.7 47c.1 0 55.6 25 63.7-47z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M254.9 223.7l-63.7 47c.1 0 55.6 25 63.7-47z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M219.904 243.311l5.94 8.05-57.236 42.234-5.94-8.05 57.236-42.234zM168.986 309.905l.43 9.99-79.82 3.436-.43-9.99 79.82-3.436z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M205.7 468.3s24-24.3 46.7-35.3c0 0-18.5-16.3-39.8-29.5-20.8 37.2-6.9 64.8-6.9 64.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M507 512H5c-1.8 0-3.4-1-4.3-2.5-.9-1.5-.9-3.4 0-5 1-1.7 24.8-42.4 73.8-62.1 22.5-9.1 37.7-23 51.1-35.3 14.7-13.5 27.4-25.1 44.8-25.1 28.1 0 72.2 36 83 45.2 10.3-4.1 45.9-17.2 75.7-17.2 31.1 0 63.8 27.9 72.6 36 24.6-7.9 46.6-6.9 65.5 2.9 33.1 17.2 44.3 55.2 44.7 56.8.4 1.5.1 3.1-.8 4.4-1.1 1.2-2.5 1.9-4.1 1.9zM14.4 502h485.5c-4.5-10.9-15.8-33.1-37.5-44.3-17.1-8.8-37.4-9.3-60.4-1.3-1.8.6-3.8.2-5.1-1.2-.4-.4-36.3-35.2-67.8-35.2-32.6 0-74.3 17.4-74.7 17.6-1.8.7-3.8.4-5.3-.9-.5-.4-50.9-44.7-78.7-44.7-13.5 0-24.3 9.9-38 22.5-13.3 12.2-29.9 27.4-54.1 37.2-33.7 13.5-54.9 38-63.9 50.3zM105 196c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M118.6 261c-11 0-19.1-3.6-24.2-10.7-4.8-6.8-5.7-15.7-5.2-23.7-9 9.2-21.7 19.4-34.4 20.4-7.5.6-14.2-1.9-19.8-7.5-6.4-6.4-9.1-13.5-8.1-21.3 1.2-9.3 7.6-17.6 14.2-23.9-10.3.3-22.6-1.1-31.1-7.8-6.6-5.2-10-12.8-10-22.5 0-10 3.4-18 10.2-23.8 7.9-6.8 19-9.1 28.4-9.8-9.3-7.9-18.5-20.1-13.3-35.3 2.1-5.9 6-10.1 11.6-12 9.9-3.5 23 1 32.1 5.3-1.7-8.8-2.5-20.4 3.1-28.6 2.8-4 8.4-8.8 19.2-8.8 21.4 0 31.4 18.5 35.1 34.6 8.8-10.1 23-19.1 40.9-12.8 8.4 3 11.3 8.5 12.2 12.5 2.2 9.9-4.7 22.4-11.8 31.9 10.6-2.7 23.7-4 32.5 1.7 4.4 2.8 9.5 8.6 9.5 20.2 0 9.5-3.3 17.5-9.8 23.8-7.1 6.9-16.9 10.6-25.8 12.5 8.4 4.4 16.7 10.7 19.1 19.1 2.1 7.5-.7 15-8.1 22.5-8.3 8.3-16.9 11.7-25.5 10-5.1-1-9.5-3.6-13.3-6.9 1 10.5.2 22.4-5.7 30.6-4.7 6.9-12.2 10.3-22 10.3zm-20.8-57.1c.8 0 1.6.2 2.3.6 2.2 1.2 3.2 3.8 2.4 6.1-2.2 6.3-6.5 24.6.1 34 3.1 4.4 8.3 6.5 16 6.5 6.5 0 11.1-2 14.1-6.1 8.1-11.3 2.5-36.3-.4-45-.8-2.5.5-5.3 3-6.3s5.3.2 6.4 2.7c2.2 5.2 10.2 19 20.1 20.9 5.2 1 10.8-1.4 16.6-7.3 4.7-4.7 6.6-9 5.6-12.7-2.5-9.1-21-16.9-32-19.7-2.5-.6-4.1-3-3.7-5.5.4-2.5 2.5-4.3 5.1-4.3.3 0 27.1.6 40.1-11.9 4.5-4.4 6.8-9.9 6.8-16.7 0-5.8-1.6-9.7-5-11.8-9.9-6.4-33.4 1.8-40.8 5.2-2.2 1-4.8.3-6.2-1.7-1.4-2-1.1-4.7.6-6.4 9.3-9.4 23.4-27.6 21.3-36.8-.3-1.5-1.3-3.7-5.8-5.3-22.6-8-35.7 18-36.2 19.1-1 2.1-3.3 3.2-5.5 2.7s-3.9-2.4-4-4.7c0-.1-.4-10.3-4.3-20.2-5.1-12.2-12.7-18.3-23-18.3-5.3 0-8.9 1.5-11 4.5-5.5 8-.8 25.6 1.3 31.1.8 2 .1 4.3-1.5 5.6-1.6 1.3-4 1.5-5.8.3-6.2-3.9-24.4-13.4-34.1-10-2.6.9-4.3 2.8-5.4 5.8-6.5 18.7 23.2 32.9 23.5 33 2.3 1.1 3.4 3.6 2.7 6-.7 2.4-3.1 3.9-5.6 3.5-.3 0-26.1-3.9-38.7 6.9-4.6 4-6.8 9.3-6.8 16.3 0 6.6 2 11.4 6.2 14.7 10.7 8.5 33.4 5.5 41.2 3.6 2.4-.6 4.9.7 5.8 3 .9 2.3 0 4.9-2.1 6.2-6.2 3.7-22.8 16-24.3 28-.6 4.6 1.1 8.9 5.3 13 3.5 3.5 7.3 5 11.9 4.6 15.2-1.2 33.8-22.9 39.7-31.1 1-1.4 2.5-2.1 4.1-2.1zM212.1 279.9c-12.4 0-22.3-4.4-22.9-4.6-1.7-.8-2.8-2.4-2.9-4.2-1.4-20.3 3.7-35.3 15.1-44.6 20.5-16.8 53.5-8 54.9-7.6 2.4.7 3.9 2.9 3.6 5.4-2.8 25.1-11.6 42-26 50.2-7.2 4-14.9 5.4-21.8 5.4zm-16-12.7c6 2 20.6 5.6 32.9-1.5 10.7-6.1 17.5-18.9 20.4-38.1-8.7-1.6-29-3.8-41.7 6.6-8.2 6.7-12.1 17.7-11.6 33zM100.5 348.3l-2.5-9.7c14.7-3.8 24.8-17.2 28.3-22.5-4.3-7.9-10.1-12.6-17.7-14.3-19.4-4.4-44.7 11.7-54.6 18.8 9 9.2 17.9 15.1 26.5 17.6l-2.8 9.6c-11.6-3.4-23.4-11.6-34.9-24.5-.9-1-1.4-2.4-1.3-3.7.1-1.4.8-2.6 1.8-3.5 1.5-1.3 38.1-30.7 67.5-24.1 11.3 2.6 20 10 25.7 22.2.7 1.5.6 3.2-.2 4.6-.4 1-13.3 23.6-35.8 29.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M219.904 243.311l5.94 8.05-57.236 42.234-5.94-8.05 57.236-42.234z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M175.3 387.4l-10-.7c8.1-112.2-32.3-185.1-32.7-185.8l8.7-4.9c.4.8 10.8 19.3 20.2 52.3 8.8 30.2 18.2 78.9 13.8 139.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M168.986 309.905l.43 9.99-79.82 3.436-.43-9.99 79.82-3.436zM209.2 471.8l-7.1-7c1-1 24.9-25.1 48-36.3l4.4 9c-21.6 10.5-45 34.1-45.3 34.3z" })));
};

var Icon$1p = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M46.5 320s63-51.3 85.5-3.6c0 0-34 61.1-85.5 3.6z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M46.5 320c51.5 57.5 85.5-3.6 85.5-3.6L46.5 320z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M175.3 387.4l-10-.7c8.1-112.2-32.3-185.1-32.7-185.8l8.7-4.9c.4.8 10.8 19.3 20.2 52.3 8.8 30.2 18.2 78.9 13.8 139.1z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M91.4 56c30.4 0 32 43.2 32 43.2s15.2-31.2 42.4-21.6c27.2 9.6-13.6 50.4-13.6 50.4s52.8-24 52.8 11.2-52 33.6-52 33.6 55.6 14 28.8 40.8C155 240.4 137 198.4 137 198.4s19.2 57.6-18.4 57.6c-37.6 0-20.8-47.1-20.8-47.1s-36 50.3-59.2 27.1c-23.2-23.2 20-48.8 20-48.8S5 200 5 164s51.2-28 51.2-28-34.1-16-26.1-39.2c8-23.2 46.9 1.6 46.9 1.6S61 56 91.4 56z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M205 139.2c0-35.2-52.8-11.2-52.8-11.2s40.8-40.8 13.6-50.4c-4.3-1.5-8.4-2-12.1-1.8C145.6 137.3 100.2 187 41 201.6c-8.5 9.4-14.5 22.2-2.4 34.4 23.2 23.2 59.2-27.1 59.2-27.1S81 256 118.6 256s18.4-57.6 18.4-57.6 18 42 44.8 15.2c26.8-26.8-28.8-40.8-28.8-40.8s52 1.6 52-33.6z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M268.7 457l13.6-198.4 183.3 38.3L392 457H268.7z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M344 271.5L331.8 328c-3.5 16.2 6.8 32.2 23 35.6 2.1.5 4.2.7 6.3.7 13.8 0 26.3-9.6 29.3-23.7l12.3-56.9-58.7-12.2z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M358 349c-8.1-1.7-13.2-9.7-11.5-17.8l35.2-163.3 29.3 6.3-35.2 163.3c-1.7 8.1-9.7 13.2-17.8 11.5z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M507 507s-24-84-106.7-55.3c0 0-37.3-36.7-71.3-36.7s-76.7 18-76.7 18-52-46-82-46-46 40.7-94 60C28.3 466.3 5 507 5 507h502zM105 191c19.33 0 35-15.67 35-35s-15.67-35-35-35-35 15.67-35 35 15.67 35 35 35z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M121.1 124.9c2.5 4.8 3.9 10.3 3.9 16.1 0 19.3-15.7 35-35 35-5.8 0-11.3-1.4-16.1-3.9C79.7 183.3 91.5 191 105 191c19.3 0 35-15.7 35-35 0-13.5-7.7-25.3-18.9-31.1z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M254.9 223.7s-68.1-18.6-63.7 47c.1 0 55.6 25 63.7-47z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M254.9 223.7l-63.7 47c.1 0 55.6 25 63.7-47z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M219.904 243.311l5.94 8.05-57.236 42.234-5.94-8.05 57.236-42.234zM168.986 309.905l.43 9.99-79.82 3.436-.43-9.99 79.82-3.436z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M372.7 209.5l29.3 6.6 9-41.9-29.3-6.4-9 41.7z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M388.5 33.4l-27.5 153 60.6 13.6 34.5-152.9C461 25.5 444.6 5 422.5 5c-16.7 0-31 12-34 28.4z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M432.5 151.8l-62.9-13.3-3.1 17.4 62.4 11.9 3.6-16zM441.1 113.6l-64.4-14.4-3.4 18.8 63.8 13.3 4-17.7z" }),
        React__default['default'].createElement("path", { fill: "#FAAE52", d: "M402.142 85.724c7.639 1.19 15.99-11.69 18.652-28.769 2.662-17.079-1.373-31.89-9.012-33.08-7.639-1.19-15.99 11.69-18.652 28.768-2.662 17.08 1.372 31.89 9.012 33.08z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M205.7 468.3s24-24.3 46.7-35.3c0 0-18.5-16.3-39.8-29.5-20.8 37.2-6.9 64.8-6.9 64.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M507 512H5c-1.8 0-3.4-1-4.3-2.5-.9-1.5-.9-3.4 0-5 1-1.7 24.8-42.4 73.8-62.1 22.5-9.1 37.7-23 51.1-35.3 14.7-13.5 27.4-25.1 44.8-25.1 28.1 0 72.2 36 83 45.2 10.3-4.1 45.9-17.2 75.7-17.2 31.1 0 63.8 27.9 72.6 36 24.6-7.9 46.6-6.9 65.5 2.9 33.1 17.2 44.3 55.2 44.7 56.8.4 1.5.1 3.1-.8 4.4-1.1 1.2-2.5 1.9-4.1 1.9zM14.4 502h485.5c-4.5-10.9-15.8-33.1-37.5-44.3-17.1-8.8-37.4-9.3-60.4-1.3-1.8.6-3.8.2-5.1-1.2-.4-.4-36.3-35.2-67.8-35.2-32.6 0-74.3 17.4-74.7 17.6-1.8.7-3.8.4-5.3-.9-.5-.4-50.9-44.7-78.7-44.7-13.5 0-24.3 9.9-38 22.5-13.3 12.2-29.9 27.4-54.1 37.2-33.7 13.5-54.9 38-63.9 50.3zM105 196c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M118.6 261c-11 0-19.1-3.6-24.2-10.7-4.8-6.8-5.7-15.7-5.2-23.7-9 9.2-21.7 19.4-34.4 20.4-7.5.6-14.2-1.9-19.8-7.5-6.4-6.4-9.1-13.5-8.1-21.3 1.2-9.3 7.6-17.6 14.2-23.9-10.3.3-22.6-1.1-31.1-7.8-6.6-5.2-10-12.8-10-22.5 0-10 3.4-18 10.2-23.8 7.9-6.8 19-9.1 28.4-9.8-9.3-7.9-18.5-20.1-13.3-35.3 2.1-5.9 6-10.1 11.6-12 9.9-3.5 23 1 32.1 5.3-1.7-8.8-2.5-20.4 3.1-28.6 2.8-4 8.4-8.8 19.2-8.8 21.4 0 31.4 18.5 35.1 34.6 8.8-10.1 23-19.1 40.9-12.8 8.4 3 11.3 8.5 12.2 12.5 2.2 9.9-4.7 22.4-11.8 31.9 10.6-2.7 23.7-4 32.5 1.7 4.4 2.8 9.5 8.6 9.5 20.2 0 9.5-3.3 17.5-9.8 23.8-7.1 6.9-16.9 10.6-25.8 12.5 8.4 4.4 16.7 10.7 19.1 19.1 2.1 7.5-.7 15-8.1 22.5-8.3 8.3-16.9 11.7-25.5 10-5.1-1-9.5-3.6-13.3-6.9 1 10.5.2 22.4-5.7 30.6-4.7 6.9-12.2 10.3-22 10.3zm-20.8-57.1c.8 0 1.6.2 2.3.6 2.2 1.2 3.2 3.8 2.4 6.1-2.2 6.3-6.5 24.6.1 34 3.1 4.4 8.3 6.5 16 6.5 6.5 0 11.1-2 14.1-6.1 8.1-11.3 2.5-36.3-.4-45-.8-2.5.5-5.3 3-6.3s5.3.2 6.4 2.7c2.2 5.2 10.2 19 20.1 20.9 5.2 1 10.8-1.4 16.6-7.3 4.7-4.7 6.6-9 5.6-12.7-2.5-9.1-21-16.9-32-19.7-2.5-.6-4.1-3-3.7-5.5.4-2.5 2.5-4.3 5.1-4.3.3 0 27.1.6 40.1-11.9 4.5-4.4 6.8-9.9 6.8-16.7 0-5.8-1.6-9.7-5-11.8-9.9-6.4-33.4 1.8-40.8 5.2-2.2 1-4.8.3-6.2-1.7-1.4-2-1.1-4.7.6-6.4 9.3-9.4 23.4-27.6 21.3-36.8-.3-1.5-1.3-3.7-5.8-5.3-22.6-8-35.7 18-36.2 19.1-1 2.1-3.3 3.2-5.5 2.7s-3.9-2.4-4-4.7c0-.1-.4-10.3-4.3-20.2-5.1-12.2-12.7-18.3-23-18.3-5.3 0-8.9 1.5-11 4.5-5.5 8-.8 25.6 1.3 31.1.8 2 .1 4.3-1.5 5.6-1.6 1.3-4 1.5-5.8.3-6.2-3.9-24.4-13.4-34.1-10-2.6.9-4.3 2.8-5.4 5.8-6.5 18.7 23.2 32.9 23.5 33 2.3 1.1 3.4 3.6 2.7 6-.7 2.4-3.1 3.9-5.6 3.5-.3 0-26.1-3.9-38.7 6.9-4.6 4-6.8 9.3-6.8 16.3 0 6.6 2 11.4 6.2 14.7 10.7 8.5 33.4 5.5 41.2 3.6 2.4-.6 4.9.7 5.8 3 .9 2.3 0 4.9-2.1 6.2-6.2 3.7-22.8 16-24.3 28-.6 4.6 1.1 8.9 5.3 13 3.5 3.5 7.3 5 11.9 4.6 15.2-1.2 33.8-22.9 39.7-31.1 1-1.4 2.5-2.1 4.1-2.1zM212.1 279.9c-12.4 0-22.3-4.4-22.9-4.6-1.7-.8-2.8-2.4-2.9-4.2-1.4-20.3 3.7-35.3 15.1-44.6 20.5-16.8 53.5-8 54.9-7.6 2.4.7 3.9 2.9 3.6 5.4-2.8 25.1-11.6 42-26 50.2-7.2 4-14.9 5.4-21.8 5.4zm-16-12.7c6 2 20.6 5.6 32.9-1.5 10.7-6.1 17.5-18.9 20.4-38.1-8.7-1.6-29-3.8-41.7 6.6-8.2 6.7-12.1 17.7-11.6 33zM100.5 348.3l-2.5-9.7c14.7-3.8 24.8-17.2 28.3-22.5-4.3-7.9-10.1-12.6-17.7-14.3-19.4-4.4-44.7 11.7-54.6 18.8 9 9.2 17.9 15.1 26.5 17.6l-2.8 9.6c-11.6-3.4-23.4-11.6-34.9-24.5-.9-1-1.4-2.4-1.3-3.7.1-1.4.8-2.6 1.8-3.5 1.5-1.3 38.1-30.7 67.5-24.1 11.3 2.6 20 10 25.7 22.2.7 1.5.6 3.2-.2 4.6-.4 1-13.3 23.6-35.8 29.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M219.904 243.311l5.94 8.05-57.236 42.234-5.94-8.05 57.236-42.234z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M175.3 387.4l-10-.7c8.1-112.2-32.3-185.1-32.7-185.8l8.7-4.9c.4.8 10.8 19.3 20.2 52.3 8.8 30.2 18.2 78.9 13.8 139.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M168.986 309.905l.43 9.99-79.82 3.436-.43-9.99 79.82-3.436zM421.7 205c-.4 0-.7 0-1.1-.1L360 191.3c-2.6-.6-4.3-3.1-3.8-5.8l27.5-153C387 13.7 403.4 0 422.5 0c12.1 0 23.3 5.4 30.9 14.8 7.6 9.4 10.3 21.6 7.7 33.4l-34.5 152.9c-.6 2.3-2.7 3.9-4.9 3.9zm-54.9-22.4l51.1 11.5 33.4-148c2-8.8-.1-17.9-5.7-24.9-5.6-7-14-11.1-23-11.1a29.4 29.4 0 00-29 24.3l-26.8 148.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M361.1 354.3c-1.4 0-2.8-.1-4.2-.5-10.8-2.3-17.7-13-15.3-23.8l26.1-121.2 9.8 2.1-26.1 121.2c-1.2 5.4 2.3 10.7 7.7 11.9 5.4 1.2 10.7-2.3 11.9-7.7l30.4-141 9.8 2.1-30.4 141c-2.1 9.5-10.4 15.9-19.7 15.9zM369.975 133.406l63.831 13.431-2.06 9.79-63.831-13.431 2.06-9.79zM376.93 94.28l65.295 14.651-2.19 9.76-65.295-14.651 2.19-9.76zM209.2 471.8l-7.1-7c1-1 24.9-25.1 48-36.3l4.4 9c-21.6 10.5-45 34.1-45.3 34.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M275.8 426.6l-10-.7 11.6-167.7c.1-1.4.8-2.8 2-3.6 1.2-.9 2.6-1.2 4-.9l76.4 15.9-2 9.8-70.7-14.8-11.3 162zM400.7 450l-9.1-4.2 66.8-145.3-71.4-14.9 2-9.8 77.6 16.2c1.5.3 2.8 1.3 3.4 2.6.7 1.4.7 3 .1 4.3L400.7 450z" })));
};

var Icon$1o = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M184.9 320.4s15.3 6.6 88 6.6 188.8-7 234.2-47c-3.3-2.7-48.9-56-172.1-56H185l-.1 96.4z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M362.2 323.1c5.1-11.9 5.8-25.7 5.8-34.1v-63.6c-7-.6-14.3-1-22-1.2v69.9c0 21.5-9.6 29.9-11.2 31.2 9-.6 18.2-1.3 27.4-2.2zM429 275.9c0 22.1-6.3 36.7-7.3 38.8 9.4-1.9 18.5-4.1 27.2-6.5 2.5-9.8 5.1-22.4 5.1-32.7 0-8.1-1.6-20.1-3.4-31.4-8.1-3.3-17.2-6.4-27.3-9.2 2.7 14 5.7 31.5 5.7 41z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M218 274h142l91-50H218v50z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M100 224h134l-23 71.3s-8.8 28.2-45.1 28.2-44.9-31.7-44.9-31.7L100 224z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M228.1 308l27.9 71v42l9 16h-19l-8.3-13 1.3-43.5-24.7-72.5h13.8zM351.1 109.7l63.8 327.4 48.6-19.1 23.5 19v-20l-21-15-40 14.1L362.8 94H351l.1 15.7z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M352.3 75c-15.1 0-32.2 13.9-25.1 33.4 7 19.5-55.3 88.4-71.4 122.5-16.1 34.1-24.2 96.1 17 96.1s50.3-51.5 56.3-81.4c6-29.9 14.1-121.1 17.1-128.8 3-7.7 40.3-41.8 6.1-41.8z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M246.5 309.6c4.3 10.5 12.6 17.4 26.4 17.4 41.2 0 50.3-51.5 56.3-81.4 5.2-26 12-98.3 15.7-121.8-7.4 34.6-42.7 185.8-98.4 185.8z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M100 224l21 67.8s8.5 31.6 44.9 31.6C137 265.5 141.7 224 141.7 224H100z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M138.5 283l-14.7 48.1L35.7 383 5 437h21l24.3-44 85.4-52.7L157 283h-18.5z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M91.2 234.5c-.5 0-1-.1-1.5-.2l-45-13.7c-.6-.2-1.2-.5-1.7-.9C41.3 218.3 0 184.2 0 75h10c0 97 33.6 131.6 38.6 136.3l7.6 2.3c-4.7-7.2-15.1-34.8-15.1-138.6h10c0 64 4 97.4 7.4 114.2 2.6 13.1 5.2 17.9 5.7 18.7l29.4 17.3c2.2 1.3 3.1 4 2 6.3-.7 1.9-2.5 3-4.4 3z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M75.9 211.1C52.2 211.1 31 215 31 243s26.5 88.1 44.8 88.1c39.8 0 45.2-39.3 45.2-39.3V224s-15.5-12.9-45.1-12.9z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M76.2 273.2c8.284 0 15-10.297 15-23s-6.716-23-15-23c-8.284 0-15 10.297-15 23s6.716 23 15 23z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M76.2 238.2c0-3.9-.6-7.6-1.8-10.8-7.5 1.3-13.2 11.1-13.2 22.8 0 3.9.6 7.6 1.8 10.8 7.4-1.3 13.2-11 13.2-22.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M487 442c-1.1 0-2.2-.4-3.1-1.1l-21.2-17.2-45.8 17.9c-1.4.5-2.9.4-4.2-.3-1.3-.7-2.2-2-2.5-3.4l-63.9-327.3 9.8-1.9 62.7 321.4 42.9-16.8c1.7-.7 3.6-.4 5 .8l15.4 12.4v-7l-16.8-12-37.6 13.1c-1.4.5-2.9.3-4.1-.4-1.3-.7-2.1-2-2.4-3.4L357.9 95l9.8-1.9 62.1 316.3 34.6-12.1c1.5-.5 3.2-.3 4.6.7l21 15c1.3.9 2.1 2.5 2.1 4.1v20c0 1.9-1.1 3.7-2.8 4.5-.8.2-1.6.4-2.3.4zM75.8 336.1c-14.2 0-27.3-22.8-33.8-36.3-9.7-20.2-16-42.5-16-56.7 0-14.7 5.4-25.1 16.2-30.9 9.9-5.3 22.6-6.1 33.7-6.1 31 0 47.6 13.5 48.3 14 1.1 1 1.8 2.4 1.8 3.8v68.5c-.1.5-6.5 43.7-50.2 43.7zm.1-120c-24.6 0-39.9 4.5-39.9 26.9 0 12.6 6 33.7 15 52.4 10.2 21.1 20 30.7 24.8 30.7 33.5 0 39.6-31 40.2-34.7v-64.8c-4.7-3.1-18.4-10.5-40.1-10.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M76.2 278.2c-11.2 0-20-12.3-20-28s8.8-28 20-28 20 12.3 20 28-8.8 28-20 28zm0-46c-4.7 0-10 7.4-10 18s5.3 18 10 18 10-7.4 10-18-5.3-18-10-18zM165.9 328.4c-9 0-17.1-1.8-24.3-5.3l4.4-9c5.8 2.9 12.5 4.3 19.9 4.3 32.3 0 40.3-24.4 40.3-24.7l20.9-64.8H126v62c.6 1.9 3 8.2 8.4 14.2l-7.5 6.7c-8.1-9-10.7-18.5-10.8-18.9-.1-.4-.2-.9-.2-1.3V224c0-2.8 2.2-5 5-5h113c1.6 0 3.1.8 4 2.1.9 1.3 1.2 3 .7 4.5l-23 71.3c-.1.3-2.6 8.2-10.1 16-6.6 7-19.1 15.5-39.6 15.5zM43.1 219.7C41.3 218.3 0 184.2 0 75h10c0 54.3 10.7 88.7 19.7 107.9 9.7 20.8 19.5 28.9 19.6 28.9l-6.2 7.9zM58 215.7c-2.8-2.3-16.8-19.8-16.8-140.7h10c0 64 4 97.4 7.4 114.2 2.9 14.3 5.7 18.8 5.8 18.8l-6.4 7.7zM333 219h41v10h-41v-10zM398.5 270.9l-3.9-9.2c20.9-8.8 36.9-23.6 45.5-32.7H388v-10h63c1.9 0 3.6 1.1 4.5 2.8.8 1.7.7 3.7-.5 5.2-.9 1.2-22.3 29.5-56.5 43.9zM360 279h-37v-10h37c7.1 0 14.3-.9 21.4-2.8l2.5 9.7c-7.9 2.1-16 3.1-23.9 3.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M272.8 332c-12.2 0-21.9-5-27.9-14.5-6.2-9.7-8-23.6-7-38.5h-20c-1.6 0-3.1-.8-4-2.1-.9-1.3-1.2-3-.7-4.5l16-50c.7-2.1 2.6-3.5 4.8-3.5h25.3c1.8 0 3.4.9 4.3 2.5.9 1.6.9 3.4 0 5-1.3 2.4-2.5 4.6-3.5 6.6-12 25.3-17.8 61.9-6.9 79.1 4.2 6.6 10.6 9.8 19.5 9.8 35.9 0 44.9-45 50.9-74.7l.5-2.7c3.1-15.5 6.8-47.9 10.1-76.4 4-34.8 5.7-49.4 7.3-53.2.9-2.3 3.1-5.2 7-10 3.3-4.2 7.5-9.4 10.2-14.2 3.6-6.3 2.8-8.4 2.7-8.6-.4-.8-2.8-2.2-9.2-2.2-7.1 0-14.6 3.8-18.6 9.5-2.4 3.5-4.7 9.3-1.9 17.2 4.9 13.5-11.6 38.1-39.4 77-5.6 7.8-11.3 15.9-16.4 23.3l-8.3-5.6c5.1-7.5 10.9-15.6 16.5-23.5 10.5-14.6 21.3-29.8 28.7-42.5 10.4-17.6 10-23.5 9.4-25.3-3.4-9.3-2.3-18.7 3.1-26.3 5.9-8.4 16.4-13.8 26.8-13.8 3.6 0 14.4 0 18.2 7.8 4.7 9.6-5.7 22.8-14.1 33.3-2.2 2.8-5 6.3-5.5 7.5-1.2 3.4-4.1 28.5-6.6 50.7-3.3 28.7-7 61.3-10.2 77.3l-.5 2.7c-6.1 31-16.5 82.8-60.6 82.8zm-48-63H239c2.1-14 6.5-28.2 12-40h-13.5l-12.7 40zM26 442H5c-1.8 0-3.4-.9-4.3-2.5-.9-1.6-.9-3.4 0-5l30.7-54c.4-.8 1.1-1.4 1.8-1.8l86.4-50.9 14.2-46.3c.6-2.1 2.6-3.5 4.8-3.5H157c1.6 0 3.2.8 4.1 2.1.9 1.3 1.2 3.1.6 4.6L140.4 342c-.4 1-1.1 1.9-2.1 2.5l-15.7 9.7-5.3-8.5 14.2-8.8 18.2-49h-7.6l-13.7 44.6c-.4 1.2-1.2 2.2-2.2 2.8l-86.9 51.2L13.6 432h9.5L46 390.6c.4-.8 1-1.4 1.7-1.8l53.5-33 5.3 8.5-52.4 32.3-23.7 42.9c-.9 1.5-2.6 2.5-4.4 2.5zM265 442h-19c-1.7 0-3.3-.9-4.2-2.3l-8.3-13c-.5-.8-.8-1.8-.8-2.9l1.3-42.6-24.4-71.6c-.5-1.5-.3-3.2.7-4.5.9-1.3 2.5-2.1 4.1-2.1h13.8c2.1 0 3.9 1.3 4.7 3.2l27.9 71c.2.6.3 1.2.3 1.8v40.7l8.4 14.9c.9 1.5.9 3.4 0 5-1.1 1.5-2.7 2.4-4.5 2.4zm-16.3-10h7.7l-4.8-8.5c-.4-.7-.6-1.6-.6-2.5v-41.1L224.7 313h-3.4l22.4 65.9c.2.6.3 1.2.3 1.8l-1.3 42 6 9.3zM337.4 329.3l-5.8-8.2 2.9 4.1-3-4c.4-.3 9-7 9.4-27.3l10 .2c-.5 25.7-13 34.8-13.5 35.2zM426 317.2l-9-4.5 4.5 2.1-4.5-2c.1-.1 6.9-14.8 6.9-36.8h10c.1 24-7.5 40.5-7.9 41.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M408 322.3l-1.7-9.9c42.8-7.2 74.1-18.2 93.2-32.7-20.3-18.7-45.7-29.8-63.9-35.9l3.2-9.5c20 6.7 48.5 19.3 70.5 40.9l.9.9c1.2.9 1.8 2.3 1.8 3.8s-.6 2.9-1.7 3.8c-19.8 17.6-54.2 30.5-102.3 38.6zM272.9 332c-13.6 0-26.1-.2-37.2-.7l.4-10c11 .5 23.4.7 36.8.7 30.3 0 75.5-1.3 118.6-7.3l1.4 9.9c-43.8 6.1-89.4 7.4-120 7.4zM219.9 330.5c-28.2-1.9-36.2-5.1-37-5.5l2-4.6 1.9-4.6c.1 0 7.6 2.9 33.8 4.7l-.7 10z" })));
};

var Icon$1n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$1l = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M247 265l78-251.3L507 5l-8.7 182L247 265z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M262.1 216.5C371.4 208.8 457.8 118.3 459 7.3l-134 6.4-62.9 202.8z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M493.8 189c-.3-.6-26.7-59.2-69.2-101.6C382.2 45 323.5 18.5 323 18.2l4.1-9.1c2.5 1.1 60.9 27.5 104.6 71.2 43.7 43.7 70.1 102.2 71.2 104.6l-9.1 4.1z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M56.2 461.9l-2.3-9.7c.6-.2 15.5-4.5 17.5-32.8 1.7-24.5 8.8-42.7 21.4-55.8 16.2-16.7 40.9-24.8 75.5-24.8 27.8 0 48.6-12.3 61.8-36.4 10.1-18.5 11.9-37.5 11.9-37.6.1-1.2.6-2.3 1.4-3.1l260-260 7.1 7.1-258.7 258.5c-.7 5.5-3.5 22.4-12.7 39.4-10.4 19.1-31.1 41.9-70.7 41.9-72.6 0-84.7 38.1-87 71.4-2.6 36.1-24.3 41.6-25.2 41.9z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M241.7 510.1l-7.8-6.2c104.8-131.7 150.7-238.8 170.8-305.5 21.7-72.2 18.6-113.7 18.6-114.1l10-.8c.1 1.7 3.3 43.4-18.7 117.1-12.9 43.1-31.8 88.3-56.2 134.3-30.7 57.4-69.9 116.4-116.7 175.2z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M55 457l16.7 50 33.3-33.3L55 457zM5 440.3L55 457l-16.7-50L5 440.3zM99 363l16.7 50 33.3-33.3L99 363zM49 346.3L99 363l-16.7-50L49 346.3zM247 265l16.7 50 33.3-33.3-50-16.7zM197 248.3l50 16.7-16.7-50-33.3 33.3zM197 338l16.7 50 33.3-33.3-50-16.7zM147 321.3l50 16.7-16.7-50-33.3 33.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M247 270c-1.3 0-2.6-.5-3.5-1.5-1.3-1.3-1.8-3.2-1.2-5l53.1-171 9.6 3-50.3 161.9 238.9-74.1 8.2-173-173 8.2-17 54.9-9.6-3 18.1-58.2c.6-2 2.4-3.4 4.5-3.5l182-8.7c1.4-.1 2.8.5 3.8 1.5s1.5 2.4 1.5 3.8l-8.7 182c-.1 2.1-1.5 3.9-3.5 4.5l-251.3 78c-.6.1-1.1.2-1.6.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M56.2 461.9l-2.3-9.7c.6-.2 15.5-4.5 17.5-32.8 1.7-24.5 8.8-42.7 21.4-55.8 16.2-16.7 40.9-24.8 75.5-24.8 27.9 0 48.7-12.4 61.9-36.7 10.1-18.5 11.7-37.2 11.7-37.4l10 .8c-.1.8-1.9 20.9-12.9 41.3-10.4 19.1-31.1 41.9-70.7 41.9-72.6 0-84.7 38.1-87 71.4-2.5 36-24.2 41.5-25.1 41.8zM493.8 189c-.3-.6-26.7-59.2-69.2-101.6C382.2 45 323.5 18.5 323 18.2l4.1-9.1c2.5 1.1 60.9 27.5 104.6 71.2 43.7 43.7 70.1 102.2 71.2 104.6l-9.1 4.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M71.7 512c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-16.7-50c-.6-1.8-.1-3.8 1.2-5.1 1.3-1.3 3.3-1.8 5.1-1.2l50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1 .9-2.3 1.4-3.6 1.4zm-8.8-47.1l10.9 32.8 21.9-21.9-32.8-10.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M55 462c-.5 0-1.1-.1-1.6-.3L3.4 445c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9L47.1 449l-10.9-32.8-21.9 21.9zM115.7 418c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-9.2-27.5 9.5-3.2 6.6 19.8 21.9-21.9-42.3-14.1 3.2-9.5 50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1.1 1-2.4 1.5-3.7 1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M99 368c-.5 0-1.1-.1-1.6-.3l-50-16.7c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9L91.1 355l-10.9-32.8-21.9 21.9zM263.7 320c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-16.7-50c-.6-1.8-.1-3.8 1.2-5.1 1.3-1.3 3.3-1.8 5.1-1.2l50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1 .9-2.3 1.4-3.6 1.4zm-8.8-47.1l10.9 32.8 21.9-21.9-32.8-10.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M247 270c-.5 0-1.1-.1-1.6-.3l-50-16.7c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9l32.8 10.9-10.9-32.8-21.9 21.9zM213.7 393c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-16.7-50c-.6-1.8-.1-3.8 1.2-5.1 1.3-1.3 3.3-1.8 5.1-1.2l50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1 .9-2.3 1.4-3.6 1.4zm-8.8-47.1l10.9 32.8 21.9-21.9-32.8-10.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M197 343c-.5 0-1.1-.1-1.6-.3l-50-16.7c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9l32.8 10.9-10.9-32.8-21.9 21.9zM503.385 1.463l7.07 7.07-259.963 259.964-7.07-7.07L503.385 1.463z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M241.7 510.1l-7.8-6.2c104.8-131.7 150.7-238.8 170.8-305.5 21.7-72.2 18.6-113.7 18.6-114.1l10-.8c.1 1.7 3.3 43.4-18.7 117.1-12.9 43.1-31.8 88.3-56.2 134.3-30.7 57.4-69.9 116.4-116.7 175.2z" })));
};

var Icon$1k = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#AF3193", d: "M247 265l78-251.3L507 5l-8.7 182L247 265z" }),
        React__default['default'].createElement("path", { fill: "#D262BA", d: "M262.1 216.5C371.4 208.8 457.8 118.3 459 7.3l-134 6.4-62.9 202.8z" }),
        React__default['default'].createElement("path", { fill: "#A419A7", d: "M493.8 189c-.3-.6-26.7-59.2-69.2-101.6C382.2 45 323.5 18.5 323 18.2l4.1-9.1c2.5 1.1 60.9 27.5 104.6 71.2 43.7 43.7 70.1 102.2 71.2 104.6l-9.1 4.1z" }),
        React__default['default'].createElement("path", { fill: "#A419A7", d: "M56.2 461.9l-2.3-9.7c.6-.2 15.5-4.5 17.5-32.8 1.7-24.5 8.8-42.7 21.4-55.8 16.2-16.7 40.9-24.8 75.5-24.8 27.8 0 48.6-12.3 61.8-36.4 10.1-18.5 11.9-37.5 11.9-37.6.1-1.2.6-2.3 1.4-3.1l260-260 7.1 7.1-258.7 258.5c-.7 5.5-3.5 22.4-12.7 39.4-10.4 19.1-31.1 41.9-70.7 41.9-72.6 0-84.7 38.1-87 71.4-2.6 36.1-24.3 41.6-25.2 41.9z" }),
        React__default['default'].createElement("path", { fill: "#A419A7", d: "M241.7 510.1l-7.8-6.2c104.8-131.7 150.7-238.8 170.8-305.5 21.7-72.2 18.6-113.7 18.6-114.1l10-.8c.1 1.7 3.3 43.4-18.7 117.1-12.9 43.1-31.8 88.3-56.2 134.3-30.7 57.4-69.9 116.4-116.7 175.2z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M55 457l16.7 50 33.3-33.3L55 457zM5 440.3L55 457l-16.7-50L5 440.3zM99 363l16.7 50 33.3-33.3L99 363zM49 346.3L99 363l-16.7-50L49 346.3zM247 265l16.7 50 33.3-33.3-50-16.7zM197 248.3l50 16.7-16.7-50-33.3 33.3zM197 338l16.7 50 33.3-33.3-50-16.7zM147 321.3l50 16.7-16.7-50-33.3 33.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M247 270c-1.3 0-2.6-.5-3.5-1.5-1.3-1.3-1.8-3.2-1.2-5l53.1-171 9.6 3-50.3 161.9 238.9-74.1 8.2-173-173 8.2-17 54.9-9.6-3 18.1-58.2c.6-2 2.4-3.4 4.5-3.5l182-8.7c1.4-.1 2.8.5 3.8 1.5s1.5 2.4 1.5 3.8l-8.7 182c-.1 2.1-1.5 3.9-3.5 4.5l-251.3 78c-.6.1-1.1.2-1.6.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M56.2 461.9l-2.3-9.7c.6-.2 15.5-4.5 17.5-32.8 1.7-24.5 8.8-42.7 21.4-55.8 16.2-16.7 40.9-24.8 75.5-24.8 27.9 0 48.7-12.4 61.9-36.7 10.1-18.5 11.7-37.2 11.7-37.4l10 .8c-.1.8-1.9 20.9-12.9 41.3-10.4 19.1-31.1 41.9-70.7 41.9-72.6 0-84.7 38.1-87 71.4-2.5 36-24.2 41.5-25.1 41.8zM493.8 189c-.3-.6-26.7-59.2-69.2-101.6C382.2 45 323.5 18.5 323 18.2l4.1-9.1c2.5 1.1 60.9 27.5 104.6 71.2 43.7 43.7 70.1 102.2 71.2 104.6l-9.1 4.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M71.7 512c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-16.7-50c-.6-1.8-.1-3.8 1.2-5.1 1.3-1.3 3.3-1.8 5.1-1.2l50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1 .9-2.3 1.4-3.6 1.4zm-8.8-47.1l10.9 32.8 21.9-21.9-32.8-10.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M55 462c-.5 0-1.1-.1-1.6-.3L3.4 445c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9L47.1 449l-10.9-32.8-21.9 21.9zM115.7 418c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-9.2-27.5 9.5-3.2 6.6 19.8 21.9-21.9-42.3-14.1 3.2-9.5 50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1.1 1-2.4 1.5-3.7 1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M99 368c-.5 0-1.1-.1-1.6-.3l-50-16.7c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9L91.1 355l-10.9-32.8-21.9 21.9zM263.7 320c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-16.7-50c-.6-1.8-.1-3.8 1.2-5.1 1.3-1.3 3.3-1.8 5.1-1.2l50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1 .9-2.3 1.4-3.6 1.4zm-8.8-47.1l10.9 32.8 21.9-21.9-32.8-10.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M247 270c-.5 0-1.1-.1-1.6-.3l-50-16.7c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9l32.8 10.9-10.9-32.8-21.9 21.9zM213.7 393c-.4 0-.8 0-1.1-.1-1.7-.4-3-1.6-3.6-3.3l-16.7-50c-.6-1.8-.1-3.8 1.2-5.1 1.3-1.3 3.3-1.8 5.1-1.2l50 16.7c1.6.5 2.9 1.9 3.3 3.6.4 1.7-.1 3.5-1.3 4.7l-33.3 33.3c-1 .9-2.3 1.4-3.6 1.4zm-8.8-47.1l10.9 32.8 21.9-21.9-32.8-10.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M197 343c-.5 0-1.1-.1-1.6-.3l-50-16.7c-1.6-.5-2.9-1.9-3.3-3.6-.4-1.7.1-3.5 1.3-4.7l33.3-33.3c1.2-1.2 3-1.7 4.7-1.3 1.7.4 3 1.6 3.6 3.3l16.7 50c.6 1.8.1 3.8-1.2 5.1-.9 1-2.2 1.5-3.5 1.5zm-40.7-23.9l32.8 10.9-10.9-32.8-21.9 21.9zM503.385 1.463l7.07 7.07-259.963 259.964-7.07-7.07L503.385 1.463z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M241.7 510.1l-7.8-6.2c104.8-131.7 150.7-238.8 170.8-305.5 21.7-72.2 18.6-113.7 18.6-114.1l10-.8c.1 1.7 3.3 43.4-18.7 117.1-12.9 43.1-31.8 88.3-56.2 134.3-30.7 57.4-69.9 116.4-116.7 175.2z" })));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M349.5 216.3l-7.1-7.1 23-23c17.5-17.5 9.3-32.1 9.2-32.3l8.7-5c.5.9 12 21.5-10.8 44.3l-23 23.1zM384.2 238.2l-7.1-7.1 16.7-16.7c22.8-22.8 43.5-11.3 44.3-10.8l-5 8.7 2.5-4.3-2.5 4.4c-.6-.3-15.1-8-32.3 9.2l-16.6 16.6z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M386.1 271.6s3.2 39.2-35.4 77.8c-48.8 48.8-113.1 0-113.1 0s-48.8-64.3 0-113.1c38.5-38.5 77.8-35.4 77.8-35.4l70.7 70.7z" }),
        React__default['default'].createElement("path", { fill: "#C12944", fillRule: "evenodd", d: "M347.112 232.732l7.07 7.07-101.95 101.95-7.07-7.07 101.95-101.95z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M364.2 333.8S323 355 301 341s-6.9-48.2-6.9-48.2-39.2 16.2-56.6-2.1 3.9-58.2 3.9-58.2c-1.3 1.2-2.6 2.5-3.9 3.8-48.8 48.8 0 113.1 0 113.1s64.3 48.8 113.1 0c5.4-5.2 9.8-10.5 13.6-15.6z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M386.1 271.6c-9.8 9.8-37 5.4-56.6-14.1-19.5-19.5-23.9-46.8-14.1-56.6 19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7zM294.2 312.8c11.045 0 20-8.954 20-20s-8.955-20-20-20c-11.046 0-20 8.954-20 20s8.954 20 20 20zM280.7 237c-7.8 7.8-20.5 7.8-28.3 0-2.7-2.7-4.5-6-5.3-9.4 11.5-9.6 22.7-15.7 32.7-19.7.3.3.6.5.9.8 7.9 7.8 7.9 20.4 0 28.3zM241.1 304.8c-6.1 6.1-15 7.4-22.4 4.1-2.8-10.9-3.9-23.2-1.5-35.7 7.6-4.3 17.4-3.2 23.9 3.3 7.9 7.9 7.9 20.5 0 28.3zM316.2 369.2c-13.9 3.3-27.6 1.9-39.6-1.3.7-3.9 2.5-7.7 5.6-10.7 7.8-7.8 20.5-7.8 28.3 0 3.3 3.3 5.2 7.6 5.7 12zM366.4 330.4c-6.8 2-14.5.4-19.9-5-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0 2.2 2.2 3.9 4.9 4.8 7.7 0 .1-.1.2-.1.3-2.4 8.1-6.9 16.2-12.9 25-.1.1-.1.2-.2.3zM379 161.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM435.6 218c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M371.1 281.6c-3.3 0-6.9-.4-10.7-1.2-12.4-2.7-24.6-9.6-34.4-19.4-9.8-9.8-16.7-22-19.4-34.4-2.8-12.5-.8-23.1 5.3-29.2 10.4-10.4 24.2-16.1 38.9-16.1s28.5 5.7 38.9 16.1c10.4 10.4 16.1 24.2 16.1 38.9s-5.7 28.5-16.1 38.9c-4.3 4.2-10.8 6.4-18.6 6.4zm-20.4-90.3c-12 0-23.3 4.7-31.8 13.2-3.5 3.5-4.5 11.2-2.6 20 2.3 10.4 8.4 21.2 16.7 29.5 8.3 8.3 19.1 14.4 29.5 16.7 8.8 1.9 16.5 1 20-2.6 8.5-8.5 13.2-19.8 13.2-31.8s-4.7-23.3-13.2-31.8c-8.4-8.6-19.7-13.2-31.8-13.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M360.5 346.3l-7.5-6.6c30.4-34.4 28.1-67.3 28.1-67.7l10-.8c.1 1.5 2.6 37.6-30.6 75.1zM299.6 376c-9.5 0-19.4-1.6-29.6-4.9-20.5-6.6-34.8-17.3-35.4-17.8-.4-.3-.7-.6-1-1-.5-.7-12.9-17.1-19.1-40-8.5-30.9-1.7-58.4 19.6-79.7 39.7-39.7 80-36.9 81.7-36.8l-.8 10 .4-5-.4 5c-.4 0-37.6-2.4-73.9 33.9-18.9 18.9-24.6 42.4-17 70 5.2 18.8 14.9 33.1 17.1 36 2.7 2 15.4 10.6 32.2 15.9 24.7 7.8 46.5 5.2 64.6-7.9l5.9 8.1c-13.1 9.5-28.1 14.2-44.3 14.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", fillRule: "evenodd", d: "M276.443 303.364l7.07 7.07-42.42 42.42-7.07-7.07 42.42-42.42zM325.99 253.872l7.07 7.07-20.503 20.503-7.07-7.07 20.503-20.503z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M294.2 317.8c-6.4 0-12.8-2.4-17.7-7.3-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0 9.7 9.7 9.7 25.6 0 35.4-4.9 4.9-11.3 7.3-17.7 7.3zm0-40c-3.8 0-7.7 1.5-10.6 4.4-5.8 5.8-5.8 15.4 0 21.2 5.8 5.8 15.4 5.8 21.2 0 5.8-5.8 5.8-15.4 0-21.2-2.9-2.9-6.8-4.4-10.6-4.4zM266.6 247.8c-6.4 0-12.8-2.4-17.7-7.3-3.3-3.3-5.5-7.3-6.6-11.8-.4-1.8.2-3.8 1.7-5 10.6-8.8 22-15.7 34-20.5 1.7-.7 3.7-.4 5.1.9.4.3.8.7 1.2 1.1 9.7 9.7 9.7 25.6 0 35.4-4.9 4.8-11.3 7.2-17.7 7.2zM253 229.2c.7 1.6 1.7 3 3 4.2 5.8 5.8 15.4 5.8 21.2 0 2.8-2.8 4.4-6.6 4.4-10.6 0-3.3-1.1-6.4-3-9-8.9 3.9-17.5 9-25.6 15.4zM226.9 315.7c-3.5 0-7-.7-10.3-2.2-1.4-.6-2.4-1.9-2.8-3.3-3.3-13.3-3.9-26-1.5-37.9.3-1.4 1.2-2.7 2.5-3.4 9.7-5.4 22-3.7 29.9 4.2 4.7 4.7 7.3 11 7.3 17.7 0 6.7-2.6 13-7.3 17.7-4.8 4.6-11.2 7.2-17.8 7.2zm-3.9-10.6c5.1 1.4 10.8 0 14.6-3.8 2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6c-4.2-4.2-10.5-5.5-15.9-3.4-1.4 8.9-.9 18.5 1.3 28.4zM299.7 376.1c-7.9 0-16-1.1-24.4-3.4-2.5-.7-4.1-3.1-3.6-5.7.9-5.1 3.3-9.7 7-13.4 4.7-4.7 11-7.3 17.7-7.3 6.7 0 13 2.6 17.7 7.3 4 4 6.6 9.4 7.2 15 .3 2.5-1.4 4.8-3.8 5.4-5.9 1.4-11.7 2.1-17.8 2.1zM283 364.3c9.5 2 18.5 2.3 27 1-.7-1.7-1.8-3.3-3.1-4.6-2.8-2.8-6.6-4.4-10.6-4.4s-7.8 1.6-10.6 4.4c-1.1 1.1-2 2.3-2.7 3.6zM360.6 336.2c-6.5 0-12.9-2.6-17.7-7.3-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0 2.8 2.8 4.8 6 6 9.7.3 1 .3 2.1 0 3.2 0 .1-.1.3-.2.4-2.4 7.9-6.7 16.2-13.5 26.1l-.2.3c-.6.9-1.6 1.6-2.6 1.9-2.3.8-4.8 1.1-7.2 1.1zm0-40c-3.8 0-7.7 1.5-10.6 4.4-5.8 5.8-5.8 15.4 0 21.2 3.5 3.5 8.5 5 13.3 4.1 5.4-8 8.9-14.7 10.9-21-.7-1.6-1.7-3.1-3-4.3-2.9-2.9-6.7-4.4-10.6-4.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", fillRule: "evenodd", d: "M358.494 204.351l7.07 7.07-7.07 7.07-7.07-7.07 7.07-7.07zM375.465 221.359l7.07 7.07-7.07 7.07-7.07-7.07 7.07-7.07z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M379 166.4c-3.8 0-7.7-1.5-10.6-4.4-5.8-5.8-5.8-15.4 0-21.2 5.8-5.8 15.4-5.8 21.2 0 5.8 5.8 5.8 15.4 0 21.2-2.9 2.9-6.7 4.4-10.6 4.4zm-3.5-18.5c-1.9 1.9-1.9 5.1 0 7.1s5.1 2 7.1 0c1.9-1.9 1.9-5.1 0-7.1-2-2-5.2-2-7.1 0z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M372.6 193.2l-7.1-7.1c10-10 11.5-19 11.1-24.8l10-.7c.5 8-1.4 20-14 32.6zM435.6 223c-3.8 0-7.7-1.5-10.6-4.4-5.8-5.8-5.8-15.4 0-21.2 5.8-5.8 15.4-5.8 21.2 0 5.8 5.8 5.8 15.4 0 21.2-2.9 2.9-6.8 4.4-10.6 4.4zm0-20c-1.3 0-2.6.5-3.5 1.5-1.9 1.9-1.9 5.1 0 7.1s5.1 2 7.1 0c1.9-1.9 1.9-5.1 0-7.1-1-1-2.3-1.5-3.6-1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M400.8 221.5l-7.1-7.1c12.6-12.6 24.7-14.6 32.5-14l-.7 10c-5.7-.4-14.7 1.2-24.7 11.1z" })));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M423 95.6c0 193.5-108 339-289.4 339C48.1 434.6 5 507 5 507c0-130.5 14.6-270.2 58.3-369 7.1 3.8 15.2 5.9 23.7 5.9 28 0 50.7-22.7 50.7-50.7 0-16.1-7.5-30.5-19.3-39.8C149 22.9 187 5 234.1 5 309.4 5 423 95.6 423 95.6z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M133.6 434.6C315 434.6 423 289.1 423 95.6c0 0-229.5 19.4-357.7 224.1C27.7 379.7 5 507 5 507s43.1-72.4 128.6-72.4z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M349.5 216.3l-7.1-7.1 23-23c17.5-17.5 9.3-32.1 9.2-32.3l8.7-5c.5.9 12 21.5-10.8 44.3l-23 23.1zM384.2 238.2l-7.1-7.1 16.7-16.7c22.8-22.8 43.5-11.3 44.3-10.8l-5 8.7 2.5-4.3-2.5 4.4c-.6-.3-15.1-8-32.3 9.2l-16.6 16.6z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M386.1 271.6s3.2 39.2-35.4 77.8c-48.8 48.8-113.1 0-113.1 0s-48.8-64.3 0-113.1c38.5-38.5 77.8-35.4 77.8-35.4l70.7 70.7z" }),
        React__default['default'].createElement("path", { fill: "#C12944", fillRule: "evenodd", d: "M347.111 232.732l7.07 7.07-101.949 101.95-7.07-7.07 101.949-101.95z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M364.2 333.8S323 355 301 341s-6.9-48.2-6.9-48.2-39.2 16.2-56.6-2.1 3.9-58.2 3.9-58.2c-1.3 1.2-2.6 2.5-3.9 3.8-48.8 48.8 0 113.1 0 113.1s64.3 48.8 113.1 0c5.4-5.2 9.8-10.5 13.6-15.6z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M386.1 271.6c-9.8 9.8-37 5.4-56.6-14.1-19.5-19.5-23.9-46.8-14.1-56.6 19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7zM294.2 312.8c11.045 0 20-8.954 20-20s-8.955-20-20-20c-11.046 0-20 8.954-20 20s8.954 20 20 20zM280.7 237c-7.8 7.8-20.5 7.8-28.3 0-2.7-2.7-4.5-6-5.3-9.4 11.5-9.6 22.7-15.7 32.7-19.7.3.3.6.5.9.8 7.9 7.8 7.9 20.4 0 28.3zM241.1 304.8c-6.1 6.1-15 7.4-22.4 4.1-2.8-10.9-3.9-23.2-1.5-35.7 7.6-4.3 17.4-3.2 23.9 3.3 7.9 7.9 7.9 20.5 0 28.3zM316.2 369.2c-13.9 3.3-27.6 1.9-39.6-1.3.7-3.9 2.5-7.7 5.6-10.7 7.8-7.8 20.5-7.8 28.3 0 3.3 3.3 5.2 7.6 5.7 12zM366.4 330.4c-6.8 2-14.5.4-19.9-5-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0 2.2 2.2 3.9 4.9 4.8 7.7 0 .1-.1.2-.1.3-2.4 8.1-6.9 16.2-12.9 25-.1.1-.1.2-.2.3zM379 161.4c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM435.6 218c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM182.3 344.7c-18.2-50.6-5.1-147.7-4.6-151.8l9.9 1.4c-.1 1-13.3 98.8 4.1 147l-9.4 3.4zM116.4 252.1c-5.9-3.8-53.1-30.5-53.6-30.8l4.9-8.7c2 1.1 47.9 27.1 54.1 31.1l-5.4 8.4zM252.8 143.6c-.2-.2-1-.7-1.8-1.2-44.3-29.3-58.7-59.9-62.9-80.4l9.8-2c3.9 18.7 17.2 46.7 58.6 74.1 1.8 1.2 2.4 1.6 3 2.2l-7.1 7.1c.1 0 .2.1.4.2z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M65.3 319.7S203.7 70.4 507 83.7v29S274.2 80 65.3 319.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M116.4 252.1c-5.9-3.8-53.1-30.5-53.6-30.8l4.9-8.7c2 1.1 47.9 27.1 54.1 31.1l-5.4 8.4zM255.9 144.8c-1.6 0-3-.6-3.8-1-5.5-2.5-19.1-11.7-32.3-25.5-11.7-12.2-26.6-31.9-31.7-56.3l9.8-2c4.8 22.9 19.4 41.5 30.8 53.1 13.7 13.8 26.1 21.2 28.1 21.9 0 0-1.5-.5-3.2.5l4.8 8.8c-.9.4-1.7.5-2.5.5zM371.1 281.6c-3.3 0-6.9-.4-10.7-1.2-12.4-2.7-24.6-9.6-34.4-19.4-9.8-9.8-16.7-22-19.4-34.4-2.8-12.5-.8-23.1 5.3-29.2 10.4-10.4 24.2-16.1 38.9-16.1s28.5 5.7 38.9 16.1c10.4 10.4 16.1 24.2 16.1 38.9s-5.7 28.5-16.1 38.9c-4.3 4.2-10.8 6.4-18.6 6.4zm-20.4-90.3c-12 0-23.3 4.7-31.8 13.2-3.5 3.5-4.5 11.2-2.6 20 2.3 10.4 8.4 21.2 16.7 29.5 8.3 8.3 19.1 14.4 29.5 16.7 8.8 1.9 16.5 1 20-2.6 8.5-8.5 13.2-19.8 13.2-31.8s-4.7-23.3-13.2-31.8c-8.4-8.6-19.7-13.2-31.8-13.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M360.5 346.3l-7.5-6.6c30.4-34.4 28.1-67.3 28.1-67.7l10-.8c.1 1.5 2.6 37.6-30.6 75.1zM299.6 376c-9.5 0-19.4-1.6-29.6-4.9-20.5-6.6-34.8-17.3-35.4-17.8-.4-.3-.7-.6-1-1-.5-.7-12.9-17.1-19.1-40-8.5-30.9-1.7-58.4 19.6-79.7 39.7-39.7 80-36.9 81.7-36.8l-.8 10 .4-5-.4 5c-.4 0-37.6-2.4-73.9 33.9-18.9 18.9-24.6 42.4-17 70 5.2 18.8 14.9 33.1 17.1 36 2.7 2 15.4 10.6 32.2 15.9 24.7 7.8 46.5 5.2 64.6-7.9l5.9 8.1c-13.1 9.5-28.1 14.2-44.3 14.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", fillRule: "evenodd", d: "M276.443 303.364l7.07 7.07-42.42 42.42-7.07-7.07 42.42-42.42zM325.99 253.871l7.07 7.07-20.503 20.504-7.07-7.07 20.503-20.504z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M294.2 317.8c-6.4 0-12.8-2.4-17.7-7.3-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0 9.7 9.7 9.7 25.6 0 35.4-4.9 4.9-11.3 7.3-17.7 7.3zm0-40c-3.8 0-7.7 1.5-10.6 4.4-5.8 5.8-5.8 15.4 0 21.2 5.8 5.8 15.4 5.8 21.2 0 5.8-5.8 5.8-15.4 0-21.2-2.9-2.9-6.8-4.4-10.6-4.4zM266.6 247.8c-6.4 0-12.8-2.4-17.7-7.3-3.3-3.3-5.5-7.3-6.6-11.8-.4-1.8.2-3.8 1.7-5 10.6-8.8 22-15.7 34-20.5 1.7-.7 3.7-.4 5.1.9.4.3.8.7 1.2 1.1 9.7 9.7 9.7 25.6 0 35.4-4.9 4.8-11.3 7.2-17.7 7.2zM253 229.2c.7 1.6 1.7 3 3 4.2 5.8 5.8 15.4 5.8 21.2 0 2.8-2.8 4.4-6.6 4.4-10.6 0-3.3-1.1-6.4-3-9-8.9 3.9-17.5 9-25.6 15.4zM226.9 315.7c-3.5 0-7-.7-10.3-2.2-1.4-.6-2.4-1.9-2.8-3.3-3.3-13.3-3.9-26-1.5-37.9.3-1.4 1.2-2.7 2.5-3.4 9.7-5.4 22-3.7 29.9 4.2 4.7 4.7 7.3 11 7.3 17.7 0 6.7-2.6 13-7.3 17.7-4.8 4.6-11.2 7.2-17.8 7.2zm-3.9-10.6c5.1 1.4 10.8 0 14.6-3.8 2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6c-4.2-4.2-10.5-5.5-15.9-3.4-1.4 8.9-.9 18.5 1.3 28.4zM299.7 376.1c-7.9 0-16-1.1-24.4-3.4-2.5-.7-4.1-3.1-3.6-5.7.9-5.1 3.3-9.7 7-13.4 4.7-4.7 11-7.3 17.7-7.3 6.7 0 13 2.6 17.7 7.3 4 4 6.6 9.4 7.2 15 .3 2.5-1.4 4.8-3.8 5.4-5.9 1.4-11.7 2.1-17.8 2.1zM283 364.3c9.5 2 18.5 2.3 27 1-.7-1.7-1.8-3.3-3.1-4.6-2.8-2.8-6.6-4.4-10.6-4.4s-7.8 1.6-10.6 4.4c-1.1 1.1-2 2.3-2.7 3.6zM360.6 336.2c-6.5 0-12.9-2.6-17.7-7.3-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0 2.8 2.8 4.8 6 6 9.7.3 1 .3 2.1 0 3.2 0 .1-.1.3-.2.4-2.4 7.9-6.7 16.2-13.5 26.1l-.2.3c-.6.9-1.6 1.6-2.6 1.9-2.3.8-4.8 1.1-7.2 1.1zm0-40c-3.8 0-7.7 1.5-10.6 4.4-5.8 5.8-5.8 15.4 0 21.2 3.5 3.5 8.5 5 13.3 4.1 5.4-8 8.9-14.7 10.9-21-.7-1.6-1.7-3.1-3-4.3-2.9-2.9-6.7-4.4-10.6-4.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", fillRule: "evenodd", d: "M358.494 204.351l7.07 7.07-7.07 7.07-7.07-7.07 7.07-7.07zM375.465 221.359l7.07 7.07-7.07 7.07-7.07-7.07 7.07-7.07z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M379 166.4c-3.8 0-7.7-1.5-10.6-4.4-5.8-5.8-5.8-15.4 0-21.2 5.8-5.8 15.4-5.8 21.2 0 5.8 5.8 5.8 15.4 0 21.2-2.9 2.9-6.7 4.4-10.6 4.4zm-3.5-18.5c-1.9 1.9-1.9 5.1 0 7.1s5.1 2 7.1 0c1.9-1.9 1.9-5.1 0-7.1-2-2-5.2-2-7.1 0z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M372.6 193.2l-7.1-7.1c10-10 11.5-19 11.1-24.8l10-.7c.5 8-1.4 20-14 32.6zM435.6 223c-3.8 0-7.7-1.5-10.6-4.4-5.8-5.8-5.8-15.4 0-21.2 5.8-5.8 15.4-5.8 21.2 0 5.8 5.8 5.8 15.4 0 21.2-2.9 2.9-6.8 4.4-10.6 4.4zm0-20c-1.3 0-2.6.5-3.5 1.5-1.9 1.9-1.9 5.1 0 7.1s5.1 2 7.1 0c1.9-1.9 1.9-5.1 0-7.1-1-1-2.3-1.5-3.6-1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M400.8 221.5l-7.1-7.1c12.6-12.6 24.7-14.6 32.5-14l-.7 10c-5.7-.4-14.7 1.2-24.7 11.1zM87 148.9c-9.1 0-18.1-2.2-26.1-6.5l4.7-8.8c6.5 3.5 13.9 5.3 21.4 5.3 25.2 0 45.7-20.5 45.7-45.7 0-14-6.3-27.1-17.4-35.8-1.1-.9-1.8-2.2-1.9-3.6-.1-1.4.4-2.8 1.5-3.8C148 16.8 188.1 0 234.1 0c62.4 0 148.1 58.8 182.1 84.1l-6 8C384.3 72.8 295.1 10 234.1 10c-41.5 0-77.9 14.6-108.3 43.3 10.8 10.5 16.9 24.7 16.9 39.9 0 30.7-25 55.7-55.7 55.7zM5 512c-.4 0-.9-.1-1.3-.2-2.2-.6-3.7-2.5-3.7-4.8 0-100.2 8.7-242.4 50.4-350.8l9.3 3.6C20.7 261.3 11 393.3 10.1 491.4c5.5-6.8 13.5-15.6 23.9-24.4 20.2-17.1 53.9-37.4 99.6-37.4 69.4 0 131.4-22.2 179.2-64.3l6.6 7.5c-24.4 21.5-52.3 38-82.9 49.3-31.7 11.6-66.3 17.5-102.9 17.5-81.7 0-123.9 69.3-124.3 70-.9 1.5-2.6 2.4-4.3 2.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M65.3 324.7c-1 0-2-.3-2.9-.9a5.03 5.03 0 01-1.5-6.5c.4-.6 35.9-63.8 108.3-124.4 42.5-35.6 89.3-63.4 139-82.6 62.2-24 129.1-34.7 199-31.6 2.7.1 4.8 2.3 4.8 5v29c0 1.4-.6 2.8-1.7 3.8s-2.5 1.4-4 1.2c-.6-.1-58.6-7.8-141.1 13.6C289.1 151 175.9 200.3 69 323c-.9 1.1-2.3 1.7-3.7 1.7zM484 88.2c-143.2 0-246.2 60.3-308.4 112.3-26.5 22.2-48 44.7-64.4 64.2 34.3-32.3 70.6-60 108.7-82.8 45.7-27.4 93.9-47.7 143.4-60.5 70.2-18.1 122-15.8 138.8-14.3V88.5c-6.2-.2-12.2-.3-18.1-.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M414.3 209.7l-9.7-2.5c7.4-29.1 11.8-60.2 13-92.5l10 .4c-1.2 33-5.7 64.9-13.3 94.6zM182.3 344.7c-13.2-36.6-9.9-98-6.8-131.3l10 .9c-3 32.5-6.2 92.2 6.3 127l-9.5 3.4z" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M17.83 15.647S16.081 6.051 29.62 6.051c0 0-.076 4.626-3.043 7.031-2.966 2.405-8.746 2.565-8.746 2.565z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M29.619 6.051s-.076 4.632-3.043 7.031c-2.966 2.4-8.746 2.565-8.746 2.565 2.563-3.758 6.016-6.317 8.503-7.867 1.46-.91 3.286-1.729 3.286-1.729z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M13.875 10.85s1.75-9.597-11.788-9.597c0 0 .076 4.626 3.042 7.031 2.966 2.405 8.746 2.565 8.746 2.565z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M13.875 10.85s-5.787-.167-8.746-2.566c-2.966-2.399-3.042-7.03-3.042-7.03S4.673 2.44 5.7 3.024c2.867 1.642 6.662 4.33 8.175 7.824z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M16.233 26l-.76-.03c.007-.093.578-9.172-1.955-15.016-1.475-3.414-5.187-6.053-8.039-7.67l.434-.505c2.943 1.667 6.776 4.404 8.32 7.972 2.586 5.954 2.008 15.157 2 15.249z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M4.775 4.208l3.4.063-.018.615-3.4-.063.018-.615zM10.714 4.505l.346 2.042-.754.083-.346-2.042.754-.083zM8.897 7.68l3.156.013-.004.615-3.156-.013.004-.615zM16.02 18.914l-.662-.302c.67-.972 1.385-2.017 2.137-3.118 2.617-3.826 6.123-6.44 8.61-7.96l.456.492c-2.426 1.482-5.848 4.035-8.396 7.769-.753 1.101-1.476 2.147-2.145 3.119z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M27.452 8.958l.063.614-3.692.251-.064-.613 3.693-.252zM21.878 9.314l.354 1.717-.75.1-.353-1.716.75-.1zM24.105 12.274l.062.614-4.064.27-.062-.613 4.064-.27z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M12.301 11.034c-1.879-.215-5.34-.824-7.446-2.534-3.034-2.46-3.148-7.05-3.148-7.24 0-.08.038-.16.106-.222a.422.422 0 01.274-.092c4.396 0 7.681.996 9.773 2.953 3.095 2.903 2.426 6.827 2.396 6.994l-.753-.093.372.043-.372-.043c.007-.037.646-3.82-2.221-6.508-1.879-1.753-4.837-2.67-8.8-2.731.084 1.064.533 4.57 2.913 6.502 1.947 1.58 5.233 2.153 7.013 2.356l-.107.615zM17.83 15.955c-.19 0-.35-.11-.372-.264-.03-.167-.708-4.091 2.395-6.994 2.084-1.957 5.37-2.953 9.766-2.953.099 0 .198.03.274.092.076.062.114.135.106.222 0 .196-.114 4.78-3.156 7.24-3.035 2.46-8.762 2.65-9.005 2.657h-.008zm11.393-9.596c-3.962.055-6.913.978-8.792 2.731-2.418 2.258-2.342 5.296-2.259 6.225 1.286-.08 5.727-.504 8.138-2.454 2.38-1.925 2.83-5.432 2.913-6.502z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.233 26l-.76-.03c.007-.093.578-9.172-1.955-15.016-1.475-3.414-5.187-6.053-8.039-7.67l.434-.505c2.943 1.667 6.776 4.404 8.32 7.972 2.586 5.954 2.008 15.157 2 15.249z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M4.775 4.208l3.4.063-.018.615-3.4-.063.018-.615zM10.714 4.505l.346 2.042-.754.083-.346-2.042.754-.083zM8.897 7.68l3.156.013-.004.615-3.156-.013.004-.615zM16.02 18.914l-.662-.302c.67-.972 1.385-2.017 2.137-3.118 2.617-3.826 6.123-6.44 8.61-7.96l.456.492c-2.426 1.482-5.848 4.035-8.396 7.769-.753 1.101-1.476 2.147-2.145 3.119z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M27.452 8.958l.063.614-3.692.251-.064-.613 3.693-.252zM21.878 9.314l.354 1.717-.75.1-.353-1.716.75-.1zM24.105 12.274l.062.614-4.064.27-.062-.613 4.064-.27zM13.44 31.277c.58.545 1.388.809 2.39.809 1.441 0 2.356-.72 2.356-1.81 0-.739-.457-1.178-1.108-1.39a12.628 12.628 0 00-1.283-.368c-1.02-.247-1.512-.51-1.512-1.16 0-.739.598-1.196 1.6-1.196.72 0 1.318.246 1.916.756l.299-.58c-.528-.527-1.319-.809-2.215-.809-1.406 0-2.338.756-2.338 1.864 0 .755.44 1.212 1.072 1.476.317.123.72.229 1.213.352 1.055.246 1.6.404 1.617 1.09.018.72-.58 1.142-1.617 1.142-.861 0-1.476-.21-2.127-.738l-.263.562z" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H32V32H0z" }),
            React__default['default'].createElement("ellipse", { cx: "16.5", cy: "16", fill: "#4D2419", rx: "15.5", ry: "16" }),
            React__default['default'].createElement("ellipse", { cx: "16.5", cy: "16", fill: "#C4C4C4", rx: "15.5", ry: "16" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M14.39 30.469c.516.484 1.235.718 2.126.718 1.28 0 2.093-.64 2.093-1.609 0-.656-.406-1.047-.984-1.234a11.224 11.224 0 00-1.14-.328c-.907-.22-1.344-.453-1.344-1.032 0-.656.53-1.062 1.421-1.062.641 0 1.172.219 1.704.672l.265-.516c-.468-.469-1.172-.719-1.968-.719-1.25 0-2.079.672-2.079 1.657 0 .672.391 1.078.954 1.312.28.11.64.203 1.078.313.937.218 1.422.359 1.437.968.016.641-.515 1.016-1.437 1.016-.766 0-1.313-.188-1.891-.656l-.234.5z" }),
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M18.859 17.53S17.4 9.678 28.682 9.678c0 0-.063 3.785-2.535 5.753S18.86 17.53 18.86 17.53z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M28.682 9.678s-.063 3.79-2.535 5.753-7.288 2.099-7.288 2.099c2.135-3.075 5.013-5.169 7.085-6.437 1.217-.745 2.738-1.415 2.738-1.415z" }),
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M15.563 13.604s1.457-7.851-9.824-7.851c0 0 .063 3.785 2.535 5.752 2.472 1.968 7.289 2.1 7.289 2.1z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M15.563 13.604s-4.823-.136-7.289-2.099C5.802 9.543 5.74 5.753 5.74 5.753s2.155.971 3.01 1.45c2.39 1.343 5.553 3.542 6.814 6.401z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M17.528 26l-.634-.025c.006-.076.482-7.504-1.629-12.285-1.23-2.794-4.322-4.953-6.7-6.276L8.928 7c2.453 1.364 5.647 3.603 6.934 6.523 2.155 4.871 1.673 12.4 1.667 12.476z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M7.979 8.17l2.833.052-.015.503-2.833-.052.015-.503zM12.928 8.413l.289 1.67-.628.07L12.3 8.48l.628-.068zM11.414 11.011l2.63.01-.003.504-2.63-.01.003-.504zM17.35 20.202l-.551-.247c.557-.795 1.153-1.65 1.78-2.551 2.18-3.13 5.103-5.27 7.175-6.513l.38.403c-2.021 1.213-4.873 3.301-6.997 6.356-.627.901-1.23 1.757-1.787 2.552z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M26.877 12.057l.053.502-3.078.205-.053-.501 3.078-.206zM22.232 12.348l.294 1.404-.625.083-.294-1.404.625-.083zM24.087 14.77l.052.502-3.386.221-.052-.502 3.386-.22z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M14.25 13.755c-1.565-.176-4.448-.674-6.204-2.073-2.529-2.014-2.624-5.768-2.624-5.924 0-.066.032-.131.089-.181a.356.356 0 01.228-.076c3.663 0 6.401.816 8.144 2.416 2.58 2.376 2.022 5.587 1.997 5.722l-.628-.075.31.035-.31-.035c.007-.03.539-3.126-1.85-5.325-1.566-1.434-4.031-2.184-7.333-2.234.07.87.443 3.739 2.427 5.32 1.622 1.293 4.36 1.76 5.844 1.927l-.09.503zM18.859 17.781c-.159 0-.292-.09-.311-.216-.025-.136-.59-3.347 1.997-5.723 1.736-1.6 4.474-2.415 8.137-2.415.083 0 .165.025.229.075.063.05.095.111.088.181 0 .161-.095 3.911-2.63 5.924-2.529 2.013-7.301 2.17-7.504 2.174h-.006zm9.494-7.851c-3.302.045-5.761.8-7.327 2.235-2.015 1.847-1.952 4.333-1.882 5.093 1.07-.066 4.772-.413 6.781-2.008 1.984-1.575 2.358-4.444 2.428-5.32z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M17.528 26l-.634-.025c.006-.076.482-7.504-1.629-12.285-1.23-2.794-4.322-4.953-6.7-6.276L8.928 7c2.453 1.364 5.647 3.603 6.934 6.523 2.155 4.871 1.673 12.4 1.667 12.476z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M7.979 8.17l2.833.052-.015.503-2.833-.052.015-.503zM12.928 8.413l.289 1.67-.628.07L12.3 8.48l.628-.068zM11.414 11.011l2.63.01-.003.504-2.63-.01.003-.504zM17.35 20.202l-.551-.247c.557-.795 1.153-1.65 1.78-2.551 2.18-3.13 5.103-5.27 7.175-6.513l.38.403c-2.021 1.213-4.873 3.301-6.997 6.356-.627.901-1.23 1.757-1.787 2.552z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M26.877 12.057l.053.502-3.078.205-.053-.501 3.078-.206zM22.232 12.348l.294 1.404-.625.083-.294-1.404.625-.083zM24.087 14.77l.052.502-3.386.221-.052-.502 3.386-.22z" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H32V32H0z" })))));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#F6AF5B", d: "M16.71 3.102A1.9 1.9 0 1013 2.525v3.642a1.333 1.333 0 002.602.405l1.107-3.47zM8.29 3.102A1.9 1.9 0 1112 2.525v3.642a1.333 1.333 0 01-2.602.405L8.29 3.102z" }),
        React__default['default'].createElement("path", { fill: "#AE5714", d: "M19.899 24.142l-8.045-8.046a.5.5 0 010-.707l3.535-3.535a.5.5 0 01.707 0l8.046 8.045a.5.5 0 01-.282.848l-2.349.341a.5.5 0 00-.423.423l-.34 2.349a.5.5 0 01-.85.282z" }),
        React__default['default'].createElement("path", { fill: "#AE5714", d: "M5.198 24.142l8.045-8.046a.5.5 0 000-.707l-3.535-3.535a.5.5 0 00-.708 0L.955 19.898a.5.5 0 00.282.848l2.348.341a.5.5 0 01.423.423l.341 2.349a.5.5 0 00.849.282z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M12.526 22.32c4.913 0 8.896-3.682 8.896-8.223 0-4.54-3.983-8.222-8.896-8.222S3.63 9.556 3.63 14.097c0 4.541 3.983 8.222 8.896 8.222z" }),
        React__default['default'].createElement("path", { fill: "#F6AF5B", d: "M16.91 19.78c4.239-2.261 5.691-7.27 3.244-11.187-2.448-3.917-7.868-5.26-12.108-2.998-4.239 2.262-5.691 7.27-3.244 11.188C7.25 20.7 12.67 22.041 16.91 19.78z" }),
        React__default['default'].createElement("path", { fill: "#F7D29B", d: "M7.873 5.688l13.183 9.069a7.755 7.755 0 01-.634 1.566L6.432 6.7c.44-.38.923-.719 1.44-1.01zm-3 2.79l14.149 9.733a8.86 8.86 0 01-2.554 1.791L3.75 11.254c.19-1 .578-1.936 1.123-2.775z" }),
        React__default['default'].createElement("path", { fill: "#E7974D", d: "M15.864 18.107c3.24-1.728 4.349-5.555 2.479-8.548-1.87-2.993-6.012-4.019-9.252-2.29-3.239 1.727-4.349 5.554-2.478 8.547 1.87 2.993 6.012 4.019 9.25 2.291z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M18.682 10.177a6.17 6.17 0 00-.34-.618c-1.87-2.993-6.011-4.019-9.25-2.29-3.24 1.727-4.35 5.554-2.48 8.547.128.204.265.397.412.582-1.371-2.883-.202-6.319 2.818-7.93 3.02-1.61 6.823-.829 8.84 1.71z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M13.577 15.18s-.533-3.173 3.592-3.173c0 0-.023 1.53-.927 2.325-.904.795-2.665.848-2.665.848z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M17.169 12.007s-.023 1.531-.927 2.325c-.904.793-2.665.848-2.665.848.78-1.243 1.833-2.09 2.59-2.602.446-.3 1.002-.571 1.002-.571zM12.372 13.593s.533-3.173-3.593-3.173c0 0 .024 1.53.927 2.325.904.795 2.666.848 2.666.848z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M12.372 13.593s-1.764-.055-2.666-.848c-.903-.793-.927-2.325-.927-2.325s.788.393 1.101.586c.874.543 2.03 1.432 2.492 2.587z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#E17A2F", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" }),
        React__default['default'].createElement("path", { fill: "#AE5714", d: "M11.892 13.654c-.572-.071-1.627-.272-2.269-.838-.925-.814-.96-2.331-.96-2.394 0-.027.012-.053.033-.073.02-.02.053-.03.083-.03 1.34 0 2.341.329 2.979.975.943.96.739 2.258.73 2.313l-.23-.03.114.014-.114-.014c.002-.012.197-1.263-.677-2.152-.572-.58-1.474-.883-2.681-.904.025.352.162 1.512.888 2.15.593.524 1.594.713 2.136.78l-.032.203zM13.577 15.282c-.058 0-.107-.037-.114-.088-.01-.055-.215-1.353.73-2.313.635-.647 1.636-.976 2.976-.976.03 0 .06.01.083.03.024.02.035.045.033.073 0 .066-.035 1.581-.962 2.395-.925.813-2.67.877-2.744.879h-.002zm3.472-3.174c-1.208.018-2.107.324-2.68.903-.737.747-.713 1.752-.688 2.06.392-.027 1.745-.168 2.48-.813.725-.636.862-1.796.887-2.15z" }),
        React__default['default'].createElement("path", { fill: "#AE5714", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#AE5714", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#AE5714", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#FFD800", d: "M16.71 3.102A1.9 1.9 0 1013 2.525v3.642a1.333 1.333 0 002.602.405l1.107-3.47zM8.29 3.102A1.9 1.9 0 1112 2.525v3.642a1.333 1.333 0 01-2.602.405L8.29 3.102z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M19.899 24.142l-8.045-8.046a.5.5 0 010-.707l3.535-3.535a.5.5 0 01.707 0l8.046 8.045a.5.5 0 01-.282.848l-2.349.341a.5.5 0 00-.423.423l-.34 2.349a.5.5 0 01-.85.282z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M5.198 24.142l8.045-8.046a.5.5 0 000-.707l-3.535-3.535a.5.5 0 00-.708 0L.955 19.898a.5.5 0 00.282.848l2.348.341a.5.5 0 01.423.423l.341 2.349a.5.5 0 00.849.282z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M12.526 22.32c4.913 0 8.896-3.682 8.896-8.223 0-4.54-3.983-8.222-8.896-8.222S3.63 9.556 3.63 14.097c0 4.541 3.983 8.222 8.896 8.222z" }),
        React__default['default'].createElement("path", { fill: "#FFD800", d: "M16.91 19.78c4.239-2.261 5.691-7.27 3.244-11.187-2.448-3.917-7.868-5.26-12.108-2.998-4.239 2.262-5.691 7.27-3.244 11.188C7.25 20.7 12.67 22.041 16.91 19.78z" }),
        React__default['default'].createElement("path", { fill: "#FEED8D", d: "M7.873 5.688l13.183 9.069a7.755 7.755 0 01-.634 1.566L6.432 6.7c.44-.38.923-.719 1.44-1.01zm-3 2.79l14.149 9.733a8.86 8.86 0 01-2.554 1.791L3.75 11.254c.19-1 .578-1.936 1.123-2.775z" }),
        React__default['default'].createElement("path", { fill: "#FFC700", d: "M15.864 18.107c3.24-1.728 4.349-5.555 2.479-8.548-1.87-2.993-6.012-4.019-9.251-2.291-3.24 1.728-4.35 5.555-2.48 8.548 1.87 2.993 6.013 4.019 9.252 2.291z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M13.577 15.18s-.533-3.173 3.592-3.173c0 0-.023 1.53-.927 2.325-.904.795-2.665.848-2.665.848z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M17.169 12.007s-.023 1.531-.927 2.325c-.904.793-2.665.848-2.665.848.78-1.243 1.833-2.09 2.59-2.602.446-.3 1.002-.571 1.002-.571zM12.372 13.593s.533-3.173-3.593-3.173c0 0 .024 1.53.927 2.325.904.795 2.666.848 2.666.848z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M12.372 13.593s-1.764-.055-2.666-.848c-.903-.793-.927-2.325-.927-2.325s.788.393 1.101.586c.874.543 2.03 1.432 2.492 2.587z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" }),
        React__default['default'].createElement("path", { fill: "#B56C00", d: "M11.892 13.654c-.572-.071-1.627-.272-2.269-.838-.925-.814-.96-2.331-.96-2.394 0-.027.012-.053.033-.073.02-.02.053-.03.083-.03 1.34 0 2.341.329 2.979.975.943.96.739 2.258.73 2.313l-.23-.03.114.014-.114-.014c.002-.012.197-1.263-.677-2.152-.572-.58-1.474-.883-2.681-.904.025.352.162 1.512.888 2.15.593.524 1.594.713 2.136.78l-.032.203zM13.577 15.282c-.058 0-.107-.037-.114-.088-.01-.055-.215-1.353.73-2.313.635-.647 1.636-.976 2.976-.976.03 0 .06.01.083.03.024.02.035.045.033.073 0 .066-.035 1.581-.962 2.395-.925.813-2.67.877-2.744.879h-.002zm3.472-3.174c-1.208.018-2.107.324-2.68.903-.737.747-.713 1.752-.688 2.06.392-.027 1.745-.168 2.48-.813.725-.636.862-1.796.887-2.15z" }),
        React__default['default'].createElement("path", { fill: "#B56C00", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#B56C00", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#B56C00", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M18.682 10.177c-.1-.209-.212-.416-.339-.618-1.87-2.993-6.012-4.019-9.251-2.29-3.24 1.727-4.35 5.554-2.48 8.547.128.204.265.397.412.582-1.371-2.883-.202-6.319 2.818-7.93 3.02-1.61 6.823-.829 8.84 1.71z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#9A6AFF", d: "M16.71 3.102A1.9 1.9 0 1013 2.525v3.642a1.333 1.333 0 002.602.405l1.107-3.47zM8.29 3.102A1.9 1.9 0 1112 2.525v3.642a1.333 1.333 0 01-2.602.405L8.29 3.102z" }),
        React__default['default'].createElement("path", { fill: "#A880FD", d: "M19.899 24.142l-8.045-8.046a.5.5 0 010-.707l3.535-3.535a.5.5 0 01.707 0l8.046 8.045a.5.5 0 01-.282.848l-2.349.341a.5.5 0 00-.423.423l-.34 2.349a.5.5 0 01-.85.282z" }),
        React__default['default'].createElement("path", { fill: "#A880FD", d: "M5.198 24.142l8.045-8.046a.5.5 0 000-.707l-3.535-3.535a.5.5 0 00-.708 0L.955 19.898a.5.5 0 00.282.848l2.348.341a.5.5 0 01.423.423l.341 2.349a.5.5 0 00.849.282z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M12.526 22.32c4.913 0 8.896-3.682 8.896-8.223 0-4.54-3.983-8.222-8.896-8.222S3.63 9.556 3.63 14.097c0 4.541 3.983 8.222 8.896 8.222z" }),
        React__default['default'].createElement("path", { fill: "#9A6AFF", d: "M16.91 19.78c4.239-2.261 5.691-7.27 3.244-11.187-2.448-3.917-7.868-5.26-12.108-2.998-4.239 2.262-5.691 7.27-3.244 11.188C7.25 20.7 12.67 22.041 16.91 19.78z" }),
        React__default['default'].createElement("path", { fill: "#CAB3F8", d: "M7.873 5.688l13.183 9.069a7.755 7.755 0 01-.634 1.566L6.432 6.7c.44-.38.923-.719 1.44-1.01zm-3 2.79l14.149 9.733a8.86 8.86 0 01-2.554 1.791L3.75 11.254c.19-1 .578-1.936 1.123-2.775z" }),
        React__default['default'].createElement("path", { fill: "#8F5BFD", d: "M15.864 18.107c3.24-1.728 4.349-5.555 2.479-8.548-1.87-2.993-6.012-4.019-9.252-2.29-3.239 1.727-4.349 5.554-2.478 8.547 1.87 2.993 6.012 4.019 9.25 2.291z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M18.682 10.177a6.17 6.17 0 00-.34-.618c-1.87-2.993-6.011-4.019-9.25-2.29-3.24 1.727-4.35 5.554-2.48 8.547.128.204.265.397.412.582-1.371-2.883-.202-6.319 2.818-7.93 3.02-1.61 6.823-.829 8.84 1.71z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M13.577 15.18s-.533-3.173 3.592-3.173c0 0-.023 1.53-.927 2.325-.904.795-2.665.848-2.665.848z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M17.169 12.007s-.023 1.531-.927 2.325c-.904.793-2.665.848-2.665.848.78-1.243 1.833-2.09 2.59-2.602.446-.3 1.002-.571 1.002-.571zM12.372 13.593s.533-3.173-3.593-3.173c0 0 .024 1.53.927 2.325.904.795 2.666.848 2.666.848z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M12.372 13.593s-1.764-.055-2.666-.848c-.903-.793-.927-2.325-.927-2.325s.788.393 1.101.586c.874.543 2.03 1.432 2.492 2.587z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#7645D9", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" }),
        React__default['default'].createElement("path", { fill: "#452A7A", d: "M11.892 13.654c-.572-.071-1.627-.272-2.269-.838-.925-.814-.96-2.331-.96-2.394 0-.027.012-.053.033-.073.02-.02.053-.03.083-.03 1.34 0 2.341.329 2.979.975.943.96.739 2.258.73 2.313l-.23-.03.114.014-.114-.014c.002-.012.197-1.263-.677-2.152-.572-.58-1.474-.883-2.681-.904.025.352.162 1.512.888 2.15.593.524 1.594.713 2.136.78l-.032.203zM13.577 15.282c-.058 0-.107-.037-.114-.088-.01-.055-.215-1.353.73-2.313.635-.647 1.636-.976 2.976-.976.03 0 .06.01.083.03.024.02.035.045.033.073 0 .066-.035 1.581-.962 2.395-.925.813-2.67.877-2.744.879h-.002zm3.472-3.174c-1.208.018-2.107.324-2.68.903-.737.747-.713 1.752-.688 2.06.392-.027 1.745-.168 2.48-.813.725-.636.862-1.796.887-2.15z" }),
        React__default['default'].createElement("path", { fill: "#452A7A", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#452A7A", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#452A7A", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#C0C4C6", d: "M16.71 3.102A1.9 1.9 0 1013 2.525v3.642a1.333 1.333 0 002.602.405l1.107-3.47zM8.29 3.102A1.9 1.9 0 1112 2.525v3.642a1.333 1.333 0 01-2.602.405L8.29 3.102z" }),
        React__default['default'].createElement("path", { fill: "#7D7D7D", d: "M19.899 24.142l-8.045-8.046a.5.5 0 010-.707l3.535-3.535a.5.5 0 01.707 0l8.046 8.045a.5.5 0 01-.282.848l-2.349.341a.5.5 0 00-.423.423l-.34 2.349a.5.5 0 01-.85.282z" }),
        React__default['default'].createElement("path", { fill: "#7D7D7D", d: "M5.198 24.142l8.045-8.046a.5.5 0 000-.707l-3.535-3.535a.5.5 0 00-.708 0L.955 19.898a.5.5 0 00.282.848l2.348.341a.5.5 0 01.423.423l.341 2.349a.5.5 0 00.849.282z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M12.526 22.32c4.913 0 8.896-3.682 8.896-8.223 0-4.54-3.983-8.222-8.896-8.222S3.63 9.556 3.63 14.097c0 4.541 3.983 8.222 8.896 8.222z" }),
        React__default['default'].createElement("path", { fill: "#C0C4C6", d: "M16.91 19.78c4.239-2.261 5.691-7.27 3.244-11.187-2.448-3.917-7.868-5.26-12.108-2.998-4.239 2.262-5.691 7.27-3.244 11.188C7.25 20.7 12.67 22.041 16.91 19.78z" }),
        React__default['default'].createElement("path", { fill: "#D8D8D8", d: "M7.873 5.688l13.183 9.069a7.755 7.755 0 01-.634 1.566L6.432 6.7c.44-.38.923-.719 1.44-1.01zm-3 2.79l14.149 9.733a8.86 8.86 0 01-2.554 1.791L3.75 11.254c.19-1 .578-1.936 1.123-2.775z" }),
        React__default['default'].createElement("path", { fill: "#B2B2B2", d: "M15.864 18.107c3.24-1.728 4.349-5.555 2.479-8.548-1.87-2.993-6.012-4.019-9.252-2.29-3.239 1.727-4.349 5.554-2.478 8.547 1.87 2.993 6.012 4.019 9.25 2.291z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M18.682 10.177a6.17 6.17 0 00-.34-.618c-1.87-2.993-6.011-4.019-9.25-2.29-3.24 1.727-4.35 5.554-2.48 8.547.128.204.265.397.412.582-1.371-2.883-.202-6.319 2.818-7.93 3.02-1.61 6.823-.829 8.84 1.71z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M13.577 15.18s-.533-3.173 3.592-3.173c0 0-.023 1.53-.927 2.325-.904.795-2.665.848-2.665.848z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M17.169 12.007s-.023 1.531-.927 2.325c-.904.793-2.665.848-2.665.848.78-1.243 1.833-2.09 2.59-2.602.446-.3 1.002-.571 1.002-.571zM12.372 13.593s.533-3.173-3.593-3.173c0 0 .024 1.53.927 2.325.904.795 2.666.848 2.666.848z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M12.372 13.593s-1.764-.055-2.666-.848c-.903-.793-.927-2.325-.927-2.325s.788.393 1.101.586c.874.543 2.03 1.432 2.492 2.587z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#969696", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" }),
        React__default['default'].createElement("path", { fill: "#7D7D7D", d: "M11.892 13.654c-.572-.071-1.627-.272-2.269-.838-.925-.814-.96-2.331-.96-2.394 0-.027.012-.053.033-.073.02-.02.053-.03.083-.03 1.34 0 2.341.329 2.979.975.943.96.739 2.258.73 2.313l-.23-.03.114.014-.114-.014c.002-.012.197-1.263-.677-2.152-.572-.58-1.474-.883-2.681-.904.025.352.162 1.512.888 2.15.593.524 1.594.713 2.136.78l-.032.203zM13.577 15.282c-.058 0-.107-.037-.114-.088-.01-.055-.215-1.353.73-2.313.635-.647 1.636-.976 2.976-.976.03 0 .06.01.083.03.024.02.035.045.033.073 0 .066-.035 1.581-.962 2.395-.925.813-2.67.877-2.744.879h-.002zm3.472-3.174c-1.208.018-2.107.324-2.68.903-.737.747-.713 1.752-.688 2.06.392-.027 1.745-.168 2.48-.813.725-.636.862-1.796.887-2.15z" }),
        React__default['default'].createElement("path", { fill: "#7D7D7D", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#7D7D7D", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.004v.204l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.03c.797-1.266 1.865-2.13 2.623-2.633l.14.163c-.74.49-1.783 1.334-2.56 2.569-.229.364-.449.71-.653 1.031z" }),
        React__default['default'].createElement("path", { fill: "#7D7D7D", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.086l.108.567-.229.034-.107-.568.228-.033zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#53DEE9", d: "M16.71 3.102A1.9 1.9 0 1013 2.525v3.642a1.333 1.333 0 002.602.405l1.107-3.47zM8.29 3.102A1.9 1.9 0 1112 2.525v3.642a1.333 1.333 0 01-2.602.405L8.29 3.102z" }),
        React__default['default'].createElement("path", { fill: "#1FC7D4", d: "M19.899 24.142l-8.045-8.046a.5.5 0 010-.707l3.535-3.535a.5.5 0 01.707 0l8.046 8.045a.5.5 0 01-.282.848l-2.349.341a.5.5 0 00-.423.423l-.34 2.349a.5.5 0 01-.85.282z" }),
        React__default['default'].createElement("path", { fill: "#1FC7D4", d: "M5.198 24.142l8.045-8.046a.5.5 0 000-.707l-3.535-3.535a.5.5 0 00-.708 0L.955 19.898a.5.5 0 00.282.848l2.348.341a.5.5 0 01.423.423l.341 2.349a.5.5 0 00.849.282z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M12.526 22.32c4.913 0 8.896-3.682 8.896-8.223 0-4.54-3.983-8.222-8.896-8.222S3.63 9.556 3.63 14.097c0 4.541 3.983 8.222 8.896 8.222z" }),
        React__default['default'].createElement("path", { fill: "#53DEE9", d: "M16.91 19.78c4.239-2.261 5.691-7.27 3.244-11.187-2.448-3.917-7.868-5.26-12.108-2.998-4.239 2.262-5.691 7.27-3.244 11.188C7.25 20.7 12.67 22.041 16.91 19.78z" }),
        React__default['default'].createElement("path", { fill: "#84F0F9", d: "M7.873 5.688l13.183 9.069a7.755 7.755 0 01-.634 1.566L6.432 6.7c.44-.38.923-.719 1.44-1.01zm-3 2.79l14.149 9.733a8.858 8.858 0 01-2.554 1.791L3.75 11.254c.19-1 .578-1.936 1.123-2.775z" }),
        React__default['default'].createElement("path", { fill: "#1FC7D4", d: "M15.864 18.107c3.24-1.728 4.349-5.555 2.479-8.548-1.87-2.993-6.012-4.019-9.252-2.29-3.239 1.727-4.349 5.554-2.478 8.547 1.87 2.993 6.012 4.019 9.25 2.291z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M18.682 10.177a6.17 6.17 0 00-.34-.618c-1.87-2.993-6.011-4.019-9.25-2.29-3.24 1.727-4.35 5.554-2.48 8.547.128.204.265.397.412.582-1.371-2.883-.202-6.319 2.818-7.93 3.02-1.61 6.823-.829 8.84 1.71z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M13.577 15.18s-.533-3.174 3.592-3.174c0 0-.023 1.53-.927 2.325-.904.796-2.665.849-2.665.849z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M17.169 12.006s-.023 1.532-.927 2.325c-.904.794-2.665.849-2.665.849.78-1.243 1.833-2.09 2.59-2.602.446-.301 1.002-.572 1.002-.572zM12.372 13.593s.533-3.173-3.593-3.173c0 0 .024 1.53.927 2.325.904.795 2.666.848 2.666.848z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M12.372 13.593s-1.764-.055-2.666-.848c-.903-.793-.927-2.325-.927-2.325s.788.393 1.101.586c.874.543 2.03 1.432 2.492 2.587z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.005v.203l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.031c.797-1.265 1.865-2.13 2.623-2.632l.14.162c-.74.49-1.783 1.335-2.56 2.57-.229.364-.449.71-.653 1.03z" }),
        React__default['default'].createElement("path", { fill: "#0098A1", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.085l.108.568-.229.034-.107-.568.228-.034zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" }),
        React__default['default'].createElement("path", { fill: "#017178", d: "M11.892 13.655c-.572-.072-1.627-.273-2.269-.839-.925-.813-.96-2.33-.96-2.394 0-.026.012-.053.033-.073.02-.02.053-.03.083-.03 1.34 0 2.341.329 2.979.976.943.96.739 2.258.73 2.313l-.23-.03.114.013-.114-.014c.002-.012.197-1.263-.677-2.152-.572-.58-1.474-.883-2.681-.903.025.352.162 1.511.888 2.15.593.523 1.594.712 2.136.78l-.032.203zM13.577 15.282c-.058 0-.107-.037-.114-.088-.01-.055-.215-1.353.73-2.313.635-.647 1.636-.976 2.976-.976.03 0 .06.01.083.03.024.02.035.045.033.073 0 .066-.035 1.581-.962 2.395-.925.813-2.67.877-2.744.879h-.002zm3.472-3.174c-1.208.018-2.107.324-2.68.903-.737.747-.713 1.752-.688 2.06.392-.027 1.745-.168 2.48-.813.725-.636.862-1.796.887-2.15z" }),
        React__default['default'].createElement("path", { fill: "#017178", d: "M13.09 18.604l-.232-.01c.003-.031.176-3.034-.595-4.966-.45-1.13-1.58-2.002-2.45-2.537l.132-.167c.897.552 2.065 1.457 2.536 2.637.788 1.969.611 5.012.61 5.043z" }),
        React__default['default'].createElement("path", { fill: "#017178", d: "M9.598 11.397l1.036.02-.005.204-1.036-.02.005-.204zM11.408 11.495l.106.675-.23.028-.106-.675.23-.028zM10.854 12.545l.962.005v.203l-.963-.004.002-.204zM13.025 16.26l-.202-.1.652-1.031c.797-1.265 1.865-2.13 2.623-2.632l.14.162c-.74.49-1.783 1.335-2.56 2.57-.229.364-.449.71-.653 1.03z" }),
        React__default['default'].createElement("path", { fill: "#017178", d: "M16.509 12.968l.02.203-1.126.083-.02-.203 1.126-.083zM14.81 13.085l.108.568-.229.034-.107-.568.228-.034zM15.489 14.065l.019.202-1.239.09-.019-.203 1.239-.09z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$15 = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { fill: "#c4c4c4", d: "M24.316 7.722c2.18.66 4.615 1.428 4.086 4.598a2.962 2.962 0 01-.268.94c.083.082.224.202.378.337l.586.525c.5.495 1.038 1.033 1.283 1.7 1.47-2.995 2.016-10.35 1.316-11.035-2.101-2.067-5.688-2.007-8.968-.15 1.077.792 1.582 1.772 1.587 3.085zm5.608.161a.984.984 0 110 1.968.984.984 0 010-1.968zm-2.066-3.592c.708 0 1.279.573 1.279 1.279 0 .707-.57 1.279-1.28 1.279a1.278 1.278 0 110-2.558zM3.16 13.038c.155-.134.295-.254.38-.334a3.171 3.171 0 01-.27-.957c-.526-3.156 1.908-3.925 4.088-4.584.005-1.187.418-2.1 1.29-2.849C5.546 2.79 2.272 2.854.303 4.79c-.653.64-.222 7.08 1.033 10.376.26-.622.765-1.132 1.24-1.601l.584-.526zm.566-8.968a1.279 1.279 0 11.002 2.558 1.279 1.279 0 01-.002-2.558zM1.659 9.63a.984.984 0 11-.001-1.967.984.984 0 01.001 1.967zM9.693 24.987c-.262-.347-.272-.725-.279-1.03-.009-.36-.015-.558-.344-.777-.12-.07-.62-.003-.89.034-.413.055-.842.114-1.186.027-1.35-.48-1.583-.734-1.755-1.43-.072-.287-.16-.644-.572-1.263a3.645 3.645 0 00-1.118-.856c-.443.85-.504 2.057.078 3.828 1.79 5.452 3.048 5.376 6.39 5.173.717-.043 1.392-.303 2.008-.708-.34-.69-.96-1.393-1.49-1.989-.325-.365-.626-.705-.842-1.009z" }),
        React__default['default'].createElement("path", { fill: "#c4c4c4", d: "M22.488 25.2c.092-.124.101-.274.107-.53.01-.405.026-1.017.739-1.49.384-.258.925-.185 1.499-.108.317.043.674.089.811.059 1.046-.373 1.066-.456 1.153-.798.077-.316.198-.794.726-1.583.297-.347.65-.623 1.026-.866-.32-.761-.925-1.258-1.69-1.58.905-.123 1.806-.523 2.727-1.39.191-.792-.29-1.347-1.11-2.16l-.538-.484c-.653-.56-.897-.77-.623-1.346.067-.139.157-.329.212-.733.387-2.33-1.09-2.9-3.534-3.639l-.59-.179.02-.349c.077-1.304-.372-2.152-1.516-2.872-.737.496-1.45 1.079-2.118 1.756-.355.364-.68.74-.982 1.126a.966.966 0 00-.06-.39.77.77 0 00-.472-.475c-.287-.1-.54-.093-.743.023-.268.154-.464.497-.596 1.04-.124.494-.762 2.412-.938 3.708-.177-1.296-.813-3.214-.935-3.708-.137-.543-.33-.886-.599-1.04-.204-.116-.454-.123-.743-.023a.774.774 0 00-.472.475.982.982 0 00-.06.379c-.302-.382-.62-.758-.973-1.115a13.38 13.38 0 00-2.722-2.135c-.943.683-1.31 1.494-1.238 2.69l.02.349-.592.179c-2.444.738-3.923 1.308-3.535 3.625.055.418.146.608.213.746.273.576.03.787-.622 1.348l-.542.481c-.824.818-1.31 1.374-1.11 2.174l-.134.034c.084.12.17.243.259.333.992 1.009 1.959 1.437 2.93 1.569-.41.173-.774.395-1.076.678.493.275.936.604 1.305 1.033.528.79.648 1.268.726 1.584.085.342.106.423 1.152.797.137.03.496-.017.812-.059.573-.076 1.114-.148 1.499.108.712.473.728 1.086.739 1.49.006.256.014.407.107.53.207.289.488.604.79.944.53.596 1.14 1.286 1.539 2.025 1.379-1.25 2.37-3.236 2.729-5.054.089.673.259 1.117.526 1.117.278 0 .452-.475.539-1.184.417 2.217 1.782 4.699 3.657 5.803.4-.72.994-1.39 1.51-1.972.302-.337.583-.652.79-.94zm-7.074-5.568a2.543 2.543 0 00-.873-1.255c.249-.311.45-.654.618-1.013.067.713.205 1.284.314 1.833-.026.12-.043.271-.059.435zm.536-7.193c-.141 0-.273.175-.39.484-.282-1.382-.897-2.808-1.817-4.153.107.03.222.046.33.016.277-.063.481-.382.431-.687 0-.009-.027-.192-.156-.225-.116-.033-.27.073-.455.312l.047.044c.203-.26.32-.304.383-.29l.01.001c.087.025.11.168.11.172.04.27-.137.554-.383.608a.585.585 0 01-.378-.036c-.133-.19-.27-.379-.415-.567a.857.857 0 01.038-.45.715.715 0 01.431-.436c.271-.095.506-.087.694.023.252.143.437.47.567.999.126.517.852 2.675.969 3.933-.007.087-.015.173-.016.252zm.601 7.313a3.538 3.538 0 00-.092-.518c.1-.572.236-1.284.292-2.067.184.434.419.84.71 1.21-.424.328-.738.777-.91 1.375zm2.174-11.619c-.142.18-.272.363-.402.548a.586.586 0 01-.391.04c-.247-.055-.425-.338-.38-.61 0-.003.02-.146.11-.17l.006-.001c.065-.014.18.029.383.29l.046-.045c-.182-.238-.337-.344-.453-.312-.13.034-.157.218-.157.225-.05.306.153.624.431.687.114.03.23.015.346-.019-.968 1.41-1.597 2.914-1.856 4.36-.11-.354-.231-.589-.366-.664a3.641 3.641 0 00-.02-.28c.123-1.259.845-3.417.97-3.933.13-.528.316-.856.568-1 .19-.109.42-.117.694-.021.197.07.35.223.431.434a.93.93 0 01.04.471z" }),
        React__default['default'].createElement("path", { fill: "#c4c4c4", d: "M27.656 22.547c-.172.696-.406.95-1.755 1.43-.344.086-.773.028-1.188-.027-.267-.037-.769-.103-.888-.035-.33.22-.335.418-.344.778-.008.303-.018.683-.278 1.03-.217.303-.518.643-.844 1.01-.472.53-1.015 1.145-1.368 1.761.32.11.654.179.995.2 3.342.203 4.6.279 6.39-5.174.37-1.122.477-2.02.4-2.746a3.56 3.56 0 00-.547.508c-.414.62-.5.977-.573 1.265z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$13 = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { fill: "#c4c4c4", d: "M62.658 48.55c-3.114-4.518-7.19-7.888-11.488-10.882-3.488-2.426-7.46-1.91-11.159-.327-2.267.97-4.507 1.086-6.685.382-2.903-.94-5.825-1.042-8.79-1.051-1.27-.005-2.325.47-3.083 1.538-.423.596 3.039 3.074 6.007 3.074-.551 1.177-10.148-1.313-11.426-1.211L8.77 39.08c-2.578-.226-2.576-1.267-5.112.266-.086.055-.21.055-.316.048-1.41-.088-2.208.393-2.991 1.39-.454.578-.416 1.285-.175 1.96.254.703.9.522 1.434.746 3.246 1.376 4.293 2.048 8.698 3.209 3.13.83 6.181 1.84 9.309 2.596 1.292.314 2.608.547 3.773 1.248 2.48 1.49 5.11 1.944 7.942 1.807 3.21-.156 6.433-.02 9.65-.039 5.65-.028 9.94 2.39 12.845 7.71L72 59.982c-3.966-4.96-5.715-6.162-9.342-11.431zM37.165 13.379a8.535 8.535 0 00-.909-.186 8.728 8.728 0 00-1.07-.059 8.088 8.088 0 00-2.268.356 9.115 9.115 0 00-1.04.406c-.314.16-.633.33-.9.521a4.88 4.88 0 00-.73.606 3.904 3.904 0 00-.885 1.314 3.226 3.226 0 00-.174.616c-.035.19-.035.373-.035.52-.004.07.001.138.007.198.08-.064.164-.134.256-.207.462-.362 1.11-.827 1.82-1.243.353-.208.728-.398 1.083-.568l.535-.227c.176-.062.342-.123.496-.178.16-.045.306-.086.435-.124.127-.04.248-.055.345-.076l.303-.059-.295.075c-.093.026-.21.048-.33.095l-.416.145c-.147.062-.3.13-.47.202l-.497.25c-.332.186-.677.392-.998.615-.648.443-1.228.93-1.636 1.309-.116.105-.214.202-.302.287.114 0 .257.004.417-.007.201-.01.456-.012.712-.035a14.516 14.516 0 001.704-.227c.294-.056.584-.128.874-.203.282-.083.565-.166.83-.269.264-.106.526-.202.769-.325a7.599 7.599 0 001.325-.788c.197-.134.381-.3.558-.448.174-.146.342-.315.499-.468.16-.15.311-.302.452-.453.149-.155.281-.289.39-.4.117-.107.208-.227.276-.293l.107-.119s-.049-.035-.141-.088c-.092-.05-.234-.14-.417-.214-.177-.071-.419-.185-.68-.251z" }),
        React__default['default'].createElement("path", { fill: "#c4c4c4", d: "M43 20.47v-1.547H28.826a18.83 18.83 0 01.713-4.075c.17-.555.319-1.052.412-1.482 1.228-.054 2.203-.763 2.203-1.635a1.56 1.56 0 00-.04-.34c.074.065.147.134.224.187.916.641 2.405.641 3.32 0 .886-.622.907-1.613.083-2.259 1.269-.02 2.29-.747 2.29-1.642 0-.909-1.05-1.647-2.345-1.647-.105 0-.214.008-.324.017.059-.035.13-.07.182-.108.916-.642.916-1.685 0-2.33-.917-.64-2.403-.64-3.319 0-.071.051-.138.113-.204.175.003-.047.009-.094.009-.138C32.03 2.736 30.978 2 29.68 2c-1.252 0-2.265.689-2.333 1.554-.92-.598-2.353-.588-3.25.04-.916.643-.916 1.686 0 2.33.102.07.225.141.353.207-.1-.007-.2-.013-.295-.013-1.296 0-2.348.736-2.348 1.646 0 .904 1.043 1.638 2.329 1.644-.89.644-.884 1.672.023 2.308.91.639 2.38.64 3.298.012v.003c0 .76.741 1.395 1.742 1.584-.09.408-.235.887-.398 1.424-.21.682-.438 1.44-.587 2.19-.005-.013-.005-.022-.01-.034a2.75 2.75 0 00-.63-.934 3.44 3.44 0 00-.518-.431 5.375 5.375 0 00-.64-.37 6.827 6.827 0 00-.737-.289 5.666 5.666 0 00-2.37-.21 6.05 6.05 0 00-.648.13c-.186.048-.357.13-.483.183-.13.052-.23.116-.294.151-.066.038-.1.063-.1.063l.075.084c.048.048.114.132.197.208l.276.284c.1.107.208.216.321.322.115.108.232.228.356.332.124.105.254.224.396.318.276.207.591.395.941.559.172.088.358.157.547.23.188.073.389.134.59.192.205.053.411.104.62.145a11.012 11.012 0 001.21.162c.18.017.363.018.505.024.095.006.173.004.245.004-.013.233-.01.534.006.871H16v1.549h12.256c.049.267.108.532.177.793H16.92S18.389 31 23.029 31h12.046c5.812 0 6.737-9.734 6.737-9.734H28.958a6.421 6.421 0 01-.113-.793H43v-.001zM27.805 7.677c0-.792.918-1.437 2.049-1.437 1.127 0 2.049.645 2.049 1.437 0 .793-.92 1.437-2.05 1.437s-2.048-.644-2.048-1.437zm.095 10.173c-.29-.269-.701-.615-1.162-.93a8.359 8.359 0 00-.708-.436c-.123-.063-.242-.121-.352-.179-.12-.05-.23-.099-.333-.143l-.295-.103c-.086-.034-.17-.049-.235-.067l-.21-.054.215.042c.067.016.155.026.244.055l.31.087.353.127c.12.052.248.104.381.161.254.12.518.256.77.403.475.279.901.583 1.224.834-.014.12-.026.241-.033.36a5.337 5.337 0 00-.17-.157z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M11.708 10.499s4.21-1.054 3.939 2.662c0 0-3.438 1.416-3.939-2.662zM24.847 12.555s-3.895-2.906-5.287-.204c-.006 0 2.103 3.46 5.287.204z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M11.708 10.499l3.939 2.662c.272-3.722-3.939-2.662-3.939-2.662zM24.828 12.572l.019-.017s-3.895-2.906-5.287-.204c0 0 .007.005.013.022l5.255.199z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M13.863 11.598l3.37 2.281-.367.455-3.37-2.28.367-.456zM17.269 11.983l4.935.194-.027.566-4.935-.194.027-.566z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M16.71 16.7l-.593-.158.086-.272c1.428-4.565.78-8.62.773-8.66l-.05-.278.613-.085.05.278c.03.17.68 4.214-.786 8.898l-.093.278z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M26.392 20.314H6.607l1.237 7.704c.68.623 3.877 1.699 8.656 1.699 4.78 0 7.914-1.02 8.656-1.7l1.236-7.703z" }),
        React__default['default'].createElement("path", { fill: "#8D2323", d: "M7.028 22.92c1.978.476 5.484.793 9.472.793 3.988 0 7.493-.317 9.472-.793l.42-2.606H6.607l.42 2.606z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M16.5 16.916c-6.183 0-11.19.759-11.19 1.7v1.698c0 .94 5.007 1.7 11.19 1.7s11.19-.76 11.19-1.7v-1.699c0-.94-5.007-1.699-11.19-1.699z" }),
        React__default['default'].createElement("path", { fill: "#CE4C4C", fillRule: "evenodd", d: "M16.5 16.916c-6.183 0-11.19.759-11.19 1.7v1.698c0 .861 4.234 1.575 9.718 1.683a9.549 9.549 0 001.472-5.081z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#862727", d: "M16.5 20.314c6.18 0 11.19-.76 11.19-1.699 0-.938-5.01-1.699-11.19-1.699s-11.19.76-11.19 1.7c0 .938 5.01 1.698 11.19 1.698z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M11.863 4.954c0 1.29 2.003 1.359 2.003 1.359s-1.447.646-1.002 1.801c.446 1.156 2.337-.578 2.337-.578s-1.112 2.243.52 2.243c1.632 0 1.558-2.209 1.558-2.209s.65 2.362 1.892 1.224c1.243-1.139-.705-1.903-.705-1.903s2.671.815 2.671-.782-2.189-.884-2.189-.884 2.337-1.529 1.262-2.514c-1.076-.986-2.263.85-2.263.85s.593-2.278-1.076-2.278c-1.67 0-1.298 2.175-1.298 2.175s-.742-1.45-1.818-1.11c-1.076.34.074 1.994.074 1.994s-1.966-.68-1.966.612z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M23.783 19.907c-1.953.255-4.5.407-7.283.407-2.782 0-5.33-.152-7.283-.407.785-.697 2.522-2.119 4.507-2.934.903-.374 1.849-.618 2.782-.618.934 0 1.88.25 2.782.618 1.973.815 3.716 2.237 4.495 2.934z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M18.948 5.225s2.337-1.529 1.262-2.514c-.452-.414-.928-.329-1.323-.091-.613 2.719-3.06 4.82-6.103 5.183.012.102.037.204.08.317.446 1.155 2.338-.578 2.338-.578s-1.113 2.243.519 2.243c1.632 0 1.558-2.209 1.558-2.209s.65 2.362 1.892 1.223c1.243-1.138-.705-1.903-.705-1.903s2.671.81 2.671-.787-2.189-.884-2.189-.884z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M16.5 6.947c.854 0 1.546-.634 1.546-1.416 0-.782-.692-1.416-1.546-1.416-.854 0-1.546.634-1.546 1.416 0 .782.692 1.416 1.546 1.416z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.5 7.23c-1.02 0-1.855-.764-1.855-1.699 0-.934.835-1.699 1.855-1.699s1.855.765 1.855 1.7c0 .934-.835 1.698-1.855 1.698zm0-2.832c-.68 0-1.237.51-1.237 1.133s.557 1.133 1.237 1.133 1.236-.51 1.236-1.133-.556-1.133-1.236-1.133z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M15.72 10.063c-.574 0-.859-.238-1-.437-.242-.345-.223-.827-.13-1.251-.427.266-.947.492-1.38.402-.21-.046-.488-.176-.636-.567-.284-.736.068-1.33.507-1.727-.736-.187-1.527-.635-1.527-1.53 0-.492.24-.747.445-.872.352-.226.84-.226 1.236-.17-.179-.39-.34-.895-.185-1.297.099-.255.31-.442.606-.532.674-.215 1.218.096 1.601.464.05-.374.173-.781.458-1.087.278-.306.668-.459 1.156-.459.47 0 .853.159 1.107.453.284.329.37.782.383 1.19.278-.238.63-.454 1.014-.499.266-.028.662.006 1.051.363.272.249.402.56.371.895-.043.504-.433.996-.829 1.376.328.006.668.062.947.243.352.227.531.595.531 1.082 0 .55-.272.85-.507 1.003-.352.232-.834.289-1.292.272.105.136.186.294.223.464.08.391-.08.776-.483 1.15-.457.42-.86.43-1.119.362-.358-.09-.63-.373-.835-.69-.105.34-.271.69-.55.957-.309.294-.698.441-1.162.441zm-.518-2.81c.061 0 .123.017.173.051a.27.27 0 01.105.351c-.229.46-.495 1.314-.248 1.666.031.045.124.175.483.175.29 0 .525-.085.717-.266.563-.527.532-1.643.532-1.654-.006-.142.11-.266.266-.289.154-.017.302.074.34.21.136.487.488 1.217.859 1.308.142.034.315-.04.513-.215.247-.227.359-.448.316-.64-.08-.391-.711-.72-.922-.799-.154-.062-.228-.22-.167-.362a.325.325 0 01.39-.17c.39.119 1.52.357 2.015.028.167-.113.248-.289.248-.544 0-.3-.087-.504-.272-.623-.408-.266-1.243-.079-1.503.006-.148.045-.309-.011-.377-.136-.074-.125-.03-.278.093-.362.37-.244 1.354-1.02 1.41-1.637.018-.17-.044-.318-.192-.448-.173-.158-.353-.226-.538-.204-.526.063-1.082.76-1.243.997-.08.119-.24.17-.383.119-.142-.05-.223-.193-.186-.328.087-.323.217-1.258-.154-1.688-.136-.159-.34-.238-.619-.238-.302 0-.525.085-.692.26-.396.425-.352 1.292-.303 1.586.025.142-.068.272-.216.317a.32.32 0 01-.371-.153c-.006-.01-.637-1.217-1.435-.962-.154.05-.197.124-.222.187-.136.356.247 1.087.457 1.387a.262.262 0 01-.018.329.317.317 0 01-.347.085c-.247-.085-1.032-.278-1.372-.063-.043.029-.173.114-.173.408 0 1.003 1.688 1.076 1.706 1.076.143.006.26.097.29.227.032.13-.036.255-.166.311-.05.023-1.193.55-.847 1.45.068.176.154.193.192.204.37.08 1.193-.481 1.638-.883a.384.384 0 01.223-.074zM14.354 13.682c-.426 0-.896-.074-1.341-.312-.89-.464-1.435-1.421-1.608-2.843-.018-.136.08-.266.223-.306.086-.023 2.127-.521 3.394.43.705.527 1.014 1.377.934 2.527a.286.286 0 01-.18.238c-.043.017-.655.266-1.421.266zm-2.3-2.963c.18 1.088.6 1.819 1.262 2.164.76.397 1.663.193 2.028.08.03-.861-.21-1.49-.717-1.87-.786-.589-2.035-.464-2.572-.373zM22.157 14.231c-.099 0-.192-.005-.284-.017-1.614-.164-2.548-1.67-2.585-1.733l.538-.277c.006.01.822 1.314 2.115 1.444.779.08 1.601-.278 2.442-1.065-.686-.447-2.541-1.524-3.753-.94l-.284-.504c1.867-.9 4.581 1.099 4.698 1.184a.267.267 0 01.112.198.248.248 0 01-.08.21c-.971 1.002-1.948 1.5-2.919 1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.863 11.598l3.37 2.281-.367.455-3.37-2.28.367-.456zM17.269 11.983l4.935.194-.027.566-4.935-.194.027-.566z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.797 16.429l-.594-.159c1.428-4.565.78-8.62.773-8.66l.612-.085c.025.17.674 4.214-.791 8.904zM16.5 20.598c-3.005 0-5.837-.176-7.963-.504C5.365 19.612 5 19.023 5 18.615h.618c0 .097.513.544 3.017.924 2.097.317 4.891.492 7.865.492s5.762-.175 7.864-.492c2.505-.38 3.018-.828 3.018-.924H28c0 .408-.365.997-3.537 1.479-2.126.328-4.958.504-7.963.504z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M17.743 22.286l-.012-.567c2.701-.045 5.2-.238 7.023-.55 2.176-.367 2.622-.77 2.622-.86v-1.7c0-.005-.124-.385-2.146-.77-1.502-.289-3.623-.498-5.966-.589l.024-.566c2.38.09 4.539.306 6.072.6 1.8.346 2.64.77 2.64 1.326v1.699c0 .38-.321.946-3.128 1.416-1.861.317-4.39.515-7.13.56zM16.5 22.297c-3.005 0-5.837-.176-7.963-.504C5.365 21.31 5 20.723 5 20.314v-1.699c0-.555.835-.98 2.628-1.325 1.527-.295 3.678-.51 6.053-.6l.024.566c-2.343.09-4.457.3-5.954.589-2.01.39-2.133.765-2.133.77v1.7c0 .096.513.543 3.017.923 2.097.317 4.891.492 7.865.492v.567z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.5 30c-4.73 0-8.087-1.065-8.872-1.784a.244.244 0 01-.087-.159l-1.107-6.87.613-.085 1.088 6.768c.754.584 3.808 1.564 8.365 1.564 4.415 0 7.53-.907 8.365-1.558l1.088-6.768.613.084-1.1 6.87a.315.315 0 01-.088.16C24.624 28.906 21.545 30 16.5 30zM23.573 20.11c-1.175-1.042-4.223-3.477-7.073-3.477-2.85 0-5.892 2.43-7.067 3.472L9 19.697c1.23-1.093 4.427-3.63 7.5-3.63 3.073 0 6.27 2.543 7.5 3.636l-.427.407z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M11.708 10.499s4.21-1.054 3.939 2.662c0 0-3.438 1.416-3.939-2.662zM24.847 12.555s-3.895-2.906-5.287-.204c-.006 0 2.103 3.46 5.287.204z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M11.708 10.499l3.939 2.662c.272-3.722-3.939-2.662-3.939-2.662zM24.828 12.572l.019-.017s-3.895-2.906-5.287-.204c0 0 .007.005.013.022l5.255.199z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M13.863 11.598l3.37 2.281-.367.455-3.37-2.28.367-.456zM17.269 11.983l4.935.194-.027.566-4.935-.194.027-.566z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M16.71 16.7l-.593-.158.086-.272c1.428-4.565.78-8.62.773-8.66l-.05-.278.613-.085.05.278c.03.17.68 4.214-.786 8.898l-.093.278z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M26.392 20.314H6.607l1.237 7.704c.68.623 3.877 1.699 8.656 1.699 4.78 0 7.914-1.02 8.656-1.7l1.236-7.703z" }),
        React__default['default'].createElement("path", { fill: "#8D2323", d: "M7.028 22.92c1.978.476 5.484.793 9.472.793 3.988 0 7.493-.317 9.472-.793l.42-2.606H6.607l.42 2.606z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M16.5 16.916c-6.183 0-11.19.759-11.19 1.7v1.698c0 .94 5.007 1.7 11.19 1.7s11.19-.76 11.19-1.7v-1.699c0-.94-5.007-1.699-11.19-1.699z" }),
        React__default['default'].createElement("path", { fill: "#CE4C4C", fillRule: "evenodd", d: "M16.5 16.916c-6.183 0-11.19.759-11.19 1.7v1.698c0 .861 4.234 1.575 9.718 1.683a9.549 9.549 0 001.472-5.081z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#862727", d: "M16.5 20.314c6.18 0 11.19-.76 11.19-1.699 0-.938-5.01-1.699-11.19-1.699s-11.19.76-11.19 1.7c0 .938 5.01 1.698 11.19 1.698z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M11.863 4.954c0 1.29 2.003 1.359 2.003 1.359s-1.447.646-1.002 1.801c.446 1.156 2.337-.578 2.337-.578s-1.112 2.243.52 2.243c1.632 0 1.558-2.209 1.558-2.209s.65 2.362 1.892 1.224c1.243-1.139-.705-1.903-.705-1.903s2.671.815 2.671-.782-2.189-.884-2.189-.884 2.337-1.529 1.262-2.514c-1.076-.986-2.263.85-2.263.85s.593-2.278-1.076-2.278c-1.67 0-1.298 2.175-1.298 2.175s-.742-1.45-1.818-1.11c-1.076.34.074 1.994.074 1.994s-1.966-.68-1.966.612z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M23.783 19.907c-1.953.255-4.5.407-7.283.407-2.782 0-5.33-.152-7.283-.407.785-.697 2.522-2.119 4.507-2.934.903-.374 1.849-.618 2.782-.618.934 0 1.88.25 2.782.618 1.973.815 3.716 2.237 4.495 2.934z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M18.948 5.225s2.337-1.529 1.262-2.514c-.452-.414-.928-.329-1.323-.091-.613 2.719-3.06 4.82-6.103 5.183.012.102.037.204.08.317.446 1.155 2.338-.578 2.338-.578s-1.113 2.243.519 2.243c1.632 0 1.558-2.209 1.558-2.209s.65 2.362 1.892 1.223c1.243-1.138-.705-1.903-.705-1.903s2.671.81 2.671-.787-2.189-.884-2.189-.884z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M16.5 6.947c.854 0 1.546-.634 1.546-1.416 0-.782-.692-1.416-1.546-1.416-.854 0-1.546.634-1.546 1.416 0 .782.692 1.416 1.546 1.416z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.5 7.23c-1.02 0-1.855-.764-1.855-1.699 0-.934.835-1.699 1.855-1.699s1.855.765 1.855 1.7c0 .934-.835 1.698-1.855 1.698zm0-2.832c-.68 0-1.237.51-1.237 1.133s.557 1.133 1.237 1.133 1.236-.51 1.236-1.133-.556-1.133-1.236-1.133z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M15.72 10.063c-.574 0-.859-.238-1-.437-.242-.345-.223-.827-.13-1.251-.427.266-.947.492-1.38.402-.21-.046-.488-.176-.636-.567-.284-.736.068-1.33.507-1.727-.736-.187-1.527-.635-1.527-1.53 0-.492.24-.747.445-.872.352-.226.84-.226 1.236-.17-.179-.39-.34-.895-.185-1.297.099-.255.31-.442.606-.532.674-.215 1.218.096 1.601.464.05-.374.173-.781.458-1.087.278-.306.668-.459 1.156-.459.47 0 .853.159 1.107.453.284.329.37.782.383 1.19.278-.238.63-.454 1.014-.499.266-.028.662.006 1.051.363.272.249.402.56.371.895-.043.504-.433.996-.829 1.376.328.006.668.062.947.243.352.227.531.595.531 1.082 0 .55-.272.85-.507 1.003-.352.232-.834.289-1.292.272.105.136.186.294.223.464.08.391-.08.776-.483 1.15-.457.42-.86.43-1.119.362-.358-.09-.63-.373-.835-.69-.105.34-.271.69-.55.957-.309.294-.698.441-1.162.441zm-.518-2.81c.061 0 .123.017.173.051a.27.27 0 01.105.351c-.229.46-.495 1.314-.248 1.666.031.045.124.175.483.175.29 0 .525-.085.717-.266.563-.527.532-1.643.532-1.654-.006-.142.11-.266.266-.289.154-.017.302.074.34.21.136.487.488 1.217.859 1.308.142.034.315-.04.513-.215.247-.227.359-.448.316-.64-.08-.391-.711-.72-.922-.799-.154-.062-.228-.22-.167-.362a.325.325 0 01.39-.17c.39.119 1.52.357 2.015.028.167-.113.248-.289.248-.544 0-.3-.087-.504-.272-.623-.408-.266-1.243-.079-1.503.006-.148.045-.309-.011-.377-.136-.074-.125-.03-.278.093-.362.37-.244 1.354-1.02 1.41-1.637.018-.17-.044-.318-.192-.448-.173-.158-.353-.226-.538-.204-.526.063-1.082.76-1.243.997-.08.119-.24.17-.383.119-.142-.05-.223-.193-.186-.328.087-.323.217-1.258-.154-1.688-.136-.159-.34-.238-.619-.238-.302 0-.525.085-.692.26-.396.425-.352 1.292-.303 1.586.025.142-.068.272-.216.317a.32.32 0 01-.371-.153c-.006-.01-.637-1.217-1.435-.962-.154.05-.197.124-.222.187-.136.356.247 1.087.457 1.387a.262.262 0 01-.018.329.317.317 0 01-.347.085c-.247-.085-1.032-.278-1.372-.063-.043.029-.173.114-.173.408 0 1.003 1.688 1.076 1.706 1.076.143.006.26.097.29.227.032.13-.036.255-.166.311-.05.023-1.193.55-.847 1.45.068.176.154.193.192.204.37.08 1.193-.481 1.638-.883a.384.384 0 01.223-.074zM14.354 13.682c-.426 0-.896-.074-1.341-.312-.89-.464-1.435-1.421-1.608-2.843-.018-.136.08-.266.223-.306.086-.023 2.127-.521 3.394.43.705.527 1.014 1.377.934 2.527a.286.286 0 01-.18.238c-.043.017-.655.266-1.421.266zm-2.3-2.963c.18 1.088.6 1.819 1.262 2.164.76.397 1.663.193 2.028.08.03-.861-.21-1.49-.717-1.87-.786-.589-2.035-.464-2.572-.373zM22.157 14.231c-.099 0-.192-.005-.284-.017-1.614-.164-2.548-1.67-2.585-1.733l.538-.277c.006.01.822 1.314 2.115 1.444.779.08 1.601-.278 2.442-1.065-.686-.447-2.541-1.524-3.753-.94l-.284-.504c1.867-.9 4.581 1.099 4.698 1.184a.267.267 0 01.112.198.248.248 0 01-.08.21c-.971 1.002-1.948 1.5-2.919 1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.863 11.598l3.37 2.281-.367.455-3.37-2.28.367-.456zM17.269 11.983l4.935.194-.027.566-4.935-.194.027-.566z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.797 16.429l-.594-.159c1.428-4.565.78-8.62.773-8.66l.612-.085c.025.17.674 4.214-.791 8.904zM16.5 20.598c-3.005 0-5.837-.176-7.963-.504C5.365 19.612 5 19.023 5 18.615h.618c0 .097.513.544 3.017.924 2.097.317 4.891.492 7.865.492s5.762-.175 7.864-.492c2.505-.38 3.018-.828 3.018-.924H28c0 .408-.365.997-3.537 1.479-2.126.328-4.958.504-7.963.504z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M17.743 22.286l-.012-.567c2.701-.045 5.2-.238 7.023-.55 2.176-.367 2.622-.77 2.622-.86v-1.7c0-.005-.124-.385-2.146-.77-1.502-.289-3.623-.498-5.966-.589l.024-.566c2.38.09 4.539.306 6.072.6 1.8.346 2.64.77 2.64 1.326v1.699c0 .38-.321.946-3.128 1.416-1.861.317-4.39.515-7.13.56zM16.5 22.297c-3.005 0-5.837-.176-7.963-.504C5.365 21.31 5 20.723 5 20.314v-1.699c0-.555.835-.98 2.628-1.325 1.527-.295 3.678-.51 6.053-.6l.024.566c-2.343.09-4.457.3-5.954.589-2.01.39-2.133.765-2.133.77v1.7c0 .096.513.543 3.017.923 2.097.317 4.891.492 7.865.492v.567z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.5 30c-4.73 0-8.087-1.065-8.872-1.784a.244.244 0 01-.087-.159l-1.107-6.87.613-.085 1.088 6.768c.754.584 3.808 1.564 8.365 1.564 4.415 0 7.53-.907 8.365-1.558l1.088-6.768.613.084-1.1 6.87a.315.315 0 01-.088.16C24.624 28.906 21.545 30 16.5 30zM23.573 20.11c-1.175-1.042-4.223-3.477-7.073-3.477-2.85 0-5.892 2.43-7.067 3.472L9 19.697c1.23-1.093 4.427-3.63 7.5-3.63 3.073 0 6.27 2.543 7.5 3.636l-.427.407z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M270.087 316.713s-27.729-181.015 186.87-181.015c0 0-1.206 87.258-48.225 132.628-47.019 45.37-138.645 48.387-138.645 48.387z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M456.957 135.698s-1.206 87.374-48.225 132.628c-47.019 45.254-138.645 48.387-138.645 48.387 40.629-70.898 95.364-119.168 134.787-148.409 23.148-17.174 52.083-32.606 52.083-32.606z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M207.395 226.205S235.124 45.19 20.525 45.19c0 0 1.206 87.259 48.225 132.629 47.018 45.369 138.645 48.386 138.645 48.386z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M207.395 226.205s-91.747-3.133-138.645-48.386C21.73 132.565 20.525 45.19 20.525 45.19s40.99 22.395 57.267 33.419c45.451 30.981 105.611 81.688 129.603 147.596z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M244.769 512l-12.056-.58c.12-1.741 9.163-173.009-30.984-283.242-23.389-64.4-82.223-114.179-127.434-144.696l6.872-9.515c46.658 31.445 107.42 83.081 131.894 150.382C254.052 336.671 244.89 510.259 244.769 512z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M63.13 100.916l53.892 1.193-.278 11.603-53.89-1.193.277-11.603zM157.276 106.519l5.493 38.522-11.947 1.578-5.493-38.522 11.947-1.578zM128.474 166.422l50.033.241-.06 11.603-50.033-.24.06-11.604zM241.393 378.327l-10.489-5.685c10.61-18.334 21.943-38.06 33.878-58.83 41.473-72.174 97.052-121.489 136.475-150.15l7.234 9.283c-38.459 27.965-92.711 76.119-133.099 146.553-11.936 20.77-23.389 40.496-33.999 58.829z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M422.607 190.531l1.013 11.568-58.538 4.747-1.012-11.569 58.537-4.746zM334.259 197.249l5.596 32.378-11.888 1.903-5.595-32.378 11.887-1.903zM369.551 253.088l.988 11.569-64.427 5.1-.988-11.569 64.427-5.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M182.439 229.686c-29.779-4.061-84.634-15.549-118.03-47.806C16.305 135.466 14.497 48.903 14.497 45.306c0-1.508.603-3.017 1.688-4.177 1.085-1.16 2.773-1.74 4.34-1.74 69.684 0 121.767 18.797 154.921 55.696 49.069 54.769 38.459 128.799 37.977 131.932l-11.936-1.74 5.908.812-5.908-.812c.121-.696 10.248-72.058-35.203-122.765-29.779-33.07-76.677-50.36-139.49-51.52 1.326 20.074 8.44 86.214 46.175 122.649 30.864 29.821 82.946 40.613 111.158 44.442l-1.688 11.603zM270.087 322.514c-3.014 0-5.546-2.088-5.908-4.989-.482-3.133-11.212-77.163 37.977-131.932 33.034-36.899 85.116-55.697 154.801-55.697a6.24 6.24 0 014.34 1.741c1.206 1.16 1.808 2.552 1.688 4.177 0 3.713-1.809 90.159-50.033 136.573-48.104 46.414-138.887 50.011-142.745 50.127h-.12zM450.688 141.5c-62.813 1.044-109.591 18.449-139.369 51.519-38.339 42.585-37.133 99.907-35.807 117.428 20.375-1.509 90.783-9.515 129.001-46.298 37.735-36.319 44.848-102.459 46.175-122.649z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M244.769 512l-12.056-.58c.12-1.741 9.163-173.009-30.984-283.242-23.389-64.4-82.223-114.179-127.434-144.696l6.872-9.515c46.658 31.445 107.42 83.081 131.894 150.382C254.052 336.671 244.89 510.259 244.769 512z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M63.13 100.916l53.892 1.193-.278 11.603-53.89-1.193.277-11.603zM157.276 106.519l5.493 38.522-11.947 1.578-5.493-38.522 11.947-1.578zM128.474 166.422l50.033.241-.06 11.603-50.033-.24.06-11.604zM241.393 378.327l-10.489-5.685c10.61-18.334 21.943-38.06 33.878-58.83 41.473-72.174 97.052-121.489 136.475-150.15l7.234 9.283c-38.459 27.965-92.711 76.119-133.099 146.553-11.936 20.77-23.389 40.496-33.999 58.829z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M422.607 190.531l1.013 11.568-58.538 4.747-1.012-11.569 58.537-4.746zM334.259 197.249l5.596 32.378-11.888 1.903-5.595-32.378 11.887-1.903zM369.551 253.088l.988 11.569-64.427 5.1-.988-11.569 64.427-5.1z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { fill: "url(#paint0_linear)", d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M11.708 10.499s4.21-1.054 3.939 2.662c0 0-3.438 1.416-3.939-2.662zM24.847 12.555s-3.895-2.906-5.287-.204c-.006 0 2.103 3.46 5.287.204z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M11.708 10.499l3.939 2.662c.272-3.722-3.939-2.662-3.939-2.662zM24.828 12.572l.019-.017s-3.895-2.906-5.287-.204c0 0 .007.005.013.022l5.255.199z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M13.863 11.598l3.37 2.281-.367.455-3.37-2.28.367-.456zM17.269 11.983l4.935.194-.027.566-4.935-.194.027-.566z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M16.71 16.7l-.593-.158.086-.272c1.428-4.565.78-8.62.773-8.66l-.05-.278.613-.085.05.278c.03.17.68 4.214-.786 8.898l-.093.278z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M26.392 20.314H6.607l1.237 7.704c.68.623 3.877 1.699 8.656 1.699 4.78 0 7.914-1.02 8.656-1.7l1.236-7.703z" }),
        React__default['default'].createElement("path", { fill: "#8D2323", d: "M7.028 22.92c1.978.476 5.484.793 9.472.793 3.988 0 7.493-.317 9.472-.793l.42-2.606H6.607l.42 2.606z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M16.5 16.916c-6.183 0-11.19.759-11.19 1.7v1.698c0 .94 5.007 1.7 11.19 1.7s11.19-.76 11.19-1.7v-1.699c0-.94-5.007-1.699-11.19-1.699z" }),
        React__default['default'].createElement("path", { fill: "#CE4C4C", fillRule: "evenodd", d: "M16.5 16.916c-6.183 0-11.19.759-11.19 1.7v1.698c0 .861 4.234 1.575 9.718 1.683a9.549 9.549 0 001.472-5.081z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#862727", d: "M16.5 20.314c6.18 0 11.19-.76 11.19-1.699 0-.938-5.01-1.699-11.19-1.699s-11.19.76-11.19 1.7c0 .938 5.01 1.698 11.19 1.698z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M11.863 4.954c0 1.29 2.003 1.359 2.003 1.359s-1.447.646-1.002 1.801c.446 1.156 2.337-.578 2.337-.578s-1.112 2.243.52 2.243c1.632 0 1.558-2.209 1.558-2.209s.65 2.362 1.892 1.224c1.243-1.139-.705-1.903-.705-1.903s2.671.815 2.671-.782-2.189-.884-2.189-.884 2.337-1.529 1.262-2.514c-1.076-.986-2.263.85-2.263.85s.593-2.278-1.076-2.278c-1.67 0-1.298 2.175-1.298 2.175s-.742-1.45-1.818-1.11c-1.076.34.074 1.994.074 1.994s-1.966-.68-1.966.612z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M23.783 19.907c-1.953.255-4.5.407-7.283.407-2.782 0-5.33-.152-7.283-.407.785-.697 2.522-2.119 4.507-2.934.903-.374 1.849-.618 2.782-.618.934 0 1.88.25 2.782.618 1.973.815 3.716 2.237 4.495 2.934z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M18.948 5.225s2.337-1.529 1.262-2.514c-.452-.414-.928-.329-1.323-.091-.613 2.719-3.06 4.82-6.103 5.183.012.102.037.204.08.317.446 1.155 2.338-.578 2.338-.578s-1.113 2.243.519 2.243c1.632 0 1.558-2.209 1.558-2.209s.65 2.362 1.892 1.223c1.243-1.138-.705-1.903-.705-1.903s2.671.81 2.671-.787-2.189-.884-2.189-.884z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M16.5 6.947c.854 0 1.546-.634 1.546-1.416 0-.782-.692-1.416-1.546-1.416-.854 0-1.546.634-1.546 1.416 0 .782.692 1.416 1.546 1.416z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.5 7.23c-1.02 0-1.855-.764-1.855-1.699 0-.934.835-1.699 1.855-1.699s1.855.765 1.855 1.7c0 .934-.835 1.698-1.855 1.698zm0-2.832c-.68 0-1.237.51-1.237 1.133s.557 1.133 1.237 1.133 1.236-.51 1.236-1.133-.556-1.133-1.236-1.133z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M15.72 10.063c-.574 0-.859-.238-1-.437-.242-.345-.223-.827-.13-1.251-.427.266-.947.492-1.38.402-.21-.046-.488-.176-.636-.567-.284-.736.068-1.33.507-1.727-.736-.187-1.527-.635-1.527-1.53 0-.492.24-.747.445-.872.352-.226.84-.226 1.236-.17-.179-.39-.34-.895-.185-1.297.099-.255.31-.442.606-.532.674-.215 1.218.096 1.601.464.05-.374.173-.781.458-1.087.278-.306.668-.459 1.156-.459.47 0 .853.159 1.107.453.284.329.37.782.383 1.19.278-.238.63-.454 1.014-.499.266-.028.662.006 1.051.363.272.249.402.56.371.895-.043.504-.433.996-.829 1.376.328.006.668.062.947.243.352.227.531.595.531 1.082 0 .55-.272.85-.507 1.003-.352.232-.834.289-1.292.272.105.136.186.294.223.464.08.391-.08.776-.483 1.15-.457.42-.86.43-1.119.362-.358-.09-.63-.373-.835-.69-.105.34-.271.69-.55.957-.309.294-.698.441-1.162.441zm-.518-2.81c.061 0 .123.017.173.051a.27.27 0 01.105.351c-.229.46-.495 1.314-.248 1.666.031.045.124.175.483.175.29 0 .525-.085.717-.266.563-.527.532-1.643.532-1.654-.006-.142.11-.266.266-.289.154-.017.302.074.34.21.136.487.488 1.217.859 1.308.142.034.315-.04.513-.215.247-.227.359-.448.316-.64-.08-.391-.711-.72-.922-.799-.154-.062-.228-.22-.167-.362a.325.325 0 01.39-.17c.39.119 1.52.357 2.015.028.167-.113.248-.289.248-.544 0-.3-.087-.504-.272-.623-.408-.266-1.243-.079-1.503.006-.148.045-.309-.011-.377-.136-.074-.125-.03-.278.093-.362.37-.244 1.354-1.02 1.41-1.637.018-.17-.044-.318-.192-.448-.173-.158-.353-.226-.538-.204-.526.063-1.082.76-1.243.997-.08.119-.24.17-.383.119-.142-.05-.223-.193-.186-.328.087-.323.217-1.258-.154-1.688-.136-.159-.34-.238-.619-.238-.302 0-.525.085-.692.26-.396.425-.352 1.292-.303 1.586.025.142-.068.272-.216.317a.32.32 0 01-.371-.153c-.006-.01-.637-1.217-1.435-.962-.154.05-.197.124-.222.187-.136.356.247 1.087.457 1.387a.262.262 0 01-.018.329.317.317 0 01-.347.085c-.247-.085-1.032-.278-1.372-.063-.043.029-.173.114-.173.408 0 1.003 1.688 1.076 1.706 1.076.143.006.26.097.29.227.032.13-.036.255-.166.311-.05.023-1.193.55-.847 1.45.068.176.154.193.192.204.37.08 1.193-.481 1.638-.883a.384.384 0 01.223-.074zM14.354 13.682c-.426 0-.896-.074-1.341-.312-.89-.464-1.435-1.421-1.608-2.843-.018-.136.08-.266.223-.306.086-.023 2.127-.521 3.394.43.705.527 1.014 1.377.934 2.527a.286.286 0 01-.18.238c-.043.017-.655.266-1.421.266zm-2.3-2.963c.18 1.088.6 1.819 1.262 2.164.76.397 1.663.193 2.028.08.03-.861-.21-1.49-.717-1.87-.786-.589-2.035-.464-2.572-.373zM22.157 14.231c-.099 0-.192-.005-.284-.017-1.614-.164-2.548-1.67-2.585-1.733l.538-.277c.006.01.822 1.314 2.115 1.444.779.08 1.601-.278 2.442-1.065-.686-.447-2.541-1.524-3.753-.94l-.284-.504c1.867-.9 4.581 1.099 4.698 1.184a.267.267 0 01.112.198.248.248 0 01-.08.21c-.971 1.002-1.948 1.5-2.919 1.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.863 11.598l3.37 2.281-.367.455-3.37-2.28.367-.456zM17.269 11.983l4.935.194-.027.566-4.935-.194.027-.566z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.797 16.429l-.594-.159c1.428-4.565.78-8.62.773-8.66l.612-.085c.025.17.674 4.214-.791 8.904zM16.5 20.598c-3.005 0-5.837-.176-7.963-.504C5.365 19.612 5 19.023 5 18.615h.618c0 .097.513.544 3.017.924 2.097.317 4.891.492 7.865.492s5.762-.175 7.864-.492c2.505-.38 3.018-.828 3.018-.924H28c0 .408-.365.997-3.537 1.479-2.126.328-4.958.504-7.963.504z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M17.743 22.286l-.012-.567c2.701-.045 5.2-.238 7.023-.55 2.176-.367 2.622-.77 2.622-.86v-1.7c0-.005-.124-.385-2.146-.77-1.502-.289-3.623-.498-5.966-.589l.024-.566c2.38.09 4.539.306 6.072.6 1.8.346 2.64.77 2.64 1.326v1.699c0 .38-.321.946-3.128 1.416-1.861.317-4.39.515-7.13.56zM16.5 22.297c-3.005 0-5.837-.176-7.963-.504C5.365 21.31 5 20.723 5 20.314v-1.699c0-.555.835-.98 2.628-1.325 1.527-.295 3.678-.51 6.053-.6l.024.566c-2.343.09-4.457.3-5.954.589-2.01.39-2.133.765-2.133.77v1.7c0 .096.513.543 3.017.923 2.097.317 4.891.492 7.865.492v.567z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.5 30c-4.73 0-8.087-1.065-8.872-1.784a.244.244 0 01-.087-.159l-1.107-6.87.613-.085 1.088 6.768c.754.584 3.808 1.564 8.365 1.564 4.415 0 7.53-.907 8.365-1.558l1.088-6.768.613.084-1.1 6.87a.315.315 0 01-.088.16C24.624 28.906 21.545 30 16.5 30zM23.573 20.11c-1.175-1.042-4.223-3.477-7.073-3.477-2.85 0-5.892 2.43-7.067 3.472L9 19.697c1.23-1.093 4.427-3.63 7.5-3.63 3.073 0 6.27 2.543 7.5 3.636l-.427.407z" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "16", x2: "16", y1: "0", y2: "32", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#ADEBE0" }),
                React__default['default'].createElement("stop", { offset: "0.762", stopColor: "#1F816F" })))));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H32V32H0z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M6.958 16.067s7.506-1.671 7.02 4.223c0 0-6.127 2.246-7.02-4.223zM30.379 19.328s-6.944-4.609-9.423-.323c-.011 0 3.747 5.49 9.423.323z" }),
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M6.958 16.067l7.02 4.222c.486-5.902-7.02-4.222-7.02-4.222zM30.346 19.355a4.31 4.31 0 01.033-.027s-6.944-4.609-9.423-.323c0 0 .01.009.022.036l9.368.314z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M10.799 17.81l6.007 3.619-.654.722-6.008-3.618.655-.723zM16.87 18.42l8.798.31-.047.897-8.798-.309.048-.897z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M15.875 25.905l-1.059-.252.155-.431c2.546-7.242 1.389-13.674 1.378-13.737l-.089-.44 1.091-.135.089.44c.055.27 1.212 6.684-1.4 14.115l-.165.44z" }),
            React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M7.234 7.271c0 2.049 3.57 2.156 3.57 2.156s-2.578 1.025-1.785 2.857c.794 1.833 4.166-.916 4.166-.916s-1.984 3.558.926 3.558 2.778-3.504 2.778-3.504 1.157 3.746 3.372 1.94c2.216-1.805-1.256-3.018-1.256-3.018s4.761 1.293 4.761-1.24c0-2.534-3.902-1.402-3.902-1.402s4.166-2.425 2.249-3.989c-1.918-1.563-4.034 1.348-4.034 1.348s1.058-3.612-1.918-3.612-2.314 3.45-2.314 3.45-1.323-2.3-3.24-1.76c-1.918.538.132 3.162.132 3.162s-3.505-1.078-3.505.97z" }),
            React__default['default'].createElement("path", { fill: "#F89720", d: "M28.483 30.99c-3.483.404-8.023.647-12.983.647-4.96 0-9.5-.243-12.983-.647 1.4-1.105 4.496-3.36 8.034-4.654 1.61-.593 3.296-.98 4.96-.98 1.664 0 3.35.396 4.96.98 3.515 1.294 6.624 3.549 8.012 4.654z" }),
            React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M19.864 7.702s4.167-2.425 2.249-3.989c-.805-.656-1.653-.52-2.359-.144-1.09 4.313-5.455 7.646-10.878 8.221.022.162.066.324.143.503.794 1.833 4.166-.916 4.166-.916s-1.983 3.558.926 3.558c2.91 0 2.778-3.504 2.778-3.504s1.157 3.746 3.372 1.94c2.216-1.805-1.256-3.018-1.256-3.018s4.761 1.284 4.761-1.25c0-2.533-3.901-1.4-3.901-1.4z" }),
            React__default['default'].createElement("path", { fill: "#F89720", d: "M15.5 10.434c1.522 0 2.755-1.006 2.755-2.246 0-1.241-1.233-2.247-2.755-2.247-1.522 0-2.755 1.006-2.755 2.247 0 1.24 1.233 2.246 2.755 2.246z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M15.5 10.883c-1.819 0-3.306-1.213-3.306-2.695 0-1.483 1.487-2.696 3.306-2.696s3.306 1.213 3.306 2.696c0 1.482-1.487 2.695-3.306 2.695zm0-4.492c-1.212 0-2.204.808-2.204 1.796 0 .989.992 1.797 2.204 1.797 1.212 0 2.204-.808 2.204-1.796 0-.989-.992-1.797-2.204-1.797z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M14.111 15.375c-1.025 0-1.532-.377-1.785-.692-.43-.548-.397-1.312-.232-1.985-.76.422-1.686.781-2.457.637-.375-.071-.871-.278-1.136-.898-.507-1.168.122-2.111.904-2.74C8.093 9.4 6.683 8.69 6.683 7.27c0-.782.43-1.186.793-1.383.629-.36 1.5-.36 2.205-.27-.32-.62-.607-1.42-.331-2.057.176-.405.551-.701 1.08-.845 1.201-.341 2.171.153 2.855.737.088-.593.308-1.24.815-1.725.496-.485 1.19-.728 2.061-.728.838 0 1.521.252 1.973.719.507.52.661 1.24.683 1.886.496-.377 1.125-.718 1.808-.79a2.512 2.512 0 011.874.575c.485.395.716.89.66 1.42-.076.799-.77 1.58-1.476 2.183.584.009 1.19.098 1.686.386.628.36.948.943.948 1.716 0 .871-.485 1.348-.904 1.59-.628.368-1.488.458-2.303.431.187.216.33.468.397.737.143.62-.144 1.231-.86 1.824-.816.665-1.532.683-1.995.575-.64-.144-1.124-.593-1.488-1.096-.187.539-.485 1.096-.98 1.518-.552.467-1.246.701-2.073.701zm-.926-4.456c.11 0 .22.027.309.08.22.126.298.36.187.558-.407.727-.881 2.084-.44 2.641.055.072.22.279.86.279.517 0 .936-.135 1.278-.423 1.003-.835.948-2.605.948-2.623-.012-.225.198-.422.473-.458.276-.027.54.116.607.332.242.773.87 1.932 1.532 2.075.253.054.562-.062.914-.34.441-.36.64-.71.563-1.016-.144-.62-1.268-1.141-1.643-1.267-.275-.099-.407-.35-.297-.575.11-.225.408-.341.694-.27.694.19 2.711.566 3.593.045.298-.18.441-.458.441-.862 0-.476-.154-.8-.485-.988-.727-.423-2.215-.126-2.678.009-.265.072-.551-.018-.672-.216-.133-.198-.056-.44.165-.575.661-.386 2.414-1.617 2.513-2.596.033-.27-.077-.504-.342-.71-.309-.252-.628-.36-.959-.324-.937.1-1.929 1.204-2.215 1.582-.143.188-.43.27-.683.188-.254-.08-.397-.305-.331-.52.154-.513.386-1.995-.276-2.678-.242-.252-.606-.378-1.102-.378-.54 0-.937.135-1.234.414-.706.674-.628 2.048-.54 2.515.044.225-.122.432-.386.503-.264.063-.54-.035-.661-.242-.011-.018-1.136-1.932-2.557-1.527-.276.08-.353.197-.397.296-.243.566.44 1.725.816 2.201a.38.38 0 01-.034.521.613.613 0 01-.617.135c-.44-.135-1.84-.44-2.447-.099-.077.045-.308.18-.308.647 0 1.59 3.009 1.707 3.042 1.707.253.01.463.153.518.36.055.206-.066.404-.298.494-.088.036-2.127.871-1.51 2.3.122.278.276.305.342.323.661.126 2.127-.764 2.92-1.401a.743.743 0 01.397-.117zM11.675 21.116c-.76 0-1.598-.117-2.391-.494-1.587-.737-2.557-2.255-2.866-4.51-.033-.216.143-.422.397-.485.154-.036 3.791-.827 6.05.682 1.257.836 1.808 2.184 1.665 4.007-.011.162-.143.315-.32.378-.077.027-1.168.422-2.535.422zm-4.1-4.699c.32 1.725 1.07 2.884 2.249 3.432 1.356.63 2.965.306 3.615.126.055-1.366-.375-2.363-1.279-2.965-1.4-.934-3.626-.737-4.585-.593zM25.585 21.988c-.177 0-.342-.01-.507-.027-2.877-.261-4.541-2.65-4.607-2.75l.959-.44c.01.018 1.465 2.084 3.769 2.291 1.388.126 2.854-.44 4.353-1.689-1.223-.71-4.53-2.417-6.69-1.491l-.507-.8c3.329-1.429 8.167 1.743 8.377 1.878.12.08.187.188.198.314a.371.371 0 01-.143.333c-1.73 1.59-3.472 2.38-5.202 2.38z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M10.799 17.81l6.007 3.619-.654.722-6.008-3.618.655-.723zM16.87 18.42l8.798.31-.047.897-8.798-.309.048-.897z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.029 25.473l-1.058-.251c2.546-7.242 1.389-13.674 1.378-13.737l1.09-.135c.045.27 1.202 6.684-1.41 14.123z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M28.109 31.313c-2.094-1.653-7.528-5.516-12.609-5.516-5.08 0-10.503 3.854-12.598 5.507l-.771-.647c2.193-1.734 7.891-5.759 13.37-5.759 5.477 0 11.175 4.034 13.368 5.768l-.76.647z" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H32V32H0z" })))));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M55 206v165h120V206c0-44.7 36.3-81 81-81s81 36.3 81 81v301h120V206C457 95 367 5 256 5S55 95 55 206z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M85 206v165h90V206c0-44.7 36.3-81 81-81s81 36.3 81 81v301h90V206c0-94.4-76.6-171-171-171S85 111.6 85 206z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M115 206v165h60V206c0-44.7 36.3-81 81-81s81 36.3 81 81v301h60V206c0-77.9-63.1-141-141-141s-141 63.1-141 141z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M145 206v165h30V206c0-44.7 36.3-81 81-81s81 36.3 81 81v301h30V206c0-61.3-49.7-111-111-111s-111 49.7-111 111z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M175 295.8c-6.5-3.2-14-5.6-22.7-6.9-.8-7.6-3.3-15.9-8.8-23-5.2-6.7-15.1-14.7-32.5-14.7-23.6 0-38.2 14.2-46.4 29.2-3-.5-6.3-.8-9.6-.6V371h120v-75.2z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M175 295.8c-6.5-3.2-14-5.6-22.7-6.9-.8-7.6-3.3-15.9-8.8-23-5.2-6.7-15.1-14.7-32.5-14.7-10.3 0-18.9 2.7-26 7V371h90v-75.2z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M175 295.8c-6.5-3.2-14-5.6-22.7-6.9-.8-7.6-3.3-15.9-8.8-23-4.8-6.2-13.6-13.4-28.5-14.5V371h60v-75.2z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M175 295.8c-6.5-3.2-14-5.6-22.7-6.9-.8-6.9-2.8-14.3-7.3-21V371h30v-75.2z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M354.7 412.6c-6.6.9-12.5 2.4-17.7 4.6V507h120v-90c-6.6-1.4-13.1-1.7-19.2-1.2-.8-4.4-2.3-8.8-5-13-3.7-5.9-12.8-15.7-31.8-15.7-24.1 0-38.9 12.3-46.3 25.5z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M427 396c-5.2-4.6-13.4-8.9-26-8.9-24.1 0-38.9 12.3-46.3 25.5-6.6.9-12.5 2.4-17.7 4.6V507h90V396z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M397 387.2c-21.8 1.3-35.3 12.9-42.3 25.3-6.6.9-12.5 2.4-17.7 4.6V507h60V387.2z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M367 398.1c-5.3 4.2-9.4 9.3-12.3 14.5-6.6.9-12.5 2.4-17.7 4.6V507h30V398.1z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M28.3 341.7S5 343.5 5 371h220c0-39-44-33-44-33s6.4-30.9-49.6-30.9c0 0 8.9-36.1-20.4-36.1-29.3 0-34.7 35.6-34.7 35.6s-38.1-31.3-48 35.1zM483.7 477.7S507 479.5 507 507H287c0-39 44-33 44-33s-18-42.6 38-42.6c0 0 2.7-24.4 32-24.4s12.7 35.6 12.7 35.6 60.1-31.3 70 35.1z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M372.5 485c-5-24.5 31.5-15 31.5-15s-1.1-16.6 9.7-27.4c0 0 12.5-26.7-3.2-33.8-30.9 3.1-20.1 37.3-20.1 37.3-40.4-18.4-17.9 38.9-17.9 38.9zM131.4 307.1s8.1-32.6-16.4-35.8C88 284 103.5 331 103.5 331s11.5-23.9 27.9-23.9z" }),
        React__default['default'].createElement("path", { fill: "#E17084", d: "M375.1 44.1C341.7 19.5 300.6 5 256 5c-44.6 0-85.7 14.5-119.1 39.1l82.3 89.8c11-5.6 23.5-8.8 36.8-8.8 13.3 0 25.8 3.2 36.8 8.8l82.3-89.8z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M256 35c-36.7 0-70.8 11.6-98.7 31.3l61.9 67.5c11-5.6 23.5-8.8 36.8-8.8 13.3 0 25.8 3.2 36.8 8.8l61.9-67.5C326.8 46.6 292.7 35 256 35z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M334.2 88.7C311.8 73.7 284.9 65 256 65c-28.9 0-55.8 8.7-78.2 23.7l41.4 45.2c11-5.6 23.5-8.8 36.8-8.8 13.3 0 25.8 3.2 36.8 8.8l41.4-45.2z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M313.6 111.1C296.8 100.9 277.1 95 256 95s-40.8 5.9-57.6 16.1l20.8 22.7c11-5.6 23.5-8.8 36.8-8.8 13.3 0 25.8 3.2 36.8 8.8l20.8-22.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M225 376H5c-2.8 0-5-2.2-5-5 0-22.3 14-31.3 24-33.7 4-22.9 12-36.8 24-41.5 9.5-3.7 19-.5 25 2.7 4.3-14.1 15.6-32.6 38-32.6 9.1 0 16.1 3 20.7 9 6.5 8.3 6.4 20.1 5.6 27.2 20.5.8 34.9 6.1 42.7 15.8 4.3 5.2 5.7 10.7 6.1 14.7 7.9-.1 22.2 1.1 32.4 10 7.6 6.7 11.5 16.2 11.5 28.3 0 2.9-2.2 5.1-5 5.1zM10.3 366h209.4c-.8-6.7-3.4-12-7.8-15.8-11.1-9.7-30.1-7.3-30.2-7.2-1.6.2-3.2-.4-4.3-1.5-1.1-1.2-1.6-2.8-1.2-4.4 0-.2 1.2-6.7-4-12.9-6.6-7.9-20.7-12.1-40.7-12.1-1.5 0-3-.7-3.9-1.9-.9-1.2-1.3-2.8-.9-4.3 1.1-4.5 2.8-17.8-2.7-24.8-2.7-3.4-6.9-5.1-12.8-5.1-24.6 0-29.6 30-29.8 31.3-.3 1.8-1.5 3.3-3.2 3.9-1.7.6-3.6.3-5-.8-.1-.1-11.5-9.1-21.6-5.2-8.9 3.5-15.2 16.3-18.3 37.2-.3 2.3-2.2 4.1-4.5 4.3-1.8.1-16.2 1.9-18.5 19.3zM507 512H287c-2.8 0-5-2.2-5-5 0-12.1 3.9-21.7 11.5-28.3 9.5-8.3 22.6-9.9 30.7-10-1.4-6.8-2.1-17.4 3.9-26.4 6.5-9.8 18.9-15.1 36.8-15.8 2.9-10.3 12.9-24.5 36.1-24.5 9 0 15.5 3 19.2 8.8 4.4 6.8 3.5 16 1.8 23.1 10.6-3.4 27.2-6.5 41.7.9 12.7 6.5 20.8 19.4 24.4 38.6 10 2.4 24 11.4 24 33.7-.1 2.7-2.3 4.9-5.1 4.9zm-214.7-10h209.4c-2.3-17.4-16.7-19.2-18.4-19.3-2.3-.2-4.2-2-4.5-4.3-2.6-17.7-9.2-29.4-19.6-34.7-18.2-9.3-42.9 3.2-43.2 3.3-1.9 1-4.2.6-5.8-.8-1.5-1.5-2-3.8-1.1-5.7 2-4.3 6.7-17.9 2.6-24.3-.7-1-2.6-4.1-10.8-4.1-24.6 0-26.9 19.2-27 20-.3 2.5-2.4 4.5-5 4.5-16.6 0-27.6 3.8-32.6 11.4-6.6 9.9-.9 24.1-.8 24.2.7 1.7.5 3.6-.6 5s-2.9 2.2-4.6 1.9c-.2 0-19.2-2.4-30.3 7.3-4.3 3.6-6.9 8.9-7.7 15.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M367.6 486c-1.9-9.2 1.3-14.5 4.2-17.3 7-6.6 19.7-6 27.4-4.8.7-6.6 3-17 10.9-24.9l7.1 7.1c-9.1 9.1-8.2 23.4-8.2 23.6.1 1.6-.6 3.2-1.8 4.2-1.2 1-2.9 1.4-4.5 1-5.9-1.5-19.4-3.2-24 1.1-.6.6-2.5 2.3-1.3 8l-9.8 2zM107.8 333.2l-9.1-4.3c.5-1.1 13.3-26.8 32.3-26.8v10c-10 0-20.4 15.2-23.2 21.1zM50 266h10v33.3H50V266zM462 437.6h-10V206c0-108.1-87.9-196-196-196S60 97.9 60 206v40H50v-40C50 92.4 142.4 0 256 0s206 92.4 206 206v231.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M342 439.9h-10V206c0-41.9-34.1-76-76-76s-76 34.1-76 76v115h-10V206c0-47.4 38.6-86 86-86s86 38.6 86 86v233.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M432 437.6h-10V206c0-91.5-74.5-166-166-166S90 114.5 90 206v79H80v-79c0-97 79-176 176-176s176 79 176 176v231.6z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M402 387.4h-10V206c0-75-61-136-136-136s-136 61-136 136v65h-10v-65c0-80.5 65.5-146 146-146s146 65.5 146 146v181.4z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M372 431.4h-10V206c0-58.4-47.6-106-106-106s-106 47.6-106 106v101.8h-10V206c0-64 52-116 116-116s116 52 116 116v225.4z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M288.045 319.301s-27.017-178.616 182.067-178.616c0 0-1.175 86.102-46.985 130.87-45.811 44.769-135.082 47.746-135.082 47.746z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M470.112 140.685s-1.175 86.216-46.985 130.87c-45.81 44.654-135.082 47.746-135.082 47.746 39.585-69.958 92.913-117.589 131.323-146.442 22.553-16.946 50.744-32.174 50.744-32.174z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M226.964 229.993S253.981 51.377 44.897 51.377c0 0 1.175 86.102 46.985 130.871 45.811 44.768 135.082 47.745 135.082 47.745z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M226.964 229.993s-89.389-3.091-135.082-47.745C46.072 137.594 44.897 51.377 44.897 51.377s39.937 22.098 55.795 32.975c44.283 30.571 102.897 80.606 126.272 145.641z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M263.378 512l-11.747-.572c.118-1.718 8.928-170.716-30.187-279.489-22.788-63.546-80.11-112.665-124.159-142.778l6.696-9.389c45.458 31.029 104.659 81.98 128.504 148.389 39.937 110.833 31.01 282.122 30.893 283.839z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M86.408 106.364l52.506 1.177-.271 11.45-52.505-1.177.27-11.45zM178.134 111.893l5.352 38.011-11.641 1.558-5.352-38.012 11.641-1.557zM150.072 171.002l48.747.238-.059 11.449-48.747-.237.059-11.45zM260.089 380.099l-10.219-5.61c10.336-18.091 21.378-37.556 33.007-58.051 40.407-71.217 94.557-119.878 132.967-148.159l7.048 9.16c-37.471 27.593-90.329 75.11-129.679 144.61-11.629 20.495-22.788 39.959-33.124 58.05z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M436.645 194.791l.987 11.415-57.033 4.684-.987-11.415 57.033-4.684zM350.568 201.42l5.452 31.949-11.582 1.878-5.452-31.949 11.582-1.878zM384.953 256.52l.963 11.415-62.771 5.032-.964-11.415 62.772-5.032z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M202.649 233.428c-29.013-4.008-82.458-15.343-114.996-47.173-46.867-45.799-48.63-131.214-48.63-134.763 0-1.489.588-2.977 1.645-4.122 1.058-1.145 2.702-1.718 4.23-1.718 67.893 0 118.636 18.549 150.939 54.959 47.807 54.043 37.47 127.092 37 130.183l-11.628-1.717 5.755.801-5.755-.801c.117-.687 9.984-71.103-34.3-121.138-29.013-32.632-74.706-49.692-135.904-50.837 1.292 19.808 8.222 85.071 44.988 121.024 30.071 29.425 80.815 40.074 108.301 43.852l-1.645 11.45zM288.045 325.026c-2.937 0-5.403-2.061-5.756-4.924-.47-3.091-10.924-76.14 37.001-130.183 32.185-36.41 82.929-54.959 150.822-54.959 1.527 0 3.054.572 4.229 1.717 1.174 1.145 1.762 2.519 1.644 4.122 0 3.664-1.762 88.965-48.747 134.764-46.867 45.799-135.317 49.348-139.076 49.463h-.117zM464.004 146.41c-61.198 1.03-106.774 18.205-135.787 50.837-37.353 42.02-36.178 98.582-34.886 115.871 19.851-1.488 88.449-9.389 125.685-45.685 36.766-35.837 43.696-101.101 44.988-121.023z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M263.378 512l-11.747-.572c.118-1.718 8.928-170.716-30.187-279.489-22.788-63.546-80.11-112.665-124.159-142.778l6.696-9.389c45.458 31.029 104.659 81.98 128.504 148.389 39.937 110.833 31.01 282.122 30.893 283.839z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M86.408 106.364l52.506 1.177-.271 11.45-52.505-1.177.27-11.45zM178.134 111.893l5.352 38.011-11.641 1.558-5.352-38.012 11.641-1.557zM150.072 171.002l48.747.238-.059 11.449-48.747-.237.059-11.45zM260.089 380.099l-10.219-5.61c10.336-18.091 21.378-37.556 33.007-58.051 40.407-71.217 94.557-119.878 132.967-148.159l7.048 9.16c-37.471 27.593-90.329 75.11-129.679 144.61-11.629 20.495-22.788 39.959-33.124 58.05z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M436.645 194.791l.987 11.415-57.033 4.684-.987-11.415 57.033-4.684zM350.568 201.42l5.452 31.949-11.582 1.878-5.452-31.949 11.582-1.878zM384.953 256.52l.963 11.415-62.771 5.032-.964-11.415 62.772-5.032z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M282 239S259 83 437 83c0 0-1 75.2-40 114.3-39 39.1-115 41.7-115 41.7z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M437 83s-1 75.3-40 114.3S282 239 282 239c33.7-61.1 79.1-102.7 111.8-127.9C413 96.3 437 83 437 83z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M230 161S253 5 75 5c0 0 1 75.2 40 114.3 39 39.1 115 41.7 115 41.7z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M230 161s-76.1-2.7-115-41.7C76 80.3 75 5 75 5s34 19.3 47.5 28.8C160.2 60.5 210.1 104.2 230 161z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M437 507H75s8.7-35.3 66-33.3c0 0 10.3-35.3 61-35.3 0 0 11-31.3 54-31.3s54 31.3 54 31.3c50.7 0 61 35.3 61 35.3 57.3-2 66 33.3 66 33.3z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M261 407.3l-10-.5c.1-1.5 7.6-149.1-25.7-244.1-19.4-55.5-68.2-98.4-105.7-124.7l5.7-8.2c38.7 27.1 89.1 71.6 109.4 129.6 34 96.8 26.4 246.4 26.3 247.9z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M110.339 53.025l44.7 1.028-.23 10-44.7-1.028.23-10zM188.429 57.854l4.556 33.198-9.91 1.36-4.556-33.198 9.91-1.36zM164.539 109.479l41.5.207-.05 10-41.5-.207.05-10zM258.2 292.1l-8.7-4.9c8.8-15.8 18.2-32.8 28.1-50.7 34.4-62.2 80.5-104.7 113.2-129.4l6 8c-31.9 24.1-76.9 65.6-110.4 126.3-9.9 17.9-19.4 34.9-28.2 50.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M408.508 130.255l.84 9.97-48.554 4.091-.84-9.97 48.554-4.091zM335.228 136.045l4.641 27.904-9.86 1.64-4.641-27.904 9.86-1.64zM364.501 184.168l.82 9.97-53.439 4.395-.82-9.97 53.439-4.395z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M242.3 478.3s-48-4-80.7 28.7H437s-8.7-35.3-66-33.3c0 0-10.3-35.3-61-35.3-41.7-.1-67.7 39.9-67.7 39.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M437 512H297v-10h132.4c-5.4-9.1-20.2-24.7-58.2-23.3-2.3.1-4.3-1.4-5-3.6-.4-1.3-10.2-31.7-56.2-31.7-2.1 0-4-1.3-4.7-3.3-.4-1.1-10.6-28-49.3-28-38.7 0-48.9 26.9-49.3 28-.7 2-2.6 3.3-4.7 3.3-46.4 0-56.1 31.4-56.2 31.7-.6 2.2-2.7 3.7-5 3.6-38-1.3-52.8 14.3-58.2 23.3H277v10H75c-1.5 0-3-.7-3.9-1.9-.9-1.2-1.3-2.8-.9-4.3.4-1.6 9.8-37.2 66.2-37.2h1.3c4.2-9.5 19.2-34 61.1-35.2 4.3-8.7 19.3-31.4 57.3-31.4s52.9 22.7 57.3 31.4c42 1.2 56.9 25.7 61.1 35.2h1.3c56.4 0 65.8 35.7 66.2 37.2.4 1.5 0 3.1-.9 4.3-1.1 1.2-2.6 1.9-4.1 1.9zM209.3 164c-24.7-3.5-70.2-13.4-97.9-41.2C71.5 82.8 70 8.2 70 5.1c0-1.3.5-2.6 1.4-3.6C72.3.5 73.7 0 75 0c57.8 0 101 16.2 128.5 48 40.7 47.2 31.9 111 31.5 113.7l-9.9-1.5 4.9.7-4.9-.7c.1-.6 8.5-62.1-29.2-105.8C171.2 25.9 132.3 11 80.2 10c1.1 17.3 7 74.3 38.3 105.7 25.6 25.7 68.8 35 92.2 38.3l-1.4 10zM282 244c-2.5 0-4.6-1.8-4.9-4.3-.4-2.7-9.3-66.5 31.5-113.7C336 94.2 379.2 78 437 78c1.3 0 2.6.5 3.6 1.5s1.5 2.2 1.4 3.6c0 3.2-1.5 77.7-41.5 117.7-39.9 40-115.2 43.1-118.4 43.2h-.1zM431.8 88c-52.1.9-90.9 15.9-115.6 44.4-31.8 36.7-30.8 86.1-29.7 101.2 16.9-1.3 75.3-8.2 107-39.9 31.3-31.3 37.2-88.3 38.3-105.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 407.3l-10-.5c.1-1.5 7.6-149.1-25.7-244.1-19.4-55.5-68.2-98.4-105.7-124.7l5.7-8.2c38.7 27.1 89.1 71.6 109.4 129.6 34 96.8 26.4 246.4 26.3 247.9z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M110.339 53.025l44.7 1.028-.23 10-44.7-1.028.23-10zM188.429 57.854l4.556 33.198-9.91 1.36-4.556-33.198 9.91-1.36zM164.539 109.479l41.5.207-.05 10-41.5-.207.05-10zM258.2 292.1l-8.7-4.9c8.8-15.8 18.2-32.8 28.1-50.7 34.4-62.2 80.5-104.7 113.2-129.4l6 8c-31.9 24.1-76.9 65.6-110.4 126.3-9.9 17.9-19.4 34.9-28.2 50.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M408.508 130.255l.84 9.97-48.554 4.091-.84-9.97 48.554-4.091zM335.228 136.045l4.641 27.904-9.86 1.64-4.641-27.904 9.86-1.64zM364.501 184.168l.82 9.97-53.439 4.395-.82-9.97 53.439-4.395z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M256 376c55.228 0 100-44.772 100-100s-44.772-100-100-100-100 44.772-100 100 44.772 100 100 100z" }),
        React__default['default'].createElement("path", { fill: "#FFDCA3", d: "M236 296c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M306.4 189.6c8.6 14.8 13.6 32 13.6 50.4 0 55.2-44.8 100-100 100-18.4 0-35.6-5-50.4-13.6C187 356.1 219.1 376 256 376c55.2 0 100-44.8 100-100 0-36.9-19.9-69-49.6-86.4zM251 397h10v30h-10v-30zM251 125h10v30h-10v-30zM345.087 357.996l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM152.766 165.61l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM377 271h30v10h-30v-10zM105 271h30v10h-30v-10zM359.292 165.628l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM166.879 357.97l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM202.849 134.709l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM306.996 385.977l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM118.379 213.718l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM369.615 317.782l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM142.356 317.824l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM393.661 213.685l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM205.042 385.958l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72zM309.112 134.709l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 381c-57.9 0-105-47.1-105-105 0-49.7 35.3-93 84-102.9l2 9.8c-44 8.9-76 48.1-76 93.1 0 52.4 42.6 95 95 95s95-42.6 95-95-42.6-95-95-95v-10c57.9 0 105 47.1 105 105s-47.1 105-105 105zM251 397h10v30h-10v-30zM251 125h10v30h-10v-30zM345.087 357.996l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM152.766 165.61l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM377 271h30v10h-30v-10zM105 271h30v10h-30v-10zM359.292 165.628l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM166.879 357.97l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM202.849 134.709l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM306.996 385.977l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM118.379 213.718l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM369.615 317.782l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM142.356 317.824l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM393.661 213.685l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM205.042 385.958l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72zM309.112 134.709l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M256 376c55.228 0 100-44.772 100-100s-44.772-100-100-100-100 44.772-100 100 44.772 100 100 100z" }),
        React__default['default'].createElement("path", { fill: "#FFDCA3", d: "M236 296c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M306.4 189.6c8.6 14.8 13.6 32 13.6 50.4 0 55.2-44.8 100-100 100-18.4 0-35.6-5-50.4-13.6C187 356.1 219.1 376 256 376c55.2 0 100-44.8 100-100 0-36.9-19.9-69-49.6-86.4z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M310.3 477.7S287 479.5 287 507h220c0-39-44-33-44-33s6.4-30.9-49.6-30.9c0 0 8.9-36.1-20.4-36.1-29.3 0-34.7 35.6-34.7 35.6s-38.1-31.3-48 35.1zM201.7 75.7S225 77.5 225 105H5c0-39 44-33 44-33S31 29.4 87 29.4c0 0 2.7-24.4 32-24.4s12.7 35.6 12.7 35.6 60.1-31.3 70 35.1z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M251 397h10v30h-10v-30zM251 125h10v30h-10v-30zM345.087 357.996l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM152.766 165.61l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM377 271h30v10h-30v-10zM105 271h30v10h-30v-10zM359.292 165.628l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM166.879 357.97l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM202.849 134.709l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM306.996 385.977l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM118.379 213.718l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM369.615 317.782l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM142.356 317.824l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM393.661 213.685l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM205.042 385.958l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72zM309.112 134.709l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M90.5 83c-5-24.5 31.4-15 31.4-15s-1.2-16.6 9.6-27.4l.3-.4c1.1-2.6 7.8-18.5 2.6-28.1-35.8 5.6-30 37.5-30 37.5s-10.1-12.9-21.1-.5C72.2 61.5 90.5 83 90.5 83zM385.5 467s11.5-23.9 27.9-23.9c0 0 5.3-21.4-5.7-31.3-31.4 14.3-22.2 55.2-22.2 55.2z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 381c-57.9 0-105-47.1-105-105 0-49.7 35.3-93 84-102.9l2 9.8c-44 8.9-76 48.1-76 93.1 0 52.4 42.6 95 95 95s95-42.6 95-95-42.6-95-95-95v-10c57.9 0 105 47.1 105 105s-47.1 105-105 105zM507 512h-60v-10h54.7c-.8-6.7-3.4-12-7.8-15.8-11.1-9.7-30.1-7.3-30.2-7.2-1.6.2-3.2-.4-4.3-1.5-1.1-1.2-1.6-2.8-1.2-4.4 0-.2 1.2-6.7-4-12.9-6.6-7.9-20.7-12.1-40.7-12.1-1.5 0-3-.7-3.9-1.9-.9-1.2-1.3-2.8-.9-4.3 1.1-4.5 2.8-17.8-2.7-24.8-2.7-3.4-6.9-5.1-12.8-5.1-24.6 0-29.6 30-29.8 31.3-.3 1.8-1.5 3.3-3.2 3.9-1.7.6-3.6.3-5-.8-.1-.1-11.5-9.1-21.6-5.2-8.9 3.4-15.2 16.3-18.3 37.2-.3 2.3-2.2 4.1-4.6 4.3-1.7.2-16.1 2-18.4 19.3H427v10H287c-2.8 0-5-2.2-5-5 0-22.3 14-31.3 24-33.7 4-22.9 12-36.8 24-41.5 9.5-3.7 19-.5 25 2.7 4.3-14.1 15.6-32.6 38-32.6 9.1 0 16.1 3 20.7 9 6.5 8.3 6.4 20.1 5.6 27.2 20.5.8 34.9 6.1 42.7 15.8 4.3 5.2 5.7 10.7 6.1 14.7 7.9-.1 22.2 1.1 32.4 10 7.6 6.7 11.5 16.2 11.5 28.3 0 2.9-2.2 5.1-5 5.1zM225 110H5c-2.8 0-5-2.2-5-5 0-12.1 3.9-21.7 11.5-28.3 9.5-8.3 22.6-9.9 30.7-10-1.4-6.8-2.1-17.4 3.9-26.4 6.5-9.8 18.9-15.1 36.8-15.8C85.9 14.2 95.8 0 119 0c9 0 15.5 3 19.2 8.8 4.4 6.8 3.5 16 1.8 23.1 10.6-3.4 27.2-6.5 41.7.9 12.7 6.5 20.8 19.4 24.4 38.6 10 2.4 24 11.4 24 33.7-.1 2.7-2.3 4.9-5.1 4.9zM10.3 100h209.4c-2.3-17.4-16.7-19.2-18.4-19.4-2.3-.2-4.2-2-4.5-4.2-2.6-17.7-9.2-29.4-19.6-34.7-18.2-9.3-42.9 3.2-43.2 3.3-1.9 1-4.2.6-5.8-.8-1.5-1.5-2-3.8-1.1-5.7 2-4.3 6.7-17.9 2.6-24.3-.7-1-2.6-4.1-10.8-4.1-23.9 0-26.8 18-27 20-.3 2.5-2.4 4.4-5 4.4-16.6 0-27.6 3.8-32.6 11.4-6.6 9.9-.9 24.1-.8 24.2.7 1.7.5 3.6-.6 5S50 77.3 48.3 77c-.2 0-19.2-2.4-30.3 7.3-4.3 3.7-6.9 9-7.7 15.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M85.6 84c-1.9-9.2 1.3-14.5 4.2-17.3 7-6.6 19.7-6 27.4-4.8.7-6.6 3-17 10.9-24.9l7.1 7.1c-9 9-8.2 23.4-8.2 23.6.1 1.6-.6 3.2-1.8 4.2-1.2 1-2.9 1.4-4.4 1-5.9-1.5-19.4-3.2-24 1.1-.6.6-2.5 2.3-1.3 8l-9.9 2zM389.8 469.2l-9.1-4.3c.5-1.1 13.3-26.8 32.3-26.8v10c-10 0-20.4 15.2-23.2 21.1zM251 397h10v30h-10v-30zM251 125h10v30h-10v-30zM345.087 357.996l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM152.766 165.61l21.21 21.21-7.07 7.07-21.21-21.21 7.07-7.07zM377 271h30v10h-30v-10zM105 271h30v10h-30v-10zM359.292 165.628l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM166.879 357.97l7.07 7.07-21.21 21.21-7.07-7.07 21.21-21.21zM202.849 134.709l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM306.996 385.977l11.49 27.72-9.24 3.83-11.49-27.72 9.24-3.83zM118.379 213.718l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM369.615 317.782l27.72 11.49-3.83 9.24-27.72-11.49 3.83-9.24zM142.356 317.824l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM393.661 213.685l3.83 9.24-27.72 11.49-3.83-9.24 27.72-11.49zM205.042 385.958l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72zM309.112 134.709l9.24 3.83-11.49 27.72-9.24-3.83 11.49-27.72z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M7.85 4.817c-.257-.284-1.045-.729-2.332-.729-1.288 0-2.036.401-2.332.729a5.585 5.585 0 00-1.018 1.749 6.068 6.068 0 00-.361 2.113h7.422a7.167 7.167 0 00-.483-2.26 6.658 6.658 0 00-.896-1.602z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M9.229 8.679H1.806c-.003-.321.02-.791.138-1.341.95-.255 2.2-.408 3.574-.408 1.346 0 2.575.15 3.514.393.131.536.18 1.006.197 1.356z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M5.304 8.679H9.23a7.167 7.167 0 00-.483-2.26 6.772 6.772 0 00-.896-1.602c-.112-.124-.322-.277-.631-.412C7.137 6.117 6.41 7.64 5.304 8.68z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M5.304 8.678H9.23a7.115 7.115 0 00-.197-1.355c-.69-.178-1.534-.306-2.467-.364a5.838 5.838 0 01-1.26 1.72z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M8.983 10.864c1.156-.327 1.888-.739 1.888-1.23 0-.886-2.397-1.607-5.353-1.607S.164 8.752.164 9.637c0 .488.733.9 1.889 1.227h6.93z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M2.66 12.868c-1.15 0-1.248-.973-1.248-1.42 0-.449.319-.62.986-.62h.262v2.04zM8.375 12.868c1.15 0 1.248-.973 1.248-1.42 0-.449-.319-.62-.985-.62h-.263v2.04z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M9.213 11.447l-.838.948v.473c1.067-.444.838-1.42.838-1.42zM1.823 11.447l.837.948v.473c-1.067-.444-.837-1.42-.837-1.42z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M6.503 15.09h-1.97v1.385L1.3 18.143c-.693.36-1.137 1.133-1.137 1.982v2.251h10.707v-2.251c0-.849-.443-1.621-1.136-1.982l-3.232-1.668V15.09z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M7.685 17.087l-.624.714s-.673.66-1.543.66c-.87 0-1.544-.66-1.544-.66l-.624-.714 1.182-.612V15.09h1.971v1.385l1.182.612z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M6.503 16.263V15.09h-1.97v1.188c.265.186.46.306.46.306h1.05s.194-.128.46-.32z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M8.638 9.407v1.42s-.128 2.456-.788 3.487c-.395.616-1.807 1.541-1.807 1.541h-1.05s-1.374-.845-1.807-1.54c-.647-1.039-.788-3.487-.788-3.487v-1.42c.752-.158 1.872-.256 3.12-.256s2.364.098 3.12.255z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M7.547 11.447a.987.987 0 00-.588-.218c-.295-.004-.499.175-.587.211l-.132.445h1.245l.062-.438zM3.491 11.447a.987.987 0 01.588-.218c.296-.004.5.175.588.211l.128.445H3.55l-.059-.438z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M5.518 14.183c-.611 0-.976-.415-1.041-.499l.246-.244c.033.04.322.379.808.375.463-.003.735-.313.785-.375l.246.244a1.38 1.38 0 01-1.028.5h-.016z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M3.432 10.511l-.167-.313c.17-.113.446-.244.804-.244h.01c.355.003.627.134.798.244l-.167.313a1.157 1.157 0 00-.63-.193h-.007c-.283 0-.503.106-.64.193zM3.81 11.229h.328v.655H3.81v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M4.007 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M4.608 11.611c-.033-.014-.066-.033-.105-.054a.817.817 0 00-.43-.146.82.82 0 00-.5.186l-.19-.299c.21-.164.446-.251.683-.251h.007c.266 0 .463.116.58.185.024.015.053.03.063.033l-.108.346zM7.603 10.511a1.148 1.148 0 00-1.278 0l-.167-.313c.168-.11.444-.24.798-.244.365 0 .644.13.815.244l-.168.313zM6.897 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M6.7 11.229h.328v.655H6.7v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M6.427 11.611l-.111-.342c.01-.004.04-.022.062-.033.118-.07.319-.19.588-.186.24 0 .476.088.683.252l-.19.298a.813.813 0 00-.5-.186h-.003a.794.794 0 00-.424.146c-.039.018-.072.037-.105.051zM3.186 9.28s-.2 1.548-.788 1.548c0 0-.592-.433-.592-1.26.312-.113.789-.215 1.38-.288zM7.85 9.28s.2 1.548.788 1.548c0 0 .59-.433.59-1.26-.311-.113-.787-.215-1.379-.288zM8.999 22.23v.147H2.036v-.146c0-.747.102-1.494.303-2.208a8.03 8.03 0 00.259-1.37l.164-1.61c.033-.324.283-.568.575-.568.302 0 .552.255.578.59l.223 2.944h2.76l.22-2.944c.025-.335.275-.59.577-.59.296 0 .542.244.575.568l.164 1.61c.05.467.135.922.26 1.37.203.714.305 1.461.305 2.208z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M2.66 13.05c-.91 0-1.412-.568-1.412-1.603 0-.801.834-.801 1.15-.801v.364c-.76 0-.822.226-.822.437 0 .824.365 1.239 1.084 1.239v.364z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M1.938 11.32l.726.822-.234.255-.727-.822.235-.255zM8.375 13.05v-.364c.72 0 1.084-.415 1.084-1.239 0-.211-.063-.437-.821-.437v-.364c.315 0 1.15 0 1.15.801 0 1.035-.503 1.603-1.413 1.603z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M9.098 11.317l.235.255-.727.822-.234-.255.726-.822zM5.517 14.183c-.61 0-.975-.415-1.04-.499l.246-.244c.032.04.322.38.808.375.463-.003.735-.313.785-.375l.246.244a1.38 1.38 0 01-1.028.5h-.017zM3.432 10.511l-.167-.313c.17-.113.446-.244.804-.244h.01c.355.003.627.134.798.244l-.167.313a1.157 1.157 0 00-.63-.193h-.007c-.283 0-.503.106-.64.193zM3.81 11.229h.328v.655H3.81v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M4.007 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M4.608 11.611c-.033-.014-.066-.033-.105-.054a.817.817 0 00-.43-.146.82.82 0 00-.5.186l-.19-.299c.21-.164.446-.251.683-.251h.007c.266 0 .463.116.58.185.024.015.053.03.063.033l-.108.346zM7.603 10.511a1.148 1.148 0 00-1.278 0l-.167-.313c.167-.11.443-.24.798-.244.365 0 .644.13.815.244l-.168.313zM6.897 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M6.7 11.229h.328v.655H6.7v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M6.427 11.611l-.111-.342c.01-.004.04-.022.062-.033.118-.07.319-.19.588-.186.24 0 .476.088.683.252l-.19.298a.813.813 0 00-.5-.186h-.003a.794.794 0 00-.424.146c-.039.018-.072.037-.105.051z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M6.043 16.038h-1.05a.153.153 0 01-.08-.022c-.055-.037-1.409-.875-1.862-1.6-.667-1.067-.811-3.475-.818-3.577l.329-.022c0 .026.144 2.408.758 3.392.372.594 1.498 1.326 1.715 1.464h.962c.227-.149 1.383-.943 1.718-1.464.624-.976.755-3.366.759-3.392l.328.022c-.007.102-.141 2.521-.818 3.581-.41.641-1.796 1.556-1.855 1.592a.147.147 0 01-.086.026zM8.608 9.586c-.772-.16-1.898-.252-3.09-.252-1.193 0-2.32.091-3.091.252l-.06-.357c.792-.164 1.939-.259 3.15-.259 1.212 0 2.359.095 3.15.259l-.059.357z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M9.019 11.025l-.073-.354c1.3-.331 1.76-.772 1.76-1.045 0-.255-.38-.638-1.444-.958-.999-.299-2.326-.463-3.744-.463-1.42 0-2.746.164-3.744.463-1.068.32-1.446.703-1.446.958 0 .273.46.714 1.76 1.046l-.071.353C1.097 10.792 0 10.358 0 9.625c0-1.158 2.844-1.784 5.518-1.784 2.673 0 5.517.626 5.517 1.785 0 .732-1.097 1.166-2.016 1.399z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M2.397 11.01a.172.172 0 01-.091-.029 1.81 1.81 0 01-.664-1.41c0-.076.046-.15.112-.171.322-.12.808-.222 1.415-.295a.15.15 0 01.135.055c.036.04.052.098.046.153-.023.167-.243 1.697-.953 1.697zm-.42-1.308c.046.518.351.835.47.94.262-.069.453-.696.538-1.147a6.086 6.086 0 00-1.008.207zM8.638 11.01c-.71 0-.93-1.53-.95-1.705a.197.197 0 01.046-.153.153.153 0 01.135-.054c.604.072 1.094.174 1.416.295a.184.184 0 01.111.17 1.81 1.81 0 01-.663 1.41.15.15 0 01-.095.037zM8.05 9.491c.088.455.279 1.082.538 1.148.115-.102.424-.423.47-.94A6.942 6.942 0 008.05 9.49zM9.048 8.45a6.91 6.91 0 00-.453-1.957 6.534 6.534 0 00-.867-1.552c-.217-.237-.95-.67-2.21-.67-1.183 0-1.919.346-2.214.674a5.354 5.354 0 00-.982 1.69 5.84 5.84 0 00-.348 1.814l-.329-.01c.02-.667.145-1.32.371-1.939a5.782 5.782 0 011.051-1.807l.004-.003c.164-.183.83-.784 2.446-.784 1.377 0 2.188.492 2.447.783l.01.011c.378.5.69 1.053.923 1.647.256.656.417 1.352.48 2.07l-.329.032z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M8.996 7.502c-.963-.251-2.197-.39-3.478-.39-1.032 0-2.03.088-2.887.255l-.056-.357a15.627 15.627 0 012.943-.262c1.307 0 2.568.142 3.553.4l-.075.354zM8.999 22.558H2.036c-.092 0-.164-.08-.164-.182v-.145c0-.77.105-1.53.312-2.263.122-.433.207-.885.253-1.337l.164-1.61c.043-.415.361-.732.74-.732.383 0 .709.331.741.758l.207 2.776h2.457l.207-2.776c.033-.427.358-.758.742-.758.378 0 .696.313.739.732l.164 1.61c.046.452.132.9.253 1.337a8.32 8.32 0 01.312 2.263v.145c0 .102-.072.182-.164.182zM2.2 22.194h6.635a7.917 7.917 0 00-.296-2.116 8.097 8.097 0 01-.266-1.403l-.164-1.61c-.023-.233-.2-.408-.414-.408-.213 0-.397.186-.414.422l-.22 2.944c-.006.095-.079.168-.164.168H4.138c-.085 0-.157-.073-.164-.168l-.22-2.944c-.016-.236-.2-.422-.414-.422-.21 0-.387.175-.414.408l-.164 1.61a8.42 8.42 0 01-.266 1.403 7.917 7.917 0 00-.296 2.116z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M5.518 18.642c-.923 0-1.623-.677-1.652-.706l.216-.274c.007.008.64.616 1.436.616.795 0 1.428-.608 1.435-.616l.217.274c-.03.029-.73.706-1.652.706zM3.928 16.988l-.138-.331.581-.299v-.809H4.7v.926c0 .069-.036.134-.095.164l-.677.35zM7.107 16.988l-.676-.35a.182.182 0 01-.096-.163v-.94h.329v.823l.581.299-.138.331zM10.87 22.559H9.657v-.365h1.05v-2.069c0-.776-.41-1.49-1.044-1.814l-1.425-.736.138-.332 1.425.736c.749.387 1.232 1.232 1.232 2.146v2.251c.003.102-.07.183-.161.183zM8.999 22.559H.164c-.092 0-.164-.08-.164-.183v-2.251c0-.918.483-1.76 1.232-2.146l1.425-.736.138.332-1.425.736c-.634.328-1.045 1.042-1.045 1.814v2.07h8.67v.364H9z" }),
        React__default['default'].createElement("path", { fill: "#4F963E", d: "M21.814 4.817c-.256-.284-1.044-.729-2.331-.729-1.288 0-2.037.401-2.332.729a5.585 5.585 0 00-1.018 1.749 6.067 6.067 0 00-.362 2.113h7.423a7.168 7.168 0 00-.483-2.26 6.658 6.658 0 00-.896-1.602z" }),
        React__default['default'].createElement("path", { fill: "#9B5310", d: "M23.194 8.679H15.77c-.003-.321.02-.791.138-1.341.95-.255 2.2-.408 3.574-.408 1.346 0 2.574.15 3.514.393a7.11 7.11 0 01.197 1.356z" }),
        React__default['default'].createElement("path", { fill: "#366C29", d: "M19.269 8.679h3.925a7.164 7.164 0 00-.483-2.26 6.776 6.776 0 00-.897-1.602c-.111-.124-.322-.277-.63-.412-.082 1.712-.808 3.235-1.915 4.274z" }),
        React__default['default'].createElement("path", { fill: "#83460E", d: "M19.269 8.678h3.925a7.11 7.11 0 00-.197-1.355c-.69-.178-1.534-.306-2.467-.364a5.837 5.837 0 01-1.261 1.72z" }),
        React__default['default'].createElement("path", { fill: "#4F963E", d: "M22.947 10.864c1.157-.327 1.889-.739 1.889-1.23 0-.886-2.398-1.607-5.353-1.607-2.956 0-5.354.725-5.354 1.61 0 .488.732.9 1.889 1.227h6.93z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M16.625 12.868c-1.15 0-1.248-.973-1.248-1.42 0-.449.319-.62.986-.62h.262v2.04zM22.34 12.868c1.15 0 1.248-.973 1.248-1.42 0-.449-.319-.62-.985-.62h-.263v2.04z" }),
        React__default['default'].createElement("path", { fill: "#89610A", d: "M23.177 11.447l-.837.948v.473c1.067-.444.837-1.42.837-1.42zM15.788 11.447l.837.948v.473c-1.067-.444-.837-1.42-.837-1.42z" }),
        React__default['default'].createElement("path", { fill: "#DC70AA", d: "M20.468 15.09h-1.97v1.385l-3.233 1.668c-.693.36-1.136 1.133-1.136 1.982v2.251h10.707v-2.251c0-.849-.444-1.621-1.136-1.982l-3.232-1.668V15.09z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M21.65 17.087l-.624.714s-.673.66-1.543.66c-.87 0-1.544-.66-1.544-.66l-.624-.714 1.182-.612V15.09h1.97v1.385l1.183.612z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M20.468 16.263V15.09h-1.97v1.188c.265.186.46.306.46.306h1.05s.194-.128.46-.32z" }),
        React__default['default'].createElement("path", { fill: "#AB7400", d: "M22.603 9.407v1.42s-.128 2.456-.789 3.487c-.394.616-1.806 1.541-1.806 1.541h-1.05s-1.374-.845-1.807-1.54c-.647-1.039-.788-3.487-.788-3.487v-1.42c.752-.158 1.872-.256 3.12-.256s2.364.098 3.12.255z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M21.512 11.447a.987.987 0 00-.588-.218c-.295-.004-.499.175-.588.211l-.13.445h1.244l.062-.438zM17.456 11.447a.987.987 0 01.588-.218c.296-.004.5.175.588.211l.128.445h-1.245l-.059-.438z" }),
        React__default['default'].createElement("path", { fill: "#89610A", d: "M19.483 14.183c-.611 0-.976-.415-1.042-.499l.247-.244c.033.04.322.379.808.375.463-.003.735-.313.785-.375l.246.244a1.38 1.38 0 01-1.028.5h-.016z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M17.397 10.511l-.167-.313c.17-.113.446-.244.804-.244h.01c.355.003.627.134.798.244l-.167.313a1.157 1.157 0 00-.631-.193h-.007c-.282 0-.502.106-.64.193zM17.775 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M17.972 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M18.573 11.611c-.033-.014-.066-.033-.105-.054a.817.817 0 00-.43-.146.82.82 0 00-.5.186l-.19-.299c.21-.164.446-.251.683-.251h.006c.266 0 .463.116.582.185.023.015.052.03.062.033l-.108.346zM21.568 10.511a1.148 1.148 0 00-1.278 0l-.167-.313c.168-.11.443-.24.798-.244.365 0 .644.13.815.244l-.168.313zM20.862 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M20.665 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M20.392 11.611l-.111-.342c.01-.004.039-.022.062-.033.118-.07.319-.19.588-.186.24 0 .476.088.683.252l-.19.298a.813.813 0 00-.5-.186h-.003a.794.794 0 00-.424.146c-.04.018-.072.037-.105.051z" }),
        React__default['default'].createElement("path", { fill: "#391910", d: "M17.15 9.28s-.2 1.548-.788 1.548c0 0-.59-.433-.59-1.26.311-.113.787-.215 1.379-.288zM21.814 9.28s.2 1.548.788 1.548c0 0 .592-.433.592-1.26-.312-.113-.789-.215-1.38-.288z" }),
        React__default['default'].createElement("path", { fill: "#3279AC", d: "M22.964 22.23v.147H16v-.146c0-.747.102-1.494.302-2.208.125-.448.214-.903.26-1.37l.164-1.61c.033-.324.282-.568.575-.568.302 0 .552.255.578.59l.223 2.944h2.759l.22-2.944c.026-.335.276-.59.578-.59.296 0 .542.244.575.568l.164 1.61c.05.467.135.922.26 1.37.203.714.305 1.461.305 2.208z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.625 13.05c-.91 0-1.412-.568-1.412-1.603 0-.801.834-.801 1.15-.801v.364c-.76 0-.822.226-.822.437 0 .824.365 1.239 1.084 1.239v.364z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M15.903 11.32l.726.822-.234.255-.727-.822.235-.255zM22.34 13.05v-.364c.72 0 1.084-.415 1.084-1.239 0-.211-.063-.437-.821-.437v-.364c.315 0 1.15 0 1.15.801 0 1.035-.503 1.603-1.413 1.603z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M23.063 11.317l.235.255-.727.822-.234-.255.726-.822zM19.482 14.183c-.61 0-.975-.415-1.04-.499l.245-.244c.033.04.322.38.808.375.463-.003.736-.313.785-.375l.247.244a1.381 1.381 0 01-1.028.5h-.017zM17.397 10.511l-.167-.313c.17-.113.446-.244.804-.244h.01c.355.003.627.134.798.244l-.167.313a1.157 1.157 0 00-.631-.193h-.007c-.282 0-.502.106-.64.193zM17.775 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M17.972 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M18.573 11.611c-.033-.014-.066-.033-.105-.054a.817.817 0 00-.43-.146.82.82 0 00-.5.186l-.19-.299c.21-.164.446-.251.683-.251h.006c.266 0 .463.116.582.185.023.015.052.03.062.033l-.108.346zM21.568 10.511a1.148 1.148 0 00-1.278 0l-.167-.313c.167-.11.443-.24.798-.244.364 0 .644.13.814.244l-.167.313zM20.862 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M20.665 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M20.392 11.611l-.111-.342c.01-.004.039-.022.062-.033.118-.07.319-.19.588-.186.24 0 .476.088.683.252l-.19.298a.813.813 0 00-.5-.186h-.003a.794.794 0 00-.424.146c-.04.018-.072.037-.105.051z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M20.008 16.038h-1.051a.153.153 0 01-.079-.022c-.056-.037-1.409-.875-1.862-1.6-.667-1.067-.811-3.475-.818-3.577l.329-.022c0 .026.144 2.408.758 3.392.372.594 1.498 1.326 1.715 1.464h.962c.227-.149 1.383-.943 1.718-1.464.624-.976.755-3.366.758-3.392l.329.022c-.007.102-.141 2.521-.818 3.581-.41.641-1.797 1.556-1.856 1.592a.147.147 0 01-.085.026zM22.573 9.586c-.772-.16-1.898-.252-3.09-.252-1.193 0-2.32.091-3.091.252l-.06-.357c.792-.164 1.938-.259 3.15-.259s2.358.095 3.15.259l-.06.357z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M22.983 11.025l-.072-.354c1.3-.331 1.76-.772 1.76-1.045 0-.255-.38-.638-1.444-.958-.999-.299-2.326-.463-3.745-.463-1.418 0-2.745.164-3.744.463-1.067.32-1.445.703-1.445.958 0 .273.46.714 1.76 1.046l-.072.353c-.92-.233-2.016-.667-2.016-1.4 0-1.158 2.844-1.784 5.517-1.784 2.674 0 5.518.626 5.518 1.785 0 .732-1.097 1.166-2.017 1.399z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.362 11.01a.172.172 0 01-.092-.029 1.81 1.81 0 01-.663-1.41c0-.076.046-.15.112-.171.322-.12.807-.222 1.415-.295a.15.15 0 01.135.055c.036.04.052.098.046.153-.023.167-.243 1.697-.953 1.697zm-.42-1.308c.046.518.351.835.47.94.262-.069.453-.696.538-1.147a6.087 6.087 0 00-1.008.207zM22.602 11.01c-.709 0-.929-1.53-.949-1.705a.197.197 0 01.046-.153.153.153 0 01.135-.054c.604.072 1.094.174 1.415.295a.184.184 0 01.112.17 1.81 1.81 0 01-.663 1.41.15.15 0 01-.096.037zm-.587-1.519c.088.455.279 1.082.538 1.148.115-.102.424-.423.47-.94a6.94 6.94 0 00-1.008-.208zM23.013 8.45a6.911 6.911 0 00-.453-1.957 6.532 6.532 0 00-.867-1.552c-.217-.237-.95-.67-2.21-.67-1.183 0-1.919.346-2.214.674a5.353 5.353 0 00-.982 1.69 5.84 5.84 0 00-.348 1.814l-.329-.01c.02-.667.145-1.32.371-1.939a5.783 5.783 0 011.051-1.807l.003-.003c.165-.183.831-.784 2.447-.784 1.376 0 2.188.492 2.447.783l.01.011c.378.5.69 1.053.923 1.647.256.656.417 1.352.48 2.07l-.33.032z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M22.96 7.502c-.962-.251-2.197-.39-3.477-.39-1.032 0-2.03.088-2.887.255l-.056-.357a15.626 15.626 0 012.943-.262c1.307 0 2.568.142 3.553.4l-.076.354zM22.964 22.558H16c-.092 0-.164-.08-.164-.182v-.145c0-.77.105-1.53.312-2.263.121-.433.207-.885.253-1.337l.164-1.61c.043-.415.361-.732.739-.732.384 0 .71.331.742.758l.207 2.776h2.457l.207-2.776c.033-.427.358-.758.742-.758.378 0 .696.313.739.732l.164 1.61c.046.452.132.9.253 1.337a8.32 8.32 0 01.312 2.263v.145c0 .102-.072.182-.164.182zm-6.799-.364H22.8a7.916 7.916 0 00-.296-2.116 8.089 8.089 0 01-.266-1.403l-.164-1.61c-.023-.233-.2-.408-.414-.408-.214 0-.398.186-.414.422l-.22 2.944c-.006.095-.079.168-.164.168h-2.759c-.085 0-.158-.073-.164-.168l-.22-2.944c-.017-.236-.2-.422-.414-.422-.21 0-.388.175-.414.408l-.164 1.61c-.05.474-.138.947-.266 1.403a7.92 7.92 0 00-.296 2.116z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M19.483 18.642c-.923 0-1.623-.677-1.652-.706l.216-.274c.007.008.64.616 1.436.616.794 0 1.428-.608 1.435-.616l.216.274c-.029.029-.729.706-1.651.706zM17.893 16.988l-.138-.331.581-.299v-.809h.329v.926c0 .069-.037.134-.096.164l-.676.35zM21.072 16.988l-.677-.35a.182.182 0 01-.095-.163v-.94h.329v.823l.581.299-.138.331zM24.836 22.559H23.62v-.365h1.05v-2.069c0-.776-.41-1.49-1.044-1.814l-1.425-.736.138-.332 1.425.736c.749.387 1.232 1.232 1.232 2.146v2.251c.003.102-.07.183-.161.183zM22.964 22.559h-8.835c-.092 0-.164-.08-.164-.183v-2.251c0-.918.483-1.76 1.231-2.146l1.426-.736.138.332-1.426.736c-.633.328-1.044 1.042-1.044 1.814v2.07h8.67v.364h.004z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M7.85 4.817c-.257-.284-1.045-.729-2.332-.729-1.288 0-2.036.401-2.332.729a5.585 5.585 0 00-1.018 1.749 6.068 6.068 0 00-.361 2.113h7.422a7.167 7.167 0 00-.483-2.26 6.658 6.658 0 00-.896-1.602z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M9.229 8.679H1.806c-.003-.321.02-.791.138-1.341.95-.255 2.2-.408 3.574-.408 1.346 0 2.575.15 3.514.393.131.536.18 1.006.197 1.356z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M5.304 8.679H9.23a7.167 7.167 0 00-.483-2.26 6.772 6.772 0 00-.896-1.602c-.112-.124-.322-.277-.631-.412C7.137 6.117 6.41 7.64 5.304 8.68z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M5.304 8.678H9.23a7.115 7.115 0 00-.197-1.355c-.69-.178-1.534-.306-2.467-.364a5.838 5.838 0 01-1.26 1.72z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M8.983 10.864c1.156-.327 1.888-.739 1.888-1.23 0-.886-2.397-1.607-5.353-1.607S.164 8.752.164 9.637c0 .488.733.9 1.889 1.227h6.93z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M2.66 12.868c-1.15 0-1.248-.973-1.248-1.42 0-.449.319-.62.986-.62h.262v2.04zM8.375 12.868c1.15 0 1.248-.973 1.248-1.42 0-.449-.319-.62-.985-.62h-.263v2.04z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M9.213 11.447l-.838.948v.473c1.067-.444.838-1.42.838-1.42zM1.823 11.447l.837.948v.473c-1.067-.444-.837-1.42-.837-1.42z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M6.503 15.09h-1.97v1.385L1.3 18.143c-.693.36-1.137 1.133-1.137 1.982v2.251h10.707v-2.251c0-.849-.443-1.621-1.136-1.982l-3.232-1.668V15.09z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M7.685 17.087l-.624.714s-.673.66-1.543.66c-.87 0-1.544-.66-1.544-.66l-.624-.714 1.182-.612V15.09h1.971v1.385l1.182.612z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M6.503 16.263V15.09h-1.97v1.188c.265.186.46.306.46.306h1.05s.194-.128.46-.32z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M8.638 9.407v1.42s-.128 2.456-.788 3.487c-.395.616-1.807 1.541-1.807 1.541h-1.05s-1.374-.845-1.807-1.54c-.647-1.039-.788-3.487-.788-3.487v-1.42c.752-.158 1.872-.256 3.12-.256s2.364.098 3.12.255z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M7.547 11.447a.987.987 0 00-.588-.218c-.295-.004-.499.175-.587.211l-.132.445h1.245l.062-.438zM3.491 11.447a.987.987 0 01.588-.218c.296-.004.5.175.588.211l.128.445H3.55l-.059-.438z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M5.518 14.183c-.611 0-.976-.415-1.041-.499l.246-.244c.033.04.322.379.808.375.463-.003.735-.313.785-.375l.246.244a1.38 1.38 0 01-1.028.5h-.016z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M3.432 10.511l-.167-.313c.17-.113.446-.244.804-.244h.01c.355.003.627.134.798.244l-.167.313a1.157 1.157 0 00-.63-.193h-.007c-.283 0-.503.106-.64.193zM3.81 11.229h.328v.655H3.81v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M4.007 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M4.608 11.611c-.033-.014-.066-.033-.105-.054a.817.817 0 00-.43-.146.82.82 0 00-.5.186l-.19-.299c.21-.164.446-.251.683-.251h.007c.266 0 .463.116.58.185.024.015.053.03.063.033l-.108.346zM7.603 10.511a1.148 1.148 0 00-1.278 0l-.167-.313c.168-.11.444-.24.798-.244.365 0 .644.13.815.244l-.168.313zM6.897 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M6.7 11.229h.328v.655H6.7v-.655z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M6.427 11.611l-.111-.342c.01-.004.04-.022.062-.033.118-.07.319-.19.588-.186.24 0 .476.088.683.252l-.19.298a.813.813 0 00-.5-.186h-.003a.794.794 0 00-.424.146c-.039.018-.072.037-.105.051zM3.186 9.28s-.2 1.548-.788 1.548c0 0-.592-.433-.592-1.26.312-.113.789-.215 1.38-.288zM7.85 9.28s.2 1.548.788 1.548c0 0 .59-.433.59-1.26-.311-.113-.787-.215-1.379-.288zM8.999 22.23v.147H2.036v-.146c0-.747.102-1.494.303-2.208a8.03 8.03 0 00.259-1.37l.164-1.61c.033-.324.283-.568.575-.568.302 0 .552.255.578.59l.223 2.944h2.76l.22-2.944c.025-.335.275-.59.577-.59.296 0 .542.244.575.568l.164 1.61c.05.467.135.922.26 1.37.203.714.305 1.461.305 2.208z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M2.66 13.05c-.91 0-1.412-.568-1.412-1.603 0-.801.834-.801 1.15-.801v.364c-.76 0-.822.226-.822.437 0 .824.365 1.239 1.084 1.239v.364z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M1.938 11.32l.726.822-.234.255-.727-.822.235-.255zM8.375 13.05v-.364c.72 0 1.084-.415 1.084-1.239 0-.211-.063-.437-.821-.437v-.364c.315 0 1.15 0 1.15.801 0 1.035-.503 1.603-1.413 1.603z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M9.098 11.317l.235.255-.727.822-.234-.255.726-.822zM5.517 14.183c-.61 0-.975-.415-1.04-.499l.246-.244c.032.04.322.38.808.375.463-.003.735-.313.785-.375l.246.244a1.38 1.38 0 01-1.028.5h-.017zM3.432 10.511l-.167-.313c.17-.113.446-.244.804-.244h.01c.355.003.627.134.798.244l-.167.313a1.157 1.157 0 00-.63-.193h-.007c-.283 0-.503.106-.64.193zM3.81 11.229h.328v.655H3.81v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M4.007 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M4.608 11.611c-.033-.014-.066-.033-.105-.054a.817.817 0 00-.43-.146.82.82 0 00-.5.186l-.19-.299c.21-.164.446-.251.683-.251h.007c.266 0 .463.116.58.185.024.015.053.03.063.033l-.108.346zM7.603 10.511a1.148 1.148 0 00-1.278 0l-.167-.313c.167-.11.443-.24.798-.244.365 0 .644.13.815.244l-.168.313zM6.897 11.229h.328v.655h-.328v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M6.7 11.229h.328v.655H6.7v-.655z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M6.427 11.611l-.111-.342c.01-.004.04-.022.062-.033.118-.07.319-.19.588-.186.24 0 .476.088.683.252l-.19.298a.813.813 0 00-.5-.186h-.003a.794.794 0 00-.424.146c-.039.018-.072.037-.105.051z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M6.043 16.038h-1.05a.153.153 0 01-.08-.022c-.055-.037-1.409-.875-1.862-1.6-.667-1.067-.811-3.475-.818-3.577l.329-.022c0 .026.144 2.408.758 3.392.372.594 1.498 1.326 1.715 1.464h.962c.227-.149 1.383-.943 1.718-1.464.624-.976.755-3.366.759-3.392l.328.022c-.007.102-.141 2.521-.818 3.581-.41.641-1.796 1.556-1.855 1.592a.147.147 0 01-.086.026zM8.608 9.586c-.772-.16-1.898-.252-3.09-.252-1.193 0-2.32.091-3.091.252l-.06-.357c.792-.164 1.939-.259 3.15-.259 1.212 0 2.359.095 3.15.259l-.059.357z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M9.019 11.025l-.073-.354c1.3-.331 1.76-.772 1.76-1.045 0-.255-.38-.638-1.444-.958-.999-.299-2.326-.463-3.744-.463-1.42 0-2.746.164-3.744.463-1.068.32-1.446.703-1.446.958 0 .273.46.714 1.76 1.046l-.071.353C1.097 10.792 0 10.358 0 9.625c0-1.158 2.844-1.784 5.518-1.784 2.673 0 5.517.626 5.517 1.785 0 .732-1.097 1.166-2.016 1.399z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M2.397 11.01a.172.172 0 01-.091-.029 1.81 1.81 0 01-.664-1.41c0-.076.046-.15.112-.171.322-.12.808-.222 1.415-.295a.15.15 0 01.135.055c.036.04.052.098.046.153-.023.167-.243 1.697-.953 1.697zm-.42-1.308c.046.518.351.835.47.94.262-.069.453-.696.538-1.147a6.086 6.086 0 00-1.008.207zM8.638 11.01c-.71 0-.93-1.53-.95-1.705a.197.197 0 01.046-.153.153.153 0 01.135-.054c.604.072 1.094.174 1.416.295a.184.184 0 01.111.17 1.81 1.81 0 01-.663 1.41.15.15 0 01-.095.037zM8.05 9.491c.088.455.279 1.082.538 1.148.115-.102.424-.423.47-.94A6.942 6.942 0 008.05 9.49zM9.048 8.45a6.91 6.91 0 00-.453-1.957 6.534 6.534 0 00-.867-1.552c-.217-.237-.95-.67-2.21-.67-1.183 0-1.919.346-2.214.674a5.354 5.354 0 00-.982 1.69 5.84 5.84 0 00-.348 1.814l-.329-.01c.02-.667.145-1.32.371-1.939a5.782 5.782 0 011.051-1.807l.004-.003c.164-.183.83-.784 2.446-.784 1.377 0 2.188.492 2.447.783l.01.011c.378.5.69 1.053.923 1.647.256.656.417 1.352.48 2.07l-.329.032z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M8.996 7.502c-.963-.251-2.197-.39-3.478-.39-1.032 0-2.03.088-2.887.255l-.056-.357a15.627 15.627 0 012.943-.262c1.307 0 2.568.142 3.553.4l-.075.354zM8.999 22.558H2.036c-.092 0-.164-.08-.164-.182v-.145c0-.77.105-1.53.312-2.263.122-.433.207-.885.253-1.337l.164-1.61c.043-.415.361-.732.74-.732.383 0 .709.331.741.758l.207 2.776h2.457l.207-2.776c.033-.427.358-.758.742-.758.378 0 .696.313.739.732l.164 1.61c.046.452.132.9.253 1.337a8.32 8.32 0 01.312 2.263v.145c0 .102-.072.182-.164.182zM2.2 22.194h6.635a7.917 7.917 0 00-.296-2.116 8.097 8.097 0 01-.266-1.403l-.164-1.61c-.023-.233-.2-.408-.414-.408-.213 0-.397.186-.414.422l-.22 2.944c-.006.095-.079.168-.164.168H4.138c-.085 0-.157-.073-.164-.168l-.22-2.944c-.016-.236-.2-.422-.414-.422-.21 0-.387.175-.414.408l-.164 1.61a8.42 8.42 0 01-.266 1.403 7.917 7.917 0 00-.296 2.116z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M5.518 18.642c-.923 0-1.623-.677-1.652-.706l.216-.274c.007.008.64.616 1.436.616.795 0 1.428-.608 1.435-.616l.217.274c-.03.029-.73.706-1.652.706zM3.928 16.988l-.138-.331.581-.299v-.809H4.7v.926c0 .069-.036.134-.095.164l-.677.35zM7.107 16.988l-.676-.35a.182.182 0 01-.096-.163v-.94h.329v.823l.581.299-.138.331zM10.87 22.559H9.657v-.365h1.05v-2.069c0-.776-.41-1.49-1.044-1.814l-1.425-.736.138-.332 1.425.736c.749.387 1.232 1.232 1.232 2.146v2.251c.003.102-.07.183-.161.183zM8.999 22.559H.164c-.092 0-.164-.08-.164-.183v-2.251c0-.918.483-1.76 1.232-2.146l1.425-.736.138.332-1.425.736c-.634.328-1.045 1.042-1.045 1.814v2.07h8.67v.364H9z" }),
        React__default['default'].createElement("path", { fill: "#2FABF1", d: "M15.21 6.19c-.3-.301-1.225-.772-2.734-.772-1.51 0-2.388.425-2.734.772a5.834 5.834 0 00-1.194 1.854 5.876 5.876 0 00-.424 2.24h8.704A6.971 6.971 0 0015.21 6.19z" }),
        React__default['default'].createElement("path", { fill: "#D1D346", d: "M16.827 10.284H8.124c-.004-.34.023-.838.162-1.421 1.113-.27 2.58-.433 4.19-.433 1.579 0 3.019.159 4.12.418.154.567.212 1.066.231 1.436z" }),
        React__default['default'].createElement("path", { fill: "#2282B8", d: "M12.225 10.284h4.602A6.973 6.973 0 0015.21 6.19c-.131-.131-.378-.293-.74-.436a6.374 6.374 0 01-2.245 4.53z" }),
        React__default['default'].createElement("path", { fill: "#95972F", d: "M12.225 10.284h4.602a6.867 6.867 0 00-.23-1.437c-.81-.189-1.8-.324-2.893-.386a6.266 6.266 0 01-1.479 1.823z" }),
        React__default['default'].createElement("path", { fill: "#2FABF1", d: "M16.538 12.602c1.356-.348 2.215-.784 2.215-1.306 0-.938-2.811-1.703-6.277-1.703s-6.278.769-6.278 1.707c0 .518.86.954 2.215 1.302h8.125z" }),
        React__default['default'].createElement("path", { fill: "#FFD987", d: "M9.125 14.726c-1.348 0-1.463-1.031-1.463-1.506 0-.475.373-.657 1.155-.657h.308v2.163zM15.826 14.726c1.348 0 1.463-1.031 1.463-1.506 0-.475-.373-.657-1.155-.657h-.308v2.163z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M16.808 13.22l-.982 1.004v.502c1.252-.471.982-1.506.982-1.506zM8.143 13.22l.982 1.004v.502c-1.251-.471-.982-1.506-.982-1.506z" }),
        React__default['default'].createElement("path", { fill: "#F83A20", d: "M13.631 17.082h-2.31v1.468l-3.79 1.769a2.322 2.322 0 00-1.333 2.1v2.388h12.555V22.42c0-.9-.52-1.719-1.333-2.101l-3.789-1.77v-1.467z" }),
        React__default['default'].createElement("path", { fill: "#FFD58F", d: "M15.017 19.199l-.731.757s-.79.699-1.81.699-1.81-.7-1.81-.7l-.732-.756 1.386-.65v-1.467h2.311v1.468l1.386.649z" }),
        React__default['default'].createElement("path", { fill: "#FFD06B", d: "M13.63 18.326v-1.244h-2.31v1.26c.312.196.54.324.54.324h1.232s.227-.136.539-.34z" }),
        React__default['default'].createElement("path", { fill: "#FFD987", d: "M16.134 11.057v1.506s-.15 2.603-.924 3.696c-.462.653-2.118 1.634-2.118 1.634H11.86s-1.61-.896-2.119-1.634c-.758-1.1-.924-3.696-.924-3.696v-1.506c.882-.166 2.195-.27 3.659-.27 1.463 0 2.772.104 3.658.27z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M14.856 13.22a1.229 1.229 0 00-.69-.232c-.346-.004-.585.186-.689.224l-.154.471h1.46l.073-.463zM10.1 13.22c.104-.074.35-.228.689-.232.347-.004.585.186.69.224l.15.471h-1.46l-.07-.463z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M12.476 16.12c-.717 0-1.144-.44-1.221-.529l.289-.258c.038.042.377.401.947.397.543-.004.863-.332.92-.398l.29.26c-.078.088-.501.52-1.206.528h-.02zM10.03 12.227l-.196-.332c.2-.12.524-.259.944-.259h.011c.416.004.736.143.936.259l-.197.332a1.457 1.457 0 00-.739-.204h-.008c-.33 0-.589.111-.75.204zM10.473 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M10.704 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M11.409 13.394c-.039-.016-.077-.035-.123-.058a1.026 1.026 0 00-.505-.155c-.2 0-.404.07-.585.197l-.224-.317c.247-.173.524-.266.801-.266h.008c.312 0 .543.123.682.197a.55.55 0 00.073.035l-.127.367zM14.921 12.227a1.475 1.475 0 00-1.498 0l-.196-.332a1.861 1.861 0 011.89 0l-.196.332zM14.093 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M13.862 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#FFB30F", d: "M13.542 13.393l-.13-.363c.01-.003.046-.023.072-.034.14-.074.374-.201.69-.197.281 0 .558.092.8.266l-.223.317a1.015 1.015 0 00-.585-.197h-.004a.995.995 0 00-.497.154c-.046.02-.084.039-.123.054zM9.741 10.922s-.234 1.641-.924 1.641c0 0-.693-.46-.693-1.336.366-.12.924-.228 1.617-.305zM15.21 10.922s.235 1.641.924 1.641c0 0 .693-.46.693-1.336-.365-.12-.924-.228-1.617-.305zM16.558 24.652v.155H8.394v-.155c0-.791.119-1.583.354-2.34a7.79 7.79 0 00.304-1.453l.193-1.707a.68.68 0 011.351.023l.262 3.121h3.235l.258-3.12a.68.68 0 011.352-.024l.192 1.707c.058.495.158.978.305 1.453a7.79 7.79 0 01.358 2.34z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M9.125 14.92c-1.067 0-1.656-.603-1.656-1.7 0-.85.978-.85 1.348-.85v.386c-.89 0-.963.24-.963.464 0 .873.428 1.313 1.271 1.313v.386z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M8.278 13.084l.852.872-.275.27-.852-.871.275-.27zM15.826 14.92v-.387c.843 0 1.27-.44 1.27-1.313 0-.224-.072-.464-.962-.464v-.386c.37 0 1.348 0 1.348.85 0 1.097-.59 1.7-1.656 1.7z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.674 13.081l.275.27-.852.872-.275-.27.852-.872zM12.476 16.12c-.717 0-1.144-.44-1.221-.529l.289-.258c.038.042.377.401.947.397.543-.004.863-.332.92-.398l.29.26c-.078.088-.501.52-1.206.528h-.02zM10.03 12.227l-.196-.332c.2-.12.524-.259.944-.259h.011c.416.004.736.143.936.259l-.197.332a1.457 1.457 0 00-.739-.204h-.008c-.33 0-.589.111-.75.204zM10.473 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M10.704 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M11.409 13.394c-.039-.016-.077-.035-.123-.058a1.026 1.026 0 00-.505-.155c-.2 0-.404.07-.585.197l-.224-.317c.247-.173.524-.266.801-.266h.008c.312 0 .543.123.682.197a.55.55 0 00.073.035l-.127.367zM14.921 12.227a1.475 1.475 0 00-1.498 0l-.196-.332a1.861 1.861 0 011.89 0l-.196.332zM14.093 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.862 12.988h.385v.695h-.385v-.695z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.542 13.393l-.13-.363c.01-.003.046-.023.072-.034.14-.074.374-.201.69-.197.281 0 .558.092.8.266l-.223.317a1.015 1.015 0 00-.585-.197h-.004a.995.995 0 00-.497.154c-.046.02-.084.039-.123.054z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.092 18.086h-1.233a.192.192 0 01-.092-.023c-.066-.038-1.652-.927-2.184-1.695-.781-1.132-.95-3.685-.958-3.793l.385-.023c0 .027.17 2.553.89 3.595.434.63 1.755 1.406 2.01 1.553h1.128c.265-.158 1.621-1 2.014-1.553.732-1.035.886-3.568.89-3.595l.385.023c-.008.108-.166 2.673-.96 3.796-.48.68-2.106 1.65-2.175 1.688a.186.186 0 01-.1.027zM16.1 11.246c-.906-.17-2.227-.267-3.624-.267-1.398 0-2.72.097-3.624.267l-.07-.379c.929-.173 2.273-.274 3.694-.274 1.42 0 2.765.1 3.693.274l-.07.379z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.58 12.772l-.084-.375c1.525-.351 2.064-.819 2.064-1.108 0-.27-.447-.676-1.694-1.016-1.171-.317-2.727-.49-4.39-.49-1.664 0-3.22.173-4.39.49-1.252.34-1.695.745-1.695 1.016 0 .29.54.757 2.064 1.108l-.085.375c-1.078-.248-2.364-.707-2.364-1.483 0-1.229 3.335-1.893 6.47-1.893 3.134 0 6.47.664 6.47 1.893 0 .776-1.287 1.236-2.365 1.483z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M8.817 12.756a.217.217 0 01-.108-.03c-.03-.02-.778-.53-.778-1.495 0-.081.054-.159.131-.182.378-.127.948-.235 1.66-.313a.186.186 0 01.158.058.196.196 0 01.054.162c-.027.178-.285 1.8-1.117 1.8zm-.493-1.386c.054.548.412.884.55.996.309-.073.532-.737.632-1.216a7.79 7.79 0 00-1.182.22zM16.134 12.756c-.832 0-1.09-1.622-1.113-1.807a.195.195 0 01.212-.22c.709.077 1.282.185 1.66.312.077.027.13.1.13.182 0 .965-.746 1.475-.777 1.495a.186.186 0 01-.112.038zm-.69-1.61c.105.482.328 1.147.632 1.216.135-.108.497-.448.551-.996a8.907 8.907 0 00-1.182-.22zM16.615 10.041a6.746 6.746 0 00-1.548-3.72c-.254-.25-1.113-.71-2.592-.71-1.386 0-2.249.367-2.595.714a5.577 5.577 0 00-1.152 1.793 5.673 5.673 0 00-.408 1.923l-.385-.012c.023-.706.17-1.398.435-2.054.29-.715.701-1.36 1.233-1.916l.003-.004c.193-.193.975-.83 2.87-.83 1.613 0 2.564.521 2.868.83l.012.012c.443.529.809 1.116 1.082 1.745.3.696.49 1.433.562 2.194l-.385.035z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M16.554 9.037c-1.128-.267-2.576-.413-4.078-.413-1.21 0-2.38.092-3.385.27l-.066-.379c1.024-.181 2.218-.278 3.45-.278 1.533 0 3.012.15 4.167.425l-.088.375zM16.558 25H8.393a.19.19 0 01-.192-.193v-.155c0-.815.123-1.622.366-2.398a7.73 7.73 0 00.296-1.418l.193-1.707a.875.875 0 01.866-.776.88.88 0 01.87.803l.243 2.943h2.88l.244-2.943a.872.872 0 011.737-.027l.192 1.707c.054.48.154.954.296 1.418.243.776.366 1.583.366 2.398v.155a.19.19 0 01-.192.193zm-7.972-.386h7.78a7.643 7.643 0 00-.348-2.244 7.853 7.853 0 01-.311-1.487l-.193-1.707a.485.485 0 00-.485-.433.49.49 0 00-.485.448l-.258 3.12a.193.193 0 01-.193.178h-3.235a.193.193 0 01-.192-.177l-.258-3.121a.49.49 0 00-.486-.448.49.49 0 00-.485.433l-.192 1.707a8.167 8.167 0 01-.312 1.487 7.645 7.645 0 00-.347 2.244z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M12.476 20.848c-1.083 0-1.903-.718-1.937-.75l.254-.289c.007.008.75.653 1.683.653.932 0 1.675-.645 1.682-.653l.255.29c-.035.03-.855.75-1.937.75zM10.612 19.095l-.162-.352.682-.317v-.857h.385v.98a.19.19 0 01-.112.175l-.793.37zM14.34 19.094l-.794-.37a.19.19 0 01-.111-.174v-.997h.385v.873l.681.317-.161.351zM18.753 25h-1.425v-.386h1.232V22.42c0-.823-.481-1.58-1.225-1.924l-1.67-.78.16-.351 1.672.78a2.52 2.52 0 011.444 2.275v2.387a.185.185 0 01-.188.193zM16.558 25H6.198a.191.191 0 01-.192-.193V22.42c0-.973.566-1.866 1.444-2.275l1.671-.78.162.351-1.671.78a2.134 2.134 0 00-1.225 1.924v2.194h10.167V25h.004z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React__default['default'].createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { fill: "#E79898", fillOpacity: "0.74", d: "M76.286 28.653a2.34 2.34 0 01.262 2.995 182.486 182.486 0 01-43.546 43.934l-1.336.952c-.979.698-2.32.587-3.17-.264l-6.011-6.011A9.388 9.388 0 009.21 56.985l-5.53-5.53a2.405 2.405 0 01.304-3.659l1.337-.953A178.077 178.077 0 0047.815 3.972a2.283 2.283 0 013.485-.305l5.628 5.628A9.388 9.388 0 0070.2 22.568l6.085 6.085z" }),
        React__default['default'].createElement("path", { fill: "#924B4B", fillOpacity: "0.6", d: "M78.95 30.315L57.46 57.53 29.661 78.571l-5.345-5.385-1.93-2.338 1.93-2.79.675-2.791-.372-2.977-1.116-2.79-1.86-2.233-2.233-1.489-2.419-.744h-2.976l-3.163 1.117-1.86 1.674-4.466-5.395 7.264-1.084a132.843 132.843 0 0061.815-26.415l5.346 5.384z" }),
        React__default['default'].createElement("path", { fill: "#633001", d: "M19.772 70.52c.001-.791.317-1.549.877-2.107l.01-.01a6.41 6.41 0 10-9.067-9.066l-.01.01a2.976 2.976 0 01-4.214.004L1.577 53.56c-2.353-2.353-2.029-6.256.68-8.188l1.336-.953 1.729 2.424-1.336.952a2.405 2.405 0 00-.305 3.66l5.792 5.791.014-.014.014-.014a9.388 9.388 0 0113.277 13.276l-.014.014-.015.014 5.748 5.748c.85.85 2.19.962 3.17.263l1.335-.952a182.486 182.486 0 0043.546-43.933 2.34 2.34 0 00-.262-2.996l-6.037-6.037a10.4 10.4 0 01-.133.133A9.388 9.388 0 0156.973 9.339L51.3 3.666a2.283 2.283 0 00-3.485.305A178.077 178.077 0 015.322 46.843l-1.729-2.424A175.101 175.101 0 0045.377 2.264c1.875-2.68 5.715-3.015 8.028-.703l5.673 5.673a2.976 2.976 0 01-.067 4.276 6.41 6.41 0 109.112 9.02 2.976 2.976 0 014.23-.02l6.038 6.037a5.316 5.316 0 01.596 6.808 185.467 185.467 0 01-44.256 44.65l-1.336.952a5.439 5.439 0 01-7.003-.582l-5.748-5.748a2.976 2.976 0 01-.872-2.108z" }),
        React__default['default'].createElement("path", { fill: "#633001", d: "M39.989 14.067l1.315 1.316a1.488 1.488 0 01-2.105 2.105l-1.315-1.316a1.488 1.488 0 112.105-2.105zM45.514 19.593l1.316 1.315a1.488 1.488 0 01-2.105 2.105l-1.316-1.316a1.488 1.488 0 112.105-2.104zM52.354 28.538a1.488 1.488 0 01-2.105 0l-1.578-1.578a1.488 1.488 0 112.105-2.105l1.578 1.578a1.488 1.488 0 010 2.105zM57.88 34.064a1.488 1.488 0 01-2.106 0l-1.578-1.579A1.488 1.488 0 1156.3 30.38l1.578 1.579a1.488 1.488 0 010 2.105zM61.827 35.905l1.316 1.316a1.488 1.488 0 01-2.105 2.105l-1.316-1.316a1.488 1.488 0 112.105-2.105zM67.352 41.43l1.315 1.316a1.488 1.488 0 01-2.105 2.105l-1.315-1.316a1.488 1.488 0 012.105-2.104z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M42.243 46.343s-11.659-8.31 1.479-21.397c0 0 4.728 4.894 4.346 10.268-.381 5.374-5.825 11.129-5.825 11.129z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M43.722 24.946s4.735 4.9 4.347 10.268c-.388 5.368-5.825 11.129-5.825 11.129-1.415-6.395-.72-12.4.084-16.42.472-2.36 1.394-4.977 1.394-4.977z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M33.425 45.166s-8.265-11.69-21.402 1.397c0 0 4.875 4.747 10.25 4.386 5.376-.361 11.152-5.783 11.152-5.783z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M33.425 45.166s-5.79 5.423-11.151 5.783c-5.37.367-10.252-4.386-10.252-4.386s3.742-1.263 5.345-1.647c4.488-1.06 10.962-1.928 16.058.25z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M51.441 58.675l-.77.703c-.088-.103-8.96-10.116-17.485-13.757-4.976-2.132-11.317-1.293-15.764-.222l-.103-.945c4.587-1.108 11.148-1.961 16.35.264 8.691 3.705 17.684 13.854 17.772 13.957z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M17.698 47.043l3.365-3.22.621.657-3.365 3.22-.621-.657zM23.77 41.61l2.456 1.794-.645.816-2.456-1.793.645-.816zM25.303 46.677l3.076-3.038.635.644-3.076 3.038-.635-.644zM43.878 51.496l-.955.326c-.36-1.66-.752-3.44-1.164-5.316-1.433-6.516-.744-12.63.092-16.618l.954.072c-.816 3.89-1.487 9.859-.083 16.213.412 1.875.796 3.664 1.156 5.323z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M44.636 30.07l.699.578-3.322 3.832-.7-.577 3.323-3.833zM39.598 35.83l2.124 1.447-.623.83-2.124-1.447.623-.83zM44.831 36.762l.698.579-3.664 4.21-.697-.578 3.663-4.211z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M32.088 46.88c-2.046 1.592-6.037 4.303-9.857 4.558-5.499.37-10.373-4.302-10.571-4.501a.457.457 0 01-.127-.334.553.553 0 01.17-.36c4.266-4.25 8.49-6.388 12.55-6.372 6.018.033 9.442 4.77 9.585 4.972l-.826.632.406-.315-.406.315c-.031-.046-3.339-4.606-8.912-4.635-3.643-.01-7.465 1.894-11.375 5.661 1.186 1.028 5.262 4.248 9.577 3.96 3.53-.235 7.313-2.816 9.25-4.325l.536.744zM42.563 46.663c-.185.184-.455.223-.637.085-.202-.144-4.933-3.58-4.935-9.605-.009-4.053 2.145-8.268 6.411-12.517a.572.572 0 01.362-.169c.137-.01.25.03.333.128.204.205 4.851 5.09 4.453 10.596-.39 5.498-5.75 11.233-5.98 11.475l-.007.007zm1.094-21.014c-3.788 3.888-5.694 7.703-5.697 11.346-.003 4.69 3.225 7.784 4.27 8.67 1.165-1.325 5.035-6.062 5.35-10.424.312-4.308-2.893-8.396-3.923-9.592z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M51.441 58.675l-.77.703c-.088-.103-8.96-10.116-17.485-13.757-4.976-2.132-11.317-1.293-15.764-.222l-.103-.945c4.587-1.108 11.148-1.961 16.35.264 8.691 3.705 17.684 13.854 17.772 13.957z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M17.698 47.043l3.365-3.22.621.657-3.365 3.22-.621-.657zM23.77 41.61l2.456 1.794-.645.816-2.456-1.793.645-.816zM25.303 46.677l3.076-3.038.635.644-3.076 3.038-.635-.644zM43.878 51.496l-.955.326c-.36-1.66-.752-3.44-1.164-5.316-1.433-6.516-.744-12.63.092-16.618l.954.072c-.816 3.89-1.487 9.859-.083 16.213.412 1.875.796 3.664 1.156 5.323z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M44.636 30.07l.699.578-3.322 3.832-.7-.577 3.323-3.833zM39.598 35.83l2.124 1.447-.623.83-2.124-1.447.623-.83zM44.831 36.762l.698.579-3.664 4.21-.697-.578 3.663-4.211z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { fill: "url(#paint0_linear)", d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z" }),
        React__default['default'].createElement("path", { fill: "#AE27D0", fillOpacity: "0.8", d: "M40.21 34.29c-.13.492-.828.492-.957 0l-.695-2.648a.494.494 0 00-.353-.353l-2.648-.695c-.492-.129-.492-.828 0-.957l2.648-.695a.494.494 0 00.353-.353l.695-2.648c.129-.492.827-.492.956 0l.695 2.648c.046.173.18.308.353.353l2.649.695c.492.13.492.828 0 .957l-2.649.695a.495.495 0 00-.352.353l-.696 2.648zM16.418 7.95c.09-.346.58-.346.671 0l.488 1.856a.347.347 0 00.247.248l1.857.487c.345.09.345.58 0 .671l-1.857.488a.347.347 0 00-.247.247l-.488 1.857c-.09.345-.58.345-.67 0l-.488-1.857a.347.347 0 00-.248-.247l-1.857-.488c-.345-.09-.345-.58 0-.67l1.857-.488a.347.347 0 00.248-.248l.487-1.857zM10.351 38.712c-.059.223-.376.223-.435 0L9.6 37.508a.225.225 0 00-.16-.16l-1.204-.316c-.224-.059-.224-.376 0-.435l1.204-.316a.225.225 0 00.16-.16l.316-1.204c.059-.224.376-.224.435 0l.316 1.203c.02.079.082.14.16.16l1.204.317c.224.059.224.376 0 .435l-1.204.316a.225.225 0 00-.16.16l-.316 1.204z" }),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fill: "#E79898", fillOpacity: "0.74", d: "M39.648 18.39c.346.347.394.893.113 1.296a78.81 78.81 0 01-18.779 18.997l-.576.412a1.06 1.06 0 01-1.367-.114l-2.592-2.6a4.067 4.067 0 00-.05-5.689 4.04 4.04 0 00-5.675-.05L8.338 28.25a1.042 1.042 0 01.13-1.582l.577-.412A76.902 76.902 0 0027.37 7.718a.983.983 0 011.503-.132l2.427 2.433a4.067 4.067 0 00.056 5.684 4.04 4.04 0 005.668.056l2.624 2.631z" }),
            React__default['default'].createElement("path", { fill: "#924B4B", fillOpacity: "0.6", d: "M40.797 19.109L31.53 30.877l-11.988 9.099-2.305-2.329-.832-1.01.832-1.207.291-1.207-.16-1.287-.481-1.207-.803-.965-.962-.644-1.043-.322h-1.284l-1.364.483-.803.724-1.925-2.333 3.132-.469a57.208 57.208 0 0026.658-11.422l2.305 2.328z" }),
            React__default['default'].createElement("path", { fill: "#633001", d: "M15.277 36.494c0-.342.136-.67.378-.91l.004-.005a2.778 2.778 0 000-3.92 2.76 2.76 0 00-3.91 0l-.004.004a1.282 1.282 0 01-1.817.002L7.43 29.16a2.331 2.331 0 01.293-3.54l.577-.412.745 1.048-.576.412a1.042 1.042 0 00-.131 1.582l2.497 2.505.006-.007a4.04 4.04 0 015.725 0 4.067 4.067 0 01.007 5.735l-.006.006-.006.007 2.478 2.485a1.06 1.06 0 001.367.114l.576-.412a78.808 78.808 0 0018.78-18.998c.28-.402.233-.948-.114-1.295l-2.603-2.61-.029.028-.029.029a4.04 4.04 0 01-5.696-.029 4.067 4.067 0 01-.029-5.712l.029-.029.029-.028-2.447-2.454a.983.983 0 00-1.503.132A76.901 76.901 0 019.045 26.256L8.3 25.208A75.62 75.62 0 0026.319 6.979a2.264 2.264 0 013.462-.304l2.446 2.453a1.289 1.289 0 01-.008 1.83l-.02.02a2.778 2.778 0 000 3.92 2.76 2.76 0 003.91 0l.02-.02a1.282 1.282 0 011.824-.009l2.603 2.61c.787.79.895 2.03.257 2.944a80.093 80.093 0 01-19.085 19.308l-.576.412a2.34 2.34 0 01-3.02-.252l-2.48-2.485a1.29 1.29 0 01-.375-.912z" }),
            React__default['default'].createElement("path", { fill: "#633001", d: "M23.995 12.083l.567.569c.251.251.251.659 0 .91a.64.64 0 01-.907 0l-.568-.569a.645.645 0 010-.91.64.64 0 01.908 0zM26.378 14.472l.567.57c.25.25.25.658 0 .91a.64.64 0 01-.907 0l-.568-.57a.645.645 0 010-.91.64.64 0 01.908 0zM29.328 18.34a.64.64 0 01-.908 0l-.681-.682a.645.645 0 010-.91.64.64 0 01.908 0l.68.682c.251.252.251.66 0 .91zM31.71 20.73a.64.64 0 01-.907 0l-.68-.683a.645.645 0 010-.91.64.64 0 01.907 0l.68.683c.251.251.251.659 0 .91zM33.413 21.526l.567.569c.25.251.25.659 0 .91a.64.64 0 01-.907 0l-.568-.569a.645.645 0 010-.91.64.64 0 01.908 0zM35.796 23.916l.567.568c.25.252.25.66 0 .91a.64.64 0 01-.908 0l-.567-.568a.645.645 0 010-.91.64.64 0 01.908 0z" }),
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M24.976 27.469s-5.028-3.593.638-9.253c0 0 2.039 2.117 1.874 4.44-.164 2.324-2.512 4.813-2.512 4.813z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M25.614 18.216s2.042 2.12 1.874 4.44c-.167 2.321-2.512 4.813-2.512 4.813-.61-2.766-.31-5.362.037-7.1.203-1.021.6-2.153.6-2.153z" }),
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M21.173 26.96s-3.564-5.056-9.23.604c0 0 2.103 2.052 4.421 1.896 2.319-.156 4.81-2.5 4.81-2.5z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M21.173 26.96s-2.496 2.345-4.808 2.5c-2.316.16-4.421-1.896-4.421-1.896s1.613-.546 2.305-.712c1.935-.459 4.727-.834 6.924.108z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M28.943 32.801l-.332.305c-.038-.045-3.864-4.375-7.54-5.95-2.146-.921-4.881-.559-6.799-.095l-.044-.409c1.978-.48 4.807-.848 7.05.114 3.749 1.602 7.627 5.99 7.665 6.035z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M14.39 27.771l1.452-1.392.268.284-1.451 1.393-.268-.285zM17.01 25.422l1.059.776-.278.353-1.06-.776.278-.352zM17.67 27.613l1.327-1.314.274.28-1.327 1.313-.273-.279zM25.681 29.697l-.412.141c-.155-.718-.324-1.488-.502-2.299-.617-2.818-.32-5.461.04-7.186l.411.031c-.351 1.683-.64 4.264-.035 7.011.177.811.343 1.585.498 2.302z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M26.008 20.432l.302.25-1.433 1.657-.301-.25 1.432-1.657zM23.835 22.922l.916.626-.268.36-.916-.627.268-.358zM26.092 23.326l.3.25-1.579 1.82-.3-.25 1.58-1.82z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M20.597 27.701c-.883.689-2.604 1.86-4.25 1.97-2.372.16-4.475-1.86-4.56-1.945a.198.198 0 01-.054-.145.24.24 0 01.073-.156c1.84-1.838 3.66-2.762 5.412-2.755 2.595.014 4.072 2.063 4.134 2.15l-.357.273.175-.136-.175.136c-.013-.02-1.44-1.991-3.843-2.004-1.57-.005-3.22.82-4.905 2.448.511.445 2.269 1.837 4.13 1.712 1.522-.101 3.154-1.217 3.99-1.87l.23.322zM25.114 27.607c-.08.08-.196.097-.274.037-.087-.062-2.128-1.548-2.129-4.153-.004-1.753.925-3.576 2.765-5.413a.246.246 0 01.156-.073.163.163 0 01.144.055c.088.089 2.092 2.202 1.92 4.582-.168 2.378-2.48 4.858-2.579 4.962l-.003.003zm.472-9.087c-1.634 1.682-2.455 3.331-2.457 4.906-.001 2.029 1.39 3.366 1.842 3.75.502-.573 2.17-2.621 2.307-4.508.134-1.863-1.248-3.63-1.692-4.148z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M28.943 32.801l-.332.305c-.038-.045-3.864-4.375-7.54-5.95-2.146-.921-4.881-.559-6.799-.095l-.044-.409c1.978-.48 4.807-.848 7.05.114 3.749 1.602 7.627 5.99 7.665 6.035z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M14.39 27.771l1.452-1.392.268.284-1.451 1.393-.268-.285zM17.01 25.422l1.059.776-.278.353-1.06-.776.278-.352zM17.67 27.613l1.327-1.314.274.28-1.327 1.313-.273-.279zM25.681 29.697l-.412.141c-.155-.718-.324-1.488-.502-2.299-.617-2.818-.32-5.461.04-7.186l.411.031c-.351 1.683-.64 4.264-.035 7.011.177.811.343 1.585.498 2.302z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M26.008 20.432l.302.25-1.433 1.657-.301-.25 1.432-1.657zM23.835 22.922l.916.626-.268.36-.916-.627.268-.358zM26.092 23.326l.3.25-1.579 1.82-.3-.25 1.58-1.82z" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", x2: "24", y1: "0", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#ADEBE0" }),
                React__default['default'].createElement("stop", { offset: "0.762", stopColor: "#1F816F" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H34.5V34.594H0z", transform: "translate(6.75 6)" })))));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { fill: "#FFD800", d: "M16.82 4.045a1.955 1.955 0 10-3.82-.59v3.802a1.368 1.368 0 002.673.413l1.147-3.625zM8.055 4.045a1.955 1.955 0 113.82-.59v3.802a1.368 1.368 0 01-2.673.413L8.055 4.045zM5.247 8.938h8.19v8.124h-5.58c-.795 0-1.343 0-1.85-.113a4.687 4.687 0 01-2.775-1.828c-.305-.421-.52-.924-.834-1.654a90.352 90.352 0 00-.043-.099l-.01-.025a18.618 18.618 0 01-.378-.918 2.73 2.73 0 01-.186-.842 2.563 2.563 0 011.626-2.469 2.73 2.73 0 01.848-.16c.27-.017.602-.017.992-.017zm-.884 1.887a1.08 1.08 0 00-.272.035.688.688 0 00-.436.662c0 .005.003.067.075.264.071.197.18.452.348.842.372.867.506 1.163.673 1.395.403.556.995.947 1.666 1.097.279.062.604.068 1.547.068h3.598v-4.376H5.274c-.424 0-.702 0-.911.013z" }),
        React__default['default'].createElement("path", { fill: "#FFD800", d: "M20.637 10.825a17.949 17.949 0 00-.91-.012h-6.29v4.374h3.599c.943 0 1.268-.005 1.547-.067.67-.15 1.263-.54 1.666-1.097.167-.232.3-.528.673-1.395a17.8 17.8 0 00.348-.842c.072-.197.075-.259.075-.264a.688.688 0 00-.436-.662 1.078 1.078 0 00-.272-.035zm.108-1.872c.275.016.567.051.848.161a2.563 2.563 0 011.626 2.469c-.01.302-.093.584-.186.842-.093.254-.224.56-.378.918l-.01.025-.043.099c-.313.73-.53 1.233-.834 1.654a4.687 4.687 0 01-2.775 1.828c-.508.114-1.055.114-1.85.113h-5.581V8.938h8.19c.391 0 .724 0 .993.016z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M8.08 10.813H4.545a1.99 1.99 0 01-.232-.938c0-.339.084-.658.232-.938H8.08c.148.28.232.6.232.938 0 .339-.084.658-.232.938zM8.423 15.188l.764 1.822-.124.052H6.816l-.8-1.906c.257.028.622.031 1.33.031h1.077z" }),
        React__default['default'].createElement("path", { fill: "#EB8C00", d: "M16.92 10.813h3.535a1.99 1.99 0 00.233-.938 1.99 1.99 0 00-.233-.938H16.92a1.99 1.99 0 00-.233.938c0 .339.085.658.233.938zM16.577 15.188l-.765 1.822.125.052h2.247l.8-1.906c-.257.028-.622.031-1.33.031h-1.077zM10.935 16.615a1.574 1.574 0 113.13 0l-.356 3.366a1 1 0 01-.995.894h-.428a1 1 0 01-.994-.895l-.357-3.365z" }),
        React__default['default'].createElement("path", { fill: "#FFD800", d: "M8.875 21.531c0-.983.797-1.781 1.781-1.781h3.688c.984 0 1.781.797 1.781 1.781a.594.594 0 01-.594.594H9.47a.594.594 0 01-.594-.594zM6.883 14.652c-.992-2.58-1.488-3.871-1.315-4.911a3.875 3.875 0 011.86-2.707C8.335 6.5 9.723 6.5 12.5 6.5c2.776 0 4.164 0 5.073.534a3.875 3.875 0 011.86 2.707c.172 1.04-.324 2.33-1.316 4.911-.503 1.31-.755 1.966-1.17 2.46a3.875 3.875 0 01-1.715 1.179c-.61.209-1.317.209-2.732.209-1.414 0-2.121 0-2.732-.21a3.876 3.876 0 01-1.715-1.177c-.415-.495-.666-1.15-1.17-2.46z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M17.903 7.867c.249.923-.011 2.083-.53 4.404l-.247 1.101c-.287 1.282-.43 1.923-.723 2.433a3.876 3.876 0 01-2.212 1.771c-.561.174-1.218.174-2.532.174-1.097 0-1.645 0-2.134-.13a3.875 3.875 0 01-1.895-1.163c.133.26.266.469.422.656.454.541 1.047.949 1.716 1.178.61.21 1.317.21 2.732.21 1.414 0 2.121 0 2.732-.21a3.875 3.875 0 001.715-1.178c.415-.495.666-1.15 1.17-2.46.992-2.581 1.488-3.872 1.315-4.912a3.875 3.875 0 00-1.861-2.708c.141.262.253.542.332.834z" }),
        React__default['default'].createElement("path", { fill: "#FEED8D", d: "M20.194 7.552c-.07.264-.444.264-.513 0l-.373-1.42a.265.265 0 00-.19-.19l-1.42-.373c-.264-.07-.264-.444 0-.513l1.42-.373a.265.265 0 00.19-.19l.373-1.42c.07-.264.444-.264.513 0l.373 1.42a.265.265 0 00.19.19l1.42.373c.264.07.264.444 0 .513l-1.42.373a.265.265 0 00-.19.19l-.373 1.42zM4.467 4.122c.043-.163.273-.163.316 0l.23.874c.014.057.059.102.116.117l.874.229c.163.043.163.273 0 .316l-.874.23a.163.163 0 00-.117.116l-.229.874c-.043.163-.273.163-.316 0l-.23-.874a.163.163 0 00-.116-.117l-.874-.229c-.163-.043-.163-.273 0-.316l.874-.23a.163.163 0 00.117-.116l.229-.874zM5.326 21.018c-.038.142-.24.142-.277 0l-.2-.765a.143.143 0 00-.102-.102l-.765-.2c-.143-.038-.143-.24 0-.277l.765-.2a.143.143 0 00.102-.102l.2-.765c.038-.142.24-.142.277 0l.2.765c.014.05.053.088.102.102l.765.2c.143.038.143.24 0 .277l-.765.2a.143.143 0 00-.102.102l-.2.765zM8.136 7.984c.272.26.282.69.022.963l-.112.118a1.415 1.415 0 00-.392.977v.248a.681.681 0 01-1.362 0v-.248c0-.715.275-1.401.769-1.918l.112-.118a.681.681 0 01.963-.022zM9.935 2.215a.51.51 0 01.017.72l-.084.088a1.058 1.058 0 00-.293.73v.186a.51.51 0 01-1.019 0v-.185c0-.535.206-1.048.575-1.435l.084-.088a.51.51 0 01.72-.016zM14.847 2.215a.51.51 0 01.017.72l-.085.088a1.058 1.058 0 00-.293.73v.186a.51.51 0 01-1.018 0v-.185c0-.535.206-1.048.575-1.435l.084-.088a.51.51 0 01.72-.016z" }),
        React__default['default'].createElement("path", { fill: "#ED8103", d: "M13.319 13.916s-.563-2.896 3.795-2.896c0 0-.025 1.396-.98 2.122-.954.726-2.815.774-2.815.774z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M17.114 11.02s-.025 1.398-.98 2.122c-.954.724-2.815.774-2.815.774.825-1.134 1.936-1.907 2.737-2.375.47-.274 1.058-.521 1.058-.521z" }),
        React__default['default'].createElement("path", { fill: "#ED8103", d: "M12.046 12.468S12.609 9.57 8.25 9.57c0 0 .024 1.397.98 2.123.954.726 2.815.774 2.815.774z" }),
        React__default['default'].createElement("path", { fill: "#FFAF00", d: "M12.046 12.468s-1.863-.05-2.816-.774c-.955-.725-.979-2.123-.979-2.123s.832.359 1.163.535c.923.496 2.145 1.307 2.632 2.362z" }),
        React__default['default'].createElement("path", { fill: "#B16102", d: "M12.805 17.041l-.245-.01c.002-.027.186-2.768-.63-4.531-.474-1.031-1.67-1.828-2.587-2.316l.14-.152c.947.503 2.18 1.33 2.678 2.406.832 1.797.646 4.575.644 4.603z" }),
        React__default['default'].createElement("path", { fill: "#B16102", d: "M9.116 10.463l1.095.02-.006.185-1.094-.02.005-.185zM11.028 10.553l.112.616-.243.025-.111-.616.242-.025zM10.443 11.511l1.016.004-.001.186-1.016-.004.001-.186zM12.736 14.902l-.213-.09c.216-.294.446-.61.688-.942.842-1.155 1.971-1.944 2.772-2.403l.146.149c-.78.447-1.882 1.218-2.702 2.345l-.69.941z" }),
        React__default['default'].createElement("path", { fill: "#B16102", d: "M16.416 11.897l.02.185-1.188.076-.02-.185 1.188-.076zM14.622 12.005l.114.518-.242.03-.113-.518.241-.03zM15.339 12.898l.02.185-1.309.082-.02-.185 1.309-.082zM11.54 12.524c-.606-.065-1.72-.25-2.398-.765-.977-.743-1.013-2.128-1.013-2.186 0-.024.012-.048.034-.067a.142.142 0 01.088-.027c1.415 0 2.473.3 3.146.89.996.877.781 2.062.771 2.112l-.242-.028.12.013-.12-.013c.002-.011.208-1.153-.715-1.964-.605-.53-1.557-.806-2.833-.825.027.321.172 1.38.938 1.963.627.477 1.684.65 2.257.71l-.034.187z" }),
        React__default['default'].createElement("path", { fill: "#B16102", d: "M13.319 14.009c-.062 0-.113-.034-.12-.08-.01-.05-.228-1.235.771-2.111.67-.59 1.728-.891 3.143-.891.032 0 .064.009.089.028.024.018.036.04.034.066 0 .06-.037 1.443-1.016 2.186-.977.742-2.82.8-2.899.802h-.002zm3.667-2.897c-1.275.017-2.225.296-2.83.825-.779.681-.754 1.599-.727 1.879.414-.024 1.843-.152 2.62-.741.766-.581.91-1.64.937-1.963zM12.805 17.041l-.245-.01c.002-.027.186-2.768-.63-4.531-.474-1.031-1.67-1.828-2.587-2.316l.14-.152c.947.503 2.18 1.33 2.678 2.406.832 1.797.646 4.575.644 4.603z" }),
        React__default['default'].createElement("path", { fill: "#B16102", d: "M9.116 10.463l1.095.02-.006.185-1.094-.02.005-.185zM11.028 10.553l.112.616-.243.025-.111-.616.242-.025zM10.443 11.511l1.016.004-.001.186-1.016-.004.001-.186zM12.736 14.902l-.213-.09c.216-.294.446-.61.688-.942.842-1.155 1.971-1.944 2.772-2.403l.146.149c-.78.447-1.882 1.218-2.702 2.345l-.69.941z" }),
        React__default['default'].createElement("path", { fill: "#B16102", d: "M16.416 11.897l.02.185-1.188.076-.02-.185 1.188-.076zM14.622 12.005l.114.518-.242.03-.113-.518.241-.03zM15.339 12.898l.02.185-1.309.082-.02-.185 1.309-.082z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6 85.3-68.9 101.2-136.7 0 0 37.5 60.4-6.8 107.1-44.3 46.7-80.8 67.8-94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M154.8 277s-13.2 44.7 14.8 74c28 29.3 86.3 49.3 86.3 156v-93.3c.1-45.5-85.2-68.9-101.1-136.7zM357.2 277s13.2 44.7-14.8 74c-28 29.3-86.3 49.3-86.3 156v-93.3c-.1-45.5 85.2-68.9 101.1-136.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M251 120h10v387h-10V120z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M331 45c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44C231.7 5 257 49 257 49s24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.7-1.9 7.5-3.3 11.3-4z" }),
        React__default['default'].createElement("path", { fill: "#849FFC", d: "M294.8 68s-20-44.5-37.9-44.5S222 62.6 222 62.6V129h73l-.2-61z" }),
        React__default['default'].createElement("path", { fill: "#5173EC", d: "M181 45s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M321.9 140.6c-9.3 30.8-28 54.4-65.9 54.4-50.3 0-66.9-37.5-72.3-82.3.6 1.9 22.9 72.7 73.9 52 .6-16.7.6-35.7-1.6-44.6.8 1.4 34.8 66.1 65.9 20.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 200c-18.9 0-34.5-5.1-46.6-15.2-10.6-8.9-18.4-21.4-23.8-38.2-9.6-30-9.6-68-9.6-101.6 0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9 0 28.2 0 66.9-9.6 98-11.5 37.8-35.2 57-70.2 57zM186 51c0 31.3.5 65.8 9.1 92.5 10.2 31.7 29.5 46.5 60.9 46.5 30.6 0 50.5-16.3 60.8-50 8.4-27.3 9.1-61.6 9.1-88.4-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.8-25.2-10.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 195.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM314.8 50.2C309.6 29.1 300.1 10 295 10c-.7 0-6.8.6-21.7 22.2l-8.2-5.7C281.5 2.7 290 0 295 0c8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.7 2.5zM201.9 49.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7C203.6 8.3 210.3 0 218.3 0c4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C225 10.6 219 10 218.3 10c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M290.1 70C282.4 52.8 267 28.5 257 28.5c-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.2 11.4 12.2 22.5 12.4 23l-9.1 4zM256 512c-2.3 0-4.3-1.5-4.8-3.8-10-40.3-33.1-62.3-62.3-90.2-9.8-9.4-20-19.1-30.9-30.5-19.3-20.3-26.7-46.3-21.3-75.4 4-21.6 13.5-37.1 13.9-37.8 1.1-1.7 3.1-2.6 5.1-2.3 2 .3 3.6 1.8 4.1 3.8 7.9 33.8 34.5 56.6 58 76.6 22.3 19.1 43.4 37.1 43.4 61.2V507c0 2.5-1.9 4.7-4.4 5h-.8zM153.7 290.4c-2.6 6.1-5.5 14.4-7.2 23.8-4.7 26 1.6 48.3 18.8 66.4 10.7 11.2 20.8 20.9 30.5 30.2 23.1 22.1 42.5 40.6 55.2 67.2v-64.2c0-19.5-18.5-35.3-39.9-53.6-21.7-18.8-46.1-39.6-57.4-69.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.9 508.2l-9.7-2.4c10.7-43.1 34.7-66 65.1-95 9.8-9.3 19.8-18.9 30.5-30.2 30.4-32 19.5-71.4 11.6-90.1-11.3 30.1-35.7 51-57.4 69.6-7.7 6.6-15.1 12.9-21.3 19.2l-7.1-7.1c6.5-6.6 14-13 21.9-19.7 23.5-20.1 50-42.8 58-76.6.5-2 2.1-3.5 4.1-3.8 2-.3 4 .6 5.1 2.3.4.7 9.9 16.2 13.9 37.8 5.3 29-2.1 55.1-21.3 75.4-10.9 11.4-21 21.1-30.9 30.5-29.5 27.8-52.6 49.8-62.5 90.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 195h10v312h-10V195z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6 85.3-68.9 101.2-136.7 0 0 37.5 60.4-6.8 107.1-44.3 46.7-80.8 67.8-94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M154.8 277s-13.2 44.7 14.8 74c28 29.3 86.3 49.3 86.3 156v-93.3c.1-45.5-85.2-68.9-101.1-136.7zM357.2 277s13.2 44.7-14.8 74c-28 29.3-86.3 49.3-86.3 156v-93.3c-.1-45.5 85.2-68.9 101.1-136.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M251 120h10v387h-10V120z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M331 45c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44C231.7 5 257 49 257 49s24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.7-1.9 7.5-3.3 11.3-4z" }),
        React__default['default'].createElement("path", { fill: "#E17084", d: "M294.8 68s-20-44.5-37.9-44.5S222 62.6 222 62.6V129h73l-.2-61z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M181 45s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M321.9 140.6c-9.3 30.8-28 54.4-65.9 54.4-50.3 0-66.9-37.5-72.3-82.3.6 1.9 22.9 72.7 73.9 52 .6-16.7.6-35.7-1.6-44.6.8 1.4 34.8 66.1 65.9 20.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 200c-18.9 0-34.5-5.1-46.6-15.2-10.6-8.9-18.4-21.4-23.8-38.2-9.6-30-9.6-68-9.6-101.6 0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9 0 28.2 0 66.9-9.6 98-11.5 37.8-35.2 57-70.2 57zM186 51c0 31.3.5 65.8 9.1 92.5 10.2 31.7 29.5 46.5 60.9 46.5 30.6 0 50.5-16.3 60.8-50 8.4-27.3 9.1-61.6 9.1-88.4-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.8-25.2-10.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 195.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM314.8 50.2C309.6 29.1 300.1 10 295 10c-.7 0-6.8.6-21.7 22.2l-8.2-5.7C281.5 2.7 290 0 295 0c8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.7 2.5zM201.9 49.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7C203.6 8.3 210.3 0 218.3 0c4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C225 10.6 219 10 218.3 10c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M290.1 70C282.4 52.8 267 28.5 257 28.5c-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.2 11.4 12.2 22.5 12.4 23l-9.1 4zM256 512c-2.3 0-4.3-1.5-4.8-3.8-10-40.3-33.1-62.3-62.3-90.2-9.8-9.4-20-19.1-30.9-30.5-19.3-20.3-26.7-46.3-21.3-75.4 4-21.6 13.5-37.1 13.9-37.8 1.1-1.7 3.1-2.6 5.1-2.3 2 .3 3.6 1.8 4.1 3.8 7.9 33.8 34.5 56.6 58 76.6 22.3 19.1 43.4 37.1 43.4 61.2V507c0 2.5-1.9 4.7-4.4 5h-.8zM153.7 290.4c-2.6 6.1-5.5 14.4-7.2 23.8-4.7 26 1.6 48.3 18.8 66.4 10.7 11.2 20.8 20.9 30.5 30.2 23.1 22.1 42.5 40.6 55.2 67.2v-64.2c0-19.5-18.5-35.3-39.9-53.6-21.7-18.8-46.1-39.6-57.4-69.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.9 508.2l-9.7-2.4c10.7-43.1 34.7-66 65.1-95 9.8-9.3 19.8-18.9 30.5-30.2 30.4-32 19.5-71.4 11.6-90.1-11.3 30.1-35.7 51-57.4 69.6-7.7 6.6-15.1 12.9-21.3 19.2l-7.1-7.1c6.5-6.6 14-13 21.9-19.7 23.5-20.1 50-42.8 58-76.6.5-2 2.1-3.5 4.1-3.8 2-.3 4 .6 5.1 2.3.4.7 9.9 16.2 13.9 37.8 5.3 29-2.1 55.1-21.3 75.4-10.9 11.4-21 21.1-30.9 30.5-29.5 27.8-52.6 49.8-62.5 90.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 195h10v312h-10V195z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6-85.3-68.9-101.2-136.7 0 0-37.5 60.4 6.8 107.1 44.3 46.7 80.8 67.8 94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6 85.3-68.9 101.2-136.7 0 0 37.5 60.4-6.8 107.1-44.3 46.7-80.8 67.8-94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M154.8 277s-13.2 44.7 14.8 74c28 29.3 86.3 49.3 86.3 156v-93.3c.1-45.5-85.2-68.9-101.1-136.7zM357.2 277s13.2 44.7-14.8 74c-28 29.3-86.3 49.3-86.3 156v-93.3c-.1-45.5 85.2-68.9 101.1-136.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M251 120h10v387h-10V120z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M331 45c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44C231.7 5 257 49 257 49s24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.7-1.9 7.5-3.3 11.3-4z" }),
        React__default['default'].createElement("path", { fill: "#FCE48E", d: "M294.8 68s-20-44.5-37.9-44.5S222 62.6 222 62.6V129h73l-.2-61z" }),
        React__default['default'].createElement("path", { fill: "#D8B848", d: "M181 45s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M321.9 140.6c-9.3 30.8-28 54.4-65.9 54.4-50.3 0-66.9-37.5-72.3-82.3.6 1.9 22.9 72.7 73.9 52 .6-16.7.6-35.7-1.6-44.6.8 1.4 34.8 66.1 65.9 20.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 200c-18.9 0-34.5-5.1-46.6-15.2-10.6-8.9-18.4-21.4-23.8-38.2-9.6-30-9.6-68-9.6-101.6 0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9 0 28.2 0 66.9-9.6 98-11.5 37.8-35.2 57-70.2 57zM186 51c0 31.3.5 65.8 9.1 92.5 10.2 31.7 29.5 46.5 60.9 46.5 30.6 0 50.5-16.3 60.8-50 8.4-27.3 9.1-61.6 9.1-88.4-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.8-25.2-10.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 195.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM314.8 50.2C309.6 29.1 300.1 10 295 10c-.7 0-6.8.6-21.7 22.2l-8.2-5.7C281.5 2.7 290 0 295 0c8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.7 2.5zM201.9 49.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7C203.6 8.3 210.3 0 218.3 0c4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C225 10.6 219 10 218.3 10c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M290.1 70C282.4 52.8 267 28.5 257 28.5c-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.2 11.4 12.2 22.5 12.4 23l-9.1 4zM256 512c-2.3 0-4.3-1.5-4.8-3.8-10-40.3-33.1-62.3-62.3-90.2-9.8-9.4-20-19.1-30.9-30.5-19.3-20.3-26.7-46.3-21.3-75.4 4-21.6 13.5-37.1 13.9-37.8 1.1-1.7 3.1-2.6 5.1-2.3 2 .3 3.6 1.8 4.1 3.8 7.9 33.8 34.5 56.6 58 76.6 22.3 19.1 43.4 37.1 43.4 61.2V507c0 2.5-1.9 4.7-4.4 5h-.8zM153.7 290.4c-2.6 6.1-5.5 14.4-7.2 23.8-4.7 26 1.6 48.3 18.8 66.4 10.7 11.2 20.8 20.9 30.5 30.2 23.1 22.1 42.5 40.6 55.2 67.2v-64.2c0-19.5-18.5-35.3-39.9-53.6-21.7-18.8-46.1-39.6-57.4-69.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.9 508.2l-9.7-2.4c10.7-43.1 34.7-66 65.1-95 9.8-9.3 19.8-18.9 30.5-30.2 30.4-32 19.5-71.4 11.6-90.1-11.3 30.1-35.7 51-57.4 69.6-7.7 6.6-15.1 12.9-21.3 19.2l-7.1-7.1c6.5-6.6 14-13 21.9-19.7 23.5-20.1 50-42.8 58-76.6.5-2 2.1-3.5 4.1-3.8 2-.3 4 .6 5.1 2.3.4.7 9.9 16.2 13.9 37.8 5.3 29-2.1 55.1-21.3 75.4-10.9 11.4-21 21.1-30.9 30.5-29.5 27.8-52.6 49.8-62.5 90.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 195h10v312h-10V195z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M121 507c-32 0-78.7-9.8-78.7-103 0-49.3-37.3-78.3-37.3-78.3 48 0 88.7 39.3 88.7 100S121 507 121 507z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M93.7 425.7c0-60.7-40.7-100-88.7-100 0 0 62.7 4 62.7 90.7C67.7 503 121 507 121 507s-27.3-20.7-27.3-81.3z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M391 507c32 0 78.7-9.8 78.7-103 0-49.3 37.3-78.3 37.3-78.3-48 0-88.7 39.3-88.7 100S391 507 391 507z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M418.3 425.7c0-60.7 40.7-100 88.7-100 0 0-62.7 4-62.7 90.7C444.3 503 391 507 391 507s27.3-20.7 27.3-81.3z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M116 277h10v230h-10V277zM386 277h10v230h-10V277z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M316 201c0 57.3 0 150 75 150s75-83.3 75-150c0 0-6.6.6-16 4 0 0-8-44-21.3-44s-38.6 44-38.6 44-24.4-44-38-44c-13.6 0-24.7 44-24.7 44-3.8-1.9-7.6-3.3-11.4-4z" }),
        React__default['default'].createElement("path", { fill: "#849FFC", d: "M425 218.4s-17.2-39-35-39c-17.9 0-38 44.6-38 44.6v59h73s-1-64.6 0-64.6z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M196 201c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44s38.6 44 38.6 44 24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.8-1.9 7.6-3.3 11.4-4z" }),
        React__default['default'].createElement("path", { fill: "#849FFC", d: "M159.8 224.1s-20-44.6-37.9-44.6-34.9 39-34.9 39V282h73l-.2-57.9z" }),
        React__default['default'].createElement("path", { fill: "#5173EC", d: "M46 201s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M191.9 274.6c-6.7 40.7-24.4 76.4-70.9 76.4-47.7 0-65.1-33.7-71.4-75.4 10 19.5 39.2 67.7 73.2 38 .3-14.7.1-29.9-1.8-37.6.5 1.2 17.2 41.6 32.5 37.5 13.7-3.7 27.7-28.8 38.4-38.9z" }),
        React__default['default'].createElement("path", { fill: "#5173EC", d: "M466 201s-61.3 6-75 75c0 0-37.7-67.7-75-75 0 57.3 0 150 75 150s75-83.3 75-150z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M320.1 274.6c6.7 40.7 24.4 76.4 70.9 76.4 47.7 0 65.1-33.7 71.4-75.4-10 19.5-39.2 67.7-73.2 38-.3-14.7-.1-29.9 1.8-37.6-.5 1.2-17.2 41.6-32.5 37.5-13.7-3.7-27.7-28.8-38.4-38.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6-85.3-68.9-101.2-136.7 0 0-37.5 60.4 6.8 107.1 44.3 46.7 80.8 67.8 94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6 85.3-68.9 101.2-136.7 0 0 37.5 60.4-6.8 107.1-44.3 46.7-80.8 67.8-94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M154.8 277s-13.2 44.7 14.8 74c28 29.3 86.3 49.3 86.3 156v-93.3c.1-45.5-85.2-68.9-101.1-136.7zM357.2 277s13.2 44.7-14.8 74c-28 29.3-86.3 49.3-86.3 156v-93.3c-.1-45.5 85.2-68.9 101.1-136.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M251 120h10v387h-10V120z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M331 45c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44C231.7 5 257 49 257 49s24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.7-1.9 7.5-3.3 11.3-4z" }),
        React__default['default'].createElement("path", { fill: "#849FFC", d: "M294.8 68s-20-44.5-37.9-44.5S222 62.6 222 62.6V129h73l-.2-61z" }),
        React__default['default'].createElement("path", { fill: "#5173EC", d: "M181 45s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#2E5EDA", d: "M321.9 140.6c-9.3 30.8-28 54.4-65.9 54.4-50.3 0-66.9-37.5-72.3-82.3.6 1.9 22.9 72.7 73.9 52 .6-16.7.6-35.7-1.6-44.6.8 1.4 34.8 66.1 65.9 20.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 200c-18.9 0-34.5-5.1-46.6-15.2-10.6-8.9-18.4-21.4-23.8-38.2-9.6-30-9.6-68-9.6-101.6 0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9 0 28.2 0 66.9-9.6 98-11.5 37.8-35.2 57-70.2 57zM186 51c0 31.3.5 65.8 9.1 92.5 10.2 31.7 29.5 46.5 60.9 46.5 30.6 0 50.5-16.3 60.8-50 8.4-27.3 9.1-61.6 9.1-88.4-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.8-25.2-10.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 195.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM314.8 50.2C309.6 29.1 300.1 10 295 10c-.7 0-6.8.6-21.7 22.2l-8.2-5.7C281.5 2.7 290 0 295 0c8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.7 2.5zM201.9 49.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7C203.6 8.3 210.3 0 218.3 0c4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C225 10.6 219 10 218.3 10c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M290.1 70C282.4 52.8 267 28.5 257 28.5c-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.2 11.4 12.2 22.5 12.4 23l-9.1 4zM256 512c-2.3 0-4.3-1.5-4.8-3.8-10-40.3-33.1-62.3-62.3-90.2-9.8-9.4-20-19.1-30.9-30.5-19.3-20.3-26.7-46.3-21.3-75.4 4-21.6 13.5-37.1 13.9-37.8 1.1-1.7 3.1-2.6 5.1-2.3 2 .3 3.6 1.8 4.1 3.8 7.9 33.8 34.5 56.6 58 76.6 22.3 19.1 43.4 37.1 43.4 61.2V507c0 2.5-1.9 4.7-4.4 5h-.8zM153.7 290.4c-2.6 6.1-5.5 14.4-7.2 23.8-4.7 26 1.6 48.3 18.8 66.4 10.7 11.2 20.8 20.9 30.5 30.2 23.1 22.1 42.5 40.6 55.2 67.2v-64.2c0-19.5-18.5-35.3-39.9-53.6-21.7-18.8-46.1-39.6-57.4-69.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.9 508.2l-9.7-2.4c10.7-43.1 34.7-66 65.1-95 9.8-9.3 19.8-18.9 30.5-30.2 30.4-32 19.5-71.4 11.6-90.1-11.3 30.1-35.7 51-57.4 69.6-7.7 6.6-15.1 12.9-21.3 19.2l-7.1-7.1c6.5-6.6 14-13 21.9-19.7 23.5-20.1 50-42.8 58-76.6.5-2 2.1-3.5 4.1-3.8 2-.3 4 .6 5.1 2.3.4.7 9.9 16.2 13.9 37.8 5.3 29-2.1 55.1-21.3 75.4-10.9 11.4-21 21.1-30.9 30.5-29.5 27.8-52.6 49.8-62.5 90.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 195h10v312h-10V195zM126 351.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM179.8 206.2c-5.3-21-14.7-40.2-19.8-40.2-.7 0-6.8.6-21.7 22.2l-8.2-5.7c16.4-23.8 25-26.6 30-26.6 8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.8 2.6zM66.9 205.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7 5.7-17.1 12.4-25.4 20.4-25.4 4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C90 166.6 84 166 83.3 166c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M155.1 226c-7.7-17.2-23.1-41.5-33.1-41.5-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.3 11.3 12.3 22.5 12.5 22.9l-9.2 4.1zM116 351h10v156h-10V351z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M121 512c-15 0-36.9-1.8-54.7-17.8-19.2-17.3-29-47.6-29-90.2 0-46.3-35-74.1-35.4-74.4-1.7-1.3-2.4-3.5-1.7-5.6.7-2.1 2.6-3.4 4.7-3.4 25.3 0 48.7 10.2 66 28.8 17.8 19.2 27.7 46.3 27.7 76.2 0 57 25.1 77.2 25.4 77.4 1.7 1.3 2.4 3.6 1.7 5.6-.7 2-2.6 3.4-4.7 3.4zM18.5 331.7c11.6 12.9 28.8 37.7 28.8 72.3 0 39.6 8.6 67.4 25.7 82.8 11.1 10 24.6 13.5 36.2 14.7-8.6-11.7-20.5-35.2-20.5-75.8 0-49.8-28.8-87.3-70.2-94zM391 356c-8 0-15.6-1-22.4-3.1l2.8-9.6c5.9 1.8 12.5 2.6 19.6 2.6 31.3 0 50.7-14.8 60.9-46.5 8.6-26.7 9.1-61.2 9.1-92.5-5.7 1.3-15.2 4.2-25.2 10.2-21.1 12.7-34.6 32.8-39.9 59.8-.4 2.1-2.1 3.6-4.1 4-2.1.3-4.1-.7-5.1-2.5-.3-.6-32.9-58.5-65.6-70.8.1 35.3 1.1 80.7 18.4 109.8l-8.6 5.1C311 289.3 311 238.2 311 201c0-1.5.7-2.9 1.8-3.9s2.7-1.3 4.1-1c30.2 5.9 59.6 47.2 72.1 67 9.1-29.8 27.4-46.1 42-54.8 17.8-10.6 33.8-12.2 34.4-12.3 1.4-.1 2.8.3 3.8 1.3 1 .9 1.6 2.3 1.6 3.7 0 33.6 0 71.6-9.6 101.5-5.4 16.8-13.2 29.3-23.8 38.2-11.9 10.2-27.5 15.3-46.4 15.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M386 351.4c-.2-2.4-4.3-58.3.1-76.6l9.7 2.4c-4.1 16.7.1 72.9.1 73.4l-9.9.8zM332.2 206.2l-9.7-2.4c.1-.5 2.9-11.5 7.4-22.6 6.9-17 14.1-25.2 22.1-25.2 5 0 13.5 2.7 29.9 26.4l-8.2 5.7c-14.8-21.5-21-22.1-21.6-22.1-5.2 0-14.7 19.1-19.9 40.2zM445.1 205.9c0-.1-2-10.9-5.5-21.4-4.9-14.6-9.3-18.5-10.9-18.5-.6 0-6.7.6-21.9 22.2l-8.2-5.8c16.7-23.7 25.2-26.4 30.1-26.4 8 0 14.7 8.3 20.4 25.4 3.7 11.2 5.8 22.2 5.8 22.7l-9.8 1.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M356.9 226l-9.1-4.1c.2-.5 5.2-11.6 12.5-22.9 10.7-16.5 20.4-24.5 29.8-24.5 20.6 0 37.5 37.8 39.4 42.1l-9.2 4c-6-14-19.6-36.1-30.2-36.1-10.1 0-25.5 24.3-33.2 41.5zM386 351h10v156h-10V351z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M391 512c-2.1 0-4.1-1.4-4.7-3.4-.7-2 0-4.3 1.7-5.6.4-.3 25.4-20.5 25.4-77.4 0-29.9 9.8-56.9 27.7-76.2 17.3-18.6 40.7-28.8 66-28.8 2.1 0 4 1.4 4.7 3.4.7 2 0 4.3-1.7 5.6-.3.3-35.4 28.2-35.4 74.4 0 42.5-9.8 72.9-29 90.2-17.8 16-39.7 17.8-54.7 17.8zm102.5-180.3c-41.4 6.7-70.1 44.1-70.1 93.9 0 40.6-11.9 64.1-20.5 75.8 11.6-1.2 25-4.7 36.2-14.7 17-15.3 25.7-43.2 25.7-82.8-.1-34.5 17-59.3 28.7-72.2zM180.9 323l-8.6-5.2c17.5-29.1 18.6-74.7 18.6-110.2-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.9-25.2-10.2 0 12.7.1 25.8.8 38.7l-10 .5C41 231 41 215.7 41 201c0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9.2 37.4.2 88.7-19.9 122zM121 356c-25.3 0-44.7-9.2-57.7-27.3-10.3-14.4-16.9-34.8-19.9-62.1l9.9-1.1C59.5 321.2 80.4 346 121 346c7.1 0 13.7-.9 19.6-2.6l2.8 9.6c-6.8 2-14.4 3-22.4 3z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M121 507c-32 0-78.7-9.8-78.7-103 0-49.3-37.3-78.3-37.3-78.3 48 0 88.7 39.3 88.7 100S121 507 121 507z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M93.7 425.7c0-60.7-40.7-100-88.7-100 0 0 62.7 4 62.7 90.7C67.7 503 121 507 121 507s-27.3-20.7-27.3-81.3z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M391 507c32 0 78.7-9.8 78.7-103 0-49.3 37.3-78.3 37.3-78.3-48 0-88.7 39.3-88.7 100S391 507 391 507z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M418.3 425.7c0-60.7 40.7-100 88.7-100 0 0-62.7 4-62.7 90.7C444.3 503 391 507 391 507s27.3-20.7 27.3-81.3z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M116 277h10v230h-10V277zM386 277h10v230h-10V277z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M316 201c0 57.3 0 150 75 150s75-83.3 75-150c0 0-6.6.6-16 4 0 0-8-44-21.3-44s-38.6 44-38.6 44-24.4-44-38-44c-13.6 0-24.7 44-24.7 44-3.8-1.9-7.6-3.3-11.4-4z" }),
        React__default['default'].createElement("path", { fill: "#E17084", d: "M425 218.4s-17.2-39-35-39c-17.9 0-38 44.6-38 44.6v59h73s-1-64.6 0-64.6z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M196 201c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44s38.6 44 38.6 44 24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.8-1.9 7.6-3.3 11.4-4z" }),
        React__default['default'].createElement("path", { fill: "#E17084", d: "M159.8 224.1s-20-44.6-37.9-44.6-34.9 39-34.9 39V282h73l-.2-57.9z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M46 201s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M191.9 274.6c-6.7 40.7-24.4 76.4-70.9 76.4-47.7 0-65.1-33.7-71.4-75.4 10 19.5 39.2 67.7 73.2 38 .3-14.7.1-29.9-1.8-37.6.5 1.2 17.2 41.6 32.5 37.5 13.7-3.7 27.7-28.8 38.4-38.9z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M466 201s-61.3 6-75 75c0 0-37.7-67.7-75-75 0 57.3 0 150 75 150s75-83.3 75-150z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M320.1 274.6c6.7 40.7 24.4 76.4 70.9 76.4 47.7 0 65.1-33.7 71.4-75.4-10 19.5-39.2 67.7-73.2 38-.3-14.7-.1-29.9 1.8-37.6-.5 1.2-17.2 41.6-32.5 37.5-13.7-3.7-27.7-28.8-38.4-38.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6-85.3-68.9-101.2-136.7 0 0-37.5 60.4 6.8 107.1 44.3 46.7 80.8 67.8 94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6 85.3-68.9 101.2-136.7 0 0 37.5 60.4-6.8 107.1-44.3 46.7-80.8 67.8-94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M154.8 277s-13.2 44.7 14.8 74c28 29.3 86.3 49.3 86.3 156v-93.3c.1-45.5-85.2-68.9-101.1-136.7zM357.2 277s13.2 44.7-14.8 74c-28 29.3-86.3 49.3-86.3 156v-93.3c-.1-45.5 85.2-68.9 101.1-136.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M251 120h10v387h-10V120z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M331 45c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44C231.7 5 257 49 257 49s24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.7-1.9 7.5-3.3 11.3-4z" }),
        React__default['default'].createElement("path", { fill: "#E17084", d: "M294.8 68s-20-44.5-37.9-44.5S222 62.6 222 62.6V129h73l-.2-61z" }),
        React__default['default'].createElement("path", { fill: "#D84861", d: "M181 45s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#C12944", d: "M321.9 140.6c-9.3 30.8-28 54.4-65.9 54.4-50.3 0-66.9-37.5-72.3-82.3.6 1.9 22.9 72.7 73.9 52 .6-16.7.6-35.7-1.6-44.6.8 1.4 34.8 66.1 65.9 20.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 200c-18.9 0-34.5-5.1-46.6-15.2-10.6-8.9-18.4-21.4-23.8-38.2-9.6-30-9.6-68-9.6-101.6 0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9 0 28.2 0 66.9-9.6 98-11.5 37.8-35.2 57-70.2 57zM186 51c0 31.3.5 65.8 9.1 92.5 10.2 31.7 29.5 46.5 60.9 46.5 30.6 0 50.5-16.3 60.8-50 8.4-27.3 9.1-61.6 9.1-88.4-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.8-25.2-10.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 195.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM314.8 50.2C309.6 29.1 300.1 10 295 10c-.7 0-6.8.6-21.7 22.2l-8.2-5.7C281.5 2.7 290 0 295 0c8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.7 2.5zM201.9 49.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7C203.6 8.3 210.3 0 218.3 0c4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C225 10.6 219 10 218.3 10c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M290.1 70C282.4 52.8 267 28.5 257 28.5c-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.2 11.4 12.2 22.5 12.4 23l-9.1 4zM256 512c-2.3 0-4.3-1.5-4.8-3.8-10-40.3-33.1-62.3-62.3-90.2-9.8-9.4-20-19.1-30.9-30.5-19.3-20.3-26.7-46.3-21.3-75.4 4-21.6 13.5-37.1 13.9-37.8 1.1-1.7 3.1-2.6 5.1-2.3 2 .3 3.6 1.8 4.1 3.8 7.9 33.8 34.5 56.6 58 76.6 22.3 19.1 43.4 37.1 43.4 61.2V507c0 2.5-1.9 4.7-4.4 5h-.8zM153.7 290.4c-2.6 6.1-5.5 14.4-7.2 23.8-4.7 26 1.6 48.3 18.8 66.4 10.7 11.2 20.8 20.9 30.5 30.2 23.1 22.1 42.5 40.6 55.2 67.2v-64.2c0-19.5-18.5-35.3-39.9-53.6-21.7-18.8-46.1-39.6-57.4-69.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.9 508.2l-9.7-2.4c10.7-43.1 34.7-66 65.1-95 9.8-9.3 19.8-18.9 30.5-30.2 30.4-32 19.5-71.4 11.6-90.1-11.3 30.1-35.7 51-57.4 69.6-7.7 6.6-15.1 12.9-21.3 19.2l-7.1-7.1c6.5-6.6 14-13 21.9-19.7 23.5-20.1 50-42.8 58-76.6.5-2 2.1-3.5 4.1-3.8 2-.3 4 .6 5.1 2.3.4.7 9.9 16.2 13.9 37.8 5.3 29-2.1 55.1-21.3 75.4-10.9 11.4-21 21.1-30.9 30.5-29.5 27.8-52.6 49.8-62.5 90.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 195h10v312h-10V195zM126 351.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM179.8 206.2c-5.3-21-14.7-40.2-19.8-40.2-.7 0-6.8.6-21.7 22.2l-8.2-5.7c16.4-23.8 25-26.6 30-26.6 8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.8 2.6zM66.9 205.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7 5.7-17.1 12.4-25.4 20.4-25.4 4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C90 166.6 84 166 83.3 166c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M155.1 226c-7.7-17.2-23.1-41.5-33.1-41.5-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.3 11.3 12.3 22.5 12.5 22.9l-9.2 4.1zM116 351h10v156h-10V351z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M121 512c-15 0-36.9-1.8-54.7-17.8-19.2-17.3-29-47.6-29-90.2 0-46.3-35-74.1-35.4-74.4-1.7-1.3-2.4-3.5-1.7-5.6.7-2.1 2.6-3.4 4.7-3.4 25.3 0 48.7 10.2 66 28.8 17.8 19.2 27.7 46.3 27.7 76.2 0 57 25.1 77.2 25.4 77.4 1.7 1.3 2.4 3.6 1.7 5.6-.7 2-2.6 3.4-4.7 3.4zM18.5 331.7c11.6 12.9 28.8 37.7 28.8 72.3 0 39.6 8.6 67.4 25.7 82.8 11.1 10 24.6 13.5 36.2 14.7-8.6-11.7-20.5-35.2-20.5-75.8 0-49.8-28.8-87.3-70.2-94zM391 356c-8 0-15.6-1-22.4-3.1l2.8-9.6c5.9 1.8 12.5 2.6 19.6 2.6 31.3 0 50.7-14.8 60.9-46.5 8.6-26.7 9.1-61.2 9.1-92.5-5.7 1.3-15.2 4.2-25.2 10.2-21.1 12.7-34.6 32.8-39.9 59.8-.4 2.1-2.1 3.6-4.1 4-2.1.3-4.1-.7-5.1-2.5-.3-.6-32.9-58.5-65.6-70.8.1 35.3 1.1 80.7 18.4 109.8l-8.6 5.1C311 289.3 311 238.2 311 201c0-1.5.7-2.9 1.8-3.9s2.7-1.3 4.1-1c30.2 5.9 59.6 47.2 72.1 67 9.1-29.8 27.4-46.1 42-54.8 17.8-10.6 33.8-12.2 34.4-12.3 1.4-.1 2.8.3 3.8 1.3 1 .9 1.6 2.3 1.6 3.7 0 33.6 0 71.6-9.6 101.5-5.4 16.8-13.2 29.3-23.8 38.2-11.9 10.2-27.5 15.3-46.4 15.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M386 351.4c-.2-2.4-4.3-58.3.1-76.6l9.7 2.4c-4.1 16.7.1 72.9.1 73.4l-9.9.8zM332.2 206.2l-9.7-2.4c.1-.5 2.9-11.5 7.4-22.6 6.9-17 14.1-25.2 22.1-25.2 5 0 13.5 2.7 29.9 26.4l-8.2 5.7c-14.8-21.5-21-22.1-21.6-22.1-5.2 0-14.7 19.1-19.9 40.2zM445.1 205.9c0-.1-2-10.9-5.5-21.4-4.9-14.6-9.3-18.5-10.9-18.5-.6 0-6.7.6-21.9 22.2l-8.2-5.8c16.7-23.7 25.2-26.4 30.1-26.4 8 0 14.7 8.3 20.4 25.4 3.7 11.2 5.8 22.2 5.8 22.7l-9.8 1.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M356.9 226l-9.1-4.1c.2-.5 5.2-11.6 12.5-22.9 10.7-16.5 20.4-24.5 29.8-24.5 20.6 0 37.5 37.8 39.4 42.1l-9.2 4c-6-14-19.6-36.1-30.2-36.1-10.1 0-25.5 24.3-33.2 41.5zM386 351h10v156h-10V351z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M391 512c-2.1 0-4.1-1.4-4.7-3.4-.7-2 0-4.3 1.7-5.6.4-.3 25.4-20.5 25.4-77.4 0-29.9 9.8-56.9 27.7-76.2 17.3-18.6 40.7-28.8 66-28.8 2.1 0 4 1.4 4.7 3.4.7 2 0 4.3-1.7 5.6-.3.3-35.4 28.2-35.4 74.4 0 42.5-9.8 72.9-29 90.2-17.8 16-39.7 17.8-54.7 17.8zm102.5-180.3c-41.4 6.7-70.1 44.1-70.1 93.9 0 40.6-11.9 64.1-20.5 75.8 11.6-1.2 25-4.7 36.2-14.7 17-15.3 25.7-43.2 25.7-82.8-.1-34.5 17-59.3 28.7-72.2zM180.9 323l-8.6-5.2c17.5-29.1 18.6-74.7 18.6-110.2-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.9-25.2-10.2 0 12.7.1 25.8.8 38.7l-10 .5C41 231 41 215.7 41 201c0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9.2 37.4.2 88.7-19.9 122zM121 356c-25.3 0-44.7-9.2-57.7-27.3-10.3-14.4-16.9-34.8-19.9-62.1l9.9-1.1C59.5 321.2 80.4 346 121 346c7.1 0 13.7-.9 19.6-2.6l2.8 9.6c-6.8 2-14.4 3-22.4 3z" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M121 507c-32 0-78.7-9.8-78.7-103 0-49.3-37.3-78.3-37.3-78.3 48 0 88.7 39.3 88.7 100S121 507 121 507z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M93.7 425.7c0-60.7-40.7-100-88.7-100 0 0 62.7 4 62.7 90.7C67.7 503 121 507 121 507s-27.3-20.7-27.3-81.3z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M391 507c32 0 78.7-9.8 78.7-103 0-49.3 37.3-78.3 37.3-78.3-48 0-88.7 39.3-88.7 100S391 507 391 507z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M418.3 425.7c0-60.7 40.7-100 88.7-100 0 0-62.7 4-62.7 90.7C444.3 503 391 507 391 507s27.3-20.7 27.3-81.3z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M116 277h10v230h-10V277zM386 277h10v230h-10V277z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M316 201c0 57.3 0 150 75 150s75-83.3 75-150c0 0-6.6.6-16 4 0 0-8-44-21.3-44s-38.6 44-38.6 44-24.4-44-38-44c-13.6 0-24.7 44-24.7 44-3.8-1.9-7.6-3.3-11.4-4z" }),
        React__default['default'].createElement("path", { fill: "#FCE48E", d: "M425 218.4s-17.2-39-35-39c-17.9 0-38 44.6-38 44.6v59h73s-1-64.6 0-64.6z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M196 201c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44s38.6 44 38.6 44 24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.8-1.9 7.6-3.3 11.4-4z" }),
        React__default['default'].createElement("path", { fill: "#FCE48E", d: "M159.8 224.1s-20-44.6-37.9-44.6-34.9 39-34.9 39V282h73l-.2-57.9z" }),
        React__default['default'].createElement("path", { fill: "#D8B848", d: "M46 201s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M191.9 274.6c-6.7 40.7-24.4 76.4-70.9 76.4-47.7 0-65.1-33.7-71.4-75.4 10 19.5 39.2 67.7 73.2 38 .3-14.7.1-29.9-1.8-37.6.5 1.2 17.2 41.6 32.5 37.5 13.7-3.7 27.7-28.8 38.4-38.9z" }),
        React__default['default'].createElement("path", { fill: "#D8B848", d: "M466 201s-61.3 6-75 75c0 0-37.7-67.7-75-75 0 57.3 0 150 75 150s75-83.3 75-150z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M320.1 274.6c6.7 40.7 24.4 76.4 70.9 76.4 47.7 0 65.1-33.7 71.4-75.4-10 19.5-39.2 67.7-73.2 38-.3-14.7-.1-29.9 1.8-37.6-.5 1.2-17.2 41.6-32.5 37.5-13.7-3.7-27.7-28.8-38.4-38.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6-85.3-68.9-101.2-136.7 0 0-37.5 60.4 6.8 107.1 44.3 46.7 80.8 67.8 94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M256 507v-93.3c0-45.6 85.3-68.9 101.2-136.7 0 0 37.5 60.4-6.8 107.1-44.3 46.7-80.8 67.8-94.4 122.9z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M154.8 277s-13.2 44.7 14.8 74c28 29.3 86.3 49.3 86.3 156v-93.3c.1-45.5-85.2-68.9-101.1-136.7zM357.2 277s13.2 44.7-14.8 74c-28 29.3-86.3 49.3-86.3 156v-93.3c-.1-45.5 85.2-68.9 101.1-136.7z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M251 120h10v387h-10V120z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M331 45c0 57.3 0 150-75 150s-75-83.3-75-150c0 0 6.6.6 16 4 0 0 8-44 21.3-44C231.7 5 257 49 257 49s24.4-44 38-44c13.6 0 24.7 44 24.7 44 3.7-1.9 7.5-3.3 11.3-4z" }),
        React__default['default'].createElement("path", { fill: "#FCE48E", d: "M294.8 68s-20-44.5-37.9-44.5S222 62.6 222 62.6V129h73l-.2-61z" }),
        React__default['default'].createElement("path", { fill: "#D8B848", d: "M181 45s61.3 6 75 75c0 0 37.7-67.7 75-75 0 57.3 0 150-75 150s-75-83.3-75-150z" }),
        React__default['default'].createElement("path", { fill: "#E3BE38", d: "M321.9 140.6c-9.3 30.8-28 54.4-65.9 54.4-50.3 0-66.9-37.5-72.3-82.3.6 1.9 22.9 72.7 73.9 52 .6-16.7.6-35.7-1.6-44.6.8 1.4 34.8 66.1 65.9 20.5z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M256 200c-18.9 0-34.5-5.1-46.6-15.2-10.6-8.9-18.4-21.4-23.8-38.2-9.6-30-9.6-68-9.6-101.6 0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9 0 28.2 0 66.9-9.6 98-11.5 37.8-35.2 57-70.2 57zM186 51c0 31.3.5 65.8 9.1 92.5 10.2 31.7 29.5 46.5 60.9 46.5 30.6 0 50.5-16.3 60.8-50 8.4-27.3 9.1-61.6 9.1-88.4-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.8-25.2-10.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M261 195.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM314.8 50.2C309.6 29.1 300.1 10 295 10c-.7 0-6.8.6-21.7 22.2l-8.2-5.7C281.5 2.7 290 0 295 0c8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.7 2.5zM201.9 49.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7C203.6 8.3 210.3 0 218.3 0c4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C225 10.6 219 10 218.3 10c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M290.1 70C282.4 52.8 267 28.5 257 28.5c-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.2 11.4 12.2 22.5 12.4 23l-9.1 4zM256 512c-2.3 0-4.3-1.5-4.8-3.8-10-40.3-33.1-62.3-62.3-90.2-9.8-9.4-20-19.1-30.9-30.5-19.3-20.3-26.7-46.3-21.3-75.4 4-21.6 13.5-37.1 13.9-37.8 1.1-1.7 3.1-2.6 5.1-2.3 2 .3 3.6 1.8 4.1 3.8 7.9 33.8 34.5 56.6 58 76.6 22.3 19.1 43.4 37.1 43.4 61.2V507c0 2.5-1.9 4.7-4.4 5h-.8zM153.7 290.4c-2.6 6.1-5.5 14.4-7.2 23.8-4.7 26 1.6 48.3 18.8 66.4 10.7 11.2 20.8 20.9 30.5 30.2 23.1 22.1 42.5 40.6 55.2 67.2v-64.2c0-19.5-18.5-35.3-39.9-53.6-21.7-18.8-46.1-39.6-57.4-69.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M260.9 508.2l-9.7-2.4c10.7-43.1 34.7-66 65.1-95 9.8-9.3 19.8-18.9 30.5-30.2 30.4-32 19.5-71.4 11.6-90.1-11.3 30.1-35.7 51-57.4 69.6-7.7 6.6-15.1 12.9-21.3 19.2l-7.1-7.1c6.5-6.6 14-13 21.9-19.7 23.5-20.1 50-42.8 58-76.6.5-2 2.1-3.5 4.1-3.8 2-.3 4 .6 5.1 2.3.4.7 9.9 16.2 13.9 37.8 5.3 29-2.1 55.1-21.3 75.4-10.9 11.4-21 21.1-30.9 30.5-29.5 27.8-52.6 49.8-62.5 90.1z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M251 195h10v312h-10V195zM126 351.4l-10-.8c0-.6 4.2-56.7.1-73.4l9.7-2.4c4.5 18.2.4 74.2.2 76.6zM179.8 206.2c-5.3-21-14.7-40.2-19.8-40.2-.7 0-6.8.6-21.7 22.2l-8.2-5.7c16.4-23.8 25-26.6 30-26.6 8 0 15.2 8.2 22.1 25.1 4.5 11.2 7.3 22.2 7.4 22.6l-9.8 2.6zM66.9 205.9l-9.8-1.8c.1-.5 2.1-11.5 5.8-22.7 5.7-17.1 12.4-25.4 20.4-25.4 4.9 0 13.3 2.7 30.1 26.4l-8.2 5.8C90 166.6 84 166 83.3 166c-1.6 0-6 3.9-10.9 18.6-3.5 10.5-5.5 21.2-5.5 21.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M155.1 226c-7.7-17.2-23.1-41.5-33.1-41.5-11 0-25.1 24.3-30.2 36.1l-9.2-4c1.9-4.3 18.8-42.1 39.4-42.1 9.3 0 19.1 8 29.8 24.5 7.3 11.3 12.3 22.5 12.5 22.9l-9.2 4.1zM116 351h10v156h-10V351z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M121 512c-15 0-36.9-1.8-54.7-17.8-19.2-17.3-29-47.6-29-90.2 0-46.3-35-74.1-35.4-74.4-1.7-1.3-2.4-3.5-1.7-5.6.7-2.1 2.6-3.4 4.7-3.4 25.3 0 48.7 10.2 66 28.8 17.8 19.2 27.7 46.3 27.7 76.2 0 57 25.1 77.2 25.4 77.4 1.7 1.3 2.4 3.6 1.7 5.6-.7 2-2.6 3.4-4.7 3.4zM18.5 331.7c11.6 12.9 28.8 37.7 28.8 72.3 0 39.6 8.6 67.4 25.7 82.8 11.1 10 24.6 13.5 36.2 14.7-8.6-11.7-20.5-35.2-20.5-75.8 0-49.8-28.8-87.3-70.2-94zM391 356c-8 0-15.6-1-22.4-3.1l2.8-9.6c5.9 1.8 12.5 2.6 19.6 2.6 31.3 0 50.7-14.8 60.9-46.5 8.6-26.7 9.1-61.2 9.1-92.5-5.7 1.3-15.2 4.2-25.2 10.2-21.1 12.7-34.6 32.8-39.9 59.8-.4 2.1-2.1 3.6-4.1 4-2.1.3-4.1-.7-5.1-2.5-.3-.6-32.9-58.5-65.6-70.8.1 35.3 1.1 80.7 18.4 109.8l-8.6 5.1C311 289.3 311 238.2 311 201c0-1.5.7-2.9 1.8-3.9s2.7-1.3 4.1-1c30.2 5.9 59.6 47.2 72.1 67 9.1-29.8 27.4-46.1 42-54.8 17.8-10.6 33.8-12.2 34.4-12.3 1.4-.1 2.8.3 3.8 1.3 1 .9 1.6 2.3 1.6 3.7 0 33.6 0 71.6-9.6 101.5-5.4 16.8-13.2 29.3-23.8 38.2-11.9 10.2-27.5 15.3-46.4 15.3z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M386 351.4c-.2-2.4-4.3-58.3.1-76.6l9.7 2.4c-4.1 16.7.1 72.9.1 73.4l-9.9.8zM332.2 206.2l-9.7-2.4c.1-.5 2.9-11.5 7.4-22.6 6.9-17 14.1-25.2 22.1-25.2 5 0 13.5 2.7 29.9 26.4l-8.2 5.7c-14.8-21.5-21-22.1-21.6-22.1-5.2 0-14.7 19.1-19.9 40.2zM445.1 205.9c0-.1-2-10.9-5.5-21.4-4.9-14.6-9.3-18.5-10.9-18.5-.6 0-6.7.6-21.9 22.2l-8.2-5.8c16.7-23.7 25.2-26.4 30.1-26.4 8 0 14.7 8.3 20.4 25.4 3.7 11.2 5.8 22.2 5.8 22.7l-9.8 1.8z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M356.9 226l-9.1-4.1c.2-.5 5.2-11.6 12.5-22.9 10.7-16.5 20.4-24.5 29.8-24.5 20.6 0 37.5 37.8 39.4 42.1l-9.2 4c-6-14-19.6-36.1-30.2-36.1-10.1 0-25.5 24.3-33.2 41.5zM386 351h10v156h-10V351z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M391 512c-2.1 0-4.1-1.4-4.7-3.4-.7-2 0-4.3 1.7-5.6.4-.3 25.4-20.5 25.4-77.4 0-29.9 9.8-56.9 27.7-76.2 17.3-18.6 40.7-28.8 66-28.8 2.1 0 4 1.4 4.7 3.4.7 2 0 4.3-1.7 5.6-.3.3-35.4 28.2-35.4 74.4 0 42.5-9.8 72.9-29 90.2-17.8 16-39.7 17.8-54.7 17.8zm102.5-180.3c-41.4 6.7-70.1 44.1-70.1 93.9 0 40.6-11.9 64.1-20.5 75.8 11.6-1.2 25-4.7 36.2-14.7 17-15.3 25.7-43.2 25.7-82.8-.1-34.5 17-59.3 28.7-72.2zM180.9 323l-8.6-5.2c17.5-29.1 18.6-74.7 18.6-110.2-32.8 12.3-65.3 70.2-65.6 70.8-1 1.8-3.1 2.8-5.1 2.5-2.1-.3-3.7-1.9-4.1-4-5.3-27-18.8-47.1-39.9-59.8-10-6-19.5-8.9-25.2-10.2 0 12.7.1 25.8.8 38.7l-10 .5C41 231 41 215.7 41 201c0-1.4.6-2.8 1.6-3.7 1-.9 2.4-1.4 3.8-1.3.7.1 16.6 1.7 34.4 12.3 14.6 8.7 32.9 25 42 54.8 12.5-19.8 41.9-61.1 72.1-67 1.5-.3 3 .1 4.1 1 1.2.9 1.8 2.4 1.8 3.9.2 37.4.2 88.7-19.9 122zM121 356c-25.3 0-44.7-9.2-57.7-27.3-10.3-14.4-16.9-34.8-19.9-62.1l9.9-1.1C59.5 321.2 80.4 346 121 346c7.1 0 13.7-.9 19.6-2.6l2.8 9.6c-6.8 2-14.4 3-22.4 3z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fill: "#399349", d: "M22.125 20.307s8.238-2.252 7.706 5.692c0 0-6.726 3.027-7.706-5.692zM47.83 24.703s-7.62-6.212-10.342-.436c-.012 0 4.113 7.399 10.343.436z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M22.125 20.308l7.706 5.69c.532-7.955-7.706-5.69-7.706-5.69zM47.794 24.74l.037-.037s-7.621-6.212-10.343-.436c0 0 .012.012.024.049l10.282.424z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M26.34 22.657l6.594 4.877-.719.974-6.594-4.877.719-.974zM33.004 23.48l9.656.416-.052 1.21-9.656-.416.052-1.21z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M31.911 33.567l-1.161-.339.17-.581c2.794-9.76 1.523-18.43 1.511-18.515l-.097-.594 1.198-.181.097.593c.06.363 1.33 9.01-1.536 19.024l-.182.593z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M50.855 41.293h-38.71l2.42 16.469c1.33 1.332 7.584 3.633 16.935 3.633 9.35 0 15.484-2.18 16.935-3.633l2.42-16.469z" }),
        React__default['default'].createElement("path", { fill: "#8D2323", d: "M12.968 46.863c3.87 1.017 10.73 1.696 18.532 1.696s14.661-.678 18.532-1.696l.823-5.57h-38.71l.823 5.57z" }),
        React__default['default'].createElement("path", { fill: "#AC2C2C", d: "M31.5 34.027c-12.097 0-21.895 1.623-21.895 3.633v3.633c0 2.01 9.798 3.633 21.895 3.633s21.895-1.623 21.895-3.633V37.66c0-2.01-9.798-3.633-21.895-3.633z" }),
        React__default['default'].createElement("path", { fill: "#CE4C4C", fillRule: "evenodd", d: "M31.5 34.027c-12.097 0-21.895 1.623-21.895 3.633v3.633c0 1.84 8.286 3.366 19.016 3.596A21.825 21.825 0 0031.5 34.027z", clipRule: "evenodd" }),
        React__default['default'].createElement("path", { fill: "#862727", d: "M31.5 41.293c12.092 0 21.895-1.627 21.895-3.633 0-2.006-9.803-3.633-21.895-3.633-12.093 0-21.895 1.627-21.895 3.633 0 2.007 9.802 3.633 21.895 3.633z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M22.427 8.452c0 2.761 3.92 2.907 3.92 2.907s-2.831 1.38-1.96 3.85c.87 2.47 4.572-1.235 4.572-1.235s-2.177 4.796 1.017 4.796c3.193 0 3.048-4.723 3.048-4.723s1.27 5.05 3.702 2.616c2.431-2.434-1.38-4.07-1.38-4.07s5.226 1.745 5.226-1.67-4.282-1.89-4.282-1.89 4.573-3.269 2.468-5.376C36.653 1.55 34.33 5.473 34.33 5.473S35.492.605 32.227.605c-3.267 0-2.54 4.65-2.54 4.65s-1.452-3.1-3.557-2.373c-2.105.727.145 4.263.145 4.263s-3.847-1.454-3.847 1.307z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M45.75 40.421c-3.823.545-8.806.872-14.25.872-5.444 0-10.427-.327-14.25-.872 1.536-1.49 4.936-4.529 8.819-6.273 1.766-.799 3.617-1.32 5.443-1.32 1.827 0 3.678.533 5.444 1.32 3.858 1.744 7.27 4.784 8.794 6.273z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M36.29 9.034s4.573-3.27 2.468-5.377c-.883-.884-1.815-.702-2.589-.194-1.197 5.813-5.988 10.305-11.94 11.08.025.218.073.436.158.678.871 2.47 4.573-1.235 4.573-1.235s-2.178 4.796 1.016 4.796c3.193 0 3.048-4.723 3.048-4.723s1.27 5.05 3.702 2.615c2.431-2.433-1.38-4.068-1.38-4.068s5.227 1.731 5.227-1.683c0-3.415-4.283-1.89-4.283-1.89z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M31.5 12.715a3.026 3.026 0 003.024-3.027A3.026 3.026 0 0031.5 6.66a3.026 3.026 0 00-3.024 3.027 3.026 3.026 0 003.024 3.028z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M31.5 13.32a3.642 3.642 0 01-3.63-3.633 3.642 3.642 0 013.63-3.632 3.642 3.642 0 013.629 3.633 3.642 3.642 0 01-3.63 3.632zm0-6.054c-1.33 0-2.42 1.09-2.42 2.421a2.428 2.428 0 002.42 2.422c1.33 0 2.42-1.09 2.42-2.421a2.428 2.428 0 00-2.42-2.422z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M29.976 19.375c-1.125 0-1.682-.509-1.96-.932-.472-.74-.435-1.768-.254-2.677-.835.57-1.85 1.054-2.698.86-.41-.097-.955-.375-1.245-1.21-.557-1.575.133-2.847.991-3.694-1.44-.4-2.987-1.356-2.987-3.27 0-1.053.471-1.598.87-1.864.69-.485 1.646-.485 2.42-.364-.351-.835-.665-1.913-.363-2.773.194-.545.605-.944 1.185-1.138 1.319-.46 2.384.206 3.134.993.096-.8.338-1.671.895-2.325C30.508.327 31.27 0 32.226 0c.92 0 1.67.34 2.165.969.556.702.726 1.67.75 2.543.544-.509 1.234-.969 1.984-1.066.52-.06 1.294.012 2.056.775.533.533.787 1.199.726 1.913-.084 1.078-.847 2.132-1.62 2.943.64.012 1.306.133 1.85.52.69.485 1.04 1.272 1.04 2.314 0 1.174-.532 1.816-.992 2.143-.69.496-1.633.617-2.528.581.206.29.363.63.436.993.157.836-.158 1.66-.944 2.458-.895.896-1.681.92-2.19.775-.701-.193-1.233-.799-1.633-1.477-.205.726-.532 1.477-1.076 2.046-.605.63-1.367.945-2.274.945zm-1.016-6.006a.608.608 0 01.544.86c-.448.98-.968 2.809-.484 3.56.06.096.242.375.944.375.568 0 1.028-.182 1.403-.57 1.1-1.125 1.04-3.51 1.04-3.535a.613.613 0 01.52-.618.612.612 0 01.666.448c.266 1.042.955 2.604 1.681 2.798.278.072.617-.085 1.004-.46.484-.485.702-.957.617-1.369-.157-.835-1.391-1.538-1.802-1.707a.603.603 0 01-.327-.775.618.618 0 01.762-.364c.762.255 2.976.763 3.944.061.326-.242.484-.617.484-1.162 0-.642-.17-1.078-.533-1.332-.798-.57-2.431-.17-2.94.012a.604.604 0 01-.737-.291.607.607 0 01.181-.775c.726-.52 2.65-2.18 2.758-3.5.037-.363-.084-.678-.375-.956-.338-.34-.69-.485-1.052-.436-1.028.133-2.117 1.622-2.431 2.131a.618.618 0 01-.75.254.602.602 0 01-.363-.702c.169-.69.423-2.688-.303-3.609-.266-.339-.665-.508-1.21-.508-.592 0-1.028.181-1.354.557-.774.908-.69 2.76-.593 3.39a.612.612 0 01-.423.679.608.608 0 01-.726-.327c-.012-.025-1.246-2.604-2.807-2.059-.302.109-.387.266-.435.4-.266.763.484 2.325.895 2.966a.6.6 0 01-.036.703.585.585 0 01-.678.181c-.484-.181-2.02-.593-2.685-.133-.085.06-.339.242-.339.872 0 2.143 3.303 2.3 3.339 2.3a.605.605 0 01.568.485.587.587 0 01-.326.666c-.097.049-2.335 1.175-1.657 3.1.133.376.302.412.375.436.725.17 2.334-1.03 3.205-1.889a.71.71 0 01.436-.157zM27.302 27.113c-.834 0-1.754-.157-2.625-.666-1.742-.993-2.806-3.04-3.145-6.079a.618.618 0 01.436-.654c.169-.048 4.161-1.114 6.64.92 1.38 1.127 1.985 2.943 1.827 5.401a.607.607 0 01-.35.509c-.085.036-1.283.569-2.783.569zm-4.5-6.333c.351 2.325 1.174 3.887 2.468 4.626 1.488.847 3.254.411 3.968.17.06-1.841-.411-3.186-1.403-3.997-1.537-1.26-3.98-.993-5.033-.8zM42.569 28.287c-.194 0-.376-.012-.557-.036-3.157-.351-4.984-3.572-5.056-3.705l1.052-.594c.012.024 1.609 2.81 4.137 3.088 1.524.17 3.133-.593 4.778-2.276-1.342-.957-4.971-3.258-7.342-2.01l-.557-1.078c3.653-1.926 8.964 2.349 9.194 2.53a.585.585 0 01.217.424.557.557 0 01-.157.448c-1.899 2.144-3.81 3.21-5.71 3.21z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M26.34 22.657l6.594 4.877-.719.974-6.594-4.877.719-.974zM33.004 23.48l9.656.416-.052 1.21-9.656-.416.052-1.21z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M32.08 32.986l-1.16-.34c2.794-9.76 1.524-18.43 1.511-18.514l1.198-.182c.049.363 1.319 9.01-1.548 19.036zM31.5 41.898c-5.879 0-11.42-.375-15.58-1.077C9.713 39.79 9 38.532 9 37.66h1.21c0 .205 1.004 1.162 5.903 1.973 4.1.678 9.569 1.053 15.387 1.053 5.819 0 11.274-.375 15.387-1.053 4.9-.811 5.903-1.768 5.903-1.974H54c0 .872-.714 2.131-6.92 3.16-4.16.703-9.701 1.078-15.58 1.078z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M33.932 45.507l-.025-1.211c5.287-.097 10.174-.509 13.742-1.175 4.258-.787 5.13-1.647 5.13-1.84v-3.633c0-.012-.243-.824-4.198-1.647-2.94-.617-7.089-1.066-11.674-1.26l.049-1.21c4.657.194 8.879.654 11.879 1.283 3.52.739 5.165 1.647 5.165 2.834v3.633c0 .811-.629 2.022-6.12 3.027-3.642.678-8.59 1.102-13.948 1.199zM31.5 45.531c-5.879 0-11.42-.375-15.58-1.078C9.713 43.424 9 42.166 9 41.293V37.66c0-1.187 1.633-2.095 5.141-2.833 2.988-.63 7.198-1.09 11.843-1.284l.048 1.21c-4.584.195-8.721.643-11.649 1.26-3.931.836-4.173 1.635-4.173 1.647v3.633c0 .206 1.004 1.163 5.903 1.974 4.1.678 9.569 1.053 15.387 1.053v1.211z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M31.5 62c-9.254 0-15.823-2.277-17.359-3.815a.538.538 0 01-.17-.339l-2.165-14.688 1.198-.182 2.129 14.47c1.476 1.248 7.452 3.343 16.367 3.343 8.637 0 14.734-1.938 16.367-3.33l2.129-14.47 1.197.18-2.153 14.69a.694.694 0 01-.17.339C47.396 59.663 41.37 62 31.5 62zM45.339 40.857c-2.299-2.228-8.262-7.435-13.839-7.435s-11.528 5.195-13.827 7.423l-.846-.872c2.407-2.337 8.66-7.762 14.673-7.762 6.012 0 12.266 5.437 14.673 7.774l-.834.872z" }),
        React__default['default'].createElement("g", { filter: "url(#filter0_i)" },
            React__default['default'].createElement("path", { fill: "#00AE11", fillOpacity: "0.72", d: "M30.263 46.569c.199-.759 1.275-.759 1.474 0l1.07 4.08c.07.266.278.473.544.543l4.08 1.07c.759.2.759 1.276 0 1.475l-4.08 1.07a.762.762 0 00-.543.545l-1.071 4.08c-.199.758-1.275.758-1.474 0l-1.07-4.08a.762.762 0 00-.545-.544l-4.08-1.07c-.758-.2-.758-1.276 0-1.475l4.08-1.07a.762.762 0 00.544-.544l1.071-4.08z" })),
        React__default['default'].createElement("path", { stroke: "#4D2419", d: "M30.747 46.696h0c.068-.261.438-.261.506 0h0l1.071 4.08h0c.116.44.46.784.9.9h0l4.08 1.07c.261.069.261.44 0 .508 0 0 0 0 0 0l-4.08 1.07h0c-.44.116-.784.46-.9.9l-1.07 4.08h0c-.069.261-.44.261-.507 0h0l-1.071-4.08s0 0 0 0a1.262 1.262 0 00-.9-.9h0l-4.08-1.07s0 0 0 0c-.261-.069-.261-.439 0-.508l4.08-1.07h0c.44-.116.784-.46.9-.9h0l1.07-4.08z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M51.495 9.255c.877-.686.45-2.133-.952-3.231-1.403-1.099-3.251-1.432-4.128-.746-.877.686-.45 2.133.952 3.231 1.403 1.099 3.252 1.432 4.128.746z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M50.23 5.767l.636.497L47.69 8.75l-.635-.497 3.176-2.486zM51.285 6.926l.635.497-2.75 2.153-.635-.497 2.75-2.153z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M48.395 6.821s-5.399.746-2.632 2.911c2.82 2.208 2.632-2.91 2.632-2.91zM48.395 6.821s6.485.106 3.719-2.06c-2.82-2.215-3.719 2.06-3.719 2.06z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M16.22 12.71c-.877-.687-2.725-.353-4.128.745-1.403 1.098-1.83 2.545-.952 3.232.877.686 2.725.352 4.128-.746 1.402-1.098 1.829-2.545.952-3.232z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M12.413 13.211l3.176 2.486-.635.497-3.176-2.486.635-.497zM11.333 14.35l2.794 2.187-.635.498-2.794-2.188.635-.497z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M13.686 14.704s-.575-4.922-3.431-2.686c-2.857 2.236 3.431 2.686 3.431 2.686z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M14.955 13.206l.635.497-.635.497-.636-.497.636-.497z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M46.993 10.64c-.476 0-.997-.219-1.554-.655-.79-.618-1.078-1.216-.844-1.779.503-1.244 3.395-1.68 3.719-1.722a.524.524 0 01.36.07c.098.063.16.162.16.26.019.542.046 3.27-1.373 3.748a1.46 1.46 0 01-.468.077zm.953-3.383c-1.006.204-2.282.619-2.498 1.153-.116.296.09.654.63 1.076.44.345.817.507 1.032.436.521-.183.818-1.448.836-2.665z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M48.637 7.173h-.251a.494.494 0 01-.333-.127.314.314 0 01-.098-.281c.053-.26.574-2.531 2.164-2.932.728-.183 1.51.042 2.318.675.727.57.979 1.097.727 1.554-.566 1.02-3.476 1.11-4.527 1.11zm1.967-2.693a.757.757 0 00-.215.028c-.683.168-1.204 1.174-1.446 1.969 1.554-.029 3.162-.275 3.386-.675.09-.162-.108-.45-.53-.78-.458-.367-.853-.542-1.195-.542z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M49.214 6.563l.635.497-1.143.895-.635-.497 1.143-.895zM51.317 6.901l.635.497-2.813 2.203-.636-.497L51.318 6.9zM13.963 14.422l1.626 1.272-.635.497-1.626-1.272.635-.497zM11.333 14.35l2.794 2.187-.635.498-2.794-2.188.635-.497z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.686 15.055h-.045c-.395-.028-3.907-.316-4.5-1.582-.243-.527.027-1.097.79-1.701.764-.605 1.5-.81 2.174-.62 1.626.458 1.985 3.207 2.021 3.524a.33.33 0 01-.126.28.598.598 0 01-.314.1zm-2.066-3.27c-.36 0-.754.254-1.05.479-.342.267-.729.654-.585.963.26.57 2.003.928 3.18 1.069-.198-1.034-.692-2.292-1.365-2.49a.787.787 0 00-.18-.02zM14.955 13.206l.635.498-.635.497-.636-.498.636-.497z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M12.357 17.397c-.62 0-1.15-.155-1.536-.464-.8-.626-.782-1.73.045-2.813l.772.359c-.593.787-.665 1.575-.18 1.962.315.246.827.316 1.447.203.7-.126 1.428-.464 2.048-.949.62-.485 1.05-1.055 1.212-1.603.144-.485.054-.893-.26-1.132-.494-.387-1.5-.33-2.506.14l-.458-.604c1.383-.647 2.802-.654 3.593-.035.539.421.718 1.054.503 1.786-.198.675-.719 1.364-1.456 1.94a5.856 5.856 0 01-2.479 1.14c-.251.049-.503.07-.745.07zM50.272 9.964c-.736 0-1.563-.218-2.371-.654l.512-.576c1.087.583 2.228.696 2.767.274.538-.422.386-1.343-.36-2.18l.737-.4c1.033 1.16 1.132 2.397.26 3.08-.395.302-.934.456-1.545.456zM45.907 7.496c-.584-.97-.512-1.92.197-2.468.7-.548 1.896-.605 3.135-.162l-.377.64c-.88-.316-1.698-.309-2.12.021-.431.338-.431.978-.018 1.674l-.817.295z" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_i", width: "14", height: "15", x: "24", y: "46", colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "1" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
                React__default['default'].createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
                React__default['default'].createElement("feBlend", { in2: "shape", result: "effect1_innerShadow" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H64V64H0z" })))));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React__default['default'].createElement(Icon$1H, { color: "invertedContrast" }) : React__default['default'].createElement(Icon$1K, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React__default['default'].createElement(Icon$1H, { color: "primary" }) : React__default['default'].createElement(Icon$1K, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled__default['default'].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$O;

var Flex = styled__default['default'](Box)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$N;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$29;
        case variants$2.WARNING:
            return Icon$2a;
        case variants$2.SUCCESS:
            return Icon$2b;
        case variants$2.INFO:
        default:
            return Icon$28;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$1F, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$M, templateObject_2$j, templateObject_3$8, templateObject_4$5;

var scales$4 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    switch (scale) {
        case scales$4.SM:
            return "32px";
        case scales$4.LG:
            return "48px";
        case scales$4.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$4.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$L;

var StyledBalanceInput = styled__default['default'](Box)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled__default['default'](Input$1)(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$K, templateObject_2$i;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onChange = _a.onChange, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, props = __rest(_a, ["value", "placeholder", "onChange", "currencyValue", "inputProps", "isWarning"]);
    return (React__default['default'].createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default['default'].createElement(StyledInput$1, __assign({ type: "text", value: value, onChange: onChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React__default['default'].createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Separator = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$1I, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$J, templateObject_2$h;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$I;

var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$5.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants$3.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$H;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$G;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$F;

var CardHeader = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$E;

var CardFooter = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$D;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$C;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$3.MD,
};
var templateObject_1$B;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$A, templateObject_2$g;

var plantFall = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Plant = styled__default['default'].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, plantFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingPlants = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var plants = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Plant, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$1e, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, plants);
};
var templateObject_1$z, templateObject_2$f;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$y;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$2 = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$x;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$w, templateObject_2$e;

var GridLayout$1 = styled__default['default'].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$v;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$u;

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$t;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$14, { color: "primary", ml: "4px" })));
};

var NotificationDotRoot = styled__default['default'].span(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$s, templateObject_2$d;

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$2;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);

var Bar = styled__default['default'].div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space);
var templateObject_1$r, templateObject_2$c;

var ProgressPlantWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressPlant, showProgressPlant = _e === void 0 ? false : _e;
    return (React__default['default'].createElement(StyledProgress, { variant: variant },
        showProgressPlant && (React__default['default'].createElement(ProgressPlantWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$Y, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$p;

var plantHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var plantHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var plantButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? plantHeadMax : plantHeadMain) + ");\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled__default['default'].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled__default['default'](Text)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var PlantButt = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), plantButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var PlantSlider = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled__default['default'].input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled__default['default'].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled__default['default'].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$o, templateObject_2$b, templateObject_3$7, templateObject_4$4, templateObject_5$3, templateObject_6$1, templateObject_7;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth = isMax ? "calc(100% - 16px)" : progressPercentage + "%";
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default['default'].createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default['default'].createElement(PlantButt, { disabled: disabled }),
        React__default['default'].createElement(PlantSlider, null,
            React__default['default'].createElement(BarBackground, { disabled: disabled }),
            React__default['default'].createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default['default'].createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default['default'].createElement(SliderLabelContainer, null,
            React__default['default'].createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$n, templateObject_2$a, templateObject_3$6, templateObject_4$3, templateObject_5$2;

var Icon$v = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M125.987 202.375s17.596-14.328 23.88-1.005c0 0-9.496 17.065-23.88 1.005z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M125.987 202.375c14.384 16.06 23.88-1.005 23.88-1.005l-23.88 1.005z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M161.961 221.2l-2.793-.196c2.262-31.337-9.022-51.698-9.133-51.893l2.43-1.369c.111.224 3.016 5.391 5.641 14.607 2.458 8.435 5.084 22.037 3.855 38.851z" }),
        React__default['default'].createElement("path", { fill: "#FFE3A8", d: "M138.528 128.641c8.49 0 8.937 12.065 8.937 12.065s4.246-8.714 11.842-6.033c7.597 2.682-3.798 14.077-3.798 14.077s14.747-6.703 14.747 3.128-14.524 9.385-14.524 9.385 15.529 3.91 8.044 11.395c-7.485 7.485-12.512-4.246-12.512-4.246s5.362 16.088-5.139 16.088c-10.502 0-5.81-13.155-5.81-13.155s-10.054 14.049-16.534 7.569c-6.48-6.48 5.586-13.63 5.586-13.63s-14.971 3.575-14.971-6.479c0-10.055 14.3-7.821 14.3-7.821s-9.524-4.468-7.289-10.948c2.234-6.48 13.099.447 13.099.447s-4.469-11.842 4.022-11.842z" }),
        React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M170.256 151.878c0-9.831-14.747-3.128-14.747-3.128s11.395-11.395 3.798-14.077a8.799 8.799 0 00-3.379-.502c-2.262 17.176-14.943 31.057-31.477 35.135-2.374 2.626-4.05 6.201-.67 9.608 6.479 6.48 16.534-7.569 16.534-7.569s-4.692 13.155 5.809 13.155c10.502 0 5.14-16.088 5.14-16.088s5.027 11.731 12.512 4.246c7.485-7.485-8.044-11.396-8.044-11.396s14.524.447 14.524-9.384z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M188.047 240.639l3.799-55.413 51.195 10.697-20.557 44.716h-34.437z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M209.078 188.829l-3.407 15.78c-.978 4.525 1.899 8.994 6.424 9.943a7.53 7.53 0 001.759.196c3.854 0 7.346-2.681 8.183-6.619l3.436-15.892-16.395-3.408z" }),
        React__default['default'].createElement("path", { fill: "#3179AF", d: "M212.988 210.475c-2.262-.475-3.687-2.71-3.212-4.972l9.832-45.609 8.183 1.759-9.831 45.61c-.475 2.262-2.71 3.686-4.972 3.212z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M254.604 254.604s-6.704-23.461-29.801-15.446c0 0-10.418-10.25-19.914-10.25-9.496 0-21.422 5.028-21.422 5.028s-14.524-12.848-22.903-12.848-12.847 11.367-26.254 16.758c-13.406 5.39-19.914 16.758-19.914 16.758h140.208zM142.326 166.346c5.399 0 9.776-4.377 9.776-9.776 0-5.398-4.377-9.775-9.776-9.775s-9.775 4.377-9.775 9.775c0 5.399 4.376 9.776 9.775 9.776z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M146.823 147.884a9.728 9.728 0 011.089 4.497c0 5.39-4.385 9.775-9.775 9.775a9.728 9.728 0 01-4.497-1.089 9.796 9.796 0 008.686 5.279c5.391 0 9.776-4.385 9.776-9.776a9.796 9.796 0 00-5.279-8.686z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M184.193 175.479s-19.02-5.195-17.791 13.127c.027 0 15.528 6.982 17.791-13.127z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M184.193 175.479l-17.791 13.127c.028 0 15.529 6.982 17.791-13.127z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M174.418 180.956l1.659 2.248L160.092 195l-1.659-2.248 15.985-11.796zM160.197 199.556l.12 2.79-22.293.959-.12-2.79 22.293-.959z" }),
        React__default['default'].createElement("path", { fill: "#265E87", d: "M217.094 171.513l8.183 1.843 2.514-11.703-8.183-1.787-2.514 11.647z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M221.507 122.329l-7.681 42.732 16.926 3.798 9.635-42.704c1.369-6.033-3.212-11.759-9.384-11.759-4.664 0-8.658 3.352-9.496 7.933z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M233.796 155.397l-17.568-3.714-.866 4.859 17.428 3.324 1.006-4.469zM236.198 144.728l-17.987-4.022-.95 5.251 17.82 3.715 1.117-4.944z" }),
        React__default['default'].createElement("path", { fill: "#FAAE52", d: "M225.317 136.942c2.134.333 4.466-3.264 5.209-8.035.744-4.77-.383-8.906-2.517-9.239-2.133-.332-4.466 3.265-5.209 8.035-.744 4.77.383 8.907 2.517 9.239z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M170.451 243.795s6.704-6.787 13.044-9.859c0 0-5.167-4.553-11.116-8.24-5.81 10.39-1.928 18.099-1.928 18.099z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M254.604 256H114.397c-.503 0-.95-.279-1.201-.698a1.385 1.385 0 010-1.397c.279-.475 6.926-11.842 20.612-17.344 6.284-2.542 10.529-6.424 14.272-9.859 4.105-3.771 7.653-7.011 12.512-7.011 7.849 0 20.166 10.055 23.182 12.625 2.877-1.145 12.82-4.804 21.143-4.804 8.686 0 17.819 7.792 20.277 10.054 6.87-2.206 13.015-1.927 18.294.81 9.244 4.804 12.372 15.418 12.484 15.864.112.419.028.866-.223 1.229-.308.335-.699.531-1.145.531zm-137.582-2.793h135.599c-1.257-3.044-4.413-9.245-10.474-12.373-4.776-2.458-10.446-2.597-16.87-.363-.502.168-1.061.056-1.424-.335-.112-.112-10.138-9.831-18.936-9.831-9.105 0-20.752 4.859-20.864 4.915a1.435 1.435 0 01-1.48-.251c-.14-.112-14.216-12.485-21.981-12.485-3.77 0-6.787 2.765-10.613 6.285-3.715 3.407-8.351 7.652-15.11 10.389-9.412 3.771-15.333 10.614-17.847 14.049zM142.326 167.742c-6.172 0-11.172-4.999-11.172-11.172 0-6.172 5-11.172 11.172-11.172 6.173 0 11.172 5 11.172 11.172 0 6.173-4.999 11.172-11.172 11.172zm0-19.551c-4.608 0-8.379 3.771-8.379 8.379 0 4.609 3.771 8.379 8.379 8.379 4.609 0 8.379-3.77 8.379-8.379 0-4.608-3.77-8.379-8.379-8.379z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M146.125 185.896c-3.073 0-5.335-1.005-6.759-2.988-1.341-1.899-1.592-4.385-1.453-6.619-2.513 2.569-6.06 5.418-9.608 5.697-2.094.168-3.966-.53-5.53-2.094-1.787-1.788-2.541-3.771-2.262-5.949.335-2.598 2.123-4.916 3.966-6.676-2.877.084-6.312-.307-8.686-2.178-1.843-1.452-2.793-3.575-2.793-6.284 0-2.793.95-5.028 2.849-6.648 2.206-1.899 5.306-2.541 7.932-2.737-2.598-2.206-5.167-5.614-3.715-9.859.587-1.648 1.676-2.821 3.24-3.351 2.765-.978 6.424.279 8.965 1.48-.474-2.458-.698-5.698.866-7.988.782-1.117 2.346-2.458 5.363-2.458 5.977 0 8.77 5.167 9.803 9.664 2.458-2.821 6.424-5.335 11.423-3.575 2.346.838 3.156 2.374 3.408 3.491.614 2.765-1.313 6.256-3.296 8.91 2.961-.755 6.619-1.118 9.077.474 1.229.782 2.654 2.402 2.654 5.642 0 2.654-.922 4.888-2.738 6.647-1.983 1.928-4.72 2.961-7.205 3.492 2.346 1.229 4.664 2.988 5.334 5.334.587 2.095-.195 4.19-2.262 6.284-2.318 2.319-4.72 3.268-7.122 2.793-1.425-.279-2.654-1.005-3.715-1.927.279 2.933.056 6.256-1.592 8.547-1.313 1.927-3.407 2.876-6.144 2.876zm-5.81-15.947c.224 0 .447.055.643.167a1.42 1.42 0 01.67 1.704c-.615 1.759-1.816 6.871.028 9.496.866 1.229 2.318 1.815 4.469 1.815 1.815 0 3.1-.558 3.938-1.703 2.262-3.156.698-10.139-.112-12.569a1.44 1.44 0 01.838-1.759c.698-.279 1.48.056 1.787.754.615 1.452 2.849 5.307 5.614 5.837 1.453.28 3.017-.391 4.637-2.039 1.312-1.312 1.843-2.513 1.564-3.547-.699-2.541-5.866-4.72-8.938-5.502a1.36 1.36 0 01-1.033-1.536 1.418 1.418 0 011.424-1.201c.084 0 7.569.168 11.2-3.324 1.257-1.229 1.899-2.765 1.899-4.664 0-1.62-.447-2.709-1.396-3.296-2.765-1.787-9.329.503-11.396 1.453a1.401 1.401 0 01-1.731-.475 1.399 1.399 0 01.167-1.788c2.598-2.625 6.536-7.708 5.949-10.278-.083-.419-.363-1.033-1.62-1.48-6.312-2.234-9.97 5.027-10.11 5.335a1.372 1.372 0 01-1.536.754c-.615-.14-1.09-.671-1.117-1.313 0-.028-.112-2.877-1.201-5.642-1.425-3.407-3.548-5.111-6.424-5.111-1.481 0-2.486.419-3.073 1.257-1.536 2.234-.223 7.15.364 8.686.223.559.027 1.201-.419 1.564a1.384 1.384 0 01-1.62.084c-1.732-1.089-6.815-3.743-9.524-2.793-.727.251-1.201.782-1.509 1.62-1.815 5.223 6.48 9.189 6.564 9.217.642.307.95 1.005.754 1.675a1.393 1.393 0 01-1.564.978c-.084 0-7.29-1.089-10.809 1.927-1.285 1.117-1.899 2.598-1.899 4.553 0 1.843.559 3.184 1.732 4.105 2.988 2.374 9.328 1.536 11.507 1.006a1.386 1.386 0 011.62.838c.251.642 0 1.368-.587 1.731-1.732 1.034-6.368 4.469-6.787 7.821-.167 1.284.307 2.485 1.48 3.631.978.977 2.039 1.396 3.324 1.284 4.245-.335 9.44-6.396 11.088-8.686a1.378 1.378 0 011.145-.586zM172.239 191.175c-3.463 0-6.229-1.229-6.396-1.285a1.384 1.384 0 01-.81-1.173c-.391-5.669 1.033-9.859 4.217-12.456 5.726-4.692 14.943-2.235 15.334-2.123.67.196 1.089.81 1.005 1.508-.782 7.011-3.24 11.731-7.262 14.021-2.01 1.117-4.161 1.508-6.088 1.508zm-4.469-3.547c1.676.559 5.754 1.564 9.189-.419 2.988-1.703 4.888-5.278 5.698-10.641-2.43-.447-8.1-1.061-11.647 1.843-2.29 1.872-3.38 4.944-3.24 9.217zM141.069 210.279l-.698-2.709c4.106-1.061 6.927-4.804 7.904-6.284-1.201-2.207-2.821-3.519-4.943-3.994-5.419-1.229-12.485 3.268-15.25 5.251 2.514 2.569 5 4.217 7.402 4.915l-.783 2.681c-3.239-.949-6.535-3.239-9.747-6.842a1.431 1.431 0 01-.363-1.034 1.45 1.45 0 01.503-.977c.419-.363 10.641-8.575 18.852-6.731 3.156.726 5.586 2.793 7.178 6.2a1.39 1.39 0 01-.056 1.285c-.111.279-3.714 6.591-9.999 8.239z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M174.418 180.956l1.659 2.248L160.092 195l-1.659-2.248 15.985-11.796z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M161.961 221.2l-2.793-.196c2.262-31.337-9.022-51.698-9.133-51.893l2.43-1.369c.111.224 3.016 5.391 5.641 14.607 2.458 8.435 5.084 22.037 3.855 38.851z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M160.197 199.556l.12 2.79-22.293.959-.12-2.79 22.293-.959zM230.779 170.256c-.111 0-.195 0-.307-.028l-16.925-3.799a1.39 1.39 0 01-1.061-1.619l7.68-42.733c.922-5.251 5.502-9.077 10.837-9.077 3.379 0 6.508 1.508 8.63 4.134 2.123 2.625 2.877 6.032 2.151 9.328l-9.636 42.705c-.168.642-.754 1.089-1.369 1.089zM215.446 164l14.272 3.212 9.329-41.336a8.19 8.19 0 00-1.592-6.955 8.21 8.21 0 00-6.424-3.1 8.212 8.212 0 00-8.1 6.787L215.446 164z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M213.854 211.955c-.391 0-.782-.028-1.173-.14a5.57 5.57 0 01-4.273-6.647l7.289-33.851 2.738.587-7.29 33.85c-.335 1.509.642 2.989 2.151 3.324 1.508.335 2.988-.642 3.323-2.151l8.491-39.38 2.737.586-8.491 39.381a5.63 5.63 0 01-5.502 4.441zM216.333 150.26l17.828 3.751-.576 2.734-17.827-3.751.575-2.734zM218.275 139.332l18.237 4.092-.612 2.726-18.236-4.092.611-2.726zM171.429 244.772l-1.983-1.955c.279-.279 6.954-7.01 13.406-10.138l1.229 2.513c-6.033 2.933-12.568 9.524-12.652 9.58z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M190.03 232.148l-2.793-.195 3.24-46.839c.028-.391.223-.782.558-1.005.336-.251.727-.335 1.118-.251l21.338 4.44-.559 2.738-19.746-4.134-3.156 45.246zM224.914 238.684l-2.541-1.174 18.657-40.581-19.942-4.162.558-2.737 21.674 4.525c.419.083.782.363.95.726.195.391.195.838.027 1.201l-19.383 42.202z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M43.458 207.078s-3.955-26.812 26.656-26.812c0 0-.172 12.925-6.88 19.645-6.706 6.72-19.776 7.167-19.776 7.167z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M70.114 180.266s-.172 12.942-6.88 19.645c-6.706 6.703-19.776 7.167-19.776 7.167 5.795-10.501 13.603-17.651 19.226-21.983 3.302-2.543 7.43-4.829 7.43-4.829z" }),
        React__default['default'].createElement("path", { fill: "#47B85B", d: "M34.515 193.672s3.956-26.813-26.655-26.813c0 0 .172 12.925 6.879 19.646 6.707 6.72 19.776 7.167 19.776 7.167z" }),
        React__default['default'].createElement("path", { fill: "#399349", d: "M34.515 193.672s-13.087-.464-19.776-7.167c-6.707-6.703-6.88-19.646-6.88-19.646s5.848 3.318 8.17 4.95c6.483 4.589 15.064 12.1 18.486 21.863z" }),
        React__default['default'].createElement("path", { fill: "#F89720", d: "M70.114 253.141H7.86s1.496-6.068 11.35-5.724c0 0 1.771-6.067 10.49-6.067 0 0 1.892-5.38 9.287-5.38 7.394 0 9.286 5.38 9.286 5.38 8.72 0 10.49 6.067 10.49 6.067 9.854-.344 11.35 5.724 11.35 5.724z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M39.846 236.005l-1.72-.086c.018-.258 1.308-25.627-4.419-41.955-3.336-9.539-11.728-16.912-18.177-21.433l.98-1.409c6.655 4.658 15.323 12.306 18.814 22.275 5.847 16.637 4.54 42.35 4.523 42.608z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M13.937 175.114l7.687.176-.04 1.719-7.686-.177.04-1.718zM27.366 175.944l.784 5.706-1.704.233-.784-5.706 1.704-.233zM23.258 184.817l7.137.035-.009 1.719-7.136-.036.008-1.718zM39.365 216.205l-1.496-.842c1.513-2.716 3.13-5.638 4.832-8.715 5.916-10.69 13.844-17.995 19.467-22.24l1.032 1.375c-5.486 4.142-13.224 11.275-18.985 21.708-1.703 3.076-3.337 5.998-4.85 8.714z" }),
        React__default['default'].createElement("path", { fill: "#2B6E37", d: "M65.214 188.388l.144 1.713-8.35.703-.144-1.713 8.35-.703zM52.612 189.383l.798 4.796-1.696.282-.798-4.796 1.696-.282zM57.646 197.654l.14 1.713-9.19.756-.14-1.714 9.19-.755z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M36.63 248.208s-8.254-.688-13.877 4.933h47.36s-1.496-6.068-11.35-5.724c0 0-1.77-6.067-10.49-6.067-7.171-.017-11.642 6.858-11.642 6.858z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M70.114 254H46.038v-1.719h22.769c-.93-1.564-3.474-4.245-10.01-4.004a.868.868 0 01-.859-.619c-.069-.224-1.754-5.449-9.665-5.449a.853.853 0 01-.808-.567c-.069-.189-1.823-4.812-8.478-4.812-6.656 0-8.41 4.623-8.478 4.812a.853.853 0 01-.809.567c-7.98 0-9.647 5.397-9.665 5.449a.854.854 0 01-.86.619c-6.534-.224-9.08 2.457-10.008 4.004h33.431V254H7.86a.846.846 0 01-.67-.327c-.156-.206-.224-.481-.156-.739.07-.275 1.686-6.393 11.385-6.393h.223c.723-1.633 3.302-5.844 10.508-6.05.74-1.496 3.319-5.397 9.854-5.397 6.535 0 9.097 3.901 9.854 5.397 7.223.206 9.785 4.417 10.507 6.05h.224c9.7 0 11.316 6.136 11.384 6.393a.871.871 0 01-.154.739.969.969 0 01-.705.327zM30.956 194.188c-4.248-.602-12.073-2.304-16.836-7.082C7.258 180.231 7 167.409 7 166.877c0-.224.086-.447.24-.619a.844.844 0 01.62-.258c9.94 0 17.369 2.784 22.098 8.25 7 8.113 5.486 19.078 5.417 19.542l-1.702-.258.842.121-.842-.121c.017-.103 1.462-10.673-5.022-18.184-4.247-4.898-10.937-7.459-19.897-7.631.19 2.973 1.204 12.77 6.587 18.167 4.402 4.417 11.831 6.016 15.855 6.583l-.24 1.719zM43.458 207.938a.84.84 0 01-.843-.74c-.069-.464-1.599-11.429 5.417-19.542 4.712-5.465 12.142-8.25 22.082-8.25.223 0 .447.086.619.258a.768.768 0 01.24.619c0 .55-.258 13.355-7.136 20.23-6.862 6.875-19.812 7.407-20.362 7.425h-.017zm25.761-26.813c-8.96.155-15.632 2.733-19.88 7.631-5.468 6.308-5.296 14.799-5.107 17.394 2.906-.223 12.95-1.409 18.4-6.858 5.384-5.38 6.398-15.176 6.587-18.167z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M39.846 236.005l-1.72-.086c.018-.258 1.308-25.627-4.419-41.955-3.336-9.539-11.728-16.912-18.177-21.433l.98-1.409c6.655 4.658 15.323 12.306 18.814 22.275 5.847 16.637 4.54 42.35 4.523 42.608z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M13.937 175.114l7.687.176-.04 1.719-7.686-.177.04-1.718zM27.366 175.944l.784 5.706-1.704.233-.784-5.706 1.704-.233zM23.258 184.817l7.137.035-.009 1.719-7.137-.036.009-1.718zM39.365 216.205l-1.496-.842c1.513-2.716 3.13-5.638 4.832-8.715 5.916-10.69 13.844-17.995 19.467-22.24l1.032 1.375c-5.486 4.142-13.224 11.275-18.985 21.708-1.703 3.076-3.337 5.998-4.85 8.714z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M65.214 188.388l.144 1.713-8.35.703-.144-1.713 8.35-.703zM52.612 189.383l.798 4.796-1.696.282-.798-4.796 1.696-.282zM57.646 197.654l.14 1.713-9.19.756-.14-1.714 9.19-.755z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M162.525 102.983c1.544-1.354 4.799-.696 7.269 1.47 2.47 2.166 3.221 5.02 1.677 6.373-1.544 1.354-4.798.696-7.268-1.47-2.471-2.166-3.222-5.02-1.678-6.373z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M169.229 103.972l-5.592 4.903 1.119.98 5.591-4.902-1.118-.981zM171.131 106.218l-4.92 4.314 1.118.981 4.92-4.315-1.118-.98z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M166.988 106.916s1.012-9.708 6.042-5.298c5.03 4.41-6.042 5.298-6.042 5.298z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M164.754 103.962l-1.118.981 1.118.98 1.118-.98-1.118-.981z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M166.5 106.359l-2.863 2.51 1.118.981 2.863-2.51-1.118-.981zM171.131 106.218l-4.92 4.314 1.118.981 4.92-4.314-1.118-.981z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M166.988 107.609h.079c.696-.055 6.88-.624 7.924-3.12.427-1.04-.047-2.164-1.392-3.356-1.344-1.193-2.641-1.595-3.828-1.22-2.862.901-3.495 6.323-3.558 6.947a.688.688 0 00.221.555.975.975 0 00.554.194zm3.638-6.449c.632 0 1.328.5 1.85.943.601.527 1.281 1.29 1.028 1.9-.458 1.124-3.527 1.831-5.599 2.108.348-2.038 1.218-4.521 2.404-4.909.111-.028.206-.042.317-.042zM164.754 103.962l-1.118.981 1.118.98 1.118-.98-1.118-.981z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M169.329 112.227c1.091 0 2.024-.305 2.704-.915 1.408-1.234 1.377-3.412-.079-5.547l-1.36.707c1.044 1.553 1.171 3.106.316 3.869-.553.485-1.455.624-2.546.402-1.234-.249-2.515-.915-3.607-1.872-1.091-.957-1.85-2.08-2.135-3.162-.253-.957-.095-1.761.459-2.233.87-.762 2.641-.651 4.413.278l.807-1.193c-2.436-1.276-4.935-1.29-6.327-.069-.949.832-1.266 2.08-.886 3.522.348 1.332 1.265 2.691 2.562 3.828s2.847 1.927 4.366 2.246c.443.097.886.139 1.313.139z" }),
        React__default['default'].createElement("path", { fill: "#FFC970", d: "M103.296 133.983c-1.525-1.354-4.74-.696-7.179 1.47-2.44 2.166-3.182 5.02-1.657 6.373 1.525 1.354 4.74.696 7.179-1.47 2.44-2.166 3.182-5.02 1.657-6.373z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M96.675 134.972l5.523 4.903-1.105.98-5.522-4.902 1.105-.981zM94.797 137.218l4.86 4.314-1.105.981-4.86-4.315 1.105-.98z" }),
        React__default['default'].createElement("path", { fill: "#4893CC", d: "M98.888 137.916s-1-9.708-5.967-5.298c-4.968 4.41 5.967 5.298 5.967 5.298z" }),
        React__default['default'].createElement("path", { fill: "#DF7E07", d: "M101.095 134.962l1.104.981-1.104.98-1.105-.98 1.105-.981z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M99.37 137.359l2.828 2.51-1.104.981-2.828-2.51 1.105-.981zM94.797 137.218l4.86 4.314-1.105.981-4.86-4.314 1.105-.981z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M98.889 138.609h-.078c-.688-.055-6.796-.624-7.827-3.12-.422-1.04.047-2.164 1.375-3.356 1.328-1.193 2.609-1.595 3.78-1.221 2.828.902 3.453 6.324 3.515 6.948a.693.693 0 01-.218.555.955.955 0 01-.547.194zm-3.593-6.449c-.625 0-1.313.5-1.828.943-.594.527-1.266 1.29-1.016 1.9.454 1.124 3.484 1.831 5.53 2.108-.343-2.038-1.202-4.521-2.374-4.909a1.2 1.2 0 00-.312-.042zM101.095 134.962l1.105.981-1.105.98-1.104-.98 1.104-.981z" }),
        React__default['default'].createElement("path", { fill: "#4D2419", d: "M96.577 143.227c-1.078 0-2-.305-2.672-.915-1.39-1.234-1.359-3.412.078-5.547l1.344.707c-1.031 1.553-1.156 3.106-.313 3.869.547.485 1.438.624 2.516.402 1.218-.249 2.483-.915 3.561-1.872 1.078-.957 1.828-2.08 2.109-3.162.25-.957.094-1.761-.453-2.233-.859-.762-2.609-.651-4.358.278l-.797-1.193c2.406-1.276 4.874-1.29 6.249-.069.937.832 1.25 2.08.875 3.522-.344 1.332-1.25 2.691-2.531 3.828-1.281 1.137-2.812 1.927-4.312 2.246a5.997 5.997 0 01-1.296.139z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fill: "#FFCB5C", d: "M64 87.797c13.807 0 25-10.93 25-24.414 0-13.484-11.193-24.414-25-24.414s-25 10.93-25 24.414c0 13.483 11.193 24.414 25 24.414z" }),
            React__default['default'].createElement("path", { fill: "#FFDCA3", d: "M59 68.266c5.523 0 10-4.373 10-9.766s-4.477-9.766-10-9.766-10 4.373-10 9.766 4.477 9.766 10 9.766z" }),
            React__default['default'].createElement("path", { fill: "#FFB30F", d: "M76.6 42.29A23.979 23.979 0 0180 54.593c0 13.476-11.2 24.414-25 24.414-4.6 0-8.9-1.22-12.6-3.32 4.35 7.25 12.375 12.109 21.6 12.109 13.8 0 25-10.938 25-24.414 0-9.009-4.975-16.846-12.4-21.094zM62.75 92.924h2.5v7.324h-2.5v-7.324zM62.75 26.518h2.5v7.324h-2.5v-7.324zM86.272 83.401l5.302 5.179-1.767 1.726-5.303-5.179 1.768-1.726zM38.192 36.432l5.302 5.178-1.767 1.726-5.303-5.178 1.768-1.726zM94.25 62.162h7.5v2.441h-7.5v-2.44zM26.25 62.162h7.5v2.441h-7.5v-2.44zM89.823 36.437l1.768 1.726-5.303 5.178-1.767-1.726 5.302-5.178zM41.72 83.395l1.767 1.726-5.302 5.178-1.768-1.726 5.303-5.178zM50.712 28.888l2.873 6.768-2.31.935-2.873-6.768 2.31-.935zM76.749 90.233L79.622 97l-2.31.935-2.873-6.767 2.31-.935zM29.595 48.177l6.93 2.805-.958 2.256-6.93-2.805.958-2.256zM92.404 73.584l6.93 2.805-.958 2.255-6.93-2.805.958-2.255zM35.589 73.594l.957 2.256-6.93 2.805-.957-2.256 6.93-2.805zM98.415 48.17l.957 2.255-6.93 2.805-.957-2.255 6.93-2.806zM51.26 90.228l2.31.935-2.872 6.768-2.31-.935 2.873-6.768zM77.278 28.888l2.31.935-2.872 6.767-2.31-.935 2.872-6.767z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M64 89.018c-14.475 0-26.25-11.5-26.25-25.635 0-12.134 8.825-22.705 21-25.122l.5 2.392c-11 2.173-19 11.744-19 22.73 0 12.793 10.65 23.193 23.75 23.193s23.75-10.4 23.75-23.193C87.75 50.59 77.1 40.189 64 40.189v-2.441c14.475 0 26.25 11.5 26.25 25.635 0 14.136-11.775 25.635-26.25 25.635zM62.75 92.924h2.5v7.324h-2.5v-7.324zM62.75 26.518h2.5v7.324h-2.5v-7.324zM86.272 83.401l5.302 5.179-1.767 1.726-5.303-5.179 1.768-1.726zM38.192 36.432l5.302 5.178-1.767 1.726-5.303-5.178 1.768-1.726zM94.25 62.162h7.5v2.441h-7.5v-2.44zM26.25 62.162h7.5v2.441h-7.5v-2.44zM89.823 36.437l1.768 1.726-5.303 5.178-1.767-1.726 5.302-5.178zM41.72 83.395l1.767 1.726-5.302 5.178-1.768-1.726 5.303-5.178zM50.712 28.888l2.873 6.768-2.31.935-2.873-6.768 2.31-.935zM76.749 90.233L79.622 97l-2.31.935-2.873-6.767 2.31-.935zM29.595 48.177l6.93 2.805-.958 2.256-6.93-2.805.958-2.256zM92.404 73.584l6.93 2.805-.958 2.255-6.93-2.805.958-2.255zM35.589 73.594l.957 2.256-6.93 2.805-.957-2.256 6.93-2.805zM98.415 48.17l.957 2.255-6.93 2.805-.957-2.255 6.93-2.806zM51.26 90.228l2.31.935-2.872 6.768-2.31-.935 2.873-6.768zM77.278 28.888l2.31.935-2.872 6.767-2.31-.935 2.872-6.767z" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("path", { fill: "#fff", d: "M0 0H128V128H0z" })))));
};

var rotate = styled.keyframes(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(30px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(30px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingSunIcon = styled__default['default'](Icon$t)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingBeeIcon = styled__default['default'](Icon$u)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var FixPlantIcon = styled__default['default'](Icon$v)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  transform: translate3d(0, 0, 0);\n"], ["\n  transform: translate3d(0, 0, 0);\n"])));
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(RotatingSunIcon, { width: size * 2 + "px" }),
        React__default['default'].createElement(FloatingBeeIcon, { width: size * 5 + "px" }),
        React__default['default'].createElement(FixPlantIcon, { width: size * 5 + "px" })));
};
var templateObject_1$m, templateObject_2$9, templateObject_3$5, templateObject_4$2, templateObject_5$1, templateObject_6;

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled__default['default'](Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  padding: 0 16px;\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  padding: 0 16px;\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled__default['default'](Flex)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(Inner$1, null, React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            });
        }))));
};
var templateObject_1$l, templateObject_2$8;

var StyledTab = styled__default['default'].button(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor;
    return theme.colors[bgColor];
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$k;

var Tab = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledTab, { onClick: onClick, bgColor: isActive ? "textSubtle" : "input", color: isActive ? "card" : "textSubtle" },
        React__default['default'].createElement(Text, { fontWeight: 600, color: isActive ? "card" : "textSubtle" }, children)));
};

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$i, templateObject_2$7, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #4D2419, 0px 0px 4px 8px rgba(77, 36, 25, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.4)",
    warning: "0px 0px 0px 1px #F89720, 0px 0px 0px 4px rgba(248, 151, 32, 0.4)",
    focus: "0px 0px 0px 1px #2B6E37, 0px 0px 0px 4px rgba(43, 110, 55, 0.5)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var ModalHeader = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  align-items: center;\n  padding: 12px 24px;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  align-items: center;\n  padding: 12px 24px;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var background = _a.background;
    return background;
});
var ModalTitle = styled__default['default'](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "360px" : _e;
    return (React__default['default'].createElement(StyledModal, { minWidth: minWidth },
        React__default['default'].createElement(ModalHeader, { background: headerBackground },
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$26, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$1F, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$h, templateObject_2$6, templateObject_3$3;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #2B6E37;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #2B6E37;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$g;

var ModalWrapper = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$f;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M20.699 9.307l-.606-1.44s1.41-3.18 1.285-3.302l-1.865-1.822c-.129-.125-3.31 1.327-3.31 1.327l-1.468-.593S13.439.253 13.26.253h-2.633c-.184 0-1.384 3.231-1.384 3.231l-1.465.595S4.53 2.698 4.407 2.822L2.544 4.645c-.13.127 1.355 3.242 1.355 3.242l-.606 1.436S0 10.591 0 10.763v2.582c0 .18 3.3 1.355 3.3 1.355l.605 1.434s-1.409 3.179-1.285 3.3l1.866 1.826c.124.124 3.307-1.328 3.307-1.328l1.47.594s1.296 3.221 1.475 3.221h2.633c.182 0 1.384-3.23 1.384-3.23l1.47-.596s3.241 1.38 3.366 1.26l1.866-1.825c.13-.128-1.356-3.24-1.356-3.24l.604-1.438S24 13.408 24 13.235v-2.58c0-.176-3.301-1.348-3.301-1.348zm-3.96 4.819c-1.23 2.854-4.278 2.723-6.047 2.085.178-.462.58-1.045.806-1.619.218-.037 1.09-.131 1.83-.375.216-.074.43-.153.626-.244.196-.09.376-.183.513-.287.07-.05.135-.095.183-.149.049-.05.098-.086.122-.131l.085-.131s-.035.043-.1.118c-.027.042-.082.07-.134.114a.903.903 0 01-.19.12 2.85 2.85 0 01-.528.218 6.195 6.195 0 01-.633.163c-.438.088-.883.14-1.216.17-.106.008-.28.016-.36.021.196-.497.487-1.008.687-1.513.181-.03.853-.15 1.503-.364.189-.065.377-.134.549-.213.17-.078.324-.16.446-.25a.998.998 0 00.159-.129c.042-.044.084-.075.106-.115.05-.073.075-.113.075-.113s-.03.037-.087.102c-.024.035-.072.062-.117.1-.044.039-.103.07-.167.105a2.504 2.504 0 01-.459.19 5.816 5.816 0 01-.553.141 9.89 9.89 0 01-1.06.148c-.095.008-.174.015-.245.019l.614-1.543.003.034s.615-.096 1.206-.29c.146-.05.29-.103.425-.164.131-.06.252-.124.347-.194a.752.752 0 00.122-.1c.033-.035.066-.059.083-.09l.058-.086-.069.079c-.018.027-.053.048-.088.077a.766.766 0 01-.13.082 1.92 1.92 0 01-.356.147 4.595 4.595 0 01-.43.11 8.099 8.099 0 01-1.068.133c.693-1.745 1.018-2.6.148-.58-.085.2-.273.614-.273.614-.002.004-.004.007-.004.01a7.077 7.077 0 01-.8-.664 4.157 4.157 0 01-.271-.294 1.63 1.63 0 01-.198-.287.57.57 0 01-.06-.126c-.011-.04-.029-.073-.03-.103l-.013-.094.002.095c-.004.032.011.068.019.11a.639.639 0 00.043.136c.037.099.098.206.168.319.07.11.155.223.242.333.354.438.775.813.775.813l.03-.036a46.13 46.13 0 01-.83 1.72 8.626 8.626 0 01-1-.83 5.012 5.012 0 01-.34-.369 2.2 2.2 0 01-.248-.358.815.815 0 01-.073-.157c-.015-.05-.038-.091-.04-.129l-.014-.118v.12c-.003.038.015.084.024.135a.86.86 0 00.056.172c.046.123.121.257.21.396.087.14.193.28.302.418.441.546.969 1.016.969 1.016l.006-.006c-.262.51-.524.992-.78 1.45a11.946 11.946 0 01-1.317-1.094 6.636 6.636 0 01-.444-.48 2.923 2.923 0 01-.325-.468.95.95 0 01-.095-.206c-.02-.064-.05-.119-.05-.167a8.019 8.019 0 01-.02-.154l.002.155c-.006.051.017.109.03.177.011.07.04.143.072.223.06.162.16.338.276.52.115.18.253.365.394.544.572.709 1.253 1.317 1.263 1.327-.256.447-2.772 4.729-2.772 4.729l-1.486-.297c.191-.228.299.586 2.934-3.276-1.374-.971-2.71-2.988-1.685-5.364 1.328-3.083 6.634-4.51 6.527-5.586-.107-1.073 3.495 6.252 2.164 9.335z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23.759 3.224c-.151-.061-.392-.188-.679-.264-.287-.08-.674-.216-1.07-.25-.4-.041-.85-.054-1.346-.03a8.85 8.85 0 00-1.494.277c-.525.136-1.005.36-1.515.607-.5.255-.955.572-1.411.919-.433.357-.84.753-1.215 1.173-.348.432-.695.877-.962 1.351a8.282 8.282 0 00-.685 1.453 8.769 8.769 0 00-.529 2.894c.002.457.029.88.086 1.27.048.386.145.745.22 1.034.031.137.074.266.115.381a25.482 25.482 0 012.089-3.594c.376-.537.788-1.047 1.192-1.51l.613-.637.588-.53.535-.401c.152-.127.313-.2.433-.277l.383-.227-.364.256c-.113.086-.264.17-.406.308l-.495.436-.537.566-.55.671a17.73 17.73 0 00-1.048 1.569 24.678 24.678 0 00-1.715 3.547c-.443 1.025-.68 2.084-.798 3.064-.295-.955-.727-1.971-1.36-2.913-.068-.11.572-.445.673-.306.02-.12.038-.256.043-.395.02-.297.05-.667.028-1.056a9.056 9.056 0 00-.15-1.265 8.762 8.762 0 00-1.05-2.748 8.324 8.324 0 00-.94-1.302c-.35-.417-.773-.791-1.195-1.152-.445-.345-.919-.659-1.409-.931-.512-.257-1.018-.485-1.556-.644-.548-.148-1.06-.282-1.601-.318a8.758 8.758 0 00-1.52.002 8.982 8.982 0 00-1.32.277c-.382.106-.74.309-1.005.441-.269.128-.482.298-.62.386C.075 5.453 0 5.52 0 5.52l.13.25c.087.142.2.392.348.623l.488.849c.176.319.37.644.57.964.203.326.412.683.638.998.225.319.46.672.718.967.508.632 1.094 1.21 1.753 1.732.325.274.684.499 1.041.74.36.234.747.436 1.135.633.397.184.794.362 1.204.505.413.144.814.28 1.218.384.4.107.793.193 1.157.26.249.05.49.081.714.11 2.035 2.848 2.042 6.645 2.042 6.693h.114l.018.104.51-.099h.031v-.006l.12-.023c-.009-.048-.698-3.782.778-6.954.217-.07.447-.144.683-.24.346-.134.716-.29 1.09-.468.378-.176.748-.383 1.126-.6a12.12 12.12 0 002.09-1.548c.308-.304.619-.59.889-.92a11 11 0 001.405-2.022c.2-.337.366-.728.528-1.083.165-.351.304-.74.443-1.098.14-.35.268-.706.384-1.052l.324-.923c.104-.254.17-.52.228-.676L24 3.35s-.085-.055-.24-.126zM5.166 8.62l2.002-.003L4.33 6.376h1.185l4.11 3.103H7.636l2.85 2.851-5.32-3.709z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 160 26" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M20.478 16.589s-1.944-8.724 13.098-8.724c0 0-.084 4.205-3.38 6.392-3.296 2.186-9.718 2.332-9.718 2.332z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M33.576 7.865s-.084 4.21-3.38 6.392c-3.296 2.18-9.718 2.332-9.718 2.332 2.848-3.417 6.684-5.743 9.448-7.153 1.622-.827 3.65-1.571 3.65-1.571z" }),
            React__default['default'].createElement("path", { fill: "#47B85B", d: "M16.084 12.227s1.943-8.724-13.099-8.724c0 0 .085 4.205 3.38 6.392 3.296 2.186 9.719 2.332 9.719 2.332z" }),
            React__default['default'].createElement("path", { fill: "#399349", d: "M16.084 12.227s-6.431-.151-9.718-2.332c-3.296-2.181-3.38-6.392-3.38-6.392s2.873 1.08 4.013 1.61c3.186 1.494 7.403 3.937 9.085 7.114z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M18.703 26l-.845-.028c.009-.084.643-8.338-2.171-13.65-1.64-3.104-5.764-5.503-8.933-6.974l.482-.458c3.27 1.515 7.53 4.004 9.245 7.247 2.873 5.413 2.23 13.779 2.222 13.863z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M5.972 6.189l3.777.057-.02.56-3.777-.058.02-.56zM12.57 6.459l.386 1.856-.838.076-.385-1.856.838-.076zM10.552 9.346l3.507.011-.004.56-3.507-.012.004-.56zM18.467 19.558l-.735-.274c.743-.884 1.538-1.834 2.374-2.835 2.907-3.479 6.803-5.855 9.566-7.236l.507.447c-2.695 1.348-6.498 3.668-9.33 7.063-.836 1-1.639 1.951-2.382 2.835z" }),
            React__default['default'].createElement("path", { fill: "#2B6E37", d: "M31.169 10.508l.07.557-4.102.229-.071-.558 4.103-.228zM24.976 10.831l.392 1.56-.833.092-.392-1.56.833-.092zM27.45 13.523l.07.557-4.517.246-.07-.558 4.517-.245z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M14.335 12.395c-2.088-.196-5.933-.75-8.274-2.304C2.69 7.854 2.563 3.682 2.563 3.509c0-.073.042-.146.118-.201a.539.539 0 01.304-.084c4.885 0 8.535.906 10.86 2.684 3.439 2.64 2.695 6.207 2.661 6.358l-.836-.084.414.04-.414-.04c.008-.033.718-3.473-2.468-5.916-2.087-1.594-5.374-2.427-9.777-2.483.093.967.591 4.155 3.236 5.91 2.164 1.438 5.814 1.958 7.792 2.142l-.118.56zM20.478 16.868c-.211 0-.389-.1-.414-.24-.034-.151-.786-3.72 2.662-6.359 2.315-1.778 5.966-2.684 10.85-2.684.11 0 .22.028.305.084.084.056.126.123.118.201 0 .18-.127 4.345-3.507 6.582-3.372 2.237-9.735 2.41-10.006 2.416h-.008zm12.659-8.724c-4.403.05-7.682.89-9.769 2.483-2.687 2.053-2.603 4.815-2.51 5.66 1.428-.073 6.364-.46 9.042-2.232 2.645-1.75 3.144-4.938 3.237-5.91z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M18.703 26l-.845-.028c.009-.084.643-8.338-2.171-13.65-1.64-3.104-5.764-5.503-8.933-6.974l.482-.458c3.27 1.515 7.53 4.004 9.245 7.247 2.873 5.413 2.23 13.779 2.222 13.863z" }),
            React__default['default'].createElement("path", { fill: "#4D2419", d: "M5.972 6.189l3.777.057-.02.56-3.777-.058.02-.56zM12.57 6.459l.386 1.856-.838.076-.385-1.856.838-.076zM10.552 9.346l3.507.011-.004.56-3.507-.012.004-.56zM18.467 19.558l-.735-.274c.743-.884 1.538-1.834 2.374-2.835 2.907-3.479 6.803-5.855 9.566-7.236l.507.447c-2.695 1.348-6.498 3.668-9.33 7.063-.836 1-1.639 1.951-2.382 2.835z" }),
            React__default['default'].createElement("path", { fill: textColor, d: "M31.169 10.508l.07.557-4.102.229-.071-.558 4.103-.228zM24.976 10.831l.392 1.56-.833.092-.392-1.56.833-.092zM27.45 13.523l.07.557-4.517.246-.07-.558 4.517-.245zM36.379 21.469v-4.375h2.816c2.051 0 3.282-1.067 3.282-2.817 0-1.722-1.204-2.789-3.282-2.789H35.23v9.98h1.149zm0-9.024h2.734c1.477 0 2.215.657 2.215 1.832 0 1.204-.738 1.86-2.215 1.86H36.38v-3.692zm9.543-1.285H44.8V21.47h1.12V11.16zm7.273 4.485c-.437-.875-1.285-1.395-2.379-1.395-1.859 0-3.117 1.504-3.117 3.691 0 2.188 1.23 3.637 3.117 3.637 1.094 0 1.97-.492 2.38-1.394v1.285h1.12v-7.055h-1.12v1.23zm0 2.27c0 1.722-.765 2.706-2.16 2.706-1.394 0-2.187-.957-2.187-2.68 0-1.722.793-2.734 2.187-2.734 1.395 0 2.16.957 2.16 2.707zm8.942-.876c0-1.86-.848-2.789-2.543-2.789-1.094 0-1.996.52-2.434 1.45l-.11-1.286h-1.066c.055.602.11 1.258.11 1.996v5.059h1.12v-4.02c0-1.367.876-2.242 2.161-2.242 1.121 0 1.64.602 1.64 1.887v4.375h1.122v-4.43zm5.605-2.625H65.72v-2.187l-1.121.382v1.805H63.23v.902h1.367v4.02c0 1.45.793 2.242 2.133 2.242.355 0 .683-.055.984-.164v-.957a2.37 2.37 0 01-.766.137c-.765 0-1.23-.383-1.23-1.422v-3.856h2.023v-.902zm.793 5.906c.903.848 2.16 1.258 3.719 1.258 2.242 0 3.664-1.121 3.664-2.816 0-1.149-.711-1.832-1.723-2.16a19.68 19.68 0 00-1.996-.575c-1.586-.383-2.351-.793-2.351-1.804 0-1.149.93-1.86 2.488-1.86 1.121 0 2.05.383 2.98 1.176l.465-.902c-.82-.82-2.05-1.258-3.445-1.258-2.188 0-3.637 1.176-3.637 2.898 0 1.176.684 1.887 1.668 2.297.492.192 1.121.356 1.887.547 1.64.383 2.488.629 2.515 1.695.028 1.122-.902 1.778-2.515 1.778-1.34 0-2.297-.328-3.309-1.149l-.41.875zm14.684-5.906h-1.012l-2.05 5.688-1.997-5.688h-1.176l2.598 7.055h1.094l1.996-5.496 2.023 5.496h1.094l2.598-7.055h-1.121l-2.024 5.715-2.023-5.715zm11.73 1.23c-.437-.874-1.285-1.394-2.379-1.394-1.86 0-3.117 1.504-3.117 3.691 0 2.188 1.23 3.637 3.117 3.637 1.094 0 1.97-.492 2.38-1.394v1.285h1.12v-7.055h-1.12v1.23zm0 2.27c0 1.723-.765 2.707-2.16 2.707s-2.187-.957-2.187-2.68c0-1.722.792-2.734 2.187-2.734 1.395 0 2.16.957 2.16 2.707zm9.543.027c0-2.187-1.258-3.691-3.144-3.691-1.149 0-2.024.574-2.434 1.531l-.11-1.367h-1.066c.055.602.11 1.258.11 1.996v8.094h1.12v-4.348c.438.903 1.286 1.422 2.38 1.422 1.886 0 3.144-1.45 3.144-3.637zm-1.176 0c0 1.723-.793 2.68-2.16 2.68-1.394 0-2.187-.984-2.187-2.707 0-1.75.793-2.707 2.187-2.707 1.34 0 2.16 1.012 2.16 2.734zm4.512 3.528v-1.45h-1.449v1.45h1.449zm3.5-7.985c0-1.011.465-1.394 1.203-1.394.219 0 .465.027.711.11v-.958a3.645 3.645 0 00-.93-.137c-1.339 0-2.105.766-2.105 2.243v1.066h-1.367v.902h1.367v6.153h1.121v-6.153h1.723v-.902h-1.723v-.93zm4.375-.765v-1.285h-1.367v1.285h1.367zm-.137 1.695h-1.121v7.055h1.121v-7.055zm8.258 2.625c0-1.86-.847-2.789-2.543-2.789-1.093 0-1.996.52-2.433 1.45l-.11-1.286h-1.066c.055.602.109 1.258.109 1.996v5.059h1.121v-4.02c0-1.367.875-2.242 2.16-2.242 1.122 0 1.641.602 1.641 1.887v4.375h1.121v-4.43zm7.164-1.395c-.437-.874-1.285-1.394-2.379-1.394-1.859 0-3.117 1.504-3.117 3.691 0 2.188 1.231 3.637 3.117 3.637 1.094 0 1.969-.492 2.379-1.394v1.285h1.121v-7.055h-1.121v1.23zm0 2.27c0 1.723-.765 2.707-2.16 2.707-1.394 0-2.187-.957-2.187-2.68 0-1.722.793-2.734 2.187-2.734 1.395 0 2.16.957 2.16 2.707zm8.942-.875c0-1.86-.848-2.789-2.543-2.789-1.094 0-1.996.52-2.434 1.45l-.109-1.286h-1.067c.055.602.11 1.258.11 1.996v5.059h1.121v-4.02c0-1.367.875-2.242 2.16-2.242 1.121 0 1.641.602 1.641 1.887v4.375h1.121v-4.43zm1.668.902c0 2.188 1.312 3.637 3.363 3.637.957 0 1.941-.355 2.543-.93l-.383-.82c-.711.547-1.367.793-2.051.793-1.449 0-2.297-.984-2.297-2.68 0-1.722.848-2.734 2.297-2.734.684 0 1.34.246 2.051.82l.383-.847c-.574-.575-1.531-.93-2.488-.93-2.078 0-3.418 1.504-3.418 3.691zm13.562-.246c0-2.133-1.121-3.445-2.98-3.445-1.942 0-3.309 1.504-3.309 3.664 0 2.27 1.313 3.664 3.527 3.664.985 0 2.024-.383 2.653-.957l-.383-.82c-.684.547-1.449.82-2.27.82-1.558 0-2.378-.93-2.378-2.707h5.14v-.219zm-5.113-.52c.219-1.284.957-2.023 2.133-2.023 1.175 0 1.859.684 1.968 2.024h-4.101z" }))));
};
var LogoWithText = React__default['default'].memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement("svg", __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M16.449 9.632a3.949 3.949 0 00-.528-.141 3.623 3.623 0 00-1.283.03 4.087 4.087 0 00-.654.195 4.633 4.633 0 00-.604.308 4.11 4.11 0 00-.523.396 3.168 3.168 0 00-.423.46 3.053 3.053 0 00-.614 1.464c-.021.144-.021.283-.021.395-.002.052 0 .103.004.15l.148-.158c.27-.275.645-.627 1.057-.943.205-.157.422-.301.629-.43l.31-.173c.103-.047.199-.093.288-.135.093-.034.178-.065.253-.094.073-.03.144-.041.2-.058l.176-.044-.171.057c-.055.019-.122.036-.192.072l-.242.11-.272.153-.289.19a7.214 7.214 0 00-.58.466 9.46 9.46 0 00-.949.993c-.067.08-.124.153-.175.218.066 0 .149.003.242-.005.117-.008.265-.01.414-.027a6.473 6.473 0 001.496-.326c.163-.063.328-.126.481-.204.154-.08.306-.153.447-.247.286-.176.542-.376.769-.597.114-.102.221-.228.324-.34.1-.112.198-.24.29-.356.092-.113.18-.229.262-.343.086-.118.163-.22.226-.304.068-.08.121-.172.16-.222l.062-.09s-.028-.027-.081-.067c-.053-.037-.136-.107-.242-.162-.103-.054-.243-.14-.395-.19z" }),
        React__default['default'].createElement("path", { d: "M19.836 15.012v-1.174h-8.227c.05-1.165.245-2.369.413-3.091.099-.421.186-.799.24-1.125.713-.04 1.278-.578 1.278-1.24a1.52 1.52 0 00-.023-.257c.043.048.085.1.13.14a1.453 1.453 0 001.927 0 1.172 1.172 0 00.048-1.712c.737-.016 1.33-.567 1.33-1.246 0-.69-.61-1.25-1.362-1.25-.06 0-.123.007-.188.013.035-.027.076-.054.106-.082a1.178 1.178 0 000-1.767 1.453 1.453 0 00-1.926 0c-.042.038-.08.086-.119.132.002-.035.005-.07.005-.105 0-.689-.61-1.248-1.363-1.248-.727 0-1.315.523-1.354 1.179a1.45 1.45 0 00-1.887.03 1.178 1.178 0 000 1.767c.06.054.13.108.205.158a1.756 1.756 0 00-.17-.01c-.753 0-1.364.558-1.364 1.249 0 .685.605 1.242 1.352 1.247A1.175 1.175 0 008.9 8.37a1.45 1.45 0 001.915.01v.002c0 .577.43 1.058 1.011 1.202-.052.309-.137.673-.231 1.08a21.73 21.73 0 00-.341 1.661c-.002-.01-.002-.017-.006-.025a2.21 2.21 0 00-.365-.709 2.233 2.233 0 00-.3-.327 3.053 3.053 0 00-.372-.281 3.47 3.47 0 00-.429-.219 2.548 2.548 0 00-1.376-.16c-.14.028-.266.062-.375.1-.108.036-.207.098-.28.138-.076.04-.134.089-.171.115-.038.029-.058.047-.058.047s.014.023.043.064c.028.037.067.1.115.158l.16.216c.058.08.12.163.186.244.067.082.135.173.207.252.072.079.147.17.23.241.16.157.343.3.546.424.1.067.208.119.317.175.11.055.226.1.343.145.119.04.239.079.36.11a5.036 5.036 0 00.702.123c.105.013.21.014.293.018.055.005.1.003.142.003a8.85 8.85 0 00.004.661H4.164v1.175h7.114c.028.203.063.403.103.602H4.697s.854 7.384 3.547 7.384h6.992c3.373 0 3.91-7.384 3.91-7.384h-7.46a6.316 6.316 0 01-.066-.602h8.216zm-8.82-9.706c0-.6.533-1.09 1.19-1.09.654 0 1.189.49 1.189 1.09 0 .601-.534 1.09-1.19 1.09-.656 0-1.189-.489-1.189-1.09zm.055 7.717a6.73 6.73 0 00-.674-.705 4.857 4.857 0 00-.411-.331l-.205-.136-.193-.109-.17-.078c-.05-.025-.1-.036-.138-.05l-.121-.04.124.03c.04.013.09.02.142.043l.18.066.205.096c.07.04.144.079.221.122.147.091.3.194.447.306.276.211.523.442.71.632a6.465 6.465 0 00-.019.274 3.727 3.727 0 00-.098-.12z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.596 7.113C18.596 2.926 15.885 0 12.001 0 8.116 0 5.404 2.926 5.404 7.113c0 2.54 1.105 4.215 2 5.57.673 1.013 1.16 1.747 1.16 2.642v.663h.42l.017.345h-.04c-.249 0-.223.16-.223.357v5.418c0 .197-.026.356.224.356H9.3c0 .848 1.207 1.536 2.701 1.536 1.49 0 2.7-.688 2.7-1.536h.338c.25 0 .225-.16.225-.356V16.69c0-.197.024-.357-.225-.357h-.003l-.014-.345.425-.006-.01-.721c.02-.708.405-1.228.988-2.017.967-1.312 2.17-2.943 2.17-6.13zm-4.043 8.14l.005.451-5.11-.03v-.349c0-1.16-.606-2.075-1.311-3.14-.824-1.246-1.848-2.798-1.848-5.072 0-3.667 2.349-6.229 5.713-6.229 3.363 0 5.71 2.561 5.71 6.23 0 2.895-1.107 4.397-1.998 5.604-.632.856-1.132 1.533-1.16 2.536z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23.343 6.675V6.36h-.06v-.195l-.171-.1c-.186-.107-4.576-2.617-7.882-2.617-1.764 0-2.719.723-3.212 1.68-.482-.993-1.44-1.753-3.247-1.753-3.306 0-7.698 2.51-7.881 2.617l-.174.1v.195H.658v.088H0v14.25h24V6.675h-.657zM12.507 19.32c.047-1.1.248-2.867 2.604-2.867 1.734 0 4.291.968 7.593 2.867H12.507zm2.722-15.126c2.82 0 6.618 1.99 7.465 2.455v11.847c-3.259-1.85-5.81-2.788-7.583-2.788-.877 0-1.56.226-2.056.57.363-.744.956-1.847 1.754-2.983l-.106.586c.176.04.345.059.51.059 2.705 0 4.019-4.971 4.077-5.195l.125-.484-.455.009c-2.544.051-4.217.759-4.974 2.1-.697 1.24-.387 2.623-.21 3.195a22.999 22.999 0 00-1.453 2.643l-.005-10.21c.384-1.21 1.345-1.804 2.91-1.804zm-.67 6.565c.546-.963 1.74-1.527 3.543-1.692-1.553.93-2.835 2.348-3.81 3.731-.099-.555-.13-1.338.267-2.039zm3.648-.912c-.573 1.466-1.693 3.596-3.298 3.31.874-1.223 1.98-2.465 3.298-3.31zM1.305 6.576C2.152 6.11 5.946 4.12 8.77 4.12c1.595 0 2.558.621 2.925 1.879l-.02 10.372a22.63 22.63 0 00-1.447-2.632c.18-.572.488-1.955-.21-3.195-.756-1.341-2.431-2.049-4.974-2.1l-.454-.009.124.484c.058.224 1.372 5.195 4.078 5.195.164 0 .333-.02.509-.058l-.106-.587c.68.97 1.209 1.91 1.575 2.63-.479-.282-1.101-.465-1.882-.465-1.775 0-4.325.94-7.585 2.788V6.576zm4.597 2.666c1.804.166 2.998.73 3.545 1.693.396.699.365 1.484.267 2.04-.976-1.384-2.258-2.803-3.812-3.733zm3.195 4.092c-1.606.286-2.727-1.846-3.297-3.312 1.316.847 2.422 2.088 3.297 3.312zM8.89 16.38c2.354 0 2.556 1.766 2.603 2.867H1.295c3.302-1.899 5.86-2.867 7.595-2.867z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BetaIcon: Icon$s,
    FarmIcon: Icon$r,
    GroupsIcon: Icon$q,
    HamburgerIcon: Icon$p,
    HamburgerCloseIcon: Icon$o,
    HomeIcon: Icon$n,
    IfoIcon: Icon$m,
    InfoIcon: Icon$l,
    LanguageIcon: Icon$k,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$j,
    MoreIcon: Icon$i,
    NftIcon: Icon$h,
    PoolIcon: Icon$g,
    PredictionsIcon: Icon$f,
    ProjectIcon: Icon$e,
    RoadmapIcon: Icon$d,
    SunIcon: Icon$c,
    TeamBattleIcon: Icon$b,
    TelegramIcon: Icon$a,
    TicketIcon: Icon$9,
    TradeIcon: Icon$8,
    TwitterIcon: Icon$7
});

var MenuButton = styled__default['default'](Button)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$e;

var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$1e, { className: "mobile-icon" }),
        React__default['default'].createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$o, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$p, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Plantswap home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Plantswap home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$d;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.plantswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.plantswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Garden",
        icon: "PoolIcon",
        href: "/gardens",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Project",
        icon: "ProjectIcon",
        href: "/project",
    },
    {
        label: "Roadmap",
        icon: "RoadmapIcon",
        href: "/roadmap",
        status: status.NEW,
    },
    {
        label: "Beta dev.",
        icon: "BetaIcon",
        items: [
            {
                label: "Beta 1",
                href: "/Beta1",
            },
            {
                label: "Beta 2",
                href: "/Beta2",
            },
            {
                label: "Beta 3",
                href: "/Beta3",
            },
            {
                label: "Beta 4",
                href: "/Beta4",
            },
            {
                label: "Beta 5",
                href: "/Beta5",
            },
        ],
    },
    {
        label: "Team Battle",
        icon: "TeamBattleIcon",
        href: "/competition",
        status: status.SOON,
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                status: status.NEW,
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://plantswap.info",
            },
            {
                label: "Tokens",
                href: "https://plantswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://plantswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://plantswap.info/accounts",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "https://github.com/plantswapfinance",
            },
            {
                label: "Docs",
                href: "https://docs.plantswap.finance",
            },
            {
                label: "Blog",
                href: "https://plantswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/plantswapfinance",
            },
            {
                label: "Accouncement - En",
                href: "https://t.me/plantswapfinance_announcement",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/plantswapdefi",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled__default['default'](Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$c, templateObject_2$5, templateObject_3$2, templateObject_4$1;

var Container$2 = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$23, null) : React__default['default'].createElement(Icon$24, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons$3 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$3[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href },
                        React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React__default['default'].createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React__default['default'].createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$a;

var PriceLink = styled__default['default'].a(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var PlantPrice = function (_a) {
    var plantPriceUsd = _a.plantPriceUsd;
    return plantPriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://plantswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", target: "_blank" },
        React__default['default'].createElement(Icon$10, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + plantPriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var PlantPrice$1 = React__default['default'].memo(PlantPrice);
var templateObject_1$9;

var Icons$2 = IconModule;
var MoonIcon = Icons$2.MoonIcon, SunIcon = Icons$2.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React__default['default'].createElement(Flex, { alignItems: "center" },
            React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React__default['default'].memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$1 = IconModule;
var SocialLinks = function () { return (React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React__default['default'].createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var Icons = IconModule;
var LanguageIcon = Icons.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React__default['default'].memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, plantPriceUsd = _a.plantPriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$1C, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(PlantPrice$1, { plantPriceUsd: plantPriceUsd }),
            React__default['default'].createElement(SocialLinks$1, null)),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React__default['default'].createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$8, templateObject_2$3, templateObject_3$1;

var StyledPanel = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default['default'].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon,
        connectorId: exports.ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.plantswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$1n, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$1A, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React__default['default'].memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });

var StyledAvatar = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Plant" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$15, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$4, templateObject_2$1;

var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, plantPriceUsd = _a.plantPriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock$1, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, plantPriceUsd: plantPriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#AC2C2C",
    primary: "#2B6E37",
    primaryBright: "#47B85B",
    primaryDark: "#0098A1",
    secondary: "#399349",
    success: "#399349",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FFFFFF", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#4D2419", textDisabled: "#BDC2C4", textSubtle: "#2B6E37", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #FFFFFF 0%, #47B85B 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#399349", background: "#2D221F", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#204531", input: "#2D221F", inputSecondary: "#0E3921", primaryDark: "#0098A1", tertiary: "#353547", text: "#47B85B", textDisabled: "#666171", textSubtle: "#FFE3A8", borderColor: "#2B5D99", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #399349 0%, #2B6E37 100%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.card,
    hover: "#2B6E37",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

exports.AddIcon = Icon$27;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$26;
exports.ArrowDownIcon = Icon$25;
exports.ArrowDropDownIcon = Icon$24;
exports.ArrowDropUpIcon = Icon$23;
exports.ArrowForwardIcon = Icon$22;
exports.ArrowUpIcon = Icon$21;
exports.AutoRenewIcon = Icon$20;
exports.BackgroundImage = BackgroundImage;
exports.BalanceInput = BalanceInput;
exports.BaseLayout = GridLayout$1;
exports.BeeHiveIcon = Icon$1_;
exports.BeeHiveNoBeeIcon = Icon$1Z;
exports.BeeHiveTreeIcon = Icon$1Y;
exports.BeeIcon = Icon$1$;
exports.BeesIcon = Icon$1X;
exports.BinanceIcon = Icon$1W;
exports.BirdIcon = Icon$1V;
exports.BirdNestIcon = Icon$1U;
exports.BlockIcon = Icon$29;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.ButterflyBlueIcon = Icon$1T;
exports.ButterflyRedIcon = Icon$1S;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu$1;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$1R;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1P;
exports.Cards = Icon$1Q;
exports.CardsLayout = GridLayout;
exports.ChartIcon = Icon$1O;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$2b;
exports.CheckmarkIcon = Icon$1N;
exports.CherryBlossomIcon = Icon$1M;
exports.CherryBlossomTreeIcon = Icon$1L;
exports.ChevronDownIcon = Icon$1K;
exports.ChevronLeftIcon = Icon$1J;
exports.ChevronRightIcon = Icon$1I;
exports.ChevronUpIcon = Icon$1H;
exports.CircleOutlineIcon = Icon$1G;
exports.CloseIcon = Icon$1F;
exports.CloudIcon = Icon$1E;
exports.CloudsIcon = Icon$1D;
exports.CogIcon = Icon$1C;
exports.CommunityIcon = Icon$1B;
exports.CopyIcon = Icon$1A;
exports.CrownIcon = Icon$1z;
exports.DaisyIcon = Icon$1y;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$2a;
exports.ExpandableButton = ExpandableButton;
exports.ExpandableLabel = ExpandableLabel;
exports.FallingPlants = FallingPlants;
exports.Flex = Flex;
exports.FlowerNoPotIcon = Icon$1x;
exports.FlowerPotBlueIcon = Icon$1w;
exports.FlowerPotRedIcon = Icon$1v;
exports.Gardener01Icon = Icon$1u;
exports.Gardener02Icon = Icon$1t;
exports.Gardener03Icon = Icon$1s;
exports.Gardener04Icon = Icon$1r;
exports.GardeningIcon = Icon$1q;
exports.GardeningShovelIcon = Icon$1p;
exports.GrasshopperIcon = Icon$1o;
exports.Heading = Heading;
exports.HelpIcon = Icon$1n;
exports.HistoryIcon = Icon$1m;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$28;
exports.Input = Input$1;
exports.KiteBlueIcon = Icon$1l;
exports.KiteRedIcon = Icon$1k;
exports.LadybugIcon = Icon$1j;
exports.LadybugLeaveIcon = Icon$1i;
exports.LaurelLeftIcon = Icon$1h;
exports.LaurelRightIcon = Icon$1g;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$1f;
exports.LogoIcon = Icon$1e;
exports.LogoRoundIcon = Icon$1d;
exports.MedalBronzeIcon = Icon$1c;
exports.MedalGoldIcon = Icon$1b;
exports.MedalPurpleIcon = Icon$1a;
exports.MedalSilverIcon = Icon$19;
exports.MedalTealIcon = Icon$18;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$17;
exports.MinusIcon = Icon$16;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NoProfileAvatarIcon = Icon$15;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$14;
exports.PlantPlaceholderIcon = Icon$13;
exports.PlantRoundIcon = Icon$10;
exports.PlantSproutIcon = Icon$11;
exports.PlantsIcon = Icon$12;
exports.PlayCircleOutlineIcon = Icon$_;
exports.PocketWatchIcon = Icon$$;
exports.PrizeIcon = Icon$Z;
exports.Progress = Progress;
exports.ProgressPlant = Icon$Y;
exports.Radio = Radio;
exports.RainbowIcon = Icon$X;
exports.RefreshIcon = Icon$W;
exports.RemoveIcon = Icon$V;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$U;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.SproutIcon = Icon$T;
exports.SproutLandIcon = Icon$S;
exports.SunAndCloudsIcon = Icon$Q;
exports.SunIcon = Icon$R;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$P;
exports.SyncAltIcon = Icon$O;
exports.Tab = Tab;
exports.TabMenu = ButtonMenu;
exports.Tag = Tag;
exports.TeamPlayerIcon = Icon$N;
exports.TestnetIcon = Icon$M;
exports.Text = Text;
exports.Ticket = Icon$L;
exports.TicketRound = Icon$K;
exports.TimerIcon = Icon$J;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TrophyGoldIcon = Icon$I;
exports.Tulip1xBlueIcon = Icon$H;
exports.Tulip1xPinkIcon = Icon$G;
exports.Tulip1xYellowIcon = Icon$F;
exports.Tulip3xBlueIcon = Icon$E;
exports.Tulip3xPinkIcon = Icon$D;
exports.Tulip3xYellowIcon = Icon$C;
exports.VerifiedIcon = Icon$B;
exports.VolumeOffIcon = Icon$A;
exports.VolumeUpIcon = Icon$z;
exports.WaitIcon = Icon$y;
exports.WarningIcon = Icon$x;
exports.Won = Icon$w;
exports.alertVariants = variants$2;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.menuStatus = status;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
