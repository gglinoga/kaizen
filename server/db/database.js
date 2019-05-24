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

dropTables = () => {
    knex.schema.hasTable('lessons').then(
        knex.schema.dropTable('lessons').then(() => {
            console.log('dropped lessons');
        }));
    knex.schema.hasTable('courses').then(
        knex.schema.dropTable('courses').then(() => {
            console.log('dropped courses');
        }));
    knex.schema.hasTable('users').then(
        knex.schema.dropTable('users').then(() => {
            console.log('dropped users');
        }));
}

createCourses = () => {
    knex.schema.createTable('courses', table => {
        table.increments('id').primary().notNullable();
        table.string('courseName').notNullable();
        table.unique('courseName');
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
        createUsers();
    }).finally()
}

createUsers = () => {
    knex.schema.createTable('users', table => {
        table.increments();
        // table.string('userName');
        // table.unique('userName')
        table.string('email');
        table.unique('email');
        table.string('password');
        table.json('currentLessons');
        table.string('currentCourse');
    }).then((response, err) => {
        if (err) throw err;
    }).finally()
}
let start = (err) => {
    dropTables();
    if (err) {
        console.log(err)
    } else {
        ;
        createCourses();
    }
}

// start();

module.exports = knex;