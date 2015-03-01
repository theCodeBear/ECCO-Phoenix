'use strict';

var Event = require('../../models/event');
var Joi = require('joi');

module.exports = {
  validate: {
    payload: {
      name:               Joi.string().required(),
      startDate:          Joi.date().required(),
      endDate:            Joi.date().required(),
      picture:            Joi.string().required(),
      backgroundPicture:  Joi.string().allow(''),
      twitterHandle:      Joi.string().required(),
      twitterHash:        Joi.string().required(),
      description:        Joi.string().required(),
      location:           Joi.string().required()
    }
  },
  handler: function(request,reply) {
    var event = new Event(request.payload);
    event.creator = request.auth.credentials._id;
    event.attendees.push(event.creator);
    console.log(request.payload);
    event.save(function(err, event) {
      console.log('event saved!');
      reply.redirect("/home#/event/"+event._id);
    })
  }
};
