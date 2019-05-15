let Lessons = require('./Lessons');
let Lesson = require('./Lesson');

function Course(db, course) {
    if (!new.target) {
        return new Lesson(db, course);
    }
    this.db = db;
    this.course = course;
}
//new course

return new Promise(async (resolve, reject) => {
    try {
        if (!course.id) {
            let id = await this._insert(course);

            this.course.id = id[0];
        }
        resolve(this);
    } catch (err) {
        reject(err);
    }
});

Course.prototype._insert = function (course) {
    return this.db.table('Courses').insert(course)
}

Course.prototype.save = async function () {
    return this.db.table('Courses')
        .where('id', '=', this.id)
        .update({
            courseName: this.courseName,
            lesson_id: this.lesson_id
        });
}

module.exports = Course;