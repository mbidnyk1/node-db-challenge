const express = require('express')
const server = express()
const helmet = require('helmet')
const morgan = require('morgan')

const projectRouter = require('../projects/project-router')
const resourceRouter = require('../resources/resource-router')

server.use(helmet(),morgan('short'),express.json())

server.use('/api/projects',projectRouter)
server.use('/api/resources', resourceRouter)

server.get('/',(req, res) => {
    res.json({ message: 'We have liftoff!'})
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'Error processing the request.'})
})

module.exports = server;