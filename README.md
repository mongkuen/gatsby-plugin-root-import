# gatsby-plugin-root-import

Set Webpack to resolve root, allowing you to import modules from an absolute project path rather than relative `../../` paths.

**NOTE:** Plugin has different installation and usage instructions to support both Gatsby V1 and V2.

<hr/>

## Gatsby V2 Instructions
### Install

1. Install the `gatsby-plugin-root-import` plugin:

    `npm install --save-dev gatsby-plugin-root-import`

    or

    `yarn add --dev gatsby-plugin-root-import`

### Usage

Add into `gatsby-config.js`.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    'gatsby-plugin-root-import'
  ]
}
```

### Default Settings
Webpack v4 drops `resolve.root` in favor of `resolve.alias` found [here](https://webpack.js.org/configuration/resolve/#resolve-alias).

If no options are specified, the plugin creates a default alias of `src` to your project `src` folder.

This means you should be able to import modules like such:
```javascript
// importing gatsbyProject/src/yourFolder/YourComponent.js

import YourComponent from 'src/yourFolder/YourComponent'
```

### Plugin Options

You can pass as many keys as you want into the plugin options, and they will map to Webpack's `alias` configuration.

`alias` takes an object with keys of your alias names, and values of directory strings [like so](https://webpack.js.org/configuration/resolve/#resolve-alias).

```javascript
// gatsby-config.js
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      }
    }
  ]
}
```


This means you should be able to import modules like such:
```javascript
// from the 'src' alias
// importing gatsbyProject/src/yourFolder/YourComponent.js

import YourComponent from 'src/yourFolder/YourComponent'

// from the 'pages' alias
// importing gatsbyProject/src/pages/YourPage.js

import YourPage from 'pages/YourPage'
```

<hr/>

## Gatsby V1 Instructions
### Install

1. Install the `gatsby-plugin-root-import` plugin:

    `npm install --save-dev --save-exact gatsby-plugin-root-import@1.0.0`

    or

    `yarn add --dev gatsby-plugin-root-import@1.0.0`

### Usage

Add into `gatsby-config.js`.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    'gatsby-plugin-root-import'
  ]
}
```

### Default Settings

If no options are specified, the plugin defaults to your project root folder.

This means you should be able to import modules like such:
```javascript
// importing gatsbyProject/src/yourFolder/YourComponent.js

import YourComponent from 'src/yourFolder/YourComponent'
```

### Plugin Options

You can pass a `root` option. You can specify your own folder, such as `src`.
This option corresponds with Webpack v3's `resolve.root` found [here](https://github.com/webpack/docs/wiki/configuration#resolveroot).
This may be both a directory string, or an array of directory strings.

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

This means you can import modules with project's `src` folder as `root`:
```javascript
// importing gatsbyProject/src/yourFolder/YourComponent.js

import YourComponent from 'yourFolder/YourComponent'
```
