'use strict';

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    if (!request.auth.isAuthenticated) {
      reply.redirect('/');
    } else {
      reply.view('templates/general/home', { id: request.auth.credentials._id });
    }
  }
};