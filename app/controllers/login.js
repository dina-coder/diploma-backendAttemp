const mongoose = require('mongoose');

const User = mongoose.model('User');

const getUser = (req, res) => {
    User.find()
        .exec()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getUser
};