// 'use strict'

// let Course = require('./Course');

// let state = {
//     db: undefined
// }

// async function _database(db) {
//     state.db = db;


//     return new Promise((resolve, reject) => {
//         db.schema.hasTable('Courses').then(function (exists) {
//             if (!exists) {
//                 state.db.schema.createTable('Courses', function (t) {
//                     t.increments('id').primary();
//                     t.string('courseName', 100);
//                 }).asCallback((err, wtv) => {
//                     resolve();
//                 });
//             } else {
//                 resolve();
//             }
//         });
//     });
// }




// async function _create(params) {
//     return Course(state.db, params);
// }

// async function _delete(course) {
//     return state.db.table('Courses')
//         .where('id', post.id)
//         .del();
// }

// async function _count() {
//     return new Promise(async (resolve, reject) => {
//         let data = await state.db.table('Courses').count();

//         resolve(data[0]['count(*)']);
//     })
// }

// async function _get(id) {
//     return new Promise(async (resolve, reject) > {
//         let data;
//         let users = [];
//         let user;

//         if (!id) {
//             data = await state.db.table('Courses').select('*');
//             data.forEach(async (item, index) => {
//                 user = await _create(item);
//                 users.push(user);
//                 if (index === data.length - 1) {
//                     resolve(users);
//                 }
//             });
//         } else {
//             data = await state.db.table('Users').where('id', id);
//         }
//     });
// }

// let Courses = {
//         database(value) {
//         return _database(value);
//     },
//     get count() {
//         return _count();
//     },
//     create(params) {
//         return _create(params);
//     },
//     get(id) {
//         return _get(id);
//     },
//     delete(course) {
//         return _delete(course);
//     }
// }
//     module.exports = Courses;