let Course = require('./Course');

function Lesson(db, lesson) {
    if(!new.target) {
        return new Lesson(db, lesson);
    }

    this.db = db;
    this.lesson = lesson;

    return new Promise(async (resolve, reject) => {
        try {
            if (lesson.id) {
                let id = await this._insert(lesson);
                this.lesson.id = id[0];
            }
            resolve(this);
        } catch (err) {
            reject (err);
        }
    });
}

Lesson.prototype._insert = function(lesson) {
    return this.db.table('Lessons').insert(lesson);
}

// Lesson.prototype.save = async function () {
//     return this._insert.db.table('Lessons')
//     .where('id', '=', this.id)
//     .update({

//     })
// }


module.exports = Lesson;
