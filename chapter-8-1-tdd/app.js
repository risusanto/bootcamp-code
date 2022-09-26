const express = require('express')

const baseController = require('./controllers/baseController')


const app = express()
app.use(express.json())

app.get('/', baseController.hello)
app.post('/sum', baseController.sum)

app.listen(3000, () => {
    console.log('running at http://localhost:3000')
})