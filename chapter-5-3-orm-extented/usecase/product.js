const {Product} = require('../models')

module.exports = {
    getAllProduct: async () => {
        return await Product.findAll()
    },
    getProductByID: async (id) => {
        return await Product.findOne({
            where: {id: id}
        })
    }
}