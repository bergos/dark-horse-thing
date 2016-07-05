'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Room extends Thing {
  constructor (iri, type) {
    super(iri, type || context.Room)
  }
}

module.exports = Room
