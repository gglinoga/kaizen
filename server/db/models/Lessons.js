'use strict'

let Lesson = require('./Lesson');

let state = {
    db: undefined
}

async function _create(params) {
    return Lesson(state.db, params);
}

async function _delete(lesson) {
    return state.db.table('Lessons')
        .where('id', lesson.id)
        .del();
}

async function _count() {
    return new Promise(async (resolve, reject) => {
        let data = await state.db.table('Lessons').count()
        resolve(data[0]['count()']);
    })
}

async function _get(id) {
    return new Promise(async (resolve, reject) => {
        let data;
        let courses = [];
        let course;

        if (!id) {
            data = await state.db.table('Lessons').select('*');
            data.forEach(async (item, index) => {
                course = await _create(item);
                courses.push(course);
                if (index === data.length - 1) {
                    resolve(courses);
                }
            });
        } else {
            data = await state.db.table('Lessons').where('id', id);
            resolve(_create(data[0]));
        }
    });
}

let Courses = {
    database(value) {
        return _database(value);
    },
    get count() {
        return _count();
    },
    create(params) {
        return _create(params);
    },
    get(id) {
        return _get(id);
    },
    delete(post) {
        return _delete(lesson);
    }
}

module.exports = Lessons;