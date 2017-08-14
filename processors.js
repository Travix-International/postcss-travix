const postcssNestedPlugin = require('postcss-nested');
const postcssAutoprefixerPlugin = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');

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
  {
    plugin: postcssCustomProperties,
    namespace: 'properties',
    defaults: {},
  },
];
