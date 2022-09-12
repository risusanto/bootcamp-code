const router = require('express').Router()
const restrict = require('./middlewares/restrict')
const auth = require('./controllers/authController')

router.get('/login', auth.login_page)
router.get('/register', auth.register_page)

router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/profile',restrict, auth.profile)

module.exports = router