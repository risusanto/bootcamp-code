const express = require('express')
const socketIO = require('socket.io')

const app = express()
let server = app.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})

// init socket io
const io = socketIO(server)

io.use((socket, next) => {
    let username = socket.handshake.headers['username']
    if(typeof username != "string" || username === "") {
       return next(new Error('socket authorization failed'))
    }
    socket.handshake.auth.username = username
    next()
})

io.on('connection', (socket) => {
    let username = socket.handshake.auth.username
    console.log(`${username} connected`)

    socket.join(username)

    // event listener chatMessage
    socket.on('chatMessage', (msg) => {
        let message = {
            from: username,
            ...msg
        }
        socket.to(message.to).emit('onNewMessage', message)
    })

    socket.on('disconnect', () => {
        console.log(`${username} disconnected`)
    })
})




