const baseController = require('../controllers/baseController')

const mockRequest = (body = {}, params = {}, query = {}) => {
    return {
        body: body,
        params: params,
        query: query,
    }
}

const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
}

// test suite
describe('Base Controller test', () => {
    // define test cases
    test('test hello world controller', (done) => {
        const req = mockRequest()
        const res = mockResponse()

        baseController.hello(req, res)

        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            message: "hello world!"
        })

        done()
    })

    test('test sum controller (1 +2)', () => {
        const req = mockRequest({x: 1, y: 2})
        const res = mockResponse()

        baseController.sum(req, res)
        expect(res.json).toBeCalledWith({
            message: 3
        })
    })

    test('test sum controller (3 + 4)', () => {
        const req = mockRequest({x: 3, y: 4})
        const res = mockResponse()

        baseController.sum(req, res)
        expect(res.json).toBeCalledWith({
            message: 7
        })
    })

    test('test tambah string', () => {
        const req = mockRequest({x: '3', y: '4'})
        const res = mockResponse()

        baseController.sum(req, res)
        expect(res.json).toBeCalledWith({
            message: '34'
        })
    })

    test('invalid parameter', () => {
        const req = mockRequest({x: undefined, y: '4'})
        const res = mockResponse()

        baseController.sum(req, res)
        expect(res.status).toBeCalledWith(400)
    })
})