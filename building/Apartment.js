'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Apartment extends Thing {
  constructor (iri, type) {
    super(iri, type || context.Apartment)
  }
}

module.exports = Apartment
