const options = {
    client: "mysql2",
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'asdfasdf',
        database: 'kaizen_db'
    }
};

const knex = require('knex')(options);

console.log('knex connected');

module.exports = knex;



// knex.select('*').from('courses').join('lessons', {
//         'courses.id': "lessons.course_id"
//     })
//     .then(function (response, err) {
//         if (err) throw err;
//         console.log(response);
//     }).finally(() => {
//         console.log("done");
//         // knex.destroy();
//     })


