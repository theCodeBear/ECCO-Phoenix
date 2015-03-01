'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request,reply) {
    User.findOne({_id: request.params.userId}, function(err, user) {
      user.update(request.payload, function(err) {
        if (err) { console.error(err); }
        reply.redirect('/home');
      });
    });
  }
};