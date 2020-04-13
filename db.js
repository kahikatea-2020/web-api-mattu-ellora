const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser (data, db = connection) {
  return db('users').insert(data)
}

function updateUser (data, db = connection) {
  return db('users')
    .where('id', data.id)
    .update({ name: data.name, email: data.email })
    .then(() => db('users').where('id', data.id).select().first())
}
