'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transaction_Detail extends Model {

        static associate(models) {
            this.belongsTo(models.Product)
            this.belongsTo(models.Transaction)
        }
    };
    Transaction_Detail.init({}, {
        sequelize,
        modelName: 'Transaction_Detail',
        paranoid: true,
        timestamps: true
    });
    return Transaction_Detail;
};