# steam-web-api-fetch

Thin Fetch API client for the Steam Web API

[![Travis build status](http://img.shields.io/travis/ileri/steam-web-api-fetch.svg?style=flat)](https://travis-ci.org/ileri/steam-web-api-fetch)
[![Code Climate](https://codeclimate.com/github/ileri/steam-web-api-fetch/badges/gpa.svg)](https://codeclimate.com/github/ileri/steam-web-api-fetch)
[![Test Coverage](https://codeclimate.com/github/ileri/steam-web-api-fetch/badges/coverage.svg)](https://codeclimate.com/github/ileri/steam-web-api-fetch)
[![Dependency Status](https://david-dm.org/ileri/steam-web-api-fetch.svg)](https://david-dm.org/ileri/steam-web-api-fetch)
[![devDependency Status](https://david-dm.org/ileri/steam-web-api-fetch/dev-status.svg)](https://david-dm.org/ileri/steam-web-api-fetch#info=devDependencies)

## Install
```
$ npm install --save steam-web-api-fetch babel isomorphic-fetch
```

## Usage
```js
require('babel/polyfill')
require('isomorphic-fetch')
var steamWebApiFetch = require('steam-web-api-fetch').default

steamWebApiFetch('SteamNews', 'GetNewsForApp', {
  version: 2,
  query: {
    appid: 440,
    count: 3,
    maxlength: 300
  }
}) // GET https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json
  .then(function (res) {
    if (res.status >= 400) {
      return Promise.reject(res)
    }
    return res.json()
  })
  .then(function (body) {
    console.log(body)
  }) // { appnews: { appid: 440, newsitems: [ [Object], [Object], [Object] ] } }
```

## API

### default(interfaceName, methodName[, options])
See [steam-web-api-build-url](https://github.com/ileri/steam-web-api-build-url)
for information about interfaceName, methodName, and options. Options not listed
in steam-web-api-build-url will be passed to fetch.
