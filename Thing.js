'use strict'

const context = require('./context')
const SimpleRDF = require('simplerdf/lite').SimpleRDF

class Thing extends SimpleRDF {
  constructor (iri, type) {
    super(context, iri)

    this.type = type
  }

  get () {
    return this
  }
}

module.exports = Thing
