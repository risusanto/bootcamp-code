const {OAuth2Client} = require('google-auth-library');

async function verify(token) {
    const client_id = process.env.GOOGLE_APP_ID
    const client = new OAuth2Client(client_id)

    let ticket = await client.verifyIdToken({
        idToken: token,
        audience: client_id
    })

    return ticket.getPayload()
}

module.exports = verify