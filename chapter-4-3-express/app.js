const express = require('express')
const info_router = require('./route')
const app = express()

const host = 'localhost';
const port = 8080;

let handler1 = function (req, res) {
    res.send('Hello World')
}

let handler2 = function (req, res) {
    res.send('Ini hello')
}

app.get('/', handler1)
app.get('/hello', handler2)

// ini cara pakai router yg didefinisikan di route.js
app.use('/info',info_router)

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})