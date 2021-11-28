const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const User = mongoose.model('User');

const setProgress = (req, res) => {
    User.findOneAndUpdate({ _id: ObjectId(req.body._id) }, { $set: { progress: req.body.progress } }, { new: true })
        .exec()
        .then(course => {
            res.json(course)
        })
        .catch(err => res.status(500).json(err));
};
const getProgress = (req, res) => {
    User.findOne({ _id: ObjectId(req.params.id) })
        .exec()
        .then(course => {
            res.json(course.progress)
        })
        .catch(err => res.status(500).json(err));
};

module.exports = {
    setProgress,
    getProgress
};