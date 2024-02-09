module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue2-jest",
    '^.+\\.(js)$': 'babel-jest',
  },
}
