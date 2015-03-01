'use strict';

var User = require('../../models/user');
var Event = require('../../models/event');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Event.findById(request.params.eventId, function(err, event) {
      User.findById(request.auth.credentials._id, function(otherError, user) {
        var exist = _.findIndex(event.attendees, function(attendee) {
          return attendee._id === user._id;
        });
        console.log('\n******\nExists...\n******\n', exist);
        if (exist) {
          reply.redirect('/event/' + event._id)
        } else {
          var newEvent = event;
          newEvent.attendees.push(user._id);
          var newUser = user;
          newUser.events.push(event._id);
          event.save();
          user.save(function(err) {
            reply.redirect('/event/' + event._id);
          });
        }
      });
    });
  }
}
