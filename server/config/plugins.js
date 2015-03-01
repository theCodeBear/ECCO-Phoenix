'use strict';

var Good = require('good');

module.exports = [
  {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        args: [{ log: '*', response: '*'}]
      }]
    }
  },
  {
    register: require('hapi-auth-cookie')
  }
];