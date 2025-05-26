module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transformIgnorePatterns: ['/node_modules/']
}