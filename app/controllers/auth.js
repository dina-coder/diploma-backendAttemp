const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/app');

const User = mongoose.model('User');

const signIn = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .exec()
        .then((users) => {
            if (!users) {
                res.status(401).json({message: "no such user"});
            }

            const isValid = password==users.password;
            if (isValid) {
                res.json(users);
            }
            else {
                res.status(401).json({message: 'Invalid credentials!'});
            }
        })
        .catch(err => res.status(500).json({message: err.message}))
};

module.exports ={
    signIn
};