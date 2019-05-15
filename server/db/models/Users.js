'use strict';

let User = require('./User');

let state = {
    db: undefined
}

async function _create(params) {
    return User(state.db, params);
}

async function _delete(user) {
    return state.db.table('Users')
        .where('id', user.id)
        .del();
}

async function _count() {
    return new Promise (async (resolve, reject) => {
        let data = await state.db.table('Users').count();
        resolve(data[0]['count(*)']);
    })
}

async function _database(db) {
    state.db = db;

    return new Promise((resolve, reject) => {
        db.schema.hasTable('Users').then(function (exists) {
            if (!exists) {
                db.schema.createTable('Users', function (t) {
                    t.increments('id').primary();
                    t.string('firstName', 100);
                    t.string('lastName', 100);
                    t.string('email');
                    t.string('password', 20);
                    t.json('inprogress');
                }).asCallback(err => {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    });
}

async function _get(id) {
    return newPromise(async (resolve, reject) => {
        let data;
        let users = [];
        let user;

        if (!id) {
            data = await state.db.table('Users').select('*');
            data.forEach(async (item, index) => {
                user = await _create(item);
                users.push(user);
                if (index === data.length - 1) {
                    resolve(users);
                }
            });
        } else {
            data = await state.db.table('Users').where('id', id);
            resolve(_create(data[0]));
        }
    });
}

let Users = {
    database(value) {
        return _database(value);
    },
    get count() {
        return_count();
    },
    create(params) {
        return _create(params);
    },
    get(id) {
        return _get(id);
    },
    delete(author) {
        return _delete(author);
    }
}

module.exports = Users;