module.exports = {
    hello: (req, res) => {
        res.status(200).json({
            message: "hello world!"
        })
    },
    sum: (req, res) => {
        let x = req.body.x
        let y = req.body.y
        res.json({
            message: x + y
        })
    }
}