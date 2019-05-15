// // const model = require('../db/models/')
// const knex = require('../db/database');

// module.exports = (app) => {

//     //find all
//     app.get('/api/courses', (req, res) => {
//         //find all query
//         console('get all courses');
//         knex.select().from('courses')
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//             }).finally(() => {
//                 console.log('done');
//                 knex.destroy();
//             })
//     })

//     app.get('/api/courses/:course', (req, res) => {
//         knex.select().from('courses').where('course_name', req.params.course)
//             .then(function (response, err) {
//                 if (err) throw err;
//                 console.log(response);
//             }).finally(() => {
//                 console.log('done');
//                 knex.destroy();
//             });
//     })

    
// }