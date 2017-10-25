const { readdirSync, lstatSync } = require('fs');
const { join, resolve } = require('path');
const R = require('ramda');

module.exports.getDirectories = basePath => {
  const SRC_ROOT =
    resolve(basePath, 'src');

  process.chdir(SRC_ROOT);

  const isDirectory = source =>
    lstatSync(source).isDirectory();

  return readdirSync('.').map(name => join('.', name))
                         .filter(isDirectory)
                         .reduce((obj, n) => R.assoc(`^${n}(.*)$`, `<rootDir>/src/${n}$1`, obj), {});
};
