const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const knex = require('../db/database.js');
const bcrypt = require('bcrypt');

module.exports = function(passport) {
    console.log("usepassport");
    passport.use(

        new LocalStrategy(
            {usernameField: 'email',
            passwordField: 'password'},
            function(email, password, done) {
                console.log("beforeknex");

            knex.from('users')
                .select()
                .where({ email: email })
                .then(response, err => {
                    console.log("afterthen");
                    if (err) throw err;
                    if (!response) {
                        return done(null, false, { message: "That email is not registered"});
                    }
                    //Match password
                    bcrypt.compare(password, password, (err, isMatch) => {
                        if (err) throw err
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: "Password incorrect"})
                        }
                    });
                })
                .catch(err => console.log(err))
        })
    );

//serializing user and deserializing
passport.serializeUser((users, done) => {
    console.log('serialize')
    done(null, users.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id, function(err, users){
        console.log('deserialize')
        done(err, users);
    });
});


}

