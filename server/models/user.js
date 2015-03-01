var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User;

// var userSchema = mongoose.Schema({
//   faceBookID  :     { type: String, required: true },
//   name        :     { type: String, required: true },
//   picture     :     { type: String, required: true },
//   friendsList :     [String],
//   skills      :     [String],
//   description :     String,
//   jobTitle    :     String,
//   createdAt   :     { type: Date, default: Date.now, required: true },
//   events      :     [{ type: mongoose.Schema.ObjectId, ref: 'Event'}],
//   matches     :     [{ type: mongoose.Schema.ObjectId, ref: 'User'}, {type: mongoose.Schema.ObjectId, ref: 'Event'} ],
//   chats       :     [{ type: mongoose.Schema.ObjectId, ref: 'User'}, [String] ]
// });

var userSchema = mongoose.Schema({
  email       :     { type: String, required: true },
  password    :     { type: String, required: true },
  name        :     { type: String, required: true },
  picture     :     { type: String, required: true },
  skills      :     { type: [String], required: true },
  description :     { type: String, required: true },
  jobTitle    :     { type: String, required: true },
  createdAt   :     { type: Date, default: Date.now, required: true },
  events      :     [{ type: mongoose.Schema.ObjectId, ref: 'Event'}],
  matches     :     [{ type: mongoose.Schema.ObjectId, ref: 'User'}, {type: mongoose.Schema.ObjectId, ref: 'Event'} ],
  chats       :     [{ type: mongoose.Schema.ObjectId, ref: 'User'}, [String] ]
});

userSchema.methods.register = function(cb) {
  var self = this;
  User.findOne({email: self.email}, function(err, user) {
    if (user) { return cb(true); }
    self.password = bcrypt.hashSync(self.password, 8);
    self.save(cb);
  });
};

userSchema.statics.authenticate = function(user, cb) {
  console.log('user in user.js: ', user);
  User.findOne({email: user.email}, function(err, dbUser) {
    if (!dbUser) { return cb(true); }

    var isGood = bcrypt.compareSync(user.password, dbUser.password);
    if (!isGood) { return cb(true); }

    cb(null, dbUser);
  });
};


var User = mongoose.model('User', userSchema);
module.exports = User;