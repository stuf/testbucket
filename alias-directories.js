const { readdirSync, lstatSync } = require('fs');
const { join, resolve } = require('path');
const R = require('ramda');

const isDirectory = source => lstatSync(source).isDirectory();

//

module.exports.getJestDirectories = basePath => {
  const SRC_ROOT = resolve(basePath, 'src');

  process.chdir(SRC_ROOT);

  return readdirSync('.').map(name => join('.', name))
                         .filter(isDirectory)
                         .reduce((obj, n) => R.assoc(`^${n}(.*)$`, `<rootDir>/src/${n}$1`, obj), {});
};

//

module.exports.getWebpackDirectories = basePath => {
  const SRC_ROOT = resolve(basePath, 'src');

  process.chdir(SRC_ROOT);

  return readdirSync('.').map(name => join('.', name))
                         .filter(isDirectory)
                         .reduce((obj, n) => Object.assign(obj, { [n]: resolve(n) }), {});
};
