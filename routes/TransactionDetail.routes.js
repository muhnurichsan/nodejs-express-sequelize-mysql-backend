module.exports = (app) => {
    const TransactionDetailController = require('../controllers/TransactionDetail.controller')
    const router = require('express').Router()

    //endpoints
    router.get('/', TransactionDetailController.FindAllTransactionDetails)
    router.post('/', TransactionDetailController.CreateNewTransactionDetail)
    router.delete('/:id', TransactionDetailController.DeleteTransactionDetailById)
    router.get('/:id', TransactionDetailController.FindTransactionDetailById)
    router.put("/:id", TransactionDetailController.UpdateTransactionDetailById)
    app.use('/api/v1/transaction_details', router)
}