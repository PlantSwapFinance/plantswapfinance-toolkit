module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // babel-jest for every extension — see babel.config.js for why ts-jest is
  // not usable under TypeScript 7.
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
