var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },

}, {timestamps: true});

const users = new mongoose.model("users",UserSchema);

module.exports = users;