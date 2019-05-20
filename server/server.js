const knex = require('./db/database');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
// app.use('/api', require('./routes/routes'));

// require('./routes/course-routes');
// require('./routes/lesson-routes');

app.listen(PORT, () => {
    console.log("app listening on PORT " + PORT);
});


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

app.get('/api/lessons/:lesson_num', (req, res) => {
    knex.select().from('lessons').where('lessonNum', req.params.lesson_num)
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log('done');
            // knex.destroy();
        });
})

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

app.get('/api/courses/:course', (req, res) => {
    knex.select().from('courses').where('courseName', req.params.course)
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log('done');
            // knex.destroy();
        });
})

app.get('/api/coursesJoinLesson/:id', (req, res) => {
    console.log('join courses on lesson');
    knex.select('*').from('courses').join('lessons', {
            'courses.id': "lessons.courseID"
        })
        .where('courses.id', req.params.id)
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
        }).finally(() => {
            console.log("done");
            // knex.destroy();
        });
})