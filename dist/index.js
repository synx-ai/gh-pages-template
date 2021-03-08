import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import { MDXProvider } from "../_snowpack/pkg/@mdx-js/react.js";
import { Title } from "./components/Title.js";
import { CodeBlock } from "./components/CodeBlock.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import Readme from "../../readme";
import "./assets/styles.css.proxy.js";
import { jsx as _jsx } from "../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../_snowpack/pkg/react/jsx-runtime.js";

const App = ({
  props
}) => {
  const components = {
    pre: props => /*#__PURE__*/_jsx("div", { ...props
    }),
    code: CodeBlock,
    h1: Title
  };
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Header, {}), /*#__PURE__*/_jsx("section", {
        className: "container",
        children: /*#__PURE__*/_jsx("div", {
          className: "row",
          children: /*#__PURE__*/_jsx(MDXProvider, {
            components: components,
            children: /*#__PURE__*/_jsx(Readme, { ...props
            })
          })
        })
      })]
    }), /*#__PURE__*/_jsx(Footer, {})]
  });
};

ReactDOM.render( /*#__PURE__*/_jsx(App, {}), document.getElementById("root"));