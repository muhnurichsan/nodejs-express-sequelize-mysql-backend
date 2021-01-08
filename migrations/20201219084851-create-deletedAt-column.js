'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.addColumn('products', 'deletedAt', {
            type: Sequelize.DATE
        })
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.removeColumn('products', 'deletedAt')
    }
};