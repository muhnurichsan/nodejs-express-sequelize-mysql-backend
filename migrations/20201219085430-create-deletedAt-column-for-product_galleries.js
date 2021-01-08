'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.addColumn('product_galleries', 'deletedAt', {
            type: Sequelize.DATE
        })
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.removeColumn('products_galleries', 'deletedAt')
    }
};