// import express
const express = require('express')
const session = require('express-session')
const passport = require('./lib/passport')

// import router(s)
const router = require('./router')

// init app
const port = 3000
const app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

// init middlewares
app.use(express.urlencoded({extended: false})) // parsing form middleware

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

// init passport
app.use(passport.initialize())
app.use(passport.session())

app.use(router)


app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})
