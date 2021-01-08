const models = require('../models')
const Transaction = models.Transaction

exports.CreateNewTransaction = (req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: "Content can't be empty"
        })
    }
    const { name, email, address, transaction_total, transaction_status } = req.body
    const newTransaction = {
        name: name,
        email: email,
        address: address,
        transaction_total: transaction_total,
        transaction_status: transaction_status
    }
    Transaction.create(newTransaction).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}
exports.FindAllTransactions = (req, res) => {
    Transaction.findAll({
            include: [models.Transaction_Detail]
        })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(404).json(err)
        })
}
exports.DeleteTransactionById = (req, res) => {
    const id = req.params.id
    Transaction.destroy({
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
exports.FindTransactionById = (req, res) => {
    const id = req.params.id
    Transaction.findOne({
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
exports.UpdateTransactionById = (req, res) => {
    const id = req.params.id
    Transaction.update(req.body, {
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