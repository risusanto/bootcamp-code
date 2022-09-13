require('dotenv').config()
const express = require('express')
const router = require('./router')

const port = process.env.APP_PORT
const host = process.env.APP_HOST

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        app_name: process.env.APP_NAME,
        date: new Date().toISOString()
    })
})

app.use(router)

app.listen(port, host, () => {
    console.log(`app running at http://${host}:${port}`)
})
