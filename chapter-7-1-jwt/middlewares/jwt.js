const jwt = require('jsonwebtoken')

const UNAUTHORIZED = {
    status: 'failed',
    message: 'unauthorized'
}

// Bearer <token>
// <token>
function get_token(auth_header) {
    let header_split = auth_header.split(' ')
    if(header_split.length > 1) {
        return header_split[1]
    }
    return header_split[0]
}

function authorize(req, res, next) {
    if(typeof req.headers['authorization'] != "string") {
        return res.status(401).json(UNAUTHORIZED)
    }

    let token = get_token(req.headers['authorization'])
    let payload = null
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return res.status(401).json(UNAUTHORIZED)
    }

    // set payload (jwt claims) ke request
    req.user = {
        id: payload.id,
        name: payload.name,
        email: payload.email
    }
    next()
}

module.exports = authorize