'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request,reply) {
    reply(request.auth.credentials);
  }
};