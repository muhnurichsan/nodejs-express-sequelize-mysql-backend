const models = require('../models')
const TransactionDetail = models.Transaction_Detail

exports.CreateNewTransactionDetail = (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: "Content can't be empty"
        })
    }
    const { TransactionId, ProductId } = req.body
    const newTransactionDetail = {
        TransactionId: TransactionId,
        ProductId: ProductId
    }
    TransactionDetail.create(newTransactionDetail).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.FindAllTransactionDetails = (req, res) => {
    TransactionDetail.findAll()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(404).json(err)
        })
}
exports.DeleteTransactionDetailById = (req, res) => {
    const id = req.params.id
    TransactionDetail.destroy({
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
exports.FindTransactionDetailById = (req, res) => {
    const id = req.params.id
    TransactionDetail.findOne({
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
exports.UpdateTransactionDetailById = (req, res) => {
    const id = req.params.id
    TransactionDetail.update(req.body, {
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
    TransactionDetail.destroy({
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