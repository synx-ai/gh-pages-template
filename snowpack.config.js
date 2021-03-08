const fs = require("fs");
const path = require("path");

let pkg;

if (fs.existsSync(path.resolve(process.cwd(), "../package.json"))) {
  pkg = require("../package.json");
} else if (
  fs.existsSync(path.resolve(process.cwd(), "../gh-pages.config.json"))
) {
  pkg = require("../gh-pages.config.json");
} else {
  pkg = require("./package.json");
}

process.env.SNOWPACK_PUBLIC_TITLE = pkg.name;
process.env.SNOWPACK_PUBLIC_DESCRIPTION = pkg.description;
process.env.SNOWPACK_PUBLIC_REPO = pkg.repository.url.replace(/^git\+/, "");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-sass",
    "snowpack-plugin-mdx",
    /*["@snowpack/plugin-webpack",
      {
        sourceMap: false,
        outputPattern: {
          css: '[name].[contenthash].bundle.css',
          js: '[name].[contenthash].bundle.js',
          assets: '[name].[contenthash]',
        },
      },
    ],*/
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  packageOptions: {
    knownEntrypoints: ["react/jsx-runtime"],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: pkg.baseUrl !== undefined ? pkg.baseUrl : "/",
    out: "docs",
  },
};
