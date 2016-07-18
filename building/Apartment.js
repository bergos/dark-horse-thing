'use strict'

const context = require('../context')
const Thing = require('../Thing')

class Apartment extends Thing {
  constructor (iri, config) {
    super(iri, {type: (config && config.type) || context.Apartment})
  }
}

module.exports = Apartment
