const router = require('express').Router()
const auth = require('./controllers/auth')
const authorize = require('./middlewares/jwt')

router.post('/register', auth.register)
router.post('/login', auth.login)
router.post('/login/google', auth.login_with_google)
router.get('/profile', authorize ,auth.profile)

router.get('/login/google', auth.login_with_google_page)

module.exports = router