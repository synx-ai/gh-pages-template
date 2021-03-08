function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../_snowpack/pkg/react.js';
import { mdx } from '../_snowpack/pkg/@mdx-js/react.js';
/* @jsxRuntime classic */

/* @jsx mdx */

const layoutProps = {};
const MDXLayout = "wrapper";
export default function MDXContent({
  components,
  ...props
}) {
  return mdx(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), mdx("h1", null, `New Project`), mdx("p", null, `Templete to use `, mdx("a", {
    parentName: "p",
    "href": "https://www.snowpack.dev/"
  }, `Snowpack`), ` to build a React, TypeScript and SASS static website and publish it as a GitHub page from a `, mdx("inlineCode", {
    parentName: "p"
  }, `readme.md`), ` file.`), mdx("h2", null, `Available Scripts`), mdx("h3", null, `yarn start`), mdx("p", null, `Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.`), mdx("p", null, `The page will reload if you make edits.
You will also see any lint errors in the console.`), mdx("h3", null, `yarn build`), mdx("p", null, `Builds a static copy of your site to the `, mdx("inlineCode", {
    parentName: "p"
  }, `../docs`), ` folder.
Your app is ready to be deployed!`));
}
;
MDXContent.isMDXComponent = true;