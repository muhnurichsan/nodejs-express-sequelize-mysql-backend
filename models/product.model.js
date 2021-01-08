'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.hasMany(models.Transaction_Detail)
            this.hasMany(models.Product_Gallery)
        }
    };
    Product.init({
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        slug: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: 'Product',
    });
    return Product;
};