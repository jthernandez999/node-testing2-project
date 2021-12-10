const express = require('express')

const Office = require('./offices/offices-model.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})

server.get('/offices', (req, res) => {
    Office.getAll()
        .then(office => {
            res.status(200).json(office)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

server.get('/offices/:id', async(req, res) => {
    res.json(await Office.getById(req.params.id))
})

server.post('/offices', async(req, res) => {
    res.status(201).json(await Office.insert(req.body))
})

server.delete('/offices/:id', (req, res) => {
    res.end()
})

server.put('/offices/:id', (req, res) => {
    res.end()
})




module.exports = server;