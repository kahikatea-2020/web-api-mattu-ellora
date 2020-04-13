const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  getActivities,
  addActivity,
  updateActivity
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

function getActivities (id, db = connection) {
  return db('activities')
    .join('users', 'users.id', 'activities.user_id')
    .where('users.id', id)
    .select('users.id as userId', 'activities.id as activityId', 'users.name as userName', 'activities.name as activityName', 'activities.frequency', 'activities.level')
}

function addActivity (data, db = connection) {
  const { userId, ...rest } = data
  return db('activities')
    .insert({ user_id: userId, ...rest })
    .then(() => getActivities(userId))
}

function updateActivity (id, data, db = connection) {
  return db('activities')
    .where('id', id)
    .update(data)
    .then(() => {
      return db('activities')
        .where('id', id)
        .select()
        .first()
    })
}
