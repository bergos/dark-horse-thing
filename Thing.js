'use strict'

const context = require('./context')
const SimpleRDF = require('simplerdf/lite').SimpleRDF

function flattenTypes (types) {
  if (!Array.isArray(types)) {
    types = [types]
  }

  return types.reduce(function (types, type) {
    if (Array.isArray(type)) {
      return types.concat(falttenTypes(type))
    } else {
      return types.concat([type])
    }
  }, [])
}

class Thing extends SimpleRDF {
  constructor (iri, config) {
    super(context, iri)

    if (config && config.type) {
      this.type = flattenTypes(config.type)
    }
  }

  get () {
    return this
  }
}

module.exports = Thing
