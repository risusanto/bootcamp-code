const express = require('express')

// routers
const user_router = require('./user_router')

// server info
const host = 'localhost'
const port = 8080

// init express App
const app = express()

function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`)
    next()
}

// application level middleware
app.use(logger)

// use external router
app.use('/user', user_router)

// app level router
app.get('/', function (req, res) {
    let res_data = {
        "hostname": host,
        "port": port
    }
    res.json(res_data)
})

app.get('/date', function (req, res) {
    let date = new Date()
    res.json({
        "datetime": date.toISOString(),
        "timestamp": date.getTime()
    })
})



app.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`)
})