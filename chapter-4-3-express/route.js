const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send("My Server localhost")
})

router.get('/time', function (req, res) {
    res.send(new Date().toISOString())
})

module.exports = router