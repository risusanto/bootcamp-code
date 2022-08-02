const express = require('express')
const morgan = require('morgan')

// routers
const user_router = require('./user_router')

// server info
const host = 'localhost'
const port = 8080

// init express App
const app = express()

// application level middleware
app.use(morgan('combined'))

// built-in express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

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

app.get('/error', function (req, res) {
    inn
    res.json({
        msg: "ok"
    })
})

function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.json({
        msg: err.message
    })
}

app.use(errorHandler)



app.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`)
})