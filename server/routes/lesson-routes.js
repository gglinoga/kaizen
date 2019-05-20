// // // const model = require('../db/models/')
// const knex = require('../db/database');
// const app = require('express').Router();

// app.get('/api/lessons', (req, res) => {
//     //find all query
//     console.log('get all lessons')
//     knex.select().from('lessons')
//         .then(function (response, err) {
//             if (err) throw err;
//             console.log(response);
//             res.json(response)
//         }).finally(() => {
//             console.log('done');
//             // knex.destroy();
//         })
// })
// //one lesson
// app.get('/api/lessons/:lessons', (req, res) => {
//     knex.select().from('lessons').where('lessons_name', req.params.lesson)
//         .then(function (response, err) {
//             if (err) throw err;
//             console.log(response);
//             res.json(response)
//         }).finally(() => {
//             console.log('done');
//             // knex.destroy();
//         });
// })

// module.exports = app;
// // module.exports = (app) => {

//     //find all
//     app.get('/api/lessons', (req, res) => {
//         //find all query
//         console.log('get all lessons')
//         knex.select().from('lessons')
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//             }).finally(() => {
//                 console.log('done');
//                 knex.destroy();
//             })
//     })
//     //join course on lesson where id match
//     app.get('/api/lessons/joinCourse', (req, res) =>{
//         knex.select('*').from('courses').join('lessons', {
//             'courses.id': "lessons.course_id"
//         })
//         .then(function (response, err) {
//             if (err) throw err;
//             console.log(response);
//         }).finally(() => {
//             console.log("done");
//             knex.destroy();
//         })
//     })

//     app.get('/api/lessons/:lessons', (req, res) => {
//         knex.select().from('lessons').where('lessons_name', req.params.lesson)
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//             }).finally(() => {
//                 console.log('done');
//                 knex.destroy();
//             });
//     })



// }