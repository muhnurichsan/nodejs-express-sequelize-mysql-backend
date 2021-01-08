'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        static associate(models) {
            this.hasMany(models.Transaction_Detail)
        }
    };
    Transaction.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        transaction_total: DataTypes.INTEGER,
        transaction_status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Transaction',
        paranoid: true,
        timestamps: true
    });
    return Transaction;
};