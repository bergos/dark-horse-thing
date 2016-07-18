'use strict'

var ns = 'http://ns.bergnet.org/dark-horse#'

var context = {
  Apartment: ns + 'Apartment',
  Device: ns + 'Device',
  HeaterController: ns + 'HeaterController',
  Hygrometer: ns + 'Hygrometer',
  Light: ns + 'Light',
  PowerSocket: ns + 'PowerSocket',
  Room: ns + 'Room',
  Switchable: ns + 'Switchable',
  Thermometer: ns + 'Thermometer',
  Thing: ns + 'Thing',
  desiredTemperature: ns + 'desiredTemperature',
  device: {
    '@id': ns + 'device',
    '@array': true
  },
  endpoint: {
    '@id': ns + 'endpoint',
    '@type': '@id'
  },
  humidity: ns + 'humidity',
  label: 'http://www.w3.org/2000/01/rdf-schema#label',
  lowBatteryPower: ns + 'lowBatteryPower',
  on: ns + 'on',
  off: ns + 'off',
  room: {
    '@id': ns + 'room',
    '@array': true
  },
  state: {
    '@id': ns + 'state',
    '@type': '@id'
  },
  temperature: ns + 'temperature',
  type: {
    '@id': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
    '@type': '@id',
    '@array': true
  },
  valve: ns + 'valve'
}

module.exports = context
