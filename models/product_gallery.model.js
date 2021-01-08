'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product_galleries extends Model {
        static associate(models) {
            this.belongsTo(models.Product)
        }
    };
    product_galleries.init({
        photo: DataTypes.STRING,
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: 'Product_Gallery',
    });
    return product_galleries;
};