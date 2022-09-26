const request = require('supertest')

const app = require('../app')


describe('API integration test', () => {
    test('test GET /', () => {
        request(app).get('/').then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
})