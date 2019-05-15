// let Courses = require('./Courses');
// let Course = require('./Course');

// function User(db, author) {
//     if (!new.target) {
//         return new User(db, user);
//     }

//     this.db = db;
//     this.user = user;
//     //new user

//     return new Promise(async (resolve, reject) => {
//         try {


//             if (!user.id) {
//                 let id = await this._insert(author);

//                 this.user.id = id[0];
//             }
//             resolve(this);
//         } catch (err) {
//             reject(err);
//         }
//     });
// }

// User.prototype._insert = function(author) {
//     return this.db.table('Users').insert(author);
// }

// User.prototype.save = async function () {
//     return this.db.table('Users')
//     .where('id', '=', this.id)
//     .update({
//         name: this.name,
//         email: this.email
//     });
// }

// User.prototype.courses = function() {
//     return.db
    

// module.exports = User
