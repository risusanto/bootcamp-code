const router = require('express').Router()
const auth = require('./controllers/auth')
const authorize = require('./middlewares/jwt')

router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/profile', authorize ,auth.profile)

module.exports = router