'use strict';

var User = require('../../models/user');
var Event = require('../../models/event');

module.exports = {
  handler: function(request, reply) {
    console.log('Params \n\n\n', request.params.eventId);
    console.log('Credentials \n\n\n', request.auth.credentials);
    Event.findById(request.params.eventId, function(err, event) {
      User.findById(request.auth.credentials._id, function(otherError, user) {
        var newEvent = event;
        newEvent.attendees.push(user._id);
        var newUser = user;
        newUser.events.push(event._id);
        event.save();
        user.save(function(err) {
          reply.redirect('/event/' + event._id);
        });
      });
    });
  }
}
