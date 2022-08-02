const express = require('express')

const user_router = express.Router()

function check_username_middleware(req, res, next) {
    if (req.headers['username'] === undefined) {
        res.status(401)
        return res.json({
            "message": "unauthorized"
        })
    }
    next()
}

// init router level middleware
user_router.use(check_username_middleware)

user_router.get('/', function (req, res) {
    let username = req.headers['username']
    res.json({
        "username": username
    })
})

user_router.post('/alamat/add', function (req, res) {
    let body = req.body

    let res_data = {
        "username": req.headers['username'],
        "address": body
    }
    res.json(res_data)
})

user_router.post('/saldo/add', function (req, res) {
    let body = req.body
    res.json(body)
})


module.exports = user_router