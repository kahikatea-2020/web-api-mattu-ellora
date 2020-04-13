const express = require('express')

const server = express()

// Middleware
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// Routes
server.use('/users', require('./routes/users'))
server.use('/activities', require('./routes/activities'))

module.exports = server
