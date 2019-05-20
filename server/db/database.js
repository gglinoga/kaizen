const options = {
    client: "mysql2",
    connection: {
        host: 'localhost',
        user: 'user',
        password: 'password',
        database: 'kaizen_db'
    }
};

const knex = require('knex')(options);

console.log('knex connected');

createCourses = () => {
    knex.schema.dropTable('lessons').then();
    knex.schema.dropTable('courses').then();

    knex.schema.createTable('courses', table => {
        table.increments('id').primary().notNullable();
        table.string('courseName').notNullable();
        table.text('coursePic');
    }).then((response, err) => {
        if (err) throw err;
        createLessons();
    }).finally()
        // console.log('made courses table'));
}

createLessons = () => {
    knex.schema.createTable('lessons', table => {
        table.increments();
        table.string('lessonMaterial').notNullable();
        table.text('textContent').notNullable();
        table.integer('courseID').unsigned();
        table.foreign('courseID').references('courses.id').onDelete('cascade');
        table.text('lessonPic');
        table.json('quiz');
        table.integer('lessonNum').notNullable();
        table.text('lessonDescription').notNullable();
    }).then((response, err) => {
        if (err) throw err;
        // console.log(response);
    }).finally()
        // console.log('made lessons table'));
}

// createCourses();

// knex.schema.createTable('test', table => {
//     console.log('make table');
//     table.increments('id')
//     table.string('name');
// }).then(function (response, err) {
//     if (err) throw err;
//     console.log(response);
// }).finally(() => {
//     console.log('made table');
// })

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