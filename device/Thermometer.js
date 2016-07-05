'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Thermometer extends Thing {
  constructor (iri, type) {
    super(iri, type || context.Thermometer)
  }

  get () {
    return this
  }
}

module.exports = Thermometer
