'use strict';

var Event = require('../../models/event');

module.exports = {
  handler: function(request,reply) {
    Event.findById(request.params.eventId).populate('attendees').exec(function(err, event) {
      console.log(event);
      if (err) {
        console.error(err);
      } else {
        reply({event: event, user: request.auth.credentials});
      }
    });
  }
};
