'use strict';

module.exports = {
  auth: false,
  handler: function(request, reply) {
    if (request.auth.isAuthenticated) {
      reply.redirect('/home');
    } else {
      reply.view('templates/user/new');
    }
  }
};