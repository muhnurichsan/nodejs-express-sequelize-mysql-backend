module.exports = (app) => {
    const ProductGalleryController = require('../controllers/ProductGallery.controller')
    const router = require('express').Router()

    //middleware implementations
    const uploads = require('../middleware/ImageUploads')


    //endpoints
    router.get('/', ProductGalleryController.FindAllProductGalleries)
    router.post('/', uploads.single('photo'), ProductGalleryController.CreateNewProductGallery)
    router.delete('/:id', ProductGalleryController.DeleteProductGalleryById)
    router.get('/:id', ProductGalleryController.FindProductGalleryById)
    router.put("/:id", ProductGalleryController.UpdateProductGalleryById)
    app.use('/api/v1/product_galleries', router)
}