const LocalStrategy = require('passport-local').Strategy;
const knex = require('../db/database.js');
const bcrypt = require('bcrypt');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {

            knex.from('users')
                .select()
                .where({ email: email })
                .then(response, err => {
                    if (err) throw err;
                    if (!response) {
                        return done(null, false, { message: "That email is not registered"});
                    }

                    //Match password
                    // bcrypt.compare();
                })
                .catch(err => console.log(err))
        })
    );
}

