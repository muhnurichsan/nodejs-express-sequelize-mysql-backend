module.exports = (app) => {
    const AuthController = require('../controllers/Authentication.controller')
    const router = require('express').Router()


    //endpoints
    router.post('/login', AuthController.Login)
    router.post('/token', AuthController.GenerateRefreshToken)
    router.delete('/logout', AuthController.Logout)
    app.use('/api/v1', router)
}