const express = require('express')

const db = require('../db')

const router = express.Router()

// GET /activities/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getActivities(id)
    .then(activities => res.json(activities))
})

// POST /activities
router.post('/', (req, res) => {
  db.addActivity(req.body)
    .then(activities => res.json(activities))
})

module.exports = router
