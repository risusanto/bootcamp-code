const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const bcrypt = require('bcrypt')

const {User} = require('../models')


async function authenticate(username, password, done) {
    try{
        let user = await User.findOne({
            where: {
                username: username
            }
        })
        if(!user) {
            return done(null, false, {message: "incorrect username or password"})
        }
        if(!await bcrypt.compare(password, user.password)) {
            return done(null, false, {message: "incorrect username or password"})
        }

        return done(null, user)
    } catch (e) {
        return done(null,false, {message: e.message})
    }
}

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, authenticate))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id,done) => {
    const user = await User.findOne({
        where: {
            id: id
        }
    })
    done(null, user)
})


module.exports = passport