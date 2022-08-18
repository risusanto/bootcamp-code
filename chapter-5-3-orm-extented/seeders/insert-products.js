module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Products", [
            {
                name: "Karung",
                price: 25000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Teh Botol",
                price: 10000,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Products", null, {})
    }
}