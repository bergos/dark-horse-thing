'use strict'

var context = {
  Apartment: 'http://ns.bergnet.org/dark-horse#Apartment',
  HeaterController: 'http://ns.bergnet.org/dark-horse#HeaterController',
  Light: 'http://ns.bergnet.org/dark-horse#Light',
  PowerSocket: 'http://ns.bergnet.org/dark-horse#PowerSocket',
  Room: 'http://ns.bergnet.org/dark-horse#Room',
  Thermometer: 'http://ns.bergnet.org/dark-horse#Thermometer',
  Thing: 'http://ns.bergnet.org/dark-horse#Thing',
  desiredTemperature: 'http://ns.bergnet.org/dark-horse#desiredTemperature',
  device: {
    '@id': 'http://ns.bergnet.org/dark-horse#device',
    '@array': true
  },
  humidity: 'http://ns.bergnet.org/dark-horse#humidity',
  label: 'http://www.w3.org/2000/01/rdf-schema#label',
  lowBatteryPower: 'http://ns.bergnet.org/dark-horse#lowBatteryPower',
  on: 'http://ns.bergnet.org/dark-horse#on',
  off: 'http://ns.bergnet.org/dark-horse#off',
  room: {
    '@id': 'http://ns.bergnet.org/dark-horse#room',
    '@array': true
  },
  state: {
    '@id': 'http://ns.bergnet.org/dark-horse#state',
    '@type': '@id'
  },
  temperature: 'http://ns.bergnet.org/dark-horse#temperature',
  type: {
    '@id': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
    '@type': '@id'
  },
  valve: 'http://ns.bergnet.org/dark-horse#valve'
}

module.exports = context
