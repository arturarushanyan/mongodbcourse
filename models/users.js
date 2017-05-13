const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,

},{
    versionKey: false,
    strict: false
});

let User = mongoose.model('Users', userSchema);

module.exports = User;