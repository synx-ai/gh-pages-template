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
  }), mdx("h1", null, `OpenAPI3 to Markdown converter`), mdx("p", null, mdx("a", {
    parentName: "p",
    "href": "https://travis-ci.com/synx-ai/oas3-mdx"
  }, mdx("img", {
    parentName: "a",
    "src": "https://img.shields.io/travis/synx-ai/oas3-mdx?logo=travis",
    "alt": "Travis Build Status"
  })), ` `, mdx("a", {
    parentName: "p",
    "href": "https://github.com/synx-ai/oas3-mdx/actions/workflows/package.yml"
  }, mdx("img", {
    parentName: "a",
    "src": "https://img.shields.io/github/workflow/status/synx-ai/oas3-mdx/Node.js%20Package?label=package&logo=github",
    "alt": "GitHub Workflow Status"
  })), ` `, mdx("a", {
    parentName: "p",
    "href": "https://www.npmjs.com/package/@synx-ai/oas3-mdx"
  }, mdx("img", {
    parentName: "a",
    "src": "https://img.shields.io/npm/v/@synx-ai/oas3-mdx?logo=npm",
    "alt": "npm"
  })), ` `, mdx("a", {
    parentName: "p",
    "href": "https://www.npmjs.com/package/@synx-ai/oas3-mdx"
  }, mdx("img", {
    parentName: "a",
    "src": "https://img.shields.io/npm/dw/@synx-ai/oas3-mdx?logo=npm",
    "alt": "npm"
  })), ` `, mdx("a", {
    parentName: "p",
    "href": "https://coveralls.io/github/synx-ai/oas3-mdx"
  }, mdx("img", {
    parentName: "a",
    "src": "https://img.shields.io/coveralls/github/synx-ai/oas3-mdx?logo=coveralls",
    "alt": "Coveralls"
  }))), mdx("p", null, `Convert OpenAPI v3 spec into a directory of markdown files based on your spec paths. The purpose of this tool is to boost documentation generation and seamlessly integrate them into static site generators.`), mdx("p", null, mdx("a", {
    parentName: "p",
    "href": "https://handlebarsjs.com/"
  }, mdx("strong", {
    parentName: "a"
  }, `Handlebars`)), ` is used to provide fully configurable templating support.`), mdx("h2", null, `Installation`), mdx("h3", null, `yarn`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-console"
  }, `yarn add @synx-ai/oas3-mdx
`)), mdx("h3", null, `npm`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-console"
  }, `npm install @synx-ai/oas3-mdx
`)), mdx("h2", null, `Basic usage`), mdx("h3", null, `CLI`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-console"
  }, `Usage: oas3-mdx --specs [file] --target [target path] --templates [template path] --snippets [string with targets]

Options:
      --version   Show version number                         [boolean]
  -s, --spec      OpenAPI specification                      [required]
  -o, --target    target build path                [default: "./build"]
  -t, --templates templates path               [default: "./templates"]
  -c, --snippets  comma separated targets            [default: "shell"]
      --help      Show help
`)), mdx("h3", null, `JavaScript`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, `const convert = require('openapi2md').default;

// optional arguments are expected as an object, ie:
convert('./example/petstore.json' /*, { outPath: 'my_path' }*/);
`)), mdx("h3", null, `Options`), mdx("table", null, mdx("thead", {
    parentName: "table"
  }, mdx("tr", {
    parentName: "thead"
  }, mdx("th", {
    parentName: "tr",
    "align": null
  }, `Option`), mdx("th", {
    parentName: "tr",
    "align": null
  }, `CLI argument`), mdx("th", {
    parentName: "tr",
    "align": null
  }, `JavaScript parameter`), mdx("th", {
    parentName: "tr",
    "align": null
  }, `Default`))), mdx("tbody", {
    parentName: "table"
  }, mdx("tr", {
    parentName: "tbody"
  }, mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `OpenAPI spec`)), mdx("td", {
    parentName: "tr",
    "align": null
  }, `--spec`), mdx("td", {
    parentName: "tr",
    "align": null
  }, `specFile`), mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("em", {
    parentName: "td"
  }, `None`))), mdx("tr", {
    parentName: "tbody"
  }, mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `Target build dir`)), mdx("td", {
    parentName: "tr",
    "align": null
  }, `--target`), mdx("td", {
    parentName: "tr",
    "align": null
  }, `outPath`), mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `./build`))), mdx("tr", {
    parentName: "tbody"
  }, mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `Templates dir`)), mdx("td", {
    parentName: "tr",
    "align": null
  }, `--templates`), mdx("td", {
    parentName: "tr",
    "align": null
  }, `templatesPath`), mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `./templates`))), mdx("tr", {
    parentName: "tbody"
  }, mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `Snippet targets`)), mdx("td", {
    parentName: "tr",
    "align": null
  }, `--snipetts`), mdx("td", {
    parentName: "tr",
    "align": null
  }, `snippetTargets`), mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `["shell"]`))), mdx("tr", {
    parentName: "tbody"
  }, mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `Prettier parser`)), mdx("td", {
    parentName: "tr",
    "align": null
  }, `--parser`), mdx("td", {
    parentName: "tr",
    "align": null
  }, `prettierParser`), mdx("td", {
    parentName: "tr",
    "align": null
  }, mdx("inlineCode", {
    parentName: "td"
  }, `mdx`))))), mdx("p", null, `The tool will try to load the `, mdx("inlineCode", {
    parentName: "p"
  }, `--templates`), ` relative to current working path first, then will fallback to library path.`), mdx("h3", null, `Valid Snippet Targets`), mdx("p", null, `Currently, OpenAPI Snippet supports the following targets from `, mdx("a", {
    parentName: "p",
    "href": "https://github.com/Kong/httpsnippet"
  }, `HTTP Snippet`), ` library:`), mdx("ul", null, mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `c_libcurl`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `csharp_restsharp`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `go_native`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `java_okhttp`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `java_unirest`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `javascript_jquery`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `javascript_xhr`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `node_native`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `node_request`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `node_unirest`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `objc_nsurlsession`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `ocaml_cohttp`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `php_curl`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `php_http1`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `php_http2`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `python_python3`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `python_requests`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `ruby_native`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `shell_curl`), ` (default)`), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `shell_httpie`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `shell_wget`)), mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `swift_nsurlsession`), ` (default)`)), mdx("h3", null, `Prettier Parser`), mdx("p", null, `For the parser, while `, mdx("inlineCode", {
    parentName: "p"
  }, `mdx`), ` or `, mdx("inlineCode", {
    parentName: "p"
  }, `markdown`), ` are suggested, you can use anything supported by `, mdx("a", {
    parentName: "p",
    "href": "https://prettier.io/docs/en/options.html#parser"
  }, `Prettier`), `.`), mdx("p", null, `### Custom Tags on Schema`), mdx("ul", null, mdx("li", {
    parentName: "ul"
  }, mdx("inlineCode", {
    parentName: "li"
  }, `x-docgenIgnore`), `: at method level to ignore output generation, for example:`)), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-js"
  }, `{
  ...
  "paths": {
    "/pet": {
      "put": { // this method will be ignored
        "x-docgenIgnore": true,
        "summary": "Update an existing pet",
        ...
      }
    }
  }
}
`)), mdx("h3", null, `Templates`), mdx("p", null, `For every `, mdx("a", {
    parentName: "p",
    "href": "https://swagger.io/docs/specification/paths-and-operations/"
  }, mdx("strong", {
    parentName: "a"
  }, `operation`)), ` in `, mdx("inlineCode", {
    parentName: "p"
  }, `paths`), `, object with all references resolved will be passed to `, mdx("inlineCode", {
    parentName: "p"
  }, `templates/path.hdb`), `, please refer to default template for an example in how to use it.`), mdx("p", null, `Please note that before saving, prettify will be executed to format the output, you can disable it using the `, mdx("inlineCode", {
    parentName: "p"
  }, `<!-- prettier-ignore-start -->`), ` tag, example:`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<!-- prettier-ignore-start -->

<Tabs defaultValue="{{someVar}}" values={[
{{#each content}}
  { label: "{{@key}}", value: "{{@key}}" },
{{/each}}
]}>

<!-- prettier-ignore-end -->
`)), mdx("h3", null, `Using partials`), mdx("p", null, `In your `, mdx("inlineCode", {
    parentName: "p"
  }, `templatesPath`), ` create a `, mdx("inlineCode", {
    parentName: "p"
  }, `dir`), ` called `, mdx("inlineCode", {
    parentName: "p"
  }, `partials`), ` every single file with `, mdx("inlineCode", {
    parentName: "p"
  }, `.hdb`), ` extension within its subdirs will be loaded as partial, using the filename as partial name. Example:`), mdx("p", null, `A file named `, mdx("inlineCode", {
    parentName: "p"
  }, `partials/quote.hdb`), ` with the following code, will create a `, mdx("inlineCode", {
    parentName: "p"
  }, `quote`), ` partial.`), mdx("pre", null, mdx("code", {
    parentName: "pre"
  }, `>{{text}}
`)), mdx("p", null, `This partial can be used in your templates as follows:`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-markdown"
  }, `{{>quote "This text will be quoted."}}
`)), mdx("h3", null, `Using helpers`), mdx("p", null, `In your `, mdx("inlineCode", {
    parentName: "p"
  }, `templatesPath`), ` create a `, mdx("inlineCode", {
    parentName: "p"
  }, `dir`), ` called `, mdx("inlineCode", {
    parentName: "p"
  }, `helpers`), ` every single file with `, mdx("inlineCode", {
    parentName: "p"
  }, `.js`), ` extension within its subdirs will be loaded as a helper, using the filename as the helper name. Example:`), mdx("p", null, `A file named `, mdx("inlineCode", {
    parentName: "p"
  }, `partials/loud.js`), ` with the following code, will create a `, mdx("inlineCode", {
    parentName: "p"
  }, `load`), ` helper.`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, `// the script should export an anonymous function in order to execute
// you can use many parameters as needed
exports.default = function (text) {
  return text.toUpperCase()
}
`)), mdx("p", null, `This helper can be used in your templates as follows:`), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-markdown"
  }, `{{loud "This text will be uppercased."}}
`)), mdx("h2", null, `Troubleshooting`), mdx("ul", null, mdx("li", {
    parentName: "ul"
  }, `Most common errors happens due a malformed file, to validate and lint your spec for possible errors check `, mdx("a", {
    parentName: "li",
    "href": "https://github.com/wework/speccy"
  }, `Speccy`), `.`), mdx("li", {
    parentName: "ul"
  }, `If your specification has multiple paths which map to the same OpenAPI path, you can should set `, mdx("inlineCode", {
    parentName: "li"
  }, `"x-hasEquivalentPaths": true,`), ` on the root object, example:`)), mdx("pre", null, mdx("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, `{
  "openapi": "3.0.2",
  "x-hasEquivalentPaths": true,
  "info": {
    ...
  }
  ...
}  
`)), mdx("h2", null, `Roadmap`), mdx("ul", {
    "className": "contains-task-list"
  }, mdx("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, mdx("input", {
    parentName: "li",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Create a cli.js file to execute commands using yarn or npm`), mdx("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, mdx("input", {
    parentName: "li",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `Add more configurations (ie: custom templates)`), mdx("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, mdx("input", {
    parentName: "li",
    "type": "checkbox",
    "checked": true,
    "disabled": true
  }), ` `, `~MDX templating support for platform that supports `, mdx("strong", {
    parentName: "li"
  }, `React`), ` components.~ Removed as it can be customized from current templates.`), mdx("li", {
    parentName: "ul",
    "className": "task-list-item"
  }, mdx("input", {
    parentName: "li",
    "type": "checkbox",
    "checked": false,
    "disabled": true
  }), ` `, `Add schemas and general info rendering.`)), mdx("h2", null, `Contribute`), mdx("p", null, `PR's are more than welcome and highly appreciated.`));
}
;
MDXContent.isMDXComponent = true;