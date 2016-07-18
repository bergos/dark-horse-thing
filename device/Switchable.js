'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Switchable extends Thing {
  constructor (iri, config) {
    super(iri, {type: [context.Device, (config && config.type) || context.Switchable]})
  }

  get () {
    return this
  }
}

module.exports = Switchable
