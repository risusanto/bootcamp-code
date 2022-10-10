const express = require('express')
const socketIO = require('socket.io')

const app = express()
let server = app.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})

const LISTENER = {
    ChatMessage: 'chatMessage',
    Connect: 'connection',
    Disconnect: 'disconnect'
}

const EMITTER = {
    OnNewMessage: 'onNewMessage'
}

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

io.on(LISTENER.Connect, (socket) => {
    let username = socket.handshake.auth.username
    console.log(`${username} connected`)

    socket.join(username)

    // event listener chatMessage
    socket.on(LISTENER.ChatMessage, (msg) => {
        let message = {
            from: username,
            ...msg
        }
        socket.to(message.to).emit(EMITTER.OnNewMessage, message)
    })

    socket.on(LISTENER.Disconnect, () => {
        console.log(`${username} disconnected`)
    })
})




