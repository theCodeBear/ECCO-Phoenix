'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  validate: {
    payload: {
      name: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().min(3),
      jobTitle: Joi.string().required(),
      skills: Joi.string().required(),
      description: Joi.string().required(),
      picture: Joi.string().required()
    }
  },
  auth: false,
  handler: function(request,reply) {
    User.findOne({email: request.payload.email}, function(err, user) {
      // if account is already created
      if (user) {
        reply.redirect('/');  // send back to login
      } else {  // signing up for first time
        var newUser = new User(request.payload);
        newUser.register(function(err, dbUser) {
          if (err) { return reply.redirect('/'); }
          request.auth.session.set(dbUser);
          reply.redirect('/home');
        });
      }
    });
  }
};
