const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,
    email: String,
    password: String,
    progress: Array
});

mongoose.model('User', UserSchema);