const models = require('../models')
const ProductGallery = models.Product_Gallery

exports.CreateNewProductGallery = (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: "Content can't be empty"
        })
    }
    const { ProductId } = req.body
    const newProductGallery = {
        photo: req.protocol + "://" + req.get('host') + "/public/uploads/" + req.file.filename,
        ProductId: ProductId
    }
    ProductGallery.create(newProductGallery).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.FindAllProductGalleries = (req, res) => {
    ProductGallery.findAll()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(404).json(err)
        })
}
exports.DeleteProductGalleryById = (req, res) => {
    const id = req.params.id
    ProductGallery.destroy({
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
exports.FindProductGalleryById = (req, res) => {
    const id = req.params.id
    ProductGallery.findOne({
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
exports.UpdateProductGalleryById = (req, res) => {
    const id = req.params.id
    ProductGallery.update(req.body, {
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
exports.DeleteAllProductGalleries = (req, res) => {
    ProductGallery.destroy({
        truncate: true
    }).then(() => {
        res.status(200).json({
            message: "All Data Successfully Deleted",
        })
    }).catch(err => {
        res.status(500).json({
            message: err || 'Error While Delete Data'
        })
    })
}