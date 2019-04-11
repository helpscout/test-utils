const jestConfig = require('@helpscout/zero/jest')

module.exports = Object.assign(jestConfig, {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/setupEnzyme.ts'],
})
