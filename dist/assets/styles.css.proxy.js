// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Cousine&family=Roboto:wght@400;900&display=swap\");\nhtml,\nbody,\ndiv#root {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  font-size: 100%;\n  background-color: #141819;\n  font-family: \"Roboto\", Helvetica, sans-serif;\n  color: #e2e3e4;\n  line-height: 1.5;\n}\nhtml a,\nbody a,\ndiv#root a {\n  color: white;\n  text-decoration: none;\n}\nhtml a:hover,\nbody a:hover,\ndiv#root a:hover {\n  text-decoration: underline;\n  text-decoration-style: wavy;\n}\nhtml code,\nhtml code *,\nhtml pre,\nbody code,\nbody code *,\nbody pre,\ndiv#root code,\ndiv#root code *,\ndiv#root pre {\n  font-family: \"Cousine\", monospace;\n  font-size: 0.875rem;\n  background-color: #0d1011;\n  padding: 5px;\n  border-radius: 3px;\n  overflow-x: scroll;\n}\nhtml pre,\nbody pre,\ndiv#root pre {\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\nhtml h1,\nbody h1,\ndiv#root h1 {\n  font-size: 3.6rem;\n}\nhtml h1::after,\nbody h1::after,\ndiv#root h1::after {\n  background-color: red;\n  content: \" \";\n}\nhtml h2,\nbody h2,\ndiv#root h2 {\n  font-size: 2rem;\n  margin-top: 5rem;\n}\nhtml h3,\nbody h3,\ndiv#root h3 {\n  font-size: 1.375rem;\n  margin-top: 2.5rem;\n}\nhtml h4,\nbody h4,\ndiv#root h4 {\n  font-size: 1.125rem;\n}\nhtml h5,\nbody h5,\ndiv#root h5 {\n  font-size: 1rem;\n}\nhtml h6,\nbody h6,\ndiv#root h6 {\n  font-size: 0.875rem;\n}\nhtml p,\nbody p,\ndiv#root p {\n  font-size: 1.125rem;\n  font-weight: 200;\n  line-height: 1.8;\n}\nhtml .hero-img,\nbody .hero-img,\ndiv#root .hero-img {\n  background-size: cover;\n  background-position: center center;\n  display: flex;\n  max-width: 100%;\n  height: 0px;\n  padding: 0px 0px 28.2927%;\n}\nhtml .tooltip,\nbody .tooltip,\ndiv#root .tooltip {\n  position: relative;\n  display: inline-block;\n}\nhtml .tooltip .tooltiptext,\nbody .tooltip .tooltiptext,\ndiv#root .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 150px;\n  background-color: #070809;\n  color: #b9bbbb;\n  text-align: center;\n  border-radius: 3px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 1.5s;\n}\nhtml .tooltip .tooltiptext::after,\nbody .tooltip .tooltiptext::after,\ndiv#root .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -8px;\n  border-width: 8px;\n  border-style: solid;\n  border-color: #070809 transparent transparent transparent;\n}\nhtml .tooltip:hover .tooltiptext,\nbody .tooltip:hover .tooltiptext,\ndiv#root .tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\nhtml .outer,\nbody .outer,\ndiv#root .outer {\n  background-color: #0d1011;\n  background: linear-gradient(45deg, #090c0f, #10161a);\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 6px;\n  box-shadow: 0 2px 8px 1px rgba(7, 8, 9, 0.25);\n}\nhtml .outer .dot,\nbody .outer .dot,\ndiv#root .outer .dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #f9f9f9;\n  border-radius: 50%;\n  margin: 0 4px 0 0;\n}\nhtml .outer .dot.red,\nbody .outer .dot.red,\ndiv#root .outer .dot.red {\n  background: #ff6057;\n  border: 1px solid #e14640;\n}\nhtml .outer .dot.amber,\nbody .outer .dot.amber,\ndiv#root .outer .dot.amber {\n  background: #ffbd2e;\n  border: 1px solid #dfa123;\n}\nhtml .outer .dot.green,\nbody .outer .dot.green,\ndiv#root .outer .dot.green {\n  background: #27c93f;\n  border: 1px solid #1dad2b;\n}\nhtml .outer.no-bg,\nbody .outer.no-bg,\ndiv#root .outer.no-bg {\n  background: transparent;\n}\nhtml .outer.dark,\nbody .outer.dark,\ndiv#root .outer.dark {\n  background-color: #0d1011;\n  background: linear-gradient(5deg, #0d1011, #111415);\n}\nhtml header,\nbody header,\ndiv#root header {\n  background-color: rgba(7, 8, 9, 0.625);\n  height: 54px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  backdrop-filter: saturate(1.5) blur(5px);\n}\nhtml header .fluid-container,\nbody header .fluid-container,\ndiv#root header .fluid-container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\nhtml header .logo,\nbody header .logo,\ndiv#root header .logo {\n  height: 1.75rem;\n  padding: 6px 0;\n}\nhtml header .github,\nbody header .github,\ndiv#root header .github {\n  height: 1.75rem;\n  padding: 6px 0;\n  filter: invert(1);\n  text-align: right;\n  float: right;\n}\nhtml footer,\nbody footer,\ndiv#root footer {\n  background-color: #070809;\n  padding: 3rem 0 2rem;\n  margin-top: 6rem;\n  font-size: 16px;\n  line-height: 28/16;\n  position: relative;\n}\nhtml footer .fluid-container,\nbody footer .fluid-container,\ndiv#root footer .fluid-container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\nhtml footer h5,\nbody footer h5,\ndiv#root footer h5 {\n  margin: -0.325rem -0.5rem;\n}\nhtml footer p,\nbody footer p,\ndiv#root footer p {\n  color: #8b8d8e;\n  font-size: 0.825em;\n}\nhtml footer strong,\nbody footer strong,\ndiv#root footer strong {\n  color: #e2e3e4;\n}\nhtml footer .tooltip .tooltiptext,\nbody footer .tooltip .tooltiptext,\ndiv#root footer .tooltip .tooltiptext {\n  background-color: #6b55b2;\n  background: linear-gradient(25deg, #6b55b2 30%, #6da0ef);\n}\nhtml footer .tooltip .tooltiptext::after,\nbody footer .tooltip .tooltiptext::after,\ndiv#root footer .tooltip .tooltiptext::after {\n  border-color: #695db1 transparent transparent transparent;\n}\nhtml footer .footer-logo,\nbody footer .footer-logo,\ndiv#root footer .footer-logo {\n  height: 1.75rem;\n  opacity: 0.675;\n  cursor: pointer;\n}\nhtml footer .footer-logo:hover,\nbody footer .footer-logo:hover,\ndiv#root footer .footer-logo:hover {\n  opacity: 1;\n}\nhtml footer .cc-logo,\nbody footer .cc-logo,\ndiv#root footer .cc-logo {\n  height: 2.25rem;\n  opacity: 0.675;\n  cursor: pointer;\n  filter: invert(1);\n  padding-inline: 0.325rem;\n}\nhtml footer .cc-logo:hover,\nbody footer .cc-logo:hover,\ndiv#root footer .cc-logo:hover {\n  opacity: 1;\n}\nhtml footer .cc,\nbody footer .cc,\ndiv#root footer .cc {\n  font-size: 0.625rem;\n  padding-inline: 0.325rem;\n}\nhtml footer .cc a,\nbody footer .cc a,\ndiv#root footer .cc a {\n  color: #e2e3e4;\n}\nhtml footer .synx-hue-line,\nbody footer .synx-hue-line,\ndiv#root footer .synx-hue-line {\n  height: 3px;\n  width: 100vw;\n  background-image: url(\"https://synx.ai/static/assets/synx-hue.svg\");\n  background-position: bottom;\n  background-size: cover;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\nhtml .container,\nbody .container,\ndiv#root .container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 33.75em) {\n  html .container,\nbody .container,\ndiv#root .container {\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 60em) {\n  html .container,\nbody .container,\ndiv#root .container {\n    width: 75%;\n    max-width: 60rem;\n  }\n}\nhtml .row,\nbody .row,\ndiv#root .row {\n  position: relative;\n  width: 100%;\n}\nhtml .row [class^=col],\nbody .row [class^=col],\ndiv#root .row [class^=col] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n}\nhtml .row::after,\nbody .row::after,\ndiv#root .row::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\nhtml .col-1,\nhtml .col-2,\nhtml .col-3,\nhtml .col-4,\nhtml .col-5,\nhtml .col-6,\nhtml .col-7,\nhtml .col-8,\nhtml .col-9,\nhtml .col-10,\nhtml .col-11,\nhtml .col-12,\nbody .col-1,\nbody .col-2,\nbody .col-3,\nbody .col-4,\nbody .col-5,\nbody .col-6,\nbody .col-7,\nbody .col-8,\nbody .col-9,\nbody .col-10,\nbody .col-11,\nbody .col-12,\ndiv#root .col-1,\ndiv#root .col-2,\ndiv#root .col-3,\ndiv#root .col-4,\ndiv#root .col-5,\ndiv#root .col-6,\ndiv#root .col-7,\ndiv#root .col-8,\ndiv#root .col-9,\ndiv#root .col-10,\ndiv#root .col-11,\ndiv#root .col-12 {\n  width: 96%;\n}\nhtml .col-1-sm,\nbody .col-1-sm,\ndiv#root .col-1-sm {\n  width: 4.3333333333%;\n}\nhtml .col-2-sm,\nbody .col-2-sm,\ndiv#root .col-2-sm {\n  width: 12.6666666667%;\n}\nhtml .col-3-sm,\nbody .col-3-sm,\ndiv#root .col-3-sm {\n  width: 21%;\n}\nhtml .col-4-sm,\nbody .col-4-sm,\ndiv#root .col-4-sm {\n  width: 29.3333333333%;\n}\nhtml .col-5-sm,\nbody .col-5-sm,\ndiv#root .col-5-sm {\n  width: 37.6666666667%;\n}\nhtml .col-6-sm,\nbody .col-6-sm,\ndiv#root .col-6-sm {\n  width: 46%;\n}\nhtml .col-7-sm,\nbody .col-7-sm,\ndiv#root .col-7-sm {\n  width: 54.3333333333%;\n}\nhtml .col-8-sm,\nbody .col-8-sm,\ndiv#root .col-8-sm {\n  width: 62.6666666667%;\n}\nhtml .col-9-sm,\nbody .col-9-sm,\ndiv#root .col-9-sm {\n  width: 71%;\n}\nhtml .col-10-sm,\nbody .col-10-sm,\ndiv#root .col-10-sm {\n  width: 79.3333333333%;\n}\nhtml .col-11-sm,\nbody .col-11-sm,\ndiv#root .col-11-sm {\n  width: 87.6666666667%;\n}\nhtml .col-12-sm,\nbody .col-12-sm,\ndiv#root .col-12-sm {\n  width: 96%;\n}\n@media only screen and (min-width: 45em) {\n  html .col-1,\nbody .col-1,\ndiv#root .col-1 {\n    width: 4.3333333333%;\n  }\n  html .col-2,\nbody .col-2,\ndiv#root .col-2 {\n    width: 12.6666666667%;\n  }\n  html .col-3,\nbody .col-3,\ndiv#root .col-3 {\n    width: 21%;\n  }\n  html .col-4,\nbody .col-4,\ndiv#root .col-4 {\n    width: 29.3333333333%;\n  }\n  html .col-5,\nbody .col-5,\ndiv#root .col-5 {\n    width: 37.6666666667%;\n  }\n  html .col-6,\nbody .col-6,\ndiv#root .col-6 {\n    width: 46%;\n  }\n  html .col-7,\nbody .col-7,\ndiv#root .col-7 {\n    width: 54.3333333333%;\n  }\n  html .col-8,\nbody .col-8,\ndiv#root .col-8 {\n    width: 62.6666666667%;\n  }\n  html .col-9,\nbody .col-9,\ndiv#root .col-9 {\n    width: 71%;\n  }\n  html .col-10,\nbody .col-10,\ndiv#root .col-10 {\n    width: 79.3333333333%;\n  }\n  html .col-11,\nbody .col-11,\ndiv#root .col-11 {\n    width: 87.6666666667%;\n  }\n  html .col-12,\nbody .col-12,\ndiv#root .col-12 {\n    width: 96%;\n  }\n  html .hidden-sm,\nbody .hidden-sm,\ndiv#root .hidden-sm {\n    display: block;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}