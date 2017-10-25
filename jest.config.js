const { getDirectories } = require('./config/jest/alias-directories');

const dirs = getDirectories(__dirname);

const baseMappers = {
  '\\.(jpg|jpeg|png|gif|ico|svg|eot|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
  '\\.css': '<rootDir>/__mocks__/styleMock.js'
};

const moduleNameMapper = Object.assign({}, baseMappers, dirs);

module.exports = {
  verbose: true,
  moduleNameMapper,
  setupFiles: [
    '<rootDir>/src/setupTests.js'
  ],
  roots: [
    '<rootDir>/src'
  ]
};
