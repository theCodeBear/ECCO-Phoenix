'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string().min(3)
    }
  },
  auth: {
    mode: 'try'
  },
  handler: function(request,reply) {
    User.authenticate(request.payload, function(err, user) {
      if (err) { return reply.redirect('/'); }
      request.auth.session.set(user);
      reply.redirect('/home');
    });
  }
};