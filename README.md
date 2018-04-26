# gatsby-plugin-root-import

Set Webpack to resolve root, allowing you to import modules from an absolute project path rather than relative `../../` paths.

## Install

1. Install the `gatsby-plugin-root-import` plugin:

    `npm install --save-dev gatsby-plugin-root-import`

    or

    `yarn add --dev gatsby-plugin-root-import`

## Usage

Add into `gatsby-config.js`.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    'gatsby-plugin-root-import'
  ]
}
```

If no options are specified, the plugin defaults to your project root folder.

You can specify your own folder, such as `src`

```javascript
// gatsby-config.js
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src')
      }
    }
  ]
}
```
