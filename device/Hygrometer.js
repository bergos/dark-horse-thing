'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Hygrometer extends Thing {
  constructor (iri, config) {
    super(iri, {type: [context.Device, (config && config.type) || context.Hygrometer]})
  }

  get () {
    return this
  }
}

module.exports = Hygrometer
