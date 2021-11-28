const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const Courses = mongoose.model('Course');

const updateCourse = (req, res) => {
    Courses.findOneAndUpdate({_id: ObjectId(req.body.course._id)}, { $set: req.body.course}, {new: true})
        .exec()
        .then(course =>{
             res.json(course)})
        .catch(err => res.status(500).json(err));
};

const getAllCourses = (req, res) => {
    Courses.find()
        .exec()
        .then(course => {
            res.json(course)
        })
        .catch(err => res.status(500).json(err));
    };
const postCourse = (req, res) => {
    Courses.create({
        student_id: [],
        teacher_id: req.body.id,
        author: req.body.author,
        name: req.body.name,
        children: []
    })
    .then(() => {
        res.json("SUCCESS")
    })
    .catch(err => res.status(500).json(err))
}

const deleteCourse = (req, res) => {
    Courses.deleteOne({_id: req.body.id})
    .then(() => {
        res.json("SUCCESS")
    })
    .catch(err => res.status(500).json(err))
}
module.exports = {
    updateCourse,
    getAllCourses,
    postCourse,
    deleteCourse
};
