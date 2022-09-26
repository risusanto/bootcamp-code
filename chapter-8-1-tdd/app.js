const express = require('express')

const baseController = require('./controllers/baseController')


const app = express()
app.use(express.json())

app.get('/', baseController.hello)
app.post('/sum', baseController.sum)

module.exports = app