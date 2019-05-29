const knex = require('./db/database');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const bcrypt = require('bcrypt');
const _ = require("lodash");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const morgan = require('morgan');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('Bearer');
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions,
    function(jwt_payload, next){
        console.log('payload received', jwt_payload);
        //this is the database call
        var user = users[_.findIndex(users, {id: jwt_payload.id})];
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    });

    passport.use(strategy);

    app.use(passport.initialize());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

//log requests to console
app.use(morgan('dev'));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
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

app.post('/users/login', function (req, res){
    // console.log("testroute");
    if(req.body.email && req.body.password){
        var name = req.body.email;
        var password = req.body.password
    }
    knex('users').select().where({ email: name })
    .then(function (response, err) {
        if (err) throw err;
        var user = response[0].email;
        var hash = response[0].password;
        if (!user) {
            console.log("User Not Found")
        }
        else if (user && !err) {
            bcrypt.compare(password, hash, function(err, res) {
                if(res) {
                  console.log('Passwords match')
                  generateToken();
                } else {
                 console.log('passwords dont match');
                } 
              });
        };
        function generateToken() {
            var payload = {id: user.id};
            var token = jwt.sign(payload, jwtOptions.secretOrKey, {
                expiresIn: 10000
            });
            res.json({message: "ok", token: "JWT " + token});
            console.log('generate token ' + "JWT " + token);
        } 
    });
});

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

app.get("/dashboard", passport.authenticate('jwt', { session: false }), function(req, res){
    res.send("it worked! user id is " + req.user.id + '.');
})

app.listen(PORT, () => {
    console.log("app listening on PORT " + PORT);
});
