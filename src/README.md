# Readme to GitHub pages template

Templete to use [Snowpack](https://www.snowpack.dev/) to build a React, TypeScript and SASS static website and publish it as a GitHub page from a `readme.md` file.


## Quick Start

You don't need to use directly this repository but to create a GitHub Workflow that uses it, like the following:

```yaml
name: Publish Website to GitHub Pages

on:
  push:
    branches: # triggers on any push to master
    - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    env:
      template-dir: ./gh-pages-template

    steps:
    # copy your repo to actions
    - uses: actions/checkout@master

    # clone this repo to a subdir
    - uses: actions/checkout@master
      with:
        repository: synx-ai/gh-pages-template
        path: ${{env.template-dir}}

    # clone the "README.md" file, you may edit this
    # please note that only markdown and mdx files are supported and
    # filenames are case sensitive.
    - name: 🧬 Readme.md cloning
      uses: canastro/copy-file-action@master
      with:
        source: "README.md"
        target: "gh-pages-template/src/README.md"

    - name: ⚙️ Install dependencies
      working-directory: ${{env.template-dir}}
      run: yarn install

    - name: 🧪 Test
      working-directory: ${{env.template-dir}}
      run: yarn test

    - name: 🛠 Build
      working-directory: ${{env.template-dir}}
      run: yarn build

    # this will deploy to gh-pages branch, remember to enable it in repo settings
    - name: 🚀 Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
```

**And that's it!** Page should be available.

## Configuration

All info needed is extracted from `package.json`, if you repo den't have one, be sure to create a `gh-pages.config.json` containing the following fields:

```javascript
// gh-pages.config.json
{
  "name": "This should be the title.",
  "description": "Explain to world how awesome your project is.",
  "baseUrl": "/subdir/",
  "repository": {
    "url": "https://github.com/synx-ai/awesome-repo"
  }
}
```

## Customize the template

Clone this repo and freely edit `public` and `src`.

### Available Scripts

#### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### yarn build

Builds a static copy of your site to the `../docs` folder.
Your app is ready to be deployed!
