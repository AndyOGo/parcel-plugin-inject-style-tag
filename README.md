# parcel-plugin-inject-style-tag

Inject styles into the DOM using multiple `<style>` tags

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Credit / Inspiration](#credit--inspiration)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```sh
npm install parcel-plugin-inject-style-tag --save-dev
```

# Usage

Install this plugin and configure which CSS assets you want to inline into JS and inject into a `<style>` tag within your document's `<head>`.

## Configuration

Please place you config either in:

- a `parcelInjectStyle` prop within your `package.json`
- or inside a one config file of:
   - `.parcelinjectstylerc`,
   - `.parcelinjectstylerc.js`
   - or `parcelinjectstyle.config.js`

This plugin utilise [`file-path-filter`](https://www.npmjs.com/package/file-path-filter?activeTab=readme#usage) to help you filter injected assets.

> - **`criteria`** - The filter criteria. This can be any of the following:
> - A boolean. `true` will match all files. `false` will not match any files.
> - A [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)). If the pattern starts with `!`, then it will be treated as an `exclude` pattern (see below)
> - A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
> - A [filter function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Syntax) that accepts a file path and returns `true` if the file should be matched
> - An array containing any combination of the above types
> - An object with `include` and `exclude` properties. Each of these properties can be any of the above types.  File paths will be matched if they match any of the `include` criteria and do not match any of the `exclude` criteria.

## Credit / Inspiration

Inspired by this [comment](https://github.com/parcel-bundler/parcel/issues/2864#issuecomment-481377618).

# License

The MIT License (MIT)

Copyright (c) 2022 Andreas Deuschlinger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
