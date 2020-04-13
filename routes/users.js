const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json({ users: users })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then((user) => {
      res.json({ user: user })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', async (req, res) => {
  try {
    const id = await db.addUser(req.body)
    res.json({ id: id[0], ...req.body })
  } catch (err) {
    console.log(err)
    res.send('Error in adding user')
  }
})

router.put('/', (req, res) => {
  db.updateUser(req.body)
    .then(user => res.json(user))
})

module.exports = router
