const models = require('../models')
const Product = models.Product

exports.CreateNewProduct = (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: "Content can't be empty"
        })
    }
    const { name, type, slug, price, quantity } = req.body
    const newProduct = {
        name: name,
        type: type,
        slug: slug,
        price: price,
        quantity: quantity
    }
    Product.create(newProduct).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.FindAllProducts = (req, res) => {
    Product.findAll({
            include: [models.Product_Gallery, models.Transaction_Detail]
        })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(404).json(err)
        })
}
exports.DeleteProductById = (req, res) => {
    const id = req.params.id
    Product.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            message: "Data Successfully deleted",
        })
    }).catch(err => {
        res.status(500).json({
            message: err || 'error while delete data'
        })
    })
}
exports.FindProductById = (req, res) => {
    const id = req.params.id
    Product.findOne({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({
            message: err || 'error while delete data'
        })
    })
}
exports.UpdateProductById = (req, res) => {
    const id = req.params.id
    Product.update(req.body, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            message: "Data Successfully updated",
        })
    }).catch(err => {
        res.status(500).json({
            message: err || 'error while update data'
        })
    })
}