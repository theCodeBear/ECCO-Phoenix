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
    console.log(request.payload);

    User.findOne({email: request.payload.email}, function(err, user) {
      // if account is already created
      if (user) {
        reply.redirect('/');  // send back to login
        // User.authenticate(request.payload, function(err, user) {
        //   if (err) { return reply.redirect('/'); }
        //   request.auth.session.set(user);
        //   reply.redirect('/home');
        // });
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

    // var tempUser = {
    //   faceBookID: request.payload.id,
    //   name: request.payload.first_name + " " + request.payload.last_name,
    //   picture: 'graph.facebook.com/' + request.payload.id + '/picture?type=large'
    //   // friendsList: request.payload.friends_list
    // };
    // console.log(tempUser);
    // User.findOne({faceBookID: tempUser.faceBookID}, function(err, user) {
    //   // if user already in database, authenticate
    //   if (user) {
    //     User.authenticate(tempUser, function(err, theUser) {
    //       if (err) { return reply.redirect('/'); }
    //       request.auth.session.set(theUser);
    //       reply.redirect('/home');
    //     });
    //   } else {  // if user not in database, create
    //     var theUser = new User(tempUser);
    //     theUser.register(function(err) {
    //       if (err) {
    //         console.error(err);
    //       } else {
    //         request.auth.session.set(user);
    //         reply.redirect('/account');
    //       }
    //     });
    //   }
    // });
//   }
// };