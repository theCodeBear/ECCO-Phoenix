'use strict';

var Event = require('../../models/event');

module.exports = {
  handler: function(request,reply) {
    // console.log("show request: ", request.params);
    Event.findById(request.params.eventId, function(err, event) {
      if (err) { console.error(err); }
      reply(event);
    });
  }
};