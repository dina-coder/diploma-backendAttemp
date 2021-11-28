const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    id: String,
    teacher_id: String,
    student_id: Array,
    author: String,
    name: String,
    children: Array
});

mongoose.model('Course', CourseSchema);
