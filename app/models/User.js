const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  username: { type: String, maxlength: 255 },
  password: { type: String, maxlength: 255 },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
