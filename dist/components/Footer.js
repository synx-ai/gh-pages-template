import React from "../../_snowpack/pkg/react.js";
import synx from "../assets/img/synx-logo.svg.proxy.js";
import imgCC from "../assets/img/creative-commons/cc.svg.proxy.js";
import imgBy from "../assets/img/creative-commons/by.svg.proxy.js";
import imgRemix from "../assets/img/creative-commons/remix.svg.proxy.js";
import { jsx as _jsx } from "../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../_snowpack/pkg/react/jsx-runtime.js";
export const Footer = () => {
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("footer", {
      children: /*#__PURE__*/_jsxs("div", {
        className: "fluid-container",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "row",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "col-4",
            children: [/*#__PURE__*/_jsx("a", {
              href: "https://synx.ai",
              target: "_blank",
              children: /*#__PURE__*/_jsx("img", {
                src: synx,
                className: "footer-logo"
              })
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Project proudly powered by ", /*#__PURE__*/_jsx("strong", {
                children: "Synx Open Source"
              }), " ", "code base. Find us on\xA0", /*#__PURE__*/_jsx("a", {
                href: "https://github.com/synx-ai",
                target: "_blank",
                children: "GitHub"
              }), " ", "or learn more about\xA0", /*#__PURE__*/_jsx("a", {
                href: "https://synx.ai",
                target: "_blank",
                children: "synx.ai"
              }), "."]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "col-4"
          }), /*#__PURE__*/_jsxs("div", {
            className: "col-4",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "tooltip",
              children: [/*#__PURE__*/_jsx("img", {
                src: imgCC,
                className: "cc-logo"
              }), /*#__PURE__*/_jsx("span", {
                className: "tooltiptext",
                children: "Cretive Commons"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "tooltip",
              children: [/*#__PURE__*/_jsx("img", {
                src: imgBy,
                className: "cc-logo"
              }), /*#__PURE__*/_jsx("span", {
                className: "tooltiptext",
                children: "Attribution By"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "tooltip",
              children: [/*#__PURE__*/_jsx("img", {
                src: imgRemix,
                className: "cc-logo"
              }), /*#__PURE__*/_jsx("span", {
                className: "tooltiptext",
                children: "Remix Allowed"
              })]
            }), /*#__PURE__*/_jsxs("p", {
              className: "cc",
              children: ["Except for Synx, companies logos and where otherwise noted, content on this site is licensed under a\xA0", /*#__PURE__*/_jsx("a", {
                href: "https://creativecommons.org/licenses/by/4.0/",
                target: "_blank",
                children: "Creative Commons Attribution 4.0 International"
              }), " ", "license. Code and libraries have their own license at their respective repositories."]
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "synx-hue-line"
        })]
      })
    })
  });
};
export default Footer;