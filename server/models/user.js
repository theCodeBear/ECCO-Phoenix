var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  faceBookID  :     { type: String, required: true },
  name        :     { type: String, required: true },
  picture     :     { type: String, required: true },
  friendsList :     { type: [String], required: true },
  fbLikes     :     { type: [String], required: true },
  skills      :     [String],
  description :     String,
  jobTitle    :     String,
  createdAt   :     { type: Date, default: Date.now, required: true },
  events      :     [{ type: mongoose.Schema.ObjectId, ref: 'Event'}],
  matches     :     [{ {type: mongoose.Schema.ObjectId, ref: 'User'}, {type: mongoose.Schema.ObjectId, ref: 'Event'} }],
  chats       :     [{ {type: mongoose.Schema.ObjectId, ref: 'User'}, [String] }]
});

module.exports = mongoose.model('User', userSchema);