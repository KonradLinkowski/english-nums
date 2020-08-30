const english2number = require('english2number')

module.exports = new Proxy({}, {
  get: (target, prop, receiver) => english2number(prop)
})
