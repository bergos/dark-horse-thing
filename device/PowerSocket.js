'use strict'

const context = require('../context')
const Thing = require('../Thing')

class PowerSocket extends Thing {
  constructor (iri, type) {
    super(iri, type || context.PowerSocket)

    this.state = context.off
  }

  put (input) {
    this.state = input.state
  }
}

module.exports = PowerSocket
