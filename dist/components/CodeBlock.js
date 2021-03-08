import React from "../../_snowpack/pkg/react.js";
import Highlight, { defaultProps } from "../../_snowpack/pkg/prism-react-renderer.js";
import theme from "../assets/prism/okaidia.js";
import { jsx as _jsx } from "../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../_snowpack/pkg/react/jsx-runtime.js";
export const CodeBlock = ({
  children,
  className
}) => {
  const language = className !== undefined ? className.replace(/language-/, "") : "text";
  return /*#__PURE__*/_jsxs("div", {
    className: "outer dark",
    children: [/*#__PURE__*/_jsx("div", {
      className: "dot red"
    }), /*#__PURE__*/_jsx("div", {
      className: "dot amber"
    }), /*#__PURE__*/_jsx("div", {
      className: "dot green"
    }), /*#__PURE__*/_jsx(Highlight, { ...defaultProps,
      code: children.replace(/,+$/, ""),
      language: language,
      theme: theme,
      children: ({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }) => /*#__PURE__*/_jsx("pre", {
        className: className,
        style: { ...style
        },
        children: tokens.map((line, i) => /*#__PURE__*/_jsx("div", { ...getLineProps({
            line,
            key: i
          }),
          children: line.map((token, key) => /*#__PURE__*/_jsx("span", { ...getTokenProps({
              token,
              key
            })
          }, key))
        }, i))
      })
    })]
  });
};
export default CodeBlock;