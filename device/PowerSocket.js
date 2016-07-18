'use strict'

const context = require('../context')
const Thing = require('../Thing')

class PowerSocket extends Thing {
  constructor (iri, config) {
    super(iri, {type: [context.Device, (config && config.type) || context.PowerSocket]})

    this.state = context.off
  }

  put (input) {
    this.state = input.state
  }
}

module.exports = PowerSocket
