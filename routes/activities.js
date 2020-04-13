const express = require('express')

const db = require('../db')

const router = express.Router()

// GET /activities/:userId
router.get('/:userId', (req, res) => {
  const id = req.params.userId
  db.getActivities(id)
    .then(activities => res.json(activities))
})

// POST /activities
router.post('/', (req, res) => {
  db.addActivity(req.body)
    .then(activities => res.json(activities))
})

// PUT /activities/:activityId
router.put('/:activityId', (req, res) => {
  const id = req.params.activityId
  db.updateActivity(id, req.body)
    .then(activity => res.json(activity))
})

// DELETE /activities/:activityId
router.delete('/:activityId', (req, res) => {
  const id = req.params.activityId
  db.deleteActivity(id)
    .then(() => res.send(`Activity id ${id} has been successfully deleted!`))
})

module.exports = router
