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


#### Options

Options can be passed for individual processors:

```js
postcss([
  require('postcss-travix')({
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  })
]);
```

You can also disable some plugins:

```js
postcss([
  require('postcss-travix')({
    autoprefixer: {
      disabled: true
    }
  })
]);
```

You can find the list of processors with their names and default options in [`processors.js`](./processors.js) file.

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

### Autoprefixing

We support compatibility with older versions of browsers, and the current list of browsers consists of:

* `last 2 versions`
* `Explorer >= 10`
* `Safari >= 5`

The naming convention of the browsers follow [Browserslist](https://github.com/ai/browserslist).

Input:

```css
.myClass {
  flex: 1;
}
```

Output:

```css
.myClass {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
```

## License

MIT © [Travix International](http://travix.com)
