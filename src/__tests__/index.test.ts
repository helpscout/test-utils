import * as testUtils from '../index'

describe('test-utils', () => {
  test('Exports utils from main index', () => {
    Object.keys(testUtils).forEach(util => {
      expect(util).toBeTruthy()
    })
  })
})
