'use strict';

var User = require('../../models/user');

module.exports = {
  auth: false,
  handler: function(request,reply) {
    console.log(request.payload);
    var tempUser = {
      faceBookID: request.payload.id,
      name: request.payload.first_name + " " + request.payload.last_name,
      picture: 'graph.facebook.com/' + request.payload.id + '/picture?type=large'
      // friendsList: request.payload.friends_list
    };
    console.log(tempUser);
    var user = new User(tempUser);
    user.register(function(err) {
      console.log('user: ', user);
      if (err) {
        User.authenticate(user, function(err, theUser) {
          if (err) { return reply('/'); }
          request.auth.session.set(theUser);
          reply('/home');
        });
      } else {
        // request.auth.session.set(user);
        reply('/account');
      }
    });
  }
};