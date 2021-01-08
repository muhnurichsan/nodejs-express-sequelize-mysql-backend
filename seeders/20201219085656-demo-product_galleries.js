'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('product_galleries', [{
            photo: "photo-name-test",
            createdAt: new Date(),
            updatedAt: new Date(),
            productId: 1,
            deletedAt: new Date()
        }])
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('product_galleries', null, {})
    }
};