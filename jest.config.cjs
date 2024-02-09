module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    '^.+\\.(js)$': 'babel-jest',
  },
  moduleNameMapper: {
    "^vue$": "@vue/compat",
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  }
}
