const express = require('express')

const Offices = require('./offices/offices-model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})



module.exports = server;