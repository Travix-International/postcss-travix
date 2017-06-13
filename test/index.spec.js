const fs = require('fs');
const path = require('path');

const expect = require('chai').expect;

const plugin = require('../');

const FIXTURES_DIR = path.join(__dirname, 'fixtures');

function trimCSS(input) {
  return input
    .split('\n')
    .map(function (line) {
      return line.trimLeft()
    })
    .join('\n');
}

describe('postcss-travix', function () {
  const files = fs.readdirSync(FIXTURES_DIR);

  files.forEach(function (file) {
    if (
      !file.endsWith('.css') ||
      file.endsWith('.expected.css')
    ) {
      return;
    }

    const name = file.split('.')[0];

    it(name, function (done) {
      const source = fs.readFileSync(path.join(FIXTURES_DIR, file), 'utf8');
      const expected = fs.readFileSync(path.join(
        FIXTURES_DIR,
        file.replace('.css', '.expected.css')
      ), 'utf8');

      plugin.process(source)
        .then(function (result) {
          expect(trimCSS(result.css)).to.equal(trimCSS(expected));
          done();
        })
        .catch(done);
    });
  });
});
