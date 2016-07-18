'use strict'

const context = require('../context')
const Thing = require('../Thing')

class HeaterController extends Thing {
  constructor (iri, config) {
    super(iri, {type: [context.Device, (config && config.type) || context.HeaterController]})
  }

  get () {
    return this
  }
}

module.exports = HeaterController
