const knex = require('./db/database');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();


// require('./routes/course-routes');
// require('./routes/lesson-routes');

app.listen(PORT, () => {
    console.log("app listening on PORT " + PORT);

});
//all lessons
app.get('/api/lessons', (req, res) => {
    //find all query
    console.log('get all lessons')
    knex.select().from('lessons')
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log('done');
            // knex.destroy();
        })
})
//one lesson
app.get('/api/lessons/:lessons', (req, res) => {
    knex.select().from('lessons').where('lessons_name', req.params.lesson)
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log('done');
            // knex.destroy();
        });
})
//all courses
app.get('/api/courses', (req, res) => {
    //find all query
    console.log('get all courses');
    knex.select().from('courses')
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log('done');
            // knex.destroy();
        })
})

//one course
app.get('/api/courses/:course', (req, res) => {
    knex.select().from('courses').where('course_name', req.params.course)
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log('done');
            // knex.destroy();
        });
})

//join courses on lessons where id match
app.get('/api/coursesJoinLesson/', (req, res) => {
    console.log('join courses on lesson');
    knex.select('*').from('courses').join('lessons', {
            'courses.id': "lessons.course_id"
        })
        // .where('courses.course_name', req.params.name)
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log("done");
            // knex.destroy();
        });
})