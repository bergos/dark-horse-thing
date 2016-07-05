'use strict'

const context = require('../context')
const Thing = require('../Thing')

class HeaterController extends Thing {
  constructor (iri, type) {
    super(iri, type || context.HeaterController)
  }

  get () {
    return this
  }
}

module.exports = HeaterController
