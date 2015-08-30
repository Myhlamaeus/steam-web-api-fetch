/* global fetch */

const buildUrl = require('steam-web-api-build-url').default

export default function (interfaceName, methodName, options = {}) {
  options = Object.assign({
    format: 'json',
    key: false,
    query: {},
    version: 1
  }, options)
  let {format, key, query, version} = options
  delete options.format
  delete options.key
  delete options.query
  delete options.version

  return fetch(buildUrl(interfaceName, methodName, {
    query, version, key, format
  }), options)
}
