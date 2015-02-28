var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  createdAt: {type: Date, default: Date.now, required: true},
  name: {type: String, required: true},
  picture: {type: String, required: true},
  description: {type: String, required: true},
  location: {type: String, required: true},
  geoLocation: {type: String, required: true},
  eventDate: {type: Date, required: true},
  twitterHandler: {type: String},
  twitterHash: {type: String},
  attendees: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Event', eventSchema);
