const express = require('express')
const uc = require('./usecase/product')

app = express()

app.get('/', async (req, res) =>{
    let products = await uc.getAllProduct()
    return res.json({
        status: 'ok',
        message: 'success',
        data: products
    })
})

app.get('/:id', async (req,res) => {
    let product = await uc.getProductByID(parseInt(req.params['id']))
    return res.json({
        status: 'ok',
        message: 'success',
        data: product
    })
})

app.listen(8080, 'localhost', () => {
    console.log(`running at http://localhost:8080`)
})