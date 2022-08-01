const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    let username = req.headers['username']
    if (username === undefined) {
        res.status(401)
        return res.send("unauthorized")
    }
    res.send(`Hello ${username}, welcome back!`)
})

router.get('/time', function (req, res) {
    res.send(new Date().toISOString())
})

// ini bakalan diaksesnya seperti ini->  http://localhost:8080/info/check-id?name=Ari&age=17&query=dasdasdas
router.get('/check-id', function (req, res) {
    let name = req.query["name"]
    let age = parseInt(req.query["age"])
    let query = req.query["query"]

    res.send(`Name: ${name} | Age: ${age} | Query: ${query}`)
})

// contoh cara akses->  http://localhost:8080/info/hitung-luas?p=5&l=2
router.get('/hitung-luas', function (req, res) {
    let panjang = parseInt(req.query["p"])
    let lebar  = parseInt(req.query["l"])

    let luas = panjang * lebar

    res.send(`luas persegi panjang: ${luas}`)
})


// path parameter, cara akses contoh  http://localhost:8080/info/get-lastname/susanto atau  http://localhost:8080/info/get-lastname/smith
router.get('/get-lastname/:lastname', function (req, res) {
    let lastname = req.params["lastname"]
    res.send(`Lastname: ${lastname}`)
})

module.exports = router