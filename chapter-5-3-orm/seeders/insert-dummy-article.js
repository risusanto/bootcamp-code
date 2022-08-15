module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Articles", [
            {
                title: "Hello world!!",
                body: "Lorem ipsum dolor sit amet",
                is_approved: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Articles", null, {})
    }
}