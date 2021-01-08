module.exports = (app) => {
    const TransactionController = require('../controllers/Transaction.controller')
    const router = require('express').Router()

    //endpoints
    router.get('/', TransactionController.FindAllTransactions)
    router.post('/', TransactionController.CreateNewTransaction)
    router.delete('/:id', TransactionController.DeleteTransactionById)
    router.get('/:id', TransactionController.FindTransactionById)
    router.put("/:id", TransactionController.UpdateTransactionById)
    app.use('/api/v1/transactions', router)
}