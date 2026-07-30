module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
};
