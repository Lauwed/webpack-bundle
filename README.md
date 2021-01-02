# Webpack bundle

## How to use

### Clone the repo

Choose the way you want

### Install the node modules

Install all the dependencies with this command line

`$ yarn install`

### Launch the server

`$ yarn start`

Do a development build

`$ yarn build-dev`

### Production build

`$ yarn build`

## Structure

```javascript
root
├── src
|   ├── assets
|   ├── sass
|   |   ├── components
|   |   ├── layout
|   |   ├── utils
|   |   └── atyle.scss
|   ├── index.html
|   └── index.js
├── .babelrc
├── .gitignore
├── webpack.config.common.js
├── webpack.config.prod.js
├── webpack.config.dev.js
├── yarn.lock
```
