// const knex = require('../db/database');
// const app = require('express').Router();

// let router = {
// allLessons : () => {
//     console.log('all lessons');
//     app.get('/api/lessons', (req, res) => {
//         //find all query
//         console.log('get all lessons')
//         knex.select().from('lessons')
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//                 res.json(response)
//             }).finally(() => {
//                 console.log('done');
//                 // knex.destroy();
//             })
//     })
// },

// firstLesson : () => {
//     app.get('/api/lessons/:lesson_num', (req, res) => {
//         knex.select().from('lessons').where('lesson_num', req.params.lesson_num)
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//                 res.json(response)
//             }).finally(() => {
//                 console.log('done');
//                 // knex.destroy();
//             });
//     })
// },

// allCourses : () => {
//     app.get('/api/courses', (req, res) => {
//         //find all query
//         console.log('get all courses');
//         knex.select().from('courses')
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//                 res.json(response)
//             }).finally(() => {
//                 console.log('done');
//                 // knex.destroy();
//             })
//     })
// },

// oneCourse : () => {
//     app.get('/api/courses/:course', (req, res) => {
//         knex.select().from('courses').where('course_name', req.params.course)
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//                 res.json(response)
//             }).finally(() => {
//                 console.log('done');
//                 // knex.destroy();
//             });
//     })
// },

// oneCourseAllLessons : () => {
//     app.get('/api/coursesJoinLesson/:id', (req, res) => {
//         console.log('join courses on lesson');
//         knex.select('*').from('courses').join('lessons', {
//                 'courses.id': "lessons.course_id"
//             })
//             .where('courses.id', req.params.id)
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//                 res.json(response)
//             }).finally(() => {
//                 console.log("done");
//                 // knex.destroy();
//             });
//     })
// }
// }

// module.exports = router;