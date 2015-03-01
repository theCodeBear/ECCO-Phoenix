var mongoose = require('mongoose');
var User;

var userSchema = mongoose.Schema({
  faceBookID  :     { type: String, required: true },
  name        :     { type: String, required: true },
  picture     :     { type: String, required: true },
  friendsList :     [String],
  skills      :     [String],
  description :     String,
  jobTitle    :     String,
  createdAt   :     { type: Date, default: Date.now, required: true },
  events      :     [{ type: mongoose.Schema.ObjectId, ref: 'Event'}],
  matches     :     [{ type: mongoose.Schema.ObjectId, ref: 'User'}, {type: mongoose.Schema.ObjectId, ref: 'Event'} ],
  chats       :     [{ type: mongoose.Schema.ObjectId, ref: 'User'}, [String] ]
});

userSchema.methods.register = function(cb) {
  var self = this;
  User.findOne({faceBookID: self.email}, function(err, user) {
    if (user) { return cb(true); }
    self.save(cb);
  });
};

userSchema.statics.authenticate = function(user, cb) {
  console.log('user in user.js: ', user);
  User.findOne({faceBookID: user.faceBookID}, function(err, dbUser) {
    if (!dbUser) { return cb(true); }
    cb(null, dbUser);
  });
};


var User = mongoose.model('User', userSchema);
module.exports = User;