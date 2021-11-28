const users = require('../app/controllers/login');
const auth = require('../app/controllers/auth');
const progress = require('../app/controllers/progress');

// const authMiddleware =require('../app/middleware/auth');
const courses = require('../app/controllers/course');

module.exports = (app) => {
    app.get('/allcourses', courses.getAllCourses);
    app.post('/addCourse', courses.postCourse);
    app.get('/users', users.getUser);
    app.post('/signin', auth.signIn);
    app.put(`/course`, courses.updateCourse);
    app.delete('/deletecourse', courses.deleteCourse);
    app.post('/setprogress', progress.setProgress);
    app.get('/getprogress/:id', progress.getProgress);
};