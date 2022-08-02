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

module.exports = user_router