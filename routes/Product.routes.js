module.exports = (app) => {
    const ProductController = require('../controllers/Product.controller')
    const router = require('express').Router()

    //Middleware Implementation
    const isAuth = require('../middleware/AuthToken')

    //endpoints
    router.get('/', ProductController.FindAllProducts)
    router.post('/', ProductController.CreateNewProduct)
    router.delete('/:id', ProductController.DeleteProductById)
    router.get('/:id', ProductController.FindProductById)
    router.put("/:id", ProductController.UpdateProductById)
    app.use('/api/v1/products', router)
}