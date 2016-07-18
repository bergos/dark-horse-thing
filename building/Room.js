'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Room extends Thing {
  constructor (iri, config) {
    super(iri, {type: (config && config.type) || context.Room})
  }
}

module.exports = Room
