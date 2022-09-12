const bcrypt = require('bcrypt')
const {User} = require('../models')
const passport = require('../lib/passport')

function login_page(req, res) {
    let message = ''
    if(req.session) {
        if(req.session.messages) {
            message = req.session.messages[0]
        }
    }

    res.render('login', {messages: message})
}

function register_page(req, res) {
    res.render('register')
}


function register(req, res) {
    let username = req.body['username']
    let password = req.body['password']

    // hash password
    let hashed_password = bcrypt.hashSync(password, 10)

    User.create({
        username: username,
        password: hashed_password
    }).then(user => {
        res.redirect('/login')
    })
}

const login = passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureMessage: true
})

function profile(req, res) {
    res.render('profile', {user: req.user})
}



module.exports = {
    login_page,
    register_page,
    register,
    login,
    profile
}
