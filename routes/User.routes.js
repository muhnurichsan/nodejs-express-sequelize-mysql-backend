module.exports = (app) => {
    const UserController = require('../controllers/User.controller')
    const router = require('express').Router()

    //Middleware Implementation
    const isAuth = require('../middleware/AuthToken')

    //endpoints
    router.get('/', UserController.FindAllUsers)
    router.post('/', UserController.CreateNewUser)
    router.delete('/:id', UserController.DeleteUserById)
    router.get('/:id', UserController.FindUserById)
    router.put("/:id", UserController.UpdateUserById)
    app.use('/api/v1/users', isAuth, router)
}