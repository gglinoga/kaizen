const knex = require('./db/database');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const bcrypt = require('bcrypt');


var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

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

app.get('/users/login', (req, res) => {
    knex.select().from('users').where({
        email: req.body.email,
        password: req.body.password
    })
        .then(function (response, err) {
            if (err) throw err;
            console.log(response);
            res.json(response)
            if (!response) {
                console.log("no record")
            }
            else {
                console.log(response)
            }
            res.json(response)
        }).finally(() => {
            console.log('done');
        })
}
)

app.post('/users/register', (req, res) => {

    bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err;   
            
            console.log(req)
            console.log("register")
            knex('users').insert({
        
                email: req.body.email,
                password: hash
        
            }).then((response, err) => {
                if (err) throw err;
                console.log(response);
                res.json(req.body);
            })
        })
    )}
)
    
app.post('/users/currentCourse', (req, res) => {
    knex('users').where({ id: 1 }).update({ currentCourse: req.body.currentCourse})
    .then((response, err) => {
        if (err) throw err;
    })
})

app.get('/users/currentCourse', (req, res) => {
    knex.select().from('users').where({ id: 1 })
    .then((response, err) => {
        if (err) throw err;
        res.json(response);
    })
})

app.post('/api/lesson', (req, res) => {
    knex.select('*').from('courses').join('lessons', {
        'courses.id': "lessons.courseID"
    })
    .where('courses.id', req.body.id)
    .then(function (response, err) {
        if (err) throw err;
        console.log(response);
        res.json(response)
    }).finally(() => {
        console.log("done");
        // knex.destroy();
    });
})

// app.post('/users/login', (req, res) => {
//     console.log(req.body);
//     console.log('login');
// }).then((response, err) => {
//     if (err) throw err;
//     console.log(response);
//     res.json(response)
// })