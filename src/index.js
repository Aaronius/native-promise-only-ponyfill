var root = global || self;
var Promise = root.Promise;

if (typeof Promise === 'undefined') {
  Promise = require('native-promise-only');
  root.Promise = undefined;
}

module.exports = Promise;
