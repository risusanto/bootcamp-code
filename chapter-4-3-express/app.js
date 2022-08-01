const express = require('express')
const info_router = require('./route')
const app = express()

const host = 'localhost';
const port = 8080;


app.get('/', function (req, res) {
    res.send('Hello World')
})

// ini cara pakai router yg didefinisikan di route.js
app.use('/info',info_router)

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})