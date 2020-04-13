const express = require('express')

const db = require('../db')

const router = express.Router()

// GET /activities
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getActivities(id)
    .then(activities => res.json(activities))
})

module.exports = router
