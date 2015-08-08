'use strict';

const ENV = process.env.NODE_ENV;
const ROOT = require('app-root-path');
const enable = ENV === 'live';

module.exports = Object.freeze({
  
  port: process.env.PORT || 3000,
  appRoot: ROOT.path,
  hbs: {
    cacheEnabled: enable
  },
  assets: {
    cache: enable ? 86400000 : 0
  },
  response: {
    cache: enable ? 3600 : 1
  }
  
});
  
  