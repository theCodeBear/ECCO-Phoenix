'use strict';

var Event = require('../../models/event');

module.exports = {
  handler: function(request,reply) {
    Event.find({}, function(err, events) {
      if (err) { return console.error(err); };
      console.log(events);
    });
  }
};