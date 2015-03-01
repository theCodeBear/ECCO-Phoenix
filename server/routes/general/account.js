'use strict';

module.exports = {
  auth: false,
  handler: function(request, reply) {
    console.log(request.auth);
    reply.view('templates/general/account');
  }
};