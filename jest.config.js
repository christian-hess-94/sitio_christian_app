module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFiles: ['./src/config/tests'],
};
