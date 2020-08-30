const { IntegerToEnglish } = require('int2english')
const englishNumbers = require('../index')

describe('english numbers', () => {
  it('returns correct numbers from 0 to million', () => {
    for (let i = 0; i < 1000000; i += 1) {
      const english = IntegerToEnglish(i).toLowerCase()
      expect(englishNumbers[english]).toBe(i)
    }
  })

  it('works for a bunch of random cases', () => {
    const max = 1000000
    for (let i = 0; i < max; i += 1) {
      const number = Math.random() * max | 0
      const english = IntegerToEnglish(number).toLowerCase()
      expect(englishNumbers[english]).toBe(number)
    }
  })
})
