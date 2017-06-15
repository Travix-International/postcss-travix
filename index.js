const postcss = require('postcss');

const processors = require('./processors');

module.exports = postcss.plugin('travix', function (opts) {
  const options = opts || {};

  const instance = postcss();

  processors.forEach(function (processor) {
    const namespaceOptions = processor.namespace in options
      ? options[processor.namespace]
      : options;
    const processorOptions = {};

    Object
      .keys(processor.defaults)
      .forEach(function (key) {
        processorOptions[key] = processor.defaults[key];
      });

    Object
      .keys(namespaceOptions)
      .forEach(function (key) {
        processorOptions[key] = namespaceOptions[key];
      });

    if (
      namespaceOptions &&
      !processorOptions.disable
    ) {
      instance.use(processor.plugin(processorOptions));
    }
  });

  return instance;
});
