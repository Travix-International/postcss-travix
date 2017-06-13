# postcss-travix

[![npm](https://img.shields.io/npm/v/postcss-travix.svg)](https://www.npmjs.com/package/postcss-travix) [![Build Status](https://img.shields.io/travis/Travix-International/postcss-travix/master.svg)](http://travis-ci.org/Travix-International/postcss-travix)

> PostCSS plugin for Travix

## Installation

With [npm](https://npmjs.com):

```
$ npm install --save postcss postcss-travix
```

## Usage

### PostCSS

```js
const postcss = require('postcss');

postcss([
  require('postcss-travix')({ /* plugin options */ })
])
  .process(YOUR_CSS, { /* process options */ })
  .then(function (result) {
    // console.log(result.css);
  });
```

## Features

### Nesting

Input:

```css
.nested {
  .selector {
    .here {
      padding: 0;
    }
  }
}
```

Output:

```css
.nested .selector .here {
  padding: 0;
}
```

## License

MIT © [Travix International](http://travix.com)
