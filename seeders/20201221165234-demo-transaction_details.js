'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('transaction_details', [{
            transactionId: 1,
            productId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: new Date()
        }])
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete('transaction_details', null, {});

    }
};