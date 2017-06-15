const postcssNestedPlugin = require('postcss-nested');
const postcssAutoprefixerPlugin = require('autoprefixer');

module.exports = [
  {
    plugin: postcssNestedPlugin,
    namespace: 'nested',
    defaults: {},
  },
  {
    plugin: postcssAutoprefixerPlugin,
    namespace: 'autoprefixer',
    defaults: {
      browsers: [
        'last 2 versions',
        'Explorer >= 10',
        'Safari >= 5',
      ],
    },
  },
];
