const express = require('express')
const server = express()
const { frontendServerPort } = require('./config.json')

server.use(express.static('dist'))

server.get('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
})

server.listen(frontendServerPort, () => {
    console.log(`Front-end server listening on port ${frontendServerPort}`)
})
