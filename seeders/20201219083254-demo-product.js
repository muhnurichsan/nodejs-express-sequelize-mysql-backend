'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('products', [{
            name: "supreme chill bag",
            type: "sling bag",
            slug: "supreme-bag",
            price: 100,
            quantity: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: new Date()
        }])
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('products', null, {})
    }
};