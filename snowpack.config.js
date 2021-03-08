try {
  const pkg = require('../package.json');
} catch {
  const pkg = require('./package.json');
}

process.env.SNOWPACK_PUBLIC_TITLE = pkg.name;
process.env.SNOWPACK_PUBLIC_DESCRIPTION = pkg.description;

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
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: ["react/jsx-runtime"],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: '/gh-pages-snowpack',
    out: "../docs"
  },
};
